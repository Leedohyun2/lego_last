import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [],
  },
  mutations: {
    loadCartItems(state, cartItems) {
      state.cartItems = cartItems;
    },
    addToCart(state, product) {
      console.log('장바구니에 상품 추가됨:', product);
      state.cartItems.push(product);
    },
    removeFromCart(state, index) {
      console.log('장바구니에서 상품 제거됨:', state.cartItems[index]);
      state.cartItems.splice(index, 1);
    },
    updateCartItemQuantity(state, payload) {
      state.cartItems[payload.index].quantity = payload.quantity;
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index);
    },
    updateCartItemQuantity({ commit }, payload) {
      commit('updateCartItemQuantity', payload);
    },
  },
});
