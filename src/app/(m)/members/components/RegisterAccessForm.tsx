import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface RegisterAccessFormProps {
  methods: UseFormReturn<any>;
}

const RegisterAccessForm: React.FC<RegisterAccessFormProps> = ({ methods }) => (
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
        name="heure"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Heure</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Aucune">Aucune</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="porte"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Porte</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="1">1</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Entrée">Entrée</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </form>
  </FormProvider>
);

export default RegisterAccessForm;
