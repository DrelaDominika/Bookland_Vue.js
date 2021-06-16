<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name: 'Home',
  components: {Sidebar},
};
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(119, 56, 56);
    height: 100vh; /*viewport height*/
    width: 100%;
}
.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>
