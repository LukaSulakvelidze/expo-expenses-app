import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/IconButton";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesForm from "../components/ManageExpenses/ExpensesForm";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!editedExpenseId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedExpenseId]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function confirmHandler(expenseDate) {
    if (!!editedExpenseId) {
      expensesCtx.updateExpense(editedExpenseId, expenseDate);
    } else {
      expensesCtx.addExpense(expenseDate);
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpensesForm
        cancelHandler={cancelHandler}
        buttonText={!!editedExpenseId ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {!!editedExpenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
