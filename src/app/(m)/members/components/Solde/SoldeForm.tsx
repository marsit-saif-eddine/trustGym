import React from 'react';
import { useFormContext, Controller, UseFormReturn, FormProvider } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';

interface SoldeFormProps {
  methods: UseFormReturn<any>;
}

const SoldeForm: React.FC<SoldeFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-4">
      <FormField name="date" control={methods.control} render={({ field }) => (
        <FormItem>
          <FormLabel>Date</FormLabel>
          <FormControl>
            <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" />
          </FormControl>
        </FormItem>
      )} />
      <FormField name="montant" control={methods.control} render={({ field }) => (
        <FormItem>
          <FormLabel>Montant</FormLabel>
          <FormControl>
            <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
          </FormControl>
        </FormItem>
      )} />
      <FormField name="personnel" control={methods.control} render={({ field }) => (
        <FormItem>
          <FormLabel>Personnel</FormLabel>
          <FormControl>
            <Select {...field} className="w-full p-2 border border-gray-300 rounded">
              <option value="Aucune">Aucune</option>
            </Select>
          </FormControl>
        </FormItem>
      )} />
    </form>
  </FormProvider>
);

export default SoldeForm;
