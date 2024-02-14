<template>
    <footer>
        <div class="footer_container">
            <div class="footer_logo">
                <img src="../assets/images/lego_logo.png" alt="" />
                <div class="footer_map">
                    <a href="#none">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>대한민국s</p>
                    </a>
                </div>
            </div>

            <div class="footer_follow">
                <a href="#none">
                    <img src="../assets/images/facebook.svg" alt="facebook" />
                </a>
                <a href="#none">
                    <img src="../assets/images/instar.svg" alt="instar" />
                </a>
                <a href="#none">
                    <img src="../assets/images/twiter.svg" alt="twiter" />
                </a>
                <a href="#none">
                    <img src="../assets/images/youtube.svg" alt="youtube" />
                </a>
            </div>

            <div class="accodian">
                <v-row justify="center">
                    <v-expansion-panels accordion dark>
                        <v-expansion-panel>
                            <v-expansion-panel-header style="background-color: #020F59;"><h3>회사소개</h3></v-expansion-panel-header>
                            <v-expansion-panel-content style="background-color: #020F59;">
                                <ul>
                                    <li>레고 그룹 소개</li>
                                    <li>레고 뉴스</li>
                                    <li>지속가능한 사업</li>
                                    <li>공급망 투명선 선언</li>
                                    <li>레고 제품 인증</li>
                                    <li>레고 채용 정보</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header color="#020F59"><h3>레고 명소</h3></v-expansion-panel-header>
                            <v-expansion-panel-content color="#020F59">
                                <ul>
                                    <li>레고 하우스</li>
                                    <li>레고랜드 파크</li>
                                    <li>레고랜드 디스커버리 센터</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header color="#020F59"><h3>고객지원</h3></v-expansion-panel-header>
                            <v-expansion-panel-content color="#020F59">
                                <ul>
                                    <li>연락처</li>
                                    <li>부품누락</li>
                                    <li>배송 및 반품</li>
                                    <li>결제 방식</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
            </div>

            <div class="footer_text">
                <p>
                    LEGO System A/S, DK-7190 Billund, Denmark. 만 18세 이상부터 온라인
                    구매가 가능합니다. 레고, 레고 로고, 미니피겨, 듀플로, 프렌즈
                    로고, 미니피겨 로고, 드림즈, 닌자고, 비디요 및 마인드스톰은 레고
                    그룹의 상표입니다. ©2023 The LEGO Group. All rights reserved. 이
                    사이트를 이용하면 이용약관에 동의하는 것으로 간주됩니다. 레고코리아㈜
                    대표이사 : 에릭폴모젱, 마이클에베센 | 주소 : 서울특별시 강남구
                    강남대로 298, 16층 (역삼동) 우편번호 06253 사업자등록번호:126-81-25525
                    | 통신판매업신고 제 2010-서울강남-00549호 사업자등록확인고객센터
                    무료전화 : 080-880-0166 | 팩스 : 02-511-6412 | 업무시간 :
                    월요일-금요일 오전9시-오후6시
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>

<style>
footer {
    background: #020f59;
    color: #fff;
}

.footer_container {
    width: 85%;
    margin: auto;
}

.footer_logo {
    display: flex;
    align-items: center;
    padding: 20px;
    background: #020f59;
}

.footer_logo img {
    width: 70px;
}

.footer_map a {
    display: flex;
    background: #020f59;
    margin-left: 10px;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    gap: 10px;
}

.footer_follow {
    padding: 15px 0 5px 20px;
    background: #020f59;
}

.footer_follow a img {
    width: 40px;
    margin-right: 15px;
}

.accodian {
    padding: 15px;
}

.accodian h3 {
    text-align: start;
    font-size: 20px;
    padding: 10px;
}

.accodian h3:hover {
    background: #031aa1;
}

.accodian ul li {
    font-size: 18px;
    line-height: 30px;
    padding: 10px 20px;
}

.accodian ul li:hover {
    background: #031aa1;

}

.footer_text p {
    font-size: 12px;
    line-height: 20px;
    padding: 20px;
}
</style>