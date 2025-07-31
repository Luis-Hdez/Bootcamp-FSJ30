import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Holaaasss</h1>
    <button id="btnMagia">MAGIA</button>
  </div>
  `;

let btnDOM = document.getElementById("btnMagia") as HTMLButtonElement;
console.log(btnDOM);

btnDOM.addEventListener("click", ()=> {
   alert("Chauchis");
})
