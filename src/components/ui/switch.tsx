import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checkedText?: string;
  uncheckedText?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ className, label, checkedText = "Payé", uncheckedText = "Non payé", ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(props.checked);

  React.useEffect(() => {
    setIsChecked(props.checked);
  }, [props.checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      {label && <span className="mr-2 text-sm">{label}</span>}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          ref={ref}
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        <div className="w-11 h-6 bg-[hsl(var(--destructive))] rounded-full peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-ring peer-focus:outline-none transition-colors duration-200 ease-in-out"></div>
        <span
          className="absolute left-0 top-0 m-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ease-in-out transform peer-checked:translate-x-5"
        ></span>
        <span className={cn("ml-3 text-sm", isChecked ? "text-green-500" : "text-[hsl(var(--destructive))]")}>
          {isChecked ? checkedText : uncheckedText}
        </span>
      </label>
    </div>
  );
});

Switch.displayName = 'Switch';

export { Switch };
