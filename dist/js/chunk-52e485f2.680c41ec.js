(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52e485f2"],{"8b16":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container nav-acc-header",staticStyle:{"padding-top":"100px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},[a("form",{staticClass:"text-center border border-primary p-5",staticStyle:{"margin-top":"70px",height:"auto","padding-top":"100px !important"},on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"email",placeholder:"Email",required:""},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control mb-5",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),a("center",[a("button",{staticClass:"btn btn-primary btn-block w-75 my-4",attrs:{type:"submit"}},[t._v(" Sign in ")])])],1)])])])},o=[],r=(a("96cf"),a("1da1")),s=a("5886"),i={data:function(){return{login:{email:"",password:"",name:""}}},methods:{loginUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/user/login",t.login);case 3:a=e.sent,console.log(a),n=a.data.token,localStorage.setItem("jwt",n),n&&t.$router.push("/transactions"),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),Object(s["a"])("Error","Something Went Wrong","error"),console.log(e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},l=i,c=a("2877"),u=Object(c["a"])(l,n,o,!1,null,null,null);e["a"]=u.exports},e926:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("Nav3"),a("login")],1)},o=[],r=a("a4a9"),s=a("8b16"),i=a("7079"),l=a("0caa"),c={metaInfo:{title:"log in",titleTemplate:"%s | nadi mama"},components:{login:s["a"],Products:i["a"],SlideShow:r["a"],Nav3:l["a"]}},u=c,p=a("2877"),m=Object(p["a"])(u,n,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-52e485f2.680c41ec.js.map