import { Text, View } from "react-native";

export default function ExpensesSummery({ expenses, periodName }) {
  const expensesSum = expenses.reduce((a, b) => a + b.amouny, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
