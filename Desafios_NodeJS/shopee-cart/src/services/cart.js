// quais acoes meu carrinho deve ter ?

// adicionar um item
async function addItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound !== -1) {
        userCart[indexFound].quantity += item.quantity;
        return;
    }
    userCart.push(item);
}

// remover um item - diminuir a quantidade ou remover se for o último
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound === -1) {
        console.log("❌ Item não encontrado no carrinho.");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        console.log(`➖ 1 unidade de "${item.name}" removida.`);
    } 
    
    else {
        userCart.splice(indexFound, 1);
        console.log(`🗑️ "${item.name}" removido do carrinho.`);
    }
}

// calcular o valor total
async function calculateTotal(userCart) {
    // Calculando diretamente para evitar erros de contexto (this)
    const result = userCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    console.log(`\n💰 Shopee Cart Total: R$ ${result.toFixed(2)}`);
}

async function displayCart(userCart){

    console.log(`\n🛒 Shopee Cart List: `)
    userCart.forEach((item, index) => {
        console.log(`item ${index + 1}: ${item.name}, valor unitario R$ ${item.price}, quantidade: ${item.quantity}, subtotal: R$ ${item.subtotal()}`)
    })
}

// deletar um item do carrinho
async function deleteItem(userCart,name){
    
    const index = userCart.findIndex(item => item.name === name)
    if(index !== -1){
        userCart.splice(index,1)
    }

}

// listar os itens do carrinho
async function listItems(userCart){

}

// limpar o carrinho
async function clearCart(userCart) {
    userCart.length = 0; 
    console.log("\n🧹 Shopee cart is now empty!");
}

export {
    addItem,
    calculateTotal,
    listItems,
    clearCart,
    removeItem,
    deleteItem,
    displayCart
}
