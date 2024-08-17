


var AddToButton = document.getElementById("addToDo")
var ToDoContainer = document.getElementById("todocontainer")
var InputField = document.getElementById("inputfield")

AddToButton.onclick = function()
{
    if(InputField.value != "")
    {
        var Paragraph = document.createElement("p")
    }
    Paragraph.innerHTML = InputField.value;

    Paragraph.classList.add('paragraphe_style')

    ToDoContainer.appendChild(Paragraph)

    InputField.value = "";

    Paragraph.addEventListener('click',function(){
        Paragraph.classList.add('paragraph_click')
    })

    Paragraph.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(Paragraph)
    })
}