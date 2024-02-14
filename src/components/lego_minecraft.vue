<template>
  <div>
    <div class="concept_minec">
      <img
        src="../assets/images/logo-minecraft-removebg-preview.png"
        alt="마크로고"
      />
      <div class="minec_slide">
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine1_1_11zon.png" alt="" />
            <h3>빅피겨 크리퍼와 오실롯</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine2_2_11zon.png" alt="" />
            <h3>네더 포털 매복</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine3_3_11zon.png" alt="" />
            <h3>네더 보루</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine4_4_11zon.png" alt="" />
            <h3>마녀의 집</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine5_5_11zon.png" alt="" />
            <h3>마구간</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine6_6_11zon.png" alt="" />
            <h3>꿀벌 오두막</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine7_7_11zon.png" alt="" />
            <h3>빨간 헛간</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine8_8_11zon.png" alt="" />
            <h3>호박 농장</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine9_9_11zon.png" alt="" />
            <h3>일리저 습격</h3>
            <span class="minec_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="minec_slide_img">
          <a href="#none">
            <img src="../assets/images/mine10_10_11zon.png" alt="" />
            <h3>마이크로월드 - 광산</h3>
            <span class="minec_detail">
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
/* 마인크래프트 컨셉 */
.concept_minec {
  padding: 20px 0;
  background: url(../assets/images/Background_Minecraft.jpg);
  text-align: center;
}

.concept_minec > img {
  width: 120px;
}

.minec_slide {
  display: flex;
  width: 85%;
  height: 420px;
  margin: auto;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  overflow-x: scroll;
  background: #008537;
}

.minec_slide::-webkit-scrollbar {
  width: 0;
  height: 13px;
  background: #00641b;
  border-radius: 15px;
}

.minec_slide::-webkit-scrollbar-thumb {
  background: #01f432;
  border-radius: 15px;
}

.minec_slide::-webkit-scrollbar-thumb:hover{
  background: #fff;
}

.minec_slide img {
  width: 400px;

  margin-right: 20px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}

.minec_slide img:hover {
  transform: scale(0.95);
  transition: all ease-in-out 0.3s;
}

.minec_slide_img a {
  text-align: center;
}

.minec_slide_img a h3 {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 15px 0;
}

.minec_detail {
  padding: 10px;
}

.minec_detail p {
  width: 50%;
  margin: auto;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  background: #1d3114;
}

.minec_detail p:hover {
  background: #fff;
  color: #000;
}
</style>