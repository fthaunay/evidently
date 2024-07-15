const __vite__fileDeps=["static/js/index-C88TO56P.js","static/js/vendor-DRRvL2bZ.js","static/js/createSvgIcon-Cky3vhEa.js","static/js/index-Cndxj7-X.js","static/js/DashboardViewParams-CtX565DS.js","static/js/index-DAGvxKAA.js","static/js/DashboardWidgets-DfMNi9ay.js","static/js/DashboardContent-Bltq1_up.js","static/js/Edit-CBY3z5Ql.js","static/js/index-CzjH_Znl.js","static/js/index-Cm1h66T6.js","static/js/ContentCopy-DfRDJjMT.js","static/css/index-C5isHALn.css","static/js/index-BhtyyJpo.js","static/js/index-B8zGyO85.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var K=Object.defineProperty;var X=(t,e,r)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var T=(t,e,r)=>(X(t,typeof e!="symbol"?e+"":e,r),r);import{c as U,g as x,u as Z,j as s,A,a as F,i as tt,T as k,b as et,R,r as rt,S as st,B as b,I as ot,C as nt,d as it,e as B,f as y,h as w,L as at,k as ct,G as I,F as ht,l as dt,m as lt,n as ut,o as pt,M as p,D as G,p as ft,q as mt,s as D,z as u,t as jt,v as xt,w as yt,x as gt}from"./vendor-DRRvL2bZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const{transitions:E}=U(),j="#ed0500",_t="#ded5d5",vt=U({shape:{borderRadius:5},palette:{primary:{main:x[900],light:x[200]},secondary:{main:j,dark:"#c10400",light:x[200]},background:{default:"#fff",paper:"#fff"}},components:{MuiLink:{styleOverrides:{root:{transition:E.create("color",{duration:E.duration.enteringScreen}),"&:hover":{color:j}}}},MuiTabs:{styleOverrides:{flexContainer:{gap:"10px"},indicator:{backgroundColor:j}}},MuiButton:{styleOverrides:{contained:{"&:hover":{background:x[800]}},outlined:{"&:hover":{color:j,borderColor:j,background:"#fff"}},text:{"&:hover":{color:j,borderColor:j}}}},MuiTab:{defaultProps:{color:"secondary"},styleOverrides:{root:{fontSize:"1rem",borderRadius:"5px","&:hover":{background:x[200]}}}},MuiIconButton:{styleOverrides:{root:{transition:E.create("color",{duration:E.duration.enteringScreen}),color:x[900],"&:hover":{color:j}}}},MuiSwitch:{defaultProps:{color:"secondary"}},MuiToggleButton:{defaultProps:{color:"secondary"},styleOverrides:{root:{transition:E.create("color",{duration:E.duration.enteringScreen}),color:x[900],"&:hover":{color:j},"&.Mui-disabled":{border:"unset",background:x[100]}}}},MuiToggleButtonGroup:{defaultProps:{color:"secondary"}},MuiLinearProgress:{defaultProps:{color:"secondary"}},MuiPaper:{styleOverrides:{root:{boxShadow:"unset",border:"1px solid",borderColor:_t}}}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontWeight:"bold",textTransform:"none"}}}),_=()=>{var e;const t=Z();return s.jsxs(A,{severity:"error",children:[s.jsx(F,{children:"Something went wrong"}),tt(t)&&s.jsxs(s.Fragment,{children:[s.jsx(k,{fontWeight:"bold",children:[`Status: ${t.status}`,typeof((e=t.data)==null?void 0:e.detail)=="string"&&t.data.detail].filter(Boolean).join(", ")}),typeof t.data=="string"&&s.jsx(k,{children:t.data})]}),typeof t=="string"&&s.jsx(k,{fontWeight:"bold",children:t})]})},z=({data:t})=>{const[e,r]=R.useState(!1),o=R.useRef(null);return rt.useEffect(()=>{t!=null&&t.error&&(o.current=t.error,r(!0))},[t]),s.jsx(st,{open:e,onClose:(n,i)=>{i!=="clickaway"&&r(!1)},children:s.jsx(A,{severity:"error",children:s.jsxs(b,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:2,children:[s.jsxs(b,{children:[s.jsx(F,{children:"Something went wrong"}),o.current&&s.jsx(k,{fontWeight:"bold",children:[typeof o.current.status_code=="number"&&`Status: ${o.current.status_code}`,typeof o.current.detail=="string"&&o.current.detail].filter(Boolean).join(", ")})]}),s.jsx(b,{children:s.jsx(ot,{size:"small","aria-label":"close",color:"inherit",onClick:()=>{r(!1)},children:s.jsx(nt,{})})})]})})})},M=()=>{const t=et();return s.jsx(z,{data:t})},St=()=>{var r;const e=(r=it().find(o=>{var n;return!!((n=o.data)!=null&&n.error)}))==null?void 0:r.data;return s.jsx(z,{data:e})},bt="modulepreload",wt=function(t){return"/"+t},V={},g=function(e,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(r.map(c=>{if(c=wt(c),c in V)return;V[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":bt,f||(h.as="script",h.crossOrigin=""),h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),f)return new Promise((v,S)=>{h.addEventListener("load",v),h.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Et=({api:t})=>({loader:()=>t.getVersion()});class Pt{constructor(){T(this,"at",0);T(this,"ch","");T(this,"text","");T(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(e){throw{name:"SyntaxError",message:e,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(e){e!==this.ch&&this.error(`Expected '${e}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var e="";if(this.ch==="-"&&(e="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),-1/0;for(;this.ch>="0"&&this.ch<="9";)e+=this.ch,this.next();if(this.ch===".")for(e+=".";this.next()&&this.ch>="0"&&this.ch<="9";)e+=this.ch;if(this.ch==="e"||this.ch==="E")for(e+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(e+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)e+=this.ch,this.next();return+e}string(){var e,r,o="",n;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),o;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(n=0,r=0;r<4&&(e=parseInt(this.next(),16),!!isFinite(e));r++)n=n*16+e;o+=String.fromCharCode(n)}else if(this.escapee[this.ch])o+=this.escapee[this.ch];else break;else o+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),1/0}this.error("Unexpected '"+this.ch+"'")}array(){var e=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),e;for(;this.ch;){if(e.push(this.value()),this.white(),this.ch==="]")return this.check("]"),e;this.check(","),this.white()}}this.error("Bad array")}object(){var e,r={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),r;for(;this.ch;){if(e=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(r,e)&&this.error('Duplicate key "'+e+'"'),r[e]=this.value(),this.white(),this.ch==="}")return this.check("}"),r;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(e,r){let o;return this.text=e,this.at=0,this.ch=" ",o=this.value(),this.white(),this.ch&&this.error("Syntax error"),r!==void 0?function n(i,a){var c,f,d=i[a];if(d&&typeof d=="object")for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(f=n(d,c),f!==void 0?d[c]=f:delete d[c]);return r.call(i,a,d)}({"":o},""):o}}const C=t=>new Pt().parse(t),kt=t=>{const e=B({baseUrl:t});return{async getProjectDashboard({project:r,options:o}){const{data:n,error:i,response:a}=await e.GET("/api/projects/{project_id}/dashboard",{parseAs:"text",params:{path:{project_id:r.id},query:{timestamp_start:o.timestamp_start,timestamp_end:o.timestamp_end}}});if(i)throw y(i,{status:a.status});return C(n)},async getSnapshotDashboard({project:r,snapshot:o}){const{data:n,error:i,response:a}=await e.GET("/api/projects/{project_id}/{snapshot_id}/data",{parseAs:"text",params:{path:{project_id:r.id,snapshot_id:o.id}}});if(i)throw y(i,{status:a.status});return C(n)},async getDashboardGraph({project:r,snapshot:o,graph:n}){const{data:i,error:a,response:c}=await e.GET("/api/projects/{project_id}/{snapshot_id}/graphs_data/{graph_id}",{parseAs:"text",params:{path:{project_id:r.id,snapshot_id:o.id,graph_id:encodeURIComponent(n.id)}}});if(a)throw y(a,{status:c.status});return C(i)}}},P=t=>{if(t.id)return{...t,id:t.id};throw`"id" is missing in object: ${JSON.stringify(t)}`},H=t=>{if(t.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})},Tt=t=>{const e=B({baseUrl:t});return{async list(){const{data:r,error:o,response:n}=await e.GET("/api/projects");if(o)throw y(o,{status:n.status});return r.map(P)},async update({body:r}){const{data:o,error:n}=await e.POST("/api/projects/{project_id}/info",{params:{path:{project_id:r.id}},body:r});return n?{error:n}:P(o)},async get({id:r}){const{data:o,error:n,response:i}=await e.GET("/api/projects/{project_id}/info",{params:{path:{project_id:r}}});if(n)throw y(n,{status:i.status});return P(o)},async delete({id:r}){const{error:o}=await e.DELETE("/api/projects/{project_id}",{params:{path:{project_id:r}}});return o?{error:o}:null},async create({body:r}){const{data:o,error:n}=await e.POST("/api/projects",{body:r});return n?{error:n}:P(o)},async reloadSnapshots({project:r}){const{error:o}=await e.GET("/api/projects/{project_id}/reload",{params:{path:{project_id:r.id}}});return o?{error:o}:null},async deleteSnapshot({project:r,snapshot:o}){const{error:n}=await e.DELETE("/api/projects/{project_id}/{snapshot_id}",{params:{path:{project_id:r.id,snapshot_id:o.id}}});return n?{error:n}:null},async listReports({project:r}){const{data:o,error:n,response:i}=await e.GET("/api/projects/{project_id}/reports",{params:{path:{project_id:r.id}}});if(n)throw y(n,{status:i.status});return o.map(P)},async listTestSuites({project:r}){const{data:o,error:n,response:i}=await e.GET("/api/projects/{project_id}/test_suites",{params:{path:{project_id:r.id}}});if(n)throw y(n,{status:i.status});return o.map(P)}}},It=t=>{const e=B({baseUrl:t});return{async getVersion(){const{data:r,error:o,response:n}=await e.GET("/api/version");if(o)throw y(o,{status:n.status});return r}}},$=kt("/"),O=Tt("/"),Dt=It("/"),Ot="/static/img/logo.png",{loader:Ct}=Et({api:Dt}),Lt={path:"/",lazy:async()=>{const{HomeComponentTemplate:t,...e}=await g(()=>import("./index-C88TO56P.js"),__vite__mapDeps([0,1,2]));return{Component:()=>s.jsxs(s.Fragment,{children:[s.jsx(St,{}),s.jsx(t,{logoSrc:Ot})]}),...e}},loader:Ct,ErrorBoundary:_},Rt=({api:t})=>({loader:({params:e})=>{const{projectId:r}=e;return w(r),t.get({id:r})}});function L(t){return typeof t!=typeof new Date?(console.log(`not a date ${typeof t}: ${t}`),t):`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}T${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`}const l={FROM:"date_from",TO:"date_to"},At=t=>{let e=t.get(l.FROM),r=t.get(l.TO);return{date_from:e,date_to:r}},Ft=({dataRanges:t})=>{const[e,r]=mt(),{date_from:o,date_to:n}=At(e),i=D(o||t.minDate),a=D(n||t.maxDate);return{isCorrectTimeInterval:i.isValid()&&a.isValid()&&(i.isSame(a)||i.isBefore(a)),date_from:i,date_to:a,setSearchParams:r}},ue=({dataRanges:t,isDashboardHideDates:e,setIsDashboardHideDates:r,isShowDateFilter:o})=>{const{isCorrectTimeInterval:n,date_from:i,date_to:a,setSearchParams:c}=Ft({dataRanges:t}),f=n?"":"incorrect time interval",d=h=>v=>{c(S=>(S.delete(h),v&&S.append(h,L(v.toDate())),S),{preventScrollReset:!0,replace:!0})};return s.jsx(at,{dateAdapter:ct,adapterLocale:"en-gb",children:s.jsxs(I,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",alignItems:"flex-end",children:[s.jsx(I,{item:!0,children:s.jsx(b,{minWidth:180,display:"flex",justifyContent:"center",children:s.jsx(ht,{control:s.jsx(dt,{checked:e,onChange:h=>r(h.target.checked)}),label:"Show in order"})})}),o&&s.jsxs(s.Fragment,{children:[s.jsx(I,{item:!0,xs:12,md:2,children:s.jsxs(lt,{fullWidth:!0,children:[s.jsx(ut,{children:"Period"}),s.jsxs(pt,{variant:"standard",defaultValue:"",onChange:h=>{const[v,S]=h.target.value.split(",");if(v===""){c(m=>(m.delete(l.FROM),m.delete(l.TO),m),{preventScrollReset:!0,replace:!0});return}const[Q,Y]=[Number(v),S],N=t.maxDate.subtract(Q,Y);c(m=>(m.delete(l.FROM),m.delete(l.TO),m.append(l.FROM,L(N.isBefore(t.minDate)?t.minDate.toDate():N.toDate())),m.append(l.TO,L(t.maxDate.toDate())),m),{preventScrollReset:!0,replace:!0})},children:[s.jsx(p,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(p,{value:"10,minutes",children:"Last 10 Minutes"}),s.jsx(p,{value:"30,minutes",children:"Last 30 Minutes"}),s.jsx(p,{value:"1,hours",children:"Last 1 Hours"}),s.jsx(p,{value:"2,hours",children:"Last 2 Hours"}),s.jsx(p,{value:"8,hours",children:"Last 8 Hours"}),s.jsx(p,{value:"24,hours",children:"Last 24 Hours"}),s.jsx(p,{value:"7,days",children:"Last 7 Days"}),s.jsx(p,{value:"14,days",children:"Last 14 Days"}),s.jsx(p,{value:"28,days",children:"Last 28 Days"}),s.jsx(p,{value:"60,days",children:"Last 60 Days"})]})]})}),s.jsx(I,{item:!0,children:s.jsxs(b,{display:"flex",alignItems:"center",gap:2,children:[s.jsx(G,{minDate:t.minDate,maxDate:t.maxDate&&a,slotProps:{textField:{variant:"standard"}},label:"From",value:i,onChange:d(l.FROM)}),s.jsx(b,{height:1,display:"flex",alignItems:"center",children:s.jsx(k,{children:" - "})}),s.jsx(G,{minDate:t.minDate&&i,maxDate:t.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:a,onChange:d(l.TO)})]})}),s.jsx(I,{item:!0,xs:12,children:s.jsx(ft,{unmountOnExit:!0,in:!n,children:s.jsxs(A,{severity:"error",children:[s.jsx(F,{children:"Error"}),f]})})})]})]})})},Bt=({api:t})=>({loader:({params:e,request:r})=>{w(e.projectId);const{searchParams:o}=new URL(r.url);let n=o.get(l.FROM),i=o.get(l.TO);return n&&!D(n).isValid()&&(n=null),i&&!D(i).isValid()&&(i=null),t.getProjectDashboard({project:{id:e.projectId},options:{timestamp_start:n,timestamp_end:i}})}}),{loader:Mt}=Bt({api:$}),$t={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:t},{DashboardWidgets:e}]=await Promise.all([g(()=>import("./index-Cndxj7-X.js"),__vite__mapDeps([3,1,4,5])),g(()=>import("./DashboardWidgets-DfMNi9ay.js"),__vite__mapDeps([6,1,7,4,2,8]))]);return{Component:()=>s.jsx(t,{Dashboard:({data:{widgets:r}})=>s.jsx(e,{widgets:r})})}},loader:Mt,ErrorBoundary:_},W={RELOAD_SNAPSHOTS:"reload-snapshots",DELETE_SNAPSHOT:"delete-snapshot"},Nt=u.object({action:u.literal(W.RELOAD_SNAPSHOTS)}),Gt=u.object({action:u.literal(W.DELETE_SNAPSHOT),snapshotId:u.string().uuid()}),q=t=>async({request:e,params:r})=>{w(r.projectId),H(e);const o=await e.json();if(Nt.safeParse(o).success)return t.reloadSnapshots({project:{id:r.projectId}});const i=Gt.safeParse(o);return i.success?t.deleteSnapshot({project:{id:r.projectId},snapshot:{id:i.data.snapshotId}}):{error:{status_code:!1,detail:"Unknown action"}}},Vt=({api:t})=>({loader:({params:e})=>(w(e.projectId),e.snapshotId?Promise.resolve([]):t.listReports({project:{id:e.projectId}})),action:q(t)}),Ut=({api:t})=>({loader:({params:e})=>(w(e.projectId),e.snapshotId?Promise.resolve([]):t.listTestSuites({project:{id:e.projectId}})),action:q(t)}),zt=({api:t})=>({loader:({params:e})=>{const{projectId:r,snapshotId:o}=e;return w(r),w(o),t.getSnapshotDashboard({project:{id:r},snapshot:{id:o}})}}),{loader:Ht}=zt({api:$}),J={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:t,...e}=await g(()=>import("./index-CzjH_Znl.js"),__vite__mapDeps([9,1,7,4,2,8]));return{Component:()=>s.jsx(t,{api:$}),...e}},loader:Ht,ErrorBoundary:_},{loader:Wt,action:qt}=Vt({api:O}),Jt={id:"reports",path:"reports",lazy:async()=>{const{SnapshotsListTemplate:t,...e}=await g(()=>import("./index-Cm1h66T6.js"),__vite__mapDeps([10,1,5,11,2,12]));return{...e,Component:()=>s.jsxs(s.Fragment,{children:[s.jsx(M,{}),s.jsx(t,{type:"reports"})]})}},loader:Wt,action:qt,ErrorBoundary:_,children:[J]},{loader:Qt,action:Yt}=Ut({api:O}),Kt={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotsListTemplate:t,...e}=await g(()=>import("./index-Cm1h66T6.js"),__vite__mapDeps([10,1,5,11,2,12]));return{...e,Component:()=>s.jsxs(s.Fragment,{children:[s.jsx(M,{}),s.jsx(t,{type:"test suites"})]})}},loader:Qt,action:Yt,ErrorBoundary:_,children:[J]},{loader:Xt}=Rt({api:O}),Zt={path:"projects/:projectId",lazy:()=>g(()=>import("./index-BhtyyJpo.js"),__vite__mapDeps([13,1,11,2])),loader:Xt,ErrorBoundary:_,children:[$t,Jt,Kt]},te=u.object({action:u.literal("edit-project")}),ee=u.object({action:u.literal("create-new-project")}),re=u.object({action:u.literal("delete-project"),projectId:u.string().uuid()}),se=({api:t})=>({loader:()=>t.list(),action:async({request:e})=>{H(e);const r=await e.json();if(ee.safeParse(r).success)return t.create({body:r});const o=re.safeParse(r);if(o.success)return t.delete({id:o.data.projectId});if(te.safeParse(r).success)return t.update({body:r});throw"Undefined action"}}),{loader:oe,action:ne}=se({api:O}),ie={index:!0,lazy:()=>g(()=>import("./index-B8zGyO85.js"),__vite__mapDeps([14,1,8,2,5])).then(t=>({...t,Component:()=>s.jsxs(s.Fragment,{children:[s.jsx(M,{}),s.jsx(t.Component,{})]})})),loader:oe,action:ne,ErrorBoundary:_},ae={path:"*",Component:()=>s.jsx(b,{display:"flex",justifyContent:"center",children:s.jsx(k,{variant:"h4",children:"Page Not Found"})})},ce={...Lt,children:[ie,Zt,ae],ErrorBoundary:_},he=jt([ce]);xt.createRoot(document.getElementById("root")).render(s.jsx(R.StrictMode,{children:s.jsx(yt,{theme:vt,children:s.jsx(gt,{router:he})})}));export{ue as D};