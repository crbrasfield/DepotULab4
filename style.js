document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.createElement("BUTTON");
    var text = document.createTextNode("click me");
    var contentContainer = document.createElement('div');
    
    button.style.color = "red";
    button.onclick = addBox;
    button.className = 'button'; 
    contentContainer.id = 'content-container'
       
    button.appendChild(text);
    document.body.appendChild(button); 
    document.body.appendChild(contentContainer);
    
});

function addBox() {
    var boxArray = document.getElementsByClassName('box');
    var box = document.createElement('div');
    var contentContainer = document.getElementById('content-container');
    
    box.className = 'box';
    box.id = String(boxArray.length);
   
    box.addEventListener('click', getRandomColor);
    box.addEventListener('mouseover', showId);
    box.addEventListener('mouseout', hideId);
    box.addEventListener('dblclick', removeElement);
    
    document.body.appendChild(box);
    contentContainer.appendChild(box);
    
};

function getRandomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
        }
    e.target.style.backgroundColor=color;
};

function showId(event) {
    var element = event.target;
    element.innerHTML = element.id;
};

function hideId(event) {

    var element = event.target;
    element.innerHTML = '';
};

function removeElement(e) {
    var element = e.target;
    

    var id = parseInt(element.id, 10);
    if (id % 2 === 0) { 
        if (element.previousElementSibling) { 
            element.previousElementSibling.remove();
            return;
        }
    } else { 
        if (element.nextElementSibling) { 
            element.nextElementSibling.remove();
            return; 
        }
    }
    
    alert("There's no sibling to remove!");
};


