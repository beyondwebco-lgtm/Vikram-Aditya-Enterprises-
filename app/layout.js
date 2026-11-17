import "./globals.css";

export const metadata = {
  title: "Vikram Aditya Enterprises | Safety Nets & Invisible Grills in Chennai",
  description:
    "Professional safety nets and invisible grill installation services in Chennai. We specialize in Balcony Safety Nets, Invisible Grills, Pigeon Nets, Children Safety Nets, Duct Nets, and Box Cricket Nets. Call/WhatsApp: 7095714788.",
  keywords: [
    "safety nets chennai",
    "invisible grills chennai",
    "balcony safety nets",
    "pigeon safety nets",
    "children safety nets",
    "duct area safety nets",
    "box cricket nets chennai",
    "pallikaranai safety nets",
    "vikram aditya enterprises",
  ],
  authors: [{ name: "Vikram Aditya Enterprises" }],
  creator: "Vikram Aditya Enterprises",
  publisher: "Vikram Aditya Enterprises",
  openGraph: {
    title: "Vikram Aditya Enterprises | Premium Safety Nets & Invisible Grills",
    description:
      "Protect your loved ones with high-tensile safety nets and modern invisible grills in Chennai. Fast installation, certified materials, and free inspection. Call 7095714788.",
    type: "website",
    locale: "en_IN",
    siteName: "Vikram Aditya Enterprises",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Vikram Aditya Enterprises",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "telephone": "+917095714788",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 17, Vivekananda Nagar, Sai Ganesh Nagar 1st Main Road, Vivekanandar Nagar, Pallikaranai",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600100",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9233852",
      "longitude": "80.1983084"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "priceRange": "₹₹",
    "areaServed": "Chennai, Tamil Nadu"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-slate-800 bg-white selection:bg-brand-yellow-200 selection:text-brand-blue-900">
        {children}
      </body>
    </html>
  );
}
