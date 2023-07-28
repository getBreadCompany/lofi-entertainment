export default function AboutUsLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
