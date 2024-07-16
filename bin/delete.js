const { program } = require("commander");
const fs = require("fs/promises");
const path = require("path");

program.arguments("<i>").action(async (i) => {
  const exPath = path.join(__dirname, "../data.json");
  const readExpense = await fs.readFile(exPath, "utf-8");
  const expenses = JSON.parse(readExpense);
  const delExpenses = expenses.splice(i, 1);
  await fs.writeFile(exPath, JSON.stringify(expenses));

  console.log('Delete: ', delExpenses)
});

program.parse(process.argv);