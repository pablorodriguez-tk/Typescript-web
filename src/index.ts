import { User } from "./models/User";

const user = new User({ name: "userName", age: 20 });

user.set({ age: 12121 });

console.log(user.get("name"));
console.log(user.get("age"));
