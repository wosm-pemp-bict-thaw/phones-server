import{l as L,n as O}from"./chunk-NMWMPSNB.js";import{Ab as F,Ea as T,Hb as P,Ib as w,Qa as h,Ra as d,Va as c,X as N,Y as I,Ya as a,Za as s,_a as y,bb as B,db as b,eb as v,fb as o,gb as g,hb as m,ib as C,jb as l,kb as u,qb as S,xb as k,ya as i,yb as E,za as _,zb as D}from"./chunk-TGSJDQ3N.js";var M=(n,t)=>({"bg-success":n,"bg-danger":t}),V=(n,t)=>({"btn-success":n,"btn-danger":t});function $(n,t){if(n&1&&(a(0,"span"),o(1),s()),n&2){let e=v();i(),m(" ",e.sortDirection()==="asc"?"\u25B2":"\u25BC"," ")}}function q(n,t){if(n&1&&(a(0,"span"),o(1),s()),n&2){let e=v();i(),m(" ",e.sortDirection()==="asc"?"\u25B2":"\u25BC"," ")}}function z(n,t){if(n&1&&(a(0,"span"),o(1),s()),n&2){let e=v();i(),m(" ",e.sortDirection()==="asc"?"\u25B2":"\u25BC"," ")}}function A(n,t){if(n&1){let e=B();a(0,"tr")(1,"td"),o(2),s(),a(3,"td"),o(4),s(),a(5,"td"),o(6),s(),a(7,"td")(8,"span",5),o(9),s()(),a(10,"td")(11,"button",6),b("click",function(){let p=N(e).$implicit,f=v();return I(f.toggleStatus(p))}),o(12),l(13,"translate"),l(14,"translate"),s()()()}if(n&2){let e=t.$implicit;i(2),g(e.id),i(2),g(e.number),i(2),g(e.messages),i(2),c("ngClass",C(11,M,e.status==="active",e.status==="inactive")),i(),m(" ",e.status," "),i(2),c("ngClass",C(14,V,e.status==="inactive",e.status==="active")),i(),m(" ",e.status==="active"?u(13,7,"dashboard.numbers_data.inactive"):u(14,9,"dashboard.numbers_data.active")," ")}}var j=class n{constructor(t,e,r){this.toastr=t;this.translate=e;this.numberService=r}numbers;sortColumn=h("");sortDirection=h("asc");sortedNumbers=S(()=>{let t=this.sortColumn(),e=this.sortDirection(),r=this.filteredNumbers();return t?[...r].sort((f,x)=>f[t]<x[t]?e==="asc"?-1:1:f[t]>x[t]?e==="asc"?1:-1:0):r});ngOnInit(){this.numbers=this.numberService.numbers}currentFilter;filteredNumbers=S(()=>{let t=this.currentFilter(),e=this.numbers();return t==="all"?e:e.filter(r=>r.status===t)});toggleStatus(t){this.numberService.toggleStatus(t);let e=this.translate.translate("dashboard.ui.toast.success"),r=this.translate.translate("dashboard.ui.toast.statusChanged");this.toastr.success(r,e,{timeOut:3e3})}setSort(t){this.sortColumn()===t?this.sortDirection.set(this.sortDirection()==="asc"?"desc":"asc"):(this.sortColumn.set(t),this.sortDirection.set("asc"))}trackByNumber(t,e){return e.id}static \u0275fac=function(e){return new(e||n)(_(L),_(P),_(O))};static \u0275cmp=T({type:n,selectors:[["app-number-list"]],inputs:{currentFilter:"currentFilter"},decls:21,vars:17,consts:[[1,"table","table-hover","shadow-sm","rounded"],[1,"table-primary"],[1,"sortable",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"badge",3,"ngClass"],[1,"btn","btn-sm",3,"click","ngClass"]],template:function(e,r){e&1&&(a(0,"table",0)(1,"thead",1)(2,"tr")(3,"th",2),b("click",function(){return r.setSort("id")}),o(4),l(5,"translate"),d(6,$,2,1,"span",3),s(),a(7,"th",2),b("click",function(){return r.setSort("number")}),o(8),l(9,"translate"),d(10,q,2,1,"span",3),s(),a(11,"th",2),b("click",function(){return r.setSort("messages")}),o(12),l(13,"translate"),d(14,z,2,1,"span",3),s(),a(15,"th"),o(16),l(17,"translate"),s(),y(18,"th"),s()(),a(19,"tbody"),d(20,A,15,17,"tr",4),s()()),e&2&&(i(4),m(" ",u(5,9,"dashboard.numbers_data.id")," "),i(2),c("ngIf",r.sortColumn()==="id"),i(2),m(" ",u(9,11,"dashboard.numbers_data.number")," "),i(2),c("ngIf",r.sortColumn()==="number"),i(2),m(" ",u(13,13,"dashboard.numbers_data.messages")," "),i(2),c("ngIf",r.sortColumn()==="messages"),i(2),m(" ",u(17,15,"dashboard.numbers_data.status")," "),i(4),c("ngForOf",r.sortedNumbers())("ngForTrackBy",r.trackByNumber))},dependencies:[F,k,E,D,w],encapsulation:2,changeDetection:0})};export{j as NumberListComponent};
