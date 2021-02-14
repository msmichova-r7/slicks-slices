import calculatePizzaPrice from './calculatePizzaPrice';
import formatMoney from './formatMoney';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const pizza = pizzas.find((pizza) => pizza.is === item.id);
    return {
      ...item,
      name: pizza.name,
      thumbnail: pizza.image.asset.fluis.src,
      price: formatMoney(calculatePizzaPrice(pizza.price, item.size)),
    };
  });
}
