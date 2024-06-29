import React, { useState } from 'react';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

interface PasswordInputProps {
  name: string;
  label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input {...field} type={showPassword ? 'text' : 'password'} />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              </button>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
