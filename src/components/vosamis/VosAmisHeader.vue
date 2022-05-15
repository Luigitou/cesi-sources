<template>
  <div class="title">
    <h2>Vos amis</h2>
  </div>

  <div class="searchbar">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Rechercher un ami...">
      <button type="submit" class="searchButton"><img class="img" src="../../assets/chercher.png" alt="chercher"></button>
    </div>
  </div>
</template>

<script>

export default{
  name: 'vosamisheader'
}
</script>

<style lang="scss" scoped>
.title{
  h2{
    display: flex;
    margin: 2% 0 0 10%;
  }
}

.searchbar{
  .search {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;

    .searchTerm {
      width: 30%;
      border: 2px solid rgb(217, 217, 217);
      border-right: none;
      padding: 5px;
      height: 35px;
      border-radius: 5px 0 0 5px;
      outline: none;
      color: #222222;
    }

    .searchButton {
      width: 40px;
      border: 1px solid gainsboro;
      background: gainsboro;
      text-align: center;
      color: #fff;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      font-size: 20px;

      img{
        position: relative;
        top: 2.5px;
        width: 20px;
      }
    }
  }
}
</style>