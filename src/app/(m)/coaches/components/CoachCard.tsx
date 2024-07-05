import React from 'react';
import { HiOutlineTrash, HiOutlinePencil, HiOutlinePlusCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import userImage from "@/../public/images/profile-icon-png.png";

interface CoachCardProps {
    id: string;
    coach: string;
    salle: string;
    cours: string;
    etat: string;
}

const CoachCard: React.FC<CoachCardProps> = ({ id, coach, salle, cours, etat }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/coaches/${id}`);
    };

    return (
        <div
            className="p-4 bg-card border border-[hsl(var(--border))] rounded-[12px] shadow-custom-card flex items-center space-x-4 hover:border-[hsl(var(--primary))] cursor-pointer"
            onClick={handleCardClick}
        >
            <Image src={userImage} alt="User" className="w-20 h-20 rounded-full" />
            <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">{coach}</h3>
                <p className="text-sm text-gray-600 mb-2">{salle}</p>
                <p className="text-sm text-gray-600 mb-2">{cours}</p>
                <p className={`text-sm mb-2 ${etat === 'Actif' ? 'text-green-600' : 'text-red-600'}`}>{etat}</p>
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

export default CoachCard;
