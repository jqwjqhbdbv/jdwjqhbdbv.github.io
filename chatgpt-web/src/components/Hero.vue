<template>
    <el-row justify="center">
        <el-col :span="16">
            <el-row justify="center">
                <p class="hero-title">jdwjqhbdbv.github.io {{ version }}</p>
            </el-row>
            <el-row justify="center" align="middle">
                <el-button size="large" type="warning" icon="Iphone" @click="jumpMobile" circle>
                    </el-button>
                <el-link icon="Link" class="hero-subtitle" href="https://space.bilibili.com/34147682" target="_blank">
                    BiliBili
                </el-link>
                <el-switch v-model="theme" size="large" active-icon="Sunny" inactive-icon="Moon"
                    style="--el-switch-on-color:#f89898;" inline-prompt />
            </el-row>
            <el-row justify="center">
                <el-image style="width: 100px; height: 100px"
                    src="https://i.postimg.cc/2jTQgP9g/qrcode-for-gh-0e5c8d2cb1b0-258.jpg" />
            </el-row>
            <el-row justify="center">
                <p class="desc-small">ðå¬ä¼å·âå±äº«ææ¯å®â </p>
            </el-row>
            <el-row justify="center">
                <p class="desc">ðEasy, Fast, Everywhere</p>
            </el-row>
            <el-row justify="center">
                <p class="desc">ðLet's surf with chatGPT now!</p>
            </el-row>
            <el-row :gutter="20" justify="center">
                <el-image alt="Version"
                    src="https://img.shields.io/badge/bilibili-å±äº«ææ¯å®-00A1D6?logo=bilibili&link=https://space.bilibili.com/34147682" />
                <el-image alt="wechat" src="https://img.shields.io/badge/wechat-å±äº«ææ¯å®-07C160?logo=wechat" />


                <el-image alt="GitHub" src="https://img.shields.io/github/license/jdwjqhbdbv/jdwjqhbdbv.github.io" />
                <el-image alt="Version"
                    src="https://img.shields.io/github/package-json/v/jdwjqhbdbv/jdwjqhbdbv.github.io?filename=chatgpt-web%2Fpackage.json" />
                <el-image alt="Last Commit" src="https://img.shields.io/github/last-commit/jdwjqhbdbv/jdwjqhbdbv.github.io" />
                <el-image alt="build"
                    src="https://github.com/jdwjqhbdbv/jdwjqhbdbv.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages" />
                <el-image alt="build-status"
                    src="https://github.com/jdwjqhbdbv/jdwjqhbdbv.github.io/actions/workflows/pages/pages-build-deployment" />
                <el-image alt="build-status" src="https://img.shields.io/github/stars/jdwjqhbdbv/jdwjqhbdbv.github.io" />
                <el-image alt="Vue" src="https://img.shields.io/badge/Vue.js-35495E?logo=vue.js&logoColor=4FC08D" />

            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import packageJSON from "../../package.json";
export default {

    name: "Hero",
    emits: ['turnMobile'],
    data() {
        return {
            theme: true,
            version: packageJSON.version,
        }
    },
    watch: {
        theme: {
            handler(val) {
                console.log(val);
                this.changeTheme(val);
                localStorage.setItem('theme', val)
            },
            deep: true
        },

    },
    mounted() {
        if (localStorage.getItem('theme')) {
            this.theme = localStorage.getItem('theme') == "true" ? true : false;
        }

    },
    methods: {

        jumpMobile() {
            this.$emit('turnMobile', true)
        },
        changeTheme(light) {

            document.documentElement.className = light ? '' : 'dark';

        }
    }

}
</script>

<style>
.hero-title {
    font-size: 2rem;
    margin: 1rem;
    font-weight: bolder;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin: 1rem;
    font-weight: bold;
}

.el-image {
    margin: 1px;
}

.desc {
    font-size: 1.5rem;
    margin: 0rem 0;


}

.desc-small {
    font-size: 1rem;
    margin: 0rem 0;
    font-weight: bolder;

}
</style>
