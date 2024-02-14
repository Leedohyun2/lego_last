<template>
  <div class="app">
    <header>
      <div class="header_container">
        <div class="login_toggle">
          <button @click="onToggle" class="toggle_btn">
            <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
          </button>
        </div>
        <div v-show="toggle" class="toggle_menu">
          <div class="toggle_menu_content">
            <ul>
              <li><a href="#none">{{ nav_menu[0] }}</a></li>
              <li><router-link to="/lego_shop_main">{{ nav_menu[1] }}</router-link></li>
              <li><router-link to="/lego_brand_main">{{ nav_menu[2] }}</router-link></li>
              <li><a href="#none">{{ nav_menu[3] }}</a></li>
              <li><a href="#none">{{ nav_menu[4] }}</a></li>
            </ul>
          </div>
        </div>
        <div v-show="!toggle" class="toggle_menu"></div>


        <div class="web_nav_bar">
          <ul>
            <li><a href="#none">{{ nav_menu[0] }}</a></li>
            <li><router-link to="/lego_shop_main">{{ nav_menu[1] }}</router-link></li>
            <li><router-link to="/lego_brand_main">{{ nav_menu[2] }}</router-link></li>
            <li><a href="#none">{{ nav_menu[3] }}</a></li>
            <li><a href="#none">{{ nav_menu[4] }}</a></li>
          </ul>
        </div>

        <div class="main_logo">
          <router-link to="/">
            <img src="../assets/images/lego_logo-removebg.png" alt="메인로고" />
          </router-link>
        </div>

        <!-- 검색창 -->
        <!-- <div class="search_black_bg" v-if="search_area == true">
          <button @click="search_area = false">
            <p><i class="fa-solid fa-xmark"></i></p>
          </button>
          <span class="search_area_container">
            <form>
              <input type="search" placeholder="검색어를 입력하세요">
            </form>
          </span>
        </div> -->

        <div class="login_container">
          <i class="fa-solid fa-window-minimize fa-rotate-90"></i>
          <button type="button">
            <p class="hide">검색</p>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <router-link to="/login_main">
            <button type="button">
              <p class="hide">로그인</p>
              <i class="fa-solid fa-user"></i>
            </button>
          </router-link>
          <router-link to="/shopping_basket">
            <button type="button">
              <p class="hide">장바구니</p>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { ref } from "vue";
import login_main from "./login_main.vue";

export default {
  setup() {
    const toggle = ref(false);

    // 토글메뉴
    const onToggle = () => {
      toggle.value = !toggle.value;
    };

    return {
      toggle,
      onToggle,
      nav_menu: ["PLAYZONE", "*LEGOSHOP*", "*LEGOBRAND*", "SALE", "CUSTOMER"],
      login_main
    };
  },
};
</script>

<style>
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 10px;
  background: url(../assets/images/lego_pattern4.jpg);
}

.header_container button i {
  font-size: 28px;
}

.login_toggle button i {
  width: 24px;
}

.login_btn {
  font-size: 22px;
  font-weight: bold;
}

.header_container button {
  border: none;
  padding: 3px;
  /* background: #E3000B; */
}

.header_container button i {
  font-size: 20px;
}

.main_logo {
  position: absolute;
  left: 44%;
}

.main_logo img {
  width: 70px;
}

.web_nav_bar {
  display: none;
}

.toggle_menu_content {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  line-height: 45px;
  background: #01183c;
  z-index: 10000;
}

.toggle_menu_content ul li:hover {
  background: #ffc20f;
}

.toggle_menu_content ul li a {
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-family: "Anton", sans-serif;
}

.login_container button {
  /* background: #e3000b; */
  border: none;
}

.login_container button i {
  color: #fff;
  font-size: 20px;
}

.login_container i {
  /* font-size: 15px; */
  margin-right: 5px;
}

.login_container i:first-child {
  display: none;
}

@media screen and (min-width: 1000px) {
  .header_container {
    height: 130px;
    display: flex;
    justify-content: right;
    align-content: center;
  }

  .login_container button i {
    font-size: 26px;
    margin-right: 15px;
    border: none;
  }

  .web_nav_bar {
    display: block;
  }

  .web_nav_bar ul {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .web_nav_bar ul li {
    padding: 0 12px;
  }

  .web_nav_bar ul li a {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    padding: 10px;
    font-family: "Anton", sans-serif;
  }

  .web_nav_bar ul li a:hover {
    background: #ffc20f;
    border-radius: 10px;
  }

  .toggle_btn,
  .toggle_menu_content {
    display: none;
  }

  .toggle_menu {
    display: block;
  }

  .main_logo {
    position: absolute;
    left: 40px;
  }

  .login_container i:first-child {
    display: inline-block;
    color: #fff;
    font-size: 26px;
    margin: 0 12px;
  }
}
</style>