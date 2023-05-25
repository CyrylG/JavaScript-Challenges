const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
    it('returns total price of 0 with no items added', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0);
    })

    it('returns total price with 2 items added', () => {
        const basket = new ShoppingBasket();
        const mockCandy = {
            getName: () => 'Skittle',
            getPrice: () => 5.99
        }
        basket.addItem(mockCandy)
        basket.addItem(mockCandy)

        expect(basket.getTotalPrice()).toBe(11.98);
    })

    it('applies a disocunt', () => {
        const basket = new ShoppingBasket();
        const mockCandy = {
            getName: () => 'Skittle',
            getPrice: () => 5.99
        }
        basket.addItem(mockCandy);
        basket.applyDiscount(1);
        expect(basket.getTotalPrice()).toBe(4.99);
    })
})