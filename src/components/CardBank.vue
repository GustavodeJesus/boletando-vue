<template>
  <div>
    <div class="container-card" :style="{ background: color }">
      <div class="bank">
        <img
          v-if="logo"
          class="img_bank"
          :src="require(`../assets/icons/${logo}`)"
          alt="logo"
          :style="{margin: '0px 0px 0px 30px'}"
        />
        <p class="bank_name" :style="{margin: logo ? '5px 10px' : '5px 30px'}">{{bank}}</p>
      </div>
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
    color: String,
    logo: String
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

.bank_value,
.bank_status {
  color: #ffffff;
  text-align: left;
  font-family: "Acme";
  font-size: 0.8rem;
  margin: 5px 30px;
}

.bank {
  display: flex;
  align-items: center;
}

.img_bank {
  width: 25px;
  height: 25px;
}

.bank_name {
  color: #ffffff;
  text-align: left;
  font-family: "Acme";
  font-size: 0.8rem;
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