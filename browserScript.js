addButtonEl = document.querySelector(".addButton");
editButtonEl = document.querySelector(".editButton");
deleteButtonEl = document.querySelector(".deleteButton");
liColEl = document.querySelector(".liCol");

//addButtonEl.addEventListener("click", function() {
//  //liColEl.innerHtml = "Hello";
//})
editButtonEl.addEventListener("click", function(e) {
  //document.body.style.backgroundColor = 'red';
  //e.preventDefault();
if (e.target.classList.contains('editButton')) {
  let userPrompt = prompt("Enter new texts to edit.", e.target.parentElement.parentElement.querySelector(".singleItem").innerHTML);
  if(userPrompt) {
  axios.post('/update-item', {textSS: userPrompt, idSS: e.target.getAttribute('data-id')}).then(function() {
e.target.parentElement.parentElement.querySelector(".singleItem").innerHTML = userPrompt;
  }).catch(function() {
console.log("Try again later!");
  })

  }

}
});

deleteButtonEl.addEventListener("click", function() {

})