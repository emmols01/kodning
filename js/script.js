// variabel med alle elementer på siden der har klassen .btn og er placeret i et element .stage
const btns = document.querySelectorAll(".stage .btn")
const stages = document.querySelectorAll(".stage");
const main = document.querySelector("main");

    //Funktion der opdaterer UI 
   
    const buildStage = (h2Text, pText, btnsText, imagePath) => {
    let prevStage = document.querySelectorAll(".stage");
    for (stage of prevStage) {
        stage.classList.remove("active");
    }
    const section = document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active");
    const h2 = document.createElement ("h2");
    h2.textContent = h2Text;
    if(imagePath != undefined) {
    const img = document.createElement("img");
    img.src = imagePath;
    section.append(img); 
} 
    const p = document.createElement("p");
    p.textContent = pText;
    section.append(h2);
    section.append(p);
    if(btnsText != undefined) {
        btnsText.forEach(text => {
            console.log(text);
            const button = document.createElement("button");
            button.textContent = text;
            button.classList.add("btn");
            button.addEventListener("click", nextStage);
            section.append(button);
        })
    }
    main.append(section);
}
   
    //stages
const nextStage =(e) => {
    console.log(e.target.textContent);
    let h2Text, pText, btnsText, imagePath;
    switch(e.target.textContent) {
    case "Start":
        h2Text = "Du skal oprette en ny profil, hvordan vil du oprette kodeordet dertil?";
        imagePath = "img/nyt-kodeord.png";
        btnsText = ["1. Bruge det samme kodeord som du plejer" , "2. Tilføje nogle ekstra bogstaver eller tal" ,"3. Opret et helt nyt kodeord "];
    break;

    case "1. Bruge det samme kodeord som du plejer":
        h2Text = "Vidste du at?";
        imagePath = "img/maaske.png";
        pText = "Ved at anvende det samme kodeord bliver det nemmere for hackere, at få adgang til flere af dine profiler, vil du stadig bruge det samme?";
        btnsText = ["Prøv igen", "2. Jeg bruger stadig det samme kodeord"];
    break;

    case "2. Tilføje nogle ekstra bogstaver eller tal":
        h2Text = "Vidste du at?";
        imagePath = "img/maaske.png";
        pText = "Den bedste ide er altid at oprette et nyt, men at lave et allerede eksisterende om er en okay løsning. Hvordan laver du det om?";
        btnsText = ["1. Tilføjer et enkelt specialtegn", "2. Laver kodeordet meget længere med tal, bogstaver og specialtegn.", "3. Gentager kodeordet, så det samme står to gange."];
    break;

    case "3. Opret et helt nyt kodeord ":
        h2Text = "God ide!";
        imagePath = "img/god.png";
        pText = "Hvor mange tegn laver du dit kodeord på?";
        btnsText = ["1. minimum 6 tegn", "2. Minimum 10 tegn", "3. Minimum 14 tegn"];
    break;

    //Outcomes
    case "2. Jeg bruger stadig det samme kodeord":
        h2Text = "Øv";
        imagePath = "img/trist.png";
        pText = "Dit kodeord blev gættet og nu har de adgang til flere af dine platforme og profiler... ";
        btnsText = ["Prøv igen" ];
    break;

    case "2. Laver kodeordet meget længere med tal, bogstaver og specialtegn.":
        h2Text = "Vidste du at?";
        imagePath = "img/maaske.png";
        pText = "Den bedste løsning er stadig at oprette et helt nyt, men hvis du gør kodeordet betydeligt længere med en blanding af tal, store og små bogstaver og specialtegn, så er det mere sikkert. ";
        btnsText = ["Prøv igen" ];
    break;

    case "3. Gentager kodeordet, så det samme står to gange.":
        h2Text = "Øv";
        imagePath = "img/trist.png";
        pText = "Dit kodeord blev gættet, da det stadig er for nemt og minder om allerede eksisterende kode. Nu har de adgang til flere af dine platforme og profiler";
        btnsText = ["Prøv igen" ];
    break;

    case "1. minimum 6 tegn":
        h2Text = "Øv";
        imagePath = "img/trist.png";
        pText = "Dit korte kodeord blev gættet ret hurtigt.. Det ideele antal tegn er nemlig 15 tegn bestående af en blanding af små og store bogstaver, tal og specialtegn.";
        btnsText = ["Prøv igen" ];
    break;

    case "2. Minimum 10 tegn":
        h2Text = "Øv";
        imagePath = "img/trist.png";
        pText = "Selvom dit kodeord virkede rimelig avanceret, blev det gættet.. Det ideele antal tegn er nemlig 15 tegn bestående af en blanding af små og store bogstaver, tal og specialtegn.";
        btnsText = ["Prøv igen" ];
    break;

    case "3. Minimum 14 tegn":
        h2Text = "God ide!";
        imagePath = "img/god.png";
        pText = "Det ideele antal tegn er nemlig 15 tegn bestående af en blanding af små og store bogstaver, tal og specialtegn.";
    break;

    case "Prøv igen":
        h2Text = "Du skal oprette en ny profil, hvordan vil du oprette kodeordet dertil?";
        imagePath = "img/nyt-kodeord.png";
        btnsText = ["1. Bruge det samme kodeord som du plejer" , "2. Tilføje nogle ekstra bogstaver eller tal" ,"3. Opret et helt nyt kodeord "];
    break;
   
   
    default: console.log("error");
}


    buildStage(h2Text, pText, btnsText, imagePath);
}



// Loop der tilføjer event listener
for (btn of btns) {
    btn.addEventListener("click", nextStage);
}
