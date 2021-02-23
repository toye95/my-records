(this.webpackJsonpmyrecords=this.webpackJsonpmyrecords||[]).push([[0],{14:function(e,t,n){e.exports={container:"RecordItem_container__2T8d_",title:"RecordItem_title__2wAnS",info:"RecordItem_info__g7WMI",grid:"RecordItem_grid__2zQFU",button:"RecordItem_button__mLf8n",edit:"RecordItem_edit__2MNTw",delete:"RecordItem_delete__3Fzka",bold:"RecordItem_bold__2zonE"}},19:function(e,t,n){e.exports={container:"Home_container__1ZnZw",input:"Home_input__2JdJz",button:"Home_button__3a9tN",grid:"Home_grid__1FnsT",text:"Home_text__2hb4Y",link:"Home_link__buX6O"}},3:function(e,t,n){e.exports={container:"Forms_container__3Lcl_",input:"Forms_input__1EKme",button:"Forms_button__39Lcn",text:"Forms_text__1BOj3",link:"Forms_link__38Qp6"}},32:function(e,t,n){e.exports={card:"Card_card__1JuVl"}},40:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(22),c=n.n(a),i=(n(40),n(12)),o=n(30),u=n(31),d=n(35),l=n(34),j=n(5),m=n.n(j),p=n(17),b=n(15),h=n(6),f=n(18),g=n(32),O=n.n(g),x=n(1);var v=function(e){return Object(x.jsx)("div",{className:O.a.card,children:e.children})},w=n(14),_=n.n(w);var k=function(e){var t=e.id,n=e.title,r=e.createdAt,s=e.createdBy,a=e.handleEdit,c=e.handleDelete;return Object(x.jsx)("div",{className:_.a.container,children:Object(x.jsxs)("div",{className:_.a.grid,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:_.a.title,children:n})}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:_.a.info,children:["Created by",Object(x.jsxs)("span",{className:_.a.bold,children:[" ",s," "]}),"at ",Object(x.jsx)("span",{className:_.a.bold,children:r})]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:_.a.button+" "+_.a.edit,onClick:function(){return a(t,n)},children:"Edit"}),Object(x.jsx)("button",{className:_.a.button+" "+_.a.delete,onClick:function(){return c(t)},children:"Delete"})]})]})})},y=n(19),N=n.n(y),S=function(e,t){return fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)})},R=function(e){var t=e.userId,n=e.title,r={query:"\n            mutation {\n                    createRecord(userId: ".concat(t,', title: "').concat(n,'"){\n                        id,\n                        title,\n                        createdAt\n                }\n            }\n        ')};return new Promise((function(e,t){S("https://my-records101.herokuapp.com/api",r).then((function(e){return e.json()})).then((function(n){if(n.errors){var r=n.errors[0].message;t({status:"error",message:r})}else e({status:"success"})}),(function(e){return t(e)}))}))},L=function(e){var t={query:"\n             {\n                    getRecords(id: ".concat(e,"){\n                        id,\n                        fullname,\n                        records {\n                            id,\n                            title,\n                            createdAt\n                        }\n                }\n            }\n        ")};return new Promise((function(e,n){S("https://my-records101.herokuapp.com/api",t).then((function(e){return e.json()})).then((function(t){if(t.errors){var r=t.errors[0].message;n({status:"error",message:r})}else e({status:"success",data:t.data.getRecords})}),(function(e){return n(e)}))}))},P=function(e,t){var n={query:"\n            mutation {\n                    editRecord(recordId: ".concat(e,', title: "').concat(t,'"){\n                        id,\n                }\n            }\n        ')};return new Promise((function(e,t){S("https://my-records101.herokuapp.com/api",n).then((function(e){return e.json()})).then((function(n){if(n.errors){var r=n.errors[0].message;t({status:"error",message:r})}else e({status:"success"})}),(function(e){return t(e)}))}))},F=function(e){var t={query:"\n            mutation {\n                    deleteRecord(recordId: ".concat(+e,"){\n                        id,\n                }\n            }\n        ")};return new Promise((function(e,n){S("https://my-records101.herokuapp.com/api",t).then((function(e){return e.json()})).then((function(t){if(t.errors){var r=t.errors[0].message;n({status:"error",message:r})}else e({status:"success"})}),(function(e){return n(e)}))}))},I=n(8),E=n(16),C=Object(E.b)({name:"home",initialState:{isLoading:!1,error:"",data:[]},reducers:{pending:function(e){e.isLoading=!0},success:function(e){e.isLoading=!1,e.error=""},failure:function(e,t){var n=t.payload;e.isLoading=!1,e.error=n},setRecords:function(e,t){var n=t.payload;e.data=n}}}),D=C.actions,A=(D.home,D.setRecords),q=(D.pending,D.success,D.failure),B=C.reducer;var H={error:{background:"pink",color:"red",borderRadius:8,width:"90%",padding:15,fontSize:14}},J=function(e){return Object(x.jsx)("div",{style:H.error,children:e.message})},U=n(4);var z=function(){var e,t=Object(I.b)(),n=Object(U.k)(),a=Object(I.c)((function(e){return e.home})),c=a.isLoading,i=a.error,o=a.data,u=sessionStorage.getItem("id"),d=s.a.useState({title:""}),l=Object(f.a)(d,2),j=l[0],g=l[1],O=s.a.useState(!1),w=Object(f.a)(O,2),_=w[0],y=w[1],S=s.a.useState(null),E=Object(f.a)(S,2),C=E[0],D=E[1],B=function(){var e=Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(+u);case 2:"success"===(n=e.sent).status?t(A(n.data)):t(q(n.message));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(m.a.mark((function e(n){var r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=j.title,s=+u,!r){e.next=21;break}if(e.prev=4,!_){e.next=11;break}return e.next=8,P(C,j.title);case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,R({userId:s,title:r});case 13:e.t0=e.sent;case 14:"success"===e.t0.status&&(y(!1),g(Object(h.a)(Object(h.a)({},j),{},{title:""})),B()),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(4),t(q(e.t1.message));case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),z=function(e,t){g(Object(h.a)(Object(h.a)({},j),{},{title:t})),y(!0),D(e)},T=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(n);case 3:"success"===e.sent.status&&B(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(q(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){sessionStorage.getItem("token")||n.push("/"),B()}),[]),Object(x.jsx)("div",{className:N.a.container,children:Object(x.jsxs)(v,{children:[Object(x.jsx)("h2",{children:"My Records"}),Object(x.jsx)("a",{onClick:function(){sessionStorage.clear(),n.push("/")},className:N.a.link,children:"Logout"}),i&&Object(x.jsx)(J,{message:"Error: "+i}),Object(x.jsx)("form",{onSubmit:H,children:Object(x.jsxs)("div",{className:N.a.grid,children:[Object(x.jsx)("div",{children:Object(x.jsx)("input",{autoFocus:!0,type:"text",name:"title",className:N.a.input,value:j.title,placeholder:"Write something...",onChange:function(e){g(Object(h.a)(Object(h.a)({},j),{},Object(b.a)({},e.target.name,e.target.value)))}})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"submit",className:N.a.button,children:c?"Saving...":"Save"})})]})}),Object(x.jsx)("div",{style:{marginTop:20},children:o&&(null===o||void 0===o||null===(e=o.records)||void 0===e?void 0:e.length)?null===o||void 0===o?void 0:o.records.map((function(e){return Object(x.jsx)(k,{id:e.id,title:e.title,createdBy:o.fullname,createdAt:e.createdAt,handleEdit:z,handleDelete:T},e.id.toString())})):Object(x.jsx)("div",{className:N.a.text,children:"No records"})})]})})},T=n(3),M=n.n(T),W=Object(E.b)({name:"auth",initialState:{isLoading:!1,isAuth:!1,error:"",userDetails:null},reducers:{loginPending:function(e){e.isLoading=!0},loginSuccess:function(e,t){var n=t.payload;e.isLoading=!1,e.isAuth=!0,e.error="",e.userDetails=n},loginFailure:function(e,t){var n=t.payload;e.isLoading=!1,e.error=n}}}),$=W.actions,Q=($.login,$.loginPending),Z=$.loginSuccess,K=$.loginFailure,V=W.reducer,X=function(e){var t=e.email,n=e.password,r={query:'\n            mutation {\n                    loginUser(email: "'.concat(t,'", password: "').concat(n,'"){\n                        id,\n                        fullname,\n                        email,\n                        token\n                }\n            }\n        ')};return new Promise((function(e,t){S("https://my-records101.herokuapp.com/api",r).then((function(e){return e.json()})).then((function(n){if(n.errors){var r=n.errors[0].message;t({status:"error",message:r})}else{console.log("resp",n);var s=n.data.loginUser,a=s.id,c=s.fullname,i=s.email,o=s.token;sessionStorage.setItem("token",o),sessionStorage.setItem("id",a),e({status:"success",id:a,fullname:c,email:i})}}),(function(e){return t(e)}))}))},Y=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);var G=function(){var e=Object(I.b)(),t=Object(U.k)(),n=Object(I.c)((function(e){return e.login})),r=n.isLoading,a=n.error,c=s.a.useState({email:"",password:""}),o=Object(f.a)(c,2),u=o[0],d=o[1],l=function(e){d(Object(h.a)(Object(h.a)({},u),{},Object(b.a)({},e.target.name,e.target.value)))},j=function(){var n=Object(p.a)(m.a.mark((function n(r){var s,a,c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),s=u.email,a=u.password,Y.test(s)&&a){n.next=5;break}return e(K("Form validation failed")),n.abrupt("return");case 5:return e(Q()),n.prev=7,n.next=10,X(u);case 10:"error"===(c=n.sent).status&&e(K(c.message)),e(Z(c)),t.push("/home"),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(7),e(K(n.t0.message));case 19:case"end":return n.stop()}}),n,null,[[7,16]])})));return function(e){return n.apply(this,arguments)}}();return Object(x.jsx)("div",{className:M.a.container,children:Object(x.jsxs)(v,{children:[Object(x.jsx)("h2",{children:"Login"}),a&&Object(x.jsx)(J,{message:"Error: "+a}),Object(x.jsxs)("form",{onSubmit:j,children:[Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",name:"email",className:M.a.input,value:u.email,placeholder:"Email",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"password",name:"password",className:M.a.input,value:u.password,placeholder:"Password",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"submit",className:M.a.button,disabled:!!r,children:r?"Logging in...":"Log In"})})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("p",{className:M.a.text,children:["Don't have an account yet ? ",Object(x.jsx)(i.Link,{to:"/signup",className:M.a.link,children:"Sign Up"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)("p",{className:M.a.text,children:["Forgotten your password ? ",Object(x.jsx)(i.Link,{to:"/reset-password",className:M.a.link,children:"Reset"})]})})]})})},ee=Object(E.b)({name:"passwordReset",initialState:{isLoading:!1,error:""},reducers:{passwordResetPending:function(e){e.isLoading=!0},passwordResetSuccess:function(e){e.isLoading=!1,e.error=""},passwordResetFailure:function(e,t){var n=t.payload;e.isLoading=!1,e.error=n}}}),te=ee.actions,ne=(te.passwordReset,te.passwordResetPending),re=te.passwordResetSuccess,se=te.passwordResetFailure,ae=ee.reducer,ce=function(e){var t=e.email,n=e.password,r={query:'\n            mutation {\n                    resetPassword(email: "'.concat(t,'", password: "').concat(n,'"){\n                        id,\n                }\n            }\n        ')};return new Promise((function(e,t){S("https://my-records101.herokuapp.com/api",r).then((function(e){return e.json()})).then((function(n){if(n.errors){var r=n.errors[0].message;t({status:"error",message:r})}else e({status:"success"})}),(function(e){return t(e)}))}))},ie=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);var oe=function(){var e=Object(I.b)(),t=Object(U.k)(),n=Object(I.c)((function(e){return e.passwordReset})),r=n.isLoading,a=n.error,c=s.a.useState({email:"",password:"",confirmPassword:""}),o=Object(f.a)(c,2),u=o[0],d=o[1],l=function(e){d(Object(h.a)(Object(h.a)({},u),{},Object(b.a)({},e.target.name,e.target.value)))},j=function(){var n=Object(p.a)(m.a.mark((function n(r){var s,a,c,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),s=u.email,a=u.password,c=u.confirmPassword,ie.test(s)&&a&&c){n.next=7;break}return e(se("Form validation failed")),n.abrupt("return");case 7:if(a===c){n.next=10;break}return e(se("Passwords do not match")),n.abrupt("return");case 10:return e(ne()),n.prev=11,n.next=14,ce(u);case 14:"error"===(i=n.sent).status&&e(se(i.message)),e(re()),t.push("/"),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(11),e(se(n.t0.message));case 23:case"end":return n.stop()}}),n,null,[[11,20]])})));return function(e){return n.apply(this,arguments)}}();return Object(x.jsx)("div",{className:M.a.container,children:Object(x.jsxs)(v,{children:[Object(x.jsx)("h2",{children:"Reset Password"}),a&&Object(x.jsx)(J,{message:"Error: "+a}),Object(x.jsxs)("form",{onSubmit:j,children:[Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",name:"email",className:M.a.input,value:u.email,placeholder:"Email",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"password",name:"password",className:M.a.input,value:u.password,placeholder:"New Password",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"password",name:"confirmPassword",className:M.a.input,value:u.confirmPassword,placeholder:"Confirm New Password",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"submit",className:M.a.button,disabled:!!r,children:r?"Saving...":"Save"})})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("p",{className:M.a.text,children:["Back to ",Object(x.jsx)(i.Link,{to:"/",className:M.a.link,children:"Login"})]})})]})})},ue=Object(E.b)({name:"signup",initialState:{isLoading:!1,error:""},reducers:{signupPending:function(e){e.isLoading=!0},signupSuccess:function(e){e.isLoading=!1,e.error=""},signupFailure:function(e,t){var n=t.payload;e.isLoading=!1,e.error=n}}}),de=ue.actions,le=(de.signup,de.signupPending),je=de.signupSuccess,me=de.signupFailure,pe=ue.reducer,be=function(e){var t=e.fullname,n=e.email,r=e.password,s={query:'\n            mutation {\n                    createUser(fullname: "'.concat(t,'", email: "').concat(n,'", password: "').concat(r,'"){\n                        id,\n                        fullname,\n                        email\n                }\n            }\n        ')};return new Promise((function(e,t){S("https://my-records101.herokuapp.com/api",s).then((function(e){return e.json()})).then((function(n){if(n.errors){var r=n.errors[0].message;t({status:"error",message:r})}else e({status:"success"})}),(function(e){return t(e)}))}))},he=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);var fe=function(){var e=Object(I.b)(),t=Object(U.k)(),n=Object(I.c)((function(e){return e.signup})),r=n.isLoading,a=n.error,c=s.a.useState({fullname:"",email:"",password:""}),o=Object(f.a)(c,2),u=o[0],d=o[1],l=function(e){d(Object(h.a)(Object(h.a)({},u),{},Object(b.a)({},e.target.name,e.target.value)))},j=function(){var n=Object(p.a)(m.a.mark((function n(r){var s,a,c,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),s=u.fullname,a=u.email,c=u.password,s&&he.test(a)&&c){n.next=5;break}return e(me("Form validation failed")),n.abrupt("return");case 5:return e(le()),n.prev=6,n.next=9,be(u);case 9:"error"===(i=n.sent).status&&e(me(i.message)),e(je()),t.push("/"),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(6),e(me(n.t0.message));case 18:case"end":return n.stop()}}),n,null,[[6,15]])})));return function(e){return n.apply(this,arguments)}}();return Object(x.jsx)("div",{className:M.a.container,children:Object(x.jsxs)(v,{children:[Object(x.jsx)("h2",{children:"Signup"}),a&&Object(x.jsx)(J,{message:"Error: "+a}),Object(x.jsxs)("form",{onSubmit:j,children:[Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",name:"fullname",className:M.a.input,value:u.fullname,placeholder:"Fullname",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",name:"email",className:M.a.input,value:u.email,placeholder:"Email",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"password",name:"password",className:M.a.input,value:u.password,placeholder:"Password",onChange:l})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"submit",className:M.a.button,disabled:!!r,children:r?"Signing up...":"Sign Up"})})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("p",{className:M.a.text,children:["Have an account ? ",Object(x.jsx)(i.Link,{to:"/",className:M.a.link,children:"Login"})]})})]})})},ge=n(12).Route,Oe=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ge,{path:"/",exact:!0,strict:!0,component:G}),Object(x.jsx)(ge,{path:"/signup",exact:!0,strict:!0,component:fe}),Object(x.jsx)(ge,{path:"/reset-password",exact:!0,strict:!0,component:oe}),Object(x.jsx)(ge,{path:"/home",exact:!0,strict:!0,component:z})]})}}]),n}(r.Component);var xe=function(){return Object(x.jsx)(i.BrowserRouter,{children:Object(x.jsx)(Oe,{})})},ve=Object(E.a)({reducer:{login:V,signup:pe,passwordReset:ae,home:B}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(I.a,{store:ve,children:Object(x.jsx)(xe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.dc51bb66.chunk.js.map