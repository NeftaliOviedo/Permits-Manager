<template>
    <div class="createPage container">
         <div class="row">
            <h2 class="title">Manage Permit</h2>
        </div>

        <div class="col-6">
          <PermitForm v-bind="$route.params"/>
        </div>

    </div>
</template>

<script>

import PermitForm from "../components/PermitForm.vue";
export default {
  name: 'CreateorEditPage',
  components: {
    PermitForm
  }
}
</script>