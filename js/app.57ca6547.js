(function(e){function t(t){for(var n,a,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-simon-game/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},3955:function(e,t,s){"use strict";var n=s("c611"),i=s.n(n);i.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Simon")],1)},r=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"game-area"},[s("div",{staticClass:"game"},[s("div",{staticClass:"square"},[s("div",{ref:"1",staticClass:"cell",attrs:{id:"red"},on:{click:e.handleSelectedItem}}),s("div",{ref:"2",staticClass:"cell",attrs:{id:"green"},on:{click:e.handleSelectedItem}}),s("div",{ref:"3",staticClass:"cell",attrs:{id:"blue"},on:{click:e.handleSelectedItem}}),s("div",{ref:"4",staticClass:"cell",attrs:{id:"yellow"},on:{click:e.handleSelectedItem}})])]),s("div",{staticClass:"info"},[s("div",{staticClass:"difficulty"},[s("label",[e._v("DIFFICULTY:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.difficulty,expression:"difficulty"}],attrs:{disabled:e.isDisabled},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.difficulty=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"easy"}},[e._v("EASY")]),s("option",{attrs:{value:"normal"}},[e._v("NORMAL")]),s("option",{attrs:{value:"hard"}},[e._v("HARD")])])]),s("div",{staticClass:"level"},[s("span",[e._v("CURRENT LEVEL: "+e._s(e.$data.level))])]),s("div",{staticClass:"control"},[s("button",{attrs:{disabled:e.isDisabled},on:{click:e.startNewGame}},[e._v("START NEW GAME")])]),s("div",{staticClass:"warning"},[s("span",[e._v(e._s(e.$data.message))])])])])},o=[],l=(s("d3b7"),s("96cf"),s("1da1")),c={name:"Simon",data:function(){return{message:"",moves:[],level:1,playerMove:"",moveNumber:0,difficulty:"easy",difficultyDelay:{easy:1500,normal:1e3,hard:400},colors:{red:1,green:2,blue:3,yellow:4},sound:{2:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),1:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),3:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),4:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")},isDisabled:!1}},methods:{random:function(e,t){return Math.round(e+Math.random()*(t-e))},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},startNewGame:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.isDisabled=!0,this.message="THE GAME HAS STARTED",this.moves=[],this.moveNumber=0,this.level=1,t=0;t<this.level;t++)this.moves.push(this.random(1,4));return e.next=8,this.playAllCells();case 8:this.isDisabled=!1,this.message="NOW REPEAT!";case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSelectedItem:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.isDisabled||!(this.moves.length>0)){e.next=27;break}if(this.sound[this.colors[t.target.id]].play(),this.colors[t.target.id]==this.moves[this.moveNumber]){e.next=9;break}this.message="YOU LOSE ON "+this.level+" LEVEL",this.moveNumber=0,this.level=1,this.moves=[],e.next=27;break;case 9:return this.$refs[this.moves[this.moveNumber]].classList.add("shadow"),e.next=12,this.sleep(100);case 12:if(this.$refs[this.moves[this.moveNumber]].classList.remove("shadow"),this.moveNumber!=this.level-1){e.next=26;break}return this.message="YOU WON THE "+this.level+" LEVEL",this.level++,this.moves.push(this.random(1,4)),this.moveNumber=0,this.isDisabled=!0,e.next=21,this.sleep(1e3);case 21:return e.next=23,this.playAllCells();case 23:this.isDisabled=!1,e.next=27;break;case 26:this.moveNumber++;case 27:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),playAllCells:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.level)){e.next=12;break}return this.sound[this.moves[t]].play(),this.$refs[this.moves[t]].classList.add("shadow"),e.next=6,this.sleep(this.difficultyDelay[this.difficulty]/2);case 6:return this.$refs[this.moves[t]].classList.remove("shadow"),e.next=9,this.sleep(this.difficultyDelay[this.difficulty]/2);case 9:t++,e.next=1;break;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},u=c,d=(s("3955"),s("2877")),h=Object(d["a"])(u,a,o,!1,null,"6e70b377",null),m=h.exports,f={name:"App",components:{Simon:m}},p=f,v=(s("5d2c"),Object(d["a"])(p,i,r,!1,null,"7e46b076",null)),b=v.exports;n["a"].config.productionTip=!1,n["a"].config.devtools=!0,new n["a"]({render:function(e){return e(b)}}).$mount("#app")},"5d2c":function(e,t,s){"use strict";var n=s("ac7c"),i=s.n(n);i.a},ac7c:function(e,t,s){},c611:function(e,t,s){}});
//# sourceMappingURL=app.57ca6547.js.map