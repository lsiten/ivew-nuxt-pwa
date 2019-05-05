<template>
    <div class="header">
      <div class="lsiten-container">
          <Menu mode="horizontal" theme="light" active-name="1" @on-select = "selectMenu">
                <MenuItem name="0">
                    <img class="lsiten-header-logo" src="../assets/images/logo.png"/>
                </MenuItem>
                <MenuItem name="1">
                    首页
                </MenuItem>
                <MenuItem name="2">
                    客服中心
                </MenuItem>
                <MenuItem name="3">
                    数据查询
                </MenuItem>
                <MenuItem name="4">
                    政策公告
                </MenuItem>
                <MenuItem name="5">
                    口岸收费公示
                </MenuItem>
                <MenuItem name="6">
                    新闻动态
                </MenuItem>
            </Menu>
      </div>
      <div class="lsiten-row">
          <Carousel
            autoplay
            v-model="value2"
            :autoplay-speed = '4000'
            arrow = "never"
            loop>
            <CarouselItem>
                <div class="carousel-item">
                  <img src="http://www.singlewindow.gx.cn/images/banner1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="carousel-item">
                  <img src="http://www.singlewindow.gx.cn/images/banner2.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="carousel-item">
                  <img src="http://www.singlewindow.gx.cn/images/banner3.jpg" alt="">                  
                </div>
            </CarouselItem>
        </Carousel>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        value2: 0
      }
    },
    methods: {
      selectMenu (index) {
        if (index <= 1) {
          this.$router.push(
            {
                path: '/'
            }
          )
        } else {
          this.$router.push(
            {
              path: '/list/' + index
            }
          )
        }
      }  
    }
  }
</script>
<style>
.header .lsiten-row .ivu-carousel-dots-inside {
  bottom: 20px;
}
.header .lsiten-row .ivu-carousel-dots-inside li {
  margin: 0 7px;
}
.header .lsiten-row .ivu-carousel-dots-inside li button {
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}

.header .lsiten-row .ivu-carousel-dots-inside li.ivu-carousel-active button{
  background: #0092CE;
}
</style>
<style scoped>
.header {
  width: 100%;
  height: auto;
}
.header .lsiten-container {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  padding-top: 12px;
}
.header .lsiten-container li.ivu-menu-item {
  border-bottom: none;
  font-size: 16px;
  color: #505050;
  font-weight: bold;

}
.header .lsiten-container li.ivu-menu-item .lsiten-header-logo{
  vertical-align:middle;
}
.header .lsiten-container .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  color: #2d8cf0;
}
.header .lsiten-container .ivu-menu-horizontal.ivu-menu-light:after {
  background: none;
}

.header .lsiten-row {
  width: 100%;
}

.header .carousel-item {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}

.header .carousel-item img {
  width: 100%;
  min-height: 334px;
  height: auto;
}
</style>
