const input1 = document.getElementById("nombre");
const input2 = document.getElementById("numero");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nombre = input1.value;
  const numero = input2.value;

  if (nombre !== "" && numero !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const n = document.createElement("p");
    p.textContent = nombre + " - " +numero;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input1.value = "";
    input2.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}