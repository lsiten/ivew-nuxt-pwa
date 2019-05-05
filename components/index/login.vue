<template>
  <div class="lsiten-login">
      <iframe id="loginIframe1" style="width: 321px; height:300px; border: none;" scrolling="no" :src="src"></iframe>
      </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      src: 'http://app.singlewindow.cn/cas/login?_local_login_flag=1&service=http://app.singlewindow.cn/cas/jump.jsp%3FtoUrl%3DaHR0cDovL2FwcC5zaW5nbGV3aW5kb3cuY24vY2FzL29hdXRoMi4wL2F1dGhvcml6ZT9jbGllbnRfaWQ9MTM2NyZyZXNwb25zZV90eXBlPWNvZGUmcmVkaXJlY3RfdXJpPWh0dHAlM2ElMmYlMmZ3d3cuc2luZ2xld2luZG93Lmd4LmNuJTJmY2FzL1JlZGlyZWN0&localServerUrl=http://www.singlewindow.gx.cn&colorA1=fff&colorA2=0,0,0,%200.5&localRegistryUrl=aHR0cHM6Ly9hcHAuc2luZ2xld2luZG93LmNuL3VzZXJzZXJ2ZXIvdXNlci91c2VyRXRwc1JlZ2lzdGVyL2Nob3NlUmd0V2F5&localDeliverParaUrl=/cas/deliver_para'  
    }
  }
}
</script>

<style scoped>
.lsiten-login {
  top: 0;
  right: 0;
  width: 320px;
  height: 290px;
  z-index: 1400;
  overflow: hidden;
  position: absolute;
}
</style>

