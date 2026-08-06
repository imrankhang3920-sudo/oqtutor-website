import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { readDB } from '@/data/db';
import { Home, BookOpen, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const dbData = readDB();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar headerConfig={dbData.headerNav} />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center glass p-8 sm:p-12 rounded-3xl border border-card-border shadow-2xl space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary text-3xl font-extrabold mb-2">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-muted-text max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Explore our popular Quran courses or head back to the home page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/courses"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold transition-all flex items-center justify-center space-x-2"
            >
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Browse Courses</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer data={dbData.contact} footerConfig={dbData.footerNav} />
    </div>
  );
}
