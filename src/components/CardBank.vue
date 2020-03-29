<template>
  <div>
    <div class="container-card" :style="{ background: color }">
      <p class="bank_name">{{bank}}</p>
      <p class="bank_value">{{value}}</p>
      <p class="bank_status">
        <img
          v-if="positive"
          class="img_status"
          src="../assets/icons/icon_up_arrow.svg"
          alt="icon status"
        />
        <img v-else class="img_status" src="../assets/icons/icon_down_arrow.svg" alt="icon status" />
        <span>{{percent}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBank",
  props: {
    bank: String,
    value: String,
    positive: Boolean,
    percent: String,
    color: String
  },
  data() {
    return {};
  }
};
</script>

<style>
.container-card {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-radius: 5px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bank_name,
.bank_value,
.bank_status {
  color: #ffffff;
  text-align: left;
  margin: 10px 20px;
  font-family: "Acme";
  font-size: 0.8rem;
  margin: 5px 30px;
}

.img_status {
  width: 10px;
  height: 10px;
}

.bank_value {
  font-size: 1rem;
}

.bank_status {
  text-align: center;
}
</style>