//Vueインスタンス作成
const app1 = new Vue({
     //オプションオブジェクト(データやメソッドをインスタンスに渡す)
    el: "#ex1",
    data:{
        luffy:"海賊王",
    },
});

const app2 = new Vue({
   el: "#ex2",
   data:{
       url:"chopper.html",
       devil:"悪魔の実",
   },
});

const app3 = new Vue({
    el: "#ex3",
    data:{
        four_emperrors:[
            "シャンクス","白ひげ","カイドウ","ビックマム"
        ],
    },
});


const app4 = new Vue({
    el: "#ex4",
    data:{
        devil_fruits:{
            luffy:"ゴムゴムの実",
            chopper:"ヒトヒトの実",
            robin:"ハナハナの実",
        },
    },
});
