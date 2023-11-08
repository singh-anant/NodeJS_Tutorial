process.on("uncaughtException", (err) => {
  console.log(err);
});

console.log(process.cwd());
throw new Error("Some error Bro");
console.log(process.env.USER);
console.log(process.env);
