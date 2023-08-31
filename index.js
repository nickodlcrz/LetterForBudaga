const carl = document.getElementById("forCarl");
const shai = document.getElementById("forShai");
const lyka = document.getElementById("forLyka");
const vince = document.getElementById("forVince");
const ely = document.getElementById("forEly");
const darlene = document.getElementById("forDar");
const jaymie = document.getElementById("forJaymie");
const idk = document.getElementById("idk")
const yes1 = document.getElementById("yesBtn1")
const no1 = document.getElementById("noBtn1")
const yes2 = document.getElementById("yesBtn2")
const no2 = document.getElementById("noBtn2")
const yes3 = document.getElementById("yesBtn3")
const no3 = document.getElementById("noBtn3")
const yes4 = document.getElementById("yesBtn4")
const no4 = document.getElementById("noBtn4")
const yes5 = document.getElementById("yesBtn5")
const no5 = document.getElementById("noBtn5")
const yes6 = document.getElementById("yesBtn6")
const no6 = document.getElementById("noBtn6")
const yes7 = document.getElementById("yesBtn7")
const no7 = document.getElementById("noBtn7")
const btn = document.getElementById("btn")
const qst1 = document.getElementById("qst1")
const qst2 = document.getElementById("qst2")
const qst3 = document.getElementById("qst3")
const qst4 = document.getElementById("qst4")
const qst5 = document.getElementById("qst5")
const qst6 = document.getElementById("qst6")
const qst7 = document.getElementById("qst7")


const letShai = document.getElementById("letShai")
const letJaymie = document.getElementById("letJaymie")
const letLyka = document.getElementById("letLyka")
const letEly = document.getElementById("letEly")
const letVince = document.getElementById("letVince")
const letDar = document.getElementById("letDar")
const letCarl = document.getElementById("letCarl");
let userName = ask()
let Rname = userName.toUpperCase()

function ask (){

    let userInput;
    do{
        userInput = window.prompt("Who r u??");
        }while(userInput == "")
    return userInput
}



function eFade (element, qst){
    element.style.display = "block";
    element.style.opacity = 0;
    qst.innerHTML = `<h1>Si ${userName.toUpperCase()} ka ba talaga??</h1>`
    let inFade = setInterval(() => {
        element.style.opacity = parseFloat(element.style.opacity) + 0.03
        if (parseFloat(element.style.opacity) >= 1) {
            clearInterval(inFade)
        }
    }, 20)
}

let nickNames = {
    "carl": "my friend",
    "carl joseph": "my friend",
    "carl joseph aguas": "my friend",
    "joseph": "my friend",
    "aguas": "my friend",
    "cj": "my friend",
    "vince": "my ex",
    "vince le": "my ex",
    "vince le amyr": "my ex",
    "vince le amyr catucod": "my ex",
    "amyr": "my ex",
    "catucod": "my ex",
    "shai": "Shaiiii :)",
    "shaira": "Shaiiii",
    "shaira kaye": "Shaira Kaye Embat",
    "kaye": "Shaiiii :)",
    "shaira kaye biñalet": "Shaiiii :)",
    "shaira kaye binalet":"Shaiiii :)",
    "biñalet":"Shaiiii :)",
    "binalet":"Shaiiii :)",
    "jaymie": "karibal ko kay Vince",
    "jaymie rose": "karibal ko kay Vince",
    "rose": "karibal ko kay Vince",
    "jaymie rose lucena": "karibal ko kay Vince",
    "hayme": "karibal ko kay Vince",
    "lucena": "karibal ko kay Vince",
    "lyka": "Mrs. Loredo",
    "lyka lyn": "Mrs. Loredo",
    "lyn": "Mrs. Loredo",
    "lyka lyn asenjo": "Mrs. Loredo",
    "asenjo": "Mrs. Loredo",
    "asenjow": "Mrs. Loredo",
    "ely": "Padiecakes",
    "ely cruz": "Padiecakes",
    "elleorich": "Padiecakes",
    "elleorich andre": "Padiecakes",
    "elleorich andre padua": "Padiecakes",
    "andre": "Padiecakes",
    "padua": "Padiecakes",
    "darlene": "Madelene",
    "darlene madelene": "Madelene",
    "darlene madelene aguilar": "Madelene",
    "madelene": "Madelene",
    "aguilar": "Madelene",
    "masulit": "Madelene",
    "dm": "Madelene",
}

function eFadeIn (element){
    element.innerHTML = `<h1>Hi ${nickNames[userName]}</h1>`
    element.style.display = "block";
    element.style.opacity = 0;
    let inFade = setInterval(() => {
        element.style.opacity = parseFloat(element.style.opacity) + 0.05
        if (parseFloat(element.style.opacity) >= 1) {
            clearInterval(inFade)
        }
    }, 20)
}
function eFadeOut(element){
    let inFade = setInterval(() => {
        element.style.opacity = parseFloat(element.style.opacity) - 0.05;
        if (parseFloat(element.style.opacity) <= 0) {
            clearInterval(inFade)
        }
    }, 20)
}
/* function vrfy (greet, questionCon){
    setTimeout(() => {
        yes.onclick = function(){
            eFadeOut(questionCon)
            setTimeout (() => {
                eFadeIn(greet);
                

            }, 1000)
        }
        no.onclick = function(){
            window.alert("Sorry you cannot proceed to read the letter.");
            eFadeOut(questionCon);
            let ru = window.prompt("Will you try it again?")
            if(ru.toLowerCase() == "yes"){
                window.alert("Please Reload the Page :))")
            }
            else{
                window.alert(`Comeback when I know you ${userName}`)
            }
            

        }
        setTimeout(() =>{
            eFadeOut(greet);
        }, 2000)
    })
} */

function verify (question, greet, btnNo, btnYes){
    btnYes.onclick = function(){
        setTimeout(() => {
            eFadeOut(question)
            setTimeout(() => {
                eFadeIn(greet)
            }, 1000)
        })
    }
    btnNo.onclick = function(){
        eFadeOut(question);
        window.alert("Edi sino ka?");
        let res = window.prompt("Try ka ulet?");
        if(res == "yes" || res =="opo" || res == "oo"){
            window.alert("Reload the Website")
        }
        else{
            window.alert(`Ok, comeback if I know you`)
        }
    }

    setTimeout(() => {
        eFadeOut(greet)
    }, 5000)
}
    switch(userName.toLowerCase()){
        case "carl":
        case "carl joseph":
        case "carl joseph aguas":
        case "joseph":
        case "aguas":
        case "cj":
            eFade(letCarl, qst1);
            verify(letCarl, carl, no1, yes1)
            break;
        
        case "darlene":
        case "darlene madelene":
        case "darlene madelene aguilar":
        case "madelene":
        case "aguilar":
        case "masulit":
        case "dm":
            /* eFade(letDar, qst2); */  
            eFade(letDar, qst2);
            verify(letDar, darlene, no2, yes2);
            break;
        case "vince":
        case "vince le":
        case "vince le amyr":
        case "vince le amyr catucod":
        case "amyr":
        case "catucod":
            eFade(letVince, qst3);
            verify(letVince, vince, no3, yes3)
            break;
        case "ely":
        case "ely cruz":
        case "elleorich":
        case "elleorich andre":
        case "elleorich andre padua":
        case "andre":
        case "padua":
            eFade(letEly, qst4);
            verify(letEly, ely, no4, yes4)
            break;
        case "lyka":
        case "lyka lyn":
        case "lyn":
        case "lyka lyn asenjo":
        case "asenjo":
        case "asenjow":
            eFade(letLyka, qst5);
            verify(letLyka, lyka, no5, yes5)
            break;
        case "jaymie":
        case "jaymie rose":
        case "rose":
        case "jaymie rose lucena":
        case "hayme":
        case "lucena":
            eFade(letJaymie, qst6);
            verify(letJaymie, jaymie, no6, yes6)
            break;
        case "shai":
        case "shaira":
        case "shaira kaye":
        case "kaye":
        case "shaira kaye biñalet":
        case "shaira kaye binalet":
        case "biñalet":
        case "binalet":
            eFade(letShai, qst7);
            verify(letShai, shai, no7, yes7)
            /* shai.innerHTML = `<h1>Hello ${Rname}!</h1>`

            shai.style.display = "block"; // Make sure the element is visible
            
            // Fade-in animation
            shai.style.opacity = 0; // Start with 0 opacity
            let fadeInInterval = setInterval(() => {
                shai.style.opacity = parseFloat(shai.style.opacity) + 0.02;
                if (parseFloat(shai.style.opacity) >= 1) {
                    clearInterval(fadeInInterval);
                    setTimeout(() => {
                        // Fade-out animation
                        let fadeOutInterval = setInterval(() => {
                            shai.style.opacity = parseFloat(shai.style.opacity) - 0.02;
                            if (parseFloat(shai.style.opacity) <= 0) {
                                clearInterval(fadeOutInterval);
                                shai.style.display = "none";
                            }
                        }, 20);
                    }, 3000); // Delay before starting fade-out
                }
            }, 20); */
            break;
        default:
            window.alert(`Sino kang hinamungkal ka ${userName.toUpperCase()}??`)
            window.alert(`Balik ka next time bonak ${userName.toUpperCase()}`)
            /* idk.style.display = "block" */;
            console.log(userName)
    }






