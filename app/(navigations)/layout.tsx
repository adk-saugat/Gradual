import NavBar from "./NavBar";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="p-4 bg-gray-50">{children}</main>
    </>
  );
}
