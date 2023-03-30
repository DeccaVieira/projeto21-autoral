export type Professional = {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  ufRegistration: string,
  registrationType: string,
  professionalNumber: number,
  phoneNumber: string;
};
export type Prof = Omit<Professional, "id">;