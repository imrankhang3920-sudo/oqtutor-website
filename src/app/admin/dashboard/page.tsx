import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyAdminTokenPayload } from '@/lib/auth';
import { getDBAsync } from '@/data/db';
import AdminDashboardClient from './AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const user = token ? verifyAdminTokenPayload(token) : null;

  if (!user) {
    redirect('/admin/login');
  }

  const initialData = await getDBAsync();

  return <AdminDashboardClient initialData={initialData} userRole={user.role} username={user.username} />;
}
