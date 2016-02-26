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
   
    box.addEventListener('click', getRandomColor);
    box.addEventListener('mouseover', showId);
    box.addEventListener('mouseout', hideId);
    box.addEventListener('dblclick', deleteSibling);
    
    document.body.appendChild(box);
    
}

function showId(e) {
    var hoveredElement = e.target;
    console.log(e.target.id);
    e.target.style.color = "white";
    e.target.innerHTML = e.target.id;

}

function hideId(e) {
    var hoveredElement = e.target;
    e.target.style.color ='white';
    e.target.innerHTML = '';
}

function deleteSibling(e) {
    
    var previous = e.target;
    previous.parentNode.removeChild(previous.previousSibling);
    
    var next = e.target;
    next.parentNode.removeChild(next.nextSibling)
    }
    

// trying to get the if else statement to work below
//if () {
//var previous = e.target;
//previous.parentNode.removeChild(previous.previousSibling);
//}
//else if () {
//var next = e.target;
//next.parentNode.removeChild(next.nextSibling)
//}

//else () {
//var alert = e.target;
//}

