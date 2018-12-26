# [vue-validator](https://github.com/yanhaijing/jslib-base)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/yanhaijing/jslib-base.svg?branch=master)](https://travis-ci.org/yanhaijing/jslib-base)
[![Coveralls](https://img.shields.io/coveralls/yanhaijing/jslib-base.svg)](https://coveralls.io/github/yanhaijing/jslib-base)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/jslib-base)
[![NPM downloads](http://img.shields.io/npm/dm/jslib-base.svg?style=flat-square)](http://www.npmtrends.com/jslib-base)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/yanhaijing/jslib-base.svg)](http://isitmaintained.com/project/yanhaijing/jslib-base "Percentage of issues still open")

English | [简体中文](./README.zh-CN.md)

vue-validator is a VUE plugin for form validate.

**The library that based vue-validator can be shared to the [vue-validator](https://github.com/yesixuan) platform**

## install

```bash
npm install @ignorance/vue-validator --save-dev
```

## usage

```js
// main.js
import validator from '@ignorance/vue-validator'
// ...
Vue.use(validator)
```

```vue
<template>
  <form ref="myForm">
    <input placeholder="姓名" v-model="formData.name" name="name" :class="{ error: $verify('name') }" />
    <input placeholder="电话" v-model="formData.tel" name="tel" :class="{ error: $verify('tel') }" />
    <select name="habit" v-model="formData.habit" :class="{ error: $verify('habit') }">
      <option value="">空</option>
      <option value="1">睡觉</option>
      <option value="2">打豆豆</option>
    </select>
    <OwnerBtn text="保存" v-validate:submit.autoCatch="validateData" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        tel: '',
        habit: ''
      }
    }
  },
  created() {
    this.validateData = {
      ref: 'myForm',
      formData: 'formData',
      fields: [ 'name', 'tel', 'habit' ],
      rules: {
        name: [
          {
            validator: 'required',
            msg: '必填'
          },
          {
            validator: val => /^\d+$/.test(val),
            msg: '只接受数字'
          }
        ],
        tel: [
          {
            validator: 'mobile',
            msg: '请输入正确的手机号码'
          }
        ],
        habit: [
          {
            validator: 'required',
            msg: '必填'
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      const res = this.$refs.myForm.validator()
      console.log('执行 submit 方法')
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  border-color: red;
}
</style>
```


