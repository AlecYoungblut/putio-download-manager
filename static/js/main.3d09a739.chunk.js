(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),o=n(6),a=n.n(o),r=(n(17),n(7)),l=n(8),d=n(11),u=n(9),h=n(10),j=n(5),b=function(e){var t=e.files,n=Object(i.useState)([{id:""}]),s=Object(j.a)(n,2),o=s[0],a=s[1],r=Object(i.useState)(!1),l=Object(j.a)(r,2),d=l[0],u=l[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("center",{children:Object(c.jsx)("h1",{children:"File List"})}),o.map((function(e){return Object(c.jsx)("div",{class:"card",children:Object(c.jsx)("div",{class:"card-body",children:Object(c.jsxs)("h6",{class:"card-subtitle mb-2 text-muted",children:["Id: ",e.id]})})})})),t.map((function(e){return Object(c.jsx)("div",{class:"card",children:Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",onClick:function(){return function(e){fetch("https://api.put.io/v2/files/"+e.id+"/url",{method:"GET",headers:new Headers({Authorization:"Bearer UFFX2DMM7B2OJJCTQKFZ","Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e),window.open(e,"_blank").focus()})).catch(console.log)}(e.url)},children:e.name}),Object(c.jsxs)("h6",{class:"card-subtitle mb-2 text-muted",children:["Id: ",e.id," Size: ",e.size]}),Object(c.jsx)("p",{class:"card-text",children:e.content_type}),Object(c.jsx)("p",{class:"card-text",children:Object(c.jsx)("input",{type:"checkbox",className:"checkbox-".concat(e.id),onChange:function(){return t=e.id,console.log("TEST #1"),void(d?(console.log("TEST #3"),u(!1),a([o.splice(o.indexOf(t),1)]),console.log(o)):(console.log("TEST #2"),u(!0),a([].concat(Object(h.a)(o),[{id:t}])),console.log(o)));var t},defaultChecked:d})})]})})}))]})},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={files:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.put.io/v2/files/list?sort_by=NAME_ASC&file_type=FOLDER&parent_id=-1",{method:"GET",headers:new Headers({Authorization:"Bearer UFFX2DMM7B2OJJCTQKFZ","Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({files:t.files})})).catch(console.log)}},{key:"render",value:function(){return Object(c.jsx)(b,{files:this.state.files})}}]),n}(i.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.3d09a739.chunk.js.map