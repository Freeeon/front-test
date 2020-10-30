<template>
  <main>
    <table class="responsive-table">
      <thead>
        <tr>
          <th class="filter" v-for="column in columns" :key="column" @click="setFilter(column)">
            {{ column }} {{ filterLabel(column) }}
          </th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <TableRow v-for="(row, index) in tableData" :key="row.ID.value" :tableRow="row"
                  @editRow="editRow(index, $event)" @deleteRow="deleteRow(index)"/>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">Total: </td>
          <td>{{ tableData.length }} {{ tableData.length === 1 ? 'Record' : 'Records' }}</td>
        </tr>
      </tfoot>
    </table>
  </main>
</template>

<script>
import TableRow from './TableComponents/TableRow'

export default {
  name: 'SecondTable',
  components: {
    TableRow
  },
  data () {
    return {
      url: 'https://frontend-test.netbox.ru/',
      columns: ['ID', 'Name', 'Age', 'Phone', 'E-mail'],
      tableData: [],
      filter: {
        column: 'ID',
        isDesc: false
      }
    }
  },
  mounted () {
    this.$http.get(this.url).then(({ data }) => {
      data.forEach((row) => {
        const newRow = {}
        row.forEach((cell) => {
          newRow[cell.field] = cell
        })
        this.tableData.push(newRow)
      })
    })
  },
  methods: {
    // View Methods
    filterLabel (column) {
      if (this.filter.column === column) {
        return this.filter.isDesc ? '↑' : '↓'
      }
    },
    setFilter (column) {
      if (this.filter.column === column) {
        this.filter.isDesc = !this.filter.isDesc
      } else {
        this.filter.column = column
        this.filter.isDesc = false
      }

      this.tableData.sort((a, b) => {
        const left = a[this.filter.column].value
        const right = b[this.filter.column].value

        if (Number(left) && Number(right)) {
          return this.filter.isDesc ? (right - left) : (left - right)
        }

        if (left > right) {
          return this.filter.isDesc ? -1 : 1
        }
        if (left < right) {
          return this.filter.isDesc ? 1 : -1
        }
        return 0
      })
      this.$forceUpdate()
    },

    // Controller Methods
    editRow (index, newRow) {
      const data = new FormData()
      data.append('method', 'update')

      // Хард-код, которого бы не было, если бы присылаемые и принимаемые поля
      // были в одинаковом регистре и нотации -_-
      data.append('id', newRow.ID.value)
      data.append('name', newRow.Name.value)
      data.append('age', newRow.Age.value)
      data.append('phone', newRow.Phone.value)
      data.append('email', newRow['E-mail'].value)

      this.$http.post(this.url, data).then(() => {
        this.tableData[index] = JSON.parse(JSON.stringify(newRow))
      })
    },
    deleteRow (index) {
      const data = new FormData()
      data.append('method', 'delete')
      data.append('id', this.tableData[index].ID.value)

      this.$http.post(this.url, data).then(() => {
        this.tableData.splice(index, 1)
      })
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  max-width: 1280px;
  width: 100%;
  margin: 48px auto;
  padding: 0 12px;
}
.filter {
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}
</style>
