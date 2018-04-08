<template>
    <div class="cascader-panel">
        <ul v-if="data && data.length" @mouseover="handlemouseover">
            <cascader-item :class="[{isactive:currentIndex===index}]" v-for="(item,index) in data" :data="item" :key="item.id" @mouseenter.native.stop="showChild(item,index)" ></cascader-item>
            <!-- <div @mouseenter="enterul()" style="height:100%;background-color:red;"></div> -->
        </ul>
        <cascader-panel v-if="childMenu && childMenu.length" :data="childMenu"></cascader-panel>
    </div>
</template>

<script>
import CascaderItem from "./CascaderItem";

export default {
  name: "CascaderPanel",
  components: {
    CascaderItem
  },
  props: {
    data: Array
  },
  data() {
    return {
      childMenu: [],
      currentIndex:-1,
    };
  },
  watch: {
    data() {
      this.childMenu = [];
      this.currentIndex= -1;
    }
  },
  methods: {
    showChild(item,index) {
        this.currentIndex=index;
        this.childMenu = item.children;
    },
    // enterul(){
    //   this.currentIndex = -1;
    //   this.childMenu = [];
    // },
    handlemouseover(e){
       console.log("this is over",e)
      if(e.srcElement.nodeName == "LI"){
        return
      }else{
        this.currentIndex = -1;
        this.childMenu=[];
      }  
    },
  }
};
</script>

<style scoped>
.cascader-panel {
  display: flex;
  height: 300px;
  background-color: green;
}
.isactive{
  color: blue;
}
</style>
