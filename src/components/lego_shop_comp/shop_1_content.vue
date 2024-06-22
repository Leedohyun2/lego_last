<template>
  <div class="content_wrap">
    <!-- 각 상품 모달 -->
    <div class="black-bg" v-if="modalOpen">
      <button @click="closeModal">
        <p><i class="fa-solid fa-xmark"></i></p>
      </button>
      <div class="white-bg">
        <div class="modal_shopping_button">
          <div class="detail_img">
            <!-- 해당 상품 이미지 표시 -->
            <img :src="require(`@/assets/shop_images/${products[selectedProductIndex].image}`)" alt="" />
          </div>

          <span class="modal_shopping_text">
            <span class="mic_img_text_etc">
              <i class="fa-solid fa-star" style="color: #ffd43b">{{
                products[selectedProductIndex].rating
              }}</i>
              <p>{{ products[selectedProductIndex].age }}</p>
              <i class="fa-solid fa-cube" style="color: #fff">{{
                products[selectedProductIndex].reviews
              }}</i>
            </span>
            <!-- 해당 상품 정보 표시 -->
            <h4>{{ products[selectedProductIndex].name }}</h4>
            <p>{{ products[selectedProductIndex].description }}</p>
            <!-- 상품 가격, 수량 및 구매 버튼 표시 -->
            <p>*최대 구매 가능한 수량 8개*</p>
            <span class="buy_btn">
              <button class="minus_btn" @click="decrementPrice" :disabled="count <= 1">
                <i class="fa-solid fa-minus" style="color: #000"></i>
              </button>
              <span class="count_result">{{ count }}</span>
              <button class="plus_btn" @click="incrementPrice" :disabled="count >= 8">
                <i class="fa-solid fa-plus" style="color: #000"></i>
              </button>
            </span>
            <p>{{ totalPrice }}원</p>
            <span class="buy_btn_container">
              <button>
                <i class="fa-solid fa-cart-shopping"></i>
                구매하기
              </button>
              <button @click="addToCartClicked(selectedProductIndex, count)">
                <i class="fa-solid fa-basket-shopping"></i>
                장바구니 담기
              </button>
              <router-link to="/shop_1_explanation">
                <button>
                  <i class="fa-solid fa-clipboard"></i>
                  조립 설명서
                </button>
              </router-link>
            </span>
          </span>
        </div>
      </div>
    </div>

    <!-- 메인 컨텐츠 -->
    <div class="mic_content_container">
      <div class="mic_content">
        <!-- 상품 목록 -->
        <ul v-for="(row, rowIndex) in productsInRows" :key="rowIndex" class="product-row">
          <li v-for="(product, columnIndex) in row" :key="columnIndex" class="product-column">
            <div class="mic_img_card">
              <span class="mic_img">
                <!-- 각 상품 이미지를 클릭하여 모달 열기 -->
                <a href="#none" @click="openModal(rowIndex * 3 + columnIndex)">
                  <img :src="require(`@/assets/shop_images/${product.image}`)" alt="" />
                </a>
              </span>
              <span class="mic_img_text_etc">
                <!-- 평점, 리뷰 수, 나이 -->
                <i class="fa-solid fa-star" style="color: #ffd43b">{{
                  product.rating
                }}</i>
                <i class="fa-solid fa-cube" style="color: #fff">{{
                  product.reviews
                }}</i>
                <p>{{ product.age }}</p>
              </span>
              <span class="mic_img_text">
                <!-- 상품 정보 표시 -->
                <h4>{{ product.name }}</h4>
                <p>{{ product.price }}원</p>
                <!-- 상품 구매 버튼 표시 -->
                <button>
                  <i class="fa-solid fa-basket-shopping"></i>
                  구매하기
                </button>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <top_up_btn></top_up_btn>
  </div>
</template>

<script>
import shop_1_explanation from "./shop_1_explanation.vue";
import top_up_btn from "../top_up_btn.vue";
import imageData from "../../img_data/img_data.js";
// import { EventBus } from "@/EventBus.js";
import shopping_basket from "./shopping_basket.vue";

export default {
  components: {
    top_up_btn,
    shopping_basket
  },

  data() {
    return {
      modalOpen: false,
      modalOpen2: false,
      count: 1,
      pricePerItem: 0,
      isFilled: false,
      totalPrice: 0,
      cartItems: [], // 장바구니 데이터
      shop_1_explanation,
      selectedProductIndex: null, // 선택된 상품의 인덱스
      products: [
        {
          name: "디바우러 결전",
          image: imageData[0].name,
          description:
            "디바우러를 격파하세요.최초의 마인크래프트 레전드® 세트를 통해 모습을 드러낸 디바우러! 이걸 아이들이 왜 좋아하냐고요? 점액과 구토 탄환 2가지만 봐도 감이 오잖아요",
          rating: "4.5",
          reviews: "188개",
          age: "8세 이상",
          price: 64900,
        },
        {
          name: "네더 포털 매복",
          image: imageData[1].name,
          description:
            "네더 포털을 매복하세요.진짜로 탐낼 만한 장난감이 하나 나왔어요! 극적인 전투 상황을 조립하고, 마인크래프트의 인상적인 피겨들을 배치하여 멋진 장면을 만들어보세요.",
          rating: "4.4",
          reviews: "149개",
          age: "8세 이상",
          price: 52900,
        },
        {
          name: "스티브의 사막 탐험",
          image: imageData[2].name,
          description:
            "사상 최초로 사막 생물계 배경의 레고® 마인크래프트® 장난감 세트가 나왔어요. 자, 마인크래프트 캐릭터 스티브와 하늘을 나는 팬텀의 일대 결전이 시작됩니다!",
          rating: "0.0",
          reviews: "63개",
          age: "6세 이상",
          price: 12900,
        },
        {
          name: "검의 전초 기지",
          image: imageData[3].name,
          description:
            "거대한 검의 기지를 배경으로 펼쳐지는 대대적인 액션 멋진 액션 기지 세트를 통해 유명한 마인크래프트® 다이아몬드 검이 거대한 스케일로 부활합니다!",
          rating: "4.5",
          reviews: "282개",
          age: "8세 이상",
          price: 64900,
        },
        {
          name: "거북이 해변의 집",
          image: imageData[4].name,
          description:
            "창의력, 액션, 동물… 온갖 피겨와 재미있는 요소가 등장하는 다기능적인 레고® 마인크래프트 장난감과 함께 즐거운 놀이의 세상을 펼쳐보아요",
          rating: "4.8",
          reviews: "213개",
          age: "8세 이상",
          price: 39900,
        },
        {
          name: "깊고 어두운 전장",
          image: imageData[5].name,
          rating: "4.9",
          reviews: "565개",
          age: "10세 이상",
          price: 94900,
        },
        {
          name: "개구리 집",
          image: imageData[6].name,
          rating: "4.2",
          reviews: "287개",
          age: "8세 이상",
          price: 79900,
        },
        {
          name: "늪지 모험",
          image: imageData[7].name,
          rating: "4.7",
          reviews: "86개",
          age: "8세 이상",
          price: 12900,
        },
        {
          name: "꿀벌 오두막",
          image: imageData[8].name,
          rating: "5.0",
          reviews: "125개",
          age: "8세 이상",
          price: 29900,
        },
        {
          name: "아이언골렘 요새",
          image: imageData[9].name,
          rating: "4.9",
          reviews: "327개",
          age: "8세 이상",
          price: 157900,
        },
        {
          name: "훈련장",
          image: imageData[10].name,
          rating: "0.0",
          reviews: "412개",
          age: "8세 이상",
          price: 94900,
        },
        {
          name: "조합 상자",
          image: imageData[11].name,
          rating: "4.0",
          reviews: "712개",
          age: "8세 이상",
          price: 106900,
        },
      ],
    };
  },
  methods: {
    incrementPrice() {
      if (this.count < 8) {
        this.count++;
        // console.log("Count increased: ", this.count);
        this.updateTotalPrice();
      }
    },
    decrementPrice() {
      if (this.count > 1) {
        this.count--;
        // console.log("Count decreased: ", this.count);
        this.updateTotalPrice();
      }
    },

    updateTotalPrice() {
      this.$set(this, "totalPrice", this.calculatePrice());
    },

    calculatePrice() {
      const selectedProduct = this.products[this.selectedProductIndex];
      const totalPrice = this.count * selectedProduct.price;
      return totalPrice;
    },

    openModal(index) {
      this.selectedProductIndex = index;
      this.modalOpen = true;
      this.count = 1; // 모달이 열릴 때 수량을 1로 초기화
      this.totalPrice = this.calculatePrice();
    },
    closeModal() {
      this.modalOpen = false;
      this.count = 1;
      this.totalPrice = 0;
    },

    getPrice(index) {
      return this.products[index].price;
    },

    // 각 상품 객체에 수량 속성을 추가하여 저장
    addToCartClicked(productIndex, quantity) {
      const selectedProduct = this.products[productIndex];
      const totalPrice = selectedProduct.price * quantity; // 전달받은 수량을 사용하여 총 가격 계산

      const product = {
        name: selectedProduct.name,
        price: totalPrice,
        image: selectedProduct.image,
        quantity: quantity // 전달받은 수량 사용
      };

      // 이미 장바구니에 담긴 상품인지 확인
      const existingProductIndex = this.cartItems.findIndex(item => item.name === selectedProduct.name);
      if (existingProductIndex !== -1) {
        // 이미 장바구니에 담긴 상품이라면 해당 상품의 수량을 늘림
        this.$store.commit('updateCartItemQuantity', { index: existingProductIndex, quantity: this.cartItems[existingProductIndex].quantity + quantity });
      } else {
        // 장바구니에 담긴 상품이 아니라면 상품을 추가하고 수량을 설정
        this.$store.dispatch('addToCart', product);
      }

      alert("장바구니에 상품이 추가되었습니다.");
    },
  },

  created() {
    // 컴포넌트가 생성될 때 초기 가격 계산
    if (this.selectedProductIndex === null) {
      this.selectedProductIndex = 0;
    }
    this.totalPrice = this.calculatePrice();
  },

  computed: {
    heartClass() {
      return {
        far: !this.isFilled,
        fas: this.isFilled,
      };
    },

    productsInRows() {
      // 한 줄에 표시할 상품 수
      const chunkSize = 3;
      const result = [];
      for (let i = 0; i < this.products.length; i += chunkSize) {
        result.push(this.products.slice(i, i + chunkSize));
      }
      return result;
    },
  },
};
</script>

<style scoped>
.mic_img_card {
  text-align: center;
}

.mic_content_container {
  padding: 30px;
}

.mic_content ul {
  display: flex;
}

.mic_content ul li {
  margin: 10px;
  overflow: hidden;
}

.mic_content ul img {
  background: #f2f2f2;
  vertical-align: bottom;
  padding: 10px;
  width: 100%;
}

.mic_img {
  position: relative;
}

.mic_content ul img:hover {
  transform: scale(1.04);
  transition: all ease-in-out 0.2s;
}

.mic_img_text_etc {
  width: 100%;
  display: flex;
  background: #058a24;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 20px 20px;
  padding: 20px;
}

.mic_img_text_etc p {
  font-size: 18px;
  font-weight: bold;
}

.mic_img_text_etc i {
  font-size: 22px;
}

.mic_img_card {
  background: yellowgreen;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
}

.mic_img_text>h4 {
  color: #fff;
  padding: 20px;
  font-size: 25px;
  height: 100px;
}

.mic_img_text>p {
  font-size: 25px;
  padding-bottom: 20px;
}

.mic_img_text>button {
  width: 50%;
  padding: 15px;
  color: #fff;
  margin-bottom: 25px;
  font-weight: bold;
  border-radius: 20px;
  background: #058a24;
}

.mic_img_text>button:hover {
  background: #fff;
  color: #000;
}

.buy_btn_container button {
  margin: 10px;
}

.black-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  text-align: center;
  padding: 10px;
  z-index: 10000;
}

.black-bg button {
  background: #9acd32;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.modal_shopping_text h4 {
  font-size: 28px;
  font-weight: bold;
  padding: 15px 0;
  color: #fff;
}

.black-bg button p {
  color: #000;
  font-size: 30px;
}

.white-bg {
  width: 75%;
  height: 100%;
  margin: auto;
  background: yellowgreen;
  border-radius: 20px;
  padding: 20px;
  overflow: scroll;
  overscroll-behavior: contain;
  z-index: 10000;
}

.white-bg::-webkit-scrollbar {
  width: 13px;
  height: 0;
  background: #d1d1d1;
  border-radius: 0 15px 15px 0;
}

.white-bg::-webkit-scrollbar-thumb {
  background: #919191;
  border-radius: 15px;
}

.white-bg::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

.white-bg img {
  width: 80%;
  height: 100%;
  margin: 5px 5px 5px 0;
}

.white-bg2 img {
  width: 40%;
  height: 100%;
  margin: 5px 5px 5px 0;
  background: #fff;
  border: 2px solid #000;
}

.white-bg2 {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  overflow: scroll;
  z-index: 10000;
}

.white-bg2::-webkit-scrollbar {
  width: 13px;
  height: 0;
  background: #d1d1d1;
  border-radius: 0 15px 15px 0;
}

.white-bg2::-webkit-scrollbar-thumb {
  background: #919191;
  border-radius: 15px;
}

.white-bg2::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

.buy_btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buy_btn p {
  background: #79bb59;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.buy_btn button:hover {
  color: #000;
}

.count_result {
  background: #fff;
  padding: 3px 20px;
  font-size: 24px;
}

.detail_text {
  padding: 10px;
  margin: 5px 0 15px 0;
  border-radius: 20px;
  background: #fff;
  color: #000 !important;
}

.detail_img {
  border: 2px solid #000;
  background: #fff;
}

.detail_img::-webkit-scrollbar {
  width: 0;
  height: 13px;
  background: #d1d1d1;
  border-radius: 0 15px 15px 0;
}

.detail_img::-webkit-scrollbar-thumb {
  background: #919191;
  border-radius: 15px;
}

.detail_img::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

.modal_shopping_button {
  line-height: 50px;
}

.modal_shopping_button p {
  width: 80%;
  margin: auto;
  color: #fff;
  font-size: 22px;

}

.modal_shopping_button button {
  background: #058a24;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 3px;
  padding: 3px 10px;
}

.modal_shopping_button button:hover {
  color: #000;
  background: #fff;
}

@media screen and (max-width: 1000px) {
  .mic_content ul {
    display: grid;
  }

  .detail_img1,
  .detail_img3,
  .detail_img5 {
    display: block;
  }

  .white-bg img {
    width: 100%;
  }

  .mic_img_text_etc {
    display: block;
    line-height: 40px;
  }

  .mic_img_text_etc i {
    padding: 10px 40px;
  }

  .white-bg {
    width: 90%;
    height: 90%;
  }
}
</style>