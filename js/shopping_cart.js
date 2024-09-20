new Vue({
  el: '#cartApp',
  data: {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
  }
});