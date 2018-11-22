<template>
    <div>
        <header>
            <h1>Board</h1>
        </header>
        <div class="products">
            <div class="product">
                <router-link :to="`/board/card/1`">상품 1</router-link>
            </div>
            <div class="product">
                <router-link :to="`/board/card/2`">상품 2</router-link>
            </div>
            <div class="product">
                <router-link :to="`/board/card/3`">상품 3</router-link>
            </div>
            <div class="product">
                <router-link :to="`/board/card/4`">상품 4</router-link>
            </div>
            <div class="product">
                <router-link :to="`/board/card/5`">상품 5</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
.products {
  overflow: hidden;
  .product {
    float: left;
    width: 200px;
    height: 100px;
    line-height: 100px;
    border: 1px solid red;
    border-radius: 5px;
    margin: 0.5rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
</style>

