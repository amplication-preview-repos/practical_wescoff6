import { Budget as TBudget } from "../api/budget/Budget";

export const BUDGET_TITLE_FIELD = "budgetName";

export const BudgetTitle = (record: TBudget): string => {
  return record.budgetName?.toString() || String(record.id);
};
