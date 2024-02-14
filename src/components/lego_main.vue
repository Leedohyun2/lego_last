<template>
  <main>
    <div class="main_container">
      <div class="main_img">
        <div class="text_container">
          <img src="../assets/images/2024_lego.png" alt="메인이미지" />
          <div class="main_text">
            <span class="hulkbuster">
              <img src="../assets/images/Hulkbuster_1_11zon.png" alt="" />
            </span>
            <span class="avatar">
              <img src="../assets/images/avatar.png" alt="" />
            </span>
            <span class="text_area">
              <h2>신나는 설연휴</h2>
              <p>모두가 한마음으로 즐기는 레고 선물을 만나보세요.</p>
              <!-- <router-link to="/lego_shop_main">
                <button>쇼핑하기 ></button>
              </router-link> -->
            </span>
          </div>
        </div>
      </div>
      <div class="main_content1">
        <div class="main_content1_section1">
          <section class="section1_img">
            <div class="section_content">
              <a href="#none">
                <img
                  src="../assets/images/main2_img-removebg-preview.png"
                  alt=""
                />
                <p>신제품</p>
              </a>
            </div>
            <div class="section_content">
              <a href="#none">
                <img
                  src="../assets/images/main2_img2-removebg-preview.png"
                  alt=""
                />
                <p>독점제품</p>
              </a>
            </div>
            <div class="section_content">
              <a href="#none">
                <img
                  src="../assets/images/main2_img3-removebg-preview.png"
                  alt=""
                />
                <p>행사</p>
              </a>
            </div>
            <div class="section_content">
              <a href="#none">
                <img
                  src="../assets/images/main2_img4-removebg-preview.png"
                  alt=""
                />
                <p>장식품</p>
              </a>
            </div>
          </section>

          <section class="section1_img">
            <div class="section_content">
              <a href="#none">
                <img
                  src="../assets/images/main2_img5-removebg-preview.png"
                  alt=""
                />
                <p>신제품</p>
              </a>
            </div>
            <div class="section_content">
              <a href="#none">
                <img src="../assets/images/main2_img6.png" alt="" />
                <p>설날맞이</p>
              </a>
            </div>
            <div class="section_content">
              <a href="#none">
                <img
                  src="../assets/images/main2_img7-removebg-preview.png"
                  alt=""
                />
                <p>행사</p>
              </a>
            </div>
            <div class="section_content">
              <a href="#none">
                <img
                  src="../assets/images/main2_img8-removebg-preview.png"
                  alt=""
                />
                <p>레고자랑</p>
              </a>
            </div>
          </section>
        </div>
      </div>

      <!-- 레고 청룡의해 -->
      <div class="dragon_lego_container">
        <div class="dragon_lego">
          <img src="../assets/images/dragon_back_big.png" alt="" />
        </div>
        <div class="dragon_btn_container">
          <h2>직접 조립해 더욱 기억에 남는 추억</h2>
          <h3>특별한 선물로 봄 축제를 기념하세요.</h3>
          <button>자세히 보기 ></button>
          <button>쇼핑하기 ></button>
        </div>
        <div class="dragon_lego2">
          <img src="../assets/images/dragon_back2.jpeg" alt="" />
        </div>
      </div>
      <swiper_slide></swiper_slide>
      <div class="lego_slide3">
        <h2>{{ slide3_title }}</h2>
        <h3>{{ slide3_text }}</h3>
      </div>
      <swiper_slide3></swiper_slide3>
      <div class="lego_slide2">
        <h2>{{ slide2_title }}</h2>
        <h3>{{ slide2_text }}</h3>
      </div>
      <swiper_slide2></swiper_slide2>

      <!-- 레고 테마관 -->
      <div class="concept_container">
        <h2>LEGO THEME AREA</h2>
        <div class="tab">
          <button class="tablinks" @click="openTab('minecraft')">MINECRAFT</button>
          <button class="tablinks" @click="openTab('harrypotter')">HARRYPOTTER</button>
          <button class="tablinks" @click="openTab('ninjago')">NINJAGO</button>
        </div>

        <div
          v-for="(content, tab) in tabContents"
          :key="tab"
          :id="tab"
          class="tabcontent"
          v-show="activeTab === tab"
        >
          <component :is="content"></component>
        </div>
      </div>

      <top_up_btn></top_up_btn>
    </div>
  </main>
</template>

<script>
import lego_minecraft from "./lego_minecraft.vue";
import lego_ninjago from "./lego_ninjago.vue";
import lego_harrypotter from "./lego_harrypotter.vue";
import swiper_slide from "./swiper_slide.vue";
import swiper_slide2 from "./swiper_slide2.vue";
import swiper_slide3 from "./swiper_slide3.vue";
import top_up_btn from "./top_up_btn.vue";

export default {
  components: {
    lego_minecraft,
    lego_ninjago,
    lego_harrypotter,
    swiper_slide,
    swiper_slide2,
    swiper_slide3,
    top_up_btn,
  },
  data() {
    return {
      slide2_title: "레고® 장식품",
      slide2_text: "시들지않는 꽃으로 집을 꾸며 보아요!",
      slide3_title: "레고® 인기상품",
      slide3_text: "어른들도 좋아해요!",
      activeTab: "minecraft", // 기본으로 표시될 탭
      tabContents: {
        minecraft: "lego_minecraft",
        ninjago: "lego_ninjago",
        harrypotter: "lego_harrypotter",
      },
    };
  },

  methods: {
    openTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style>
.main_img img {
  width: 100%;
  vertical-align: bottom;
}

.hulkbuster,
.avatar {
  display: none;
}

/* .text_container {
  position: relative;
} */

.main_text {
  position: relative;
  background: #f6842a;
  text-align: center;
  padding-bottom: 20px;
}

.main_text h2 {
  padding-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.main_text p {
  line-height: 80px;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
}

.main_text button {
  width: 150px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background: #ee391e;
  color: #fff;
  margin: 15px 0 5px 0;
  cursor: pointer;
}

.main_text button:hover {
  background: #fff;
  color: #000;
}

.main_img_logo {
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#main_img_logo_first {
  width: 180px;
  margin-left: 20px;
}

#main_img_logo_second {
  width: 180px;
  height: 20px;
  margin-right: 20px;
}

.main_content1_section1 {
  width: 100%;
  background: #f6842a;
}

.section_content {
  text-align: center;
}

.section_content:hover {
  transform: scale(0.8);
  transition: all ease-in-out 0.3s;
}

.section1_img {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px;
}

.section1_img img {
  background: #ffc20f;
  width: 75%;
  padding: 5px;
  border-radius: 10px;
  margin: auto;
}

.section_content a p {
  margin: 10px 0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.slide1_container {
  display: none;
  width: 100%;
  overflow: scroll;
  background: #0057bc;
}

.slide1_container::-webkit-scrollbar {
  width: 0;
  height: 8px;
  background: #ed9d16;
  border-radius: 15px;
}

.slide1_container::-webkit-scrollbar-thumb {
  background: #b37100;
  border-radius: 15px;
}

.slide1_container div {
  display: flex;
  padding-bottom: 30px;
}

.slide1_img_container span {
  width: 100%;
}

.slide1_img_container span img {
  width: 400px;
  padding: 20px;
}

.slide_container1,
.slide_container2,
.slide_container3 {
  text-align: center;
}

.slide1_img_container h3,
p {
  color: #fff;
}

.slide1_img_container h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.slide1_img_container p {
  line-height: 20px;
  margin-bottom: 20px;
}

.slide_text1 strong {
  color: #fff;
  font-size: 20px;
}

.dragon_lego img {
  width: 100%;
  vertical-align: bottom;
}

.dragon_lego2 img {
  width: 100%;
  vertical-align: bottom;
}

.dragon_btn_container {
  background: #f6842a;
  padding: 20px;
  text-align: center;
}

.dragon_btn_container h2 {
  font-size: 20px;
  color: #fff;
}

.dragon_btn_container h3 {
  line-height: 50px;
  color: #fff;
}

.dragon_btn_container button {
  width: 150px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background: #ffc20f;
  color: #fff;
  margin: 15px 10px 5px 0;
  cursor: pointer;
}

.dragon_btn_container button:hover {
  background: #fff;
  color: #000;
}

.lego_slide2 {
  background: url(../assets/images/slide2_text_bg.svg) no-repeat;
  background-size: cover;
  text-align: center;
  padding: 60px 0 10px;
  /* margin-top: 40px; */
}

.lego_slide2 h2 {
  font-size: 26px;
  color: #fff;
}

.lego_slide2 h3 {
  font-size: 22px;
  line-height: 60px;
  color: #fff;
}

.lego_slide3 {
  background: url(../assets/images/swiper2_bg.png);
  text-align: center;
  padding: 40px 0 10px;
}

.lego_slide3 h2 {
  font-size: 26px;
  color: #000;
}

.lego_slide3 h3 {
  font-size: 22px;
  line-height: 60px;
  color: #000;
}

.concept_container > h2 {
  text-align: center;
  background: #00405A;
  padding-top: 40px;
  color: #fff;
  font-size: 40px;
  font-family: "Anton", sans-serif;
}

.tab {
  background: #00405A;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: 40px;
}

.tab button {
  width: 180px;
  padding: 20px;
  background: #01183C;
  border-radius: 15px;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  font-family: "Anton", sans-serif;
}

.tab button:first-child {
  background: #008537;
}

.tab button:last-child {
  background: #B01F19;
}

.tab button:hover {
  background: #fff;
  color: #000;
}

@media screen and (min-width: 1000px) {
  .hulkbuster {
    display: block;
    position: absolute;
    width: 70%;
    top: -280px;
    left: -280px;
    /* z-index: 1000; */
    animation: motion 1.2s linear 0s infinite alternate;
  }

  .hulkbuster img {
    width: 20%;
  }

  .avatar {
    display: block;
    position: absolute;
    width: 100%;
    top: -350px;
    left: -200px;
    animation: motion 1.5s linear 0s infinite alternate;
  }

  .avatar img {
    width: 15%;
  }

  .main_content1 {
    width: 100%;
  }

  .main_content1_section1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main_text h2 {
    padding-top: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }

  .main_text p {
    line-height: 80px;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
  }

  .section1_img img {
    width: 100%;
  }

  .section_content {
    margin: 20px;
  }

  .dragon_btn_container h2 {
    font-size: 26px;
  }

  .dragon_btn_container h3 {
    font-size: 22px;
  }
}

@keyframes motion {
  0% {
    margin-top: 70px;
    margin-left: 10px;
  }

  /* 처음 위치 */
  100% {
    margin-top: 30px;
    margin-right: 20px;
  }
}
</style>