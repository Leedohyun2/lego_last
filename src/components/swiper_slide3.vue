<template>
  <!-- role 속성은 웹 접근성에 필요할 경우 넣는 속성이므로 swiper의 필수값은 아닙니다 -->
  <div class="swiper_container">
    <swiper ref="filterSwiper" :options="swiperOption" role="tablist" class="swiper_slider">
      <swiper-slide role="tab" class="swiper_slide_container">
        <a href="#none">
          <span class="swiper_slide_text_container">
            <div class="swiper_slide_text">
              <img src="../assets/shop_images/lego_technic3_5_11zon.png" alt="" />
              <h3>Lamborghini Sián FKP 37</h3>
              <p>259,900원</p>
              <button>장바구니 담기</button>
            </div>
          </span>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_shop_img11_11zon.png" alt="" />
            <h3>조합 상자</h3>
            <p>106,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_shop_img5_5_11zon.png" alt="" />
            <h3>거북이 해변의 집</h3>
            <p>39,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_shop_img3_3_11zon.png" alt="" />
            <h3>스티브의 사막 탐험</h3>
            <p>12,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_shop_img7_7_11zon.png" alt="" />
            <h3>개구리 집</h3>
            <p>79,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_technic6_8_11zon.png" alt="" />
            <h3>NEOM McLaren Formula E 레이스카</h3>
            <p>
              79,900원
            </p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_technic7_9_11zon.png" alt="" />
            <h3>야마하 MT-10 SP</h3>
            <p>299,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_shop_img1_1_11zon.png" alt="" />
            <h3>디바우러 결전</h3>
            <p>64,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_technic2_4_11zon.png" alt="" />
            <h3>맥라렌 포뮬러 레이스카</h3>
            <p>259,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_technic_11zon.png" alt="" />
            <h3>Liebherr LR 13000 크롤러 크레인</h3>
            <p>879,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/shop_images/lego_shop_img12_11zon.png" alt="" />
            <h3>깊고 어두운 전장</h3>
            <p>94,900원</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
    
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "FilterSwiper",
  data() {
    const _vm = this;
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 6,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        freeMode: true,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false
        // },
        centerInsufficientSlides: true,
        on: {
          click: function () {
            _vm.slideMoveTo();
            _vm.activeTab();
          },
          tap: function () {
            _vm.slideMoveTo();
            _vm.activeTab();
          },
          resize: function () {
            this.allowTouchMove = !_vm.isOverview;
          },
        },
      },
    };
  },
  methods: {
    swiperInit: function () {
      this.swiper.allowTouchMove = !this.isOverview;
      this.activeTab();
    },
    activeTab: function (swiper) {
      swiper = swiper || this.swiper;
      if (swiper.hasOwnProperty("clickedSlide") && !swiper.clickedSlide) return;

      const slideSelector = `.${swiper.params.slideClass}`;
      const selectedEl =
        swiper.clickedSlide || swiper.slides[swiper.params.initialSlide];
      const swiperArr = document.querySelectorAll(slideSelector);
      Array.from(swiperArr).forEach((el) => {
        el.setAttribute("aria-selected", "false");
        selectedEl.setAttribute("aria-selected", "true");
      });
    },
    slideMoveTo: function (swiper = this.swiper) {
      if (!swiper.clickedSlide) return;

      const activeIndex = swiper.clickedIndex;
      swiper.slideTo(activeIndex);
    },
  },
  computed: {
    swiper: function () {
      return this.$refs.filterSwiper.swiper;
    },
    isOverview: function () {
      return window.innerWidth >= this.swiper.virtualSize;
    },
  },
  mounted() {
    this.swiperInit();
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>
  
<style lang="scss" scoped>
.swiper-container {
  padding: 15px;
  background: #EC464A;

  &:before,
  &:after {
    display: block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    z-index: 10;
    content: "";
  }

  .swiper-wrapper {
    .swiper-slide {
      width: 30%;
      min-width: 300px;
      padding: 14px;
      // background: #FFE6E5;
      cursor: pointer;

      &[aria-selected="true"] {
        color: #FFE6E5;
        background: #FFE6E5
      }
    }

    .swiper_slide_text_container {
      overflow: hidden;
    }

    .swiper-slide {
      background: #FFE6E5;
      border-radius: 15px;
      margin: 0 40px;
    }

    .swiper-slide img {
      width: 100%;
      vertical-align: bottom;
      background: #FFE6E5;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
    }

    .swiper-slide img:hover {
      transform: scale(0.95);
      transition: all ease-in-out 0.3s;
    }

    .swiper_slide_text {
      background: #EC464A;
      text-align: center;
    }

    .swiper_slide_text img {
      width: 280px;
      height: 230px;
    }

    .swiper_slide_text h3 {
      color: #fff;
      font-size: 22px;
      font-weight: bold;
      padding-bottom: 5px;
      margin-top: 20px;
    }

    .swiper_slide_text p {
      color: #fff;
      font-size: 22px;
      font-weight: bold;
      line-height: 25px;
      padding: 10px 12px 0 12px;
      height: 70px;
    }

    .swiper_slide_text button {
      width: 150px;
      height: 40px;
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      background: #FFC0BD;
      color: #000;
      margin: 0 10px 15px 0;
      cursor: pointer;
    }

    .swiper_slide_text button:hover {
      color: #000;
      background: #fff;
    }
  }
}
</style>