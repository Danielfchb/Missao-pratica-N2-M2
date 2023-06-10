<template>
  <div>
    <div class="card-img-top">
      <b-img rounded :src="userAvatar" fluid-grow></b-img>
    </div>
    <div class="card-body">
      <div class="card-title h5">{{ userFirstName }} {{ userLastName }}</div>
      <div class="card-text">
        {{ userEmail }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardUser",
  props: {
    userFirstName: {
      type: String,
      default: "userFirstName",
    },
    userLastName: {
      type: String,
      default: "userLastName",
    },
    userEmail: {
      type: String,
      default: "userEmail",
    },
    userAvatar: {
      type: String,
      default: "userAvatar",
    },
  },
};
</script>