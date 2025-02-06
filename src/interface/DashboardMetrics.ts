import { ExpenseByCategorySummary, ExpenseSummary } from "./Expense";
import { Product } from "./Product";
import { PurchaseSummary } from "./Purchase";
import { SalesSummary } from "./Sales";

export interface DashboardMetrics {
  popularProducts: Product[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}
