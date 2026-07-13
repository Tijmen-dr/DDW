let vraag = 0;
let lijst = [];

function beginQuiz() {
    vraag++;
    pasTextAan();
}

function switch1() {
    vraag++;
    vraaglimit();
}

function switch2() {
    vraag--;
    vraaglimit();
    vraagOpnieuw();
}

function vraaglimit() {

    if (vraag > 10) {
        vraag = 10;
    }

    if (vraag < 1) {
        vraag = 1;
    }

    pasTextAan();
}

function disableButtons() {
    document.querySelectorAll(".option button").forEach(button => {
        button.disabled = true;
    });
}

function showCorrectAnswer() {
    const correct = document.querySelector(".correct-answer");

    if (correct) {
        correct.classList.add("correct");
    }
}

function pasTextAan() {

    if (vraag == 1) {
        document.getElementById("vraagje").innerHTML = "<h1>1. Wat is Dyldap zijn meest bekende voice line</h1>";

        document.getElementById("A").innerHTML =
            "<button onclick='fout(this)'><strong>A.</strong> \"Morgen stop ik met uitstellen\"</button>";

        document.getElementById("B").innerHTML =
            "<button onclick='fout(this)'><strong>B.</strong> *Insert Thumbs UP emoji*</button>";

        document.getElementById("C").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>C.</strong> \"Hoi, ik ben Dylan\"</button>";

        document.getElementById("D").innerHTML =
            "<button onclick='fout(this)'><strong>D.</strong> \"Hallo Hallo Hallo\"</button>";

        document.getElementById("image1").src = "../Images/IMG_8334.jpg";
    }

    if (vraag == 2) {
        document.getElementById("vraagje").innerHTML = "<h1>2. Waar heeft Dyldap al 6-7 jaar ervaring in?</h1>";

        document.getElementById("A").innerHTML =
            "<button onclick='fout(this)'><strong>A.</strong>Gamen</button>";

        document.getElementById("B").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>B.</strong>Scratch</button>";

        document.getElementById("C").innerHTML =
            "<button onclick='fout(this)'><strong>C.</strong>Nintendo fan zijn</button>";

        document.getElementById("D").innerHTML =
            "<button onclick='fout(this)'><strong>D.</strong>Single zijn</button>";

        document.getElementById("image1").src = "../Images/programmerdylano.png";
    }

    if (vraag == 3) {
        document.getElementById("vraagje").innerHTML = "<h1>3. Welk woord gebruikt Dyldap als hij zegt dat hij vandaag \"Family Friendly\" is? (Meerdere antwoorden zijn goed)</h1>";

        document.getElementById("A").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>A.</strong> Fiddlesticks</button>";

        document.getElementById("B").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>B.</strong> Anker</button>";

        document.getElementById("C").innerHTML =
            "<button onclick='fout(this)'><strong>C.</strong> Potverdorie</button>";

        document.getElementById("D").innerHTML =
            "<button onclick='fout(this)'><strong>D.</strong> Dyldap kan niet Family Friendly zijn</button>";

        document.getElementById("image1").src = "../Images/IMG_6540-1.jpg";
    }

    if (vraag == 4) {
        document.getElementById("vraagje").innerHTML = "<h1>4. Ondanks het feit dat Dyldap maar 20 minuten in de trein hoeft te zitten om op school aan te komen, is hij lang afwezig geweest, maar hoeveel procent <strong>aanwezigheid</strong> heeft Dyldap dan? (kan inaccuraat zijn...)</h1>";

        document.getElementById("A").innerHTML =
            "<button onclick='fout(this)'><strong>A.</strong> 51% aanwezig</button>";

        document.getElementById("B").innerHTML =
            "<button onclick='fout(this)'><strong>B.</strong> 63% aanwezig</button>";

        document.getElementById("C").innerHTML =
            "<button onclick='fout(this)'><strong>C.</strong> 61% aanwezig</button>";

        document.getElementById("D").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>D.</strong> 58% aanwezig</button>";

        document.getElementById("image1").src = "../Images/058879AB-7C5C-48E7-95A2-D9E097A728F5.png";
    }

    if (vraag == 5) {
        document.getElementById("vraagje").innerHTML = "<h1>5. Hoeveel tabs heeft Dyldap op zijn persoonlijke computer open staan? (SLUIT ZE NOU EENS MAN 😭)</h1>";

        document.getElementById("A").innerHTML =
            "<button onclick='fout(this)'><strong>A.</strong> 47 dabs</button>";

        document.getElementById("B").innerHTML =
            "<button onclick='fout(this)'><strong>B.</strong> 32 tabs</button>";

        document.getElementById("C").innerHTML =
            "<button onclick='fout(this)'><strong>C.</strong> 51 tabs</button>";

        document.getElementById("D").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>D.</strong> Geen idee, veel te veel</button>";

        document.getElementById("image1").src = "../Images/20250602_161201.jpg";
    }

    if (vraag == 6) {
        document.getElementById("vraagje").innerHTML = "<h1>6. Wat is de favoriete docent van Dyldap?</h1>";

        document.getElementById("A").innerHTML =
            "<button onclick='fout(this)'><strong>A.</strong> Docent INTERFACE</button>";

        document.getElementById("B").innerHTML =
            "<button onclick='fout(this)'><strong>B.</strong> Docent CREACOD</button>";

        document.getElementById("C").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>C.</strong> Docent Burgerschap</button>";

        document.getElementById("D").innerHTML =
            "<button onclick='fout(this)'><strong>D.</strong> Docent Rekenen</button>";

        document.getElementById("image1").src = "../Images/IMG_2593-1.jpg";
    }

    if (vraag == 7) {
        document.getElementById("vraagje").innerHTML = "<h1>7. Naast Dyldap, wat is de meest gebruikte nickname voor Dylan? (Meerdere antwoorden zijn goed)</h1>";

        document.getElementById("A").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>A.</strong>Dylano</button>";

        document.getElementById("B").innerHTML =
            "<button onclick='fout(this)'><strong>B.</strong>Dyly</button>";

        document.getElementById("C").innerHTML =
            "<button onclick='fout(this)'><strong>C.</strong>Damen van Tijmen</button>";

        document.getElementById("D").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>D.</strong>Dyldaapstaaf</button>";

        document.getElementById("image1").src = "../Images/IMG_1434.jpg";
    }

    if (vraag == 8) {
        document.getElementById("vraagje").innerHTML = "<h1>8. Welke docent noemde Dyldap een \"normale Nintendo fan\"</h1>";

        document.getElementById("A").innerHTML =
            "<button onclick='fout(this)'><strong>A.</strong> Docent Rekenen</button>";

        document.getElementById("B").innerHTML =
            "<button onclick='fout(this)'><strong>B.</strong> Docent Burgerschap</button>";

        document.getElementById("C").innerHTML =
            "<button onclick='fout(this)'><strong>C.</strong> Docent Engels</button>";

        document.getElementById("D").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>D.</strong> Docent OVH</button>";

        document.getElementById("image1").src = "../Images/IMG_7543.jpg";
    }

    if (vraag == 9) {
        document.getElementById("vraagje").innerHTML = "<h1>9. Wat is de origin van de \"Dylano Italiano\" image?</h1>";

        document.getElementById("A").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>A.</strong> De originele foto was gemaakt tijdens een INTERFACE les waar Dyldap te laat kwam</button>";

        document.getElementById("B").innerHTML =
            "<button onclick='fout(this)'><strong>B.</strong> De originele foto was gemaakt tijdens een MINOR les waar Dyldap op een andere plek moest zitten omdat hij niet met de T(h)ijmens werktte.</button>";

        document.getElementById("C").innerHTML =
            "<button onclick='fout(this)'><strong>C.</strong> De originele foto was gemaakt tijdens INTERFACE les waar Dyldap ergens anders moest zitten</button>";

        document.getElementById("D").innerHTML =
            "<button onclick='fout(this)'><strong>D.</strong> De originele foto was gemaakt tijdens een PROGRAM les waar Dyldap te laat kwam</button>";

        document.getElementById("image1").src = "../Images/169dylano.png";
    }

    if (vraag == 10) {
        document.getElementById("vraagje").innerHTML = "<h1>10. Wie is dit? (Meerdere antwoorden zijn goed)</h1>";

        document.getElementById("A").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>A.</strong>Dylan Junior</button>";

        document.getElementById("B").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>B.</strong>Anne-Fleur</button>";

        document.getElementById("C").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>C.</strong>Anne-Dylan</button>";

        document.getElementById("D").innerHTML =
            "<button class='correct-answer' onclick='goed(this)'><strong>D.</strong>Spermacel</button>";

        document.getElementById("image1").src = "../Images/94D4E4AE-F654-4E16-92A4-3FEFF64C6D6F.png";
    }
}


let goedans = 0;
let foutans = 0;

function goed(button) {

    disableButtons();

    button.classList.add("correct");

    setTimeout(() => {

        goedans++;
        lijst.push("goed");

        aantallimit();

        if (lijst.length != 10) {
            vraag++;
            vraaglimit();
        }

    }, 1500);
}

function fout(button) {

    disableButtons();

    button.classList.add("wrong");

    showCorrectAnswer();

    setTimeout(() => {

        foutans++;
        lijst.push("fout");

        aantallimit();

        if (lijst.length != 10) {
            vraag++;
            vraaglimit();
        }

    }, 1500);
}

function vraagOpnieuw() {

    if (lijst.length > 0) {
        lijst.pop();
    }

}

function aantallimit() {

    if (lijst.length === 10) {
        eindigQuiz();
    }

    console.log(lijst);

}

function eindigQuiz() {

    const goedCount = lijst.filter(item => item === "goed").length;

    document.getElementById("vraagje").innerHTML =
        "<h1>Finish! Bedankt voor het meedoen!</h1>";

    document.getElementById("A").innerHTML =
        "<h2><strong>Je hebt " + goedCount + " van de 10 antwoorden goed!</strong></h2>";

    document.getElementById("B").innerHTML = "";
    document.getElementById("C").innerHTML = "";
    document.getElementById("D").innerHTML = "";

    document.getElementById("image1").src =
        "../Images/IMG_1903-1-1.jpg";
    document.getElementById("back").innerHTML = "<p></p>"
}