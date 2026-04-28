// variabel med alle elementer på siden der har klassen .btn og er placeret i et element .stage
const btns = document.querySelectorAll(".stage .btn")
const stages = document.querySelectorAll(".stage");
const main = document.querySelector("main");

//det der gør, at vi skifter mellem stages
const nextStage =(e) => {
    console.log(e.target.textContent);
    let h2Text, pText, btnsText;
    switch(e.target.textContent) {
    case "Start": 
        console.log ("Start button was clicked");
        stages[0].classList.remove("active");
        stages[1].classList.add("active");
    break;
    case "Option 1":
        console.log ("Option 1 button was clicked");
        stages[1].classList.remove("active");
        stages[2].classList.add("active");
    break;
    case "Option 2":
        h2Text = "Well done";
        pText = "lorem Ipsum";
        btnsText = ["Start over"];
    break;
    case "Option 3":
        h2Text = "Option3";
        pText = "lorem Ipsum";
        btnsText = ["Start over"];
    break;

    default: console.log("error");

    }
    const section = document.createElement("section");
        section.classList.add("stage");
        section.classList.add("active");
        const h2 = document.createElement ("h2");
        h2.textContent = h2Text;
        const p = document.createElement("p");
        p.textContent = pText;
        section.append(h2);
        section.append(p);
        if(btnsText != undefined) {
            btnsText.forEach(text => {
                const button = document.createElement("button");
                button.textContent = text;
                button.classlist.add("btn");
                section.append(button);
            })
        }
        main.append(section);
        // bruges ikke alligevel: console.log(h2Text,pText, btnsText)
}

// Loop der tilføjer event listener til alle elementer med .btn der ligger i .stage

for (btn of btns) {
    btn.addEventListener("click", nextStage);
}