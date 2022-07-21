var R=Object.defineProperty,j=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var $=(c,a,l)=>a in c?R(c,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[a]=l,A=(c,a)=>{for(var l in a||(a={}))W.call(a,l)&&$(c,l,a[l]);if(D)for(var l of D(a))X.call(a,l)&&$(c,l,a[l]);return c},I=(c,a)=>j(c,Q(a));import{p as L}from"../index/index.65a07d00.js";import{g as Y}from"../article/article.68ec6b8f.js";import{L as q}from"../index/index.186a46ef.js";import{_ as G}from"../../assets/index.820a86ba.js";import{E as B}from"../element-plus/element-plus.eb1b52d8.js";import{e as U,p as H,a8 as d,am as J,W as _,X as e,u as y,o as n,a as f,a2 as i,Y as K,a1 as r,c as h,aa as M,P as b,a0 as p}from"../@vue/@vue.d04ec679.js";import"../pinia/pinia.633f1801.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.21f17a99.js";import"../geotiff/geotiff.09715990.js";import"../vue-router/vue-router.e1418bca.js";import"../path-to-regexp/path-to-regexp.ecb763cd.js";import"../fuse.js/fuse.js.8cd4e865.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../screenfull/screenfull.468e47d2.js";import"../vue-i18n/vue-i18n.972f116e.js";import"../@intlify/@intlify.f573d109.js";import"../@amap/@amap.58aba9ee.js";import"../vue/vue.31b846b5.js";import"../mitt/mitt.fcf4f812.js";import"../lodash-es/lodash-es.dd34ae20.js";import"../@vueuse/@vueuse.9b3bc86d.js";import"../qs/qs.71f2d2b1.js";import"../side-channel/side-channel.147ab9b8.js";import"../get-intrinsic/get-intrinsic.c9f38a1e.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.45258027.js";import"../object-inspect/object-inspect.ddd6d7bd.js";import"../nprogress/nprogress.558663b1.js";/* empty css                                 */import"../clipboard/clipboard.a3dfcb76.js";import"../@element-plus/@element-plus.a2f5711a.js";import"../xe-utils/xe-utils.d9e2cfb8.js";import"../vxe-table/vxe-table.e94dfb44.js";import"../vite-plugin-mock/vite-plugin-mock.65169573.js";import"../mockjs/mockjs.57e773d8.js";import"../@popperjs/@popperjs.1e3895c9.js";import"../@ctrl/@ctrl.08d0615d.js";import"../dayjs/dayjs.51a47833.js";import"../async-validator/async-validator.233a0906.js";import"../memoize-one/memoize-one.7f51d3ef.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.190fc729.js";import"../@floating-ui/@floating-ui.835c30f5.js";import"../lodash-unified/lodash-unified.418bdfd8.js";const Z={class:"section-container"},tt=p("Element Plus Table"),et=p(" cancel "),it={key:1},at=p("Ok"),lt=p("Edit"),nt=p("Vxe Table"),ot=p(" cancel "),st={key:1},ct=p("Ok"),dt=p("Edit"),rt={name:"EditTable"},pt=Object.assign(rt,{setup(c){const a=U(null),l=U(!0),N=H({page:1,limit:10}),x=s=>({published:"success",draft:"info",deleted:"danger"})[s],O=async()=>{l.value=!0;const{data:s}=await Y(N),k=s.items;a.value=k.map(g=>I(A({},g),{edit:!1,originalTitle:g.title})),l.value=!1},C=s=>{s.title=s.originalTitle,s.edit=!1,B({message:"The title has been restored to the original value",type:"warning"})},T=s=>{s.edit=!1,s.originalTitle=s.title,B({message:"The title has been edited",type:"success"})};return O(),(s,k)=>{const g=d("el-divider"),u=d("el-table-column"),V=d("svg-icon"),E=d("el-tag"),z=d("el-input"),w=d("el-button"),v=d("vxe-button"),S=d("el-table"),m=d("vxe-column"),F=d("vxe-table"),P=J("loading");return n(),_(y(q),{title:"\u53EF\u7F16\u8F91\u8868\u683C"},{body:e(()=>[f("div",Z,[i(g,{"content-position":"left"},{default:e(()=>[tt]),_:1}),K((n(),_(S,{data:a.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[i(u,{align:"center",label:"ID",width:"65"},{default:e(({row:t})=>[f("span",null,r(t.id),1)]),_:1}),i(u,{width:"180px",align:"center",label:"Date"},{default:e(({row:t})=>[f("span",null,r(y(L)(t.timestamp,"{y}-{m}-{d} {h}:{i}")),1)]),_:1}),i(u,{width:"110px",align:"center",label:"Author"},{default:e(({row:t})=>[f("span",null,r(t.author),1)]),_:1}),i(u,{width:"100px",label:"Importance"},{default:e(({row:t})=>[(n(!0),h(b,null,M(t.importance,o=>(n(),_(V,{key:o,"icon-class":"star",class:"icon-star"}))),128))]),_:1}),i(u,{align:"center",label:"Readings",width:"95"},{default:e(({row:t})=>[f("span",null,r(t.pageviews),1)]),_:1}),i(u,{"class-name":"status-col",label:"Status",width:"110"},{default:e(({row:t})=>[i(E,{type:x(t.status)},{default:e(()=>[p(r(t.status),1)]),_:2},1032,["type"])]),_:1}),i(u,{"min-width":"300px",label:"Title"},{default:e(({row:t})=>[t.edit?(n(),h(b,{key:0},[i(z,{modelValue:t.title,"onUpdate:modelValue":o=>t.title=o,class:"edit-input",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),i(w,{class:"cancel-btn",size:"small",type:"warning",onClick:o=>C(t)},{default:e(()=>[et]),_:2},1032,["onClick"])],64)):(n(),h("span",it,r(t.title),1))]),_:1}),i(u,{align:"center",label:"Actions",width:"120"},{default:e(({row:t})=>[t.edit?(n(),_(v,{key:0,size:"mini",status:"success",icon:"el-icon-circle-check-outline",onClick:o=>T(t)},{default:e(()=>[at]),_:2},1032,["onClick"])):(n(),_(v,{key:1,size:"mini",status:"primary",icon:"el-icon-circle-check-outline",onClick:o=>t.edit=!t.edit},{default:e(()=>[lt]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])),[[P,l.value]]),i(g,{"content-position":"left"},{default:e(()=>[nt]),_:1}),i(F,{round:"",border:"",data:a.value,loading:l.value,style:{width:"100%"}},{default:e(()=>[i(m,{align:"center",field:"id",title:"ID",width:"65"}),i(m,{align:"center",field:"timestamp",title:"Date",width:"180px"},{default:e(({row:t})=>[f("span",null,r(y(L)(t.timestamp,"{y}-{m}-{d} {h}:{i}")),1)]),_:1}),i(m,{align:"center",field:"author",title:"Author",width:"110px"}),i(m,{width:"100px",title:"Importance"},{default:e(({row:t})=>[(n(!0),h(b,null,M(t.importance,o=>(n(),_(V,{key:o,"icon-class":"star",class:"icon-star"}))),128))]),_:1}),i(m,{align:"center",title:"Readings",width:"95"},{default:e(({row:t})=>[f("span",null,r(t.pageviews),1)]),_:1}),i(m,{"class-name":"status-col",label:"Status",width:"110"},{default:e(({row:t})=>[i(E,{type:x(t.status)},{default:e(()=>[p(r(t.status),1)]),_:2},1032,["type"])]),_:1}),i(m,{"min-width":"300px",title:"Title"},{default:e(({row:t})=>[t.edit?(n(),h(b,{key:0},[i(z,{modelValue:t.title,"onUpdate:modelValue":o=>t.title=o,class:"edit-input",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),i(w,{class:"cancel-btn",size:"small",type:"warning",onClick:o=>C(t)},{default:e(()=>[ot]),_:2},1032,["onClick"])],64)):(n(),h("span",st,r(t.title),1))]),_:1}),i(m,{align:"center",title:"Actions",width:"120"},{default:e(({row:t})=>[t.edit?(n(),_(v,{key:0,size:"mini",status:"success",icon:"el-icon-circle-check-outline",onClick:o=>T(t)},{default:e(()=>[ct]),_:2},1032,["onClick"])):(n(),_(v,{key:1,size:"mini",status:"primary",icon:"el-icon-circle-check-outline",onClick:o=>t.edit=!t.edit},{default:e(()=>[dt]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data","loading"])])]),_:1})}}});var se=G(pt,[["__scopeId","data-v-5fd3193a"]]);export{se as default};