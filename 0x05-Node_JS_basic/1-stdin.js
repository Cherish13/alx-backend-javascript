process.stdout.write("Welcome to Holberton School, what is yoyr name?\n");

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  process.stdout.write("This important software is now closing\n");
  process.exit();
});