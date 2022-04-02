import{A as k}from"./AppType.6775b756.js";import{C as E}from"./index.4f55e45f.js";import{I as y}from"./index.8ccfa1b5.js";import{d as B}from"./index.9b1139e6.js";import{u as g,a as f,_ as S,b as F,c as A}from"./en-US.628e0d34.js";import{w as D,a as v}from"./utils.3a4595f4.js";import{_ as w}from"./elevation.229458c1.js";import{r as C,e as r,o as h,c as x,i,j as e,l as d,h as s,m as o,t as l}from"./vendor.49f89f0d.js";import"./components.721843ff.js";import"./shared.506a394a.js";import"./elements.92736b4e.js";var z={chipType:"\u7EB8\u7247\u7C7B\u578B",defaultChip:"\u9ED8\u8BA4\u7EB8\u7247",primaryChip:"\u4E3B\u8981\u7EB8\u7247",infoChip:"\u4FE1\u606F\u7EB8\u7247",successChip:"\u6210\u529F\u7EB8\u7247",warningChip:"\u8B66\u544A\u7EB8\u7247",dangerChip:"\u5371\u9669\u7EB8\u7247",simpleChip:"\u7B80\u5355\u7EB8\u7247",nonRoundChip:"\u975E\u5706\u89D2\u7EB8\u7247",chipSize:"\u7EB8\u7247\u5C3A\u5BF8",largeChip:"\u5927\u578B\u7EB8\u7247",normalChip:"\u5E38\u89C4\u7EB8\u7247",smallChip:"\u5C0F\u578B\u7EB8\u7247",miniChip:"\u8FF7\u4F60\u7EB8\u7247",blockChip:"\u5757\u7EA7\u7EB8\u7247",canCloseChip:"\u53EF\u5173\u95ED\u7EB8\u7247",customCloseIcon:"\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",chip:"\u7EB8\u7247",addSlot:"\u6DFB\u52A0\u63D2\u69FD",leftSlot:"\u5DE6\u4FA7\u63D2\u69FD",rightSlot:"\u53F3\u4FA7\u63D2\u69FD",leftAndRightSlot:"\u5DE6\u53F3\u4E24\u4FA7\u63D2\u69FD"},N={chipType:"Chip Type",defaultChip:"Default Chip",primaryChip:"Primary Chip",infoChip:"Info Chip",successChip:"Success Chip",warningChip:"Warning Chip",dangerChip:"Danger Chip",simpleChip:"Simple Chip",nonRoundChip:"Non Round Chip",chipSize:"Chip Size",largeChip:"Large Chip",normalChip:"Normal Chip",smallChip:"Small Chip",miniChip:"Mini Chip",blockChip:"Block Chip",canCloseChip:"Can Close Chip",customCloseIcon:"Custom Close Icon",customColor:"Custom Color",chip:"Chip",addSlot:"Add Slot",leftSlot:"Left Slot",rightSlot:"Right Slot",leftAndRightSlot:"Left And Right Slot"};const{add:m,use:R,pack:I,packs:Z,merge:$}=g(),b=n=>{A(n),R(n)};f("zh-CN",S);f("en-US",F);m("zh-CN",z);m("en-US",N);const T={name:"ChipExample",components:{VarChip:E,VarIcon:y,AppType:k},setup(){const n=C(!0),c=C(!0);return D(b),v(B),{show:n,show1:c,pack:I}}},L={class:"example"};function V(n,c,U,a,M,j){const u=r("app-type"),p=r("var-chip"),t=r("var-icon");return h(),x("div",L,[i(u,null,{default:e(()=>[o(l(a.pack.chipType),1)]),_:1}),i(p,null,{default:e(()=>[o(l(a.pack.defaultChip),1)]),_:1}),i(p,{type:"primary"},{default:e(()=>[o(l(a.pack.primaryChip),1)]),_:1}),i(p,{type:"success"},{default:e(()=>[o(l(a.pack.successChip),1)]),_:1}),i(p,{type:"danger"},{default:e(()=>[o(l(a.pack.dangerChip),1)]),_:1}),i(p,{type:"warning"},{default:e(()=>[o(l(a.pack.warningChip),1)]),_:1}),i(p,{type:"info"},{default:e(()=>[o(l(a.pack.infoChip),1)]),_:1}),i(u,null,{default:e(()=>[o(l(a.pack.simpleChip),1)]),_:1}),i(p,{plain:"",type:"primary"},{default:e(()=>[o(l(a.pack.simpleChip),1)]),_:1}),i(u,null,{default:e(()=>[o(l(a.pack.nonRoundChip),1)]),_:1}),i(p,{round:!1,type:"primary"},{default:e(()=>[o(l(a.pack.nonRoundChip),1)]),_:1}),i(u,null,{default:e(()=>[o(l(a.pack.chipSize),1)]),_:1}),i(p,{type:"primary"},{default:e(()=>[o(l(a.pack.normalChip),1)]),_:1}),i(p,{type:"success",size:"small"},{default:e(()=>[o(l(a.pack.smallChip),1)]),_:1}),i(p,{type:"warning",size:"mini"},{default:e(()=>[o(l(a.pack.miniChip),1)]),_:1}),i(p,{type:"danger",size:"large"},{default:e(()=>[o(l(a.pack.largeChip),1)]),_:1}),i(u,null,{default:e(()=>[o(l(a.pack.blockChip),1)]),_:1}),i(p,{type:"primary",block:""},{default:e(()=>[o(l(a.pack.blockChip),1)]),_:1}),i(u,null,{default:e(()=>[o(l(a.pack.canCloseChip),1)]),_:1}),a.show?(h(),d(p,{key:0,closable:"",onClose:c[0]||(c[0]=_=>a.show=!1)},{default:e(()=>[o(l(a.pack.canCloseChip),1)]),_:1})):s("v-if",!0),a.show1?(h(),d(p,{key:1,closable:"","icon-name":"delete",onClose:c[1]||(c[1]=_=>a.show1=!1)},{default:e(()=>[o(l(a.pack.customCloseIcon),1)]),_:1})):s("v-if",!0),i(u,null,{default:e(()=>[o(l(a.pack.customColor),1)]),_:1}),i(p,{color:"#009688","text-color":"#fff"},{default:e(()=>[o(l(a.pack.chip),1)]),_:1}),i(p,{color:"#009688",plain:""},{default:e(()=>[o(l(a.pack.chip),1)]),_:1}),i(p,{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:e(()=>[o(l(a.pack.chip),1)]),_:1}),i(p,{color:"#faecd8","text-color":"#e6a23c"},{default:e(()=>[o(l(a.pack.chip),1)]),_:1}),i(u,null,{default:e(()=>[o(l(a.pack.addSlot),1)]),_:1}),i(p,null,{left:e(()=>[i(t,{name:"star"})]),default:e(()=>[o(l(a.pack.leftSlot)+" ",1)]),_:1}),i(p,null,{right:e(()=>[i(t,{name:"fire"})]),default:e(()=>[o(l(a.pack.rightSlot)+" ",1)]),_:1}),i(p,null,{left:e(()=>[i(t,{name:"account-circle"})]),right:e(()=>[i(t,{name:"cake-variant"})]),default:e(()=>[o(l(a.pack.leftAndRightSlot)+" ",1)]),_:1})])}var aa=w(T,[["render",V],["__scopeId","data-v-5ce271f4"]]);export{aa as default};
