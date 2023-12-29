let user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
