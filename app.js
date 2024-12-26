
function submitData() {

  var stdName = document.getElementById("stdName").value;
var stdFatherName = document.getElementById("stdFatherName").value;
var stdClass = document.getElementById("stdClass").value;
var stdId = document.getElementById("stdId").value;
var stdSection = document.getElementById("stdSection").value;
var stdPicture = document.getElementById("stdPicture").files[0]; // Get the file object



  if(stdName && stdFatherName && stdClass && stdId && stdSection && stdPicture){

    console.log("pic =", stdPicture);

  // Save other data to localStorage
  window.localStorage.setItem("stdName", stdName);
  window.localStorage.setItem("stdFatherName", stdFatherName);
  window.localStorage.setItem("stdClass", stdClass);
  window.localStorage.setItem("stdId", stdId);
  window.localStorage.setItem("stdSection", stdSection);

  // Handle the picture file
  if (stdPicture) {
    let pictureUrl = URL.createObjectURL(stdPicture); // Create a URL for the file
    window.localStorage.setItem("stdPicture", pictureUrl); // Store the URL in localStorage
  }

  // Update the displayed information
  let showStdName = document.getElementById("showStdName");
  let showStdFatherName = document.getElementById("showStdFatherName");
  let showStdClass = document.getElementById("showStdClass");
  let showStdId = document.getElementById("showStdId");
  let showStdSection = document.getElementById("showStdSection");
  let showStdPicture = document.getElementById("showStdPicture");

  showStdName.innerHTML = window.localStorage.getItem("stdName");
  showStdFatherName.innerHTML = window.localStorage.getItem("stdFatherName");
  showStdId.innerHTML = window.localStorage.getItem("stdId");
  showStdClass.innerHTML = window.localStorage.getItem("stdClass");
  showStdSection.innerHTML = window.localStorage.getItem("stdSection");

  // Set the background image for the picture element
  showStdPicture.style.backgroundImage = `url(${window.localStorage.getItem(
    "stdPicture"
  )})`;

  alert('Now You Can Generate the ID Card')

  } else {
    alert('Kindly Fill Required Details')
  }
 

  

  // Optional: Alert message
  // alert('Your Form has been submitted, Now generate the ID Card');
}











function showCard() {

  if(window.localStorage.getItem('stdName')){
    document.querySelector(".id-card").className += " show";
    document.querySelector(".downloadBtn").className += " show";

  } else {
    alert('Kindly Submit Details First')
  }
  
}



// for download id card 
 function downloadIDCard() {
    html2canvas(document.querySelector(".id-card")).then(canvas => {
      let link = document.createElement("a");
      link.download = "id_card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }