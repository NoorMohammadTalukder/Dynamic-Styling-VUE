const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
        console.log( this.boxASelected)
        console.log( this.boxBSelected)
        console.log( this.boxCSelected)
      if (box === 'A') {
        this.boxASelected = true;
        console.log("A", this.boxASelected)
      } else if (box === 'B') {
        this.boxBSelected = true;
        console.log("B", this.boxBSelected)
      } else if (box === 'C') {
        this.boxCSelected = true;
        console.log("C", this.boxCSelected)
      }
    },
  },
});
app.mount("#styling");
