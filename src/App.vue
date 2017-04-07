<template>
  <div class="main">
    <Headers />
      <router-view></router-view>
    <Footers />
  </div>
</template>

<script>
import Headers from 'components/Header'
import Footers from 'components/Footer'

export default {
  name: 'app',
  components: {
    Headers,
    Footers
  }
}
</script>
