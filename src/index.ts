import { User } from "./models/User";

const user = new User({ name: "NEW2123AME", age: 213139 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("user was changed");
});

user.trigger("change");
