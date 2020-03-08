<template>
  <div class="login">
    <img src="../assets/login.png" width="200" alt="Login" />
    <p>Welcome back to <b>timetable</b></p>
    <form>
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

      <button type="submit" @click="login">
        Login
      </button>
    </form>
    <p class="error" v-show="error">
      An error has occured. Please control your entrie.
    </p>
    <h6>You dont have an account ? Create one <a href="/#/signUp">here</a></h6>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      showPassword: true,
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/home");
        })
        .catch(() => (this.error = true));
    }
  }
};
</script>

<style scoped>
.error {
  color: #c20b0b;
  font-size: 10pt;
  font-weight: bold;
}
.login,
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
