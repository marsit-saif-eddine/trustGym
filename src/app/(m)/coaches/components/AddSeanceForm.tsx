import React from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

interface AddSeanceFormProps {
  methods: UseFormReturn<any>;
}

const AddSeanceForm: React.FC<AddSeanceFormProps> = ({ methods }) => (
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
        name="salle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Salle</FormLabel>
            <FormControl>
              <Select {...field} className="w-full p-2 border border-gray-300 rounded">
                <option value="Lac">Lac</option>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </form>
  </FormProvider>
);

export default AddSeanceForm;
