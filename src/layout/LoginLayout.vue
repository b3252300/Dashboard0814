<template>
  <div class="bg_login">
    <div class="sigin_container">
      <div class="sigin_row">
        <RouterView />
        <slot name="sigin"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import SignalrHub from "@/composable/SignalrHub"; //导入hub
SignalrHub.connect();

</script>

<style lang="scss" scoped>
.bg_login {
  background: url(@/assets/images/login3380.jpg);
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.sigin_container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .sigin_row {
    width: 100%;
    max-width: calc(100vw * 0.35);
    min-height: calc(35.4vw / 0.95);
    margin-left: auto;
    margin-right: 12%;
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 4px rgba(34, 34, 34, 0.2);
    backdrop-filter: blur(7px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
