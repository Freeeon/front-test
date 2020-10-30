<template>
  <tr>
    <td v-for="cell in row" :key="cell.field">
      <template v-if="isEdit && cell.field !== 'ID'">
        <input :type="types[cell.type]" :name="cell.name" v-model="cell.value">
      </template>
      <template v-else>
        {{ cell.value }}
      </template>
    </td>
    <td>
      <a class="waves-effect waves-light btn" :class="{ green: isEdit, blue: !isEdit }"
         @click="editRow()">
        {{ isEdit ? 'Save' : 'Edit'}}
      </a>
    </td>
    <td>
      <a class="waves-effect waves-light btn red" @click="deleteRow">Delete</a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'SecondTable',
  props: {
    tableRow: {
      type: Object
    }
  },
  data () {
    return {
      types: {
        integer: 'number',
        string: 'text'
      },
      isEdit: false,
      row: JSON.parse(JSON.stringify(this.tableRow))
    }
  },
  mounted () {},
  methods: {
    editRow () {
      if (this.isEdit) {
        this.$emit('editRow', this.row)
      }

      this.isEdit = !this.isEdit
    },
    deleteRow () {
      this.$emit('deleteRow')
    }
  }
}
</script>
<style lang="scss"></style>
