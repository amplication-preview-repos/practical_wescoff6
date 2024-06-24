export type AccountsPayable = {
  amount: number | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  vendorId: string | null;
};
