<template>
  <div class="signUp">
    <img src="../assets/login.png" width="200" alt="signUp" />
    <p>Sign up for <b>timetable</b></p>
    <form>
      <input type="text" v-model="username" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <div class="inputContainer">
        <input
          :type="showPassword ? 'password' : 'text'"
          placeholder="Password (min 8 char.)"
          v-model="password"
          required
          minlength="8"
          maxlength="12"
        />
        <i class="material-icons" @click="showPassword = !showPassword">{{
          showPassword ? "visibility_off" : "visibility"
        }}</i>
      </div>

      <button type="submit" @click="signUp">
        Sign Up
        <i class="material-icons"> </i>
      </button>
    </form>
    <h6>You alreadyt have an account ? Log in <a href="/#/login">here</a></h6>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      showPassword: true,
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: this.username
          });
          user.sendEmailVerification();
        });
    }
  }
};
</script>

<style scoped>
.signUp,
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h6 {
  font-weight: normal;
}
.inputContainer {
  position: relative;
  height: 42px;
  margin-bottom: 10px;
  width: 224px;
}
.inputContainer input {
  position: absolute;
  margin: 0;
}
.inputContainer i {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0%, -50%);
}
input {
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 2px solid lightgray;
  font-family: unset;
  font-size: 11pt;
  font-weight: normal;
  border-radius: 3px;
  transition: 200ms;
  outline: none;
}
input:focus {
  border: 2px solid rgba(81, 81, 189, 0.5);
}
button {
  background: #283593;
  border: none;
  border-radius: 5px;
  padding: 7px 20px;
  color: white;
  font-family: unset;
  font-weight: bold;
  display: flex;
  align-items: center;
}
button i {
  margin-left: 5px;
}
</style>
