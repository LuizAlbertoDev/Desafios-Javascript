    import createItem from "./services/item.js";
    import * as cartService from "./services/cart.js"


    const cart = []
    const myWhishList = []

    console.log("👜 welcome to the your shopee Cart!")

    const item1 = await createItem("LapTop", 5000, 1)

    const item2 = await createItem("Mouse", 150, 3)

    // adicionar itens no carrinho
    await cartService.addItem(cart,item1)
    await cartService.addItem(cart,item2)

    // remover um item do carrinho
    await cartService.removeItem(cart,item2)

    // exibir os itens do carrinho
    await cartService.displayCart(cart)

    // calcular o valor total do carrinho
    await cartService.calculateTotal(cart)
