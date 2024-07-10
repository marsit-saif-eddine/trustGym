"use client";
import React, { useState } from 'react';
import { HiOutlineFilter, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
import { Switch } from '@/components/ui/switch';
import { BiFilter } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from '@/components/ui/form';
import { useForm, SubmitHandler } from "react-hook-form";
import { DeleteSoldeModal, EditSoldeModal } from './Modals'; 

type FilterFormInputs = {
    abonne: string;
    montant: string;
    dateEcheance: string;
    etat: string;
};

const echeanceData = [
    { id: '0', abonne: 'Nom et prénom', montant: '25', dateEcheance: '27-09-2023', etat: 'Non payé' },
    { id: '1', abonne: 'Nom et prénom', montant: '25', dateEcheance: '28-09-2023', etat: 'Payé' },
    { id: '2', abonne: 'Nom et prénom', montant: '25', dateEcheance: '29-09-2023', etat: 'Payé' },
];

const GestionDesAssurances: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterVisible, setFilterVisible] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
    const [selectedEcheance, setSelectedEcheance] = useState(null); 
    const AssurancesPerPage = 3;
    const indexOfLastEcheance = currentPage * AssurancesPerPage;
    const indexOfFirstEcheance = indexOfLastEcheance - AssurancesPerPage;
    const currentAssurances = echeanceData.slice(indexOfFirstEcheance, indexOfLastEcheance);

    const methods = useForm<FilterFormInputs>({
        defaultValues: {
            abonne: '',
            montant: '',
            dateEcheance: '',
            etat: '',
        }
    });

    const onSubmit: SubmitHandler<FilterFormInputs> = data => {
        console.log(data);
    };

    const handleEditClick = (echeance:any) => {
        setSelectedEcheance(echeance); 
        setIsEditModalOpen(true);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-medium text-foreground">Assurances / Frais annuel</h1>
                    <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
                </div>
            </div>
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">Montant totale</CardTitle>
                        <CardDescription>200 DT</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-yellow-500">Echéance</CardTitle>
                        <CardDescription>90 DT</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-destructive">Reste à payer</CardTitle>
                        <CardDescription>120 DT</CardDescription>
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
  <div className="relative w-full md:w-1/3">
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
                                    <FormField name="abonne" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Abonné</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="montant" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Montant</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="dateEcheance" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date échéance</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="date" />
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
                                    <Button type="submit" variant="default" >Enregistrer</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                )}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Abonné</TableHeaderCell>
                            <TableHeaderCell>Montant</TableHeaderCell>
                            <TableHeaderCell>Date échéance</TableHeaderCell>
                            <TableHeaderCell>Etat</TableHeaderCell>
                            <TableHeaderCell>Action</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentAssurances.map((echeance, index) => (
                            <TableRow key={index}>
                                <TableCell>{echeance.abonne}</TableCell>
                                <TableCell>{echeance.montant}</TableCell>
                                <TableCell>{echeance.dateEcheance}</TableCell>
                                <TableCell>
                                    <Switch checked={echeance.etat === 'Payé'} uncheckedText="Non payé" checkedText="Payé" />
                                </TableCell>
                                <TableCell className="flex">
                                    <Button variant="ghost" className="flex items-center text-[hsl(var(--primary))] p-2 m-0" onClick={() => handleEditClick(echeance)}>
                                        <HiOutlinePencil />
                                    </Button>
                                    <Button variant="ghost" className="flex items-center text-[hsl(var(--destructive))] p-2 m-0" onClick={() => setIsDeleteModalOpen(true)}>
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
                        {Array.from({ length: Math.ceil(echeanceData.length / AssurancesPerPage) }, (_, i) => i + 1).map(number => (
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
                        disabled={currentPage === Math.ceil(echeanceData.length / AssurancesPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(echeanceData.length / AssurancesPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
            {isEditModalOpen && <EditSoldeModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />}
            {isDeleteModalOpen && <DeleteSoldeModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />}

        </div>
    );
};

export default GestionDesAssurances;
