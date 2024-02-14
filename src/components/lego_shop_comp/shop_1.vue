<template>
  <div class="minc_all_wrap">
    <div class="minc_title">
      <h2>MINECRAFT</h2>
      <span class="mic_title2">
        <h3>마인크래프트® 장난감 및 선물</h3>
        <p>
          레고® 마인크래프트 세트를 통해 나만의 마인크래프트® 세계를
          만들어보세요. 마인크래프트 팬들에게 레고 마인크래프트는 나만의
          마인크래프트 세계를 현실로 구현할 수 있는 최고의 방법입니다.
          마인크래프트 컬렉션의 모든 레고 브릭을 이용해 나만의 마인크래프트를
          만들 수 있습니다. 레고 마인크래프트에는 게임속 캐릭터, 크리퍼, 좀비 등
          다양한 마인크래프트 피겨가 포함되어 있어요. 레고 마인크래프트는 6세
          이상의 남아, 여아 그리고 어른들에게도 최고의 선물이 될거에요. 이 멋진
          레고 세트를 통해 마인크래프트 게임 안팎에서 조립 기술을 익혀보세요!
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

    <shop_1_content></shop_1_content>
  </div>
</template>

<script>
import shop_1_content from './shop_1_content.vue';

export default {
  components: {
    shop_1_content
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
  background: url(../../assets/images/Background_Minecraft.jpg);
}

.toggle_list {
  position: absolute;
  top: 0;
}

h2 {
  background: url(../../assets/images/Background_Minecraft.jpg);
  text-align: center;
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