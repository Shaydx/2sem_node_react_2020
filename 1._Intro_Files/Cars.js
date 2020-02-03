class Cars {
    equipment = [];
    color = [];
    constructor(brand) {
        this.brand = brand;
        //this.equipment = [];
    }

    addClass(carsEquipment) {
        this.equipment.push(carsEquipment);
    }
}

const cars = new Cars('Mercedes');

//cars.addClass('Automatic');

//console.log(cars.equipment[1] + ', ' + cars.color[1]);

function myCar(brand, equipment, color) {
    return console.log(brand, equipment, color)
}

myCar('Mercedes', 'Automatic', 'Metallic Red');