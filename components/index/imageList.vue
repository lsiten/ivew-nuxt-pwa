<template>
    <div class="imagelist">
      <div class="lsiten-container">
          <div class="lsiten-header">
            <h2 :class="{'active': currentList === index}" v-for="(item, index) in newsData" v-bind:key="index" @click="changeTab(index)">{{item.title}}</h2>
          </div>
          <div class="lsiten-content-list">
            <div class="lsiten-nodata-detail" v-show="(this.newsData[0].list || []).length < 1">
              暂无数据
            </div>
             <ul class="lsiten-image-content" v-show="(this.newsData[0].list || []).length > 0" :style="ulBox">
               <li v-for="(item, index) in (newsData[0].list || [])" v-bind:key="index" @mouseover="itemOver" @mouseleave="itemLeave">
                 <a :href="item.src" :title="item.title">
                   <img :src="item.thumb" :alt="item.title">
                   <span v-html="parseTitle(item.title)"></span>
                 </a>
               </li>
             </ul>
          </div>
      </div>
    </div>
</template>

<script>
import {removeHTMLTag, escape2Html} from '../../units/common.js'

export default {
  name: 'imagelist',
  props: {
    newsData: {
      type: Array,
      default: () => [
        {
            title: '口岸风采',
            id: 1,
            type: 0,
            list: [
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              },
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              }
            ]
        }
      ]
    }
  },
  data () {
    return {
      currentList: 0,
      timer: 0,
      ulBox: {
        width: 100 + '%',
        left: 0
      }
    }
  },
  created () {
    this.initBox()
  },
  mounted () {
    this.initAnimation()
  },
  methods: {
    changeTab (index) {
      this.currentList = index
    },
    initAnimation () {
      let width = parseInt(this.ulBox.width);
      let left = parseInt(this.ulBox.left);
      left -= 1;
      (left + width) <= 1200 && (left = 0)
      this.ulBox.left = left + 'px';
      this.timer = requestAnimationFrame(this.initAnimation)
    },
    initBox () {
      this.ulBox.width = (this.newsData[0].list.length * 240) + 'px'
    },
    itemOver () {
      cancelAnimationFrame(this.timer)
    },
    itemLeave () {
      cancelAnimationFrame(this.timer)
      this.initAnimation()
    },
    parseTitle (title) {
      title = escape2Html(removeHTMLTag((title || '')))
      return title.length > 20 ? title.substr(0, 20) + '...' : title
    }
  }
}
</script>

<style scoped>
.imagelist {
  width: 100%;
  min-height: 160px;
}
.imagelist .lsiten-container {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;
}
.imagelist .lsiten-nodata-detail {
  text-align: center;
  padding: 50px;
  font-size: 16px;
  min-height: 246px;
}
.imagelist .lsiten-header {
  position: relative;
  background: #2d82eb;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-family: "微软雅黑";
}
.imagelist .lsiten-header h2 {
  color: #ffffff;
  font-weight: bold;
  display: inline-block;
  line-height: 36px;
  font-weight: bold;
  font-size: 14px;
  padding:  0 15px;
  margin: 4px 0 0 10px;
  cursor: pointer;
}

.imagelist .lsiten-header h2.active {
  color: #0f69d7;
  background-color: #fff;
}

.imagelist .lsiten-image-content {
  height: 160px;
  position: relative;
  margin: 20px 0 0 10px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
}

.imagelist .lsiten-image-content li {
  float: left;
  width: 260px;
  height: 160px;
  text-align: center;
  list-style: none;
  position: relative;
}
.imagelist .lsiten-image-content li a {
  width: 240px;
  height: 160px;
  display: block;
  overflow: hidden;
  position: relative;
}
.imagelist .lsiten-image-content li img {
  width: 240px;
  height: 160px;
}
.imagelist .lsiten-image-content li a:hover img {
  transform: scale(1.2,1.2);
  transition: transform 300ms ease-out;
}

.imagelist .lsiten-image-content li span {
  display: block;
  width: 100%;
  height: 30px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  transform: translateY(0);
  transition: transform 300ms ease-out;
  background-color: rgba(0,0,0,0.50);
}

.imagelist .lsiten-image-content li a:hover span {
  transform: translateY(-35px);
  transition: transform 300ms ease-out;
}
</style>

