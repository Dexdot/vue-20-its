import Vue from 'vue';
import SvgSprite from 'vue-svg-sprite';

Vue.use(SvgSprite, {
  url: '/img/sprite.svg',
  class: 'i-icon'
});
