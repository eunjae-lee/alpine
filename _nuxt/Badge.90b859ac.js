import o from"./ContentSlot.7e99446f.js";import{d as a,b as s,c as r,g as _,n as c,l as p}from"./entry.ace71cb4.js";const d=a({__name:"Badge",props:{type:{type:String,default:"info",validator(e){return["info","success","warning","danger","primary"].includes(e)}}},setup(e){return(t,l)=>{const n=o;return s(),r("span",{class:c([[e.type],"badge"])},[_(n,{use:t.$slots.default,unwrap:"p"},null,8,["use"])],2)}}});const m=p(d,[["__scopeId","data-v-c46600de"]]);export{m as default};