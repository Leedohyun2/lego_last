<template>
    <div class="container">
        <div class="signup-section">
            <header><img src="../assets/images/lego_logo.png" alt=""></header>

            <form>
                <input class="lego_id" type="text" placeholder="아이디를 입력하세요" required>
                <input class="lego_pass" type="password" placeholder="비밀번호를 입력하세요" required>
                <span class=submit_btn>
                    <button type="submit" class="btn">로그인</button>
                    <button type="submit" class="btn">회원가입</button>
                </span>
                <a href="#">아이디를 잊어버리셨나요?</a>
                <a href="#">비밀번호를 잊어버리셨나요?</a>
            </form>

            <div class="separator">
                <div class="line"></div>
                <p>Or</p>
                <div class="line"></div>
            </div>

            <div class="social-buttons">
                <button><i class="fa-brands fa-apple"></i>구글 로그인</button>
                <button><i class="fa-brands fa-google"></i>애플 로그인</button>
                <button><i class="fa-brands fa-facebook"></i>페이스북 로그인</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style>
body {
    background: #F8F8F8;
}

header img {
    width: 80px;
}

.container {
    margin: 100px auto;
    border: 2px solid #d4d4d4;
    /* background: #F8F8F8; */
}

/* .signup-section {
    background: #F8F8F8;
} */

.signup-section header {
    font-size: 30px;
    text-align: center;
    font-weight: 600;
}

.social-buttons {
    width: 60%;
    margin: auto;
    gap: 15px;
}

.social-buttons button {
    width: 90%;
    padding: 10px;
    background: #fff;
    border: 2px solid #d4d4d4;
    font-size: 20px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
}

.social-buttons button:hover {
    background: #0077FF;
    color: #fff;
}

.login-section .social-buttons button i {
    font-size: 18px;
}

.separator {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.separator .line {
    width: 100%;
    height: 1px;
    background: rgb(201, 200, 200);
}

.separator p {
    color: #000;
}

.login-section .separator p {
    color: #000;
}

.container form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
}

form input {
    width: 53%;
    margin: auto;
    outline: none;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    color: #333;
    font-weight: 400;
    background: #fff;
}

.lego_id, .lego_pass {
    border: 2px solid #d4d4d4;
}

.lego_id:focus {
    border: 2px solid #0077FF;
    color: #000;
}

.lego_pass:focus {
    border: 2px solid #0077FF;
}

.login-section input {
    border: 1px solid #d4d4d4;
}

form a {
    font-size: 13px;
    width: 53%;
    margin: auto;
}

.signup-section form a {
    color: #000;
    font-weight: bold;
}

.submit_btn {
    width: 100%;
    text-align: center;
}

.submit_btn button {
    margin: 10px 15px;
}

form .btn {
    width: 25%;
    border: none;
    padding: 10px 15px;
    background: #fff;
    border: 2px solid #d4d4d4;
    font-size: 20px;
}

form .btn:hover {
    color: #fff;
    background: #0077FF;
}
</style>