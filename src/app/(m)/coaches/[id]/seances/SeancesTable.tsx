"use client";
import React, { useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { BiFilter } from 'react-icons/bi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm, SubmitHandler } from "react-hook-form";
import { FiChevronDown } from 'react-icons/fi';
import { Select } from '@/components/ui/select';
import { AddSeanceByCoachModal, DeleteSeanceByCoachModal, ModifySeanceByCoachModal } from '../../components/Modals';

type FilterFormInputs = {
    salle: string;
    etat: string;
};

const séancesData = [
    { date: '27-09-2023', heure: '12:00', salle: 'Lac', etat: 'Non payé' },
    { date: '26-09-2023', heure: '12:00', salle: 'Centre ville', etat: 'Payé' },
    { date: '25-09-2023', heure: '12:00', salle: 'Gammarth', etat: 'Payé' },
];

const SeancesTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterVisible, setFilterVisible] = useState(false);
    const [isModifySeanceFormOpen, setIsModifySeanceFormOpen] = useState(false); 
    const [isDeleteSeanceFormOpen, setIsDeleteSeanceFormOpen] = useState(false); 

    const sessionsPerPage = 3;

    const indexOfLastSession = currentPage * sessionsPerPage;
    const indexOfFirstSession = indexOfLastSession - sessionsPerPage;
    const currentSessions = séancesData.slice(indexOfFirstSession, indexOfLastSession);

    const methods = useForm<FilterFormInputs>({
        defaultValues: {
            salle: '',
            etat: '',
        }
    });

    const onSubmit: SubmitHandler<FilterFormInputs> = data => {
        console.log(data);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div >
            <div className="flex items-center justify-between mb-4">
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
                                                <option value="Payé">Payé</option>
                                                <option value="Non payé">Non payé</option>
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
            <div className="bg-card rounded-lg shadow">

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Date</TableHeaderCell>
                            <TableHeaderCell>Heure</TableHeaderCell>
                            <TableHeaderCell>Salle</TableHeaderCell>
                            <TableHeaderCell>Etat</TableHeaderCell>
                            <TableHeaderCell>Action</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentSessions.map((session, index) => (
                            <TableRow key={index}>
                                <TableCell>{session.date}</TableCell>
                                <TableCell>{session.heure}</TableCell>
                                <TableCell>{session.salle}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={session.etat === 'Payé'}
                                        uncheckedText="Non payé"
                                        checkedText="Payé"
                                    />
                                </TableCell>
                                <TableCell className="flex space-x-2">
                                    <Button variant="ghost" onClick={() => setIsModifySeanceFormOpen(true)} className="text-[hsl(var(--primary))] p-2 m-0">
                                        <HiOutlinePencil />
                                    </Button>
                                    <Button variant="ghost" onClick={() => setIsDeleteSeanceFormOpen(true)} className="text-[hsl(var(--destructive))] p-2 m-0">
                                        <HiOutlineTrash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
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
                        {Array.from({ length: Math.ceil(séancesData.length / sessionsPerPage) }, (_, i) => i + 1).map(number => (
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
                        disabled={currentPage === Math.ceil(séancesData.length / sessionsPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(séancesData.length / sessionsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />

                    </Button>
                </div>
            </div>
            <ModifySeanceByCoachModal isOpen={isModifySeanceFormOpen} onClose={() => setIsModifySeanceFormOpen(false)} />
            <DeleteSeanceByCoachModal isOpen={isDeleteSeanceFormOpen} onClose={() => setIsDeleteSeanceFormOpen(false)} />

        </div>
    );
};

export default SeancesTable;
