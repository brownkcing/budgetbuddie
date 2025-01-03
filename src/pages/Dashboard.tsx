import { BudgetList } from "@/components/budgets/BudgetList";
import { BudgetSummary } from "@/components/budgets/BudgetSummary";
import { SetBudget } from "@/components/budgets/SetBudget";
import { DashboardSummary } from "@/components/dashboard/DashboardSummary";
import { MainLayout } from "@/components/layout/MainLayout";
import { AddTransaction } from "@/components/transactions/AddTransaction";
import { TransactionList } from "@/components/transactions/TransactionList";

export function Dashboard() {
    return (
      <MainLayout>
        <div className="space-y-6">
          <DashboardSummary />
          <div className="grid gap-6 lg:grid-cols-2">
            <section>
              <div className="space-y-6">
                <SetBudget />
                <BudgetSummary />
                <BudgetList />
              </div>
            </section>
            <section>
              <div className="space-y-6">
                <AddTransaction />
                <TransactionList />
              </div>
            </section>
          </div>
        </div>
      </MainLayout>
    );
  }