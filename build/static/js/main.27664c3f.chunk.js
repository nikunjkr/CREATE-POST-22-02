(this.webpackJsonpforum=this.webpackJsonpforum||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=(n(70),n(71),n(25)),i=n(11),s=n.n(i),l=n(15),u=n(54),p=n.n(u),d=n(31),f=n.n(d),j=p.a.create({baseURL:"https://ec2-52-206-109-241.compute-1.amazonaws.com/team2practo"});j.interceptors.request.use((function(e){return e.headers.Authorization=f.a.get("access_control_token_cookie_skinder"),e}));var b=function(e){return j.post("/posts",e,{headers:{"Content-Type":"multipart/form-data"}})},h=function(e){return function(){var t=Object(l.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(e);case 3:a=t.sent,r=a.data,console.log("thread data",r),n({type:"ADD_POST",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},m=n.p+"static/media/logo.7c0ee393.png",O=n(23),v=n(42),g=n(131),y=n(129),x=n(132),_=n(126),w=Object(_.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(8)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},button:{marginBottom:10}}})),T=n(6),C=function(){var e=Object(a.useState)({Title:"",Caption:"",myFile:null}),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(o.b)(),i=w(),u=function(){r({Title:"",Caption:"",myFile:null}),(new FileReader).onload=function(){document.getElementById("preview_image").src=""},j(!1)},p=Object(a.useState)(!1),d=Object(v.a)(p,2),f=d[0],j=d[1],b=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),(a=new FormData).append("Title",n.Title),a.append("Caption",n.Caption),null!==n.myFile&&a.append("myFile",n.myFile),c(h(a)),u(),j(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(y.a,{className:i.paper,children:[Object(T.jsx)("h3",{children:"Create New Post"}),Object(T.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(i.root," ").concat(i.form),onSubmit:b,children:[Object(T.jsx)(g.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:n.Title,onChange:function(e){return r(Object(O.a)(Object(O.a)({},n),{},{Title:e.target.value}))}}),Object(T.jsx)(g.a,{name:"message",variant:"outlined",label:"Description",fullWidth:!0,multiline:!0,rows:4,value:n.Caption,onChange:function(e){return r(Object(O.a)(Object(O.a)({},n),{},{Caption:e.target.value}))}}),Object(T.jsx)("input",{type:"file",name:"myFile",onChange:function(e){r(Object(O.a)(Object(O.a)({},n),{},{myFile:e.target.files[0]}));var t=new FileReader;t.onload=function(){document.getElementById("preview_image").src=t.result},t.readAsDataURL(e.target.files[0])}}),Object(T.jsx)("div",{}),Object(T.jsx)("img",{id:"preview_image",height:"200",alt:""}),Object(T.jsx)(x.a,{className:i.button,variant:"contained",color:"primary",size:"small",type:"submit",fullWidth:!0,children:"Submit"}),Object(T.jsx)(x.a,{className:i.button,variant:"contained",color:"secondary",size:"small",onClick:u,fullWidth:!0,children:"Clear"}),f&&Object(T.jsx)("h1",{children:"Success"})]})]})};var E=function(){return Object(T.jsx)("div",{children:Object(T.jsx)("h1",{children:"Your are not logged in"})})},k=function(){var e=Object(o.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.get("/posts");case 3:n=e.sent,a=n.data,t({type:"FETCH_ALL",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.get("/users");case 3:n=e.sent,a=n.data,t({type:"GET_USER",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),console.log("Dispatching")}),[e]),console.log("w",f.a.get("access_control_token_cookie_skinder")),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"app__header",children:Object(T.jsxs)("a",{href:"https://skinder-5d70f.web.app/",children:[" ",Object(T.jsx)("img",{className:"app__headerImage",src:m,alt:"Logo"})]})}),Object(T.jsx)("div",{className:"app",children:f.a.get("access_control_token_cookie_skinder")?Object(T.jsx)(C,{}):Object(T.jsx)(E,{})})]})},F=n(18),N=n(59),D=n(39),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return[].concat(Object(D.a)(e),[t.payload]);case"FETCH_ALL":return t.payload;default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POST_COMMENTS":return t.payload;case"CREATE":return[].concat(Object(D.a)(e),[t.payload]);case"UPVOTE_COMMENT":case"DOWNVOTE_COMMENT":default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_THREAD":return t.payload;case"REPLY_COMMENT":default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return t.payload;default:return e}},L=Object(F.c)({Posts:S,Comments:M,Thread:R,User:A}),P=Object(F.e)(L,Object(F.d)(Object(F.a)(N.a)));c.a.render(Object(T.jsx)(o.a,{store:P,children:Object(T.jsx)(k,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.27664c3f.chunk.js.map