<template>
  <div class="container_statistics">
    <div class="container_title">
      <span class="title">Bem vindo aos detalhes de recebimentos</span>
      <div class="day_date">
        <img class="img_edit" src="../../assets/icons/icon_calendar.svg" alt />
        <span class="option">29 de Março de 2020</span>
      </div>
    </div>

    <div class="container_status_banks">
      <card-bank
        v-for="{bank,value,positive,percent,color,logo} in status"
        :key="bank"
        class="card_bank"
        :bank="bank"
        :value="value"
        :positive="positive"
        :percent="percent"
        :color="color"
        :logo="logo"
      />
    </div>

    <div class="container_table_bills">
      <table-bill></table-bill>
    </div>
  </div>
</template>

<script>
import CardBank from "../../components/CardBank.vue";
import TableBill from "../../components/TableBill.vue";
export default {
  name: "StatisticsDetails",
  components: {
    CardBank,
    TableBill
  },
  data() {
    return {
      status: [
        {
          bank: "Banco Itaú",
          value: "R$ 2.500,00",
          percent: "+33.45%",
          color: "#EC7000",
          positive: true,
          logo: "icon_logo_itau_varejo_desktop.png"
        },
        {
          bank: "Caixa Economica Federal",
          value: "R$ 470,00",
          percent: "-11.75%",
          color: "#277FB8",
          positive: false,
          logo: "icon_logo_cef.png"
        },
        {
          bank: "Bradesco",
          value: "R$ 57.000,00",
          percent: "+65.57%",
          color: "#8C95A0",
          positive: true,
          logo: "icon_logo_bradesco.png"
        },
        {
          bank: "Banco do Brasil",
          value: "R$ 2.500,00",
          percent: "+6.57%",
          color: "#F8D117",
          positive: true,
          logo: "icon_logo_bb.png"
        },
        {
          bank: "Banco Sicoob",
          value: "R$ 2.500,00",
          percent: "+33.45%",
          color: "#00353D",
          positive: true,
          logo: "icon_logo_sicoob.png"
        }
      ]
    };
  },
  computed: {
    // status()
  }
};
</script>

<style>
/* Bloco inicial de titulo e Data do Dia */

.img_edit {
  width: 15px;
  height: 15px;
}

.container_title {
  margin-top: 40px;
  width: auto;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  align-items: center;
}

.option {
  margin-left: 10px;
}

.title {
  font-family: "Acme", sans-serif;
  font-size: 1.2rem;
  line-height: 44px;
  flex-grow: 2;
  text-align: left;
}

.day_date {
  width: auto;
  flex-grow: 1;
  text-align: right;
  color: #a6acb8;
  font-family: "Acme", sans-serif;
  font-size: 1.1rem;
}

/*  BLoco de apresentação dos cards de status dos bancos */

.container_status_banks {
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-around;
}

.card_bank {
  margin-right: 10px;
  flex: 1;
}

.container_table_bills {
  margin: 30px;
}
</style>