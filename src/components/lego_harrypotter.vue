<template>
  <div>
    <div class="concept_poter">
      <img src="../assets/images/poter_logo.png" alt="아바타로고" />
      <div class="poter_slide">
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter5.gif" alt="" />
            <h3>도비를 따라오세요!</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter2_2_11zon.png" alt="" />
            <h3>금단의 숲 : 엄브리지와 만남</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter3_3_11zon.png" alt="" />
            <h3>그리핀도르 커먼룸에 들어가보아요</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter4_4_11zon.png" alt="" />
            <h3>호그와트 마법학교 병동</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter1_1_11zon.png" alt="" />
            <h3>호그와트 마법학교로의 복귀</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter6_4_11zon.png" alt="" />
            <h3>보바통 마법학교</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter7_5_11zon.png" alt="" />
            <h3>루나 러브굿이 누구인가요?</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter8_1_11zon.png" alt="" />
            <h3>래번클로 휴게실에 들어가보아요</h3>
            <span class="poter_detail">
              <p>자세히 보기</p>
            </span>
          </a>
        </span>
        <span class="poter_slide_img">
          <a href="#none">
            <img src="../assets/images/poter9_2_11zon.png" alt="" />
            <h3>해그리드의 오두막 - 사냥꾼의</h3>
            <span class="poter_detail">
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
/* 해리포터 컨셉 */
.concept_poter {
  padding: 20px 0;
  background: url(../assets/images/Harry_Potter_back.jpg);
  text-align: center;
}

.concept_poter > img {
  width: 150px;
  margin: 20px 0;
}

.poter_slide {
  display: flex;
  width: 85%;
  height: 420px;
  margin: auto;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: scroll;
  background: #01183c;
}

.poter_slide::-webkit-scrollbar {
  width: 0;
  height: 13px;
  background: #000112;
  border-radius: 15px;
}

.poter_slide::-webkit-scrollbar-thumb {
  background: #005f8f;
  border-radius: 15px;
}

.poter_slide::-webkit-scrollbar-thumb:hover{
  background: #fff;
}

.poter_slide img {
  width: 400px;
  margin-right: 20px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}

.poter_slide img:hover {
  transform: scale(0.95);
  transition: all ease-in-out 0.3s;
}

.poter_slide_img a {
  text-align: center;
}

.poter_slide_img a h3 {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 15px 0;
}

.poter_detail {
  padding: 10px;
}

.poter_detail p {
  width: 50%;
  margin: auto;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  background: #0175a2;
}

.poter_detail p:hover {
  background: #fff;
  color: #000;
}
</style>