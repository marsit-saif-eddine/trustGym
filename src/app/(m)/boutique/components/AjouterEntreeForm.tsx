import React from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

interface AjouterEntreeFormProps {
  methods: UseFormReturn<any>;
}

const AjouterEntreeForm: React.FC<AjouterEntreeFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-4">
      <FormField
        name="date"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date</FormLabel>
            <FormControl>
              <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="article"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Article</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Entree">Entrée</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="fournisseur"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Fournisseur</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Entree">Entrée</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="quantite"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantité</FormLabel>
            <FormControl>
              <Input {...field} type="number" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )}
      />
    </form>
  </FormProvider>
);

export default AjouterEntreeForm;
