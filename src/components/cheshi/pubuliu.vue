<template>
  <div class="waterfall-wrapper">
    <ul class="left-waterfall" ref="left">
      <li class="item" v-for="(item, index) in leftItems" v-bind:style=" {height:item.height+'px'}" @click="del(index)">
            <img :src="'https://fuss10.elemecdn.com'+item.image_url">
          <p> {{ index }} </p>
    </li>
    </ul>
    <ul class="right-waterfall" ref="right">
      <li class="item" v-for="(item, index) in rightItems" v-bind:style=" {height:item.height+'px'}" @click="del1(index)">
          <img :src="'https://fuss10.elemecdn.com'+item.image_url">
          <p> {{ index }} </p>
          </li>
    </ul>
  </div>
</template>


<script>
export default {
  data () {
    return {
    //   data: [
    //     {
    //     image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //     height: 100
    //     },
    //     {
    //       image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 110
    //     },
    //     {
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 150
    //     },
    //     {
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 200
    //     },
    //     {
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 300
    //     },
    //     {
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 100
    //     },{
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 222
    //     },{
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 111
    //     },{
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 123
    //     },{
    //         image:'http://img-agc.iqianggou.com/0a62fca1eeab88e894b93539c35446ec!180x180',
    //       height: 451
    //     },
    //   ],
      leftItems: [],
      rightItems: [],
      list:[]
    }
  },
  created(){
      this.axios.get("http://elm.cangdu.org/v2/index_entry?geohash=31.1541,121.39489&group_type=1&flags[]=F").then(res=>{
            this.list=res.data
             this.updateWaterfall(this.list)
        })
  },
  mounted () {
    // TODO GET DISPLAY_DATA
     
    // this.updateWaterfall()
  },
  methods: {
    updateWaterfall (data) {
      const leftHeight = this.$refs.left.clientHeight
      const rightHeight = this.$refs.right.clientHeight
    //   console.log(leftHeight)
    //   console.log(rightHeight) 
      let item = data.shift()
    //   console.log(data)
      if (item == null) {
        return
      }
      if (leftHeight <= rightHeight) {
        this.leftItems.push(item)
      }
      else {
        this.rightItems.push(item)
      }
      this.$nextTick(function () {
        console.log('进来了')
        this.updateWaterfall(data)
      })
    },
    //删除
    del(index){
        this.leftItems.splice(index,1)
    },
    del1(index){
        this.rightItems.splice(index,1)
    }
  }
}
</script>


<style lang='scss' scoped>
    .waterfall-wrapper{
        overflow: auto;
        height: 100%;
        width: 100%;
    }
  ul {
    width: 40%;
  }


  ul.left-waterfall {
    float: left;
    img{
    width: 40%;
    
}
  }


  ul.right-waterfall {
    float: right;
    img{
    width: 80%;
    
}
  }


  li.item {
    padding-top: 10px;
    width: 100%;
    background-color: aqua;
    margin: 10px;
    text-align: center;
  }


</style>
