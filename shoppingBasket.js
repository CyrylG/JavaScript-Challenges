class ShoppingBasket {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    getTotalPrice() {
        let total = 0;
        this.items.forEach((item) => {
            total += item.getPrice();
        })
        return total - this.discount;
    }

    addItem(item) {
        this.items.push(item);
    }

    applyDiscount(discount) {
        this.discount += discount;
    }
}

module.exports = ShoppingBasket;