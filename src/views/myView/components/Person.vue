<script lang="ts">
  export default {
    //vue2专用
    name: "Person",
    data(){
      return {
        name:'张',
        age:18,
        tel:'123910312'
      }
    },
    methods: {
      showTel(){
        alert(this.tel)
      },
      changName(){
        this.name = 'zhang-2'
      },
      changAge(){
        this.age +=1
      }

    }
  }

</script>

<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="showTel">查看联系方式</button>
    <h2>年龄：{{age}}</h2>
    <button @click="changAge">修改年龄</button>
    <button @click="changName">修改名字</button>
  </div>
</template>

<style scoped>
  .person {
    background: #ffffff;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>