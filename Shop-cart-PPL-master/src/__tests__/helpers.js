const helper = require('../helpers');

test('kalau qty yaitu 1, ketika ditambah 1 akan menjadi = 2', () => {
    expect(helper.incrementQty(1)).toBe(2);
});

test('kalau qty yaitu 2, ketika dikurang 1 akan menjadi =2', () => {
    expect(helper.decrementQty(2)).toBe(1);
});

test('kalau qty yaitu 1, decrement button disabled = benar', () => {
    expect(helper.disableDecrement(1)).toBeTruthy();
});

test('kalau price 50000 dan qty yaitu 2, maka sub total 100000', () => {
    expect(helper.subTotal(50000,2)).toBe(100000);
});
