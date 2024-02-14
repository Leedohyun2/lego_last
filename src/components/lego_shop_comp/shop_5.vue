<template>
  <div class="minc_all_wrap">
    <div class="minc_title">
      <h2>LEGO® TECHNIC</h2>
      <span class="mic_title2">
        <h3>레고® 테크닉 완구 및 수집용 제품</h3>
        <p>
          만 6세 이상 아동에게 섬세한 디테일이 돋보이는 레고® 테크닉 디자인으로
          놀이를 통해 공학에 대한 열정을 탐구하며 학습할 수 있는 기회를
          선사하세요. 작동하는 기어박스, 바퀴, 축을 서로 조립하는 과정을 통해
          자동차, 비행기, 오토바이, 건설 차량이 움직이는 정교한 디테일을
          이해하고 실제로 작동하게 만들 수 있어요. 무료 CONTROL+ 앱을 사용하면
          레고® 테크닉 전동 원격 제어 장치를 탑재한 모델에 움직임과 음향 효과를
          더할 수 있답니다. 여아와 남아 모두 친구들과 미션을 완수하고 공유할 수
          있어요. 조립 수준이 높은 성인 팬들에게 더없이 완벽한 선물이기도
          합니다.
        </p>
      </span>

      <!-- 뷰티파이 -->
      <template>
        <div class="vuetify_btn_wrap">
          <v-row justify="center" style="min-height: 160px;">
            <v-col class="shrink">
              <v-btn class="ma-2" color="#FFFFFF" @click="expand = !expand">
                추천순
              </v-btn>

              <v-expand-transition class="vuetify_btn_container">
                <v-card v-show="expand" height="108" width="150" class="mx-auto bg-secondary">
                  <span class="vuetify_btn">
                    <ul>
                      <li>가격 낮은 순</li>
                      <li>가격 높은 순</li>
                      <li>구성품 많은 순</li>
                    </ul>
                  </span>
                </v-card>
              </v-expand-transition>
            </v-col>
            <!-- <div class="mx-4 hidden-sm-and-down"></div> -->
          </v-row>
        </div>
      </template>
    </div>

    <shop_5_content></shop_5_content>
  </div>
</template>

<script>
import shop_5_content from './shop_5_content.vue';

export default {
  components: {
    shop_5_content
  },

  data: () => ({
    expand: false,
    expand2: false,
    modalOpen: false,
  }),

}
</script>

<style scoped>
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

.minc_all_wrap {
  background: url(../../assets/shop_images/tech_bg.jpg);
}

.toggle_list {
  position: absolute;
  top: 0;
}

h2 {
  background: url(../../assets/shop_images/tech_bg.jpg);
  text-align: center;
  color: #fff;
  font-size: 35px;
  padding: 20px;
  font-family: "Anton", sans-serif;
}

.minc_title {
  position: relative;
  margin-bottom: 100px;
}

.mic_title2 {
  margin: 20px;
}

h3 {
  background: #f2f2f2;
  font-size: 22px;
  padding: 20px;
  margin: 0 30px;
}

.vuetify_btn_wrap {
  position: absolute;
  top: 96%;
  left: 30px;
  z-index: 1000;
}

.vuetify_btn ul li {
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
}

.vuetify_btn ul li:hover {
  background: #005f8f;
  border-radius: 5px;
}

.select_btn_content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  margin-right: 120px;
}
</style>