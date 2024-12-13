import{X as f,j as e,B as p,Y as k,L as x,o as b,Z as y,f as C,_ as S,$ as B,h as I,u as M,r as T,I as h,a0 as j,a1 as m,a2 as z,D as L,M as d,a3 as D,a4 as w,n as g,p as v,a5 as E,a6 as R,a7 as A}from"./vendor-C2GWNUp2.js";import{u as N}from"./index-Bk_zDyHx.js";const F=o=>{var t;return typeof((t=o==null?void 0:o.handle)==null?void 0:t.crumb)=="function"},H=()=>{const t=f().filter(F).map(({handle:s,data:r,id:n,pathname:i,params:a})=>s.crumb(r,{id:n,pathname:i,params:a}));return e.jsx(p,{children:e.jsx(k,{"aria-label":"breadcrumb",children:t.map(s=>e.jsx(x,{component:b,color:"inherit",to:s.to,children:s.linkText},s.to))})})},O=()=>{const o=y(),t=C(),{state:s}=S();return o.state!=="idle"||t.some(({state:n})=>n!=="idle")||s!=="idle"?e.jsx(p,{width:1,sx:{position:"fixed",top:0,left:0,zIndex:1e3},children:e.jsx(B,{sx:{height:"3px"}})}):null},P=()=>e.jsx(I,{children:e.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})})}),_=()=>{const{mode:o,setMode:t}=M(),s=N(),[r,n]=T.useState(null),i=l=>n(l.currentTarget),a=()=>n(null),u=!!r,c=u?"simple-popover":void 0;return o?e.jsxs("div",{children:[e.jsx(h,{"aria-describedby":c,onClick:i,children:s==="dark"?e.jsx(j,{}):e.jsx(m,{})}),e.jsx(z,{id:c,open:u,anchorEl:r,onClose:a,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:e.jsxs(L,{size:"small",value:o,onChange:l=>{t(l.target.value),a()},children:[e.jsx(d,{value:"system",children:"System"}),e.jsx(d,{value:"light",children:"Light"}),e.jsx(d,{value:"dark",children:"Dark"})]})})]}):e.jsx(h,{"aria-describedby":c,children:s==="dark"?e.jsx(j,{}):e.jsx(m,{})})};function Y({LogoSvg:o,version:t,authComponent:s}){return e.jsx(e.Fragment,{children:e.jsx(D,{position:"static",sx:{borderLeft:"none",borderRight:"none",borderTop:"none",borderBottom:"1px solid",borderColor:r=>r.palette.divider},color:"transparent",children:e.jsxs(w,{sx:{gap:1},children:[e.jsx(g,{flexGrow:1,justifyContent:"flex-start",direction:"row",children:e.jsxs(g,{direction:"row",alignItems:"flex-end",gap:1,children:[e.jsx(h,{component:b,to:"/",sx:r=>({color:"#4d4d4d",...r.applyStyles("dark",{color:r.palette.text.primary}),"&:hover":{borderRadius:"5px",color:r.palette.text.disabled,...r.applyStyles("dark",{color:r.palette.text.secondary})}}),children:e.jsx(o,{})}),e.jsx("span",{style:{verticalAlign:"super",fontSize:"0.75rem"},children:t})]})}),s,e.jsx(v,{component:x,startIcon:e.jsx(P,{}),href:"https://discord.gg/EJxU68uynY",target:"_blank",children:"Support"}),e.jsx(v,{component:x,href:"https://docs.evidentlyai.com",target:"_blank",children:"Docs"}),e.jsx(_,{})]})})})}const J=({LogoSvg:o,authComponent:t})=>{const{version:s}=E();return e.jsxs(e.Fragment,{children:[e.jsx(Y,{authComponent:t,version:s,LogoSvg:o}),e.jsx(O,{}),e.jsx(R,{}),e.jsxs(p,{p:3,children:[e.jsx(H,{}),e.jsx(A,{})]})]})},U={crumb:()=>({to:"/",linkText:"Home"})};export{J as HomeComponentTemplate,U as handle};