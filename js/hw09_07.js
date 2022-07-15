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
      this.showMenu();
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

    const usersRestaurant = restaurants.filter(
      (restaurant) => restaurant.brand === selectedBrand
    );
    const usersMenu = Object.entries(usersRestaurant[0].menu).flat(1).join(" ");
    console.log(usersMenu);
    alert(
      `you chose the ${selectedBrand} restaurant! Please choose the menu:  ${usersMenu}`
    );
  },
  addOrder() {},
  confirmOrder() {},
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
