let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active",
};
console.log(user.studentstatus);

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let i of numbers) {
    if(i>5){
        console.log(i)
    }
};


let userx = {
    name: "giorgi",
    age: 20,
    studentstatus: "active",
}
if(userx.age < 18 && userx.studentstatus==="active"){
    console.log("Hello")
}else if(userx.name === "levani"){
    console.log("Hello levani")
}else if(userx.studentstatus === "active" || userx.age < 25){
    console.log("Hello world")
}
else{
    console.log("Error")
}

let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];
for (let i of array) {
    if(typeof i === "string"){
        console.log(i)
    }
}

let arrayx = [[2,-3,10,5], [25,-24,-11,100], [-6,-7,10]];









let arrayz = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for(let i of arrayz){
    if(i % 2 == 1){
        console.log(i);
    }
}
for(let i of arrayz){
    if(i % 2 != 1){
        console.log(i)
    }
}


let users = [
    {username: "giorgi", studentstatus : "false"},
    {username: "levani", studentstatus : "false"},
    {username: "anna", studentstatus : "true"},
]
for(let i of users){
    if(i.studentstatus == "true"){
        console.log(i)
    }
}