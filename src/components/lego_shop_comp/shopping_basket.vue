<template>
  <div>
    <div id="basket_wrap">
      <h2>장바구니</h2>
      <div class="basket_container">
        <div class="basket_left">
          <div class="basket_detail_text1">
            <p>
              현재 결제 시스템 업그레이드로 인해 해외 신용카드 사용이 당분간
              불가합니다. 업그레이드 기간 동안, 해외 카드를 제외한 국내 신용
              카드 및 다른 결제 방식 (예, 카카오페이) 등의 이용은 가능합니다.
              불편을 드려 죄송합니다.
            </p>
            <p>
              새해 복 많이 받으세요! 2월 8일 (목)부터 2월 11일 (일) 까지 설날
              연휴로 배송 업무가 중단되며, 2월 7일 (수) 이후 주문은 2월 12일
              (월) 이후 차례대로 출고될 예정입니다. 많은 택배가 몰릴 것으로
              예상되어 배송이 평소보다 1-3일 더 소요될 것으로 예상됩니다.
            </p>
          </div>
          <div class="basket_detail_text2">
            <h3>구매 가능</h3>
          </div>

          <!-- 장바구니 렌더링 -->
          <div class="basket_detail_text4">
            <div v-if="cartItems.length > 0">
              <div
                v-for="(item, index) in cartItems"
                :key="index"
                class="itemAlone"
              >
                <div class="itemName">
                  <h2>{{ item.name }}</h2>
                  <button @click="removeFromCart(index)" class="removeBtn">
                    <i class="fa-solid fa-x"></i>
                  </button>
                </div>

                <!-- 이미지 생성 -->
                <div class="itemImage">
                  <img
                    :src="require(`@/assets/shop_images/${item.image}`)"
                    alt=""
                  />
                </div>

                <div class="quantity">
                  <p>수량 : {{ item.quantity }}개</p>
                  <!-- 수량 표시 -->
                  <p>총 가격 : {{ item.price * item.quantity }}원</p>
                  <!-- 수량에 따른 가격 표시 -->
                </div>
              </div>

              <div class="order">
                <p>주문 구매 금액</p>
                <p>{{ calculateTotalPrice() }}원</p>
              </div>
              <div class="order">
                <p>배송비</p>
                <p>2500원</p>
              </div>

              <div class="buy_btn">
                <button>결제하기</button>
              </div>
            </div>
            <div v-else>
              <p>장바구니에 상품이 없습니다.</p>
            </div>
          </div>
        </div>

        <div class="basket_right">
          <div class="basket_detail_text3">
            <p>60000원 이상 구매하면 배송비가 무료!</p>
            <router-link to="/lego_shop_main">
              <p>모든 상품 ></p>
            </router-link>
          </div>
          <div class="basket_detail_text4">
            <h2>주문 요약</h2>
            <span class="basket_coupon">
              <p>프로모션/레고® Insiders 할인 코드 추가</p>
              <input type="text" placeholder="코드 입력" />
              <button>적용</button>
            </span>
            <div class="order">
              <p>주문 구매 금액</p>
              <p>{{ calculateTotalPrice() }}원</p>
            </div>
            <div class="order">
              <p>배송비</p>
              <p>2500원</p>
            </div>
            <div class="order2">
              <p>합계</p>
              <p>{{ calculateTotalPrice() + 2500 }}원</p>
            </div>
            <div class="buy_btn">
              <button>결제하기</button>
            </div>
          </div>
          <div class="basket_detail_text5">
            <h3>배송 및 반품 정책</h3>
            <span class="basket_QA">배송정책, </span>
            <span class="basket_QA">교환 반품 및 환불</span>
            <p>결제 방식</p>
            <span>
              <img src="../../assets/images/toss.jpg" alt="" />
              <img src="../../assets/images/kakaopay.png" alt="" />
              <img src="../../assets/images/mastercard.png" alt="" />
              <img src="../../assets/images/visa.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      // computed 속성이 아닌 data 속성으로 변경
      cartItemsData: [],
    };
  },
  computed: {
    // mapState 헬퍼를 사용하여 Vuex store의 cartItems를 가져옴
    ...mapState(["cartItems"]),
  },
  methods: {
    removeFromCart(index) {
      // Vuex store의 cartItems를 직접 변경하지 않고 mutation을 통해 변경
      this.$store.commit("removeFromCart", index);
    },
    calculateTotalPrice() {
      let totalPrice = 0;
      this.cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    },
  },
  created() {
    // 컴포넌트가 생성될 때 cartItems 데이터를 초기화
    this.cartItemsData = this.cartItems;
  },
};
</script>

<style scoped>
* {
  font-family: "Noto Sans KR", sans-serif;
  color: black;
}

#basket_wrap {
  background: #f8f8f8;
  padding: 50px;
  font-weight: 600;
}

h2 {
  font-size: 35px;
}

.basket_container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.basket_left {
  width: 60%;
}

.basket_detail_text1 {
  background: #fef6d2;
  padding: 30px;
  margin: 20px 0;
  line-height: 25px;
}

.basket_detail_text2 {
  background: #fff;
  padding: 30px;
}

.basket_detail_text2 h3 {
  font-size: 22px;
  padding: 10px 0 30px 0;
  border-bottom: 1px solid #d4d4d4;
}

.basket_QA {
  font-size: 20px;
  color: #006db7;
  line-height: 40px;
  cursor: pointer;
}

.basket_right {
  width: 38%;
}

.basket_detail_text3 {
  background: #e6f3ff;
  padding: 30px;
}

.basket_detail_text3 p {
  font-size: 20px;
  line-height: 40px;
}

.basket_detail_text3 p:last-child {
  cursor: pointer;
}

.basket_detail_text4 {
  background: #fff;
  margin: 20px 0;
  padding: 30px;
  line-height: 50px;
  border-bottom: 1px solid #d4d4d4;
}

.basket_detail_text4 h2 {
  padding: 5px 0 15px 0;
}

.basket_detail_text4 button {
  background: #e0e0e0;
  padding: 7px;
}

.basket_detail_text4 p {
  font-size: 22px;
  color: black;
  margin-top: 10px;
}

.itemImage img {
  width: 290px;
  padding: 5px;
}

.basket_coupon input {
  padding: 5px 10px;
  border: 2px solid #d4d4d4;
}

.basket_coupon button:hover {
  background: #006db7;
  color: #fff;
}

.removeBtn {
  font-size: 25px;
  background: #fff !important;
  margin-bottom: 15px;
}

.basket_detail_text5 {
  background: #fff;
  padding: 15px;
  line-height: 25px;
}

.basket_detail_text5 h3 {
  font-size: 22px;
  line-height: 60px;
}

.basket_detail_text5 img {
  width: 100px;
}

.itemAlone {
  border: 1px solid #d4d4d4;
  padding: 10px 30px;
  margin-bottom: 25px;
}

.itemName {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity p {
  font-size: 19px;
}

.buy_btn {
  text-align: center;
}

.buy_btn button {
  width: 100%;
}

.buy_btn button:hover {
  background: #006db7;
  color: #fff;
}

.slide_container {
  margin: 50px 0 30px 0;
}

.slide_container p {
  padding: 40px 65px;
  font-size: 35px;
  background: #0acec7;
  color: #fff;
  font-family: "Jua", sans-serif;
}

.order,
.order2 {
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.order2 {
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

@media screen and (max-width: 1000px) {
  .basket_container {
    display: block;
  }

  .basket_left {
    width: 100%;
  }

  .basket_detail_text2 {
    margin-bottom: 40px;
  }

  .basket_right {
    width: 100%;
  }

  .slide_container {
    display: none;
  }
}
</style>