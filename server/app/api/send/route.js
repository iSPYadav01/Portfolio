"use strict";(()=>{var e={};e.id=164,e.ids=[164],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9567:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>c,originalPathname:()=>_,requestAsyncStorage:()=>u,routeModule:()=>i,serverHooks:()=>p,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>l});var a={};t.r(a),t.d(a,{default:()=>handler}),t(8976);var s=t(884),o=t(6132),n=t(5798);async function handler(e,r){try{let{email:r,subject:t,message:a}=await e.json();return console.log(r,t,a),n.Z.json({success:!0,message:"Request processed successfully"})}catch(e){return n.Z.json({error:e.message||"Unknown error"})}}let i=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/send/route",pathname:"/api/send",filename:"route",bundlePath:"app/api/send/route"},resolvedPagePath:"F:\\Data Science Materials\\Github-Repos\\Portfolio\\src\\app\\api\\send\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:p,headerHooks:c,staticGenerationBailout:l}=i,_="/api/send/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[364,120,798],()=>__webpack_exec__(9567));module.exports=t})();