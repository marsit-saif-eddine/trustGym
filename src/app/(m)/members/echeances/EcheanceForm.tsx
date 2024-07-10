import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

interface EcheanceFormProps {
  methods: UseFormReturn<any>;
}

const EcheanceForm: React.FC<EcheanceFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-4">
      <FormField
        name="abonne"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Abonné</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Aucune">Aucune</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="montant"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Montant</FormLabel>
            <FormControl>
              <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="dateEcheance"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date échéance</FormLabel>
            <FormControl>
              <Input {...field} type="date" className="w-full p-2 border border-gray-300 rounded" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="typePaiement"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type paiement</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Aucune">Aucune</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <div className="space-y-4">
  <FormField
    name="etatPaiement"
    render={({ field }) => (
      <FormItem className="flex items-center">
        <FormLabel className="mr-4" >Etat paiement</FormLabel>
        <FormControl >
          <Switch {...field} uncheckedText="Non payé" checkedText="Payé" />
        </FormControl>
       
      </FormItem>
    )}
  />
  <FormField
    name="etatAbonne"
    render={({ field }) => (
      <FormItem className="flex items-center">
        <FormLabel className="mr-4" >Etat abonné</FormLabel>
        <FormControl>
          <Switch {...field} uncheckedText="Inactif" checkedText="Actif" />
        </FormControl>
        
      </FormItem>
    )}
  />
</div>

      
    </form>
  </FormProvider>
);

export default EcheanceForm;
