// Caso de usos dos itens

/* -> criar item com o subtotal certo */

async function createItem(name, price, quanty, id){
  return {
    name,
    price,
    quanty,
    id,
    subTot() {                 
      return this.price * this.quanty;
    }
  }
}

export default createItem