import createItem from "./services/item.js";
import * as cartTot from "./services/cart.js";

function mostrarLista(titulo, lista) {
  console.log(`\n${titulo}`);
  if (lista.length === 0) {
    console.log("(vazio)");
    return;
  }

  let total = 0;
  lista.forEach((item, i) => {
    console.log(
      `${i + 1}. ${item.name}  --  VALOR: R$ ${item
        .subTot()
        .toFixed(2)}  --  QUANTIDADE: ${item.quanty}`
    );
    total += item.subTot();
  });

  console.log(`TOTAL: R$ ${total.toFixed(2)}`);
}

async function carrinho() {
  const myCart = [];

  console.log(
    "🛍️__________Bem vindo ao seu CARRINHO DE COMPRAS da SHOPEE!__________🛍️"
  );

  const item1 = await createItem("Mouse Redragon", 89.9, 1, 12345);
  const item2 = await createItem("Alexa", 349.9, 2, 56789);
  const item3 = await createItem("Headset Gamer", 189.9, 2, 33246);

  await cartTot.addItem(myCart, item1);
  await cartTot.addItem(myCart, item2);
  await cartTot.addItem(myCart, item3);

  mostrarLista("Carrinho antes da remoção:", myCart);

  await cartTot.removeItem(myCart, item2);

  mostrarLista("Carrinho depois da remoção:", myCart);

  await cartTot.calculateTotal(myCart);
}

await carrinho();
console.log(
  "======================================================================="
);
console.log("\n");

async function listaDesejos() {
  const myList = [];

  console.log(
    "📓__________Bem vindo a sua LISTA DE DESEJOS da SHOPEE!__________📓"
  );

  const item4 = await createItem("Cadeira de Escritório", 589.9, 1, 99402);
  const item5 = await createItem("Playstation 5", 3894, 2, 92218);
  const item6 = await createItem("Malbec Signature", 290.9, 2, 51168);

  await cartTot.addItem(myList, item4);
  await cartTot.addItem(myList, item5);
  await cartTot.addItem(myList, item6);

  mostrarLista("Lista de desejos antes da remoção:", myList);

  await cartTot.removeItem(myList, item6);

  mostrarLista("Lista de desejos depois da remoção:", myList);

  await cartTot.calculateTotal(myList);
}

await listaDesejos();
