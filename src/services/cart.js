//quais ações o meu carrinho pode fazer?
import createItem from "./item.js";

/* -> Adicionar um Item */

async function addItem(userCart, item) {
  userCart.push(item); // adicionando um elemento dentro de um vetor!
}

/* -> Deletar um Item */

async function deleteItem(userCart, id) {
  const index = userCart.findIndex((item) => item.id === id);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

/* -> Remover um Item */

async function removeItem(userCart, item) {
  // 1. encontrar a posição do item no meu userCart
  const indexFound = userCart.findIndex((p) => p.id === item.id);

  // 2. caso não encontre o item:
  if (indexFound === -1) {
    console.log("[ERRO] Item não encontrado");
  }

  const cartItem = userCart[indexFound];

  if (typeof cartItem.quanty !== "number") {
    cartItem.quanty = Number(cartItem.quanty) || 0;
  }

  if (cartItem.quanty > 1) {
    cartItem.quanty -= 1;
    console.log(
      `Removida 1 unidade de "${cartItem.name}". Agora tem ${
        cartItem.quanty
      }x — subtotal R$ ${cartItem.subTot().toFixed(2)}`
    );
    return;
  }

  // se quanty == 1
  userCart.splice(indexFound, 1);
  console.log(`"${cartItem.name}" removido do carrinho.`);
}



/* -> Calcular Total */

async function calculateTotal(userCart){
  const resultQuebrado = userCart.reduce((total, item) => total + item.subTot(), 0 );
  const result = resultQuebrado.toFixed(2);
  console.log(`🛒 Valor total: ${result}`);
}

export { addItem, deleteItem, removeItem, calculateTotal };
