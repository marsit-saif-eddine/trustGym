"use client";
import React, { useState } from 'react';
import { HiOutlineFilter, HiOutlinePencil, HiOutlineTrash, HiReply, HiOutlinePlusCircle } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Switch } from '@/components/ui/switch';
import { BiCreditCardFront, BiFilter } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineServer, HiOutlineViewGrid } from 'react-icons/hi';
import { useForm, SubmitHandler } from "react-hook-form";
import userImage from "@/../public/images/profile-icon-png.png";
import CoachesList from './components/CoachesList';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { RegisterAccessModal } from '../members/components/Modals';
import { AddCoachModal, AddSeanceModal } from './components/Modals';
import { useRouter } from 'next/navigation';

type FilterFormInputs = {
    coach: string;
    salle: string;
    cours: string;
    etat: string;
};

const coachData = [
    { id: '0', coach: 'Nom et prénom', salle: 'Lac', cours: 'Zumba', etat: 'Non actif' },
    { id: '1', coach: 'Nom et prénom', salle: 'Centre ville', cours: 'Box', etat: 'Actif' },
    { id: '2', coach: 'Nom et prénom', salle: 'Gammarth', cours: 'Danse', etat: 'Actif' },
    { id: '3', coach: 'Nom et prénom', salle: 'Gammarth', cours: 'Danse', etat: 'Actif' },
    { id: '4', coach: 'Nom et prénom', salle: 'Gammarth', cours: 'Danse', etat: 'Actif' },
    { id: '5', coach: 'Nom et prénom', salle: 'Gammarth', cours: 'Danse', etat: 'Actif' },
];

const GestionDesCoaches: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterVisible, setFilterVisible] = useState(false);
    const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
    const [isUnblockModalOpen, setIsUnblockModalOpen] = useState(false);
    const [isAccessFormOpen, setIsAccessFormOpen] = useState(false); 
    const [isSeanceFormOpen, setIsSeanceFormOpen] = useState(false); 
    const [isCoachFormOpen, setIsCoachFormOpen] = useState(false); 
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [isTableView, setIsTableView] = useState(true);

    const coachesPerPage = 6;
    const indexOfLastCoach = currentPage * coachesPerPage;
    const indexOfFirstCoach = indexOfLastCoach - coachesPerPage;
    const currentCoaches = coachData.slice(indexOfFirstCoach, indexOfLastCoach);

    const methods = useForm<FilterFormInputs>({
        defaultValues: {
            coach: '',
            salle: '',
            cours: '',
            etat: '',
        }
    });

    const onSubmit: SubmitHandler<FilterFormInputs> = data => {
        console.log(data);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleSwitchChange = (coach: any, isActive: boolean) => {
        setSelectedCoach(coach);
        if (isActive) {
            setIsUnblockModalOpen(true);
        } else {
            setIsBlockModalOpen(true);
        }
    };

    const router = useRouter();

    const handleCardClick = (id:string) => {
        router.push(`/coaches/${id}`);
    };

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
  <div className="mb-4 md:mb-0">
    <h1 className="text-2xl font-medium text-foreground">Gestion des coaches</h1>
    <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
  </div>
  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
    <Button variant="outline" onClick={() => setIsAccessFormOpen(true)}>
      <BiCreditCardFront className="w-6 h-6 mr-2" />
      Enregistrer accès
    </Button>
    <Button variant="outline" onClick={() => setIsSeanceFormOpen(true)}>
      <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
      Ajouter séance
    </Button>
    <Button variant="default" onClick={() => setIsCoachFormOpen(true)}>
      <HiOutlinePlusCircle className="w-6 h-6 mr-2" />
      Ajouter coach
    </Button>
  </div>
</div>
<div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <Card>
    <CardHeader>
      <CardTitle className="text-primary">Coaches actif</CardTitle>
      <CardDescription>42</CardDescription>
    </CardHeader>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle className="text-destructive">Coaches non actif</CardTitle>
      <CardDescription>4</CardDescription>
    </CardHeader>
  </Card>
</div>
            <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
            <Button
      variant="outline"
      className="flex items-center text-default border border-gray-300 rounded-md"
      onClick={() => setFilterVisible(!filterVisible)}
    >
      <BiFilter className="mr-2" />
      Filtre
      <FiChevronDown className="ml-2" />
    </Button>
                    <div className="relative w-full md:w-1/3 mt-4 md:mt-0">
      <Input
        type="text"
        placeholder="Recherche"
        className="pl-10"
      />
      <svg className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <div className="flex space-x-2">
      <Button variant={isTableView ? "default" : "outline"} onClick={() => setIsTableView(true)}>
        <HiOutlineServer className="w-6 h-6" />
      </Button>
      <Button variant={!isTableView ? "default" : "outline"} onClick={() => setIsTableView(false)}>
        <HiOutlineViewGrid className="w-6 h-6" />
      </Button>
    </div>
  </div>
                {filterVisible && (
                    <div className="bg-[hsl(var(--primary-foreground))] p-4 rounded-[12px] border mb-6">
                        <Form {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                    <FormField name="salle" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Salle</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Toutes nos salles</option>
                                                    <option value="Lac">Lac</option>
                                                    <option value="Centre ville">Centre ville</option>
                                                    <option value="Gammarth">Gammarth</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="etat" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Etat</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Tous</option>
                                                    <option value="Actif">Actif</option>
                                                    <option value="Non actif">Non actif</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                </div>
                                <div className="flex justify-end space-x-2 mb-4">
                                    <Button variant="default" onClick={() => setFilterVisible(false)} className="flex items-center text-[hsl(var(--primary))] bg-primary/10">Annuler</Button>
                                    <Button type="submit" variant="default">Enregistrer</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                )}
                {isTableView ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderCell>Coach</TableHeaderCell>
                                <TableHeaderCell>Salle</TableHeaderCell>
                                <TableHeaderCell>Cours</TableHeaderCell>
                                <TableHeaderCell>Etat</TableHeaderCell>
                                <TableHeaderCell>Action</TableHeaderCell>
                                <TableHeaderCell>Détail</TableHeaderCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentCoaches.map((coach, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex items-center space-x-2">
                                            <img src={userImage.src} alt="User" className="w-9 h-9 rounded-full" />
                                            <span>{coach.coach}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{coach.salle}</TableCell>
                                    <TableCell>{coach.cours}</TableCell>
                                    <TableCell>
                                        <Switch
                                            checked={coach.etat === 'Actif'}
                                            uncheckedText="Non actif"
                                            checkedText="Actif"
                                            onChange={() => handleSwitchChange(coach, coach.etat !== 'Actif')}
                                        />
                                    </TableCell>
                                    <TableCell className="flex space-x-2">
                                        <Button variant="ghost" className="text-[hsl(var(--primary))] p-2 m-0">
                                            <HiOutlinePencil />
                                        </Button>
                                        <Button variant="ghost" className="text-[hsl(var(--destructive))] p-2 m-0">
                                            <HiOutlineTrash />
                                        </Button>
                                    </TableCell>
                                    <TableCell className="text-center align-middle">
                                        <HiReply onClick={() => handleCardClick(coach.id)} className="w-6 h-6 text-[hsl(var(--primary))] cursor-pointer transform scale-x-[-1]" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <CoachesList coaches={currentCoaches} />
                )}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
                    <Button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        <FaArrowLeft className="mr-2" />
                        Précédent
                    </Button>
                    <div className="flex space-x-2 mt-4 sm:mt-0">
                        {Array.from({ length: Math.ceil(coachData.length / coachesPerPage) }, (_, i) => i + 1).map(number => (
                            <Button
                                key={number}
                                onClick={() => paginate(number)}
                                variant={currentPage === number ? "default" : "ghost"}
                                className={`rounded-[6px] px-3 py-1 ${currentPage === number ? 'bg-primary text-primary-foreground' : ''}`}
                            >
                                {number}
                            </Button>
                        ))}
                    </div>
                    <Button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(coachData.length / coachesPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(coachData.length / coachesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
            <RegisterAccessModal isOpen={isAccessFormOpen} onClose={() => setIsAccessFormOpen(false)} />
            <AddSeanceModal isOpen={isSeanceFormOpen} onClose={() => setIsSeanceFormOpen(false)} />
            <AddCoachModal isOpen={isCoachFormOpen} onClose={() => setIsCoachFormOpen(false)} />

        </div>
    );
};

export default GestionDesCoaches;
