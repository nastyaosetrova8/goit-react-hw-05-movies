"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[556],{9099:function(n,r,e){e.d(r,{Mn:function(){return s},jp:function(){return d},lS:function(){return p},tN:function(){return l}});var t,o,i,a,c=e(168),u=e(6444),s=u.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  gap: 24px;\n  margin-bottom: 24px;\n"]))),p=u.ZP.div(o||(o=(0,c.Z)(["\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  box-shadow: 0px 6px 5px #888, 0px 0 5px #888;\n  padding: 0 16px;\n  color: #040464;\n  font-size: 16px;\n"]))),d=u.ZP.button(i||(i=(0,c.Z)(["\n  padding: 8px 16px;\n  margin-bottom: 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  color: white;\n  background-color: #040464;\n  cursor: pointer;\n\n  &.hover,\n  &.focus {\n    background-color: #282881;\n  }\n"]))),l=u.ZP.form(a||(a=(0,c.Z)(["\ndisplay: flex;\nalign-items: center;\n  input {\n    width: 300px;\n    height: 28px;\n    font-size: 16px;\n  }\n\n  button {\n    padding: 10px 16px;\n    border-radius: 4px;\n    border: none;\n    color: white;\n    background-color: #040464;\n    cursor: pointer;\n  }\n"])))},1598:function(n,r,e){e.d(r,{$0:function(){return s},h4:function(){return p},w2:function(){return d}});var t,o,i,a=e(168),c=e(6444),u=e(1087),s=c.ZP.div(t||(t=(0,a.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 24px;\n"]))),p=c.ZP.header(o||(o=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n  box-shadow: 0 6px 6px -6px #222;\n\n  > nav {\n    display: flex;\n  }\n"]))),d=(0,c.ZP)(u.OL)(i||(i=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: #040464;\n  }\n"])))},2556:function(n,r,e){e.r(r),e.d(r,{default:function(){return v}});var t=e(5861),o=e(9439),i=e(7757),a=e.n(i),c=e(966),u=e(1087),s=e(7689),p=e(9099),d=e(1598),l=e(184),x=function(n){var r=n.movie;return(0,l.jsxs)(d.$0,{children:[(0,l.jsxs)(p.Mn,{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(r.poster_path),alt:r.title}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:[r.title," (",r.release_date.substring(0,4),")"]}),(0,l.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,l.jsx)("h3",{children:"OverView"}),(0,l.jsx)("p",{children:r.overview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("span",{children:r.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,l.jsxs)(p.lS,{children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"cast",children:" Cast "})}),(0,l.jsxs)("li",{children:[" ",(0,l.jsx)(u.rU,{to:"reviews",children:" Reviews "})]})]})]}),(0,l.jsx)(s.j3,{})]})},f=e(2791),h=e(4390),v=function(){var n,r,e=(0,f.useState)(!1),i=(0,o.Z)(e,2),d=i[0],v=i[1],b=(0,f.useState)(null),m=(0,o.Z)(b,2),g=m[0],j=m[1],w=(0,f.useState)(null),Z=(0,o.Z)(w,2),k=Z[0],y=Z[1],P=(0,s.UO)().movieId,_=(0,s.TH)(),O=(0,f.useRef)(null===(n=_.state)||void 0===n?void 0:n.from);return(0,f.useEffect)((function(){var n=function(){var n=(0,t.Z)(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,(0,h.Jp)(P);case 4:r=n.sent,y(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),j(n.t0.message);case 11:return n.prev=11,v(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();P&&n()}),[P]),(0,l.jsxs)("div",{children:[g&&(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:["Opps, some error occured... Error: ",g]})}),d&&(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,{})}),(0,l.jsxs)(u.rU,{to:null!==(r=O.current)&&void 0!==r?r:"/",children:[" ",(0,l.jsx)(p.jp,{type:"button",children:"Go back"})]}),k&&(0,l.jsx)(x,{movie:k})]})}},4390:function(n,r,e){e.d(r,{$m:function(){return d},Jp:function(){return s},Z$:function(){return c},jV:function(){return p},o3:function(){return u}});var t=e(5861),o=e(7757),i=e.n(o),a=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e245788edd56336101811c52ff98db13"}}),c=function(){var n=(0,t.Z)(i().mark((function n(){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/trending/movie/day");case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/search/movie?query=".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(r,"/credits"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(r,"/reviews"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},168:function(n,r,e){function t(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}e.d(r,{Z:function(){return t}})}}]);
//# sourceMappingURL=556.1275ecc0.chunk.js.map