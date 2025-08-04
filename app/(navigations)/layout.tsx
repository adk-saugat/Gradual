import NavBar from "./NavBar";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="p-4">{children}</main>
    </>
  );
}
