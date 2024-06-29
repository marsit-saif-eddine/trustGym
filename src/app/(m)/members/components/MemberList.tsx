import React from 'react';
import MemberCard from './MemberCard';

interface Member {
  id:string;
  name: string;
  expiration: string | null;
  expired: boolean;
}

interface MemberListProps {
  members: Member[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
};

export default MemberList;
