const codeText1 = "My name is Anton Håkansson and i am currenlty a front end developer student at Yrkeshögskolan in Borås.";
const codeText2 = "This website is created to show my work and what I can bring to the table.";
const codeTexts = [codeText1,codeText2];




const genreateCodeSnippet = () =>{
    const codeList = document.getElementById("codeList");

    codeTexts.forEach(text => {
    const liEl = document.createElement("li");
    liEl.innerHTML = `<span class="console-color">console</span>.<span class="log-color">log</span>
    <span class="parentheses-color">(</span>
    <span class="code-text-color">"<span id="codeText">${text}</span>"</span> <span class="parentheses-color">)</span>;`;
    codeList.appendChild(liEl);
    });
    

}
const genreateConsoleText = () =>{
    const consoleTextEl = document.getElementById("consoleText");
    codeTexts.forEach(text => {
        const pEl = document.createElement("p");
        pEl.innerHTML = text;
        consoleTextEl.appendChild(pEl);
    });
}

genreateCodeSnippet();
genreateConsoleText();