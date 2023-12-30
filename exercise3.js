const employees = {
  Denys: 28,
  Katia: 9,
  Dima: 13,
  Masha: 54,
};

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = employee;
    }
  }

  return `Найпродуктивніший співробітник: ${bestEmployee}`;
}

console.log(findBestEmployee(employees));
