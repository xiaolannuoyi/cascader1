<template>
  <li class="cascader-item">
      <p>{{ data.label }}</p>
  </li>
</template>

<script>
export default {
    name: "CascaderItem",
    props: {
        data: Object
    }
}
</script>

<style scoped>
    .cascader-item {
        width: 120px;
        cursor: pointer;
    }
</style>
