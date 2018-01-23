<template>
    <div class="cascader">
        <cascader-panel :data="data"></cascader-panel>
    </div>
</template>

<script>
import CascaderPanel from "./CascaderPanel";

export default {
  name: "Cascader",
  components: {
    CascaderPanel
  },
  props: {
    data: Array,
  }
};
</script>

<style scpoed>
.cascader{
  position: absolute;
  height: 100%;
  background-color: #eee;
}
</style>
