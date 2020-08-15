

document.getElementById("html").style.color = "red";
document.getElementById("css").style.color = "red";
document.getElementById("javascript").style.color = "red";


function htmlText(id) {
    let html = document.getElementById("pHtml");

    html.innerHTML = "<p> HTML bukanlah bahasa pemrograman, dan itu berarti HTML tidak punya kemampuan untuk membuat fungsionalitas yang dinamis.Sebagai gantinya, HTML memungkinkan user untuk mengorganisir dan memformat dokumen, sama seperti Microsoft Word. Ketika bekerja dengan HTML, kami menggunakan struktur kode yang sederhana(tag dan attribute) untuk mark up halaman website </p > ";
}

function cssText(id) {
    let css = document.getElementById("pCss");

    css.innerHTML = "<p> Pada awal dibuat tahun 1996 silam, CSS sendiri difungsikan untuk memformat halaman. Selain itu, permasalahan seperti tags font yang diperkenalkan HTML menyebabkan banyak masalah bagi developer, dikarenakan website membutuhkan font, warna background, dan style maka CSS dapat menyelesaikan masalah ini. Css merupakan kependekan dari Cascading StyleSheet</P>";
}

function jsText(id) {
    let js = document.getElementById("pJs");

    js.innerHTML = "<p> Javascript membuat website menjadi lebih responsif jadi apabila tidak ada tidak masalah tapi akan sangat berpengaruh pada tampilan website. Anda bisa mengibaratkan pada rumah Anda. Mungkin tidak masalah tidak menggunakan lampu atau tidak dipasang pintu tapi tentu kesannya rumah akan suram dan kurang menarik. Begitu pula dengan website, tidak adanya javascript membuat website kurang menarik. </P>";
}