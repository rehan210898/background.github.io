
var _ = require('lodash');

var ar =[1,2,3,4,5,6,7,8,9];
console.log(ar);
console.log('answer:',_.without(ar,3));
        function genSquare() {
            for(var i=0;i<=125;i++){
                var color =["#B5B1B2","#ADA9B7","#A9AFD1","#A1CDF4","#7C809B","#157A6E","#499F68","#77B28C","#C2C5BB","#B4654A"];
            var elem = document.createElement('div');
            document.body.appendChild(elem);
            var div = document.getElementsByTagName('div')[i];
            var a = Math.round((Math.random()*150)) +50;
            div.setAttribute('style', 'position:absolute;top:' + (Math.round(Math.random()*window.innerHeight)) + 'px;left:' + (Math.round(Math.random()*window.innerWidth))+ 'px;background:'+(color[Math.round(Math.random()*10)])+';height:'+a+'px;width:'+a+'px;box-shadow:0px 0px 50px black');

            }
            
        }
