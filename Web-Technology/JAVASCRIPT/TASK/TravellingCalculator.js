let destination = prompt('Enter destination: Goa / Assam / Satara / Mumbai / Nashik');

let transport = prompt('Enter transportation: Auto / Cab /Bus');

let distance;

if (destination === 'Goa') {
    distance = 400;
}
else if (destination === 'Assam') {
    distance = 200;
}
else if (destination === 'Satara') {
    distance = 130;
}
else if (destination === 'Mumbai') {
    distance = 150;
}
else if (destination === 'Nashik') {
    distance = 200;
}

let time;
let price;


if (transport === 'Auto') {
    time = 5;
    price = 5;
}
else if (transport === 'Cab') {
    time = 1;
    price = 10;
}
else if(transport==='Bus'){
    time = 2;

    let seat= prompt('Chose what seat you want to book 1.ventilated 2.Windowseat 3.Seat 4.Seat With Food Access')
    if(seat === '1'){
        price = 20
    }
    else if (seat === '2'){
        price = 15
    }
    else if(seat === '3'){
        price = 5
    }
    else if(seat === '4'){
        price = 35
    }
    alert(`Your seat type is  :${seat}`)
   
}


let totalTime = (distance * time) / 60;
let totalPrice = distance * price;

alert(
    `Destination: ${destination}
Transportation: ${transport}
Distance: ${distance} km
Time: ${totalTime} hours
Price: ₹${totalPrice}`
);
console.log(`Destination: ${destination}
Transportation: ${transport}
Distance: ${distance} km
Time: ${totalTime} hours
Price: ₹${totalPrice}`);