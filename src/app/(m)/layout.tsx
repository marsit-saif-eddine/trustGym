"use client";

import React, { useState } from "react";
import MNavBar from "@/layout/m/Navbar";
import TopNavBar from "@/layout/TopNavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className='flex h-screen'>
      <MNavBar isSidebarOpen={isSidebarOpen} />
      <div className={`flex flex-col bg-primary-foreground w-full md:w-4/5 h-full overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-0' : 'ml-0 md:ml-0'}`}>
        <TopNavBar toggleSidebar={toggleSidebar} />
        <div className='mt-16 flex-1 overflow-y-auto'>
          {children}
        </div>
      </div>
    </section>
  );
}
