import{I as p}from"./index.8ccfa1b5.js";import{_ as v}from"./elevation.229458c1.js";import{d as m,e as C,o as l,c as a,p as s,G as o,h as n,a as t,i as u,m as i,t as c}from"./vendor.49f89f0d.js";const f={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};const y=m({name:"VarCell",components:{VarIcon:p},props:f}),$={class:"var-cell__content"};function _(e,g,S,V,k,N){const d=C("var-icon");return l(),a("div",{class:s(["var-cell",[e.border?"var-cell--border":null]])},[e.$slots.icon||e.icon?(l(),a("div",{key:0,class:s(["var-cell__icon",[e.iconClass?e.iconClass:null]])},[o(e.$slots,"icon",{},()=>[u(d,{class:"var--flex",name:e.icon},null,8,["name"])])],2)):n("v-if",!0),t("div",$,[t("div",{class:s(["var-cell__title",[e.titleClass?e.titleClass:null]])},[o(e.$slots,"default",{},()=>[i(c(e.title),1)])],2),e.$slots.desc||e.desc?(l(),a("div",{key:0,class:s(["var-cell__desc",[e.descClass?e.descClass:null]])},[o(e.$slots,"desc",{},()=>[i(c(e.desc),1)])],2)):n("v-if",!0)]),e.$slots.extra?(l(),a("div",{key:1,class:s(["var-cell__extra",[e.extraClass?e.extraClass:null]])},[o(e.$slots,"extra")],2)):n("v-if",!0)],2)}var r=v(y,[["render",_]]);r.install=function(e){e.component(r.name,r)};export{r as C};
