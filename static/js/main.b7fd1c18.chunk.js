(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),s=n(6),a=n.n(s),o=(n(17),n(7)),l=n(8),d=n(11),u=n(9),h=(n(10),n(4)),j=function(e){var t=e.files,n=Object(i.useState)([{id:""}]),r=Object(h.a)(n,2),s=r[0],a=(r[1],Object(i.useState)(!1)),o=Object(h.a)(a,2),l=(o[0],o[1],Object(i.useState)([])),d=Object(h.a)(l,2),u=d[0],j=d[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("center",{children:Object(c.jsx)("h1",{children:"File List"})}),s.map((function(e){return Object(c.jsx)("div",{class:"card",children:Object(c.jsx)("div",{class:"card-body",children:Object(c.jsxs)("h6",{class:"card-subtitle mb-2 text-muted",children:["Id: ",e.id]})})})})),t.map((function(e){return Object(c.jsx)("div",{class:"card",children:Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",onClick:function(){return t=e.id,void(u&&u.length>0?j([]):fetch("https://api.put.io/v2/files/list?parent_id="+t+"&sort_by=NAME_ASC&file_type=AUDIO,VIDEO,FOLDER",{method:"GET",headers:new Headers({Authorization:"Bearer UFFX2DMM7B2OJJCTQKFZ","Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){j(e.files)})).catch(console.log));var t},children:e.name}),u.map((function(t){if(e.id===t.parent_id)return Object(c.jsx)("div",{class:"card-body",children:Object(c.jsx)("h5",{class:"card-title",onClick:function(){return function(e){fetch("https://api.put.io/v2/files/"+e+"/url",{method:"GET",headers:new Headers({Authorization:"Bearer UFFX2DMM7B2OJJCTQKFZ","Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){window.open(e.url).focus()})).catch(console.log)}(t.id)},children:t.name})})}))]})})}))]})},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={files:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.put.io/v2/files/list?sort_by=NAME_ASC&file_type=FOLDER&parent_id=-1",{method:"GET",headers:new Headers({Authorization:"Bearer UFFX2DMM7B2OJJCTQKFZ","Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({files:t.files})})).catch(console.log)}},{key:"render",value:function(){return Object(c.jsx)(j,{files:this.state.files})}}]),n}(i.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.b7fd1c18.chunk.js.map