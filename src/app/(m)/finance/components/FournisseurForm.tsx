import React, { useRef, useState } from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FiImage } from 'react-icons/fi';
import { useFormContext } from 'react-hook-form';

interface FournisseurFormProps {
  methods: UseFormReturn<any>;
}

const FournisseurForm: React.FC<FournisseurFormProps> = ({ methods }) => {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>

    <form className="space-y-4">
      <FormField
        name="nom"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nom</FormLabel>
            <FormControl>
              <Input {...field} type="text" placeholder="Matrix" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="logo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Logo</FormLabel>
            <FormControl>
              <div
                {...field}
                className="mb-4 p-4 border border-dashed border-gray-300 rounded-md flex justify-center items-center cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => inputRef.current?.click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={inputRef}
                  className="hidden"
                />
                {image ? (
                  <img src={image} alt="Logo" className="max-h-32" />
                ) : (
                  <div className="text-center">
                    <FiImage className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="text-muted-foreground mt-2">Drag & drop or click to upload</p>
                    <p className="text-xs text-muted-foreground">File Types: JPG and PNG. Size: 720px or above and a minimum of 1200px</p>
                  </div>
                )}
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </form>
    </FormProvider>

  );
};

export default FournisseurForm;
