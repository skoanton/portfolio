const project1 = {
    pName: "Google search function module",
    link: "#"
};
const project2 = {
    pName: "Facebook chat function",
    link: "#"
};
const projects = [project1, project2];


const aboutMeText = "Jag bor i Lidköping och är 27 år och denna texten får jag jobba på lite så det blir bättre kanske skriva några rader om mina styrkor och svagheter och sånt";

const genreateCodeSnippet = (bodyId) => {
    const codeList = document.getElementById("codeList");
    const liEl = document.createElement("li");
    liEl.innerHTML = `<span class="log-color"><span id="codeText">${bodyId}</span></span> <span class="parentheses-color">()</span>;`;
    codeList.appendChild(liEl);

}
const genreateConsoleText = (bodyId) => {
    const consoleTextEl = document.getElementById("consoleText");

    switch (bodyId) {
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
