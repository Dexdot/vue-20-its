<template>
  <div :class="[ 'page', { 'js-firefox': isFirefox } ]">
    <div class="birthday-head">
      <div class="container--lg">
        <header class="birthday__header">
          <router-link
            class="birthday__logo"
            to="/"
          >
            <!-- <img
              src="./svg/logo.svg"
              alt="its.logo"
            > -->
          </router-link>
          <div class="birthday__icons">
            <button
              v-for="n in 5"
              :key="n"
              class="birthday__icon"
              type="button"
            >
              <!-- <img
                src="./svg/heart.svg"
                alt="<3"
                class="i-heart"
              > -->
              <!-- <img
                :src="require(`./svg/doom${n}.svg`)"
                alt="DOOM"
                class="birthday__icon-hover"
              /> -->
            </button>
          </div>
        </header>

        <div class="birthday__lines">
          <div
            v-for="n in 2"
            :key="n"
            class="birthday__line"
          ></div>
        </div>

      </div>
    </div>

    <div class="container--lg">
      <div class="birthday">
        <div class="birthday__content">
          <div class="birthday__content-block birthday__content-block--left">
            <div class="overflow-wrap">
              <h1 class="birthday__title">
                Birthday<br />
                Party
              </h1>
            </div>
            <div class="overflow-wrap">
              <p class="birthday__subtitle">30 — 09<span>/ 1998</span></p>
            </div>
            <div class="overflow-wrap birthday__year-wrap">
              <div class="birthday__year">
                <div class="overflow-wrap"><span>2</span></div>
                <div class="overflow-wrap"><span>0</span></div>
              </div>
            </div>
          </div>
          <div class="birthday__content-block birthday__content-block--right">
            <!-- <img
              class="skull-knife"
              src="./svg/skull-knife.svg"
              alt=""
            /> -->
            <p class="birthday__text-title birthday__text--italic">
              We've known each other for so long<br />
              Your heart's been aching but you're too shy to say it<br />
              Inside we both know what's been going on<br />
              We know the game and we're gonna play it<br />
            </p>
            <p class="birthday__text">
              В 1998 году, когда началась история
              <span class="birthday__text--outline">
                its.agency
                <!-- <img
                  src="./svg/text-outline.svg"
                  alt=""
                /> -->
              </span>, возраст компании мало что значил. Бизнес взлетал и рушился (или
              горел вместе с офисом) за один день, в 2-3 года компания уже была
              стариком, который то ли чудом уцелел, то ли был никому не нужен:
              ни конкурентам, ни бандитам.
            </p>
            <p class="birthday__text">
              Сегодня возраст снова не показатель, и молодые стартапы двигают
              старых игроков рынка, не успевающих развернуть свою инфраструктуру
              по ветру. Писать возраст компании на сайте
              <span class="birthday__text--wave">
                становится моветоном.
                <!-- <img
                  src="./svg/text-wave.svg"
                  alt=""
                /> -->
              </span>
            </p>
            <p class="birthday__text birthday__text--italic birthday__text--line birthday__text--dark">
              И все же 20 лет, и мы этим очень гордимся. Потому что для нас
              возраст — это не вопрос статуса и опыта, хотя опыт за 20 лет
              накопился, скажем так, разнообразный. 20 лет — это больше 100
              человек, которые приходили, кто на 3 дня, а кто и на десять лет, и
              вместе создавали цифровое агентство, по которому сегодня можно
              изучать историю становления диджитала в России.
            </p>
            <p class="birthday__text">
              За 20 лет мы прошли интересный путь от энтузиаста-одиночки до
              агентства в кирпичном лофте. Неизменными остались только любовь
              основателя к Депеш Мод и наше чувство юмора, не сразу понятное
              новичкам (дурачкам).
            </p>
            <p class="birthday__text">
              На юбилеях часто говорят, что это только начало, но мы же знаем,
              как быстро развиваются технологии и сметают тех, кто только
              начинает. Мы не знаем, что ждет нас в будущем, и будут ли еще
              пользоваться сайтами через пять лет.
              <span class="birthday__text--dark birthday__text--italic">
                Но мы знаем, что если бизнес переедет из веба в VR, где-то на
                голограммной вывеске будет красоваться виртуальный
                <span class="birthday__text--underline">
                  копирайт its.agency
                  <!-- <img
                    src="./svg/text-underline.svg"
                    alt=""
                  /> -->
                </span>
              </span>
            </p>

            <div class="birthday__link-wrap">
              <router-link
                class="birthday__link"
                to="team"
              >
                Команда мечты
              </router-link>
              <!-- <img
                src="./svg/prayers.svg"
                alt="Someone who hear your prayers"
              /> -->
              <svg
                v-svg
                symbol="i-rose"
              ></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageMain",
  data: () => ({
    isFirefox: window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
  })
};
</script>

<style lang="sass" scoped>
.page
  color: $grey
  height: 100vh
  overflow: hidden

  &::-webkit-scrollbar-thumb
    background-color: $grey

  @media (max-width: 980px)
    height: auto
    overflow: unset

.container--lg
  margin-right: auto
  margin-left: auto
  padding-left: 5.6%
  padding-right: 5.6%

  @media (max-width: 480px)
    padding-left: 5%
    padding-right: 5%

.i-heart
  width: 20px
  height: auto

// Header
.birthday
  &-head
    background: $b
    width: 100%

  &__header
    padding-top: 56px
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    margin-bottom: 16px

  &__logo
    transition: $trs
    &:hover
      opacity: 0.8
    svg
      fill: $grey

    img, svg
      +ff('width', (480px: 90px, 1300px: 118px))
      +ff('height', (480px: 20px, 1300px: 26px))

    @media (min-width: 1900px)
      width: auto
    
  &__icons
    svg, img
      @media (min-width: 1900px)
        width: 24px
      @media (max-width: 980px)
        width: 18px
      @media (max-width: 480px)
        width: 16px
  
  &__icon
    display: inline-block
    vertical-align: middle
    margin-left: 16px

    position: relative
    @media (max-width: 480px)
      margin-left: 8px

    .i-heart
      transition: $trs

    &-hover
      position: absolute
      left: 50%
      top: 0
      transform: translate(-50%, 0)
      pointer-events: none
      user-select: none
      
      transition: $trs
      opacity: 0

    &--head

      .i-heart
        opacity: 0 !important

      .birthday__icon-hover
        opacity: 1

  &__lines
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
  
  &__line
    width: 50%
    height: 3px

    transform-origin: 0% 0
    background: $grey

    &:nth-child(1)
      margin-right: 40px
      @media (max-width: 980px)
        margin-right: 0

// Content
.birthday
  padding-top: 16px
  padding-bottom: 16px
  height: calc(100vh - 105px) // 105px - высота шапки

  @media (min-width: 1900px)
    padding-top: 32px

  @media (max-width: 980px)
    height: auto

  @media (max-width: 480px)
    padding-top: 32px

.birthday__content
  width: 100%
  height: 100%
  display: flex
  flex-direction: row
  justify-content: space-between

  @media (max-width: 980px)
    position: relative
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start

.birthday__content-block
  width: calc(50% - 20px)

  @media (max-width: 980px)
    width: 100%

.birthday__content-block--left
  display: flex
  flex-direction: column

.birthday__content-block--right
  max-height: 100%
  overflow-y: auto
  overflow-x: hidden

  &::-webkit-scrollbar
    display: none
    opacity: 0
    visibility: hidden
  -ms-overflow-style: none

  @media (max-width: 980px)
    overflow: unset

// Typo
.birthday__title
  +ff('font-size', (480px: 56px, 980px: 90px, 1400px: 108px, 1920px: 152px, 2550px: 208px))
  +b
  line-height: 1.02
  margin-bottom: 16px

.birthday__subtitle
  +md
  +ff('font-size', (480px: 14px, 1300px: 16px, 1920px: 18px, 2550px: 20px))
  letter-spacing: 0.02em
  opacity: 0.5

  margin: 0

  span
    margin-left: 16px

.birthday__year-wrap
  margin-top: auto

.birthday__year span
  display: inline-block

.birthday__year
  +ff('font-size', (480px: 120px, 1440px: 288px, 1920px: 344px, 2550px: 456px))
  +md
  line-height: 1.21

  margin: 0
  display: flex
  flex-direction: row
  align-items: flex-start

  @media (max-width: 980px)
    margin-top: 32px
    margin-bottom: 64px

.birthday__text
  +md
  line-height: 1.9
  letter-spacing: 0.02em
  color: $grey
  font-size: 16px

  margin-bottom: 48px

  @media (min-width: 1900px)
    font-size: 18px

  @media (max-width: 480px)
    margin-bottom: 32px

  &--italic
    font-family: Spectral, serif
    font-weight: 400
    font-style: italic
    font-size: 20px
    line-height: 1.5
    letter-spacing: 0

    @media (min-width: 1900px)
      font-size: 22px

  &--line
    margin-top: 64px
    margin-bottom: 64px
    padding-left: 48px
    position: relative

    @media (max-width: 480px)
      padding-left: 32px

    &::before
      content: ''
      position: absolute
      top: 0
      bottom: 0
      left: 0

      background: $grey

      height: 100%
      width: 3px

      @media (max-width: 480px)
        width: 2px

  &--dark
    opacity: 0.5

  &--through
    text-decoration: line-through

  &--outline
    white-space: nowrap
    position: relative

    img
      width: 9em
      height: auto

      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

  &--wave
    white-space: nowrap
    position: relative

    img
      position: absolute
      bottom: -16px
      left: 0
      right: 0

  &--underline
    white-space: nowrap
    position: relative

    img
      position: absolute
      bottom: -8px
      left: 0
      right: 0

.birthday__text-title
  +ff('font-size', (480px: 20px, 1300px: 24px, 1900px: 26px, 2550px: 28px))
  line-height: 1.4
  
  margin-bottom: 72px

  @media (max-width: 480px)
    margin-bottom: 56px

.birthday__link-wrap
  margin-top: 8px
  margin-bottom: 16vh

  @media (max-width: 480px)
    margin-top: 48px

  img
    margin-left: 32px
    width: 88px
    height: auto

    transform: translate(0, 16%)

    @media (max-width: 480px)
      margin-left: 16px
      width: 56px

.birthday__link
  display: block
  +b
  color: $grey
  &:focus,
  &:visited,
  &:active
    color: $grey

  font-size: 36px
  letter-spacing: 0.02em
  +underbasic
  padding-bottom: 12px

  &::after
    border-color: $grey
    border-bottom-width: 3px

  &:hover
    color: $grey
    &::after
      transform: scale(1, 1)
      transform-origin: left top

  @media (max-width: 1400px)
    font-size: 24px

// Skull
.skull-knife
  display: block
  margin-left: auto
  margin-top: 20px
  margin-bottom: 26vh
  width: 80px
  height: 104px

  opacity: 0.6

  @media (min-width: 1900px)
    width: 108px
    height: auto

  @media (max-width: 980px)
    position: absolute
    top: 0
    right: 0

  @media (max-width: 480px)
    display: none

// Firefox
.js-firefox

  .birthday__content
    overflow-x: hidden

  .birthday__content-block--right
    margin-right: -17px
    width: calc(50% - 2px)

    @media (max-width: 980px)
      width: 100%
      margin-right: 0

</style>

