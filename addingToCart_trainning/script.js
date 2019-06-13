const addButton = document.querySelectorAll(".add");
let ul = document.querySelector(".cart-list");
let div = document.querySelector('div');
let total = document.querySelector(".total");

let totalCost = 0;

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", function(e) {
    let div = document.createElement("DIV");
    let li = document.createElement("LI");
    let span = document.createElement("SPAN");

    let productDescription = e.target.previousElementSibling.previousElementSibling.innerHTML;
    let productPrice = e.target.previousElementSibling.innerHTML;

    li.appendChild(
      document.createTextNode(
        `ITEM: ${productDescription}  COST: ${productPrice}`
      )
    );

    span.appendChild(document.createTextNode('X'));

    
    div.appendChild(li);
    div.appendChild(span);
    ul.appendChild(div)

    totalCost += parseInt(productPrice);

    if (totalCost > 0) {
      total.innerHTML = "";
      total.appendChild(document.createTextNode(`TOTAL: ${totalCost}€`));
    } else {
      total.appendChild(document.createTextNode(`TOTAL: ${totalCost}€`));
    }

  });
}

div.addEventListener('click', function() {
  console.log('test')
})