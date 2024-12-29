import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/IconButton";
import { ExpensesContext } from "../store/expenses-context";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!editedExpenseId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedExpenseId]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function confirmHandler() {
    if (!!editedExpenseId) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "racdaxa",
        amount: 322,
        date: new Date("2024-12-14"),
      });
    } else {
      expensesCtx.addExpense({
        description: "test",
        amount: 123,
        date: new Date("2022-12-14"),
      });
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {!!editedExpenseId ? "Update" : "Add"}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
