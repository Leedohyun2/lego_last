<template>
    <div id="shop_5">
        <!-- 모달창 -->
        <div class="black-bg" v-if="modalOpen == true">
            <button @click="modalOpen = false">
                <p>닫기</p>
            </button>
            <!-- <div class="white-bg">
                <div class="detail_img1">
                    <img src="../../assets/shop_images/detail2_img3_3_11zon.png" alt="">
                    <img src="../../assets/shop_images/detail2_img2_2_11zon.png" alt="">
                </div>
                <div class="detail_img2">
                    <img src="../../assets/shop_images/detail2_img1_11zon.png" alt="">
                </div>
                <div class="detail_img3">
                    <img src="../../assets/shop_images/detail2_img4_4_11zon.png" alt="">
                    <img src="../../assets/shop_images/detail2_img5_5_11zon.png" alt="">
                </div>
                <div class="detail_img4">
                    <img src="../../assets/shop_images/detail2_img6_6_11zon.png" alt="">
                </div>
                <div class="detail_img5">
                    <img src="../../assets/shop_images/detail2_img7_7_11zon.png" alt="">
                    <img src="../../assets/shop_images/detail2_img8_8_11zon.png" alt="">
                </div>
            </div> -->
        </div>

        <div class="mic_content_container">
            <div class="mic_content">
                <ul>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img" @click="modalOpen = true">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic1_3_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.5</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">3778개</i>
                                    <p>*18세 이상*</p>
                                </span>
                                <h4>페라리 Daytona</h4>
                                <span class="buy_btn">
                                    <p>수량</p>
                                    <button @click="buy_count--">
                                        <i class="fa-solid fa-minus" style="color: #ffffff;"></i>
                                    </button>
                                    <span class="count_result">{{ buy_count }}</span>
                                    <button @click="buy_count++">
                                        <i class="fa-solid fa-plus" style="color: #ffffff;"></i>
                                    </button>
                                </span>
                                <p>599,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic5_7_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.2</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">1775개</i>
                                    <p>*8세 이상*</p>
                                </span>
                                <h4>푸조 9x8 24H 르망 하이브</h4>
                                <p>259,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic3_5_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-regular fa-star" style="color: #FFD43B;">0.0</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">3969개</i>
                                    <p>*18세 이상*</p>
                                </span>
                                <h4>Lamborghini Sián FKP 37</h4>
                                <p>599,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic2_4_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.8</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">1434개</i>
                                    <p>*12세 이상*</p>
                                </span>
                                <h4>맥라렌 포뮬러 레이스카</h4>
                                <p>259,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic4_6_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.8</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">1468개</i>
                                    <p>*18세 이상*</p>
                                </span>
                                <h4>2022 포드 GT</h4>
                                <p>159,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic6_8_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.2</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">457개</i>
                                    <p>*9세 이상*</p>
                                </span>
                                <h4>NEOM McLaren Formula E 레이스카</h4>
                                <p>79,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic7_9_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.7</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">1478개</i>
                                    <p>*18세 이상*</p>
                                </span>
                                <h4>야마하 MT-10 SP</h4>
                                <p>299,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic8_10_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">5.0</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">1925개</i>
                                    <p>*18세 이상*</p>
                                </span>
                                <h4>BMW M 1000 RR</h4>
                                <p>329,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic9_11_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.9</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">2883개</i>
                                    <p>*18세 이상*</p>
                                </span>
                                <h4>Liebherr LR 13000 크롤러 크레인</h4>
                                <p>879,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic10_12_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-regular fa-star" style="color: #FFD43B;">0.0</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">612개</i>
                                    <p>*9세 이상*</p>
                                </span>
                                <h4>나스카 쉐보레 카마로 ZL1</h4>
                                <p>74,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic11_1_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.7</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">2007개</i>
                                    <p>*11세 이상*</p>
                                </span>
                                <h4>에어버스 H175 구조 헬리콥터</h4>
                                <p>266,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="mic_img_card">
                            <span class="mic_img">
                                <a href="#none">
                                    <img src="../../assets/shop_images/lego_technic12_2_11zon.png" alt="">
                                </a>
                                <span class="heart">
                                    <i class="fa-regular fa-heart" style="color: #ef0606;"></i>
                                </span>
                            </span>
                            <span class="mic_img_text">
                                <span class="mic_img_text_etc">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;">4.9</i>
                                    <i class="fa-solid fa-cube" style="color: #fff;">565개</i>
                                    <p>*8세 이상*</p>
                                </span>
                                <h4>Mack® LR Electric 청소 트럭</h4>
                                <p>54,900원</p>
                                <button>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    장바구니 담기
                                </button>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modalOpen: false,
            buy_count: 0
        }
    }

}
</script> 
<style scoped>
.mic_img_card {
    text-align: center;
}

.mic_title2 p {
    color: #000;
    background: #f2f2f2;
    padding: 20px;
    margin: 0 30px;
    line-height: 20px;
    height: 100px;
    overflow: scroll;
}

.mic_title2 p::-webkit-scrollbar {
    height: 0;
    width: 10px;
}

.mic_title2 p::-webkit-scrollbar-thumb {
    background: #005f8f;
}

.mic_content_container {
    padding: 30px;
}

.mic_content ul {
    display: flex;
}

.mic_content ul li {
    margin: 10px;
    /* background: #f2f2f2; */
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

.heart {
    position: absolute;
    bottom: 50%;
    padding: 10px;
    border-radius: 20px;
    left: 5%;
    background: #d1d1d1;
    cursor: pointer;
}

.heart:hover {
    background: #aaaaaa;
}

.buy_btn p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.mic_content ul img:hover {
    transform: scale(1.05);
    transition: all ease-in-out 0.2s;
}

.mic_img_text_etc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0 20px;
}

.mic_img_text_etc p {
    font-size: 18px;
    font-weight: bold;
}

.mic_img_text_etc i {
    font-size: 20px;
}

.mic_img_card {
    background: #5a5a5a;
}

.mic_img_text>h4 {
    color: #fff;
    padding: 20px;
    font-size: 25px;
    height: 120px;
}

.mic_img_text>p {
    font-size: 25px;
    padding: 20px 0;
}

.count_result {
    margin: 0 30px;
    background: #fff;
    padding: 0 20px;
    border-radius: 10px;
    font-size: 24px;
}

.mic_img_text>button {
    width: 50%;
    padding: 15px;
    margin-bottom: 15px;
    font-weight: bold;
    color: #fff;
    border-radius: 20px;
    background: #272727;
}

.mic_img_text>button:hover {
    background: #fff;
    color: #000;
}


.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    text-align: center;
    padding: 50px;
    z-index: 10000;
}

.black-bg button {
    background: #fff;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}

.black-bg button p {
    color: #000;
}

.white-bg {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
    overflow: scroll;
    z-index: 10000;
}

.white-bg::-webkit-scrollbar {
    width: 13px;
    height: 0;
    background: #d1d1d1;
    border-radius: 0 15px 15px 0;
}

.white-bg::-webkit-scrollbar-thumb {
    background: #005f8f;
    border-radius: 15px;
}

.white-bg::-webkit-scrollbar-thumb:hover {
    background: #fff;
}

.white-bg img {
    width: 50%;
    height: 100%;
    margin: 5px 5px 5px 0;
    border: 2px solid #000;
}

.detail_img1,
.detail_img3,
.detail_img5 {
    display: flex;
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

}
</style>