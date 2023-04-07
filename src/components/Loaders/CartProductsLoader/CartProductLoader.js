import { getShoppingCart } from "../../../../public/fakedb";

const CartProductsLoader = async() =>{
    const loaddedProducts = await fetch('products.json');
    const products = await loaddedProducts.json();
    const storedCart = getShoppingCart();
    const savedCart = [];
        for(const id in storedCart){
        const addedProducts = products.find(pd=>pd.id===id);
        if(addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts) 
        }
    }
    return savedCart;
}
export default CartProductsLoader;