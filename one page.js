// for image changing

function secimg(){
    document.getElementById('bckg').style.backgroundImage = "url('wind.jpeg')";
    document.getElementById('y').style.backgroundColor = "blue";
    document.getElementById('z').style.backgroundColor = "white";
    document.getElementById('x').style.backgroundColor = "white";
}
const z = document.getElementById('z');

function frstimg(){
    document.getElementById('bckg').style.backgroundImage = "url('laptop.jpg')";
    document.getElementById('z').style.backgroundColor = "blue";
    document.getElementById('y').style.backgroundColor = "white";
    document.getElementById('x').style.backgroundColor = "white";
}
function trdimg(){
    document.getElementById('bckg').style.backgroundImage = "url('hppp.jpeg')";
    document.getElementById('x').style.backgroundColor = "blue";
    document.getElementById('z').style.backgroundColor = "white";
    document.getElementById('y').style.backgroundColor = "white";  
}
function opn(){
 const sidebar = document.querySelector('.menu-div')
        sidebar.style.display = 'flex'
}
function cls(){
     const sidebar = document.querySelector('.menu-div')
        sidebar.style.display = 'none'
}
