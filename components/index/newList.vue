<template>
    <div class="newslist">
      <div class="lsiten-container">
          <div class="lsiten-header">
            <h2 :class="{'active': currentList === index}" v-for="(item, index) in newsData" v-bind:key="index" @click="changeTab(index)">{{item.title}}</h2>
            <div class="more" @click="moreClick">查看更多</div>
          </div>
          <div class="lsiten-content-list" v-if="this.newsData[this.currentList].type === 1">
            <div class="lsiten-nodata-detail" v-show="(this.newsData[this.currentList].list || []).length < 1">
              暂无数据
            </div>
            <div class="lsiten-content-list-content" v-show="(this.newsData[this.currentList].list || []).length > 0">
              <p v-for="(item, index) in (this.newsData[this.currentList].list || [])" v-bind:key="index">
                <a :title="item.title" :src="item.src" v-html="parseTitle(item.title)"></a>
                <span class="time">{{getDateTime(item.date)}}</span>
              </p>
            </div>
          </div>
          <div class="lsiten-content-detail" v-if="this.newsData[this.currentList].type === 0">
              <div class="lsiten-nodata-detail" v-show="(this.newsData[this.currentList].list || []).length < 1">
                暂无数据
              </div>
              <div v-show="(this.newsData[this.currentList].list || []).length > 0" class="lsiten-article-detail">
                <div class="lsiten-thumb">
                  <a :href="newsData[this.currentList].list[0].src">
                    <img :src="newsData[this.currentList].list[0].thumb" :alt="newsData[this.currentList].list[0].title">
                  </a>
                </div>
                <div class="lsiten-article">
                  <div class="lsiten-article-date">
                    <div class="lsiten-date-day">{{getDateDay(newsData[this.currentList].list[0].date)}}</div>
                    <div class="lsiten-date-year-mouth">{{getDateYearMonth(newsData[this.currentList].list[0].date)}}</div>
                  </div>
                  <div class="lsiten-article-desc">
                    <a :href="newsData[this.currentList].list[0].src"><h2 v-html="newsData[this.currentList].list[0].title"></h2></a>
                    <div class="lsiten-article-body">
                      <a :href="newsData[this.currentList].list[0].src" class="lsiten-article-a">
                        <div class="lsiten-article-content" v-html="parseContent(newsData[this.currentList].list[0].desc)"></div>
                      </a>
                      <div class="lsiten-article-footer">
                        <a :href="'/list/' + newsData[this.currentList].id">查看更多</a>|
                        <a :href="newsData[this.currentList].list[0].src">详情</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import {removeHTMLTag, escape2Html, timeChanges} from '../../units/common.js'
export default {
  name: 'newslist',
  props: {
    newsData: {
      type: Array,
      default: () => [
        {
            title: '新闻资讯',
            id: 1,
            type: 0,
            list: [
              {
                thumb: 'http://www.singlewindow.gx.cn/images/dnews.jpg',
                src: 'http://www.singlewindow.gx.cn/contents/73/770.html',
                title: '西部陆海新通道首开至印度海铁联运班列',
                date: '1557021265',
                desc: '4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出海新通道首次开行出'
              }
            ]
        },
        {
            title: '通知公告',
            type: 1,
            id: 2,
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
              }
            ]
        },
        {
            title: '口岸公告',
            type: 1,
            id: 3,
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
              }
            ]
        },
        {
            title: '口岸动态',
            type: 1,
            id: 4,
            list: []
        }
      ]
    }
  },
  data () {
    return {
      currentList: 0
    }
  },
  methods: {
    moreClick () {
      this.$router.push({
        path: '/list/' + this.newsData[this.currentList].id
      })
    },
    changeTab (index) {
      this.currentList = index
    },
    parseContent (content) {
      content = escape2Html(removeHTMLTag((content || '')))
      return content.length > 80 ? content.substr(0, 80) + '...' : content
    },
    parseTitle (title) {
      title = escape2Html(removeHTMLTag((title || '')))
      return title.length > 20 ? title.substr(0, 20) + '...' : title
    },
    getDateDay (date) {
      let data = timeChanges(date, 'timestamp', 'm-d')
      let dates =data.split('-')
      return dates[1] || '00'
    },
    getDateYearMonth (date) {
      return timeChanges(date, 'timestamp', 'Y/m')
    },
    getDateTime (date) {
      return timeChanges(date, 'timestamp', 'Y-m-d')
    }
  }
}
</script>

<style scoped>
.newslist {
  width: 100%;
  min-height: 160px;
}
.newslist .lsiten-nodata-detail {
  text-align: center;
  padding: 50px;
  font-size: 16px;
  min-height: 246px;
}
.newslist .lsiten-container {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;
}
.newslist .lsiten-header {
  position: relative;
  background: #2d82eb;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-family: "微软雅黑";
}
.newslist .lsiten-header h2 {
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

.newslist .lsiten-header h2.active {
  color: #0f69d7;
  background-color: #fff;
}

.newslist .lsiten-header .more {
 position: absolute;
 right: 20px;
 top: 0;
 font-weight: 100;
 color: #ffffff;
 display: inline-block;
 cursor: pointer;
}
.lsiten-article-detail {
  margin: 26px auto 20px auto;
  overflow: hidden;
  min-height: 200px;
}
.lsiten-thumb {
  width: 324px;
  height: 202px;
  padding: 6px;
  background-color: #e6e6e6;
  float: left;
}
.lsiten-thumb img{
  width: 100%;
  height: 100%;
}
.lsiten-article {
  padding-left: 340px;
  padding-right: 20px;
  position: relative;
}

.lsiten-article .lsiten-article-date {
  width: 64px;
  height: auto;
  position: absolute;
  left: 340px;
  top: 25px;
}
.lsiten-article .lsiten-article-date .lsiten-date-day {
  color: #0076ca;
  font-size: 58px;
  height: 60px;
  display: inline-block;
  margin-bottom: 10px;
}
.lsiten-article .lsiten-article-date .lsiten-date-year-mouth {
  color: #6e6e6e;
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  display: block;
}
.lsiten-article-desc h2{
  font-size: 18px;
  color: #0076ca;
  display: block;
  margin-bottom: 16px;
  letter-spacing: 2px;
  font-family: "微软雅黑";
  font-weight: normal;
}

.lsiten-article-desc a:hover {
    color: #133147;
}
.lsiten-article-desc h2:hover {
    color: #133147;
}
.lsiten-article-desc .lsiten-article-a,
.lsiten-article-desc .lsiten-article-body {
  color: #050505;
  font-size: 16px;
}

.lsiten-article-desc .lsiten-article-a:hover{
  color: #0076ca;
}


.lsiten-article-desc .lsiten-article-body {
  padding-left: 80px;
}

.lsiten-article-desc .lsiten-article-footer {
  color: #0076ca;
  text-align: right;
  margin-top: 10px;
}

.lsiten-article-desc .lsiten-article-footer a {
  color: rgb(0, 0, 238);
  text-align: right;
  margin-top: 10px;
  font-size: 14px;
  margin: 5px;
}

.lsiten-content-list-content {
  margin-top: 10px;
  min-height: 246px;
}
.lsiten-content-list-content p {
  height: 40px;
  line-height: 40px;
  border-bottom: #e6e6e6 solid 1px;
  position: relative;
}

.lsiten-content-list-content p a {
  color: #050505;
  font-size: 16px;
}
.lsiten-content-list-content p a:hover {
    color: #0076ca;
}
.lsiten-content-list-content p span {
  float: right;
  color: #8c8c8c;
  font-size: 16px;
}
</style>

