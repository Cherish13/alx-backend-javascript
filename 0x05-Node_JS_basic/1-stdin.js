process.stdout.write("Welcome to Holberton School, what is yoyr name?\n");

process.stdin.on('readable', () => {
  const cherish = process.stdin.read();

  if (cherish) {
    process.stdout.write("Your name is: ${cherish}");
  }
});

  process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});