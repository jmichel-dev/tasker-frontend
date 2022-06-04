import { InputForm } from "./styles";

interface InputProps {
  [key: string]: any;
}

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <InputForm {...rest} />;
};
