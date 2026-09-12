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