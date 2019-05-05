<template>
    <div class="applist">
      <div class="lsiten-container">
          <div class="lsiten-header">
            <h2>{{appData.title}}</h2>
          </div>
          <div class="lsiten-app-cats">
              <div class="lsiten-lbleft" v-show="showIndex > 0" @click="changeCatList(false)"></div>
              <div class="cats-content">
                <div class="cats-content-list" :class="{'cats-list-active': catIndex === index }" v-for="(item, index) in shows[showIndex]" v-bind:key="index" @mouseover="catChange(index)">
                    {{item.name}}
                </div>
              </div>
              <div class="lsiten-lbright" v-show="showIndex < showCount" @click="changeCatList(true)"></div>
          </div>
          <div class="lsiten-app-list">
              <div class="lsiten-app-lbleft" v-show="showAppIndex > 0" @click="changeAppList(false)"></div>
              <div class="app-content">
                <div class="app-content-list" :class="{'app-content-list-disable': item.disable}" v-for="(item, index) in showsApp[showAppIndex]" v-bind:key="index" @click="appClick(item)">
                    <img :src="item.icon" :alt="item.name">
                    <p>{{item.name}}</p>
                </div>
              </div>
              <div class="lsiten-app-lbright" v-show="showAppIndex < showAppCount" @click="changeAppList(true)"></div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'appList',
  props: {
    appData: {
      type: Object,
      default: () => ({
        title: '中央标准应用',
        cats: [
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: true,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: true,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: true,
                type: 1
              },
              {
                name: '对外贸易经营者备案1',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案2',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案3',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          },
          {
            name: '企业资质',
            list: [
              {
                name: '对外贸易经营者备案',
                icon: 'http://www.singlewindow.cn/u/cms/www/201703/xt_dwmyjyzba.png',
                url: '',
                disable: false,
                type: 1
              }
            ]
          }
        ]
      })
    }
  },
  data () {
    return {
      catsList: [],
      catIndex: 0,
      showIndex: 0,
      showSize: 9,
      showCount: 0,
      shows: [],
      showAppSize:8,
      showAppCount: 0,
      showsApp: [],
      showAppIndex: 0,
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.shows = [];
      this.catIndex = 0;
      this.showCount = this.setShowItem(this.appData.cats, this.showSize, this.shows);
      this.initShowApps();
    },
    setShowItem (data, size, shows) {
      let count = -1;
      (data || []).map((item, index) => {
        index%size === 0 && count++;
        shows[count] ? shows[count].push(item) : (shows[count] = [item]);
      })
      return count;
    },
    initShowApps () {
      this.showsApp = [];
      this.showAppCount = this.setShowItem(this.shows[this.showIndex][this.catIndex].list, this.showAppSize, this.showsApp);
    },
    changeCatList (isAdd) {
      isAdd ? this.showIndex++ : this.showIndex--;
      this.showIndex > this.showCount && (this.showIndex = this.showCount)
      this.showIndex < 0 && (this.showIndex = 0)
      this.initData()
    },
    changeAppList (isAdd) {
      isAdd ? this.showAppIndex++ : this.showAppIndex--;
      this.showAppIndex > this.showAppCount && (this.showAppIndex = this.showAppCount)
      this.showAppIndex < 0 && (this.showAppIndex = 0)
      this.initShowApps()
    },
    appClick (item) {
      if (item.disable) {
        return false
      }
      console.log(item)
    },
    catChange (index) {
      this.catIndex = index;
      this.initShowApps();
    }
  }
}
</script>

<style scoped>
.applist {
  width: 100%;
  min-height: 160px;
}
.applist .lsiten-container {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;
}
.applist .lsiten-header {
  background: #2d82eb;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-family: "微软雅黑";
}
.applist .lsiten-header h2 {
  color: #0f69d7;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  line-height: 36px;
  font-weight: bold;
  font-size: 14px;
  padding:  0 15px;
  margin: 4px 0 0 10px;
}

.lsiten-app-cats, .lsiten-app-list {
  overflow: hidden;
  width: 1120px;
  height: auto;
  padding: 0;
  margin: 0 auto;
}
.lsiten-app-cats {
  margin-bottom: 20px;
}
.applist .lsiten-lbleft, .lsiten-lbright, .cats-content {
  float: left;
}
.applist .lsiten-lbleft {
  background: url(../../assets/images/cleft.png)no-repeat;
}
.applist .lsiten-lbright {
  background: url(../../assets/images/cright.png)no-repeat;
}
.applist .lsiten-lbright {
  text-align: right;
  margin-left: 10px;
}
.applist .lsiten-lbleft, .lsiten-lbright {
  width: 30px;
  height: 83px;
}
.applist .lsiten-app-cats .cats-content-list {
  display: inline-block;
  padding: 15px 32px 0px;
  height: 83px;
  line-height: 1.5;
  text-align: center;
  box-sizing: border-box;
  width: 105px;
  font-size: 16px;
  border-left: 1px solid #dcdcdc; 
  border-bottom: 1px solid #dcdcdc; 
  cursor: pointer;
}


.applist .lsiten-app-lbleft, .lsiten-app-lbright, .app-content {
  float: left;
}
.applist .lsiten-app-lbleft {
  background: url(../../assets/images/row_left_up.png)no-repeat;
}
.applist .lsiten-app-lbright {
  background: url(../../assets/images/right_arrow.png)no-repeat;
}
.applist .lsiten-app-lbright {
  text-align: right;
  margin-left: 10px;
}
.applist .lsiten-app-lbleft, .lsiten-app-lbright {
  width: 30px;
  height: 83px;
}
.applist .lsiten-app-list .app-content-list {
  box-sizing: content-box;
  position: relative;
  width: 100px;
  height: 130px;
  color: #fff;
  padding: 0 10px;
  margin-right: 5px;
  text-align: center;
  background-color: #0f69d7;
  display: inline-block;
  cursor: pointer;
}
.applist .lsiten-app-list .app-content-list-disable {
  background-color: rgb(193, 193, 193);
}
.applist .lsiten-app-list .app-content-list img {
   position: absolute;
   left: 0;
   top: -5px;
}
.applist .lsiten-app-list .app-content-list p {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  padding: 0 5px;
  bottom: 3px;
  left: 0;
}

.applist .lsiten-app-cats .cats-content-list:hover, .applist .lsiten-app-cats .cats-list-active {
  border-bottom: 3px solid #106ada;
}
.applist .lsiten-app-cats .cats-content-list:last-child {
    border-right: 1px solid #dcdcdc; 
}
</style>


