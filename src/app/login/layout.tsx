export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen flex items-start justify-center pt-14">
      {children}
    </section>
  );
}
