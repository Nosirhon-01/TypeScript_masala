import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let balance: number = 100000;
const PIN_CODE = "1234";

rl.question("PIN kodni kiriting: ", (pin: string) => {
  if (pin !== PIN_CODE) {
    console.log("❌ PIN notogri!");
    rl.close();
    return;
  }

  console.log("✅ Xush kelibsiz!");
  showMenu();
});

function showMenu(): void {
  console.log(`
1. Umumiy summani korish
2. Pul qoshish
3. Pul yechish
4. Boshqa kartaga pul otkazish
5. Chiqish
`);

  rl.question("Tanlang (1-5): ", (choice: string) => {
    switch (choice) {
      case "1":
        console.log(`💰 Balans: ${balance} som`);
        showMenu();
        break;

      case "2":
        rl.question("Qancha pul qoshiladi: ", (amount: string) => {
          const sum = Number(amount);
          if (sum > 0) {
            balance += sum;
            console.log(`✅ ${sum} som qoshildi`);
          } else {
            console.log("❌ Notogri summa");
          }
          showMenu();
        });
        break;

      case "3":
        rl.question("Qancha pul yechiladi: ", (amount: string) => {
          const sum = Number(amount);
          if (sum > 0 && sum <= balance) {
            balance -= sum;
            console.log(`✅ ${sum} som yechildi`);
          } else {
            console.log("❌ Balans yetarli emas yoki xato summa");
          }
          showMenu();
        });
        break;

      case "4":
        rl.question("Qabul qiluvchi karta raqamini kiriting: ", (_card: string) => {
          rl.question("Qancha pul otkazilsin: ", (amount: string) => {
            const sum = Number(amount);
            if (sum > 0 && sum <= balance) {
              balance -= sum;
              console.log(`✅ ${sum} som otkazildi`);
            } else {
              console.log("❌ Xato summa yoki balans yetarli emas");
            }
            showMenu();
          });
        });
        break;

      case "5":
        console.log("👋 Xayr, rahmat!");
        rl.close();
        break;

      default:
        console.log("❌ Notogri tanlov");
        showMenu();
    }
  });
}
