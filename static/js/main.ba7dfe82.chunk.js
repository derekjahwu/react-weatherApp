(this.webpackJsonpreactweatherapp=this.webpackJsonpreactweatherapp||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(5),s=c.n(i),r=(c(10),c(4),c(2)),o=c(0);var j=function(){var e=Object(a.useState)("Berlin"),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),j=s[0],l=s[1],d=Object(a.useState)(""),h=Object(r.a)(d,2),u=h[0],b=h[1],f=Object(a.useState)(""),O=Object(r.a)(f,2),m=O[0],y=O[1],p=Object(a.useState)(""),x=Object(r.a)(p,2),v=x[0],N=x[1],S=Object(a.useState)(""),g=Object(r.a)(S,2),w=g[0],_=g[1],k=Object(a.useState)(""),C=Object(r.a)(k,2),F=C[0],q=C[1],T=Object(a.useState)((function(){fetch("https://api.weatherapi.com/v1/forecast.json?key=dbe5af8d5484472c84d03742210311&q=berlin&days=7&aqi=no&alerts=no\n        ").then((function(e){return e.json()})).then((function(e){M(Math.floor(e.current.feelslike_f)),l("".concat(e.location.name,", ").concat(e.location.country)),y(e.forecast.forecastday[0].date),b(e.current.condition.icon),N(e.current.humidity),q(e.current.condition.text),_(e.forecast.forecastday[0].day.daily_chance_of_rain)}))})),B=Object(r.a)(T,2),I=B[0],M=B[1],P="https://api.weatherapi.com/v1/forecast.json?key=dbe5af8d5484472c84d03742210311&q=".concat(c,"&days=7&aqi=no&alerts=no\n    ");return Object(o.jsxs)("div",{className:I>72?"application warm":"application cool",children:[Object(o.jsx)("h1",{className:"date",children:m}),Object(o.jsx)("h3",{className:"country",children:j}),Object(o.jsxs)("div",{className:"imageDiv",children:[Object(o.jsx)("img",{className:"image",src:u}),Object(o.jsx)("h3",{className:"text",children:F})]}),Object(o.jsxs)("div",{className:"altInfo",children:[Object(o.jsxs)("div",{className:"humidity",children:[Object(o.jsx)("h5",{className:"humidityText",children:"Humidity"}),Object(o.jsx)("h3",{children:v})]}),Object(o.jsxs)("div",{className:"rainSnow",children:[Object(o.jsx)("h5",{className:"rainText",children:"Rain/Snow"}),Object(o.jsx)("h3",{children:w})]})]}),Object(o.jsxs)("h3",{className:"weather",children:[I,"\xb0F"]}),Object(o.jsx)("input",{className:"inputCity",placeholder:"Search for a City",type:"text",onKeyPress:function(e){"Enter"===e.key&&fetch(P).then((function(e){return e.json()})).then((function(e){e?(M(Math.floor(e.current.feelslike_f)),l("".concat(e.location.name,", ").concat(e.location.country)),y(e.forecast.forecastday[0].date),b(e.current.condition.icon),N(e.current.humidity),_(e.forecast.forecastday[0].day.daily_chance_of_rain)):alert("city not found")}))},onChange:function(e){return n(e.target.value)}})]})};var l=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{})})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),d()},4:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.ba7dfe82.chunk.js.map