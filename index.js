const order1 = {
  customer: {
    name: "Bob",
    phone: "123",
  },
  cart: [
    {
      product: "Bread",
      quantity: 10,
      unitPrice: 10,
      totalPrice: 100,
    },
    {
        product: "Fish",
        quantity: 10,
        unitPrice: 100,
        totalPrice: 1000,
    },
  ],
  total: 1100,
  paid: 1000,
  due: 100,
};

const order2 = {
  customer: {
    name: "Alice",
    phone: "124",
  },
  cart: [
    {
      product: "Rice",
      quantity: 10,
      unitPrice: 5,
      totalPrice: 50,
    },
    {
      product: "Bread",
      quantity: 20,
      unitPrice: 10,
      totalPrice: 200,
    },
    {
        product: "Fish",
        quantity: 5,
        unitPrice: 100,
        totalPrice: 500,
      },
  ],
  total: 750,
  paid: 650,
  due: 100,
};

const orders = [order1, order2];
console.log(orders);

// calculate total amount
const totalOrderAmount = orders.reduce(
  (acc, cur) => (acc = acc + cur.total),
  0
);
console.log("total order amount", totalOrderAmount);

//Calculate total paid amount
const totalPaidAmount = orders.reduce((acc, cur) => (acc = acc + cur.paid), 0);
console.log("total paid amount", totalPaidAmount);

//alculate total due amount
const totalDueAmount = orders.reduce((acc, cur) => (acc = acc + cur.due), 0);
console.log("total due amount", totalDueAmount);

//Calculate total orders count
const orderCount = orders.length;
console.log("total orders count", orderCount);

//calculate averge order amount
const avgAmount = totalOrderAmount / orderCount;
console.log("average order amount", avgAmount);

//Calculate item wise total sale
const cart = orders.map((order) => order.cart);

const newCart = cart.reduce((acc, cur, i) => {
    cur.map((c) => acc.push(c));
    return acc;
},[])

const itemSale = newCart.reduce((acc,cur) => {
    if(acc[cur.product]){
        acc = {
            ...acc,
            [cur.product]: acc[cur.product] + cur.totalPrice,
        }
    }else{
        acc = {
            ...acc,
            [cur.product]: cur.totalPrice,
        } 
    }
    return acc;
},{});

console.log("item wise sale", itemSale);


