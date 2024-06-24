export type AccountsReceivable = {
  amount: number | null;
  createdAt: Date;
  customerId: string | null;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
