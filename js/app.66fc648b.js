(function(e){function t(t){for(var a,r,o=t[0],s=t[1],u=t[2],d=0,b=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},c={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"container"};function i(e,t,n,i,r,o){var s=Object(a["x"])("Navigation"),u=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])(s),Object(a["h"])("div",c,[Object(a["h"])(u)])])}var r=Object(a["F"])("data-v-4200cb48");Object(a["t"])("data-v-4200cb48");var o={class:"navbar",role:"navigation","aria-label":"main navigation"},s=Object(a["h"])("div",{class:"navbar-brand"},[Object(a["h"])("a",{class:"navbar-item",href:"/"}," JOBS ")],-1),u={id:"navbarBasicExample",class:"navbar-menu"},l={class:"navbar-start"},d=Object(a["g"])(" Home "),b=Object(a["g"])(" Vacancies "),p=Object(a["f"])('<div class="navbar-end" data-v-4200cb48><div class="navbar-item" data-v-4200cb48><div class="buttons" data-v-4200cb48><a class="button is-primary" data-v-4200cb48><strong data-v-4200cb48>Sign up</strong></a><a class="button is-light" data-v-4200cb48> Log in </a></div></div></div>',1);Object(a["r"])();var v=r((function(e,t,n,c,i,v){var j=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",o,[s,Object(a["h"])("div",u,[Object(a["h"])("div",l,[Object(a["h"])(j,{to:"/",class:"navbar-item"},{default:r((function(){return[d]})),_:1}),Object(a["h"])(j,{to:"/vacancies",class:"navbar-item"},{default:r((function(){return[b]})),_:1})]),p])])})),j={};j.render=v,j.__scopeId="data-v-4200cb48";var O=j,f={components:{Navigation:O},data:function(){return{}},methods:{}};f.render=i;var m=f,h=n("6c02"),y=Object(a["h"])("section",{class:"hero"},[Object(a["h"])("div",{class:"hero-body"},[Object(a["h"])("p",{class:"title"}," Find your dream job today "),Object(a["h"])("p",{class:"subtitle"}," Apply for any vacancies below ")])],-1);function g(e,t,n,c,i,r){var o=Object(a["x"])("NewVacancy"),s=Object(a["x"])("Vacancy");return Object(a["q"])(),Object(a["d"])("div",null,[y,i.isAdmin?(Object(a["q"])(),Object(a["d"])(o,{key:0,onSomething:r.handleSubmit},null,8,["onSomething"])):Object(a["e"])("",!0),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(i.vacancies,(function(e){return Object(a["q"])(),Object(a["d"])(s,{onDelete:r.handleDelete,vacancy:e,key:e.id,isAdmin:i.isAdmin},null,8,["onDelete","vacancy","isAdmin"])})),128))])}n("4de4");var q=[{id:1,title:"Frontend dev",company:"something",city:"ssss",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum dolores eveniet voluptatibus qui fugiat, ex magnam quos inventore a?"},{id:2,title:"Nodejs dev",company:"something",city:"ssss",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum dolores eveniet voluptatibus qui fugiat, ex magnam quos inventore a?"},{id:3,title:"Data Scientist",company:"something",city:"ssss",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum dolores eveniet voluptatibus qui fugiat, ex magnam quos inventore a?"}],x=Object(a["F"])("data-v-f1887e54");Object(a["t"])("data-v-f1887e54");var w={class:"box my-4"},_={class:"title is-5"},S=Object(a["h"])("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum dolores eveniet voluptatibus qui fugiat, ex magnam quos inventore a?",-1),D={class:"is-flex is-justify-content-space-between"};Object(a["r"])();var A=x((function(e,t,n,c,i,r){return Object(a["q"])(),Object(a["d"])("div",w,[Object(a["h"])("h1",_,Object(a["z"])(n.vacancy.title),1),Object(a["h"])("span",null,Object(a["z"])(n.vacancy.company),1),Object(a["h"])("p",null,Object(a["z"])(n.vacancy.city),1),S,Object(a["h"])("div",D,[Object(a["h"])("button",{onClick:t[1]||(t[1]=function(e){return r.handleApply(n.vacancy)}),class:"button is-primary mt-4"},"Apply"),n.isAdmin?(Object(a["q"])(),Object(a["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return r.handleDelete(n.vacancy)}),class:"button is-danger mt-4"},"Delete")):Object(a["e"])("",!0)])])})),k={name:"Vacancy",props:{vacancy:{type:Object,required:!0},isAdmin:{type:Boolean,required:!0}},methods:{handleDelete:function(e){this.$emit("delete",e.id)},handleApply:function(e){window.alert("Applied successfully for ".concat(e.title))}}};k.render=A,k.__scopeId="data-v-f1887e54";var V=k,B=(n("a4d3"),n("e01a"),Object(a["F"])("data-v-7ebf5c71"));Object(a["t"])("data-v-7ebf5c71");var F={class:"box box-clr"},P=Object(a["h"])("h1",{class:"title is-5"},"Create a vacancy",-1),C=Object(a["h"])("button",{class:"button is-primary"},"Create",-1);Object(a["r"])();var E=B((function(e,t,n,c,i,r){return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("div",F,[P,Object(a["h"])("form",{onSubmit:t[5]||(t[5]=Object(a["E"])((function(){return r.handleSubmit&&r.handleSubmit.apply(r,arguments)}),["prevent"]))},[Object(a["D"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.title=e}),type:"text",class:"input",placeholder:"Job title"},null,512),[[a["B"],i.form.title]]),Object(a["D"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.company=e}),type:"text",class:"input",placeholder:"Company name"},null,512),[[a["B"],i.form.company]]),Object(a["D"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.city=e}),type:"text",class:"input",placeholder:"City name"},null,512),[[a["B"],i.form.city]]),Object(a["D"])(Object(a["h"])("textarea",{required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.form.description=e}),type:"text",class:"input",placeholder:"Job Description"},null,512),[[a["B"],i.form.description]]),C],32)])])})),I=n("5530"),J=(n("d3b7"),n("25f0"),{data:function(){return{form:{title:"",company:"",city:"",description:""}}},methods:{handleSubmit:function(){for(var e in this.$emit("something",Object(I["a"])(Object(I["a"])({},this.form),{},{id:(new Date).getTime.toString()})),this.form)this.form[e]=" "}}});n("7f5a");J.render=E,J.__scopeId="data-v-7ebf5c71";var L=J,N={components:{NewVacancy:L,Vacancy:V},data:function(){return{vacancies:q,isAdmin:!0}},methods:{handleSubmit:function(e){this.vacancies.unshift(e)},handleDelete:function(e){this.vacancies=this.vacancies.filter((function(t){return t.id!==e}))}}};N.render=g;var z=N,M=Object(a["F"])("data-v-63d72c03");Object(a["t"])("data-v-63d72c03");var U=Object(a["h"])("h1",null,"vacancies",-1);Object(a["r"])();var T=M((function(e,t,n,c,i,r){return Object(a["q"])(),Object(a["d"])("div",null,[U])})),H={};H.render=T,H.__scopeId="data-v-63d72c03";var $=H,G=Object(a["F"])("data-v-6ccd8ea3");Object(a["t"])("data-v-6ccd8ea3");var K=Object(a["h"])("h1",null,"Hey there",-1);Object(a["r"])();var Q=G((function(e,t,n,c,i,r){return Object(a["q"])(),Object(a["d"])("div",null,[K,(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(i.posts,(function(e){return Object(a["q"])(),Object(a["d"])("div",{class:"box",key:e.id},[Object(a["h"])("h1",null,Object(a["z"])(e.title),1)])})),128))])})),R={data:function(){return{posts:[]}},created:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.posts=t}))}};R.render=Q,R.__scopeId="data-v-6ccd8ea3";var W=R,X=(n("7d05"),[{path:"/",component:z},{path:"/vacancies",component:$},{path:"/posts",component:W}]),Y=Object(h["a"])({history:Object(h["b"])(),routes:X}),Z=Object(a["c"])(m);Z.use(Y),Z.mount("#app")},"73c1":function(e,t,n){},"7d05":function(e,t,n){},"7f5a":function(e,t,n){"use strict";n("73c1")}});
//# sourceMappingURL=app.66fc648b.js.map