(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{173:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{msg:"",msg2:""}},created:function(){this.getMsg2()},methods:{getMsg:function(){var t=this;this.$axios.$get("/api/v1/hello").then((function(e){return t.msg=e.msg}))},getMsg2:function(){var t=this;this.$axios.$get("/api/v1/hello").then((function(e){return t.msg2=e.msg}))}}},v=n(23),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("test")]),t._v(" "),n("h1",[t._v("ここテストでるよ")]),t._v(" "),n("h1",[t._v("kokotestderuyo")]),t._v(" "),n("h1",[t._v("test")]),t._v(" "),n("h1",[t._v("ここテストでるよ")]),t._v(" "),n("h1",[t._v("kokotestderuyo")]),t._v(" "),n("h1",[t._v("test")]),t._v(" "),n("h1",[t._v("ここテストでるよ")]),t._v(" "),n("h1",[t._v("kokotestderuyo")]),t._v(" "),n("h1",[t._v("test")]),t._v(" "),n("h1",[t._v("ここテストでるよ")]),t._v(" "),n("h1",[t._v("kokotestderuyo")]),t._v(" "),n("button",{on:{click:t.getMsg}},[t._v("\n    Hello\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")]),t._v("\n  "+t._s(t.msg)+"\n  "+t._s(t.msg2)+"\n")],1)}),[],!1,null,null,null);e.default=component.exports}}]);