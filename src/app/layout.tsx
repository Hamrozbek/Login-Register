import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">

        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/vd.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay (ko‘rinish yaxshilash uchun) */}
        <div className="fixed inset-0 bg-black/60 -z-10"></div>

        {children}
      </body>
    </html>
  );
}
