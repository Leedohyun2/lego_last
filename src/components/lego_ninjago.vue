<template>
  <div>
    <div class="concept_ninja">
      <img src="../assets/images/ninjago_logo.png" alt="아바타로고" />
      <div class="ninja_slide">
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img1_2_11zon.png" alt="" />
            <h3>닌자고® 드래곤 라이징: 2부!</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img2_4_11zon.png" alt="" />
            <h3>콜의 엘리멘탈 어스 로봇</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img3_1_11zon.png" alt="" />
            <h3>나의 장대한 닌자고® 여정</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img4_5_11zon.png" alt="" />
            <h3>닌자고® 드래곤 라이징 시즌1의 피날레</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img6_6_11zon.png" alt="" />
            <h3>제이의 전설</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img7_1_11zon.png" alt="" />
            <h3>카이의 전설</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img8_2_11zon.png" alt="" />
            <h3>소라의 엘리멘탈 테크로봇</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img9_3_11zon.png" alt="" />
            <h3>로이드와 아린의 닌자합체로봇</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="ninja_slide_img">
          <a href="#none">
            <img src="../assets/images/ninjago_img10_4_11zon.png" alt="" />
            <h3>닌자의 지헤에 담긴 힘을 활용해보세요</h3>
            <span class="ninja_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 닌자고 컨셉 */
.concept_ninja {
  padding: 20px 0;
  background: url(../assets/images/Ninjago_Pattern_3_11zon.png);
  text-align: center;
}

.concept_ninja > img {
  width: 150px;
  margin: 20px 0;
}

.ninja_slide {
  display: flex;
  width: 85%;
  height: 420px;
  margin: auto;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: scroll;
  background: #b01f19;
}

.ninja_slide::-webkit-scrollbar {
  width: 0;
  height: 13px;
  background: #500b14;
  border-radius: 20px;
}

.ninja_slide::-webkit-scrollbar-thumb {
  background: #f8a039;
  border-radius: 15px;
}

.ninja_slide::-webkit-scrollbar-thumb:hover{
  background: #fff;
}

.ninja_slide img {
  width: 400px;
  margin-right: 20px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}

.ninja_slide img:hover {
  transform: scale(0.95);
  transition: all ease-in-out 0.3s;
}

.ninja_slide_img a {
  text-align: center;
}

.ninja_slide_img a h3 {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 15px 0;
}

.ninja_detail {
  padding: 10px;
}

.ninja_detail p {
  width: 50%;
  margin: auto;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  background: #500b14;
}

.ninja_detail p:hover {
  background: #fff;
  color: #000;
}
</style>