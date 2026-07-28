"use client";

import { useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// Prayer Times Widget — OQTutor
// Uses the free Aladhan API (https://aladhan.com/prayer-times-api)
// No API key needed.
// ---------------------------------------------------------------------------

type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

type HijriDate = {
  day: string;
  month: { en: string };
  year: string;
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
  const [city, setCity] = useState("Bahawalpur");
  const [country, setCountry] = useState("Pakistan");
  const [method, setMethod] = useState(1);
  const [timings, setTimings] = useState<Timings | null>(null);
  const [hijri, setHijri] = useState<HijriDate | null>(null);
  const [gregorian, setGregorian] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);

  const fetchByCity = async (c: string, co: string, m: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(
          c
        )}&country=${encodeURIComponent(co)}&method=${m}`
      );
      const data = await res.json();
      if (data.code !== 200) throw new Error("City not found");
      setTimings(data.data.timings);
      setHijri(data.data.date.hijri);
      setGregorian(data.data.date.readable);
      setTimezone(data.data.meta.timezone);
    } catch (e) {
      setError("Location not found — check the city and country spelling.");
      setTimings(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchByCoords = async (lat: number, lon: number, m: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${m}`
      );
      const data = await res.json();
      if (data.code !== 200) throw new Error("Could not resolve location");
      setTimings(data.data.timings);
      setHijri(data.data.date.hijri);
      setGregorian(data.data.date.readable);
      setTimezone(data.data.meta.timezone);
    } catch (e) {
      setError("Couldn't fetch timings for your location.");
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
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        setCity("");
        setCountry("");
        fetchByCoords(pos.coords.latitude, pos.coords.longitude, method);
      },
      () => {
        setLocating(false);
        setError("Location access denied — search by city instead.");
      }
    );
  };

  useEffect(() => {
    fetchByCity(city, country, method);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchByCity(city, country, method);
  };

  const rows: { label: string; key: keyof Timings }[] = [
    { label: "Fajr", key: "Fajr" },
    { label: "Sunrise", key: "Sunrise" },
    { label: "Dhuhr", key: "Dhuhr" },
    { label: "Asr", key: "Asr" },
    { label: "Maghrib", key: "Maghrib" },
    { label: "Isha", key: "Isha" },
  ];

  return (
    <div className="max-w-md mx-auto rounded-2xl border border-emerald-100 bg-white shadow-sm p-6">
      <h2 className="text-xl font-semibold text-emerald-800 mb-1">
        Prayer Times
      </h2>
      {hijri && (
        <p className="text-sm text-gray-500 mb-1">
          {gregorian} &middot; {hijri.day} {hijri.month.en} {hijri.year} AH
        </p>
      )}
      {timezone && (
        <p className="text-xs text-gray-400 mb-4">Timezone: {timezone}</p>
      )}

      <button
        type="button"
        onClick={useMyLocation}
        disabled={locating}
        className="w-full mb-3 border border-emerald-200 text-emerald-800 rounded-lg py-2 text-sm font-medium hover:bg-emerald-50 transition-colors disabled:opacity-50"
      >
        {locating ? "Detecting your location..." : "Use my current location"}
      </button>

      <form onSubmit={handleSearch} className="flex flex-col gap-2 mb-5">
        <div className="flex gap-2">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <select
          value={method}
          onChange={(e) => setMethod(Number(e.target.value))}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          {CALC_METHODS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg py-2 text-sm font-medium transition-colors"
        >
          Get prayer times
        </button>
      </form>

      {loading && <p className="text-sm text-gray-400">Loading...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {timings && !loading && (
        <div className="divide-y divide-gray-100">
          {rows.map((r) => (
            <div
              key={r.key}
              className="flex justify-between items-center py-2.5"
            >
              <span className="text-gray-600 text-sm">{r.label}</span>
              <span className="font-medium text-gray-900 text-sm">
                {formatTime(timings[r.key])}
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-400 mt-4 text-center">
        Powered by Aladhan API
      </p>
    </div>
  );
}
