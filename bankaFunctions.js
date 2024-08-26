export let bakiye = 1000;

export let win = true;
export function onayla() {
  const sonuc = confirm("Bu işlemi naylıyor musunuz?");
  if (sonuc) {
    alert("Çıkış işlemi başarılı.");
    win = false;
  } else {
    alert("Çıkış işlemi başarısız.");
  }
}

export function iptal() {
  win = false;
}

export function paraCekme() {
  const cekilecekSayi = prompt("Çekmek istediğiniz miktarı giriniz :");
  console.log(cekilecekSayi);
  bakiye = bakiye - cekilecekSayi;
  alert(`Kalan Bakiyeniz : ${bakiye}`);
  console.log(bakiye);
}

export function paraYatirma() {
  const yatirilacakSayi = Number(
    prompt("Yatırmak istediğiniz miktarı giriniz :")
  );
  console.log(yatirilacakSayi);

  bakiye = bakiye + yatirilacakSayi;
  alert(`Yeni Bakiyeniz : ${bakiye}`);
  console.log(bakiye);
}
