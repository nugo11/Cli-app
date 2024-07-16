const { program } = require("commander");
const fs = require("fs/promises");
const path = require("path");

program.arguments("<cat> <tot>").action(async (cat, tot) => {
  const expense = { cat, tot: parseFloat(tot) };
  const exPath = path.join(__dirname, "../data.json");
  const readExpense = await fs.readFile(exPath, "utf-8");
  const expenses = JSON.parse(readExpense);
  expenses.push(expense);
  await fs.writeFile(exPath, JSON.stringify(expenses, null, 2));
  console.log(expenses)
});

program.parse(process.argv);
