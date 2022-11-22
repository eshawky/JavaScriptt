Vue.component('Home',
{
    template:`<h1>Hihihihihi</h1>`
})

new Vue
({
    el:'#app',
    data:
    {
        message :'Hello',
        count   :0,
        userName:'Hello',
        ahmed   :true,
        elham     :true,
        text    :'<h1>Hi test text</h1>',
        
        products:
        [
            {name:'toshiba', price:2000, count:10},
            {name:'dell'   , price:4000, count:50},
            {name:'lenovo' , price:5000, count:30},
            {name:'acer'   , price:1000, count:20},
        ],

        players:
        [
            {name:'christiano', place:'madrid'  , goals:21},
            {name:'salah'     , place:'liverpol', goals:50},
            {name:'messi'     , place:'barcelona'  , goals:20},
        ]
        
    }
})