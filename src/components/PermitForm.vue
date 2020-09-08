<template>
    <div>

       <form > 
            <div class="form-row">
                <input v-model="permit.Id" hidden  type="text" class="form-control" >
                <div class="form-group col-md-6">
                <label for="name">Name</label>
                <input id="name" name="name" v-model="permit.EmployeeName" type="text" class="form-control " v-bind:class="{'is-invalid' : errors.name}" >
                <span class="text-danger" v-if="errors.name">The Name field is required</span>
                </div>
                <div class="form-group col-md-6">
                <label for="lastname">Lastnames</label>
                <input id="lastname" name="lastname" v-model="permit.EmployeeLastname" type="text" class="form-control" v-bind:class="{'is-invalid' : errors.lastname}" >
                <span class="text-danger" v-if="errors.lastname">The Lastname field is required</span>
                </div>
            </div>
     
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="type">Type Of Permit</label>
                <select id="type" name="type" v-model="permit.PermitTypeId" class="form-control" v-bind:class="{'is-invalid' : errors.type}">
                    <option v-for="type in types" v-bind:key="type.id" v-bind:value="+type.id" >{{type.description}}</option>
                </select>
                <span class="text-danger" v-if="errors.type">The Permit Type field is required</span>
                </div>
                <div class="form-group col-md-6">
                <label for="date">Choose a date</label>
                 <input type="date" name="date" id="date" class="form-contol date-picker" v-bind:class="{'date-required' : errors.date}" v-model="permit.PermitDate"/>
                <span class="text-danger" v-if="errors.date">The Date field is required</span>
                </div>
            </div>
            <button type="button" @click.prevent="createOrEdit(permit)" class="btn btn-success mr-4">{{action}}</button>
            <button  @click="this.$router.push('/')"  class="btn btn-danger">Cancel</button>
            </form>
    </div>
</template>



<script>

import _service from '../service/dataService'


export default {
    name:"CreateOrEdit",
    props:["action"],
    data() {
      return {
        types:[],
        permit:{
            Id:0
            },
        errors: {},
      }
    }, 
  
    mounted(){

        _service.getPermitTypes().then(response => {
            this.types = response.data
        })

        if(this.action == "Edit"){
            _service.getItem(this.$route.params.id).then(resp => {
                this.permit.Id = resp.data.id;
                this.permit.EmployeeName = resp.data.employeeName;
                this.permit.EmployeeLastname = resp.data.employeeLastname;
                this.permit.PermitTypeId = resp.data.permitTypeId;


                var arr = resp.data.permitDate;
                arr = arr.split('T',1);
                this.permit.PermitDate = arr.toString();

            })
        

        }
    },
    methods:{
        createOrEdit(data){
            if(this.validateForm()){
                if(this.action == "Edit"){
                    _service.update(data).then(this.$router.push('/'))
                }else{
                    _service.create(data).then(this.$router.push('/'))
                }
            }

            },
            validateForm() {
                this.errors = {};

                if (this.permit.EmployeeName && this.permit.EmployeeLastname && this.permit.PermitTypeId && this.permit.PermitDate) {
                    return true;
                }else{
                    if (!this.permit.EmployeeName) this.errors.name = '.';
                    if (!this.permit.EmployeeLastname) this.errors.lastname = '.';
                    if (!this.permit.PermitTypeId) this.errors.type = '.';
                    if (!this.permit.PermitDate) this.errors.date = '.';
                    return false;
                }

            }
        
    }
}

</script>

<style >
.date-picker{
    width:100%; 
    font-size:1.3em;
}
.date-required{
    border: 1px solid #db4545;
}
</style>