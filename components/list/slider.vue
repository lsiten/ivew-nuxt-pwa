<template>
  <div class="list-slider">
    <h2><span class="active">{{title}}</span></h2>
    <ul class="lsiten-cat-list-box">
       <li :class="{activeCat: item.cid === cid}" v-for="(item, index) in (list || [])" v-bind:key="index" @click="jumpCatByid(item.cid)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list-slider',
  props: {
    cid: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: '新闻动态'
    },
    list: {
      type: Array,
      default: () => [
        {
          name: '新闻资讯',
          cid: 1
        },
        {
          name: '口岸公告',
          cid: 2
        },{
          name: '口岸动态',
          cid: 3
        }
      ]
    }
  },
  created () { 
  },
  methods: {
    jumpCatByid (id) {
      if (id === this.cid) {
        return false
      }
      this.$router.push({
        path: '/list/' + id
      })
    }
  }
}
</script>

<style scoped>
.list-slider {
  width: 180px;
  position: absolute;
  left: 0;
  top: 0;
}

.list-slider h2 {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-family: "微软雅黑";
  background-color: #2d82eb;
}
.list-slider h2 span {
  height: 36px;
  width: 140px;
  color: #fff;
  line-height: 36px;
  margin: 4px 0 0 10px;
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  position: relative;
  text-align: center;
}
.list-slider h2 .active {
  color: #0f69d7;
  font-weight: bold;
  background-color: #fff;
}

.list-slider .lsiten-cat-list-box {
  width: 180px;
  position: relative;
  margin: 10px 0 0 0;
  list-style: none;
}

.list-slider .lsiten-cat-list-box li {
  height: 39px;
  text-indent: 10px;
  border-bottom: #d5d5d5 solid 1px;
  list-style: none;
  line-height: 39px;
  font-size: 14px;
  height: 100%;
  cursor: pointer;
}


.list-slider .lsiten-cat-list-box li.activeCat, .list-slider .lsiten-cat-list-box li:hover {
    color: #fff;
    text-indent: 20px;
    box-shadow: #ccc 0 0 6px;
    background-color: #1b83ae;
    transition: color,text-indent,background-color 300ms ease-out;
}
</style>


