import {
  library,
  win,
  addBook,
  kitapsil,
  searchBook,
  exit,
} from "./libraryFunctions.js";

while (win) {
  const userInput = prompt(
    "Yapmak istediğiniz işlemin numarasını giriniz: \n1.Mevcut Kitaplarım \n2.Kitap Ekle \n3.Kitap Sil \n4.Kitap Ara \n5.Çıkış"
  );
  switch (userInput) {
    case "1":
      alert(library);
      break;
    case "2":
      addBook();
      break;
    case "3":
      kitapsil();
      break;
    case "4":
      searchBook();
      break;
    case "5":
      exit();
      break;
    case null:
      win = false;
      break;
    default:
      break;
  }
}
