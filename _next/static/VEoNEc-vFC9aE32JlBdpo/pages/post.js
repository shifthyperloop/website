(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EhLH:function(t,e,n){"use strict";n.r(e);n("ln6h"),n("O40h"),n("kOwS"),n("MX0m");var o=n("q1tI"),s=n.n(o);n("5Yp1"),n("YFqc"),n("zgjP"),n("atmB"),s.a.createElement},MDTK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n("EhLH")}])},O40h:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n("eVuF"),s=n.n(o);function i(t,e,n,o,i,r,a){try{var c=t[r](a),p=c.value}catch(l){return void n(l)}c.done?e(p):s.a.resolve(p).then(o,i)}function r(t){return function(){var e=this,n=arguments;return new s.a(function(o,s){var r=t.apply(e,n);function a(t){i(r,o,s,a,c,"next",t)}function c(t){i(r,o,s,a,c,"throw",t)}a(void 0)})}}},atmB:function(t,e,n){"use strict";n.r(e);var o=n("ln6h"),s=n.n(o),i=n("O40h"),r=n("kOwS"),a=n("MX0m"),c=n.n(a),p=n("q1tI"),l=n.n(p),u=n("nOHt"),f=n("YFqc"),d=n.n(f),x=n("5Yp1"),w=n("o4p3"),m=n("zgjP"),h=n.n(m),b=l.a.createElement,v=function(t){var e=t.title,n=t.pid,o=t.picture.url,s=void 0===o?"":o,i=t.description;return b(l.a.Fragment,null,b(d.a,{href:"/post/[pid]",as:"/post/".concat(n)},b("a",{className:"jsx-257759373 post"},b("img",{src:w.a+s,alt:e,className:"jsx-257759373 post-image"}),b("div",{className:"jsx-257759373 post-text"},b("h2",{className:"jsx-257759373 post-title"},e),b("p",{className:"jsx-257759373 post-description"},i,b("br",{className:"jsx-257759373"}),b("br",{className:"jsx-257759373"}))))),b(c.a,{id:"257759373"},[".post.jsx-257759373{background-size:cover;background-position:center center;height:300px;-webkit-flex:1 1 500px;-ms-flex:1 1 500px;flex:1 1 500px;margin:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;overflow:hidden;}",".post.jsx-257759373:first-child{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}",".post-image.jsx-257759373{width:100%;height:100%;object-fit:cover;object-position:center center;}",".post-text.jsx-257759373{background-color:#0009;padding:16px 32px;position:absolute;top:calc(100% - 60px);left:0;right:0;bottom:0;-webkit-transition:top 0.2s;transition:top 0.2s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".post-title.jsx-257759373{margin:16px auto;white-space:pre;min-height:2rem;overflow:hidden;text-overflow:ellipsis;width:100%;}",".post-description.jsx-257759373{margin:0;text-align:justify;padding:0 calc(50% - 300px);overflow-y:hidden;max-height:186px;mix-blend-mode:screen;position:relative;}",".post-description.jsx-257759373:after{position:absolute;content:'';left:0;right:0;bottom:0;height:30px;background:linear-gradient(transparent,#000);}",".post.jsx-257759373:hover>.post-text.jsx-257759373{top:0;}"]))},j=function(t){var e=t.posts;Object(u.useRouter)();return b(x.a,{url:"https://www.shifthyperloop.com/posts",title:"Shift Hyperloop | Posts"},b("div",{className:"jsx-3853851781 posts page-container"},e.map(function(t){return b(v,Object(r.a)({key:t.title},t))})),b(c.a,{id:"3853851781"},[".posts.jsx-3853851781{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;padding:16px;}"]))};j.getInitialProps=Object(i.a)(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()("https://cms.shifthyperloop.com/posts?_sort=published:desc");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",{posts:n.map(function(t){return{pid:t.id,title:t.title,picture:t.picture,description:t.description}})});case 7:case"end":return t.stop()}},t)})),e.default=j},kOwS:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("UXZV"),s=n.n(o);function i(){return(i=s.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}},"m/Gl":function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return e=e||{},new Promise(function(n,o){var s=new XMLHttpRequest,i=[],r=[],a={},c=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:c,headers:{keys:function(){return i},entries:function(){return r},get:function(t){return a[t.toLowerCase()]},has:function(t){return t.toLowerCase()in a}}}};for(var p in s.open(e.method||"get",t,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,e,n){i.push(e=e.toLowerCase()),r.push([e,n]),a[e]=a[e]?a[e]+","+n:n}),n(c())},s.onerror=o,s.withCredentials="include"==e.credentials,e.headers)s.setRequestHeader(p,e.headers[p]);s.send(e.body||null)})}},o4p3:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o="https://cms.shifthyperloop.com"},zgjP:function(t,e,n){t.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["MDTK",0,1]]]);