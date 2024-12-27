import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpense() {
  return <ExpensesOutput periodName={"Last 7 days"} />;
}
