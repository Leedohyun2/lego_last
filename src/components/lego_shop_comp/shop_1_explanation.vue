<template>
    <div id="explanation">
        <div class="explanation_container">
            <h2>LEGO® Builder – 3D 조립설명서</h2>
            <p>스마트폰과 태블릿용 LEGO® Builder앱으로 새로운 조립 세계를 경험해 보세요.</p>
            <p>레고 빌더를 사용하면 레고 세트의 전체 모습을 3D로 보고, 조립을 확대 및 회전하고, 친구나 가족과 함께 조립할 수도 있습니다!</p>
            <p>그리고 더 있습니다! 특정 세트의 경우, 아이들은 Missions라고 하는 특별히 설계된 디지털 모험 이야기에서 놀이를 진행하고 주도적인 역할을 수행할 수 있습니다.</p>
            <p>물론, 모든 기존 세트와 새 세트에 대한 수천 개의 일반 조립설명서도 찾을 수 있습니다.</p>
            <p>레고 빌더를 시작하는 방법은 다음과 같습니다.</p>
            <h3>1. 무료 레고 빌더 앱을 다운로드합니다.</h3>
            <span class="explanation_imgs">
                <img src="../../assets/images/applestore.png" alt="">
                <img src="../../assets/images/googleplay.png" alt="">
            </span>
            <h3>또는 QR코드로 간편하게 다운로드 해보세요!</h3>
            <div class="explanation_qrcode">
                <img src="../../assets/images/explanation_qrcode.png" alt="">
            </div>
            <h3>2. 레고 조립설명서 안내 책자에서 QR 코드를 스캔하거나 앱에서 세트를 검색합니다.</h3>
            <span class="explanation_imgs2">
                <img src="../../assets/images/explan_img1.png" alt="">
            </span>
            <h3>3. 조립 방법(3D, PDF, Build Together 또는 Missions)을 선택합니다. 조립 방법은 보유한 세트에 따라 다릅니다.</h3>
            <h3>4. 이제 조립해 보세요!</h3>
            <span class="explanation_imgs2">
                <img src="../../assets/images/explan_img2.png" alt="">
            </span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#explanation {
    background: rgb(168, 168, 168);
}

.explanation_container {
    width: 90%;
    background: #fff;
    margin: auto;
    text-align: center;
    padding: 60px;
}

.explanation_container h2 {
    margin-bottom: 30px;
}

.explanation_container h2,
h3 {
    font-size: 30px;
}

.explanation_container h3 {
    line-height: 150px;
}

.explanation_container p {
    font-size: 22px;
    color: #000;
    line-height: 50px;
    margin: 10px 0;
}

.explanation_qrcode img{
    width: 25%;
}

.explanation_imgs img{
    width: 20%;
    padding: 10px;
}

.explanation_imgs2 img {
    width: 40%;
}
</style>