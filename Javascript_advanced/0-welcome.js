function welcome(firstName, lastName) {
    firstName = 'Jacky';
    lastName = 'Tuyisenge';
    
    let fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert ("Welcome " + fullName + "!");
    }
    displayFullName();
}
welcome();