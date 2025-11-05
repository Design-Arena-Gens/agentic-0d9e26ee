import './globals.css';

export const metadata = {
  title: 'What is Copywriting? | A Clear, Practical Guide',
  description:
    'Understand what copywriting is, why it matters, and how it works?examples, formats, and tips in a concise guide.',
  metadataBase: new URL('https://agentic-0d9e26ee.vercel.app'),
  openGraph: {
    title: 'What is Copywriting? | A Clear, Practical Guide',
    description:
      'Understand what copywriting is, why it matters, and how it works?examples, formats, and tips in a concise guide.',
    url: 'https://agentic-0d9e26ee.vercel.app',
    siteName: 'Copywriting Guide',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Copywriting? | A Clear, Practical Guide',
    description:
      'Understand what copywriting is, why it matters, and how it works?examples, formats, and tips in a concise guide.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
          <footer className="footer">
            <span>? {new Date().getFullYear()} Copywriting Guide</span>
          </footer>
        </main>
      </body>
    </html>
  );
}
