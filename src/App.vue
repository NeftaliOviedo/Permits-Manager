<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand">Permits</a>
     
        <ul class="nav">
          <li class="nav-item text-muted">
            <router-link class="nav-link reset-text" to="/">Home</router-link>
          </li>
          <li class="nav-item text-muted">
          </li>
        </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.nav-link{
  color:gray;
}
.nav-link:hover{
  color:black;
}
</style>
