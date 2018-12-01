for (let i=0; i<10; i=i+2) {
    console.log(i);
}

let liczba =100;
for (let i=0; i<10; ++i) {
    console.log(i+liczba);
}

let names = ["Krystian", "Anastazja", "Klaudia", "Wiola"];
names.forEach((element, index) => {
    console.log("pod indexem: " + index + " jest imie: "+ element);
});

let names = ["Krystian", "Anastazja", "Klaudia", "Wiola"];
names.forEach(function(element, index) {
    console.log("pod indexem: " + index + " jest imie: "+ element);
});