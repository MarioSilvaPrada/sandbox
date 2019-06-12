const addButton = document.querySelectorAll(".add");

console.log(addButton); 

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", function(e) {

    console.log(e.target.previousElementSibling.innerHTML)
  });
}
