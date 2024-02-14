<template>
    <div id="lego_shop_wrap">
        <div class="lego_shop_title">
            <h2>LEGOSHOP</h2>
        </div>

        <div class="shop_main_container">
            <div class="shop_main_content">
                <ul>
                    <span class="shop_main1">
                        <li>
                            <router-link to="/shop1">
                                <span class="shop_content1 shop_content">
                                    <h3>MINECRAFT</h3>
                                    <img src="../assets/shop_images/lego_minc_2_11zon.png" alt="">
                                </span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/shop2">
                                <span class="shop_content2 shop_content">
                                    <h3>NINJAGO</h3>
                                    <img src="../assets/shop_images/lego_ninja_1_11zon.png" alt="">
                                </span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/shop3">
                                <span class="shop_content3 shop_content">
                                    <h3>AVATAR</h3>
                                    <img src="../assets/shop_images/avatar_11zon.png" alt="">
                                </span>
                            </router-link>
                        </li>
                    </span>
                    <span class="shop_main2">
                        <li>
                            <router-link to="/shop5">
                                <span class="shop_content5 shop_content">
                                    <h3>LEGO®TECHNIC</h3>
                                    <img src="../assets/shop_images/lego_technic_3_11zon.png" alt="">
                                </span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/shop4">
                                <span class="shop_content4 shop_content">
                                    <h3>HARRY POTTER</h3>
                                    <img src="../assets/shop_images/lego_harry_4_11zon.png" alt="">
                                </span>
                            </router-link>
                        </li>
                    </span>
                </ul>
            </div>
        </div>

        <top_up_btn></top_up_btn>
    </div>
</template>
<script>
import top_up_btn from './top_up_btn.vue';

export default {
    components: {
        top_up_btn
    }
}
</script>
<style scoped>
.lego_shop_title {
    padding: 30px 0;
    background: url(../assets/shop_images/lego_bg_yellow.jpg);
}

h2 {
    text-align: center;
    color: #000;
    font-size: 40px;
    font-family: "Anton", sans-serif;
}

h3 {
    color: #000;
    font-size: 30px;
    padding: 20px;
    background: #FED706;
    border-radius: 10px 10px 0 0;
}

.shop_main_container {
    width: 100%;
    margin: auto;
    background: url(../assets/shop_images/shop_bg.jpg);
}

.shop_main1 li {
    margin: 25px 10px 20px 0;
    /* padding-left: 30px; */
}

.shop_main2 li {
    margin: 25px 0 20px 10px;
    /* padding-right: 30px; */
}

.shop_main1,
.shop_main2 {
    text-align: center;
    margin: 0 20px;
}

.shop_main_container ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.shop_main_content {
    width: 90%;
    margin: auto;
    /* padding: 25px; */
}

.shop_content h3 {
    font-family: "Anton", sans-serif;
}

.shop_main_content img {
    width: 100%;
    height: 100%;
}

.shop_main_content li {
    width: 100%;
}

.shop_main_content li:hover {
    transform: perspective(1500px) rotateY(20deg);
    transition: all ease-in-out 0.3s;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    cursor: pointer;
}

@media screen and (max-width: 1000px) {
    .shop_main_container ul {
        display: grid;
        margin: 0 80px;
    }
}
</style>