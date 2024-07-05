import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import userImage from "@/../public/images/profile-icon-png.png";
import { HiOutlinePencil } from 'react-icons/hi';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { Select } from '@/components/ui/select';

interface CoachFormProps {
  methods: UseFormReturn<any>;
}

const CoachForm: React.FC<CoachFormProps> = ({ methods }) => (
  <FormProvider {...methods}>
    <form className="space-y-6">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/4 flex flex-col items-center space-y-4">
          <h3 className="text-lg font-medium">Profile</h3>
          <div className="relative w-24 h-24">
            <Image src={userImage} alt="Profile" className="rounded-full" />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full">
              <HiOutlinePencil />
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-medium">Foulen ben foulen</h2>
            <p className="text-sm text-muted-foreground">Coach</p>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div>
            <h3 className="text-lg font-medium">Informations générales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <FormField
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date de naissance</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profession</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="cin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carte CIN</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ville</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numéro de téléphone</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">TrustGym</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <FormField
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numéro de carte</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="gym"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salle</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prix par heure</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </FormProvider>
);

export default CoachForm;
