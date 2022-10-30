
var blink = document.getElementById("batch");
setInterval (function(){
    blink.style.opacity=
(blink.style.opacity== 0 ? 1 : 0);
}, 500);  


// var enterButton = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.querySelector("ul");
// var item = document.getElementsByTagName("li");

// function inputLenght(){
//     return input.value.length;
// }
// function listLenght(){
//     return item.length;
// }
// function createListElement(){
//     var li = document.createElement("li");//create an element "li"
//     li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
//     ul.appendChild(li); //adds li to ul
//     input.value = ""; // reset text input field

//     //START STRIKETHROUGH
//     //because its in the function, it only adds it for new items

//     function crossOut(){
//         li.classList.toggle("done");
//       }
//       li.addEventListener("click",crossOut);
//       //end strikethrough

//       //start and delete button

//      var dBtn = document.createElement("button");

//       dBtn.appendChild(document.createTextNode("X"));
//       li.appendChild(dBtn);
//       dBtn.addEventListener("click",deleteListItem);
//       //end and delete button

//       //add class delete (display:none)
//       function deleteListItem(){
//         li.classList.add("delete")
//     }
//     //end and class delete
//   }

//     function addListAfterClick(){
//         if (inputLenght() > 0) { //make sure that an empty input field 
//             //doesn't create an li
//         createListElement();
//         }
//     }

//     function addListAfterKeypress(event){
//         if (inputLenght() > 0 && event.which ===13) {
//             //this now looks to see if you hit "enter" the 13 is the answer key's keycode, this could also be display by event. keycode ===13

//             createListElement();
//         }
//       }

//       enterButton.addEventListener("click",addListAfterClick);
//       input.addEventListener("keypress",addListAfterKeypress);