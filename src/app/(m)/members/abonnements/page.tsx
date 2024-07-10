"use client";
import React, { useState } from 'react';
import { HiOutlineFilter, HiReply } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table';
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

type FilterFormInputs = {
    salle: string;
    convention: string;
    dateDebut: string;
    typeAbonnement: string;
    nomAbonne: string;
    dateFin: string;
};

const abonnementData = [
    { id: '0', dateDebut: '2023-07-25', dateFin: '2024-07-25', abonne: 'John Doe', salle: 'Lac', type: 'Normal', etat: 'Expiré' },
    { id: '1', dateDebut: '2022-05-10', dateFin: '2023-05-10', abonne: 'Jane Smith', salle: 'Centre ville', type: 'VIP', etat: 'En cours' },
    { id: '2', dateDebut: '2022-09-15', dateFin: '2023-09-15', abonne: 'Bob Johnson', salle: 'Gammarth', type: 'Standard', etat: 'Terminer' },
];

const GestionDesAbonnements: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterVisible, setFilterVisible] = useState(false);
    const abonnementsPerPage = 3;
    const indexOfLastAbonnement = currentPage * abonnementsPerPage;
    const indexOfFirstAbonnement = indexOfLastAbonnement - abonnementsPerPage;
    const currentAbonnements = abonnementData.slice(indexOfFirstAbonnement, indexOfLastAbonnement);

    const methods = useForm<FilterFormInputs>({
        defaultValues: {
            salle: '',
            convention: '',
            dateDebut: '',
            typeAbonnement: '',
            nomAbonne: '',
            dateFin: '',
        }
    });

    const onSubmit: SubmitHandler<FilterFormInputs> = data => {
        console.log(data);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-medium text-foreground">Gestion des abonnements</h1>
                    <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
                </div>
            </div>
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">Abonnements en cours</CardTitle>
                        <CardDescription>36</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-destructive">Abonnements expirés</CardTitle>
                        <CardDescription>4</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="bg-card p-4 rounded-[12px] shadow-custom-lg mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
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
                                    <FormField name="convention" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Convention</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Normale</option>
                                                    <option value="VIP">VIP</option>
                                                    <option value="Standard">Standard</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="dateDebut" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date début</FormLabel>
                                            <FormControl>
                                                <Input type="date" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="typeAbonnement" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Type d'abonnement</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Type</option>
                                                    <option value="Normal">Normal</option>
                                                    <option value="VIP">VIP</option>
                                                    <option value="Standard">Standard</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="nomAbonne" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nom d'abonné</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <option value="">Nom</option>
                                                    <option value="John Doe">John Doe</option>
                                                    <option value="Jane Smith">Jane Smith</option>
                                                    <option value="Bob Johnson">Bob Johnson</option>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    <FormField name="dateFin" control={methods.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date fin</FormLabel>
                                            <FormControl>
                                                <Input type="date" {...field} />
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
                            <TableHeaderCell>Date début</TableHeaderCell>
                            <TableHeaderCell>Date fin</TableHeaderCell>
                            <TableHeaderCell>Abonné</TableHeaderCell>
                            <TableHeaderCell>Salle</TableHeaderCell>
                            <TableHeaderCell>Type d'abonnement</TableHeaderCell>
                            <TableHeaderCell>Etat</TableHeaderCell>
                            <TableHeaderCell>Détail</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentAbonnements.map((abonnement, index) => (
                            <TableRow key={index}>
                                <TableCell>{abonnement.dateDebut}</TableCell>
                                <TableCell>{abonnement.dateFin}</TableCell>
                                <TableCell>{abonnement.abonne}</TableCell>
                                <TableCell>{abonnement.salle}</TableCell>
                                <TableCell>{abonnement.type}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-center text-xs font-medium ${abonnement.etat === 'En cours' ? 'bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]' : abonnement.etat === 'Expiré' ? 'bg-[hsl(var(--destructive))]/10 text-[hsl(var(--destructive))]' : 'bg-green-100 text-green-700'}`}>
                                        {abonnement.etat}
                                    </span>
                                </TableCell>
                                <TableCell className="text-center align-middle">
                                    <HiReply className="w-6 h-6 text-[hsl(var(--primary))] cursor-pointer transform scale-x-[-1]" />
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
                        {Array.from({ length: Math.ceil(abonnementData.length / abonnementsPerPage) }, (_, i) => i + 1).map(number => (
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
                        disabled={currentPage === Math.ceil(abonnementData.length / abonnementsPerPage)}
                        variant="ghost"
                        className={`flex items-center hover:underline ${currentPage === Math.ceil(abonnementData.length / abonnementsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Suivant
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GestionDesAbonnements;
