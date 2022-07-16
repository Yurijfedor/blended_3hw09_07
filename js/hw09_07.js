// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів
// в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження.
// та основну інформацію: "що замовив, вартість та час доставки".
const restaurants = [
  {
    order: [],
    brand: "KFC",
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: "mcDonalds",
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: "Burger King",
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];

let usersRestaurant = [];
let usersOrder = [];

const services = {
  showMenu() {
    alert(
      `hello! Your available restourants: ${restaurants
        .map(({ brand }) => brand)
        .join(" ")}`
    );
  },

  getMenu() {
    let enteredBrand = prompt(`Please enter the selected restaurant`);
    console.log(enteredBrand);
    if (String(enteredBrand) === "null") {
      return;
    }
    enteredBrand = enteredBrand.toLowerCase();
    let selectedBrand;
    switch (enteredBrand) {
      case "kfc":
        selectedBrand = enteredBrand.toUpperCase();
        break;
      case "mcdonalds":
        selectedBrand = enteredBrand.replace("d", "D");
        break;
      case "burger king":
        selectedBrand = enteredBrand
          .split(" ")
          .map((item) => item[0].toUpperCase() + item.slice(1))
          .join(" ");
        break;
      default:
        alert(`Your choice is invalid! Please try again!`);
        this.getMenu();
    }

    usersRestaurant = restaurants.filter(
      ({ brand }) => brand === selectedBrand
    );
    const usersMenu = Object.entries(usersRestaurant[0].menu).flat(1).join(" ");
    console.log(usersMenu);
    alert(
      `you chose the ${selectedBrand} restaurant! Please choose the menu:  ${usersMenu}`
    );
  },

  addOrder() {
    usersOrder = prompt(`Please enter the selected dishes with a space!`)
      .toLocaleLowerCase()
      .split(" ");
  },

  confirmOrder() {
    let checkedUsersOrder = [];
    let arrDishes = Object.keys(usersRestaurant[0].menu);
    for (let i = 0; i <= usersOrder.length; i += 1) {
      if (arrDishes.includes(usersOrder[i])) {
        checkedUsersOrder.push(usersOrder[i]);
      }
    }
    console.log(checkedUsersOrder);
    // let filteredusersorder = checkedUsersOrder.filter(
    //   (el, i, arr) => arr.indexOf(el) === i
    // );
    // ---------------------------------ЧОМУ НЕ ПРАЦЮЄ-------------------------------------------------
    // let arrPrice = [];
    // for (let i = 0; i <= checkedUsersOrder.length - 1; i += 1) {
    //   arrPrice.push(usersRestaurant[0].menu.checkedUsersOrder[i])
    // }
    // console.log(arrPrice);
    // ----------------------------------------------------------------------------------------------
    let arrPrice = [];
    for (const el of checkedUsersOrder) {
      let indexOfDish = Object.entries(usersRestaurant[0].menu)
        .flat(1)
        .indexOf(el);
      arrPrice.push(
        Object.entries(usersRestaurant[0].menu).flat(1)[indexOfDish + 1]
      );
    }
    let totalCost = arrPrice.reduce((acc, price) => acc + price, 0);
    console.log(totalCost);

    alert(
      `your order is confirm! Your choice is ${checkedUsersOrder.join(
        " "
      )}, the total cost is ${totalCost}! Wait for your order for 10 minutes`
    );
  },
};

const torpedaDelivery = {
  order: [],
  chosenRestaurant: "",
  getAvailableRestaurants() {},
  chooseRestaurant() {},
  chooseDishes() {},
};

torpedaDelivery.chooseRestaurant();

services.showMenu();
services.getMenu();
services.addOrder();
services.confirmOrder();
