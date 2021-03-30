(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=n(11),s=n(4),u=n(5),l=n(7),d=n(6),b=n(2),m=n.n(b),h=n(10),j=(n(24),n(0)),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=m.a.generate(),e.numberInputId=m.a.generate(),e.hendelChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.hendelSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name,e.state.number),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"form",onSubmit:this.hendelSubmit,children:[Object(j.jsxs)("label",{htmlFor:this.nameInputId,children:["Name ",Object(j.jsx)("input",{type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId,onChange:this.hendelChange})]}),Object(j.jsxs)("label",{htmlFor:this.numberInputId,children:["Number ",Object(j.jsx)("input",{type:"tel",value:this.state.number,name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",id:this.numberInputId,onChange:this.hendelChange,required:!0})]}),Object(j.jsx)("button",{className:"button",type:"submit",children:"Add contacts"})]})}}]),n}(a.Component),p=(n(26),function(e){var t=e.contacts,n=e.onDeleteTodo;return Object(j.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(j.jsxs)("li",{className:"TodoList__item",children:[Object(j.jsxs)("p",{className:"TodoList__text",children:[a,": ",r]}),Object(j.jsx)("button",{onClick:function(){return n(t)},children:"Delete"})]},t)}))})}),O=(n(27),function(e){var t=e.filter,n=e.onChange;return Object(j.jsxs)("label",{className:"label",children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:t,onChange:n})]})}),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addTodo=function(t,n){if(e.state.contacts.map((function(e){return e.name})).includes(t))alert("".concat(t," is already in contacts"));else{var a={id:m.a.generate(),name:t,number:n};e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[a])}}))}},e.deleteTodo=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.formSubmitHandler=function(e){console.log(e)},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleTodos();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addTodo}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{filter:e,onChange:this.changeFilter}),Object(j.jsx)(p,{contacts:t,onDeleteTodo:this.deleteTodo})]})}}]),n}(a.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d068641c.chunk.js.map