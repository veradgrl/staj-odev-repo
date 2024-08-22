// let bakiye = 1000;

import {
  paraCekme,
  paraYatirma,
  bakiye,
  onayla,
  win,
  iptal,
} from "./functions.js";
console.log("Bakiyeniz :", bakiye);

console.log("vera");


while (win) {
  const kullaniciGirisi = prompt(
    "Yapmak istediğiniz işlemin numarasını giriniz : \n1.bakiyemi görüntüle, \n2.para çek, \n3.para yatır, \n4.çıkış"
  );
  switch (kullaniciGirisi) {
    case "1":
      alert(bakiye);
      break;
    case "2":
      paraCekme();
      break;
    case "3":
      paraYatirma();
      break;
    case "4":
      onayla();
      break;
    default:
      iptal();
      break;
  }
}

// function onayla (){
//   const sonuc = confirm("Bu işlemi naylıyor musunuz?")
//   if (sonuc) {
//       alert("Çıkış işlemi başarılı.");
//       win = false
//   } else {
//       alert("Çıkış işlemi başarısız.");
//   }
// }

// function paraCekme() {
// const cekilecekSayi = prompt("Çekmek istediğiniz miktarı giriniz :");
// console.log(cekilecekSayi);
// bakiye = bakiye - cekilecekSayi;
// alert(`Kalan Bakiyeniz : ${bakiye}`);
// console.log(bakiye);
// }

// function paraYatirma() {
// const yatirilacakSayi = Number(
//   prompt("Yatırmak istediğiniz miktarı giriniz :")
// );
// console.log(yatirilacakSayi);

// bakiye = bakiye + yatirilacakSayi;
// alert(`Yeni Bakiyeniz : ${bakiye}`);
// console.log(bakiye);
// }
