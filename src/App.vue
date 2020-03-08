<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    /><link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <router-view />
  </div>
</template>

<style>
html,
body {
  font-family: "Roboto", sans-serif;
  background: #f9f9f9;
  margin: 0;
  height: 100vh;
}
router-view {
  width: 100vw;
  height: 100vh;
}
</style>
