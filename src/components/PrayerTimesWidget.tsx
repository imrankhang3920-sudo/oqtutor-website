"use client";

import { useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// Prayer Times Widget — OQTutor
// Uses the free Aladhan API (https://aladhan.com/prayer-times-api) for
// timings, and OpenStreetMap Nominatim (free, no key) for geocoding — this
// covers small towns/qasbas that Aladhan's own city search misses.
// ---------------------------------------------------------------------------

type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

const CALC_METHODS = [
  { id: 1, label: "University of Islamic Sciences, Karachi" },
  { id: 2, label: "Islamic Society of North America (ISNA)" },
  { id: 3, label: "Muslim World League" },
  { id: 4, label: "Umm Al-Qura, Makkah" },
  { id: 5, label: "Egyptian General Authority" },
  { id: 12, label: "Union des Organisations Islamiques de France" },
  { id: 11, label: "Majlis Ugama Islam Singapura" },
];

function formatTime(t: string) {
  return t.split(" ")[0];
}

export default function PrayerTimesWidget() {
  const [locationInput, setLocationInput] = useState("Bahawalpur, Pakistan");
  const [placeName, setPlaceName] = useState("Bahawalpur");
  const [method, setMethod] = useState(1);
  const [showMethodPicker, setShowMethodPicker] = useState(false);
  const [timings, setTimings] = useState<Timings | null>(null);
  const [gregorian, setGregorian] = useState("");
  const [hijri, setHijri] = useState("");
  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const applyTimingsResponse = (data: any) => {
    setTimings(data.data.timings);
    setGregorian(data.data.date.readable);
    const h = data.data.date.hijri;
    setHijri(`${h.day} ${h.month.en} ${h.year}`);
  };

  const fetchByCoords = async (lat: number, lon: number, m: number) => {
    const res = await fetch(
      `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${m}`
    );
    const data = await res.json();
    if (data.code !== 200) throw new Error("Could not resolve location");
    applyTimingsResponse(data);
  };

  const searchLocation = async (query: string, m: number) => {
    setLoading(true);
    setError(null);
    try {
      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&format=json&limit=1`
      );
      const geoData = await geoRes.json();
      if (!geoData || geoData.length === 0) throw new Error("not found");
      const { lat, lon, display_name } = geoData[0];
      setPlaceName(display_name.split(",").slice(0, 2).join(","));
      await fetchByCoords(parseFloat(lat), parseFloat(lon), m);
    } catch {
      setError(
        "Couldn't find that place — try the nearest bigger city or district name."
      );
      setTimings(null);
    } finally {
      setLoading(false);
    }
  };

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation isn't supported in this browser.");
      return;
    }
    setLocating(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const rev = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const revData = await rev.json();
          const name = revData?.display_name?.split(",").slice(0, 2).join(",");
          setPlaceName(name || "Your location");
          setLocationInput(name || "");
        } catch {
          setPlaceName("Your location");
        }
        setLoading(true);
        try {
          await fetchByCoords(latitude, longitude, method);
        } catch {
          setError("Couldn't fetch timings for your location.");
        } finally {
          setLoading(false);
          setLocating(false);
        }
      },
      () => {
        setLocating(false);
        setError("Location access denied — search by city instead.");
      }
    );
  };

  useEffect(() => {
    searchLocation(locationInput, method);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchLocation(locationInput, method);
  };

  const handleMethodChange = (id: number) => {
    setMethod(id);
    setShowMethodPicker(false);
    searchLocation(locationInput, id);
  };

  const rows: { label: string; key: keyof Timings }[] = [
    { label: "Fajr", key: "Fajr" },
    { label: "Sunrise", key: "Sunrise" },
    { label: "Dhuhr", key: "Dhuhr" },
    { label: "Asr", key: "Asr" },
    { label: "Maghrib", key: "Maghrib" },
    { label: "Isha", key: "Isha" },
  ];

  const methodLabel =
    CALC_METHODS.find((m) => m.id === method)?.label ?? "Custom";

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 mb-6 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm"
      >
        <svg
          className="w-4 h-4 text-gray-400 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder="Search city, country"
          className="flex-1 text-sm outline-none bg-transparent"
        />
        <button
          type="button"
          onClick={useMyLocation}
          disabled={locating}
          title="Use my current location"
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
        >
          <svg
            className={`w-4 h-4 text-emerald-700 ${
              locating ? "animate-pulse" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3m0 14v3M2 12h3m14 0h3"
            />
          </svg>
        </button>
      </form>

      {/* Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Prayer times in {placeName}
            </h2>
          </div>
          {gregorian && (
            <div className="text-right text-sm text-gray-500 shrink-0">
              <p>{gregorian}</p>
              <p className="font-medium text-gray-700">{hijri}</p>
            </div>
          )}
        </div>

        {loading && (
          <p className="text-sm text-gray-400 mb-4">Loading timings...</p>
        )}
        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        {timings && !loading && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4">
              {rows.map((r) => (
                <div
                  key={r.key}
                  className="bg-gray-50 rounded-xl px-3 py-4 text-center"
                >
                  <p className="text-xs text-gray-500 mb-1">{r.label}</p>
                  <p className="text-base font-semibold text-gray-900">
                    {formatTime(timings[r.key])}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-800 font-medium">
                {methodLabel}
              </span>
              <button
                type="button"
                onClick={() => setShowMethodPicker((s) => !s)}
                className="text-emerald-700 font-medium hover:underline"
              >
                Change
              </button>
            </div>

            {showMethodPicker && (
              <div className="mt-3 border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden">
                {CALC_METHODS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleMethodChange(m.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${
                      m.id === method
                        ? "text-emerald-700 font-medium bg-emerald-50"
                        : "text-gray-700"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <p className="text-xs text-gray-400 text-center mt-3">
        Prayer times by Aladhan API &middot; Location by OpenStreetMap
      </p>
    </div>
  );
}
