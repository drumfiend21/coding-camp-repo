var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: 5555555555,
    address: [ '1 Getoutofmy Way', 'Microsoftland', 'Micronesia', '10001' ],
};

friends.steve = {
    firstName:"Steve",
    lastName:"Jobs",
    number:6666666666,
    address:["1 Infinity Loop","Cupertino","CA","10000"],
};

var list = function(obj){
    for(var key in obj){
        console.log(obj[key]);
    }
};

var search = function(name){
    for(var key in friends){
        if(friends[key].firstName.toLowerCase() === name || friends[key].lastName.toLowerCase() === name){
            console.log(friends[key]);
        }
    }
};

var searchPrompt = function(){
        var searchName = prompt("Enter Bill or Steve's first or last name.");
        search(searchName.toLowerCase());
};



var displayMenu = function(){
    var myMenu = prompt("1 - search for Bill Gates or Steve Jobs contact info, 2 - list Bill Gates and Steve Jobs contact info.");
    if(myMenu === "1"){
        searchPrompt();
    }
    else if(myMenu === "2"){
        list(friends);
    }
    else{
        console.log("I did not understand your request.  Please reload page and try agains.");
        myMenu = false;
    }
};

displayMenu();


