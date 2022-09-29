(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{4778:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemon/[id]",function(){return r(8107)}])},8107:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return et},default:function(){return er}});var a=r(7297),o=r(5893),n=r(7822),i=r(6829),l=r(1163),d=r(3366),s=r(7462),c=r(7294),p=r(6010),u=r(4780);let g=c.createContext();var h=r(6660),v=r(1268),m=r(7621),f=r(1588);function y(e){return(0,m.Z)("MuiTable",e)}(0,f.Z)("MuiTable",["root","stickyHeader"]);let b=["className","component","padding","size","stickyHeader"],Z=e=>{let{classes:t,stickyHeader:r}=e;return(0,u.Z)({root:["root",r&&"stickyHeader"]},y,t)},x=(0,v.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,s.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,s.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),w="table",k=c.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiTable"}),{className:a,component:n=w,padding:i="normal",size:l="medium",stickyHeader:u=!1}=r,v=(0,d.Z)(r,b),m=(0,s.Z)({},r,{component:n,padding:i,size:l,stickyHeader:u}),f=Z(m),y=c.useMemo(()=>({padding:i,size:l,stickyHeader:u}),[i,l,u]);return(0,o.jsx)(g.Provider,{value:y,children:(0,o.jsx)(x,(0,s.Z)({as:n,role:n===w?null:"table",ref:t,className:(0,p.Z)(f.root,a),ownerState:m},v))})}),T=c.createContext();function j(e){return(0,m.Z)("MuiTableHead",e)}(0,f.Z)("MuiTableHead",["root"]);let R=["className","component"],C=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},j,t)},M=(0,v.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),H={variant:"head"},N="thead",$=c.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiTableHead"}),{className:a,component:n=N}=r,i=(0,d.Z)(r,R),l=(0,s.Z)({},r,{component:n}),c=C(l);return(0,o.jsx)(T.Provider,{value:H,children:(0,o.jsx)(M,(0,s.Z)({as:n,className:(0,p.Z)(c.root,a),ref:t,role:n===N?null:"rowgroup",ownerState:l},i))})});var _=r(1796);function z(e){return(0,m.Z)("MuiTableRow",e)}let P=(0,f.Z)("MuiTableRow",["root","selected","hover","head","footer"]),S=["className","component","hover","selected"],A=e=>{let{classes:t,selected:r,hover:a,head:o,footer:n}=e;return(0,u.Z)({root:["root",r&&"selected",a&&"hover",o&&"head",n&&"footer"]},z,t)},O=(0,v.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${P.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,_.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,_.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),B=c.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiTableRow"}),{className:a,component:n="tr",hover:i=!1,selected:l=!1}=r,u=(0,d.Z)(r,S),g=c.useContext(T),v=(0,s.Z)({},r,{component:n,hover:i,selected:l,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),m=A(v);return(0,o.jsx)(O,(0,s.Z)({as:n,ref:t,className:(0,p.Z)(m.root,a),role:"tr"===n?null:"row",ownerState:v},u))});var E=r(6622);function q(e){return(0,m.Z)("MuiTableCell",e)}let F=(0,f.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),D=["align","className","component","padding","scope","size","sortDirection","variant"],W=e=>{let{classes:t,variant:r,align:a,padding:o,size:n,stickyHeader:i}=e,l={root:["root",r,i&&"stickyHeader","inherit"!==a&&`align${(0,E.Z)(a)}`,"normal"!==o&&`padding${(0,E.Z)(o)}`,`size${(0,E.Z)(n)}`]};return(0,u.Z)(l,q,t)},X=(0,v.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,E.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,E.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,E.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,s.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,_.$n)((0,_.Fq)(e.palette.divider,1),.88):(0,_._j)((0,_.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${F.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),G=c.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiTableCell"}),{align:a="inherit",className:n,component:i,padding:l,scope:u,size:v,sortDirection:m,variant:f}=r,y=(0,d.Z)(r,D),b=c.useContext(g),Z=c.useContext(T),x=Z&&"head"===Z.variant,w;w=i||(x?"th":"td");let k=u;!k&&x&&(k="col");let j=f||Z&&Z.variant,R=(0,s.Z)({},r,{align:a,component:w,padding:l||(b&&b.padding?b.padding:"normal"),size:v||(b&&b.size?b.size:"medium"),sortDirection:m,stickyHeader:"head"===j&&b&&b.stickyHeader,variant:j}),C=W(R),M=null;return m&&(M="asc"===m?"ascending":"descending"),(0,o.jsx)(X,(0,s.Z)({as:w,ref:t,className:(0,p.Z)(C.root,n),"aria-sort":M,scope:k,ownerState:R},y))});function I(e){return(0,m.Z)("MuiTableBody",e)}(0,f.Z)("MuiTableBody",["root"]);let J=["className","component"],L=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},I,t)},V=(0,v.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),K={variant:"body"},Q="tbody",U=c.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiTableBody"}),{className:a,component:n=Q}=r,i=(0,d.Z)(r,J),l=(0,s.Z)({},r,{component:n}),c=L(l);return(0,o.jsx)(T.Provider,{value:K,children:(0,o.jsx)(V,(0,s.Z)({className:(0,p.Z)(c.root,a),as:n,ref:t,role:n===Q?null:"rowgroup",ownerState:l},i))})});function Y(){var e=(0,a.Z)(["\n	margin: auto;\n	width: 800px;\n	padding-top: 1rem;\n"]);return Y=function(){return e},e}var ee=i.Z.div(Y()),et=!0,er=(0,l.withRouter)(function(e){var t=e.pokemon;return(0,o.jsxs)(ee,{children:[(0,o.jsx)(n.ZP,{}),t&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:t.name.english}),(0,o.jsxs)(k,{children:[(0,o.jsx)($,{children:(0,o.jsxs)(B,{children:[(0,o.jsx)(G,{children:"Attribute"}),(0,o.jsx)(G,{children:"Value"})]})}),(0,o.jsx)(U,{children:Object.keys(t.base).map(function(e){return(0,o.jsxs)(B,{children:[(0,o.jsx)(G,{children:e}),(0,o.jsx)(G,{children:t.base[e]})]},e)})})]})]})]})})},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[7,774,888,179],function(){return e(e.s=4778)}),_N_E=e.O()}]);