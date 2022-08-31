const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed:{
    boxAClasses(){
      return {active:this.boxASelected };
    }
  },
  methods: {
    boxSelected(box) {
      console.log(this.boxASelected);
      console.log(this.boxBSelected);
      console.log(this.boxCSelected);
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
        console.log("A", this.boxASelected);
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;;
        console.log("B", this.boxBSelected);
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;;
        console.log("C", this.boxCSelected);
      }
    },
  },
});
app.mount("#styling");
