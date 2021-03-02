// Я ще не встиг доробити 2 завдання, на середу зроблю..(( 


// Task 1 
/* 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), 
 і наступні функції для роботи з ним:
Функція яка виведе всю інформацію про тварину. 
Функція яка виведе за скільки тварина зможе подолати 1000 км. 
(врахуйте що тварина може рухатись не більше 12 годин у день). 
Функція яка зможе змінити назву тварини на більш детальну.  */



const ANIMAL = {
    name: 'Dog',
    weight: 4,
    age: 18,
    speed: 15,


    getInfo() {
        console.log(`Назва тварини: ${this.name}, вага тварини: ${this.weight}, вік тварини: ${this.age}, 
        швидкість тварини (км,год): ${this.speed}`);
    },

    calcTimeOnDistance() {
        const DISTANCE = 1000;
        const MAX_TIME_IN_DAY = 12;
        let time = DISTANCE / this.speed;
        if (time <= MAX_TIME_IN_DAY) {
            console.log(`${this.name} подолає відстань у ${DISTANCE} км за 1 день, а саме йому потрібно буде на це не менше, як ${Math.ceil(time)} год.`)
        } else {
            time = Math.ceil(time / MAX_TIME_IN_DAY);
            console.log(`${this.name} подолає відстань у ${DISTANCE} км не менше, як за ${time} днів`)
        }
    },

    changeName(detailedName) {
        this.name = `${detailedName} ${this.name}`;
    }
}

ANIMAL.getInfo();
ANIMAL.calcTimeOnDistance();
ANIMAL.changeName('Сocker Spaniel');
ANIMAL.getInfo();


//TASK 2 
/* 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - 
рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри. */


const FIGURE = {
    sideX: 4,
    sideY: 5,

    getSquare() {
        console.log(`Площа фігури становить - ${this.sideX * this.sideY} см2`);
    },

    getPerimeter() {
        console.log(`Периметр даної фігури становить - ${2 * (this.sideX + this.sideY)} см`);
    },

    make3d(sideY) {
        this.sideY = sideY;
    },

    addName(name) {
        this.name = name;
    },

    convertToMeters() {
        this.height /= 100;
        this.width /= 100;
        this.sideY /= 100;
    },

}

FIGURE.getSquare();
FIGURE.getPerimeter();
FIGURE.make3d();
FIGURE.addName('rectangle');


// TASK 3 
/* Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

{

  tomato: {

    count: 5,
    price: 50,
    buy: false,
    outOfstore: true

  } , ...

}
 Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
Виводимо список покупок які ми купили.
Додаємо функцію яка дозволить купити продукт.
Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
Додаємо можливість збільшувати кількість товару.
Додаємо можливість зменшувати кількість товару(менше 0 бути не може). */

const SHOPPING_LIST = {
    tomato: {
        count: 5,
        price: 50,
        buy: false,
        outOfstore: true
    },
    carrot: {
        count: 2,
        price: 15,
        buy: true,
        outOfstore: true
    },
    onion: {
        count: 4,
        price: 13,
        buy: true,
        outOfstore: false
    },
    apple: {
        count: 3,
        price: 18,
        buy: false,
        outOfstore: false
    },
    orange: {
        count: 1,
        price: 20,
        buy: false,
        outOfstore: false
    }
};

function showPurchases(list) {
    let available = [];
    let notAvailable = [];

    for (let key in list) {
        if (!list[key].outOfstore) {
            notAvailable.push(key)
        } else {
            available.push(key);
        }
    }
    console.log(available.join(';'));
    console.log(notAvailable.join(';'))
};

function showOurPurchases(list) {
    let ourPurchases = [];

    for (let key in list) {
        if (list[key].buy) {
            ourPurchases.push(key);
        }
    }
    console.log(ourPurchases.join(';'))
};

function buyProduct(list, name) {
    for (let key in list) {
        if (key == name) {
            list[key].buy = true;
        }
    };

};

function getCostOfPurchases(list) {
    let totalCost = 0;
    for (key in list) {
        if (list[key].buy) {
            totalCost += list[key].price * list[key].count
        }

    }
    console.log(totalCost);
}

function addCountProduct(list, name) {
    for (let key in list) {
        if (key == name) {
            list[key].count++;
        }
    }
}

function deleteCountProduct(list, name) {
    for (let key in list) {
        if (key == name && list[key].count > 0) {
            list[key].count--;
        }
    }
}

showPurchases(SHOPPING_LIST);
showOurPurchases(SHOPPING_LIST);
console.log(SHOPPING_LIST.orange)
buyProduct(SHOPPING_LIST, 'orange');
console.log(SHOPPING_LIST.orange);
getCostOfPurchases(SHOPPING_LIST);
console.log(SHOPPING_LIST.orange);
addCountProduct(SHOPPING_LIST, 'orange');
console.log(SHOPPING_LIST.orange);
deleteCountProduct(SHOPPING_LIST, 'orange');
console.log(SHOPPING_LIST.orange);
deleteCountProduct(SHOPPING_LIST, 'orange');
console.log(SHOPPING_LIST.orange);
deleteCountProduct(SHOPPING_LIST, 'orange');
console.log(SHOPPING_LIST.orange);