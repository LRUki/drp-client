<template>
  <div class="d-flex flex-column justify-content-between p-2 card-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watchEffect } from "vue";

export default defineComponent({
  props: {},
  // setup(props) {},
});
</script>

<style scoped>
.card-container {
  background-color: white;
  border: 0.5px solid #d3d3d3;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.card-container:hover {
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}
</style>
