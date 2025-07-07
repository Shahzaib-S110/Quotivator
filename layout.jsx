export const metadata = {
  title: 'Inspirational Quotes',
  description: 'Quote Generator App with Dark Mode',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0, background: '#f4f4f4' }}>
        {children}
      </body>
    </html>
  );
}
