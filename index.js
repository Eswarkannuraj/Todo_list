let inpName = document.querySelector(".inpName");
let inpMail = document.querySelector(".inpMail");
let inpAge = document.querySelector(".inpAge");
let inpCourse = document.querySelector(".inpCourse");
let inpSubmit = document.querySelector(".inpSubmit");

inpSubmit.addEventListener("click", function (event) {
  let name = inpName.value;
  let mail = inpMail.value;
  let age = inpAge.value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let course = inpCourse.value;

  //prevent reloading..
  event.preventDefault();

  //check table exists

  let table = document.querySelector(".dataContainer table");

  //create table

  if (!table) {
    table = document.createElement("table");
    table.innerHTML = `
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody></tbody>
    `;
    //append table to body
    document.querySelector(".dataContainer").appendChild(table);
  }

  //create a new row
  let tableBody = table.querySelector("tbody");
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${name}</td>
  <td>${age}</td>
  <td>${course}</td>
  <td>${gender}</td>
  <td>${mail}</td>
  <td>
    <button class="delButton">Delete</button>
  </td>
  `;
  tableBody.appendChild(newRow);

  // clear input fields
  document.querySelector("form").reset();
})

// add event listener to delete button

let delBtn = document.querySelector(".dataContainer");
delBtn.addEventListener("click",function(event) {
  if(event.target.classList.contains("delButton")){
    // find the row to delete
    let nRow = event.target.closest("tr");
    nRow.remove();
  }
})