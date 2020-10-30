<template>
  <div class="holder">
    <div class="iphone">
      <div class="iphone-top">
        <div class="iphone-top-brow"></div>
      </div>
      <div class="iphone-content">
        <p>
          Базовые сценарии поведения пользователей освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы. Также как социально-экономическое развитие способствует повышению качества системы массового участия.
        </p>
        <p>
          Принимая во внимание показатели успешности, высококачественный прототип будущего проекта в значительной степени обусловливает важность новых принципов формирования материально-технической и кадровой базы.
        </p>
        <p>
          Предварительные выводы неутешительны: синтетическое тестирование обеспечивает актуальность существующих финансовых и административных условий. Следует отметить, что современная методология разработки позволяет оценить значение новых принципов формирования материально-технической и кадровой базы.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPhone'
}
</script>
<style lang="scss" scoped>
body {
  font-family: 'Open Sans', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: calc(100vw / 60);
  line-height: calc(100vw / 36.3636);

  @media screen and (max-width: 375px) {

    font-size: calc(100vw / 31.25);
    line-height: calc(100vw / 18.38);
  }
}

.holder {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iphone {
  //overflow: hidden;
  border: 4px solid rgb(254, 201, 170);
  border-radius: 50px;
  background: linear-gradient(43.72deg, #000000 -15.77%, #363636 91.4%);
  max-width: calc(100vw / 1.71);
  height: calc(100vh / 1.69);
  width: 100%;
  margin: 0 auto;
  color: #FFFFFF;
  padding: calc(100vw / 14.1) calc(100vw / 30) 0;
  position: relative;

  @media screen and (max-width: 375px) {
    //padding-top: 48px;
    padding: calc(100vw / 7.98) calc(100vw / 26.79) 0;
    max-width: calc(100vw / 1.36);
    max-height: calc(100vh / 1.765);
  }
  &-top {
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    z-index: 100;
    @media screen and (max-width: 375px) {
      display: none;
    }
    &-brow {
      display: block;
      margin: 0 auto;
      background: white;
      width: calc(100vw / 2.66);
      height: calc(100vw / 20.57);
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      border: 4px solid rgb(254, 201, 170);
      border-top: none;
    }
  }
  &-content {
    padding: calc(100vw / 32.73)  calc(100vw / 28.8) 0;
    overflow-y: auto;
    height: 100%;
    @media screen and (max-width: 375px) {
      padding: 0 calc(100vw / 15.63) 0 calc(100vw / 23.44);
    }
  }
}

p {
  padding: 0 0 calc(100vw / 60);
}
</style>
