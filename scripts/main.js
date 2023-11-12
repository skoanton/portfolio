const codeText1 = "My name is Anton Håkansson and i am currenlty a front end developer student at Yrkeshögskolan in Borås.";
const codeText2 = "This website is created to show my work and what I can bring to the table.";
const codeTexts = [codeText1, codeText2];

const project1 = {
    pName: "project1",
    link: "#"
};
const project2 = {
    pName: "project2",
    link: "#"
};
const projects = [project1, project2];


const aboutMeText ="Jag bor i Lidköping och är 27 år och denna texten får jag jobba på lite så det blir bättre kanske skriva några rader om mina styrkor och svagheter och sånt";

const genreateCodeSnippet = (bodyId) => {
    const codeList = document.getElementById("codeList");


    if (bodyId === "index") {
        codeTexts.forEach(text => {
            const liEl = document.createElement("li");
            liEl.innerHTML = `<span class="console-color">console</span>.<span class="log-color">log</span>
            <span class="parentheses-color">(</span>
            <span class="code-text-color">"<span id="codeText">${text}</span>"</span> <span class="parentheses-color">)</span>;`;
            codeList.appendChild(liEl);
        });
    }

    else {
        const liEl = document.createElement("li");
        liEl.innerHTML = `                
                <span class="log-color"><span id="codeText">${bodyId}</span></span> <span class="parentheses-color">()</span>;`;
        codeList.appendChild(liEl);
    }



}
const genreateConsoleText = (bodyId) => {
    const consoleTextEl = document.getElementById("consoleText");


    switch (bodyId) {
        case "index":
            codeTexts.forEach(text => {
                const pEl = document.createElement("p");
                pEl.innerHTML = text;
                consoleTextEl.appendChild(pEl);
            });
            break;
        case "projects":

            projects.forEach(project => {
                const aEl = document.createElement("a");
                aEl.setAttribute("src", project.link);
                aEl.innerHTML = project.pName;
                aEl.setAttribute("class", "console-text");
                consoleTextEl.appendChild(aEl);
            });

    break;
        case "aboutMe":
            const pEl = document.createElement("p");
            pEl.innerHTML = aboutMeText;
            consoleTextEl.appendChild(pEl);

            break;
        default:
            console.log("FEl");
            break;
    }



}

const loadText = () => {
    const pageBody = document.querySelector("body");
    const bodyId = pageBody.getAttribute("id");
    genreateCodeSnippet(bodyId);
    genreateConsoleText(bodyId);
}

window.addEventListener("load", loadText);
