import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title:'HomeClinicStore | Better Healthcare Starts at Home', description:'Home medical equipment, remote patient monitoring and biomedical support for supported home medical equipment.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
