//const squere = function(x){
//    return x*x;
//}

//const squere = (x)=> {
//    return x*x;
//}

//const squere = (x)=> x*x;

//console.log(squere(2));


//const event = {
//    name: 'Birthday party',
//    printGuestList: function(){
//        console.log('Guest list for ' + this.name);
//    }
//}

//this.name does't work in ES6 
//const event = {
//   name: 'Birthday party',
//    printGuestList: () => {
//        console.log('Guest list for ' + this.name);
//    }
//}

//vaka e ok 
//const event = {
//    name: 'Birthday party',    
//    printGuestList() {
//        console.log('Guest list for ' + this.name);
//    }
//}


// ova ne raboti - kaj listanjeto gosti ne moze da se koristi this.name
//const event = {
//    name: 'Birthday party',
//    guestList: ['Andrew', 'Jen', 'Mike'],
//    printGuestList() {
//        console.log('Guest list for ' + this.name);

//        this.guestList.forEach(function (guest) {
//            console.log(guest + ' is attending ' + this.name);
//        })
//    }
//}

const event = {
    name: 'Birthday party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();