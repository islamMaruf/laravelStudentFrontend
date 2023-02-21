<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <div class="row">
                <div class="col-8">
                  <h4 class="card-title">Student List</h4>
                </div>
                <div class="col-4 col-4 d-flex flex-row-reverse">
                  <button type="button" @click="goToAddStudent" class="btn btn-primary">Add Student</button>
                </div>
              </div>

            </template>
            <table class="table table-responsive ">
              <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Class</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contract Number</th>
                <th scope="col" v-for="item in tableHeaders" :key="item.id">{{ item.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in tableBody" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.class }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.contract_number }}</td>
                <td v-for="(newItem,index) in item.student_attribute" :key="newItem.id + index">{{newItem.pivot.value}}</td>
              </tr>
              </tbody>
            </table>
          </card>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
import LTable from 'src/components/Table.vue'
import Card from 'src/components/Cards/Card.vue'
import axios from "@/plugins/axios";


export default {
  components: {
    LTable,
    Card
  },
  data() {
    return {
      tableHeaders: [],
      tableBody: [],
    }
  },
  methods: {
    goToAddStudent() {
      this.$router.push({name: 'addStudent'})
    }
  },
  mounted() {
    axios.get('/students').then(res => {
      let data = res.data;
      this.tableHeaders = data.studentAttributes.student_attributes
      this.tableBody = data.students
      // this.tableBody = students
      // console.log(this.tableBody)

    })
  }
}
</script>
<style>
</style>
