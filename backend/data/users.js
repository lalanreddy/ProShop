import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "lalan",
    email: "lalan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "kushal",
    email: "kushal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
