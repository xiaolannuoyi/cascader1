<template>
  <div id="app">
    <div class="div" @mouseenter="showall()" @mouseleave="showaleave()">
      <button class="btn">主菜单</button>
      <cascader :data="list" v-show="show"></cascader>
    </div>
    
    <p>111111111111111111111111111111111111111111111111111111111111111111111111</p>
  </div>
</template>

<script>
import Cascader from '@/components/Cascader.vue';
export default {
  components:{Cascader
  },
  data() {
        return {
            menuList: [
                {
                    label: "菜单一",
                    children: [
                        {
                            label: "二级菜单_1",
                            children: [
                                {
                                    label: "三级菜单_1",
                                    children: [
                                          {
                                              label: "四级菜单_1",
                                              path: "/hello"
                                          }
                                      ]
                                }
                            ]
                        },
                        {
                            label: "二级菜单_2",
                            path: "/hello"
                        }
                    ]
                },
                {
                    label: "菜单二",
                    children: [
                        {
                            label: "二级菜单",
                            children: [
                                {
                                    label: "三级菜单_1",
                                    path: "/hello"
                                }
                            ]
                        }
                    ]
                }
            ],
            show:true,
            list:[]
        }
    },
    methods:{
      showall(){
        this.show=true;
        this.list=this.menuList;
      },
      showaleave(){
        this.show=true;
        this.list=[];
      },

    }
  
}
</script>

<style>
.btn,.div{
height: 50px;
width: 100px;
}
</style>
