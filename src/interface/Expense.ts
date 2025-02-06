export interface ExpenseSummary {
  expenseSummaryId: string;
  totalExpenses: number;
  date: string;
}
export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
}
