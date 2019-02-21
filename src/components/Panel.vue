<template>
  <div class="panel">
    <div class="header">
      <div class="headline">{{ headline }}</div>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    headline: String,
  },
};
</script>

<style lang="scss" src="../assets/styles/Panel.scss"></style>
