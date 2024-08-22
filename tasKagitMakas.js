let madde = ["tas", "kagit", "makas"];
let win = false;

while (!win) {
  const select = prompt("Bir seç:");
  console.log(`Seçiminiz : ${select}`);
  
  let makine = Math.floor(Math.random() * madde.length);
  console.log(`Bilgisayar seçimi : ${madde[makine]}`);
  
  if (select === madde[makine]) {
    console.log("Berabere kaldınız");
  } else if (
    (select === "tas" && madde[makine] === "kagit") || 
    (select === "makas" && madde[makine] === "tas") || 
    (select === "kagit" && madde[makine] === "makas")
  ) {
    console.log("Yenildiniz");
  } else {
    console.log("Kazandınız");
    win = true
    // alternatif olarak break kullanabilirsin 
  }
}





// if (select === madde[makine]) {
//   console.log("berabere kaldınınz");
// } else if ((select === "tas", madde[makine] === "kagit")) {
//   console.log("yenildiniz");
// } else if ((select === "tas", madde[makine] === "makas")) {
//   console.log("kazandınız");
// } else if ((select === "makas", madde[makine] === "kagit")) {
//   console.log("kazandınız");
// } else if ((select === "makas", madde[makine] === "tas")) {
//   console.log("yenildiniz");
// } else if ((select === "kagit", madde[makine] === "makas")) {
//   console.log("yenildiniz");
// } else {
//   console.log("kazandınız");
// }
