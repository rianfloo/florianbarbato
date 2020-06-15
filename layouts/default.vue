<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--link {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 140.2%;
  letter-spacing: -0.011em;
  text-decoration-line: underline;
  color: #000000;
  width: fit-content;
}

.button--link:visited {
  color: #000000;
}

.margin--top--m {
  margin-top: 0.5em;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.lang--link {
  color: #000000;
}
</style>
