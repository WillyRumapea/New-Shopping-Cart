const hargaBarang = document.querySelectorAll(".harga-barang");
const jumlahBarang = document.querySelectorAll(".jumlah-barang");
const totalHargaBarang = document.querySelectorAll(".total-harga-barang");
const sectionBarang = document.querySelectorAll(".section-barang");
const totalBelanja = document.getElementById("total-belanja");
const p_total_belanja = document.getElementById("p-total-belanja");
const hargaBelanjaan = document.querySelector(".harga-belanjaan");
let i = 1;
let j = 1;
let rupiah_total = 0;

jumlahBarang.forEach((input, index) => {
  input.addEventListener("input", () => {
    let harga = parseFloat(
      hargaBarang[index].innerText.replace("Rp ", "").replace(",", "")
    );

    let total = harga * input.value;

    let valueHargaBarang = document.createElement("p");

    valueHargaBarang.innerHTML = "Rp " + total.toLocaleString() + ".000";

    totalHargaBarang[index].innerHTML = "";

    totalHargaBarang[index].appendChild(valueHargaBarang);
  });
});

sectionBarang.forEach((section, index) => {
  const tambahkanKeranjang = document.createElement("button");
  tambahkanKeranjang.className = "tambah-keranjang";
  tambahkanKeranjang.innerHTML = "keranjang";

  tambahkanKeranjang.addEventListener("click", () => {
    let liHargaBarang = document.createElement("li");
    let totalHargaBarangValue = totalHargaBarang[index].innerText;
    // console.log(hargaBarang[index].innerText);

    let harga = parseFloat(
      hargaBarang[index].innerText.replace("Rp ", "").replace(",", "")
    );

    rupiah_total += parseInt(harga * 1000);

    liHargaBarang.className = "liHargaBarang";
    liHargaBarang.append(
      j++ + ". " + "barang ke- " + i++ + ": " + totalHargaBarangValue
    );
    hargaBelanjaan.append(liHargaBarang);
    p_total_belanja.innerText =
      "Total : Rp. " + rupiah_total.toLocaleString().replace(/,/g, ".");
  });

  section.appendChild(tambahkanKeranjang);
});

totalBelanja.addEventListener("click", () => {
  const konfirmasiPembayaran = confirm(
    "Konfirmasi Pembayaran anda sebesar  " +
      "\n" +
      p_total_belanja.innerText +
      "\n apakah anda yakin ?"
  );

  if (konfirmasiPembayaran) {
    alert("pembayaran anda berhasil");
  } else {
    alert("pembayaran anda batalkan");
  }

  p_total_belanja.innerText = p_total_belanja.innerText
    .replace(/\d/g, "")
    .replace("Rp", "")
    .replace(".", "")
    .replace(".", "");

  while (hargaBelanjaan.firstChild) {
    hargaBelanjaan.removeChild(hargaBelanjaan.firstChild);
  }

  hargaBelanjaan.innerText = "Barang Belanja :";

  jumlahBarang.forEach((barang) => {
    barang.value = "0";
  });
});
