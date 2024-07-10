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
import { Button } from "@/components/ui/button";

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
    <nav className={`fixed md:relative flex flex-col w-4/5 md:w-1/5 h-screen justify-start items-center p-4 bg-card transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 z-20`}>
      <Image src={logo} alt="logo" objectPosition="center" objectFit="cover" className="w-44" />
      <div className="flex flex-col gap-2.5 mt-5 w-full px-2">
      <div className="relative flex flex-col w-full">
          <Link href="/dashboard">
            <button onClick={() => handleMenuClick('overview')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'overview' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
              <div className="flex items-center gap-2">
                <Users className="size-5" />
                Vue globale
              </div>
            </button>
          </Link>
        </div>
      <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('members')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'members' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Users className="size-5" />
              Gestion des membres
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'members' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'members' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md">
              <Link href="/members" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Dashboard</Link>
              <Link href="/members/abonnements" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Abonnement</Link>
              <Link href="/members/echeances" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Échéances</Link>
              <Link href="/members/assurances" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Assurance</Link>
              <Link href="/members/deblocages" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Déblocage</Link>
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('coaches')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'coaches' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Calendar className="size-5" />
              coaches
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'coaches' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'coaches' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md">
              <Link href="/coaches" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Dashboard</Link>
              <Link href="/coaches/cours" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Cours</Link>
              <Link href="/coaches/seances" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Séances</Link>
              <Link href="/coaches/planning" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Planning</Link>
              <Link href="/coaches/paiement" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Paiement</Link>

            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('finance')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'finance' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Wallet className="size-5" />
              Gestion financière
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'finance' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'finance' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md">
              <Link href="/finance/factures-vente" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Listes des factures Vente</Link>
              <Link href="/finance/factures-achats" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Listes des factures Achats</Link>
              <Link href="/finance/fournisseurs" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Fournisseurs</Link>
              <Link href="/finance/comptes-prepayes" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Alimentation des comptes prepayés</Link>
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('boutique')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'boutique' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Store className="size-5" />
              Boutique
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'boutique' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'boutique' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md">
              <Link href="/boutique" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Dashboard</Link>
              <Link href="/boutique/articles" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Articles</Link>
              <Link href="/boutique/entree" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Entree</Link>
              <Link href="/boutique/etat-du-stock" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Etat du stock</Link>
              <Link href="/boutique/sortie" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Sortie</Link>
              <Link href="/boutique/transfer" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Transfer</Link>
              <Link href="/boutique/vente" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Vente</Link>

            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('access')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'access' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Lock className="size-5" />
              Gestion des access
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'access' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'access' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md">
              <Link href="/access/enregistrer" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Enregistrer</Link>
              <Link href="/access/horaire" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Horaire</Link>
              <Link href="/access/historique" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Historique</Link>
            </div>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <button onClick={() => handleMenuClick('settings')} className={`flex items-center justify-between gap-2 w-full font-medium p-2 rounded-md ${activeMenu === 'settings' ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-secondary hover:text-secondary-forground"}`}>
            <div className="flex items-center gap-2">
              <Settings className="size-5" />
              Paramètres
            </div>
            <ChevronDown className={`transition-transform ${activeMenu === 'settings' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'settings' && (
            <div className="mt-2 flex flex-col w-full bg-card shadow-lg p-2 rounded-md">
              <Link href="/parametres/abonnements" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Abonnements</Link>
              <Link href="/parametres/conventions" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Conventions</Link>
              <Link href="/parametres/informations-generales" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Informations générales</Link>
              <Link href="/parametres/personnelles" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Personnelles</Link>
              <Link href="/parametres/salles" className="py-1 px-2 hover:bg-secondary hover:text-secondary-forground">Salles</Link>

            </div>
          )}
        </div>
      </div>
      <ModeToggle />

      <div className="md:hidden flex flex-col items-center mt-auto gap-4">
        <Button variant="default" size="default" className="flex items-center gap-2 bg-[hsl(var(--primary))] px-4 py-2 rounded-[6px] cursor-pointer">
          <FiHome className="text-[hsl(var(--primary-foreground))] w-6 h-6" />
          <span className="text-[hsl(var(--primary-foreground))]">Accueil</span>
        </Button>
        <Button variant="default" size="default" className="flex items-center gap-2 bg-[hsl(var(--secondary))] px-4 py-2 rounded-[6px] cursor-pointer">
          <HiOutlineLogout className="text-[hsl(var(--primary))] w-6 h-6" />
          <span className="text-[hsl(var(--primary))]">Déconnexion</span>
        </Button>
      </div>
    </nav>
  );
};

export default MNavBar;
