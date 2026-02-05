import readline from "readline";

// Terminal bilan ishlash
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Terminaldan qiymat so‘rash (async/await uchun)
function ask(q: string): Promise<string> {
  return new Promise(res => rl.question(q, res));
}

// Savol tipi
type Question = {
  q: string;
  options: string[];
  answer: number;
};

// Hayotiy + dasturlash savollari
const questions: Question[] = [
  { q: "Suv qaynash harorati necha daraja?", options: ["90°C", "100°C", "120°C"], answer: 1 },
  { q: "JavaScript qaysi yilda yaratilgan?", options: ["1993", "1995", "1998"], answer: 1 },
  { q: "TypeScript kim tomonidan yaratilgan?", options: ["Google", "Microsoft", "Meta"], answer: 1 },
  { q: "Telefoningiz zaryadi 0% bo‘lsa nima qilasiz?", options: ["O‘chiraman", "Zaryad qilaman", "Hech narsa qilmayman"], answer: 1 },
  { q: "JS da `let` nimaga ishlatiladi?", options: ["O‘zgaruvchi", "Funksiya", "Class"], answer: 0 },
  { q: "`===` nimani tekshiradi?", options: ["Faqat qiymat", "Qiymat va tip", "Faqat tip"], answer: 1 },
  { q: "Array qaysi tipga kiradi?", options: ["object", "string", "number"], answer: 0 },
  { q: "`null` nimani anglatadi?", options: ["Qiymat yo‘q", "Xato", "0"], answer: 0 },
  { q: "Noutbuk ishlamayapti, nima qilasan?", options: ["Zaryad qilaman", "Qayta ishga tushiraman", "Hech narsa qilmayman"], answer: 1 },
  { q: "`NaN` nimani bildiradi?", options: ["New number", "Not a Number", "Null"], answer: 1 },
  { q: "`const` o‘zgaradimi?", options: ["Ha", "Yo‘q", "Ba’zida"], answer: 1 },
  { q: "`typeof []` natijasi nima?", options: ["array", "object", "list"], answer: 1 },
  { q: "JS qaysi muhitda ishlaydi?", options: ["Browser", "Node.js", "Ikkalasi"], answer: 2 },
  { q: "Ishxonada kompyuter isib ketdi, nima qilasan?", options: ["Ventilyatorga qo‘yaman", "Hech narsa qilmayman", "Suv sepaman"], answer: 0 },
  { q: "`map()` nima qaytaradi?", options: ["Array", "Object", "Number"], answer: 0 },
  { q: "`push()` nima qiladi?", options: ["O‘chiradi", "Qo‘shadi", "Almashtiradi"], answer: 1 },
  { q: "`pop()` nima qiladi?", options: ["Oxiridan o‘chiradi", "Boshidan o‘chiradi", "Qo‘shadi"], answer: 0 },
  { q: "`Math.random()` nimani qaytaradi?", options: ["0–1 orasida son", "Butun son", "Manfiy son"], answer: 0 },
  { q: "`for` nima?", options: ["Shart", "Sikl", "Funksiya"], answer: 1 },
  { q: "`break` nima qiladi?", options: ["Davom ettiradi", "To‘xtatadi", "O‘tkazib yuboradi"], answer: 1 },
  { q: "`continue` nima qiladi?", options: ["Siklni to‘xtatadi", "Keyingisiga o‘tadi", "Chiqaradi"], answer: 1 },
  { q: "`Number('5')` nima bo‘ladi?", options: ["string", "number", "NaN"], answer: 1 },
  { q: "`console.log()` nima?", options: ["Input", "Output", "Error"], answer: 1 },
  { q: "TypeScript nimasi bilan JS dan farq qiladi?", options: ["Tiplar bor", "Sekin", "Browserda ishlamaydi"], answer: 0 },
  { q: "Choyga shakar qo‘shasizmi?", options: ["Ha", "Yo‘q", "Ba’zida"], answer: 2 },
  { q: "Internet ishlamayapti, nima qilasan?", options: ["Routerni qayta yoqaman", "Hech narsa qilmayman", "Kompyuterni tashlayman"], answer: 0 },
  { q: "Uyga ketish vaqti keldi, nima qilasan?", options: ["Uyga boraman", "Ishda qolaman", "O‘tiraman"], answer: 0 }
  // 🔥 Shu tarzda 100 tagacha davom ettirish mumkin
];

// Quiz funksiyasi
async function quiz() {
  let score = 0;

  console.log(`🧠 QUIZ boshlandi! (${questions.length} ta savol)\n`);
  console.log("Noto‘g‘ri bo‘lsa ham davom etadi ✅\n");

  for (const item of questions) {
    console.log(item.q);
    item.options.forEach((o, i) => console.log(`${i + 1}. ${o}`));

    const ans = Number(await ask("Javob (1-3): ")) - 1;

    if (ans === item.answer) {
      console.log("✅ To‘g‘ri\n");
      score++;
    } else {
      console.log("❌ Noto‘g‘ri (davom etamiz)\n");
    }
  }

  console.log("🏁 TEST TUGADI");
  console.log(`🎯 Natija: ${score} / ${questions.length}`);

  rl.close();
}

// ❗ MANA BU QATOR MUHIM
quiz();
