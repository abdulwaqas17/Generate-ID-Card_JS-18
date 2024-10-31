function submitData() {
  let stdName = document.getElementById("stdName").value;
  let stdFatherName = document.getElementById("stdFatherName").value;
  let stdClass = document.getElementById("stdClass").value;
  let stdId = document.getElementById("stdId").value;
  let stdSection = document.getElementById("stdSection").value;
  let stdPicture = document.getElementById("stdPicture").files[0]; // Get the file object

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

  // Optional: Alert message
  // alert('Your Form has been submitted, Now generate the ID Card');
}

function showCard() {
  document.querySelector(".id-card").className += " show";
}
