import{$a as vt,Aa as Wt,Ab as oe,Bb as re,Ca as Xt,Cb as Ct,Db as ae,Ea as ft,Eb as ce,Fa as mt,Fb as le,Ia as Jt,J as A,Ja as J,K as O,Ka as Q,L as p,La as gt,M as rt,O as P,Oa as V,Q as c,Qa as R,R as b,Ra as Z,S as at,T as Bt,Ua as $,Va as f,Wa as z,X as ct,Xa as E,Y as lt,Ya as _,Za as S,_ as X,_a as G,a as h,ab as yt,b as T,ba as C,bb as _t,ca as ut,cb as Qt,db as Y,ea as Ut,eb as g,fa as dt,fb as D,ga as Vt,h as M,ha as k,hb as N,ja as ht,la as B,ma as F,na as j,oa as Zt,ob as te,pa as $t,pb as ee,qa as zt,ra as Gt,rb as tt,sa as Yt,sb as ie,ta as qt,tb as ne,ua as Kt,ub as v,va as w,wa as pt,wb as se,xa as U,ya as u,za as x,zb as Tt}from"./chunk-TGSJDQ3N.js";var wt=class extends ne{supportsDOMEvents=!0},Et=class n extends wt{static makeCurrent(){ie(new n)}onAndCancel(i,t,e){return i.addEventListener(t,e),()=>{i.removeEventListener(t,e)}}dispatchEvent(i,t){i.dispatchEvent(t)}remove(i){i.remove()}createElement(i,t){return t=t||this.getDefaultDocument(),t.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,t){return t==="window"?window:t==="document"?i:t==="body"?i.body:null}getBaseHref(i){let t=Ne();return t==null?null:He(t)}resetBaseElement(){q=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return se(document.cookie,i)}},q=null;function Ne(){return q=q||document.querySelector("base"),q?q.getAttribute("href"):null}function He(n){return new URL(n,document.baseURI).pathname}var St=class{addToWindow(i){O.getAngularTestability=(e,s=!0)=>{let o=i.findTestabilityInTree(e,s);if(o==null)throw new A(5103,!1);return o},O.getAllAngularTestabilities=()=>i.getAllTestabilities(),O.getAllAngularRootElements=()=>i.getAllRootElements();let t=e=>{let s=O.getAllAngularTestabilities(),o=s.length,r=function(){o--,o==0&&e()};s.forEach(a=>{a.whenStable(r)})};O.frameworkStabilizers||(O.frameworkStabilizers=[]),O.frameworkStabilizers.push(t)}findTestabilityInTree(i,t,e){if(t==null)return null;let s=i.getTestability(t);return s??(e?tt().isShadowRoot(t)?this.findTestabilityInTree(i,t.host,!0):this.findTestabilityInTree(i,t.parentElement,!0):null)}},Pe=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),Dt=new P(""),ge=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(s=>{s.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,e,s){return this._findPluginFor(e).addEventListener(t,e,s)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(o=>o.supports(t)),!e)throw new A(5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(c(Dt),c(C))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),et=class{_doc;constructor(i){this._doc=i}manager},It="ng-app-id";function ue(n){for(let i of n)i.remove()}function de(n,i){let t=i.createElement("style");return t.textContent=n,t}function Fe(n,i,t){let e=n.head?.querySelectorAll(`style[${It}="${i}"]`);if(e)for(let s of e)s.textContent&&(s.removeAttribute(It),t.set(s.textContent,{usage:0,elements:[s]}))}function Mt(n,i){let t=i.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var ve=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,e,s,o={}){this.doc=t,this.appId=e,this.nonce=s,this.isServer=Ct(o),Fe(t,e,this.inline),this.hosts.add(t.head)}addStyles(t,e){for(let s of t)this.addUsage(s,this.inline,de);e?.forEach(s=>this.addUsage(s,this.external,Mt))}removeStyles(t,e){for(let s of t)this.removeUsage(s,this.inline);e?.forEach(s=>this.removeUsage(s,this.external))}addUsage(t,e,s){let o=e.get(t);o?o.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,s(t,this.doc)))})}removeUsage(t,e){let s=e.get(t);s&&(s.usage--,s.usage<=0&&(ue(s.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])ue(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[e,{elements:s}]of this.inline)s.push(this.addElement(t,de(e,this.doc)));for(let[e,{elements:s}]of this.external)s.push(this.addElement(t,Mt(e,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),this.isServer&&e.setAttribute(It,this.appId),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(c(v),c(dt),c(ht,8),c(k))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),bt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Rt=/%COMP%/g,ye="%COMP%",je=`_nghost-${ye}`,Le=`_ngcontent-${ye}`,ke=!0,Be=new P("",{providedIn:"root",factory:()=>ke});function Ue(n){return Le.replace(Rt,n)}function Ve(n){return je.replace(Rt,n)}function _e(n,i){return i.map(t=>t.replace(Rt,n))}var he=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,e,s,o,r,a,l,d=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=r,this.platformId=a,this.ngZone=l,this.nonce=d,this.platformIsServer=Ct(a),this.defaultRenderer=new K(t,r,l,this.platformIsServer)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;this.platformIsServer&&e.encapsulation===B.ShadowDom&&(e=T(h({},e),{encapsulation:B.Emulated}));let s=this.getOrCreateRenderer(t,e);return s instanceof it?s.applyToHost(t):s instanceof W&&s.applyStyles(),s}getOrCreateRenderer(t,e){let s=this.rendererByCompId,o=s.get(e.id);if(!o){let r=this.doc,a=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,y=this.platformIsServer;switch(e.encapsulation){case B.Emulated:o=new it(l,d,e,this.appId,m,r,a,y);break;case B.ShadowDom:return new Ot(l,d,t,e,r,a,this.nonce,y);default:o=new W(l,d,e,m,r,a,y);break}s.set(e.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(e){return new(e||n)(c(ge),c(ve),c(dt),c(Be),c(v),c(k),c(C),c(ht))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),K=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,t,e,s){this.eventManager=i,this.doc=t,this.ngZone=e,this.platformIsServer=s}destroy(){}destroyNode=null;createElement(i,t){return t?this.doc.createElementNS(bt[t]||t,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,t){(pe(i)?i.content:i).appendChild(t)}insertBefore(i,t,e){i&&(pe(i)?i.content:i).insertBefore(t,e)}removeChild(i,t){t.remove()}selectRootElement(i,t){let e=typeof i=="string"?this.doc.querySelector(i):i;if(!e)throw new A(-5104,!1);return t||(e.textContent=""),e}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,t,e,s){if(s){t=s+":"+t;let o=bt[s];o?i.setAttributeNS(o,t,e):i.setAttribute(t,e)}else i.setAttribute(t,e)}removeAttribute(i,t,e){if(e){let s=bt[e];s?i.removeAttributeNS(s,t):i.removeAttribute(`${e}:${t}`)}else i.removeAttribute(t)}addClass(i,t){i.classList.add(t)}removeClass(i,t){i.classList.remove(t)}setStyle(i,t,e,s){s&(U.DashCase|U.Important)?i.style.setProperty(t,e,s&U.Important?"important":""):i.style[t]=e}removeStyle(i,t,e){e&U.DashCase?i.style.removeProperty(t):i.style[t]=""}setProperty(i,t,e){i!=null&&(i[t]=e)}setValue(i,t){i.nodeValue=t}listen(i,t,e){if(typeof i=="string"&&(i=tt().getGlobalEventTarget(this.doc,i),!i))throw new Error(`Unsupported event target ${i} for event ${t}`);return this.eventManager.addEventListener(i,t,this.decoratePreventDefault(e))}decoratePreventDefault(i){return t=>{if(t==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(t)):i(t))===!1&&t.preventDefault()}}};function pe(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ot=class extends K{sharedStylesHost;hostEl;shadowRoot;constructor(i,t,e,s,o,r,a,l){super(i,o,r,l),this.sharedStylesHost=t,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=_e(s.id,s.styles);for(let y of d){let I=document.createElement("style");a&&I.setAttribute("nonce",a),I.textContent=y,this.shadowRoot.appendChild(I)}let m=s.getExternalStyles?.();if(m)for(let y of m){let I=Mt(y,o);a&&I.setAttribute("nonce",a),this.shadowRoot.appendChild(I)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,t){return super.appendChild(this.nodeOrShadowRoot(i),t)}insertBefore(i,t,e){return super.insertBefore(this.nodeOrShadowRoot(i),t,e)}removeChild(i,t){return super.removeChild(null,t)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},W=class extends K{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,t,e,s,o,r,a,l){super(i,o,r,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=s,this.styles=l?_e(l,e.styles):e.styles,this.styleUrls=e.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},it=class extends W{contentAttr;hostAttr;constructor(i,t,e,s,o,r,a,l){let d=s+"-"+e.id;super(i,t,e,o,r,a,l,d),this.contentAttr=Ue(d),this.hostAttr=Ve(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,t){let e=super.createElement(i,t);return super.setAttribute(e,this.contentAttr,""),e}},Ze=(()=>{class n extends et{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,s){return t.addEventListener(e,s,!1),()=>this.removeEventListener(t,e,s)}removeEventListener(t,e,s){return t.removeEventListener(e,s)}static \u0275fac=function(e){return new(e||n)(c(v))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})(),fe=["alt","control","meta","shift"],$e={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ze={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ge=(()=>{class n extends et{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,s){let o=n.parseEventName(e),r=n.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>tt().onAndCancel(t,o.domEventName,r))}static parseEventName(t){let e=t.toLowerCase().split("."),s=e.shift();if(e.length===0||!(s==="keydown"||s==="keyup"))return null;let o=n._normalizeKey(e.pop()),r="",a=e.indexOf("code");if(a>-1&&(e.splice(a,1),r="code."),fe.forEach(d=>{let m=e.indexOf(d);m>-1&&(e.splice(m,1),r+=d+".")}),r+=o,e.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=r,l}static matchEventFullKeyCode(t,e){let s=$e[t.key]||t.key,o="";return e.indexOf("code.")>-1&&(s=t.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),fe.forEach(r=>{if(r!==s){let a=ze[r];a(t)&&(o+=r+".")}}),o+=s,o===e)}static eventCallback(t,e,s){return o=>{n.matchEventFullKeyCode(o,t)&&s.runGuarded(()=>e(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(c(v))};static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})();function Li(n,i){return ee(h({rootComponent:n},Ye(i)))}function Ye(n){return{appProviders:[...Te,...n?.providers??[]],platformProviders:Xe}}function qe(){Et.makeCurrent()}function Ke(){return new ut}function We(){return Ut(document),document}var Xe=[{provide:k,useValue:re},{provide:Vt,useValue:qe,multi:!0},{provide:v,useFactory:We,deps:[]}];var Je=new P(""),Qe=[{provide:J,useClass:St,deps:[]},{provide:Jt,useClass:Q,deps:[C,gt,J]},{provide:Q,useClass:Q,deps:[C,gt,J]}],Te=[{provide:Bt,useValue:"root"},{provide:ut,useFactory:Ke,deps:[]},{provide:Dt,useClass:Ze,multi:!0,deps:[v,C,k]},{provide:Dt,useClass:Ge,multi:!0,deps:[v]},he,ve,ge,{provide:Xt,useExisting:he},{provide:ae,useClass:Pe,deps:[]},[]],ki=(()=>{class n{constructor(t){}static \u0275fac=function(e){return new(e||n)(c(Je,12))};static \u0275mod=mt({type:n});static \u0275inj=rt({providers:[...Te,...Qe],imports:[oe,te]})}return n})();var Bi=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(e){return new(e||n)(c(v))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var At=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=p({token:n,factory:function(e){let s=null;return e?s=new(e||n):s=c(ti),s},providedIn:"root"})}return n})(),ti=(()=>{class n extends At{_doc;constructor(t){super(),this._doc=t}sanitize(t,e){if(e==null)return null;switch(t){case w.NONE:return e;case w.HTML:return j(e,"HTML")?F(e):Kt(this._doc,String(e)).toString();case w.STYLE:return j(e,"Style")?F(e):e;case w.SCRIPT:if(j(e,"Script"))return F(e);throw new A(5200,!1);case w.URL:return j(e,"URL")?F(e):qt(String(e));case w.RESOURCE_URL:if(j(e,"ResourceURL"))return F(e);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(t){return Zt(t)}bypassSecurityTrustStyle(t){return $t(t)}bypassSecurityTrustScript(t){return zt(t)}bypassSecurityTrustUrl(t){return Gt(t)}bypassSecurityTrustResourceUrl(t){return Yt(t)}static \u0275fac=function(e){return new(e||n)(c(v))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var H=function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n}(H||{}),Vi="*";function we(n,i){return{type:H.Trigger,name:n,definitions:i,options:{}}}function xt(n,i=null){return{type:H.Animate,styles:i,timings:n}}function Zi(n,i=null){return{type:H.Sequence,steps:n,options:i}}function nt(n){return{type:H.Style,styles:n,offset:null}}function st(n,i,t){return{type:H.State,name:n,styles:i,options:t}}function Nt(n,i,t=null){return{type:H.Transition,expr:n,animation:i,options:t}}var Ce=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(i=0,t=0){this.totalTime=i+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},be=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(i){this.players=i;let t=0,e=0,s=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(r=>{r.onDone(()=>{++t==o&&this._onFinish()}),r.onDestroy(()=>{++e==o&&this._onDestroy()}),r.onStart(()=>{++s==o&&this._onStart()})}),this.totalTime=this.players.reduce((r,a)=>Math.max(r,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let t=i*this.totalTime;this.players.forEach(e=>{let s=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(s)})}getPosition(){let i=this.players.reduce((t,e)=>t===null||e.totalTime>t.totalTime?e:t,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},$i="!";var Ee=["toast-component",""];function ii(n,i){if(n&1){let t=_t();_(0,"button",5),Y("click",function(){ct(t);let s=g();return lt(s.remove())}),_(1,"span",6),D(2,"\xD7"),S()()}}function ni(n,i){if(n&1&&(vt(0),D(1),yt()),n&2){let t=g(2);u(),N("[",t.duplicatesCount+1,"]")}}function si(n,i){if(n&1&&(_(0,"div"),D(1),Z(2,ni,2,1,"ng-container",4),S()),n&2){let t=g();E(t.options.titleClass),$("aria-label",t.title),u(),N(" ",t.title," "),u(),f("ngIf",t.duplicatesCount)}}function oi(n,i){if(n&1&&G(0,"div",7),n&2){let t=g();E(t.options.messageClass),f("innerHTML",t.message,pt)}}function ri(n,i){if(n&1&&(_(0,"div",8),D(1),S()),n&2){let t=g();E(t.options.messageClass),$("aria-label",t.message),u(),N(" ",t.message," ")}}function ai(n,i){if(n&1&&(_(0,"div"),G(1,"div",9),S()),n&2){let t=g();u(),z("width",t.width()+"%")}}function ci(n,i){if(n&1){let t=_t();_(0,"button",5),Y("click",function(){ct(t);let s=g();return lt(s.remove())}),_(1,"span",6),D(2,"\xD7"),S()()}}function li(n,i){if(n&1&&(vt(0),D(1),yt()),n&2){let t=g(2);u(),N("[",t.duplicatesCount+1,"]")}}function ui(n,i){if(n&1&&(_(0,"div"),D(1),Z(2,li,2,1,"ng-container",4),S()),n&2){let t=g();E(t.options.titleClass),$("aria-label",t.title),u(),N(" ",t.title," "),u(),f("ngIf",t.duplicatesCount)}}function di(n,i){if(n&1&&G(0,"div",7),n&2){let t=g();E(t.options.messageClass),f("innerHTML",t.message,pt)}}function hi(n,i){if(n&1&&(_(0,"div",8),D(1),S()),n&2){let t=g();E(t.options.messageClass),$("aria-label",t.message),u(),N(" ",t.message," ")}}function pi(n,i){if(n&1&&(_(0,"div"),G(1,"div",9),S()),n&2){let t=g();u(),z("width",t.width()+"%")}}var Ht=class{_attachedHost;component;viewContainerRef;injector;constructor(i,t){this.component=i,this.injector=t}attach(i,t){return this._attachedHost=i,i.attach(this,t)}detach(){let i=this._attachedHost;if(i)return this._attachedHost=void 0,i.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Pt=class{_attachedPortal;_disposeFn;attach(i,t){return this._attachedPortal=i,this.attachComponentPortal(i,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(i){this._disposeFn=i}},Ft=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new M;_activate=new M;_manualClose=new M;_resetTimeout=new M;_countDuplicate=new M;constructor(i){this._overlayRef=i}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(i,t){i&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},L=class{toastId;config;message;title;toastType;toastRef;_onTap=new M;_onAction=new M;constructor(i,t,e,s,o,r){this.toastId=i,this.config=t,this.message=e,this.title=s,this.toastType=o,this.toastRef=r,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(i){this._onAction.next(i)}onAction(){return this._onAction.asObservable()}},Se={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},De=new P("ToastConfig"),jt=class extends Pt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(i,t,e){super(),this._hostDomElement=i,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(i,t){let e=this._componentFactoryResolver.resolveComponentFactory(i.component),s;return s=e.create(i.injector),this._appRef.attachView(s.hostView),this.setDisposeFn(()=>{this._appRef.detachView(s.hostView),s.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(s),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(s)),s}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},fi=(()=>{class n{_document=b(v);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lt=class{_portalHost;constructor(i){this._portalHost=i}attach(i,t=!0){return this._portalHost.attach(i,t)}detach(){return this._portalHost.detach()}},mi=(()=>{class n{_overlayContainer=b(fi);_componentFactoryResolver=b(Wt);_appRef=b(V);_document=b(v);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let s=this._document.createElement("div");return s.id="toast-container",s.classList.add(t),s.classList.add("toast-container"),e?e.getContainerElement().appendChild(s):this._overlayContainer.getContainerElement().appendChild(s),s}_createPortalHost(t){return new jt(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new Lt(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ie=(()=>{class n{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,s,o,r){this.overlay=e,this._injector=s,this.sanitizer=o,this.ngZone=r,this.toastrConfig=h(h({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=h(h({},t.default.iconClasses),t.config.iconClasses))}show(t,e,s={},o=""){return this._preBuildNotification(o,t,e,this.applyConfig(s))}success(t,e,s={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}error(t,e,s={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}info(t,e,s={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}warning(t,e,s={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let s=this.toasts[this.currentlyActive].toastRef;s.isInactive()||(this.currentlyActive=this.currentlyActive+1,s.activate())}return!0}findDuplicate(t="",e="",s,o){let{includeTitleDuplicates:r}=this.toastrConfig;for(let a of this.toasts){let l=r&&a.title===t;if((!r||l)&&a.message===e)return a.toastRef.onDuplicate(s,o),a}return null}applyConfig(t={}){return h(h({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,s,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,s,o)):this._buildNotification(t,e,s,o)}_buildNotification(t,e,s,o){if(!o.toastComponent)throw new Error("toastComponent required");let r=this.findDuplicate(s,e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&s||e)&&this.toastrConfig.preventDuplicates&&r!==null)return r;this.previousToastMessage=e;let a=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(a=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let l=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let d=e;e&&o.enableHtml&&(d=this.sanitizer.sanitize(w.HTML,e));let m=new Ft(l),y=new L(this.index,o,d,s,t,m),I=[{provide:L,useValue:y}],Re=X.create({providers:I,parent:this._injector}),Ae=new Ht(o.toastComponent,Re),kt=l.attach(Ae,o.newestOnTop);m.componentInstance=kt.instance;let ot={toastId:this.index,title:s||"",message:e||"",toastRef:m,onShown:m.afterActivate(),onHidden:m.afterClosed(),onTap:y.onTap(),onAction:y.onAction(),portal:kt};return a||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{ot.toastRef.activate()})),this.toasts.push(ot),ot}static \u0275fac=function(e){return new(e||n)(c(De),c(mi),c(X),c(At),c(C))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gi=(()=>{class n{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=R(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,s){this.toastrService=t,this.toastPackage=e,this.ngZone=s,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=R({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>T(h({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(s=>100-s),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>T(h({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>T(h({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||n)(x(Ie),x(L),x(C))};static \u0275cmp=ft({type:n,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,s){e&1&&Y("click",function(){return s.tapToast()})("mouseenter",function(){return s.stickAround()})("mouseleave",function(){return s.delayedHideToast()}),e&2&&(Qt("@flyInOut",s._state),E(s.toastClasses),z("display",s.displayStyle))},attrs:Ee,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,s){e&1&&Z(0,ii,3,0,"button",0)(1,si,3,5,"div",1)(2,oi,1,3,"div",2)(3,ri,2,4,"div",3)(4,ai,2,2,"div",4),e&2&&(f("ngIf",s.options.closeButton),u(),f("ngIf",s.title),u(),f("ngIf",s.message&&s.options.enableHtml),u(),f("ngIf",s.message&&!s.options.enableHtml),u(),f("ngIf",s.options.progressBar))},dependencies:[Tt],encapsulation:2,data:{animation:[we("flyInOut",[st("inactive",nt({opacity:0})),st("active",nt({opacity:1})),st("removed",nt({opacity:0})),Nt("inactive => active",xt("{{ easeTime }}ms {{ easing }}")),Nt("active => removed",xt("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return n})(),vi=T(h({},Se),{toastComponent:gi}),an=(n={})=>at([{provide:De,useValue:{default:vi,config:n}}]);var yi=(()=>{class n{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=R(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=R("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,s){this.toastrService=t,this.toastPackage=e,this.appRef=s,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(s=>100-s),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||n)(x(Ie),x(L),x(V))};static \u0275cmp=ft({type:n,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,s){e&1&&Y("click",function(){return s.tapToast()})("mouseenter",function(){return s.stickAround()})("mouseleave",function(){return s.delayedHideToast()}),e&2&&(E(s.toastClasses),z("display",s.displayStyle))},attrs:Ee,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,s){e&1&&Z(0,ci,3,0,"button",0)(1,ui,3,5,"div",1)(2,di,1,3,"div",2)(3,hi,2,4,"div",3)(4,pi,2,2,"div",4),e&2&&(f("ngIf",s.options.closeButton),u(),f("ngIf",s.title),u(),f("ngIf",s.message&&s.options.enableHtml),u(),f("ngIf",s.message&&!s.options.enableHtml),u(),f("ngIf",s.options.progressBar))},dependencies:[Tt],encapsulation:2,changeDetection:0})}return n})(),cn=T(h({},Se),{toastComponent:yi});var Me={production:!0,apiUrl:"https://phones-server-is2i.onrender.com/api/v1"};var Oe=class n{apiUrl=Me.apiUrl;httpClient=b(le);numbersSignal=R([]);loadingStateSignal=R("idle");get numbers(){return this.numbersSignal.asReadonly()}loadNumbersFromServer(){let i=new ce({Authorization:"Bearer mysecrettoken"});this.loadingStateSignal.set("loading"),this.httpClient.get(`${this.apiUrl}/phone-info`,{headers:i}).subscribe({next:t=>{this.numbersSignal.set(t),this.loadingStateSignal.set("success")},error:t=>{console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:",t),this.loadingStateSignal.set("error")}})}get loadingState(){return this.loadingStateSignal.asReadonly()}toggleStatus(i){this.numbersSignal.update(t=>t.map(e=>e.number===i.number?T(h({},e),{status:e.status==="active"?"inactive":"active"}):e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})};export{he as a,Li as b,ki as c,Bi as d,H as e,Vi as f,Zi as g,nt as h,Ce as i,be as j,$i as k,Ie as l,an as m,Oe as n};
