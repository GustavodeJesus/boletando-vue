<template>
  <div>
    <div class="container_table">
      <span class="title_bill">Boletos Gerados</span>
      <table id="firstTable" class="table">
        <thead>
          <tr>
            <th>Id Boleto</th>
            <th>Pagador</th>
            <th>Contato</th>
            <th>Status</th>
            <th>Valor</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td>{{row.id}}</td>
            <td>{{row.name}}</td>
            <td>{{row.phone}}</td>
            <td>
              <span
                class="status"
                :style="{ 
                    background: bgColors(row.status),
                    color: colors(row.status)}"
              >{{status(row.status)}}</span>
            </td>
            <td>{{row.value}}</td>
            <td>
              <button class="duplicate">Segunda Via</button>
            </td>
            <td>
              <button class="cancel">Cancelar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableBill",
  data() {
    return {
      rows: [
        {
          id: 1,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 1,
          value: "R$ 50,00"
        },
        {
          id: 2,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 2,
          value: "R$ 150,00"
        },
        {
          id: 3,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 3,
          value: "R$ 250,00"
        },
        {
          id: 4,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 2,
          value: "R$ 350,00"
        },
        {
          id: 5,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 1,
          value: "R$ 500,00"
        },
        {
          id: 6,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 1,
          value: "R$ 510,00"
        },
        {
          id: 7,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 3,
          value: "R$ 5.550,00"
        },
        {
          id: 8,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 2,
          value: "R$ 507,00"
        },
        {
          id: 9,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 1,
          value: "R$ 350,00"
        },
        {
          id: 10,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 2,
          value: "R$ 456,00"
        },
        {
          id: 11,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 3,
          value: "R$ 4.896,77"
        },
        {
          id: 12,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 1,
          value: "R$ 859,00"
        },
        {
          id: 13,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 2,
          value: "R$ 8.147,00"
        },
        {
          id: 14,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 3,
          value: "R$ 100,00"
        },
        {
          id: 15,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 1,
          value: "R$ 200,00"
        },
        {
          id: 16,
          name: "maria das Dores",
          phone: "(34) 99999-9999",
          status: 1,
          value: "R$ 369,00"
        }
      ]
    };
  },
  methods: {
    // Método de mudança de status baseado no retorno do Serviço
    bgColors(status) {
      switch (status) {
        case 1:
          return "rgba(4, 176, 117, 0.2)";
        case 2:
          return "rgba(255, 202, 40, 0.2)";
        default:
          return "rgba(224, 32, 32, 0.2)";
      }
    },

    colors(status) {
      switch (status) {
        case 1:
          return "#04B075";
        case 2:
          return "#FFCA28";
        default:
          return "#E02020";
      }
    },

    status(status) {
      switch (status) {
        case 1:
          return "Pago";
        case 2:
          return "Pendente";
        default:
          return "Vencido";
      }
    }
  }
};
</script>

<style>
.container_table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 6px;
}

.title_bill {
  font-family: "Acme", sans-serif;
  font-size: 1.1rem;
  line-height: 44px;
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
}

.table {
  margin: 10px 20px;
}
table {
  font-family: "Acme", sans-serif;
  width: auto;
  border-collapse: collapse;
}

table th {
  text-align: left;
  font-size: 0.8rem;
  color: #1b262c;
  padding: 8px;
  min-width: 30px;
  border-bottom: 1px solid #c1c1c1;
}

table td {
  text-align: left;
  padding: 8px;
  font-size: 0.8rem;
  height: 30px;
  color: #464646;
  border-bottom: 1px solid #c1c1c1;
}
table td:last-child {
  border-right: none;
}

.status {
  background: rgba(224, 32, 32, 0.2);
  padding: 2px 5px;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 0.7rem;
  text-align: center;
  letter-spacing: -0.408px;
  color: #e02020;
}

.duplicate {
  border: 1px solid #04b075;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  color: #04b075;
  background: none;
  font-size: 0.7rem;
}

.duplicate:active {
  color: #fff;
  background: #04b075;
}

.cancel {
  border: 1px solid #e02020;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  color: #e02020;
  background: none;
  font-size: 0.7rem;
}

.cancel:active {
  color: #fff;
  background: #e02020;
}
</style>