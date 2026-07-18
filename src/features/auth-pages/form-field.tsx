import { Input, type InputProps } from "@/components/ui/input";

type FormFieldProps = InputProps & {
  label: string;
  id: string;
};

export function FormField({ label, id, ...props }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <Input id={id} {...props} />
    </div>
  );
}
