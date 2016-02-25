document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.createElement("BUTTON");
    var text = document.createTextNode("click me");
    
    button.style.color = "red";
    button.onclick = addBox;
    button.appendChild(text);
    
    button.className = 'button';    

    document.body.appendChild(button); 
    
});


function getRandomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
        }
    e.target.style.backgroundColor=color;
}

function addBox() {
    var boxArray = document.getElementsByClassName('box');
    var box = document.createElement('div');
    box.className = 'box';
    box.id = String(boxArray.length);
    var numbers = document.createTextNode(box.id);
    box.addEventListener('click', getRandomColor);
    box.appendChild(numbers);
    document.body.appendChild(box);
    
}

