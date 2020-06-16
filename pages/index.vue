<template>
  <div>
    <div class="lang--link">
      <nuxt-link
        v-if="$i18n.locale !== 'en'"
        class="button--link"
        :to="switchLocalePath('en')"
      >
        ENG
      </nuxt-link>
      <nuxt-link
        v-if="$i18n.locale !== 'fr'"
        class="button--link"
        :to="switchLocalePath('fr')"
      >
        FR
      </nuxt-link>
    </div>
    <div class="container">
      <div>
        <h1 class="title">
          Florian Barbato
        </h1>
        <h2 class="subtitle">
          {{ $t('subtitle') }}
        </h2>
        <p class="body--text">
          {{ $t('description') }}
        </p>
        <div class="links">
          <a
            href="https://dribbble.com/florianbarbato"
            target="_blank"
            class="button--link margin--top--m"
          >
            Dribbble
          </a>
          <a
            href="https://github.com/rianfloo"
            target="_blank"
            class="button--link margin--top--m"
          >
            GitHub
          </a>
          <a
            href="mailto:florian@florianbarbato.com"
            target="_blank"
            class="button--link margin--top--m"
          >
            florian@florianbarbato.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.lang--link {
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 2em;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  padding: 60px;
  display: flex;
  justify-content: start;
  text-align: left;
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 414px) {
    padding: 16px;
  }
}

.body--text {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 140.2%;
  letter-spacing: -0.011em;
  color: #000000;
  padding-top: 2em;
  width: 650px;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
}

.title {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 47px;
  letter-spacing: -0.02em;
  color: #000000;
}

.subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 140.2%;
  letter-spacing: -0.011em;
  color: #000000;
}

.links {
  padding-top: 2em;
  display: flex;
  justify-content: start;
  flex-direction: column;
}
</style>
