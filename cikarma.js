let toplamSoru = 5;
let dogruCevap = 0;
let yanlisCevap = 0;

for (let index = 0; index < 5; index++) {
  let sayi1 = Math.floor(Math.random() * 20) + 1;
  console.log();

  let sayi2 = Math.floor(Math.random() * 20) + 1;
  console.log();

  if (sayi1 > sayi2) {
    let cikarma = sayi1 - sayi2;
    console.log(cikarma);

    let kullaniciCevap = prompt(`${sayi1}-${sayi2}`);
    console.log(kullaniciCevap);

    if (Number(kullaniciCevap) === cikarma) {
      alert("doğru");
      dogruCevap = dogruCevap + 1;
    } else {
      alert("yanlış");
      yanlisCevap = yanlisCevap + 1;
    }
  } else {
    let cikarma = sayi2 - sayi1;
    console.log(cikarma);
    let kullaniciCevap = prompt(`${sayi2}-${sayi1}`);
    console.log(kullaniciCevap);

    if (Number(kullaniciCevap) === cikarma) {
      alert("doğru");
      dogruCevap = dogruCevap + 1;
    } else {
      alert("yanlış");
      yanlisCevap = yanlisCevap + 1;
    }
  }
}

alert(
  `Toplam Soru: ${toplamSoru} \n.Dogru Cevap: ${dogruCevap} \n.Yanlis Cevap: ${yanlisCevap}`
);
