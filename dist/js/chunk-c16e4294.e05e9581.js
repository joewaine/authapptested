(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c16e4294"],{8074:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mamnoon"},[n("Nav3"),n("UpserveOloTestingNewProcessing",{attrs:{title:"Mamnoon Street",oloEndpoint:"/oloorderstreet",menuEndpoint:"/product/upserveolo",userData:e.user,emailAddress:e.$store.state.currentUserEmail}})],1)},s=[],o=n("6c8d"),a=n("0caa"),u={data:function(){return{user:null}},components:{Nav3:a["a"],UpserveOloTestingNewProcessing:o["a"]},methods:{getUser:function(){var e=this;this.$http.get("/user/email/"+e.$store.state.currentUserEmail).then((function(t){var n=t.data;e.user=n,e.cardNumberInput=n.user.giftcard,e.preferredGiftCard=n.user.giftcard})).catch((function(e){console.log(e)}))}},mounted:function(){this.getUser()}},c=u,i=(n("be62"),n("2877")),l=Object(i["a"])(c,r,s,!1,null,null,null);t["default"]=l.exports},be62:function(e,t,n){"use strict";var r=n("e73b"),s=n.n(r);s.a},e73b:function(e,t,n){}}]);
//# sourceMappingURL=chunk-c16e4294.e05e9581.js.map