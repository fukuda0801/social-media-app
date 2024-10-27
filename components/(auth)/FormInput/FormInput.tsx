import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormInputProps } from '@/types/auth';

const FormInput = ({ id, label, type, placeholder, register, error }: FormInputProps) => {
  return (
    <div className="mt-4">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} {...register} />
      <p className="text-red-500 text-sm h-3.5">{error}</p>
    </div>
  );
};

export default FormInput;
