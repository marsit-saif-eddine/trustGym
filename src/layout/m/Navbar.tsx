"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/../public/images/trustgym-logo.png";
import Link from "next/link";
import { ChevronDown, Calendar, Wallet, Store, Lock, Settings, Users } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { FiHome } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";

interface MNavBarProps {
  isSidebarOpen: boolean;
}

const MNavBar: React.FC<MNavBarProps> = ({ isSidebarOpen }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className={`fixed md:relative flex flex-col w-4/5 md:w-1/5 h-screen justify-start items-center p-4 bg-card transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 z-100`}>
      <Image src={logo} alt="logo" objectPosition="center" objectFit="cover" className="w-44" />
      <div className="flex flex-col gap-2.5 mt-5 w-full px-2">
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('members')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'members' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Users className="size-5" />
              Gestion des membres
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'members' ? '-rotate-90' : ''}`} />
          </button>
          {activeMenu === 'members' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md md:absolute md:left-full md:top-0 md:w-48">
              <Link href="/members/member" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Membre</Link>
              <Link href="/members/abonnement" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Abonnement</Link>
              <Link href="/members/echeances" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Échéances</Link>
              <Link href="/members/assurance" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Assurance</Link>
              <Link href="/members/deblocage" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Déblocage</Link>
              <Link href="/members/dashboard" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Dashboard</Link>
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('planning')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'planning' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Calendar className="size-5" />
              Planning
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'planning' ? '-rotate-90' : ''}`} />
          </button>
          {activeMenu === 'planning' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md md:absolute md:left-full md:top-0 md:w-48">
              {/* Add planning subitems here */}
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('finance')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'finance' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Wallet className="size-5" />
              Gestion financière
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'finance' ? '-rotate-90' : ''}`} />
          </button>
          {activeMenu === 'finance' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md md:absolute md:left-full md:top-0 md:w-48">
              {/* Add finance subitems here */}
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('boutique')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'boutique' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Store className="size-5" />
              Boutique
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'boutique' ? '-rotate-90' : ''}`} />
          </button>
          {activeMenu === 'boutique' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md md:absolute md:left-full md:top-0 md:w-48">
              {/* Add boutique subitems here */}
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('overview')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'overview' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Lock className="size-5" />
              Vue globale
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'overview' ? '-rotate-90' : ''}`} />
          </button>
          {activeMenu === 'overview' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md md:absolute md:left-full md:top-0 md:w-48">
              {/* Add overview subitems here */}
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('access')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'access' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Lock className="size-5" />
              Gestion des access
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'access' ? '-rotate-90' : ''}`} />
          </button>
          {activeMenu === 'access' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md md:absolute md:left-full md:top-0 md:w-48">
              {/* Add access subitems here */}
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('settings')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'settings' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Settings className="size-5" />
              Paramètres
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'settings' ? '-rotate-90' : ''}`} />
          </button>
          {activeMenu === 'settings' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md md:absolute md:left-full md:top-0 md:w-48">
              {/* Add settings subitems here */}
            </div>
          )}
        </div>
      </div>
      <ModeToggle />

      <div className="md:hidden flex flex-col items-center mt-auto gap-4">
        <div className="flex items-center gap-2 bg-[hsl(var(--primary))] px-4 py-2 rounded-[6px] cursor-pointer">
          <FiHome className="text-[hsl(var(--primary-foreground))] w-6 h-6" />
          <span className="text-[hsl(var(--primary-foreground))]">Accueil</span>
        </div>
        <div className="flex items-center gap-2 bg-[hsl(var(--secondary))] px-4 py-2 rounded-[6px] cursor-pointer">
          <HiOutlineLogout className="text-[hsl(var(--primary))] w-6 h-6" />
          <span className="text-[hsl(var(--primary))]">Déconnexion</span>
        </div>
      </div>

    </nav>
  );
};

export default MNavBar;
