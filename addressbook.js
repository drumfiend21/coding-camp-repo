
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName + ", " + person.phoneNumber + ", " + person.email);
}

function lisp() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
    displayMenu();
    
  }
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    return contacts;
    displayMenu();
  }
}

var search = function(data){
  var contactsLength = contacts.length;
  for(i=0; i < contactsLength; i++){
      if(data === contacts[i].firstName.toLowerCase() || data === contacts[i].lastName.toLowerCase() || data === contacts[i].phoneNumber.toLowerCase() || data === contacts[i].email.toLowerCase()){
          printPerson(contacts[i]);
          displayMenu();
      };
  };
};


var add = function(firstName, lastName, phoneNumber, email){
    contacts[contacts.length]= {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
};

var addPrompt = function(){
    var newFn = prompt("Enter first name.");
    var newLn = prompt("Enter last name.");
    var newPn = prompt("Enter phone number.");
    var newEm = prompt("Enter email address.");
    add(newFn, newLn, newPn, newEm);
    wannaAdd === false;
    var wannaAdd = confirm("Do you want to add a new contact to this address book?");
    if(wannaAdd === true){
        addPrompt();}
    else{
        displayMenu();
    }
}

var searchPrompt = function(){
        var searchName = prompt("Enter a first name, last name, phone without dashes, or email address.");
        search(searchName.toLowerCase());
    }

var displayMenu = function(){
    var myMenu = prompt("1 - Add contact, 2 - Search contacts, 3 - List all contacts");


if(myMenu ==="1"){
    var wannaAdd = confirm("Do you want to add a new contact to this address book?");
    if(wannaAdd === true){
        addPrompt();
    }
    else{
        displayMenu();
    }
}
else if(myMenu === "2"){

    var wannaSearch = confirm("Do you want to search this address book?");
    if(wannaSearch === true){
            searchPrompt();
    }
    else{
        displayMenu();
    }
}
else if(myMenu === "3"){
   list(contacts);
}
}
 
  
displayMenu();







