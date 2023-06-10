<template>
  <div>
    <h1>{{ title }}</h1>
    <p class="subtitle">
      Os usuários deste exemplo são fornecidos pela API de teste
      <i>reqres.in</i>
    </p>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  props: {
    title: {
      type: String,
      default: "My title",
    },
  },
};
</script>
<style>
.subtitle {
  color: #fafafa;
  font-weight: bold;
}
</style>
