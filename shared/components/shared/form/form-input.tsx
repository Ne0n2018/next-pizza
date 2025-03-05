import { ClearButton, ErrorText, RequiredSymbol } from "..";
import { Input } from "../../ui";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  classname?: string;
}
export const FormInput: React.FC<Props> = ({
  classname,
  name,
  label,
  required,
  ...props
}) => {
  return (
    <div className={classname}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props} />
        <ClearButton />
      </div>
      <ErrorText
        text="Поле обязательно должно быть заполнено"
        className="mt-2"
      />
    </div>
  );
};
