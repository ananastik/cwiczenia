// es5
let domKuby = {
pokoje: 3,
kolor: "rozowy",
dach: "skosny",
opiszDom: function(){
    console.log(this.pokoje);
}
}
console.log(domKuby.kolor);
domKuby.opiszDom();

// es6
let domKlaudii = {
    pokoje: 2,
    kolor: "szary",
    dach: "plaski",
    opiszDom(){
        console.log(this.pokoje);
    }
    }
    console.log(domKuby.kolor);
    domKlaudii.opiszDom();