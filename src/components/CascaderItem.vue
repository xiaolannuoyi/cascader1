<template>
  <li class="cascader-item">
      <p @click="router(data.path)">{{ data.label }}</p>
  </li>
</template>

<script>
export default {
    name: "CascaderItem",
    props: {
        data: Object
    },
    methods:{
        router(path){
            if(path!=undefined){
                console.log("path11111111",path);
                this.$router.push("/hello")
            }
        },
    }
}
</script>

<style scoped>
    .cascader-item {
        width: 120px;
        cursor: pointer;
    }
</style>
