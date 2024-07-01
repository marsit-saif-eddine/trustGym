import React from 'react';
import { useFormContext, Controller, UseFormReturn, FormProvider } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';

interface PaymentFormProps {
    methods: UseFormReturn<any>;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ methods }) => (
    <FormProvider {...methods}>
        <form className="space-y-4">
            <FormField name="montant" control={methods.control} render={({ field }) => (
                <FormItem>
                    <FormLabel>Montant</FormLabel>
                    <FormControl>
                        <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
                    </FormControl>
                </FormItem>
            )} />
            <FormField name="typePaiement" control={methods.control} render={({ field }) => (
                <FormItem>
                    <FormLabel>Type paiement</FormLabel>
                    <FormControl>
                        <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                            <option value="Aucune">Aucune</option>
                        </Select>
                    </FormControl>
                </FormItem>
            )} />
            <FormField name="numCheque" control={methods.control} render={({ field }) => (
                <FormItem>
                    <FormLabel>Numéro de chèque</FormLabel>
                    <FormControl>
                        <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
                    </FormControl>
                </FormItem>
            )} />
            <FormField name="banque" control={methods.control} render={({ field }) => (
                <FormItem>
                    <FormLabel>Banque</FormLabel>
                    <FormControl>
                        <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                            <option value="Entité">Entité</option>
                        </Select>
                    </FormControl>
                </FormItem>
            )} />
            <FormField name="status" control={methods.control} render={({ field }) => (
                <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                        <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                            <option value="Non payé">Non payé</option>
                            <option value="Payé">Payé</option>
                        </Select>
                    </FormControl>
                </FormItem>
            )} />
            <FormField name="dateEcheance" control={methods.control} render={({ field }) => (
                <FormItem>
                    <FormLabel>Date échéance</FormLabel>
                    <FormControl>
                        <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" />
                    </FormControl>
                </FormItem>
            )} />
        </form>
    </FormProvider>
);

export default PaymentForm;
