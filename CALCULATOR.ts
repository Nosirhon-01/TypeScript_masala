import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q: string): Promise<string> {
  return new Promise(res => rl.question(q, res));
}

async function calculator() {
  console.log("🧮 Calculator (add / sub / mul / div)");
  console.log("Masalan: add 5 3 | exit");

  while (true) {
    const input = await ask(">> ");
    if (input === "exit") {
      rl.close();
      break;
    }

    const [cmd, a, b] = input.split(" ");
    const x = Number(a);
    const y = Number(b);

    switch (cmd) {
      case "add":
        console.log(x + y);
        break;
      case "sub":
        console.log(x - y);
        break;
      case "mul":
        console.log(x * y);
        break;
      case "div":
        console.log(y !== 0 ? x / y : "❌ 0 ga bo‘linmaydi");
        break;
      default:
        console.log("❌ Noto‘g‘ri buyruq");
    }
  }
}

calculator();
