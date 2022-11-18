# nuxt-i18n-tc2sc

## Install

Prerequisites: [Nuxt@^2](https://nuxtjs.org/), [@nuxtjs/i18n@^7](https://i18n.nuxtjs.org/)

## Setup

1. Add `nuxt-i18n-tc2sc` dependency to your project

2. Config nuxt.config.js

```js
export default{
    ...

    modules: [
        "@nuxtjs/i18n",
        "nuxt-i18n-tc2sc"
    ],

    i18n:{
        vueI18nLoader: true, //must be true
        locales: ['tc', 'sc'],
    }
    ...
}
```

## Example

In some vue page
```vue
<i18n>
{
  "tc": {
    "hello": "你好嗎?"
  }
}
</i18n>

<template>
  <div>
    <h1>{{ $t('hello') }}</h1>
  </div>
</template>
```

It will be converted to "你好吗?" when locale is "sc"



