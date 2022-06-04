import { ButtonContainer } from "./styles";

interface ButtonProps {
  buttonText: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, type }) => {
  return <ButtonContainer type={type}>{buttonText}</ButtonContainer>;
};
