let membersArr = [];

//check if data exist in localStorage and then convert to membersArr
function init() {
    document.getElementById("tbodyrows").innerHTML = "";
    if(localStorage.membersRecord) {
        membersArr = JSON.parse(localStorage.membersRecord);
        for(let i = 0; i < membersArr.length; i++) {
            makeTable(i, membersArr[i].firstname, membersArr[i].surname, membersArr[i].age, membersArr[i].level, membersArr[i].club);
        }
    }
}

function onSubmitButton() {
    
    let firstName = document.getElementById("firstname").value;
    let surName = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let currentLevel = document.getElementById("level").value;
    let favouriteClub = document.getElementById("club").value;

    let membersObj = {
        firstname: firstName,
        surname: surName,
        age: age,
        level: currentLevel,
        club: favouriteClub
    };
    membersArr.push(membersObj);

    //convert membersArr to JSON for storage in localStorage
   
    localStorage.membersRecord = JSON.stringify(membersArr);

    init();

    //Added to stop the new rows from disappearing
    document.getElementById("firstname").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("level").value = "";
    document.getElementById("club").value = "";
}

function makeTable(index, firstName, surName, age, currentLevel, favouriteClub) {
    let table = document.getElementById("tbodyrows");
    let row = table.insertRow();
    let firstNameCell = row.insertCell(0);
    let surNameCell = row.insertCell(1);
    let ageCell = row.insertCell(2);
    let currentLevelCell = row.insertCell(3);
    let favouriteClubCell = row.insertCell(4);
    let actionCell = row.insertCell(5);

    firstNameCell.innerHTML = firstName;
    surNameCell.innerHTML = surName;
    ageCell.innerHTML = age;
    currentLevelCell.innerHTML = currentLevel;
    favouriteClubCell.innerHTML = favouriteClub;
    actionCell.innerHTML = '<button onclick="deleteTableRow('+index+')">Delete</button>';
}

function deleteTableRow(index) {
    let table = document.getElementById("regtable");
    table.deleteRow(index+1);
    membersArr.splice(index, 1);
    localStorage.membersRecord = JSON.stringify(membersArr);
    init();
}