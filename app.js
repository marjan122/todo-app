var todoInp = document.getElementById('input');
var delul = document.getElementById('ul')

function addtodo(){
var inpValue = todoInp.value
var newli = document.createElement('li');
var todoLi = document.createTextNode(inpValue)
newli.appendChild(todoLi)
delul.appendChild(newli)


var deleteBtn = document.createElement('button')
var deleteTxt = document.createTextNode('DELETE')
deleteBtn.setAttribute('class' , 'btn')
deleteBtn.setAttribute('onclick' , 'delbtn(this)')
deleteBtn.appendChild(deleteTxt)
newli.appendChild(deleteBtn)


var edit = document.createElement('editbutton')
var edittxt = document.createElement('edittxt')
edit.setAttribute('class' , "btn4you")
edit.setAttribute('onclick' , "edited(this)")
var edittxt = document.createTextNode("Edit")
edit.setAttribute('class' , "btn4you")
edit.setAttribute('onclick' , "edited(this)")
edit.appendChild(edittxt)
newli.appendChild(edit)


}

function delbtn(element){
   element.parentNode.remove();

}

function btndell(){
    delul.innerHTML=""
}

function edited(element){
    element.parentNode.firstChild.nodeValue=prompt()
}