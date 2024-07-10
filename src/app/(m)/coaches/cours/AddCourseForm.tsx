import React, { useRef, useState } from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HiOutlineUpload } from 'react-icons/hi';
import { FiImage } from 'react-icons/fi';

interface AddCourseFormProps {
  methods: UseFormReturn<any>;
}

const AddCourseForm: React.FC<AddCourseFormProps> = ({ methods }) => {
  const [courseImage, setCourseImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCourseImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCourseImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-4">
        <FormField
          name="courseTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre du cours</FormLabel>
              <FormControl>
                <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="courseImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <div
                  {...field}
                  className="mb-4 p-4 border border-dashed border-gray-300 rounded-md flex justify-center items-center cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => imageInputRef.current?.click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={imageInputRef}
                    className="hidden"
                  />
                  {courseImage ? (
                    <img src={courseImage} alt="Course Image" className="max-h-32" />
                  ) : (
                    <div className="text-center">
                      <FiImage className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">Drag & drop or click to upload</p>
                      <p className="text-xs text-muted-foreground">File Types: JPG and PNG. Size: 720px or above and a minimum of 1080px</p>
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

export default AddCourseForm;
