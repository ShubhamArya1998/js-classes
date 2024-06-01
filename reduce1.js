const shoppingCart = [
  {
    Crypto: "Bitcoin",
    price: 68000,
  },
  {
    Crypto: "Ethereum",
    price: 4000,
  },
  {
    Crypto: "BNB",
    price: 600,
  },
  {
    Crypto: "MEMES",
    price: 100,
  },
];
// const totalCryptoPrice=shoppingCart.reduce((acc,Crypto)=>acc+Crypto.price,0)
// console.log(totalCryptoPrice);

const totalCryptoPrice = shoppingCart.reduce((acc, item) => {
  console.log(`Accumaltor:${acc} and Crypto:${item.Crypto}`);
  return acc + item.price;
}, 0);
console.log(totalCryptoPrice);

/* 
//output:
Accumaltor:0 and Crypto:Bitcoin
Accumaltor:68000 and Crypto:Ethereum
Accumaltor:72000 and Crypto:BNB
Accumaltor:72600 and Crypto:MEMES
72700
*/
