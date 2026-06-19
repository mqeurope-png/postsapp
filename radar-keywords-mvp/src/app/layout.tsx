import '@/styles/globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Radar Keywords Hashtags', description: 'MVP privado de radar editorial' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es"><body><div className="mx-auto max-w-7xl px-6 py-6"><header className="mb-8 flex items-center justify-between"><Link href="/" className="text-xl font-bold text-white">Radar Keywords Hashtags</Link><nav className="flex gap-4 text-sm"><Link href="/keywords">Keywords</Link><Link href="/imports">Importar</Link><Link href="/library">Biblioteca</Link><Link href="/api/posts/export.csv">Exportar CSV</Link></nav></header>{children}</div></body></html>; }
