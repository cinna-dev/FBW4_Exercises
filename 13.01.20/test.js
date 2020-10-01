const animal = {
    name : 'Rabbit',
    legs : 4,
    getLegs: function(){
            console.log(this.legs);
            document.write(`${this.name} has ${this.legs} legs`)
            }
}
animal.getLegs();