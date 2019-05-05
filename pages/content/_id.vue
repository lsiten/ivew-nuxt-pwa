<template>
    <div class="content">
      <div class="lsiten-container">
        <h1 class="lsiten-head">{{parseTitle(title)}}</h1>
        <div class="subtitle">
          <span>发布日期：{{getDateTime(date)}}</span>
          <span>作者：{{autor}}</span>
          <span>来源：{{source}}</span>
        </div>
        <div class="lsiten-content-body" v-html="content"></div>
      </div>
    </div>
</template>

<script>
import {removeHTMLTag, escape2Html, timeChanges} from '../../units/common.js'

export default {
  name: 'content',
  data () {
    return {
      articleId: -1,
      title: '西部陆海新通道首开至印度海铁联运班列',
      date: '1557021265',
      autor: '罗继梅',
      source: '广西日报',
      content: '<p style="text-indent: 2em;">4月13日凌晨，一辆满载汽车零配件的79823次海铁联运专列，在运行约49小时后，从重庆到达钦州港东站，并于4月16日从钦州港经海运发往印度，预计18天后抵达目的地印度钦奈港。这是西部陆海新通道首次开行出口印度的专列，进一步丰富了西部陆海新通道的多式联运服务体系。</p><p style="text-indent: 2em;">正在钦州开展“以钦州港建设为重点，深度融入西部陆海新通道建设”主题采访活动的中央媒体团一行，也对此次首发印度方向的海铁联运班列情况进行了现场采访报道。</p><p style="text-indent: 2em;">本次首发的印度方向海铁联运班列，共运载25个大型集装箱，货值超过800万元人民币，货物从重庆到印度全程仅需20天左右，较传统重庆经长江运抵沿海港口、再海运到印度的江海联运方式节省14天时间。“该专列从重庆到达钦州港后，我们保障货物优先处理装卸，并在3小时内完成。”广西沿海铁路公司钦州港站站长黄光辉说。得益于“全国通关一体化”的便利，此次班列的货主在重庆海关完成出口申报后，在钦州港只需办理仓单手续，就可通过海运将货物发往印度。</p><p style="text-indent: 2em;">“目前自治区南向办正推进港口和铁路对接部门在同一个平台实现货物信息交换的工作，正式实施后将可再节约至少48小时的铁海货物对接中间环节。”钦州港海关综合业务科科长刘楚政说。</p><p style="text-indent: 2em;">据介绍，西部陆海新通道班列采用“点对点”方式开行，中途不再进行解编作业，有效提高了西部地区物流出海的运输时效。以重庆为例，通过新通道运输比通过长江航运通道运输，运距上缩短950公里，时间成本节约12天以上，与普通的货物列车相比用时也减少41小时左右。</p><p style="text-indent: 2em;">得益于西部陆海新通道、国家物流枢纽、集装箱干线建设的加快发展，广西钦州港集装箱外贸航线不断增加，海铁联运的优势得到了充分释放。“两年来，西部陆海新通道开行的班列逐渐增多，我们的工作比以前更繁忙了。”在钦州港东站，炜祥物流公司的指挥手林福豪说。</p><p style="text-indent: 2em;">如今，从钦州港发出的经西部陆海新通道运输的货物已通达东亚、东南亚、非洲、美洲、中东等71个国家、155个港口；内贸方面也已开通了钦州至四川、云南、贵州等5个方向的常态化班列，开行密度达每天2.5列，最高一天可达4列，流通的货物也由最初的陶瓷、板材等少数几种，增加至含汽车配件、电脑配件、平行汽车等41个多样化的品类。（罗继梅）</p><p><br></p> '
    }
  },
  created () {
    this.articleId = parseInt(this.$route.params.id) || -1
  },
  methods: {
    parseTitle (title) {
      title = escape2Html(removeHTMLTag((title || '')))
      return title.length > 20 ? title.substr(0, 20) + '...' : title
    },
    getDateTime (date) {
      return timeChanges(date, 'timestamp', 'Y-m-d')
    }
  }
}
</script>

<style scoped>
.content .lsiten-container {
  width: 1180px;
  height: auto;
  margin: 20px auto;
  position: relative;
}

.content .lsiten-container .lsiten-head {
  text-align: center
}

.content .lsiten-container .subtitle {
  font-size: 12px;
  color: #999;
  height: 30px;
  text-align: center;
  margin: 15px 0;
  border-bottom: #c9c9c9 dashed 1px;
}

.content .lsiten-container .subtitle span {
  margin: 0 5px;
}

.content .lsiten-container .lsiten-content-body {
  font-size: 16px;
  line-height: 28px;
  margin: 0;
  padding: 0;
}
</style>
