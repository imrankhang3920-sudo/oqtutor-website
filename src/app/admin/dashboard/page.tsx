import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import AdminDashboardClient from './AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const authorized = token ? verifyAdminToken(token) : false;

  if (!authorized) {
    redirect('/admin/login');
  }

  const initialData = readDB();

  return <AdminDashboardClient initialData={initialData} />;
}
