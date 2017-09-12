var barve = randomBarve(6);
var izbranaBarva = randBarva();
var prikazBarve = document.getElementById("prikaz");
var kvadrati = document.querySelectorAll(".kvadrat");
var novposkus = document.querySelector("#poskusi");
var ponovno = document.getElementById("nove");
var header = document.getElementsByTagName("h1");
var nacin = document.getElementsByClassName("nacin");
var konec = false;
var tezavnost = 6;
nacin[1].classList.add("trenutno")
prikazBarve.textContent = izbranaBarva;

//dodaj barve kvadratom
for (var i = 0; i < kvadrati.length; i++) {
    kvadrati[i].style.backgroundColor = barve[i];
    //event za klik
    kvadrati[i].addEventListener("click", function () {
        //ce barva kvadrata ustreza izbrani - zmaga
        if (this.style.backgroundColor === izbranaBarva) {
            konec = true;
            for (var i = 0; i < kvadrati.length; i++)
                //pobarvaj ostale kvadratke
                kvadrati[i].style.backgroundColor = izbranaBarva;
            alert("zmaga");
            novposkus.style.visibility = "visible"
            novposkus.textContent = "Pravilno!";
            document.querySelector("h1").style.backgroundColor = izbranaBarva;
            ponovno.textContent = "Igraj znova";
        }
        //skrij kvadratek
        else {
            this.style.backgroundColor = "#232323";
            novposkus.style.visibility = "visible";
            novposkus.textContent = "poskusi ponovno!"
        }
    })
}

    for(var i = 0;i<nacin.length;i++){
        nacin[i].addEventListener("click",function(){
            //dodaj class trenutno
            nacin[0].classList.remove("trenutno");
            nacin[1].classList.remove("trenutno");
            this.classList.add("trenutno");
            if(this.textContent==="tezko"){
                tezavnost = 6;
                kvadrati.forEach(function(vsi) {
                    vsi.style.visibility="visible";    
                }, this);
            }
            else{
                tezavnost = 3;
                for(var i = 3;i<kvadrati.length;i++){
                 kvadrati[i].style.visibility = "hidden";
                }
            }
            
            reset();

           
        })
}

function reset(){
    novposkus.style.visibility = "hidden";
    barve = randomBarve(tezavnost);
    izbranaBarva = randBarva();
    prikazBarve.textContent = izbranaBarva;
    for (var i = 0; i < kvadrati.length; i++) {
        kvadrati[i].style.backgroundColor = barve[i];
    }
    document.querySelector("h1").style.backgroundColor = "#232323";

}

/* lahko.addEventListener("click",function(){
    lahko.classList.add("trenutno");
    tezko.classList.remove("trenutno");
    var tezavnost = 3;
    barve = randomBarve(tezavnost);
    izbranaBarva = randBarva();
    prikazBarve.textContent = izbranaBarva;
    for (var i = 0; i < kvadrati.length; i++) {
        if(barve[i]){
            kvadrati[i].style.backgroundColor = barve[i];
        }
        else{
            kvadrati[i].style.visibility = "hidden";
        }
    }
    document.querySelector("h1").style.backgroundColor = "#232323";

})

tezko.addEventListener("click",function(){
    tezko.classList.add("trenutno");
    lahko.classList.remove("trenutno");
    tezavnost = 6;
        barve = randomBarve(tezavnost);
        izbranaBarva = randBarva();
        prikazBarve.textContent = izbranaBarva;
        for (var i = 0; i < kvadrati.length; i++) {
            if(barve[i]){
                kvadrati[i].style.visibility = "visible";
                kvadrati[i].style.backgroundColor = barve[i];
            }
        }
        document.querySelector("h1").style.backgroundColor = "#232323";
    
    })
 */


//nove barve
ponovno.addEventListener("click",function(){
    novposkus.style.visibility = "hidden";
    barve = randomBarve(tezavnost);
    izbranaBarva = randBarva();
    prikazBarve.textContent = izbranaBarva;
    for (var i = 0; i < kvadrati.length; i++) {
        kvadrati[i].style.backgroundColor = barve[i];
    }
    document.querySelector("h1").style.backgroundColor = "#232323";

})










//IZBERI BARVO IZ POLJA, KI JO MORAS UGANITI
function randBarva() {
    var random = Math.floor(Math.random() * barve.length);
    return barve[random];
}
//DODAJ BARV0 NUM-KRAT, KI SI JIH ZGENERIRAL V FUNCKCIJI RANDOMBARVA V POLJE
function randomBarve(num) {
    //generiraj polje
    var pol = [];
    //dodaj num nakljucnih barv v polje
    for (var i = 0; i < num; i++) {
        pol.push(randomBarva());
    }
    return pol;
}
//ZGENERIRAJ BARVO
function randomBarva() {
    //izberi rdeco od 0 do 255
    var r = Math.floor(Math.random() * 256);
    //izberi zeleno od 0 do 255
    var g = Math.floor(Math.random() * 256);
    //izberi modro od 0 do 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
