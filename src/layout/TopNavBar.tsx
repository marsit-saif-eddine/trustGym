import React from "react";
import Image from "next/image";
import userImage from "@/../public/images/userProfile.png"; 
import { HiOutlineLogout } from "react-icons/hi";
import { FiHome, FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface TopNavBarProps {
  toggleSidebar: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ toggleSidebar }) => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push(`/profile`);
  };
  return (
    <div className="fixed top-0 left-1/5 w-full md:left-1/5 md:w-4/5 flex justify-between items-center p-4 border-b border-border bg-[hsl(var(--primary-foreground))] z-19">
      <div className="flex items-center gap-4 p-2 rounded-lg">
      <div
        onClick={handleProfileClick}
        className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <Image src={userImage} alt="User Profile" width={40} height={40} className="rounded-full" />
      </div>
      <div>
        <p className="text-sm font-medium">Foulen ben Foulen</p>
        <p className="text-xs text-gray-500">Admin</p>
      </div>
    </div>
      <div className="flex items-center gap-4">
        <div className="block md:hidden">
          <FiMenu className="text-[hsl(var(--primary))] w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="icon" className="w-10 h-10">
            <FiHome className="text-[hsl(var(--primary-foreground))] w-6 h-6" />
          </Button>
          <Button variant="default" size="icon" className="w-10 h-10 bg-[hsl(var(--secondary))]">
            <HiOutlineLogout className="text-[hsl(var(--primary))] w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
