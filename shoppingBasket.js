class ShoppingBasket {
    constructor() {
        this.items = [];
    }

    getTotalPrice() {
        let total = 0;
        this.items.map((item) => {
            total += item.getPrice();
        })
        return total;
    }

    addItem(item) {
        this.items.push(item);
    }
}

module.exports = ShoppingBasket;