import React from "react";
import { View } from "react-native";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-12-12"),
  },
  {
    id: "e2",
    description: "A pair of hat",
    amount: 19.99,
    date: new Date("2024-3-23"),
  },
  {
    id: "e3",
    description: "A pair of short",
    amount: 29.99,
    date: new Date("2021-1-31"),
  },
  {
    id: "e4",
    description: "A pair of phone",
    amount: 129.99,
    date: new Date("2020-7-19"),
  },
];

export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View>
      <ExpensesSummery expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList />
    </View>
  );
}
