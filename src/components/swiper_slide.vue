<template>
  <!-- role 속성은 웹 접근성에 필요할 경우 넣는 속성이므로 swiper의 필수값은 아닙니다 -->
  <swiper ref="filterSwiper" :options="swiperOption" role="tablist" class="swiper_slider">
    <swiper-slide role="tab" class="swiper_slide_container">
      <a href="#none">
        <span class="swiper_slide_text_container">
          <div class="swiper_slide_text">
            <img src="../assets/images/lego_new1_1_11zon.png" alt="" />
            <h3>상서로운 용</h3>
            <p>알록달록한 레고® 세트와 함께 용의 해를 맞이해 보세요</p>
            <button>쇼핑하기 ></button>
          </div>
        </span>
      </a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none">
        <div class="swiper_slide_text">
          <img src="../assets/images/lego_new2_2_11zon.png" alt="" />
          <h3>가족 상봉 축하연</h3>
          <p>중국식 식당에서 전통적인 봄 축제를 즐겨보세요.</p>
          <button>쇼핑하기 ></button>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none">
        <div class="swiper_slide_text">
          <img src="../assets/images/lego_new3_3_11zon.png" alt="" />
          <h3>빨간 드래곤 3in1</h3>
          <p>드래곤과 불사조를 한 세트에서 모두 만날 수 있답니다.</p>
          <button>쇼핑하기 ></button>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none">
        <div class="swiper_slide_text">
          <img src="../assets/images/lego_new4_4_11zon.png" alt="" />
          <h3>마스터 드래곤 에갈트</h3>
          <p>좋아하는 닌자고 드래곤 라이징캐릭터와 함께 전투에 뛰어드세요.</p>
          <button>쇼핑하기 ></button>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none">
        <div class="swiper_slide_text">
          <img src="../assets/images/lego_new5_5_11zon.png" alt="" />
          <h3>메가폴리스 시티 5주년</h3>
          <p>레고® 몽키 키드 시티 세트를 통해 전설의 영웅을 소한해 보아요.</p>
          <button>쇼핑하기 ></button>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none">
        <div class="swiper_slide_text">
          <img src="../assets/images/lego_new6_6_11zon.png" alt="" />
          <h3>봄 축제 미키 마우스</h3>
          <p>
            모두가 사랑하는 캐릭터가 중국의 새해 전통 복장으로 멋지게
            꾸몄답니다.
          </p>
          <button>쇼핑하기 ></button>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none">
        <div class="swiper_slide_text">
          <img src="../assets/images/lego_new7_7_11zon.png" alt="" />
          <h3>축제 캘린더</h3>
          <p>
            전통적인 새해 장식물로 꾸며진 빙글빙글 돌아가는 세트를 선물해
            보세요.
          </p>
          <button>쇼핑하기 ></button>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none">
        <div class="swiper_slide_text">
          <img src="../assets/images/lego_new8_8_11zon.png" alt="" />
          <h3>돈나무</h3>
          <p>부와 복을 부르는 새해전통 선물을 직접 조립해 보세요</p>
          <button>쇼핑하기 ></button>
        </div>
      </a>
    </swiper-slide>
  </swiper>
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
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        // pagination: {
        //   el: ".swiper_slider",
        //   clickable: true, 
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
  background: #fff;
  padding: 15px;

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

  // &:before {
  //   left: 0;
  //   background: linear-gradient(90deg,
  //       #fff -20.19%,
  //       rgba(255, 255, 255, 0.8) 18.31%,
  //       rgba(255, 255, 255, 0) 75%);
  // }

  // &:after {
  //   right: 0;
  //   background: linear-gradient(270deg,
  //       #fff -20.19%,
  //       rgba(255, 255, 255, 0.8) 18.31%,
  //       rgba(255, 255, 255, 0) 75%);
  // }

  .swiper-wrapper {
    .swiper-slide {
      width: 40%;
      min-width: 300px;
      padding: 14px;
      margin: 0 20px;
      background: #fff;
      cursor: pointer;

      &[aria-selected="true"] {
        color: #fff;
        background: #fff;
      }
    }

    .swiper_slide_text_container {
      overflow: hidden;
    }

    .swiper-slide img {
      width: 100%;
      vertical-align: bottom;
      border-radius: 15px;
      padding-top: 15px
    }

    .swiper_slide_text {
      background: #ffc20f;
      text-align: center;
      border-radius: 15px;
    }

    .swiper_slide_text h3 {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 5px;
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
      background: #F6842A;
      color: #fff;
      margin: 15px 10px 15px 0;
      cursor: pointer;
    }

    .swiper_slide_text button:hover {
      color: #000;
      background: #fff;
    }
  }
}
</style>