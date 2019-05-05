<template>
  <section class="container">
    <app-list></app-list>
    <app-list></app-list>
    <new-list></new-list>
    <image-list></image-list>
    <div class="lsiten-login-box">
      <div class="login-content">
        <login></login>
      </div>
    </div>
    <div class="lsiten-hotline" @mouseover="showHotlineDetail" @mouseleave="hideHotlineDetail">
      <img class="hotline" id="hotline" src="../assets/images/hotline.png" alt="客服热线95198">
    </div>
    <div class="lsiten-show-detail" v-show="showHotline">
      <h2>
        <small>客服热线：</small> 95198
      </h2>
    </div>
  </section>
</template>

<script>
import appList from '../components/index/appList'
import newList from '../components/index/newList'
import imageList from '../components/index/imageList'
import login from '../components/index/login'
export default {
  components: {
    'app-list': appList,
    'new-list': newList,
    'image-list': imageList,
    'login': login
  },
  data () {
    return {
      showHotline: false  
    }
  },
  methods: {
    showHotlineDetail () {
      this.showHotline = true;
    },
    hideHotlineDetail () {
      this.showHotline = false;
    }
  }
}
</script>
<style scoped>
.container {
  position: relative;
}
.lsiten-login-box {
  position: absolute;
  top: -315px;
  overflow: hidden;
  width: 100%;
}
.lsiten-login-box .login-content {
  width: 1180px;
  height: 290px;
  margin: 0 auto;
  position: relative;
}

.container .lsiten-hotline {
  position: fixed;
  top: 414px;
  right: 0;
}
.container .lsiten-show-detail {
  position: fixed;
  top: 414px;
  right: 80px;
  left: auto;
  width: 140px;
  height: 38px;
  padding: 20px;
  z-index: 2018;
  box-sizing: content-box;
  border: #1e68e4 solid 1px;
  background-color: #fff;
}
.container .lsiten-show-detail  h2 {
  color: #1e68e4;
  line-height: 38px;
}
</style>
