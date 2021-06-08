<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App"
                t="true"
                b="true"
                c="true" />
    <div @click="gotoWhatsApp(13265100994)">test</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted () { },
  methods: {
    gotoWhatsApp (phoneNumber) {
      // zh_cn、
      let language = "id";
      let url = "";
      const t = 1000;
      let hasApp = true;
      if (localStorage.getItem("lang")) {
        const lang = localStorage.getItem("lang");
        switch (lang) {
          case "idn":
            language = "id";
            break;
          case "zh":
            language = "zh_cn";
            break;
          default:
            break;
        }
      }
      url = `https://api.whatsapp.com/send?phone=${phoneNumber}&lang=${language}`;
      setTimeout(() => {
        if (!hasApp) {
          // 没有安装whatsapp
          const r = confirm("您没有安装支付宝，请先安装支付宝!");
          if (r == true) {
            location.href = url;
          }
        } else {
          // 安装whatsapp
          location.href = "https://api.whatsapp.com";
        }
        document.body.removeChild(ifr);
      }, 2000);

      const t1 = Date.now();
      const ifr = document.createElement("iframe");
      ifr.setAttribute("src", url);
      ifr.setAttribute("style", "display:none");
      document.body.appendChild(ifr);
      setTimeout(() => {
        const t2 = Date.now();
        if (!t1 || t2 - t1 < t + 100) {
          hasApp = false;
        }
      }, t);
    }
  }
};
</script>
