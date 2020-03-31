db.createUser({
  user: "toto",
  pwd: "test",
  roles: [
    {
      role: "readWrite",
      db: "mern"
    }
  ]
});
