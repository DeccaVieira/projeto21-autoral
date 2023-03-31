export type PersonalData = {
  id?: number;
user_id: number;
medical_insurance:number;
medical_insurance_plan: number;
medical_number: number;
};
export type Personal = Omit<PersonalData, "id">;