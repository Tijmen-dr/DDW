let vraag = 0
let lijst = []

function beginQuiz() {
    vraag++
    pasTextAan();
}

function switch1() {
    vraag++
    vraaglimit();
}

function switch2() {
    vraag--
    vraaglimit();
    vraagOpnieuw();
}

function vraaglimit() {

    if (vraag > 10){
        vraag = 10
    }

    if (vraag < 1){
        vraag = 1
    }

    pasTextAan();
}

function pasTextAan(){
    if (vraag == 1){
        document.getElementById("vraagje").innerHTML = "<h3>1. Wat is een veelvoorkomend symptoom van cafeïneverslaving?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='goed()'><strong>A. Hoofdpijn bij het overslaan van cafeïne</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. Stress verhoging</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='fout()'><strong>C. Slechtere slaapkwaliteit</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='fout()'><strong>D. Minder energie na gebruik</strong></button>"
        document.getElementById("image1").src = "../Images/drinkdrank.gif"
    }
    
    if (vraag == 2){
        document.getElementById("vraagje").innerHTML = "<h3>2. Wat is de beste manier om te stoppen met cafeïne?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. In een keer volledig afkappen</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. Zo min mogelijk per dag gebruiken</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='goed()'><strong>C. Langzaam afbouwen</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='fout()'><strong>D. Frisdrank met suiker drinken ter compensatie</strong></button>"
        document.getElementById("image1").src = "../Images/yesrno.jpeg"
    }

    if (vraag == 3){
        document.getElementById("vraagje").innerHTML = "<h3>3. Waarom is dit de beste manier van stoppen?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. Dan ben je er meteen van af</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='goed()'><strong>B. Voorkomt afkickverschijnselen</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='fout()'><strong>C. Dan hou je meer natuurlijke energie over</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='fout()'><strong>D. Dan kan je nogsteeds lekkere drankjes blijven drinken zonder consequenties</strong></button>"
        document.getElementById("image1").src = "../Images/nomore.gif"
    }

    if (vraag == 4){
        document.getElementById("vraagje").innerHTML = "<h3>4. Wat is een goed alternatief?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. Cola</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. Suiker vrije frisdrank</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='goed()'><strong>C. (Kruiden) Thee</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='fout()'><strong>D. Zwarte koffie</strong></button>"
        document.getElementById("image1").src = "../Images/keepit.gif"
    }

    if (vraag == 5){
        document.getElementById("vraagje").innerHTML = "<h3>5. Hoelang duren de cafeïne afkickverschijnselen gemiddeld?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. 1 tot 2 weken</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. 1 tot 2 uur</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='fout()'><strong>C. 1 tot 2 maanden</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='goed()'><strong>D. 1 tot 2 dagen</strong></button>"
        document.getElementById("image1").src = "../Images/uhmyes.gif"
    }

    if (vraag == 6){
        document.getElementById("vraagje").innerHTML = "<h3>6. Wat helpt om vermoeidheid te verminderen tijdens het afbouwen?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. Minder suiker eten</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. Minder koffie drinken</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='fout()'><strong>C. Optijd slapen</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='goed()'><strong>D. Alle antwoorden zijn goed</strong></button>"
        document.getElementById("image1").src = "../Images/sleepy.gif"
    }

    if (vraag == 7){
        document.getElementById("vraagje").innerHTML = "<h3>7. Welke gewoonte helpt om minder afhankelijk te worden van cafeïne?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. Cafeïne gebruiken als eerste oplossing bij vermoeidheid</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='goed()'><strong>B. </strong>Regelmatig eten en hydrateren</button>"
        document.getElementById("C").innerHTML = "<button onclick='fout()'><strong>C. </strong>Alleen op een dagdeel cafeïne drinken</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='fout()'><strong>D. </strong>Cafeïne combineren met suiker</strong></button>"
        document.getElementById("image1").src = "../Images/peterdrink.gif"
    }

    if (vraag == 8){
        document.getElementById("vraagje").innerHTML = "<h3>8. Waarom kan cafeïne je slaap verstoren?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. Het verhoogt je hartslag</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. </strong>Het blokeerd slaaphormonen</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='goed()'><strong>C. </strong>Het verhoogt je bloeddruk</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='fout()'><strong>D. </strong>Slapen is al moeilijk, dus komt niet door de cafeine</strong></button>"
        document.getElementById("image1").src = "../Images/nosleep.gif"
    }

    if (vraag == 9){
        document.getElementById("vraagje").innerHTML = "<h3>9. Wat is een realistisch doel bij het stoppen met cafeïne?</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. Natuurlijke energie opbouwen</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. </strong>Stoppen wanneer je kan/wil</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='goed()'><strong>C. </strong>Niet meer afhankelijk zijn</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='fout()'><strong>D. </strong>Maar ik wil helemaal niet stoppen!</strong></button>"
        document.getElementById("image1").src = "../Images/nomore.gif"
    }
    
    if (vraag == 10){
        document.getElementById("vraagje").innerHTML = "<h3>10. De beste mindset is:</h3>"
        document.getElementById("A").innerHTML = "<button onclick='fout()'><strong>A. </strong>Ik moet meteen stoppen!</strong></button>"
        document.getElementById("B").innerHTML = "<button onclick='fout()'><strong>B. </strong>Ik ga stoppen, maar ik wil het niet helemaal kwijt...</strong></button>"
        document.getElementById("C").innerHTML = "<button onclick='fout()'><strong>C. </strong>Ik probeer het, maar ik kan niks beloven</strong></button>"
        document.getElementById("D").innerHTML = "<button onclick='goed()'><strong>D. </strong>Elke dag een beetje minder</strong></button>"
        document.getElementById("image1").src = "../Images/midset.gif"
    }
}


let goedans = 0;
let foutans = 0;

function goed(){
    goedans++
    lijst.push("goed")
    aantallimit()
    vraag++
    if (lijst.length != 10){
        vraaglimit()
    }
        
};

function fout(){
    foutans++
    lijst.push("fout")
    aantallimit()
    vraag++
    if (lijst.length != 10){
        vraaglimit()
    }
   
}

function vraagOpnieuw(){
    lijst.pop()
}

function aantallimit() {
    if (lijst.length === 10) {
        eindigQuiz();
    }
    console.log(lijst)
}

function eindigQuiz() {
    const goedCount = lijst.filter(item => item === "goed").length;
    const foutCount = lijst.filter(item => item === "fout").length;
    document.getElementById("vraagje").innerHTML = "<h3>Finish! Bedankt voor het meedoen!</h3>";
    document.getElementById("A").innerHTML = "<h3><strong>Je hebt " + goedCount + " van de 10 antwoorden goed</strong></h3>";
    document.getElementById("B").innerHTML = "";
    document.getElementById("C").innerHTML = "";
    document.getElementById("D").innerHTML = "";
    document.getElementById("image1").src= "images/spongebob-done.gif"
}