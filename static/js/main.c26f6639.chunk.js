(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(3),c=a(6),s=a(7),o=a(1),l=a.n(o),d=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],m=a(9),j=a.n(m),b=a(0),h=function(e){var t=e.user,a=t.email,n=t.name;return Object(b.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},f=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(b.jsxs)("article",{"data-id":a,className:j()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(b.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(b.jsx)(h,{user:r})]})},O=l.a.memo((function(e){var t=e.todos;return Object(b.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(b.jsx)(f,{todo:e},e.id)}))})}));function p(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1}var x=function(){var e=Object(o.useState)(u.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:d.find((function(t){return t.id===e.userId}))||null})}))),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),l=Object(r.a)(i,2),m=l[0],j=l[1],h=Object(o.useState)(0),f=Object(r.a)(h,2),x=f[0],v=f[1],y=Object(o.useState)(!1),S=Object(r.a)(y,2),N=S[0],I=S[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Add todo form"}),Object(b.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),x&&m?(N&&I(!1),n((function(e){var t,a={id:p(e),completed:!1,title:m,user:(t=x,d.find((function(e){return e.id===t}))||null)};return[].concat(Object(c.a)(e),[a])})),j(""),v(0)):I(!0)},children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsxs)("label",{children:["Title:",Object(b.jsx)("input",{type:"text","data-cy":"titleInput",value:m,placeholder:"title",onChange:function(e){var t=e.target.value;j(t)}})]}),N&&!m&&Object(b.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsxs)("label",{children:["User:",Object(b.jsxs)("select",{"data-cy":"userSelect",onChange:function(e){var t=e.target.value;v(Number(t))},value:x,children:[Object(b.jsx)("option",{value:"",children:"Choose a user"}),d.map((function(e){var t=e.name,a=e.id;return Object(b.jsx)("option",{value:a,children:t},a)}))]})]}),N&&!x&&Object(b.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(b.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(b.jsx)(O,{todos:a})]})};i.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c26f6639.chunk.js.map