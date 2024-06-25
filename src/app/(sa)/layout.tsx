import SaNavBar from "@/layout/sa/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex'>
      <SaNavBar />

      <div className='flex w-4/5 flex-col bg-secondary h-screen'>
        {children}
      </div>
    </section>
  );
}
