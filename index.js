//Vueインスタンス作成
const app1 = new Vue({
     //オプションオブジェクト(データやメソッドをインスタンスに渡す)
    el: "#ex1",
    data:{
        luffy:"海賊王",
    },
});

const app2 = new Vue({
    //オプションオブジェクト(データやメソッドをインスタンスに渡す)
   el: "#ex2",
   data:{
       url:"chopper.html",
       devil:"悪魔の実",
   },
});
