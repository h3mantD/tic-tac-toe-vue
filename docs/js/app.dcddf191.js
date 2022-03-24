(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],l=0,v=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&v.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ab53450c"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"19f9":function(e,t,r){"use strict";r("4fdf")},"3cae":function(e,t,r){"use strict";r("9c3d")},"4fdf":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"tictactoe-board"},a={key:0,class:"game-over-text"};function c(e,t,r,c,i,s){var u=Object(n["u"])("cell");return Object(n["p"])(),Object(n["e"])("div",o,[(Object(n["p"])(),Object(n["e"])(n["a"],null,Object(n["t"])(3,(function(e,t){return Object(n["f"])("div",null,[(Object(n["p"])(),Object(n["e"])(n["a"],null,Object(n["t"])(3,(function(e,r){return Object(n["f"])("div",null,[Object(n["g"])(u,{onClick:function(e){return s.performMove(r,t)},value:i.board.cells[r][t]},null,8,["onClick","value"])])})),64))])})),64)),i.gameOver?(Object(n["p"])(),Object(n["e"])("div",a,Object(n["w"])(i.gameOverText),1)):Object(n["d"])("",!0)])}var i=r("d4ec"),s=r("bee2"),u=function(){function e(){Object(i["a"])(this,e),this.cells=[["","",""],["","",""],["","",""]]}return Object(s["a"])(e,[{key:"doMove",value:function(e,t,r){return""===this.cells[e][t]&&(this.cells[e][t]=r,!0)}},{key:"getScore",value:function(){var e=0;return this.playerHas3InARow("x")&&(e-=100),this.playerHas3InARow("o")&&(e+=100),e}},{key:"playerHas3InARow",value:function(e){for(var t=0;t<3;t++)if(this.cells[0][t]===e&&this.cells[1][t]===e&&this.cells[2][t]===e)return!0;for(var r=0;r<3;r++)if(this.cells[r][0]===e&&this.cells[r][1]===e&&this.cells[r][2]===e)return!0;return this.cells[0][0]===e&&this.cells[1][1]===e&&this.cells[2][2]===e||this.cells[1][0]===e&&this.cells[1][1]===e&&this.cells[0][2]===e}},{key:"isGameOver",value:function(){return 0===this.getPossibleMoves().length||this.playerHas3InARow("x")||this.playerHas3InARow("o")}},{key:"clone",value:function(){for(var t=new e,r=0;r<3;r++)for(var n=0;n<3;n++)t.cells[r][n]=this.cells[r][n];return t}},{key:"getPossibleMoves",value:function(){for(var e=[],t=0;t<3;t++)for(var r=0;r<3;r++)""===this.cells[t][r]&&e.push({x:t,y:r});return e}}]),e}(),l={key:0};function f(e,t,r,o,a,c){return Object(n["p"])(),Object(n["e"])("div",{onClick:t[0]||(t[0]=function(t){return e.$emit("click")}),class:"cell"},[""!==r.value?(Object(n["p"])(),Object(n["e"])("span",l,Object(n["w"])(r.value),1)):Object(n["d"])("",!0)])}var v={props:{value:String}};r("3cae");v.render=f;var d=v,p={components:{cell:d},data:function(){return{gameOver:!1,gameOverText:"",board:new u}},methods:{performMove:function(e,t){if(!this.gameOver&&this.board.doMove(e,t,"x")){if(this.$forceUpdate(),this.board.isGameOver())return this.gameOver=!0,void(this.gameOverText=this.board.playerHas3InARow("x")?"You win!":"Draw");var r=this.minimax(this.board.clone(),"o");this.board.doMove(r.move.x,r.move.y,"o"),this.board.isGameOver()&&(this.gameOver=!0,this.gameOverText=this.board.playerHas3InARow("o")?"You lose!":"Draw"),this.$forceUpdate()}},minimax:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e.isGameOver())return{score:e.getScore()+r,move:null};for(var n="o"===t?-1e4:1e4,o=null,a=e.getPossibleMoves(),c=0;c<a.length;c++){var i=a[c],s=e.clone();s.doMove(i.x,i.y,t);var u=this.minimax(s,"x"===t?"o":"x",r+1).score;("o"===t&&u>n||"x"===t&&u<n)&&(n=u,o=i)}return{score:n,move:o}}}};r("19f9");p.render=c;var b=p,h=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02"));function m(e,t,r,n,o,a){return null}var O={};O.render=m;var y=O,j=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],g=Object(h["a"])({history:Object(h["b"])(),routes:j}),w=g,x=r("5502"),k=Object(x["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(b).use(k).use(w).mount("#app")},"9c3d":function(e,t,r){}});
//# sourceMappingURL=app.dcddf191.js.map