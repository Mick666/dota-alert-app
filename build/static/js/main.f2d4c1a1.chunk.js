(this["webpackJsonpdota-alert-app"]=this["webpackJsonpdota-alert-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n(45)},24:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(12),r=n.n(s),i=(n(24),n(2)),c=n.n(i),p=n(13),u=n(14),l=n(15),d=n(18),m=n(17),w=(n(26),n(27),n(16)),h=n.n(w),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={clock:"Waiting for a game"},e.callBackendAPI=Object(p.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/express_backend");case 2:if(t=e.sent,n=t.data,200===t.status){e.next=6;break}throw Error(n.message);case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),e.runes=new Audio("/havemoney.mp3"),e.sound=[new Audio("/helpornot.mp3"),new Audio("/biteass.mp3"),new Audio("/biteass-2.mp3"),new Audio("/shutnoise.mp3"),new Audio("/suicide.mp3"),new Audio("/letsgoalready.mp3"),new Audio("/blackjack.mp3"),new Audio("/5dollars.mp3"),new Audio("/baby.mp3"),new Audio("/drugs.mp3"),new Audio("/grease.mp3"),new Audio("/hell.mp3"),new Audio("/idea.mp3"),new Audio("/peasants.mp3"),new Audio("/runagain.mp3"),new Audio("/shutup.mp3"),new Audio("/skintube.mp3"),new Audio("/slow.mp3"),new Audio("/stupid.mp3"),new Audio("/suck.mp3"),new Audio("/violence.mp3")],e.played=!1,e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval((function(){return e.loadData()}),1e3)}},{key:"loadData",value:function(){var e=this;this.callBackendAPI().then((function(t){if("Waiting for a game"!==t.express[2])if(e.setState({clock:"".concat(t.express[0].toString().padStart(2,"0"),":").concat(t.express[1].toString().padStart(2,"0"))}),(t.express[0]+1)%5!==0||44!==t.express[1]&&43!==t.express[1]&&45!==t.express[1]||e.played)if(44!==t.express[1]&&43!==t.express[1]&&45!==t.express[1]||e.played)0!==t.express[1]&&1!==t.express[1]&&2!==t.express[1]||(e.played=!1);else{var n=Math.floor(21*Math.random());console.log(n),e.sound[n].play(),e.played=!0}else e.runes.play(),e.played=!0;else e.setState({clock:"Waiting for a game"})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",{id:"ceiling"},"This is invisible text to keep the image from moving down"),o.a.createElement("div",{className:"clock"},o.a.createElement("h1",null,"Dota 2 Camp Stacking and Bounty Rune reminder"),o.a.createElement("p",{className:"App-intro"},this.state.clock)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f2d4c1a1.chunk.js.map