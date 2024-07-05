import React from 'react';
import CoachCard from './CoachCard';

interface Coach {
    id: string;
    coach: string;
    salle: string;
    cours: string;
    etat: string;
}

interface CoachesListProps {
    coaches: Coach[];
}

const CoachesList: React.FC<CoachesListProps> = ({ coaches }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {coaches.map((coach, index) => (
                <CoachCard key={index} {...coach} />
            ))}
        </div>
    );
};

export default CoachesList;
