console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

let name = '';

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    name += chunk;
  }
});

process.stdin.on('end', () => {
  name = name.trim();
  if (name) {
    console.log(`Your name is: ${name}`);
  }
  console.log('This important software is now closing');
});
