import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string
}

interface TransactionContxtType {
  transactions: Transaction[]
}

interface TransactionsProvidrProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContxtType);

export function TransactionsProvider({ children }: TransactionsProvidrProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }} >
      {children}
    </TransactionsContext.Provider>

  )
}