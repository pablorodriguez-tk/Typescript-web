import { User } from "./models/User";

const user = new User({ name: "userName", age: 20 });

user.on("change", () => {
  console.log("change1");
});
user.on("change", () => {
  console.log("change2");
});
user.on("save", () => {
  console.log("save was triggered");
});

user.trigger("change");
