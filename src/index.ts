import { User } from "./models/User";

const user = new User({ name: "NEW2123AME", age: 213139 });
user.events.on("change", () => {
  console.log("change");
});

user.events.trigger("change");
