<template>
  <div id="app" class="bg-warning my-container">
    <div class="container">
      <MyHeader :title="title" />
      <div id="usuarios" class="container-fluid">
        <b-row>
          <div v-for="(user, idx) in users.data" :key="idx">
            <b-col>
              <div class="card p-2 m-3 my-card">
                <CardUser
                  :userFirstName="user.first_name"
                  :userLastName="user.last_name"
                  :userEmail="user.email"
                  :userAvatar="user.avatar"
                />
              </div>
            </b-col>
          </div>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import CardUser from "./components/CardUser.vue";
import MyHeader from './components/MyHeader.vue';

export default {
  name: "App",
  components: {
    CardUser,
    MyHeader
  },
  data() {
    return {
      users: [],
      title: 'Usuários de Teste via REST'
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      const response = await fetch("https://reqres.in/api/users?per_page=10");
      this.users = await response.json();
    }
  }
};
</script>

<style>
.subtittle {
  color: #fafafa;
  font-weight: bold;
}
.my-container {
  padding: 15px 0;
}
.my-card {
  height: 370px;
  width: 280px
}
</style>
