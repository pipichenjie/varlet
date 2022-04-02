import{I as P}from"./index.8ccfa1b5.js";import{c as L,f as M}from"./elements.92736b4e.js";import{t as y}from"./shared.506a394a.js";import{_ as R}from"./elevation.229458c1.js";import{d as A,r as u,b as h,y as F,x as w,e as g,o as _,c as D,a as O,i as U,p as C,n as Y,G as x,Y as z,l as b,j as T,k as j,m as G,t as X,F as q}from"./vendor.49f89f0d.js";import{C as H}from"./index.98d79c21.js";import{d as J}from"./index.9b1139e6.js";import{a as K}from"./utils.3a4595f4.js";const Q={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};const f=100,v=-50;let V;const W=A({name:"VarPullRefresh",components:{VarIcon:P},props:Q,setup(e){const o=u(null),c=u(0),a=u(v),l=u("arrow-down"),n=u("default"),r=u(!1),t=h(()=>n.value!=="loading"&&n.value!=="success"&&!e.disabled),i=h(()=>({"var-pull-refresh__icon":!0,"var-pull-refresh__animation":n.value==="loading"})),m=h(()=>({transform:`translate3d(0px, ${a.value}px, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:e.successBgColor||e.bgColor,color:e.successColor||e.color})),E=h(()=>n.value==="success"),k=s=>{!t.value||(n.value="pulling",c.value=s.touches[0].clientY)},I=s=>{const d=M(V);if(d>0||!t.value)return;d===0&&a.value>v&&s.cancelable&&s.preventDefault();const S=(s.touches[0].clientY-c.value)/2+v;a.value=S>=f?f:S,l.value=a.value>=f*.2?"refresh":"arrow-down"},B=()=>{var s,d;!t.value||(r.value=!0,a.value>=f*.2?(n.value="loading",a.value=f*.3,(s=e["onUpdate:modelValue"])==null||s.call(e,!0),(d=e.onRefresh)==null||d.call(e)):(n.value="loosing",l.value="arrow-down",a.value=v,setTimeout(()=>{r.value=!1},y(e.animationDuration))))},$=()=>{setTimeout(()=>{n.value="default",l.value="arrow-down",r.value=!1},y(e.animationDuration))};return F(()=>e.modelValue,s=>{s===!1&&(r.value=!0,n.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{a.value=v,$()},y(e.successDuration)))}),w(()=>{V=L(o.value)}),{freshNode:o,touchStart:k,touchMove:I,touchEnd:B,iconName:l,iconClass:i,controlStyle:m,isSuccess:E}}});function Z(e,o,c,a,l,n){const r=g("var-icon");return _(),D("div",{ref:"freshNode",class:"var-pull-refresh",onTouchstart:o[0]||(o[0]=(...t)=>e.touchStart&&e.touchStart(...t)),onTouchmove:o[1]||(o[1]=(...t)=>e.touchMove&&e.touchMove(...t)),onTouchend:o[2]||(o[2]=(...t)=>e.touchEnd&&e.touchEnd(...t)),onTouchcancel:o[3]||(o[3]=(...t)=>e.touchEnd&&e.touchEnd(...t))},[O("div",{class:C(["var-pull-refresh__control var-elevation--2",[e.isSuccess?"var-pull-refresh__control-success":null]]),style:Y(e.controlStyle)},[U(r,{name:e.iconName,transition:200,class:C(e.iconClass),"var-pull-refresh-cover":""},null,8,["name","class"])],6),x(e.$slots,"default")],544)}var p=R(W,[["render",Z]]);p.install=function(e){e.component(p.name,p)};const N=Array(10).fill("List Item"),ee=Array(10).fill("This is new List Item"),oe={name:"PullRefreshExample",components:{VarPullRefresh:p,VarCell:H},setup(){const e=u(!1),o=u(N),c=()=>{setTimeout(()=>{o.value=o.value[0]==="List Item"?ee:N,e.value=!1},2e3)},a=l=>{l.preventDefault()};return w(()=>{document.body.addEventListener("touchmove",a,{passive:!1})}),z(()=>{document.body.removeEventListener("touchmove",a)}),K(J),{refresh:c,isRefresh:e,data:o}}};function ae(e,o,c,a,l,n){const r=g("var-cell"),t=g("var-pull-refresh");return _(),b(t,{onRefresh:a.refresh,modelValue:a.isRefresh,"onUpdate:modelValue":o[0]||(o[0]=i=>a.isRefresh=i),"success-duration":"2000"},{default:T(()=>[(_(!0),D(q,null,j(a.data,(i,m)=>(_(),b(r,{key:m,border:""},{default:T(()=>[G(X(i+" "+(m+1)),1)]),_:2},1024))),128))]),_:1},8,["onRefresh","modelValue"])}var de=R(oe,[["render",ae],["__scopeId","data-v-5ca1ba7a"]]);export{de as default};
