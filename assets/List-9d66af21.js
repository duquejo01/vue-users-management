import{d as v,c as r,b as e,F as g,m as x,o as d,n as C,j as f,t as o,p as S,i as L}from"./vue.esm-bundler-ebeff139.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const n=s=>(S("data-v-a413bb6b"),s=s(),L(),s),I=["checked"],A=n(()=>e("th",null,"Name",-1)),B=n(()=>e("th",null,"Email",-1)),F=n(()=>e("th",null,"Phone number",-1)),V=n(()=>e("th",null,"Role",-1)),w=n(()=>e("th",null,"Created at",-1)),E=["onClick","title"],$=["checked"],j={key:1},z=n(()=>e("td",{colspan:"6"},[f("No users available. "),e("em",null,"You should create one...")],-1)),D=[z],P="https://placehold.co/50x50",k={__name:"List",props:{class:String,users:{type:Array,default(){return[]}}},emits:["select-user"],setup(s,{emit:c}){const _=s,l=v([]),a=v(!1),b=u=>{if(a.value&&(l.value=[],a.value=!1),l.value.length>0&&l.value.some(h=>h.id===u.id))return c("select-user",[]),l.value=[];c("select-user",[u]),l.value=[u]},y=()=>{if(a.value){a.value=!1,l.value=[],c("select-user",[]);return}a.value=!0,l.value=_.users,c("select-user",_.users)};return(u,h)=>(d(),r("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("input",{type:"checkbox",onClick:y,checked:a.value,title:"Select all"},null,8,I)]),A,B,F,V,w])]),e("tbody",null,[s.users.length>0?(d(!0),r(g,{key:0},x(s.users,t=>{var m,p;return d(),r("tr",{key:t.id,onClick:i=>b(t),class:C({selected:(m=l.value)==null?void 0:m.some(i=>i.id===t.id)}),title:`Click to select ${t.name}`},[e("td",null,[e("input",{type:"checkbox",checked:(p=l.value)==null?void 0:p.some(i=>i.id===t.id)},null,8,$)]),e("td",null,[e("img",{src:P}),f(o(t.name),1)]),e("td",null,o(t.email),1),e("td",null,o(t.phone),1),e("td",null,o(t.role),1),e("td",null,o(t.createdAt),1)],10,E)}),128)):(d(),r("tr",j,D))])]))}},Y=N(k,[["__scopeId","data-v-a413bb6b"]]);k.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"class",type:{name:"string"}},{name:"users",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"select-user"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/atoms/List/List.vue"]};export{Y as L};
//# sourceMappingURL=List-9d66af21.js.map