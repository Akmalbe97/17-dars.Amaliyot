"use strict";

/* Darsga topshiriq:
1) Darsga muvofiq topshiriqning birinchi qismini takrorlang
2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi
3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - $ {ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi
P.S. Funksiyalarni chaqirish shart emas */

let numberOfNews;

function startProject() {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

    while(numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
        numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
    }
}

startProject();


const personalNewsDB = {
    count: numberOfNews,
    news:  {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberNews() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("oxirgi ko'rgan yangiliklarizdan biri?"),
            b = prompt ("unga qancha baxo qo'yasiz");
    
        if(a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalNewsDB.news[a] = b;
            console.log("Tayyor");
        } else {
            console.log ("Xato");
            i--;
        }
    }
}

rememberNews();

function showPersonalLevel() {
    if (personalNewsDB.count < 10) {
        console.log("Juda oz sonli yangiliklar o'qilibdi");
    } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
        console.log("siz klassik tomoshabinsiz");
    } else if (personalNewsDB.count > 30) {
        console.log("siz yangiliklar ishqibozisiz");
    } else {
        console.log("Xato yuz berdi");
    } 
}
showPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalNewsDB);
    }
}

showMyDB(personalNewsDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalNewsDB.genres[i - 1] = prompt(`Sizning sevimli janringiz ${i}`);
    }
}

writeYourGenres();

