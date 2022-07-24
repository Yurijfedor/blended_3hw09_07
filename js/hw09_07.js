// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів
// в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження.
// та основну інформацію: "що замовив, вартість та час доставки".
// const restaurants = [
//   {
//     order: [],
//     brand: "KFC",
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: "mcDonalds",
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: "Burger King",
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// let usersRestaurant = [];
// let usersOrder = [];

// const services = {
//   showMenu(object) {
//     alert(
//       `hello! Your available restourants: ${object
//         .map(({ brand }) => brand)
//         .join(" ")}`
//     );
//   },

//   getMenu() {
//     let enteredBrand = prompt(`Please enter the selected restaurant`);
//     console.log(enteredBrand);
//     if (String(enteredBrand) === "null") {
//       return;
//     }
//     enteredBrand = enteredBrand.toLowerCase();
//     let selectedBrand;
//     switch (enteredBrand) {
//       case "kfc":
//         selectedBrand = enteredBrand.toUpperCase();
//         break;
//       case "mcdonalds":
//         selectedBrand = enteredBrand.replace("d", "D");
//         break;
//       case "burger king":
//         selectedBrand = enteredBrand
//           .split(" ")
//           .map((item) => item[0].toUpperCase() + item.slice(1))
//           .join(" ");
//         break;
//       default:
//         alert(`Your choice is invalid! Please try again!`);
//         this.getMenu();
//     }
//     // ---------------------ЗМІНЮЮ chosenRestaurant В ОБ'ЄКТІ torpedaDelivery-------------------------------------------
//     torpedaDelivery.chosenRestaurant = selectedBrand;
//     // -------------------------------------------------------------------------------------------------
//     usersRestaurant = restaurants.filter(
//       ({ brand }) => brand === selectedBrand
//     );
//     const usersMenu = Object.entries(usersRestaurant[0].menu).flat(1).join(" ");
//     console.log(usersMenu);
//     alert(
//       `you chose the ${selectedBrand} restaurant! Please choose the menu:  ${usersMenu}`
//     );
//   },

//   addOrder() {
//     usersOrder = prompt(`Please enter the selected dishes with a space!`);
//     if (String(usersOrder) === "null") {
//       return;
//     }
//     usersOrder = usersOrder.toLocaleLowerCase().split(" ");
//     for (let i = 0; i <= usersOrder.length - 1; i += 1) {
//       if (usersOrder[i] === "burgerxxl") {
//         usersOrder[i] = "burgerXXL";
//       }
//     }
//   },

//   confirmOrder() {
//     if (String(usersOrder) === "null") {
//       return;
//     }
//     let normalisedUsersOrder = [];
//     let arrDishes = Object.keys(usersRestaurant[0].menu);
//     for (let i = 0; i <= usersOrder.length; i += 1) {
//       if (arrDishes.includes(usersOrder[i])) {
//         normalisedUsersOrder.push(usersOrder[i]);
//       }
//     }
//     console.log(normalisedUsersOrder);
//     // ------------------------щоб не було дві однакові страви----------------------------------------
//     // let filteredusersorder = normalisedUsersOrder.filter(
//     //   (el, i, arr) => arr.indexOf(el) === i
//     // );
//     // ---------------------------------ЧОМУ НЕ ПРАЦЮЄ-------------------------------------------------
//     // let arrPrice = [];
//     // for (let i = 0; i <= normalisedUsersOrder.length - 1; i += 1) {
//     //   arrPrice.push(usersRestaurant[0].menu.normalisedUsersOrder[i])
//     // }
//     // console.log(arrPrice);
//     // ----------------------------------------------------------------------------------------------
//     let arrPrice = [];
//     for (const el of normalisedUsersOrder) {
//       let indexOfDish = Object.entries(usersRestaurant[0].menu)
//         .flat(1)
//         .indexOf(el);
//       arrPrice.push(
//         Object.entries(usersRestaurant[0].menu).flat(1)[indexOfDish + 1]
//       );
//     }
//     // --------------------змінюю order в об'єкті torpedaDelivery ---------------------------------------
//     torpedaDelivery.order = normalisedUsersOrder;
//     // -----------------------------------------------------------------------------------------------
//     let totalCost = arrPrice.reduce((acc, price) => acc + price, 0);
//     console.log(totalCost);

//     alert(
//       `your order is confirm! Your choice is ${normalisedUsersOrder.join(
//         " "
//       )}, the total cost is ${totalCost}! Wait for your order for ${
//         usersRestaurant[0].deliveryTime
//       } minutes`
//     );
//   },
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "",
//   getAvailableRestaurants(object) {
//     return object.map(({ brand }) => brand).join(" ");
//   },
//   chooseRestaurant(object) {
//     return object.filter(({ brand }) => brand === this.chosenRestaurant);
//   },
//   chooseDishes() {
//     return this.order.reduce((acc, dish) => {
//       return { ...acc, [dish]: acc[dish] ? acc[dish] + 1 : 1 };
//     }, {});
//   },
// };

// services.showMenu(restaurants);
// services.getMenu();
// services.addOrder();
// services.confirmOrder();

// torpedaDelivery.chooseRestaurant(restaurants);
// console.log(torpedaDelivery.chooseRestaurant(restaurants));

// torpedaDelivery.chooseDishes();
// console.log(torpedaDelivery.chooseDishes());

// Створи функцію, яка проводить пошук обєкта в масиві по id та виводить його в консоль.

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// const foo = (id) => users.find(({ id }) => id === id);

// console.log(foo(1));

//  Відсортуй обєкти по збільшеню та зменшеню score

// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// function ascScore(arrOfObj) {
//   return [...arrOfObj].sort((a, b) => a.score - b.score);
// }

// function descScore(arrOfObj) {
//   return [...arrOfObj].sort((a, b) => b.score - a.score);
// }
// console.log(ascScore(users));
// console.log(descScore(users));

// console.log(usersSortedByScoreAsc(users));   // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]
// console.log(usersSortedByScoreDesc(users));  // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]

// Напиши ф-цію, яка фільтрує масив та повертає елементи, окрім того, що був переданий в дану функцію в якості аргумента.

// const animals = ["pigs", "goats", "sheep"];
// function foo(currAnimal) {
//   return animals.filter((animal) => animal !== currAnimal);
// }
// console.log(foo("pigs")); // ["goats", "sheep"]

//  Створи функції, які:
// - знайдуть обєкт по найкращим score.
// - виведуть масив всіх score.
// - виведуть суму всіх score.

// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// console.log(users.find((user, i) => user.score[i] > user.score[i - 1]));

// console.log(foo1()); // { name: "Tatiana", score: 30 }
// foo2(); // [20, 10, 30]
// foo3(); // 60

// Напишите две функции:
// - letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает callback функцию
// - greet(name) - коллбек, принимающий имя и логирующий в консоль строку "Привет <name>"
// Реализуй проверку, что prompt не пустой

// letMeSeeYourName(greet); // Привет <name>
