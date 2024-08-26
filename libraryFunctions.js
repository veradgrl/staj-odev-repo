export let library = [
  "Little Prince",
  "Dorian Grey'in Portresi",
  "Maze Runner",
  "Hunger Games",
  "w",
];

export let win = true;

export function addBook() {
  let newBook = prompt("kitap adı gir");
  console.log(typeof newBook);
  
if (newBook === null) {
  console.log("null girildi");
  // iptale basıldığında yeniden prompt göndermesini istiyorum.
}
else
 if (newBook ==="") {
  addBook()
}
  else if (library.includes(newBook)) {
    alert("Bu kitap zaten mevcut");
    addBook();
  } else {
    library[library.length] = newBook;
    console.log(library);
    alert(library);
  }
}
// addBook()

export function kitapsil() {
  let silinecekkitap = prompt(`Silinecek kitabın adını yazınız  ${library}`);


  if (silinecekkitap === null) {
    console.log("null girildi");
    // iptale basıldığında yeniden prompt göndermesini istiyorum.
  }
  else
  if (
    silinecekkitap === "" ||
    library.indexOf(silinecekkitap) === -1
  ) {
    console.log("f");
    alert("Doğru kitap adı girdiğinizden emin olunuz!");
    kitapsil();
  } else {
    let x = library.indexOf(silinecekkitap);
    console.log(x);
    library.splice(x, 1);
    console.log(library);
    alert(`Mevcut kitaplarınız: ${library}`);
  }
}
// kitapsil();

export function listBooks() {
  alert(`Mevcut kitaplarınız: ${library}`);
}
// listBooks()

export function searchBook() {
  let searchingBook = prompt("Aratmak istediğiniz kitabın adını giriniz:");
  console.log(searchingBook);

  if (searchingBook === null) {
    console.log("null girildi");
    // iptale basıldığında yeniden prompt göndermesini istiyorum.
  }
  else
  if (library.includes(searchingBook)) {
    alert(`${searchingBook} kitaplığınızda mevcut`);
  } else {
    alert("Kitap ne yazık ki kitaplığınızda mevcut değil");
  }
}
// searchBook();

export function exit() {
  let exitConfirmation = confirm("Çıkış yapmak istediğinize emin misiniz?");
  if (exitConfirmation) {
    win = false;
    alert("Çıkış işleminiz başarılı!");
  } else {
    alert("Çıkış işleminiz başarısız!");
  }
}
// exit()
