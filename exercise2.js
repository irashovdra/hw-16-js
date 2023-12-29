function countProps(obj) {
  return Object.keys(obj).length;
}

// Приклад використання:
let anyObject = {
  name: "Iryna",
  age: 14,
  hobby: "JavaScript",
};

let numberOfProps = countProps(anyObject);
console.log(`Кількість властивостей: ${numberOfProps}`);
