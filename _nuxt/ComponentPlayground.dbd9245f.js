import{u as m}from"./asyncData.be582b62.js";import{U as c,I as p,d as i,r as u,M as e,ah as l,l as d}from"./entry.ace71cb4.js";import f from"./Ellipsis.8d09f0a6.js";import _ from"./ComponentPlaygroundData.0ffda9d3.js";import"./TabsHeader.014e6f37.js";import"./ComponentPlaygroundProps.9a88a9dc.js";import"./ProseH4.b8ff4fbb.js";import"./ProseCodeInline.2a97dd72.js";import"./Badge.90b859ac.js";import"./ContentSlot.7e99446f.js";import"./ProseP.2d1bad5e.js";import"./index.1ed59abc.js";import"./ComponentPlaygroundSlots.vue.0e9d0707.js";import"./ComponentPlaygroundTokens.vue.719aaa56.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const U=d(g,[["__scopeId","data-v-9c0cb021"]]);export{U as default};
