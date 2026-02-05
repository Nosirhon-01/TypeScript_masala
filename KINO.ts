import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q: string): Promise<string> {
  return new Promise(res => rl.question(q, res));
}

const movies = ["Interstellar", "Oppenheimer"];
const pricePerTicket = 50000;

async function cinema() {
  console.log("🎬 Kino chipta bron qilish");

  movies.forEach((m, i) => console.log(`${i + 1}. ${m}`));
  const choice = Number(await ask("Film tanlang: ")) - 1;

  if (!movies[choice]) {
    console.log("❌ Noto‘g‘ri tanlov");
    rl.close();
    return;
  }

  const count = Number(await ask("Nechta chipta: "));
  const seat = await ask("Qaysi joy (A1, B2...): ");

  const total = count * pricePerTicket;

  console.log(`
✅ Buyurtma tasdiqlandi
🎥 Film: ${movies[choice]}
🎟️ Chipta: ${count}
📍 Joy: ${seat}
💰 Umumiy narx: ${total} so‘m
`);

  rl.close();
}

cinema();
