<template>
    <div class="content">
      <div class="lsiten-container">
          <slider :cid='catsId'></slider>
          <div class="lsiten-list-content">
            <div class="lsiten-nodata-detail" v-if="(this.articles || []).length < 1">
              暂无数据
            </div>
            <div class="lsiten-list-content-body"  v-if="(this.articles || []).length > 0">
              <p  v-for="(item, index) in (this.articles || [])" v-bind:key="index">
                <a :title="item.title" :src="item.src" v-html="parseTitle(item.title)"></a>
                <span>{{getDateTime(item.date)}}</span>
              </p>
            </div>
            <Page :total="(pageCount * pageSize)" :current.sync="page" show-sizer :show-total="true" :page-size="pageSize"/>
          </div>
      </div>
    </div>
</template>

<script>
import slider from '../../components/list/slider'
import {removeHTMLTag, escape2Html, timeChanges} from '../../units/common.js'
export default {
  name: 'list',
  components: {
    'slider': slider
  },
  data () {
    return {
      catsId: -1,
      cats: [
      ],
      articles: [
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
      ],
      page: 1,
      pageCount: 10,
      pageSize: 10
    }
  },
  created () {
    this.catsId = parseInt(this.$route.params.id) || -1
  },
  methods: {
    parseTitle (title) {
      title = escape2Html(removeHTMLTag((title || '')))
      return title.length > 20 ? title.substr(0, 20) + '...' : title
    },
    getDateTime (date) {
      return timeChanges(date, 'timestamp', 'Y-m-d')
    }
  },
  head () {
    return {
      title: '中国(广西)国际贸易单一窗口-列表详情'
    }
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  min-height: 160px;
  height: auto;
}
.content .lsiten-container {
  width: 1180px;
  height: auto;
  margin: 20px auto;
  position: relative;
}

.lsiten-container .lsiten-list-content {
  padding-left: 200px;
  min-height: 200px;
}

.lsiten-container .lsiten-list-content .lsiten-nodata-detail {
  text-align: center;
  padding: 50px;
  font-size: 16px;
  min-height: 246px;
}

.lsiten-container .lsiten-list-content .lsiten-list-content-body {
  padding: 0 0 20px 0;
}


.lsiten-container .lsiten-list-content .lsiten-list-content-body p {
  height: 40px;
  line-height: 40px;
  border-bottom: #e6e6e6 solid 1px;
  position: relative;
}

.lsiten-container .lsiten-list-content .lsiten-list-content-body p a {
  color: #050505;
  font-size: 16px;
}
.lsiten-container .lsiten-list-content .lsiten-list-content-body p a:hover {
    color: #0076ca;
}
.lsiten-container .lsiten-list-content .lsiten-list-content-body p span {
  float: right;
  color: #8c8c8c;
  font-size: 16px;
}
</style>

