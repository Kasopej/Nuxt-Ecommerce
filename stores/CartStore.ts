const tax = 1.1;
export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: []
    }),
    getters: {
        sumTotal(state){
            return state.cart.reduce(() => {}, 0)
        },
        dueTotal(state){
            return state.cart.reduce(() => {}, 0)*tax;
        },
        items(state){
            return state.cart.length;
        }
    },
    actions: {
        addToCart():Number {
            return this.cart.push()
        }
    }
})
