
import './globals.css';

export const metadata = {
  title: 'Vedant Portfolio',
  description: 'Portfolio Website',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#02040a] to-[#081226] text-white">{children}</body>
    </html>
  );
}
