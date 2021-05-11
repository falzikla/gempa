// Link URL
var urlAPI = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.xml";
var urlAPI2 = "https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.xml";
var link = "https://data.bmkg.go.id/DataMKG/TEWS/";

// AJAX
var http = new XMLHttpRequest();
http.open("GET", urlAPI);
http.send();
http.addEventListener("load", () => {
    var respond = http.responseXML.all;

    var tanggal = respond[2].textContent;
    var jam = respond[3].textContent;
    var waktus = waktu(respond[4].textContent, 0);
    var koordinat = respond[6].textContent;
    var lintang = respond[7].textContent;
    var bujur = respond[8].textContent;
    var magnitude = respond[9].textContent;
    var kedalaman = respond[10].textContent;
    var wilayah = respond[11].textContent;
    var potensi = respond[12].textContent;
    var dirasakan = respond[13].textContent;
    var shakemap = link + respond[14].textContent;

    document.getElementById("tanggal").innerHTML += tanggal;
    document.getElementById("jam").innerHTML += jam;
    document.getElementById("waktus").innerHTML += waktus;
    document.getElementById("koordinat").innerHTML += koordinat;
    document.getElementById("lintang").innerHTML += lintang;
    document.getElementById("bujur").innerHTML += bujur;
    document.getElementById("magnitude").innerHTML += magnitude;
    document.getElementById("kedalaman").innerHTML += kedalaman;
    document.getElementById("wilayah").innerHTML += wilayah;
    document.getElementById("potensi").innerHTML += potensi;
    document.getElementById("dirasakan").innerHTML += dirasakan;
    document.getElementById("shakemap").innerHTML += "<a href=" + shakemap +" target='_blank'> <img class='lokasi' src="+shakemap+"></img></a>";
});

var https = new XMLHttpRequest();
https.open("GET", urlAPI2);
https.send();
https.addEventListener("load", () => {
    
    var respond = https.responseXML;

    var gempa = respond.getElementsByTagName("gempa");
    var tanggal = respond.getElementsByTagName("Tanggal");
    var jam = respond.getElementsByTagName("Jam");
    var waktus = respond.getElementsByTagName("DateTime");
    var koordinat = respond.getElementsByTagName("coordinates");
    var lintang = respond.getElementsByTagName("Lintang");
    var bujur = respond.getElementsByTagName("Bujur");
    var magnitude = respond.getElementsByTagName("Magnitude");
    var kedalaman = respond.getElementsByTagName("Kedalaman");
    var wilayah = respond.getElementsByTagName("Wilayah");
    var dirasakan = respond.getElementsByTagName("Dirasakan");

    for (i=0; i < gempa.length; i++) {
        document.getElementById("berita").innerHTML += 
        "<label id='tanggal2'>Tanggal : " + tanggal[i].textContent + "</label><br>" +
        "<label id='jam2'>Jam : " + jam[i].textContent + "</label><br>" +
        "<label id='waktus2'>Waktu : " + waktu(waktus[i].textContent, 0) + "</label><br>" +
        "<label id='koordinat2'>Koordinat : " + koordinat[i].textContent + "</label><br>" +
        "<label id='lintang2'>Lintang : " + lintang[i].textContent + "</label><br>" +
        "<label id='bujur2'>Bujur : " + bujur[i].textContent + "</label><br>" +
        "<label id='magnitude2'>Magnitude : " + magnitude[i].textContent + "</label><br>" +
        "<label id='kedalaman2'>Kedalaman : " + kedalaman[i].textContent + "</label><br>" +
        "<label id='wilayah2'>Wilayah : " + wilayah[i].textContent + "</label><br>" +
        "<label id='dirasakan2'>Dirasakan : " + dirasakan[i].textContent + "</label><br><br>";
    }
});
