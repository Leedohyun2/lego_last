<template>
    <div>
        <div class="top_up_btn">
            <button v-if="showButton" @click="scrollToTop">
                <i class="fa-regular fa-circle-up" style="color: #050505;"></i>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showButton: false // 버튼을 처음에는 숨기도록 설정
        };
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // 페이지의 스크롤 위치가 300 이상이면 버튼을 보이도록 설정
            this.showButton = window.pageYOffset > 300;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
};
</script>
  
<style>
.top_up_btn {
    position: fixed;
    bottom: 15px;
    right: 15px;
    /* width: 10%; */
    /* height: 7%; */
    z-index: 100000;
}

.top_up_btn button {
    border: none;
    /* background: #fff; */
}

.top_up_btn button i {
    font-size: 40px;
    padding: 10px;
    background: #fff;
    border-radius: 30px;
    cursor: pointer;
}
</style>