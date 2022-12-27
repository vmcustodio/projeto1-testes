import Cart from './Cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    // antes de cada teste ser executado sempre terá um novo sendo feito do 0
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal()).toEqual(0);
    });
  });
  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes-men',
        price: 35388,
      },
      quantity: 2,
    };

    cart.addToCart(item);

    expect(cart.getTotal()).toEqual(70776);
  });
});
