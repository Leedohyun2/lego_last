<template>
  <!-- role 속성은 웹 접근성에 필요할 경우 넣는 속성이므로 swiper의 필수값은 아닙니다 -->
  <div class="swiper_container">
    <swiper ref="filterSwiper" :options="swiperOption" role="tablist" class="swiper_slider">
      <swiper-slide role="tab" class="swiper_slide_container">
        <a href="#none">
          <span class="swiper_slide_text_container">
            <div class="swiper_slide_text">
              <img src="../assets/images/slide2_img1_2_11zon.png" alt="" />
              <h3>이국적인 공작</h3>
              <p>이국적인 동물 장난감3개가 하나의 세트에!!</p>
              <button>장바구니 담기</button>
            </div>
          </span>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img2_3_11zon.png" alt="" />
            <h3>빈센트 반 고흐 - 별이 빛나는 밤</h3>
            <p>마음마저 편해지는 위대한 작품</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img4_5_11zon.png" alt="" />
            <h3>패밀리 트리</h3>
            <p>계절에 맞게 잎사귀를 고르고 비행기와 연을 나뭇가지에 걸어보세요.</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img3_4_11zon.png" alt="" />
            <h3>일본 엽서</h3>
            <p>여행을 꿈꾸는 사람들을 위한 아름다운 엽서 선물로 이를 데 없겠죠?</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img5_6_11zon.png" alt="" />
            <h3>가족 상봉 축하연</h3>
            <p>용의 해를 함께 경축해요!</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img6_7_11zon.png" alt="" />
            <h3>미니어처 식물들</h3>
            <p>
              특별한 재배 기술이 없어도 9가지 작은 식물들을 조립해보세요.
            </p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img7_8_11zon.png" alt="" />
            <h3>물조리개와 꽃</h3>
            <p>장화 또는 횃대에 앉은 새 2마리로 변신도 가능하답니다.</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img8_9_11zon.png" alt="" />
            <h3>장미 꽃다발</h3>
            <p>편안한 휴식의 시간 속에서 꽃을 조립하고 자유로이 배치해보세요.</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img9_10_11zon.png" alt="" />
            <h3>말린꽃 센터피스</h3>
            <p>가을의 색상으로 가득한 아름다운 실내 장식품을 만들어봐요.</p>
            <button>장바구니 담기</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide role="tab">
        <a href="#none">
          <div class="swiper_slide_text">
            <img src="../assets/images/slide2_img10_11_11zon.png" alt="" />
            <h3>다육식물</h3>
            <p>사무실의 장식으로 안성맞춤인 다육식물 작품을 만들어보세요.</p>
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
  background: #0ACEC7;
  // margin-bottom: 40px;

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
      background: #fff;
      cursor: pointer;

      &[aria-selected="true"] {
        color: #fff;
        background: #09A9A8;
      }
    }

    .swiper_slide_text_container {
      overflow: hidden;
    }

    .swiper-slide {
      background: #09A9A8;
      border-radius: 15px;
      margin: 0 40px;
    }
    
    .swiper-slide img {
      width: 100%;
      vertical-align: bottom;
      background: #fff;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
    }

    .swiper-slide img:hover {
      transform: scale(0.95);
      transition: all ease-in-out 0.3s;
    }

    .swiper_slide_text {
      background: url(../assets/images/slide2_text_bg.svg) no-repeat;
      text-align: center;
    }

    .swiper_slide_text img {
      width: 280px;
      height: 230px;
    }

    .swiper_slide_text h3 {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 5px;
      margin-top: 20px;
    }

    .swiper_slide_text p {
      color: #fff;
      font-size: 16px;
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
      background: #0fdbd1;
      color: #fff;
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