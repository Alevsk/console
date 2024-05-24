"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[8642],{8642:(e,s,t)=>{t.r(s),t.d(s,{default:()=>M});var r=t(65043),n=t(89923),l=t(73216),i=t(20649),a=t(77938),c=t(99161),o=t(20554),d=t(64159),x=t(72237),p=t(64681),u=t(6681),K=t(48793),_=t(55968),h=t(70579);const S=(0,x.A)(r.lazy((()=>t.e(8825).then(t.bind(t,88825))))),M=()=>{const e=(0,o.jL)(),s=(0,l.Zp)(),[t,x]=(0,r.useState)(""),[M,j]=(0,r.useState)(!1),[E,y]=(0,r.useState)(""),[m,f]=(0,r.useState)(!1),[A,b]=(0,r.useState)([]),k=(0,a._)(c.Ms,[c.OV.KMS_DELETE_KEY]),C=(0,a._)(c.Ms,[c.OV.KMS_CREATE_KEY]),O=(0,a._)(c.Ms,[c.OV.KMS_IMPORT_KEY]),R=(0,a._)(c.Ms,[c.OV.KMS_LIST_KEYS]);(0,r.useEffect)((()=>{Y()}),[]),(0,r.useEffect)((()=>{f(!0)}),[t]),(0,r.useEffect)((()=>{if(m)if(R){let s=""===t.trim()?"*":t.trim();i.A.invoke("GET","/api/v1/kms/keys?pattern=".concat(s)).then((e=>{f(!1),b(e.results)})).catch((s=>{f(!1),e((0,d.C9)(s))}))}else f(!1)}),[m,f,b,e,R,t]);const Y=()=>{f(!0)},T=e=>{j(!0),y(e)},I=[];return k&&I.push({type:"delete",onClick:T,sendOnlyId:!0,disableButtonFunction:()=>!k}),(0,r.useEffect)((()=>{e((0,d.ph)("list_keys"))}),[e]),(0,h.jsxs)(r.Fragment,{children:[M&&(0,h.jsx)(S,{deleteOpen:M,selectedItem:E,closeDeleteModalAndRefresh:e=>{j(!1),e&&Y()}}),(0,h.jsx)(K.A,{label:"Key Management Service Keys",actions:(0,h.jsx)(_.A,{})}),(0,h.jsx)(n.Mxu,{children:(0,h.jsxs)(n.xA9,{container:!0,children:[(0,h.jsxs)(n.xA9,{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginLeft:"8px"}},children:[(0,h.jsx)(a.R,{scopes:[c.OV.KMS_LIST_KEYS],resource:c.Ms,errorProps:{disabled:!0},children:(0,h.jsx)(p.A,{onChange:x,placeholder:"Search Keys with pattern",value:t})}),(0,h.jsx)(a.R,{scopes:[c.OV.KMS_LIST_KEYS],resource:c.Ms,errorProps:{disabled:!0},children:(0,h.jsx)(u.A,{tooltip:"Refresh",children:(0,h.jsx)(n.$nd,{id:"refresh-keys",variant:"regular",icon:(0,h.jsx)(n.fNY,{}),onClick:()=>f(!0)})})}),O?(0,h.jsx)(a.R,{scopes:[c.OV.KMS_IMPORT_KEY],resource:c.Ms,errorProps:{disabled:!0},children:(0,h.jsx)(u.A,{tooltip:"Import Key",children:(0,h.jsx)(n.$nd,{id:"import-key",variant:"regular",icon:(0,h.jsx)(n.JMY,{}),onClick:()=>{s(c.zZ.KMS_KEYS_IMPORT)}})})}):null,C?(0,h.jsx)(a.R,{scopes:[c.OV.KMS_CREATE_KEY],resource:c.Ms,errorProps:{disabled:!0},children:(0,h.jsx)(u.A,{tooltip:"Create Key",children:(0,h.jsx)(n.$nd,{id:"create-key",label:"Create Key",variant:"callAction",icon:(0,h.jsx)(n.REV,{}),onClick:()=>s(c.zZ.KMS_KEYS_ADD)})})}):null]}),(0,h.jsx)(n.xA9,{item:!0,xs:12,sx:{marginTop:"5px"},children:(0,h.jsx)(a.R,{scopes:[c.OV.KMS_LIST_KEYS],resource:c.Ms,errorProps:{disabled:!0},children:(0,h.jsx)(n.bQt,{itemActions:I,columns:[{label:"Name",elementKey:"name"},{label:"Created By",elementKey:"createdBy"},{label:"Created At",elementKey:"createdAt"}],isLoading:m,records:A,entityName:"Keys",idField:"name"})})})]})})]})}}}]);
//# sourceMappingURL=8642.ab45092c.chunk.js.map