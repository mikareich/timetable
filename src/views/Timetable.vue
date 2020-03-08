<template>
  <div class="lessons">
    <h1>Lessons</h1>
    <a href="#" @click="logOut">Log out</a>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Lessons",
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.replace("/login");
    }
  }
};
</script>
