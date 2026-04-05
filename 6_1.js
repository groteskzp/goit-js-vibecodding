
// console.log("title", document.querySelectorAll("title"));

// console.log("a", document.querySelectorAll("a"));
// document.querySelector(".title")
// console.log("class = title:", document.querySelector("title"));
// const tit = document.querySelector(".title");
// tit.style.backgroundColor = "red";
// tit.style.fontSize = "50px";
// console.log(tit.style.backgroundColor, tit.style.fontSize);
// btn = document.querySelector("button");
// const btnAll = document.querySelectorAll("button");
// console.log(btnAll);

// btnAll.forEach(bts => {
//     bts.classList.add("id");
// })
// console.log("all", document.querySelectorAll("button"));
// console.log(btn.getAttribute("id"));
// console.log(btn);
// // btn.setAttribute("class", "id");
// console.log(document.querySelector(".id"));
// // console.log(btn.classList);
// // console.log(btn.classList.contains("id"));
// const el = document.querySelector(".id");
// const elAll = document.querySelectorAll(".id");
// el.style.backgroundColor = "violet";
// elAll.forEach(els => {
//     els.style.backgroundColor = "green";
// })
// console.log(document.querySelector(".id"));



// // btnAll.id.stylebackgroundColor("green");

// btn.setAttribute("backgroundColor", "red");
// // btn.style.backgroundColor = "Yellow";
// console.log(btn.style.backgroundColor);
// console.log(btn.textContent = "... Вам");
// console.log(document.querySelectorAll("button"));
// console.log(bth[1]);

// console.log(btn.getAttribute("backgroundColor"));

// btn.style.setAttribute("backgroundColor", "red");

// const button = document.querySelector("button");
// console.log(button);
// console.log(button.attributes);
//
//
// button.setAttribute("style.padding", "40px");
//
// const title = document.querySelector("h1");
// console.log(title);
// console.log(title.attributes);
//
// const saveBtn = document.querySelector('button[data-action="save"]');
// saveBtn.dataset.action = "update";
// console.log(saveBtn.dataset.action); // "save"
//
// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
// saveBtn.dataset.role = "admin";
// console.log(saveBtn.dataset.role);
//

// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// heading.style.fontSize = "32px";
// heading.style.color = "violet";
// console.log(heading); // <h1 class="title">This is a heading</h1>
//
// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// image.style.backgroundColor = "green";
// // console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
// title.append(heading);
// title.append(image);
// const tetlRemed = document.querySelectorAll("button");
// console.log(tetlRemed);
// tetlRemed.forEach( btn => {
    // btn.remove();
// })
// tetlRemed.remove( => );
// const inner = document.querySelector("#paragraph");
// console.log(inner.innerHTML);
// // // // inner.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>'
//   <a class="link" href="">Read more</a>
// </article>"'
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// Check the console, you'll see a single string with HTML tags
// console.log(markup);

// Adding all the markup in one operation
// list.innerHTML = markup;
// const list = document.querySelector(".list");

// const newTechnologies = ["*React", "*TypeScript", "*Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("afterbegin", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
// const button = document.querySelector(".my-button");
// const buttonSave = document.querySelector("#changeTextBtn")
// const handlerButton = ( "click", () => {
//   console.log("The button was pressed and now the next image will appear");
// });
// buttonNext.addEventListener("click", handlerButton);
// buttonSave.addEventListener("click", handlerButton);
// const handleClick = event => {
//   console.log(event);
// };
//
// button.addEventListener("click", handleClick);
// const button = document.querySelector("button");
//
// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };
//
// button.addEventListener("click", handleClick);
// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });
//
// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });
//
// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });
// const form = document.querySelector("form");
// const handlerForm = event => {
    // event.preventDefault();
    // console.clear();
    // console.log(event.target.login.placeholder, ":", event.target.login.value);
    // console.log(event.target.password.placeholder,":" ,event.target.password.value);
//
    // console.log(event);
// }
// form.addEventListener("submit", handlerForm);
//
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");
// const change = document.querySelector(".change");
//
// const handlerInput = evt => {
    // output.textContent = evt.currentTarget.value;
// }
// const handlerChange = e => {
    // change.textContent = e.currentTarget.value
// }
// textInput.addEventListener("input", handlerInput);
// textInput.addEventListener("change", handlerChange);
const textInput = document.querySelector(".text-input")
console.log(textInput);
const handlerFocus = event => {
      textInput.value = "This input has focus";
}
const handlerBlur = event => {
    textInput.value = '';
}
textInput.addEventListener("focus", handlerFocus);
textInput.addEventListener("blur", handlerBlur);
const butSet = document.querySelector('[data-action="set"]');
const butRem = document.querySelector('[data-action="remove"]');
butRem.addEventListener("click", handlerBlur);
butSet.addEventListener("click", handlerFocus);