"use client";

import React, { useState } from "react";
import SaNavBar from "@/layout/sa/Navbar";
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
    <section className='flex'>
      <SaNavBar />

      <div className='flex w-4/5 flex-col bg-secondary h-screen'>
      <TopNavBar toggleSidebar={toggleSidebar} />

        {children}
      </div>
    </section>
  );
}
