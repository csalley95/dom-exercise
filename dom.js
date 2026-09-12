// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

container.appendChild(heading3);

const borderDiv = document.createElement("div");
borderDiv.style.border = "1px solid black";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

borderDiv.appendChild(heading1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
borderDiv.appendChild(paragraph2);

container.appendChild(borderDiv);