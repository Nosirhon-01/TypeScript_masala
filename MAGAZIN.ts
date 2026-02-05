import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Telefon", price: 3000000 },
  { id: 2, name: "Noutbuk", price: 7000000 },
  { id: 3, name: "Quloqchin", price: 250000 },
  { id: 4, name: "Sichqoncha", price: 150000 }
];

let cart: Product[] = [];

function ask(q: string): Promise<string> {
  return new Promise(res => rl.question(q, res));
}

async function shop() {
  console.log("🛒 Terminal Online Dokonga xush kelibsiz!");

  while (true) {
    console.log(`
1. Mahsulotlarni korish
2. Savatchaga qoshish
3. Savatchani korish
4. Buyurtmani tasdiqlash
5. Chiqish
`);

    const choice = await ask("Tanlang (1-5): ");

    switch (choice) {
      case "1":
        console.log("📦 Mahsulotlar:");
        products.forEach(p =>
          console.log(`${p.id}. ${p.name} - ${p.price} som`)
        );
        break;

      case "2":
        const id = Number(await ask("Mahsulot ID sini kiriting: "));
        const product = products.find(p => p.id === id);

        if (product) {
          cart.push(product);
          console.log(`✅ ${product.name} savatchaga qoshildi`);
        } else {
          console.log("❌ Bunday mahsulot yoq");
        }
        break;

      case "3":
        if (cart.length === 0) {
          console.log("🧺 Savatcha bosh");
        } else {
          console.log("🧺 Savatcha:");
          let total = 0;
          cart.forEach((p, i) => {
            console.log(`${i + 1}. ${p.name} - ${p.price} som`);
            total += p.price;
          });
          console.log(`💰 Umumiy summa: ${total} som`);
        }
        break;

      case "4":
        if (cart.length === 0) {
          console.log("❌ Savatcha bosh");
        } else {
          const total = cart.reduce((s, p) => s + p.price, 0);
          console.log(`✅ Buyurtma qabul qilindi!`);
          console.log(`💵 Tolov: ${total} som`);
          cart = [];
        }
        break;

      case "5":
        console.log("👋 Xayr, yana keling!");
        rl.close();
        return;

      default:
        console.log("❌ Faqat 1-5 ni tanlang");
    }
  }
}

shop();
