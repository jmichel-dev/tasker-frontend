import { differenceInDays } from "date-fns";

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
};

export const formatDateInDays = (date: Date): string => {
  const today = new Date();

  const valueDifferenceInDays = differenceInDays(today, date);

  if (valueDifferenceInDays === 0) {
    return "Hoje";
  } else if (valueDifferenceInDays === 1) {
    return "1 dia atrás";
  } else {
    return `${valueDifferenceInDays} dias atrás`;
  }
};
