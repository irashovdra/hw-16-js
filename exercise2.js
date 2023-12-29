const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(
  countProps({ name: "Iryna", age: 14, hobby: "javaScript", premium: true })
);
