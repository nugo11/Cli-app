const { program } = require("commander");
const fs = require("fs/promises");
const path = require("path");

program.arguments("<cat>").action(async (cat) => {
  const exPath = path.join(__dirname, "../data.json");
  const readExpense = await fs.readFile(exPath, "utf-8");
  const expenses = JSON.parse(readExpense);

  const filter = expenses.filter((item) => item.cat === cat);
  console.log("Search result: ", filter);
});

program.parse(process.argv);
