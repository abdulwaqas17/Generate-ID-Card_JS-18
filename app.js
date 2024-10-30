// window.localStorage.setItem('fname','AB Waqas');
// var Fname = window.localStorage.getItem('fname');
// console.log(Fname)
function submitData() {

let stdName = document.getElementById("stdName").value;
let stdFatherName = document.getElementById("stdFatherName").value;
let stdClass = document.getElementById("stdClass").value;
let stdId = document.getElementById("stdId").value;
let stdSection = document.getElementById("stdSection").value;
let stdPicture = document.getElementById("stdPicture").value;

// console.log('pic =',stdPicture);
// console.log('name =',stdName);
// console.log('Fname =',stdFatherName);
// console.log('class =',stdClass);
// console.log('sec =',stdSection);
// console.log('id =',stdId);

var f = window.localStorage.setItem('stdName',stdName);
window.localStorage.setItem('stdFatherName',stdFatherName);
window.localStorage.setItem('stdClass',stdClass);
window.localStorage.setItem('stdId',stdId);
window.localStorage.setItem('stdSection',stdSection);
window.localStorage.setItem('stdPicture',stdPicture);


let showStdName = document.getElementById("showStdName");
let showStdFatherName = document.getElementById("showStdFatherName");
let showStdClass = document.getElementById("showStdClass");
let showStdId = document.getElementById("showStdId");
let showStdSection = document.getElementById("showStdSection");
let showStdPicture = document.getElementById("showStdPicture");

showStdName.innerHTML = window.localStorage.getItem('stdName'); 
//variable k name se nhe Get kr sakty ('' is k through hi krty hn)
showStdFatherName.innerHTML = window.localStorage.getItem('stdFatherName');
showStdId.innerHTML = window.localStorage.getItem('stdId');
showStdClass.innerHTML = window.localStorage.getItem('stdClass');
showStdSection.innerHTML = window.localStorage.getItem('stdSection');
// showStdPicture.innerHTML = window.localStorage.getItem('stdPicture');
showStdPicture.style.backgroundImage = "url(window.localStorage.getItem('stdPicture')"


// alert('Your Form have Submited, Now Generate the ID Card');

}

function showCard() {

    document.querySelector('.id-card').className += ' show';

}