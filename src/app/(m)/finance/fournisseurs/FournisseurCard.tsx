import React from 'react';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import userImage from "@/../public/images/profile-icon-png.png";
import Image from 'next/image';

interface FournisseurCardProps {
    id: number;
    name: string;
}

const FournisseurCard: React.FC<FournisseurCardProps> = ({ id, name }) => {
    return (
        <div
            className="p-4 bg-card border border-[hsl(var(--border))] rounded-[12px] shadow-custom-card flex items-center space-x-4 hover:border-[hsl(var(--primary))] cursor-pointer"
        >
            <div className="relative w-24 h-24">
                <Image src={userImage} alt="Profile" className="rounded-full" />
            </div>
            <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">{name}</h3>

                <div className="flex space-x-2 mt-4">
                    <Button variant="destructive" size="icon" className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full">
                        <HiOutlineTrash className="text-[hsl(var(--destructive))] w-4 h-4" />
                    </Button>
                    <Button variant="default" size="icon" className="flex items-center justify-center w-7 h-7 bg-[hsl(var(--secondary))] rounded-full">
                        <HiOutlinePencil className="text-[hsl(var(--primary))] w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FournisseurCard;
