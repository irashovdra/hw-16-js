const employees = {
  Denys: 12497,
  Katia: 32598,
  Dima: 34000,
  Masha: 48000,
};

function countTotalSalary(employees) {
  let totalSalary = 0;
  const salary = Object.values(employees);
  for (const value of salary) {
    totalSalary += value;
  }
  return totalSalary;
}

console.log(countTotalSalary(employees));
