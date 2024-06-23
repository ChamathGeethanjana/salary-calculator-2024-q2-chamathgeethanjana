export interface Transaction {
  id: string;
  name: string;
  amount: number;
  isEPFandETP: boolean;
  type: "earning" | "deduction";
}
