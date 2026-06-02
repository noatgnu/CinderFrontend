import{$ as je,$a as od,$b as Wt,$c as Ve,A as At,Aa as K,Ab as xt,B as es,Bb as dd,C as Kr,Ca as Zc,Cb as ls,Cc as se,D as Qr,Da as An,Db as si,E as Jr,Ea as de,Eb as li,F as $c,Fa as $e,Fb as ud,Ga as os,Gb as cs,Gc as hs,H as Jn,Ha as C,Hb as ds,Hc as ms,I as ge,Ia as $i,Ib as Gt,J as ts,Ja as Xc,Jb as hd,Jc as co,K as ei,Ka as Fn,Kb as G,Kc as gd,L as Rn,La as Kc,Lb as me,Lc as fs,M as an,Ma as ri,Mb as fe,Mc as ne,N as Ft,Na as to,Nb as Hi,Nc as it,Oa as oi,Ob as Gi,Oc as bd,P as ns,Pa as Qc,Pb as Wi,Pc as Zt,Q as ti,Qa as as,Qb as te,R as sn,Ra as ss,Rb as g,Rc as Y,S as is,Sa as no,Sb as v,Sc as He,T as rs,Ta as un,Tb as Q,Tc as Yi,U as Hc,Ua as ai,Ub as hn,Uc as _d,V as Ui,Va as Jc,Vb as Pn,W as ni,Wa as ed,Wb as Ot,Wc as we,X as Dt,Xa as td,Xc as uo,Y as ze,Ya as nd,Yc as ho,Z as ce,Za as id,Zb as lo,Zc as vd,_ as Gc,_a as rd,_b as qi,_c as x,a as m,aa as A,ab as Xe,ac as st,ad as yd,b as ie,ba as In,bc as Re,bd as mo,ca as tt,cc as X,cd as wd,da as f,db as ad,dc as md,ea as V,ec as pe,f as le,fa as Wc,fb as D,fc as ye,g as Ce,ga as p,gb as On,gc as J,ha as E,hb as sd,hc as qt,i as Vc,ia as c,ib as io,ic as Ee,j as et,ja as zi,jb as ro,jc as N,k as Uc,kb as Se,kc as B,l as y,la as qc,lb as ht,lc as fd,ma as Oe,mb as Ke,mc as pd,n as Ne,na as Ze,nb as be,nc as us,oa as ln,ob as M,oc as mt,pa as cn,pb as ld,pc as Yt,qa as Mn,qb as nt,qc as L,r as Ue,ra as eo,rb as oo,rc as Pe,s as Be,sa as q,sb as cd,sc as ve,t as S,ta as I,tb as ao,tc as mn,u as Zr,ua as dn,ub as P,uc as ci,v as Xr,va as Yc,vb as U,w as zc,wa as O,wb as _,xa as R,xb as so,y as j,ya as Tn,z as Vi,za as ii,zb as ue}from"./chunk-7AEGLYFL.js";var Cd=null;function ft(){return Cd}function ps(n){Cd??=n}var Zi=class{},Xt=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>c(Dd),providedIn:"platform"})}return n})(),gs=new p(""),Dd=(()=>{class n extends Xt{_location;_history;_doc=c(I);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ft().getBaseHref(this._doc)}onPopState(e){let t=ft().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=ft().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function fo(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function xd(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Et(n){return n&&n[0]!=="?"?`?${n}`:n}var pt=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>c(go),providedIn:"root"})}return n})(),po=new p(""),go=(()=>{class n extends pt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??c(I).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return fo(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Et(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Et(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Et(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(E(Xt),E(po,8))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Pt=(()=>{class n{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Wf(xd(Ed(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Et(t))}normalize(e){return n.stripTrailingSlash(Gf(this._basePath,Ed(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Et(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Et(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Et;static joinWithSlash=fo;static stripTrailingSlash=xd;static \u0275fac=function(t){return new(t||n)(E(pt))};static \u0275prov=f({token:n,factory:()=>Hf(),providedIn:"root"})}return n})();function Hf(){return new Pt(E(pt))}function Gf(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ed(n){return n.replace(/\/index.html$/,"")}function Wf(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var xo=(()=>{class n extends pt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=fo(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+Et(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+Et(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(E(Xt),E(po,8))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();var Es=(function(n){return n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific",n})(Es||{});var Ge=(function(n){return n[n.Format=0]="Format",n[n.Standalone=1]="Standalone",n})(Ge||{}),he=(function(n){return n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short",n})(he||{}),rt=(function(n){return n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full",n})(rt||{}),ot={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Id(n){return st(n)[Re.LocaleId]}function Md(n,i,e){let t=st(n),r=[t[Re.DayPeriodsFormat],t[Re.DayPeriodsStandalone]],o=gt(r,i);return gt(o,e)}function Td(n,i,e){let t=st(n),r=[t[Re.DaysFormat],t[Re.DaysStandalone]],o=gt(r,i);return gt(o,e)}function Ad(n,i,e){let t=st(n),r=[t[Re.MonthsFormat],t[Re.MonthsStandalone]],o=gt(r,i);return gt(o,e)}function Fd(n,i){let t=st(n)[Re.Eras];return gt(t,i)}function Xi(n,i){let e=st(n);return gt(e[Re.DateFormat],i)}function Ki(n,i){let e=st(n);return gt(e[Re.TimeFormat],i)}function Qi(n,i){let t=st(n)[Re.DateTimeFormat];return gt(t,i)}function Lt(n,i){let e=st(n),t=e[Re.NumberSymbols][i];if(typeof t>"u"){if(i===ot.CurrencyDecimal)return e[Re.NumberSymbols][ot.Decimal];if(i===ot.CurrencyGroup)return e[Re.NumberSymbols][ot.Group]}return t}function Od(n,i){return st(n)[Re.NumberFormats][i]}function Pd(n){if(!n[Re.ExtraData])throw new A(2303,!1)}function Ld(n){let i=st(n);return Pd(i),(i[Re.ExtraData][2]||[]).map(t=>typeof t=="string"?bs(t):[bs(t[0]),bs(t[1])])}function Nd(n,i,e){let t=st(n);Pd(t);let r=[t[Re.ExtraData][0],t[Re.ExtraData][1]],o=gt(r,i)||[];return gt(o,e)||[]}function gt(n,i){for(let e=i;e>-1;e--)if(typeof n[e]<"u")return n[e];throw new A(2304,!1)}function bs(n){let[i,e]=n.split(":");return{hours:+i,minutes:+e}}var qf=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,bo={},Yf=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Bd(n,i,e,t){let r=ip(n);i=Kt(e,i)||i;let a=[],s;for(;i;)if(s=Yf.exec(i),s){a=a.concat(s.slice(1));let u=a.pop();if(!u)break;i=u}else{a.push(i);break}let l=r.getTimezoneOffset();t&&(l=Vd(t,l),r=np(r,t));let d="";return a.forEach(u=>{let h=ep(u);d+=h?h(r,e,l):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function Co(n,i,e){let t=new Date(0);return t.setFullYear(n,i,e),t.setHours(0,0,0),t}function Kt(n,i){let e=Id(n);if(bo[e]??={},bo[e][i])return bo[e][i];let t="";switch(i){case"shortDate":t=Xi(n,rt.Short);break;case"mediumDate":t=Xi(n,rt.Medium);break;case"longDate":t=Xi(n,rt.Long);break;case"fullDate":t=Xi(n,rt.Full);break;case"shortTime":t=Ki(n,rt.Short);break;case"mediumTime":t=Ki(n,rt.Medium);break;case"longTime":t=Ki(n,rt.Long);break;case"fullTime":t=Ki(n,rt.Full);break;case"short":let r=Kt(n,"shortTime"),o=Kt(n,"shortDate");t=_o(Qi(n,rt.Short),[r,o]);break;case"medium":let a=Kt(n,"mediumTime"),s=Kt(n,"mediumDate");t=_o(Qi(n,rt.Medium),[a,s]);break;case"long":let l=Kt(n,"longTime"),d=Kt(n,"longDate");t=_o(Qi(n,rt.Long),[l,d]);break;case"full":let u=Kt(n,"fullTime"),h=Kt(n,"fullDate");t=_o(Qi(n,rt.Full),[u,h]);break}return t&&(bo[e][i]=t),t}function _o(n,i){return i&&(n=n.replace(/\{([^}]+)}/g,function(e,t){return i!=null&&t in i?i[t]:e})),n}function kt(n,i,e="-",t,r){let o="";(n<0||r&&n<=0)&&(r?n=-n+1:(n=-n,o=e));let a=String(n);for(;a.length<i;)a="0"+a;return t&&(a=a.slice(a.length-i)),o+a}function Zf(n,i){return kt(n,3).substring(0,i)}function Ie(n,i,e=0,t=!1,r=!1){return function(o,a){let s=Xf(n,o);if((e>0||s>-e)&&(s+=e),n===3)s===0&&e===-12&&(s=12);else if(n===6)return Zf(s,i);let l=Lt(a,ot.MinusSign);return kt(s,i,l,t,r)}}function Xf(n,i){switch(n){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new A(2301,!1)}}function _e(n,i,e=Ge.Format,t=!1){return function(r,o){return Kf(r,o,n,i,e,t)}}function Kf(n,i,e,t,r,o){switch(e){case 2:return Ad(i,r,t)[n.getMonth()];case 1:return Td(i,r,t)[n.getDay()];case 0:let a=n.getHours(),s=n.getMinutes();if(o){let d=Ld(i),u=Nd(i,r,t),h=d.findIndex(b=>{if(Array.isArray(b)){let[k,w]=b,H=a>=k.hours&&s>=k.minutes,F=a<w.hours||a===w.hours&&s<w.minutes;if(k.hours<w.hours){if(H&&F)return!0}else if(H||F)return!0}else if(b.hours===a&&b.minutes===s)return!0;return!1});if(h!==-1)return u[h]}return Md(i,r,t)[a<12?0:1];case 3:return Fd(i,t)[n.getFullYear()<=0?0:1];default:let l=e;throw new A(2302,!1)}}function vo(n){return function(i,e,t){let r=-1*t,o=Lt(e,ot.MinusSign),a=r>0?Math.floor(r/60):Math.ceil(r/60);switch(n){case 0:return(r>=0?"+":"")+kt(a,2,o)+kt(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+kt(a,1,o);case 2:return"GMT"+(r>=0?"+":"")+kt(a,2,o)+":"+kt(Math.abs(r%60),2,o);case 3:return t===0?"Z":(r>=0?"+":"")+kt(a,2,o)+":"+kt(Math.abs(r%60),2,o);default:throw new A(2310,!1)}}}var Qf=0,wo=4;function Jf(n){let i=Co(n,Qf,1).getDay();return Co(n,0,1+(i<=wo?wo:wo+7)-i)}function jd(n){let i=n.getDay(),e=i===0?-3:wo-i;return Co(n.getFullYear(),n.getMonth(),n.getDate()+e)}function _s(n,i=!1){return function(e,t){let r;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();r=1+Math.floor((a+o)/7)}else{let o=jd(e),a=Jf(o.getFullYear()),s=o.getTime()-a.getTime();r=1+Math.round(s/6048e5)}return kt(r,n,Lt(t,ot.MinusSign))}}function yo(n,i=!1){return function(e,t){let o=jd(e).getFullYear();return kt(o,n,Lt(t,ot.MinusSign),i)}}var vs={};function ep(n){if(vs[n])return vs[n];let i;switch(n){case"G":case"GG":case"GGG":i=_e(3,he.Abbreviated);break;case"GGGG":i=_e(3,he.Wide);break;case"GGGGG":i=_e(3,he.Narrow);break;case"y":i=Ie(0,1,0,!1,!0);break;case"yy":i=Ie(0,2,0,!0,!0);break;case"yyy":i=Ie(0,3,0,!1,!0);break;case"yyyy":i=Ie(0,4,0,!1,!0);break;case"Y":i=yo(1);break;case"YY":i=yo(2,!0);break;case"YYY":i=yo(3);break;case"YYYY":i=yo(4);break;case"M":case"L":i=Ie(1,1,1);break;case"MM":case"LL":i=Ie(1,2,1);break;case"MMM":i=_e(2,he.Abbreviated);break;case"MMMM":i=_e(2,he.Wide);break;case"MMMMM":i=_e(2,he.Narrow);break;case"LLL":i=_e(2,he.Abbreviated,Ge.Standalone);break;case"LLLL":i=_e(2,he.Wide,Ge.Standalone);break;case"LLLLL":i=_e(2,he.Narrow,Ge.Standalone);break;case"w":i=_s(1);break;case"ww":i=_s(2);break;case"W":i=_s(1,!0);break;case"d":i=Ie(2,1);break;case"dd":i=Ie(2,2);break;case"c":case"cc":i=Ie(7,1);break;case"ccc":i=_e(1,he.Abbreviated,Ge.Standalone);break;case"cccc":i=_e(1,he.Wide,Ge.Standalone);break;case"ccccc":i=_e(1,he.Narrow,Ge.Standalone);break;case"cccccc":i=_e(1,he.Short,Ge.Standalone);break;case"E":case"EE":case"EEE":i=_e(1,he.Abbreviated);break;case"EEEE":i=_e(1,he.Wide);break;case"EEEEE":i=_e(1,he.Narrow);break;case"EEEEEE":i=_e(1,he.Short);break;case"a":case"aa":case"aaa":i=_e(0,he.Abbreviated);break;case"aaaa":i=_e(0,he.Wide);break;case"aaaaa":i=_e(0,he.Narrow);break;case"b":case"bb":case"bbb":i=_e(0,he.Abbreviated,Ge.Standalone,!0);break;case"bbbb":i=_e(0,he.Wide,Ge.Standalone,!0);break;case"bbbbb":i=_e(0,he.Narrow,Ge.Standalone,!0);break;case"B":case"BB":case"BBB":i=_e(0,he.Abbreviated,Ge.Format,!0);break;case"BBBB":i=_e(0,he.Wide,Ge.Format,!0);break;case"BBBBB":i=_e(0,he.Narrow,Ge.Format,!0);break;case"h":i=Ie(3,1,-12);break;case"hh":i=Ie(3,2,-12);break;case"H":i=Ie(3,1);break;case"HH":i=Ie(3,2);break;case"m":i=Ie(4,1);break;case"mm":i=Ie(4,2);break;case"s":i=Ie(5,1);break;case"ss":i=Ie(5,2);break;case"S":i=Ie(6,1);break;case"SS":i=Ie(6,2);break;case"SSS":i=Ie(6,3);break;case"Z":case"ZZ":case"ZZZ":i=vo(0);break;case"ZZZZZ":i=vo(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=vo(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=vo(2);break;default:return null}return vs[n]=i,i}function Vd(n,i){n=n.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(e)?i:e}function tp(n,i){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+i),n}function np(n,i,e){let r=n.getTimezoneOffset(),o=Vd(i,r);return tp(n,-1*(o-r))}function ip(n){if(kd(n))return n;if(typeof n=="number"&&!isNaN(n))return new Date(n);if(typeof n=="string"){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[r,o=1,a=1]=n.split("-").map(s=>+s);return Co(r,o-1,a)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let t;if(t=n.match(qf))return rp(t)}let i=new Date(n);if(!kd(i))throw new A(2311,!1);return i}function rp(n){let i=new Date(0),e=0,t=0,r=n[8]?i.setUTCFullYear:i.setFullYear,o=n[8]?i.setUTCHours:i.setHours;n[9]&&(e=Number(n[9]+n[10]),t=Number(n[9]+n[11])),r.call(i,Number(n[1]),Number(n[2])-1,Number(n[3]));let a=Number(n[4]||0)-e,s=Number(n[5]||0)-t,l=Number(n[6]||0),d=Math.floor(parseFloat("0."+(n[7]||0))*1e3);return o.call(i,a,s,l,d),i}function kd(n){return n instanceof Date&&!isNaN(n.valueOf())}var op=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Sd=22,Do=".",Ji="0",ap=";",sp=",",ys="#";function lp(n,i,e,t,r,o,a=!1){let s="",l=!1;if(!isFinite(n))s=Lt(e,ot.Infinity);else{let d=up(n);a&&(d=dp(d));let u=i.minInt,h=i.minFrac,b=i.maxFrac;if(o){let ae=o.match(op);if(ae===null)throw new A(2306,!1);let Te=ae[1],ee=ae[3],Ct=ae[5];Te!=null&&(u=ws(Te)),ee!=null&&(h=ws(ee)),Ct!=null?b=ws(Ct):ee!=null&&h>b&&(b=h)}hp(d,h,b);let k=d.digits,w=d.integerLen,H=d.exponent,F=[];for(l=k.every(ae=>!ae);w<u;w++)k.unshift(0);for(;w<0;w++)k.unshift(0);w>0?F=k.splice(w,k.length):(F=k,k=[0]);let W=[];for(k.length>=i.lgSize&&W.unshift(k.splice(-i.lgSize,k.length).join(""));k.length>i.gSize;)W.unshift(k.splice(-i.gSize,k.length).join(""));k.length&&W.unshift(k.join("")),s=W.join(Lt(e,t)),F.length&&(s+=Lt(e,r)+F.join("")),H&&(s+=Lt(e,ot.Exponential)+"+"+H)}return n<0&&!l?s=i.negPre+s+i.negSuf:s=i.posPre+s+i.posSuf,s}function Ud(n,i,e){let t=Od(i,Es.Decimal),r=cp(t,Lt(i,ot.MinusSign));return lp(n,r,i,ot.Group,ot.Decimal,e)}function cp(n,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},t=n.split(ap),r=t[0],o=t[1],a=r.indexOf(Do)!==-1?r.split(Do):[r.substring(0,r.lastIndexOf(Ji)+1),r.substring(r.lastIndexOf(Ji)+1)],s=a[0],l=a[1]||"";e.posPre=s.substring(0,s.indexOf(ys));for(let u=0;u<l.length;u++){let h=l.charAt(u);h===Ji?e.minFrac=e.maxFrac=u+1:h===ys?e.maxFrac=u+1:e.posSuf+=h}let d=s.split(sp);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,o){let u=r.length-e.posPre.length-e.posSuf.length,h=o.indexOf(ys);e.negPre=o.substring(0,h).replace(/'/g,""),e.negSuf=o.slice(h+u).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function dp(n){if(n.digits[0]===0)return n;let i=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(i===0?n.digits.push(0,0):i===1&&n.digits.push(0),n.integerLen+=2),n}function up(n){let i=Math.abs(n)+"",e=0,t,r,o,a,s;for((r=i.indexOf(Do))>-1&&(i=i.replace(Do,"")),(o=i.search(/e/i))>0?(r<0&&(r=o),r+=+i.slice(o+1),i=i.substring(0,o)):r<0&&(r=i.length),o=0;i.charAt(o)===Ji;o++);if(o===(s=i.length))t=[0],r=1;else{for(s--;i.charAt(s)===Ji;)s--;for(r-=o,t=[],a=0;o<=s;o++,a++)t[a]=Number(i.charAt(o))}return r>Sd&&(t=t.splice(0,Sd-1),e=r-1,r=1),{digits:t,exponent:e,integerLen:r}}function hp(n,i,e){if(i>e)throw new A(2307,!1);let t=n.digits,r=t.length-n.integerLen,o=Math.min(Math.max(i,r),e),a=o+n.integerLen,s=t[a];if(a>0){t.splice(Math.max(n.integerLen,a));for(let h=a;h<t.length;h++)t[h]=0}else{r=Math.max(0,r),n.integerLen=1,t.length=Math.max(1,a=o+1),t[0]=0;for(let h=1;h<a;h++)t[h]=0}if(s>=5)if(a-1<0){for(let h=0;h>a;h--)t.unshift(0),n.integerLen++;t.unshift(1),n.integerLen++}else t[a-1]++;for(;r<Math.max(0,o);r++)t.push(0);let l=o!==0,d=i+n.integerLen,u=t.reduceRight(function(h,b,k,w){return b=b+h,w[k]=b<10?b:b-10,l&&(w[k]===0&&k>=d?w.pop():l=!1),b>=10?1:0},0);u&&(t.unshift(u),n.integerLen++)}function ws(n){let i=parseInt(n);if(isNaN(i))throw new A(2305,!1);return i}var Cs=/\s+/,Rd=[],ks=(()=>{class n{_ngEl;_renderer;initialClasses=Rd;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(Cs):Rd}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Cs):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==t&&(r.changed=!0,r.enabled=t),r.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],r=e[1];r.changed?(this._toggleClass(t,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),r.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(Cs).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(t){return new(t||n)(M(C),M(be))};static \u0275dir=_({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var Ss=(()=>{class n{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,r){this._ngEl=e,this._differs=t,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:On.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${t}${o}`:t,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static \u0275fac=function(t){return new(t||n)(M(C),M(ho),M(be))};static \u0275dir=_({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return n})(),er=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(q);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(M(nt))};static \u0275dir=_({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[de]})}return n})();function Rs(n,i){return new A(2100,!1)}var Ds=class{createSubscription(i,e,t){return ne(()=>i.subscribe({next:e,error:t}))}dispose(i){ne(()=>i.unsubscribe())}},xs=class{createSubscription(i,e,t){return i.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(i){i.unsubscribe()}},mp=new xs,fp=new Ds,Is=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(ii);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(li(e))return mp;if(ud(e))return fp;throw Rs(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||n)(M(we,16))};static \u0275pipe=so({name:"async",type:n,pure:!1})}return n})();var pp="mediumDate",zd=new p(""),$d=new p(""),gp=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,t,r){this.locale=e,this.defaultTimezone=t,this.defaultOptions=r}transform(e,t,r,o){if(e==null||e===""||e!==e)return null;try{let a=t??this.defaultOptions?.dateFormat??pp,s=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Bd(e,a,o||this.locale,s)}catch(a){throw Rs(n,a.message)}}static \u0275fac=function(t){return new(t||n)(M(fs,16),M(zd,24),M($d,24))};static \u0275pipe=so({name:"date",type:n,pure:!0})}return n})();var bp=(()=>{class n{_locale;constructor(e){this._locale=e}transform(e,t,r){if(!_p(e))return null;r||=this._locale;try{let o=vp(e);return Ud(o,r,t)}catch(o){throw Rs(n,o.message)}}static \u0275fac=function(t){return new(t||n)(M(fs,16))};static \u0275pipe=so({name:"number",type:n,pure:!0})}return n})();function _p(n){return!(n==null||n===""||n!==n)}function vp(n){if(typeof n=="string"&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!="number")throw new A(2309,!1);return n}var di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({})}return n})();function tr(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Ln=class{};var Ts="browser";function Wd(n){return n===Ts}var As=(()=>{class n{static \u0275prov=f({token:n,providedIn:"root",factory:()=>new Ms(c(I),window)})}return n})(),Ms=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(ie(m({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let t=wp(this.document,i);t&&(this.scrollToElement(t,e),t.focus({preventScroll:!0}))}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch(e){console.warn(In(2400,!1))}}scrollToElement(i,e){let t=i.getBoundingClientRect(),r=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ie(m({},e),{left:r-a[0],top:o-a[1]}))}};function wp(n,i){let e=n.getElementById(i)||n.getElementsByName(i)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=t.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(a)return a}r=t.nextNode()}}return null}var qd=n=>n.src,Cp=new p("",{factory:()=>qd});var Hd=/^((\s*\d+w\s*(,|$)){1,})$/;var Dp=[1,2],xp=640;var Ep=1920,kp=1080;var rC=(()=>{class n{imageLoader=c(Cp);config=Sp(c(as));renderer=c(be);imgElement=c(C).nativeElement;injector=c(q);destroyRef=c(dn);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){ro("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&Hd.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let t=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let t=e;this.loaderParams&&(t.loaderParams=this.loaderParams);let r=this.getAspectRatio();return r!==null&&t.width&&(t.height=Math.round(t.width/r)),this.imageLoader(t)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=Hd.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,t=e;return this.sizes?.trim()==="100vw"&&(t=e.filter(o=>o>=xp)),t.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let t=this.getRewrittenSrc();this.setHostAttribute("src",t);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return Dp.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Ep||this.height>kp),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==qd&&!e}generatePlaceholder(e){let{placeholderResolution:t}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:t,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let t=()=>{let a=this.injector.get(we);r(),o(),this.placeholder=!1,a.markForCheck()},r=this.renderer.listen(e,"load",t),o=this.renderer.listen(e,"error",t);this.destroyRef.onDestroy(()=>{r(),o()}),Rp(e,t)}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(t,r){t&2&&Yt("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Ip],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",Ve],height:[2,"height","height",Ve],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",x],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",x],fill:[2,"fill","fill",x],placeholder:[2,"placeholder","placeholder",Mp],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[de]})}return n})();function Sp(n){let i={};return n.breakpoints&&(i.breakpoints=n.breakpoints.sort((e,t)=>e-t)),Object.assign({},Qc,n,i)}function Rp(n,i){n.complete&&n.naturalWidth&&i()}function Ip(n){return typeof n=="string"?n:un(n)}function Mp(n){return typeof n=="string"&&n!=="true"&&n!=="false"&&n!==""?n:x(n)}var nr=class{_doc;constructor(i){this._doc=i}manager},Eo=(()=>{class n extends nr{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(E(I))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Ro=new p(""),Ns=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Eo));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Eo);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new A(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(E(Ro),E(R))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Os="ng-app-id";function Yd(n){for(let i of n)i.remove()}function Zd(n,i){let e=i.createElement("style");return e.textContent=n,e}function Tp(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Os}="${i}"],link[${Os}="${i}"]`);if(r)for(let o of r)o.removeAttribute(Os),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Ls(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Bs=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,Tp(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Zd);t?.forEach(r=>this.addUsage(r,this.external,Ls))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Yd(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Yd(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Zd(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Ls(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(E(I),E(Fn),E(oi,8),E(ri))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Ps={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},js=/%COMP%/g;var Kd="%COMP%",Ap=`_nghost-${Kd}`,Fp=`_ngcontent-${Kd}`,Op=!0,Pp=new p("",{factory:()=>Op});function Lp(n){return Fp.replace(js,n)}function Np(n){return Ap.replace(js,n)}function Qd(n,i){return i.map(e=>e.replace(js,n))}var Vs=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new ir(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof So?r.applyToHost(e):r instanceof rr&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(t.encapsulation){case no.Emulated:o=new So(l,d,t,this.appId,u,a,s,h);break;case no.ShadowDom:return new ko(l,e,t,a,s,this.nonce,h,d);case no.ExperimentalIsolatedShadowDom:return new ko(l,e,t,a,s,this.nonce,h);default:o=new rr(l,d,t,u,a,s,h);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(E(Ns),E(Bs),E(Fn),E(Pp),E(I),E(R),E(oi),E(io,8))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),ir=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Ps[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Xd(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(Xd(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new A(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Ps[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Ps[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(On.DashCase|On.Important)?i.style.setProperty(e,t,r&On.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&On.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=ft().getGlobalEventTarget(this.doc,i),!i))throw new A(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Xd(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ko=class extends ir{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Qd(t.id,d);for(let h of d){let b=document.createElement("style");a&&b.setAttribute("nonce",a),b.textContent=h,this.shadowRoot.appendChild(b)}let u=t.getExternalStyles?.();if(u)for(let h of u){let b=Ls(h,r);a&&b.setAttribute("nonce",a),this.shadowRoot.appendChild(b)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},rr=class extends ir{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=l?Qd(l,d):d,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&sd.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},So=class extends rr{contentAttr;hostAttr;constructor(i,e,t,r,o,a,s,l){let d=r+"-"+t.id;super(i,e,t,o,a,s,l,d),this.contentAttr=Lp(d),this.hostAttr=Np(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Io=class n extends Zi{supportsDOMEvents=!0;static makeCurrent(){ps(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=jp();return e==null?null:Vp(e)}resetBaseElement(){or=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return tr(document.cookie,i)}},or=null;function jp(){return or=or||document.head.querySelector("base"),or?or.getAttribute("href"):null}function Vp(n){return new URL(n,document.baseURI).pathname}var Up=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Jd=["alt","control","meta","shift"],zp={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},$p={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},eu=(()=>{class n extends nr{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ft().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),Jd.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,t){let r=zp[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Jd.forEach(a=>{if(a!==r){let s=$p[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(E(I))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();function Hp(n,i,e){return le(this,null,function*(){let t=m({rootComponent:n},Gp(i,e));return vd(t)})}function Gp(n,i){return{platformRef:i?.platformRef,appProviders:[...Xp,...n?.providers??[]],platformProviders:Zp}}function Wp(){Io.makeCurrent()}function qp(){return new Tn}function Yp(){return Xc(document),document}var Zp=[{provide:ri,useValue:Ts},{provide:Kc,useValue:Wp,multi:!0},{provide:I,useFactory:Yp}];var Xp=[{provide:qc,useValue:"root"},{provide:Tn,useFactory:qp},{provide:Ro,useClass:Eo,multi:!0},{provide:Ro,useClass:eu,multi:!0},Vs,Bs,Ns,{provide:Ke,useExisting:Vs},{provide:Ln,useClass:Up},[]];var bt=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var To=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Ao=class{encodeKey(i){return tu(i)}encodeValue(i){return tu(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Kp(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var Qp=/%(\d[a-f0-9])/gi,Jp={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function tu(n){return encodeURIComponent(n).replace(Qp,(i,e)=>Jp[e]??i)}function Mo(n){return`${n}`}var re=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Ao,i.fromString){if(i.fromObject)throw new A(2805,!1);this.map=Kp(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Mo):[Mo(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Mo(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(Mo(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function eg(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function nu(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function iu(n){return typeof Blob<"u"&&n instanceof Blob}function ru(n){return typeof FormData<"u"&&n instanceof FormData}function tg(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var ou="Content-Type",au="Accept",su="text/plain",lu="application/json",ng=`${lu}, ${su}, */*`,ui=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(eg(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new bt,this.context??=new To,!this.params)this.params=new re,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||nu(this.body)||iu(this.body)||ru(this.body)||tg(this.body)?this.body:this.body instanceof re?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ru(this.body)?null:iu(this.body)?this.body.type||null:nu(this.body)?null:typeof this.body=="string"?su:this.body instanceof re?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?lu:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,h=i.referrer||this.referrer,b=i.integrity||this.integrity,k=i.referrerPolicy||this.referrerPolicy,w=i.transferCache??this.transferCache,H=i.timeout??this.timeout,F=i.body!==void 0?i.body:this.body,W=i.withCredentials??this.withCredentials,ae=i.reportProgress??this.reportProgress,Te=i.headers||this.headers,ee=i.params||this.params,Ct=i.context??this.context;return i.setHeaders!==void 0&&(Te=Object.keys(i.setHeaders).reduce((on,Tt)=>on.set(Tt,i.setHeaders[Tt]),Te)),i.setParams&&(ee=Object.keys(i.setParams).reduce((on,Tt)=>on.set(Tt,i.setParams[Tt]),ee)),new n(e,t,F,{params:ee,headers:Te,context:Ct,reportProgress:ae,responseType:r,withCredentials:W,transferCache:w,keepalive:o,cache:s,priority:a,timeout:H,mode:l,redirect:d,credentials:u,referrer:h,integrity:b,referrerPolicy:k})}},Nn=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Nn||{}),mi=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new bt,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Fo=class n extends mi{constructor(i={}){super(i)}type=Nn.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},ar=class n extends mi{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Nn.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},hi=class extends mi{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},ig=200,rg=204;var og=new p("");var ag=/^\)\]\}',?\n/;var zs=(()=>{class n{xhrFactory;tracingService=c(io,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let t=this.xhrFactory;return S(null).pipe(ze(()=>new et(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((F,W)=>a.setRequestHeader(F,W.join(","))),e.headers.has(au)||a.setRequestHeader(au,ng),!e.headers.has(ou)){let F=e.detectContentTypeHeader();F!==null&&a.setRequestHeader(ou,F)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let F=e.responseType.toLowerCase();a.responseType=F!=="json"?F:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let F=a.statusText||"OK",W=new bt(a.getAllResponseHeaders()),ae=a.responseURL||e.url;return l=new Fo({headers:W,status:a.status,statusText:F,url:ae}),l},u=this.maybePropagateTrace(()=>{let{headers:F,status:W,statusText:ae,url:Te}=d(),ee=null;W!==rg&&(ee=typeof a.response>"u"?a.responseText:a.response),W===0&&(W=ee?ig:0);let Ct=W>=200&&W<300;if(e.responseType==="json"&&typeof ee=="string"){let on=ee;ee=ee.replace(ag,"");try{ee=ee!==""?JSON.parse(ee):null}catch(Tt){ee=on,Ct&&(Ct=!1,ee={error:Tt,text:ee})}}Ct?(o.next(new ar({body:ee,headers:F,status:W,statusText:ae,url:Te||void 0})),o.complete()):o.error(new hi({error:ee,headers:F,status:W,statusText:ae,url:Te||void 0}))}),h=this.maybePropagateTrace(F=>{let{url:W}=d(),ae=new hi({error:F,status:a.status||0,statusText:a.statusText||"Unknown Error",url:W||void 0});o.error(ae)}),b=h;e.timeout&&(b=this.maybePropagateTrace(F=>{let{url:W}=d(),ae=new hi({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:W||void 0});o.error(ae)}));let k=!1,w=this.maybePropagateTrace(F=>{k||(o.next(d()),k=!0);let W={type:Nn.DownloadProgress,loaded:F.loaded};F.lengthComputable&&(W.total=F.total),e.responseType==="text"&&a.responseText&&(W.partialText=a.responseText),o.next(W)}),H=this.maybePropagateTrace(F=>{let W={type:Nn.UploadProgress,loaded:F.loaded};F.lengthComputable&&(W.total=F.total),o.next(W)});return a.addEventListener("load",u),a.addEventListener("error",h),a.addEventListener("timeout",b),a.addEventListener("abort",h),e.reportProgress&&(a.addEventListener("progress",w),s!==null&&a.upload&&a.upload.addEventListener("progress",H)),a.send(s),o.next({type:Nn.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",u),a.removeEventListener("timeout",b),e.reportProgress&&(a.removeEventListener("progress",w),s!==null&&a.upload&&a.upload.removeEventListener("progress",H)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(E(Ln))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function sg(n,i){return i(n)}function lg(n,i,e){return(t,r)=>Ze(e,()=>i(t,o=>n(o,r)))}var $s=new p("",{factory:()=>[]}),cu=new p(""),du=new p("",{factory:()=>!0});var Hs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(zs),r},providedIn:"root"})}return n})();var Oo=(()=>{class n{backend;injector;chain=null;pendingTasks=c(Zc);contributeToStability=c(du);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get($s),...this.injector.get(cu,[])]));this.chain=t.reduceRight((r,o)=>lg(r,o,this.injector),sg)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ti(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(E(Hs),E(Oe))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(Oo),r},providedIn:"root"})}return n})();function Us(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var fn=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof ui)o=e;else{let l;r.headers instanceof bt?l=r.headers:l=new bt(r.headers);let d;r.params&&(r.params instanceof re?d=r.params:d=new re({fromObject:r.params})),o=new ui(e,t,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=S(o).pipe(Rn(l=>this.handler.handle(l)));if(e instanceof ui||r.observe==="events")return a;let s=a.pipe(ge(l=>l instanceof ar));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(j(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new A(2806,!1);return l.body}));case"blob":return s.pipe(j(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new A(2807,!1);return l.body}));case"text":return s.pipe(j(l=>{if(l.body!==null&&typeof l.body!="string")throw new A(2808,!1);return l.body}));default:return s.pipe(j(l=>l.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new re().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Us(r,t))}post(e,t,r={}){return this.request("POST",e,Us(r,t))}put(e,t,r={}){return this.request("PUT",e,Us(r,t))}static \u0275fac=function(t){return new(t||n)(E(Gs))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var cg=new p("",{factory:()=>!0}),dg="XSRF-TOKEN",ug=new p("",{factory:()=>dg}),hg="X-XSRF-TOKEN",mg=new p("",{factory:()=>hg}),fg=(()=>{class n{cookieName=c(ug);doc=c(I);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=tr(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),uu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(fg),r},providedIn:"root"})}return n})();function pg(n,i){if(!c(cg)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=c(Xt).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch(r){return i(n)}let e=c(uu).getToken(),t=c(mg);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}var Ws=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(Ws||{});function gg(n,i){return{\u0275kind:n,\u0275providers:i}}function bg(...n){let i=[fn,Oo,{provide:Gs,useExisting:Oo},{provide:Hs,useFactory:()=>c(og,{optional:!0})??c(zs)},{provide:$s,useValue:pg,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return zi(i)}function _g(n){return gg(Ws.Interceptors,n.map(i=>({provide:$s,useValue:i,multi:!0})))}var hu=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(E(I))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=E(yg),r},providedIn:"root"})}return n})(),yg=(()=>{class n extends sr{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case Xe.NONE:return t;case Xe.HTML:return ai(t,"HTML")?un(t):od(this._doc,String(t)).toString();case Xe.STYLE:return ai(t,"Style")?un(t):t;case Xe.SCRIPT:if(ai(t,"Script"))return un(t);throw new A(5200,!1);case Xe.URL:return ai(t,"URL")?un(t):rd(String(t));case Xe.RESOURCE_URL:if(ai(t,"ResourceURL"))return un(t);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Jc(e)}bypassSecurityTrustStyle(e){return ed(e)}bypassSecurityTrustScript(e){return td(e)}bypassSecurityTrustUrl(e){return nd(e)}bypassSecurityTrustResourceUrl(e){return id(e)}static \u0275fac=function(t){return new(t||n)(E(I))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $="primary",vr=Symbol("RouteTitle"),Qs=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function jn(n){return new Qs(n)}function Ys(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function wu(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let l={},d=n.slice(0,t.length);return Ys(t,d,l)?{consumed:d,posParams:l}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Ys(o,n.slice(0,o.length),s)||!Ys(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function Vo(n){return new Promise((i,e)=>{n.pipe(sn()).subscribe({next:t=>i(t),error:t=>e(t)})})}function wg(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Nt(n[e],i[e]))return!1;return!0}function Nt(n,i){let e=n?Js(n):void 0,t=i?Js(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Cu(n[r],i[r]))return!1;return!0}function Js(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Cu(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Cg(n){return n.length>0?n[n.length-1]:null}function Un(n){return Xr(n)?n:li(n)?Be(Promise.resolve(n)):S(n)}function Du(n){return Xr(n)?Vo(n):Promise.resolve(n)}var Dg={exact:ku,subset:Su},xu={exact:xg,subset:Eg,ignored:()=>!0},Eu={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},el={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function fu(n,i,e){return Dg[e.paths](n.root,i.root,e.matrixParams)&&xu[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function xg(n,i){return Nt(n,i)}function ku(n,i,e){if(!Bn(n.segments,i.segments)||!No(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!ku(n.children[t],i.children[t],e))return!1;return!0}function Eg(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Cu(n[e],i[e]))}function Su(n,i,e){return Ru(n,i,i.segments,e)}function Ru(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!Bn(r,e)||i.hasChildren()||!No(r,e,t))}else if(n.segments.length===e.length){if(!Bn(n.segments,e)||!No(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Su(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!Bn(n.segments,r)||!No(n.segments,r,t)||!n.children[$]?!1:Ru(n.children[$],i,o,t)}}function No(n,i,e){return i.every((t,r)=>xu[e](n[r].parameters,t.parameters))}var ct=class{root;queryParams;fragment;_queryParamMap;constructor(i=new oe([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=jn(this.queryParams),this._queryParamMap}toString(){return Rg.serialize(this)}},oe=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Bo(this)}},pn=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=jn(this.parameters),this._parameterMap}toString(){return Mu(this)}};function kg(n,i){return Bn(n,i)&&n.every((e,t)=>Nt(e.parameters,i[t].parameters))}function Bn(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function Sg(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===$&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==$&&(e=e.concat(i(r,t)))}),e}var _n=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>new Jt,providedIn:"root"})}return n})(),Jt=class{parse(i){let e=new nl(i);return new ct(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${lr(i.root,!0)}`,t=Tg(i.queryParams),r=typeof i.fragment=="string"?`#${Ig(i.fragment)}`:"";return`${e}${t}${r}`}},Rg=new Jt;function Bo(n){return n.segments.map(i=>Mu(i)).join("/")}function lr(n,i){if(!n.hasChildren())return Bo(n);if(i){let e=n.children[$]?lr(n.children[$],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==$&&t.push(`${r}:${lr(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Sg(n,(t,r)=>r===$?[lr(n.children[$],!1)]:[`${r}:${lr(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[$]!=null?`${Bo(n)}/${e[0]}`:`${Bo(n)}/(${e.join("//")})`}}function Iu(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Po(n){return Iu(n).replace(/%3B/gi,";")}function Ig(n){return encodeURI(n)}function tl(n){return Iu(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function jo(n){return decodeURIComponent(n)}function pu(n){return jo(n.replace(/\+/g,"%20"))}function Mu(n){return`${tl(n.path)}${Mg(n.parameters)}`}function Mg(n){return Object.entries(n).map(([i,e])=>`;${tl(i)}=${tl(e)}`).join("")}function Tg(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Po(e)}=${Po(r)}`).join("&"):`${Po(e)}=${Po(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Ag=/^[^\/()?;#]+/;function Zs(n){let i=n.match(Ag);return i?i[0]:""}var Fg=/^[^\/()?;=#]+/;function Og(n){let i=n.match(Fg);return i?i[0]:""}var Pg=/^[^=?&#]+/;function Lg(n){let i=n.match(Pg);return i?i[0]:""}var Ng=/^[^&#]+/;function Bg(n){let i=n.match(Ng);return i?i[0]:""}var nl=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new oe([],{}):new oe([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[$]=new oe(e,t)),r}parseSegment(){let i=Zs(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(i),new pn(jo(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Og(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Zs(this.remaining);r&&(t=r,this.capture(t))}i[jo(e)]=jo(t)}parseQueryParam(i){let e=Lg(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Bg(this.remaining);a&&(t=a,this.capture(t))}let r=pu(e),o=pu(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Zs(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=$);let s=this.parseChildren(e+1);t[a??$]=Object.keys(s).length===1&&s[$]?s[$]:new oe([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new A(4011,!1)}};function Tu(n){return n.segments.length>0?new oe([],{[$]:n}):n}function Au(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=Au(r);if(t===$&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new oe(n.segments,i);return jg(e)}function jg(n){if(n.numberOfChildren===1&&n.children[$]){let i=n.children[$];return new oe(n.segments.concat(i.segments),i.children)}return n}function gn(n){return n instanceof ct}function Fu(n,i,e=null,t=null,r=new Jt){let o=Ou(n);return Pu(o,i,e,t,r)}function Ou(n){let i;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new oe(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=Tu(t);return i??r}function Pu(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Xs(o,o,o,e,t,r);let a=Vg(i);if(a.toRoot())return Xs(o,o,new oe([],{}),e,t,r);let s=Ug(a,o,n),l=s.processChildren?dr(s.segmentGroup,s.index,a.commands):Nu(s.segmentGroup,s.index,a.commands);return Xs(o,s.segmentGroup,l,e,t,r)}function Uo(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function hr(n){return typeof n=="object"&&n!=null&&n.outlets}function gu(n,i,e){n||="\u0275";let t=new ct;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Xs(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(h=>gu(d,h,o)):gu(d,u,o);let s;n===i?s=e:s=Lu(n,i,e);let l=Tu(Au(s));return new ct(l,a,r)}function Lu(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Lu(o,i,e)}),new oe(n.segments,t)}var zo=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Uo(t[0]))throw new A(4003,!1);let r=t.find(hr);if(r&&r!==Cg(t))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Vg(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new zo(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new zo(e,i,t)}var pi=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Ug(n,i,e){if(n.isAbsolute)return new pi(i,!0,0);if(!e)return new pi(i,!1,NaN);if(e.parent===null)return new pi(e,!0,0);let t=Uo(n.commands[0])?0:1,r=e.segments.length-1+t;return zg(e,r,n.numberOfDoubleDots)}function zg(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new A(4005,!1);r=t.segments.length}return new pi(t,!1,r-o)}function $g(n){return hr(n[0])?n[0].outlets:{[$]:n}}function Nu(n,i,e){if(n??=new oe([],{}),n.segments.length===0&&n.hasChildren())return dr(n,i,e);let t=Hg(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new oe(n.segments.slice(0,t.pathIndex),{});return o.children[$]=new oe(n.segments.slice(t.pathIndex),n.children),dr(o,0,r)}else return t.match&&r.length===0?new oe(n.segments,{}):t.match&&!n.hasChildren()?il(n,i,e):t.match?dr(n,0,r):il(n,i,e)}function dr(n,i,e){if(e.length===0)return new oe(n.segments,{});{let t=$g(e),r={};if(Object.keys(t).some(o=>o!==$)&&n.children[$]&&n.numberOfChildren===1&&n.children[$].segments.length===0){let o=dr(n.children[$],i,e);return new oe(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Nu(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new oe(n.segments,r)}}function Hg(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(hr(s))break;let l=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!_u(l,d,a))return o;t+=2}else{if(!_u(l,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function il(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(hr(o)){let l=Gg(o.outlets);return new oe(t,l)}if(r===0&&Uo(e[0])){let l=n.segments[i];t.push(new pn(l.path,bu(e[0]))),r++;continue}let a=hr(o)?o.outlets[$]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Uo(s)?(t.push(new pn(a,bu(s))),r+=2):(t.push(new pn(a,{})),r++)}return new oe(t,{})}function Gg(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=il(new oe([],{}),0,t))}),i}function bu(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function _u(n,i,e){return n==e.path&&Nt(i,e.parameters)}var gi="imperative",Ae=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Ae||{}),dt=class{id;url;constructor(i,e){this.id=i,this.url=e}},bn=class extends dt{type=Ae.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},at=class extends dt{urlAfterRedirects;type=Ae.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},We=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(We||{}),_i=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(_i||{}),_t=class extends dt{reason;code;type=Ae.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Bu(n){return n instanceof _t&&(n.code===We.Redirect||n.code===We.SupersededByNewNavigation)}var Bt=class extends dt{reason;code;type=Ae.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Vn=class extends dt{error;target;type=Ae.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},mr=class extends dt{urlAfterRedirects;state;type=Ae.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$o=class extends dt{urlAfterRedirects;state;type=Ae.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ho=class extends dt{urlAfterRedirects;state;shouldActivate;type=Ae.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Go=class extends dt{urlAfterRedirects;state;type=Ae.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wo=class extends dt{urlAfterRedirects;state;type=Ae.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qo=class{route;type=Ae.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Yo=class{route;type=Ae.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Zo=class{snapshot;type=Ae.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xo=class{snapshot;type=Ae.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ko=class{snapshot;type=Ae.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qo=class{snapshot;type=Ae.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vi=class{routerEvent;position;anchor;scrollBehavior;type=Ae.Scroll;constructor(i,e,t,r){this.routerEvent=i,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},yi=class{},fr=class{},wi=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Wg(n){return!(n instanceof yi)&&!(n instanceof wi)&&!(n instanceof fr)}var Jo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new zn(this.rootInjector)}},zn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Jo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(E(Oe))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ea=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=rl(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=rl(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ol(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ol(i,this._root).map(e=>e.value)}};function rl(n,i){if(n===i.value)return i;for(let e of i.children){let t=rl(n,e);if(t)return t}return null}function ol(n,i){if(n===i.value)return[i];for(let e of i.children){let t=ol(n,e);if(t.length)return t.unshift(i),t}return[]}var lt=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function fi(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var pr=class extends ea{snapshot;constructor(i,e){super(i),this.snapshot=e,fl(this,i)}toString(){return this.snapshot.toString()}};function ju(n,i){let e=qg(n,i),t=new Ne([new pn("",{})]),r=new Ne({}),o=new Ne({}),a=new Ne({}),s=new Ne(""),l=new jt(t,r,a,s,o,$,n,e.root);return l.snapshot=e.root,new pr(new lt(l,[]),e)}function qg(n,i){let e={},t={},r={},a=new Ci([],e,r,"",t,$,n,null,{},i);return new gr("",new lt(a,[]))}var jt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(j(d=>d[vr]))??S(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(j(i=>jn(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(j(i=>jn(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ml(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:m(m({},i.params),n.params),data:m(m({},i.data),n.data),resolve:m(m(m(m({},n.data),i.data),r?.data),n._resolvedData)}:t={params:m({},n.params),data:m({},n.data),resolve:m(m({},n.data),n._resolvedData??{})},r&&Uu(r)&&(t.resolve[vr]=r.title),t}var Ci=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[vr]}constructor(i,e,t,r,o,a,s,l,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=jn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=jn(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},gr=class extends ea{url;constructor(i,e){super(e),this.url=i,fl(this,e)}toString(){return Vu(this._root)}};function fl(n,i){i.value._routerState=n,i.children.forEach(e=>fl(n,e))}function Vu(n){let i=n.children.length>0?` { ${n.children.map(Vu).join(", ")} } `:"";return`${n.value}${i}`}function Ks(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Nt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Nt(i.params,e.params)||n.paramsSubject.next(e.params),wg(i.url,e.url)||n.urlSubject.next(e.url),Nt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function al(n,i){let e=Nt(n.params,i.params)&&kg(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||al(n.parent,i.parent))}function Uu(n){return typeof n.title=="string"||n.title===null}var zu=new p(""),pl=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=$;activateEvents=new O;deactivateEvents=new O;attachEvents=new O;detachEvents=new O;routerOutletData=He();parentContexts=c(zn);location=c(nt);changeDetector=c(we);inputBinder=c(yr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new sl(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[de]})}return n})(),sl=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===jt?this.route:i===zn?this.childContexts:i===zu?this.outletData:this.parent.get(i,e)}},yr=new p(""),gl=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=Vi([t.queryParams,t.params,t.data]).pipe(ze(([o,a,s],l)=>(s=m(m(m({},o),a),s),l===0?S(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=wd(t.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),bl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&Q(0,"router-outlet")},dependencies:[pl],encapsulation:2})}return n})();function _l(n){let i=n.children&&n.children.map(_l),e=i?ie(m({},n),{children:i}):m({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==$&&(e.component=bl),e}function Yg(n,i,e){let t=br(n,i._root,e?e._root:void 0);return new pr(t,i)}function br(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Zg(n,i,e);return new lt(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>br(n,s)),a}}let t=Xg(i.value),r=i.children.map(o=>br(n,o));return new lt(t,r)}}function Zg(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return br(n,t,r);return br(n,t)})}function Xg(n){return new jt(new Ne(n.url),new Ne(n.params),new Ne(n.queryParams),new Ne(n.fragment),new Ne(n.data),n.outlet,n.component,n)}var Di=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},$u="ngNavigationCancelingError";function ta(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=gn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Hu(!1,We.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Hu(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[$u]=!0,e.cancellationCode=i,e}function Kg(n){return Gu(n)&&gn(n.url)}function Gu(n){return!!n&&n[$u]}var ll=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Ks(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=fi(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=fi(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=fi(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=fi(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new Qo(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Xo(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Ks(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Ks(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},na=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},bi=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Qg(n,i,e){let t=n._root,r=i?i._root:null;return cr(t,r,e,[t.value])}function Jg(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Ei(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Wc(n)?n:i.get(n):t}function cr(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=fi(i);return n.children.forEach(a=>{eb(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>ur(s,e.getContext(a),r)),r}function eb(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=tb(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new na(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?cr(n,i,s?s.children:null,t,r):cr(n,i,e,t,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new bi(s.outlet.component,a))}else a&&ur(i,s,r),r.canActivateChecks.push(new na(t)),o.component?cr(n,null,s?s.children:null,t,r):cr(n,null,e,t,r);return r}function tb(n,i,e){if(typeof e=="function")return Ze(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!Bn(n.url,i.url);case"pathParamsOrQueryParamsChange":return!Bn(n.url,i.url)||!Nt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!al(n,i)||!Nt(n.queryParams,i.queryParams);default:return!al(n,i)}}function ur(n,i,e){let t=fi(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?ur(a,i.children.getContext(o),e):ur(a,null,e):ur(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new bi(i.outlet.component,r)):e.canDeactivateChecks.push(new bi(null,r)):e.canDeactivateChecks.push(new bi(null,r))}function wr(n){return typeof n=="function"}function nb(n){return typeof n=="boolean"}function ib(n){return n&&wr(n.canLoad)}function rb(n){return n&&wr(n.canActivate)}function ob(n){return n&&wr(n.canActivateChild)}function ab(n){return n&&wr(n.canDeactivate)}function sb(n){return n&&wr(n.canMatch)}function Wu(n){return n instanceof zc||n?.name==="EmptyError"}var Lo=Symbol("INITIAL_VALUE");function xi(){return ze(n=>Vi(n.map(i=>i.pipe(Ft(1),Dt(Lo)))).pipe(j(i=>{for(let e of i)if(e!==!0){if(e===Lo)return Lo;if(e===!1||lb(e))return e}return!0}),ge(i=>i!==Lo),Ft(1)))}function lb(n){return gn(n)||n instanceof Di}function qu(n){return n.aborted?S(void 0).pipe(Ft(1)):new et(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Yu(n){return ce(qu(n))}function cb(n){return At(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?S(ie(m({},i),{guardsResult:!0})):db(o,e,t).pipe(At(a=>a&&nb(a)?ub(e,r,n):S(a)),j(a=>ie(m({},i),{guardsResult:a})))})}function db(n,i,e){return Be(n).pipe(At(t=>gb(t.component,t.route,e,i)),sn(t=>t!==!0,!0))}function ub(n,i,e){return Be(i).pipe(Rn(t=>Kr(mb(t.route.parent,e),hb(t.route,e),pb(n,t.path),fb(n,t.route))),sn(t=>t!==!0,!0))}function hb(n,i){return n!==null&&i&&i(new Ko(n)),S(!0)}function mb(n,i){return n!==null&&i&&i(new Zo(n)),S(!0)}function fb(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return S(!0);let t=e.map(r=>Qr(()=>{let o=i._environmentInjector,a=Ei(r,o),s=rb(a)?a.canActivate(i,n):Ze(o,()=>a(i,n));return Un(s).pipe(sn())}));return S(t).pipe(xi())}function pb(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Jg(o)).filter(o=>o!==null).map(o=>Qr(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=Ei(s,l),u=ob(d)?d.canActivateChild(e,n):Ze(l,()=>d(e,n));return Un(u).pipe(sn())});return S(a).pipe(xi())}));return S(r).pipe(xi())}function gb(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return S(!0);let o=r.map(a=>{let s=i._environmentInjector,l=Ei(a,s),d=ab(l)?l.canDeactivate(n,i,e,t):Ze(s,()=>l(n,i,e,t));return Un(d).pipe(sn())});return S(o).pipe(xi())}function bb(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return S(!0);let a=o.map(s=>{let l=Ei(s,n),d=ib(l)?l.canLoad(i,e):Ze(n,()=>l(i,e)),u=Un(d);return r?u.pipe(Yu(r)):u});return S(a).pipe(xi(),Zu(t))}function Zu(n){return Vc(je(i=>{if(typeof i!="boolean")throw ta(n,i)}),j(i=>i===!0))}function _b(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return S(!0);let s=a.map(l=>{let d=Ei(l,n),u=sb(d)?d.canMatch(i,e,r):Ze(n,()=>d(i,e,r));return Un(u).pipe(Yu(o))});return S(s).pipe(xi(),Zu(t))}var Qt=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},_r=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function vb(n){throw new A(4e3,!1)}function yb(n){throw Hu(!1,We.GuardRejected)}var cl=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return le(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[$])throw vb(`${i.redirectTo}`);r=r.children[$]}})}applyRedirectCommands(i,e,t,r,o){return le(this,null,function*(){let a=yield wb(e,r,o);if(a instanceof ct)throw new _r(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new _r(s);return s})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new ct(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,t,r)}),new oe(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function wb(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Vo(Un(Ze(e,()=>t(i))))}function Cb(n,i){return n.providers&&!n._injector&&(n._injector=ao(n.providers,i,`Route: ${n.path}`)),n._injector??i}function St(n){return n.outlet||$}function Db(n,i){let e=n.filter(t=>St(t)===i);return e.push(...n.filter(t=>St(t)!==i)),e}var dl={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Xu(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function xb(n,i,e,t,r,o,a){let s=Ku(n,i,e);if(!s.matched)return S(s);let l=Xu(o(s));return t=Cb(i,t),_b(t,i,e,r,l,a).pipe(j(d=>d===!0?s:m({},dl)))}function Ku(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?m({},dl):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||wu)(e,n,i);if(!r)return m({},dl);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?m(m({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function vu(n,i,e,t,r){return e.length>0&&Sb(n,e,t,r)?{segmentGroup:new oe(i,kb(t,new oe(e,n.children))),slicedSegments:[]}:e.length===0&&Rb(n,e,t)?{segmentGroup:new oe(n.segments,Eb(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new oe(n.segments,n.children),slicedSegments:e}}function Eb(n,i,e,t){let r={};for(let o of e)if(ra(n,i,o)&&!t[St(o)]){let a=new oe([],{});r[St(o)]=a}return m(m({},t),r)}function kb(n,i){let e={};e[$]=i;for(let t of n)if(t.path===""&&St(t)!==$){let r=new oe([],{});e[St(t)]=r}return e}function Sb(n,i,e,t){return e.some(r=>!ra(n,i,r)||!(St(r)!==$)?!1:!(t!==void 0&&St(r)===t))}function Rb(n,i,e){return e.some(t=>ra(n,i,t))}function ra(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Ib(n,i,e){return i.length===0&&!n.children[e]}var ul=class{};function Mb(n,i,e,t,r,o,a="emptyOnly",s){return le(this,null,function*(){return new hl(n,i,e,t,r,a,o,s).recognize()})}var Tb=31,hl=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new cl(this.urlSerializer,this.urlTree)}noMatchError(i){return new A(4002,`'${i.segmentGroup}'`)}recognize(){return le(this,null,function*(){let i=vu(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new lt(t,e),o=new gr("",r),a=Fu(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(i){return le(this,null,function*(){let e=new Ci([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),$,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,$,e),rootSnapshot:e}}catch(t){if(t instanceof _r)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Qt?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return le(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=yield this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof lt?[a]:[]})}processChildren(i,e,t,r){return le(this,null,function*(){let o=[];for(let l of Object.keys(t.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=t.children[l],u=Db(e,l),h=yield this.processSegmentGroup(i,u,d,l,r);a.push(...h)}let s=Qu(a);return Ab(s),s})}processSegment(i,e,t,r,o,a,s){return le(this,null,function*(){for(let l of e)try{return yield this.processSegmentAgainstRoute(l._injector??i,e,l,t,r,o,a,s)}catch(d){if(d instanceof Qt||Wu(d))continue;throw d}if(Ib(t,r,o))return new ul;throw new Qt(t)})}processSegmentAgainstRoute(i,e,t,r,o,a,s,l){return le(this,null,function*(){if(St(t)!==a&&(a===$||!ra(r,o,t)))throw new Qt(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,l);throw new Qt(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){return le(this,null,function*(){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:b}=Ku(e,r,o);if(!l)throw new Qt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Tb&&(this.allowRedirects=!1));let k=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let w=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,Xu(k),i),H=yield this.applyRedirects.lineralizeSegments(r,w);return this.processSegment(i,t,e,H.concat(b),a,!1,s)})}createSnapshot(i,e,t,r,o){let a=new Ci(t,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Ob(e),St(e),e.component??e._loadedComponent??null,e,Pb(e),i),s=ml(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(i,e,t,r,o,a){return le(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Te=>this.createSnapshot(i,t,Te.consumedSegments,Te.parameters,a),l=yield Vo(xb(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new Qt(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:h,consumedSegments:b,remainingSegments:k}=l,w=this.createSnapshot(i,t,b,h,a),{segmentGroup:H,slicedSegments:F}=vu(e,b,k,d,o);if(F.length===0&&H.hasChildren()){let Te=yield this.processChildren(u,d,H,w);return new lt(w,Te)}if(d.length===0&&F.length===0)return new lt(w,[]);let W=St(t)===o,ae=yield this.processSegment(u,d,H,F,W?$:o,!0,w);return new lt(w,ae instanceof lt?[ae]:[])})}getChildConfig(i,e,t){return le(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Vo(bb(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw yb(e)}return{routes:[],injector:i}})}};function Ab(n){n.sort((i,e)=>i.value.outlet===$?-1:e.value.outlet===$?1:i.value.outlet.localeCompare(e.value.outlet))}function Fb(n){let i=n.value.routeConfig;return i&&i.path===""}function Qu(n){let i=[],e=new Set;for(let t of n){if(!Fb(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=Qu(t.children);i.push(new lt(t.value,r))}return i.filter(t=>!e.has(t))}function Ob(n){return n.data||{}}function Pb(n){return n.resolve||{}}function Lb(n,i,e,t,r,o,a){return At(s=>le(null,null,function*(){let{state:l,tree:d}=yield Mb(n,i,e,t,s.extractedUrl,r,o,a);return ie(m({},s),{targetSnapshot:l,urlAfterRedirects:d})}))}function Nb(n){return At(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return S(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of Ju(s))o.add(l);let a=0;return Be(o).pipe(Rn(s=>r.has(s)?Bb(s,e,n):(s.data=ml(s,s.parent,n).resolve,S(void 0))),je(()=>a++),is(1),At(s=>a===o.size?S(i):Ue))})}function Ju(n){let i=n.children.map(e=>Ju(e)).flat();return[n,...i]}function Bb(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Uu(t)&&(r[vr]=t.title),Qr(()=>(n.data=ml(n,n.parent,e).resolve,jb(r,n,i).pipe(j(o=>(n._resolvedData=o,n.data=m(m({},n.data),o),null)))))}function jb(n,i,e){let t=Js(n);if(t.length===0)return S({});let r={};return Be(t).pipe(At(o=>Vb(n[o],i,e).pipe(sn(),je(a=>{if(a instanceof Di)throw ta(new Jt,a);r[o]=a}))),is(1),j(()=>r),ei(o=>Wu(o)?Ue:Zr(o)))}function Vb(n,i,e){let t=i._environmentInjector,r=Ei(n,t),o=r.resolve?r.resolve(i,e):Ze(t,()=>r(i,e));return Un(o)}function yu(n){return ze(i=>{let e=n(i);return e?Be(e).pipe(j(()=>i)):S(i)})}var vl=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===$);return t}getResolvedTitleForRoute(e){return e.data[vr]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>c(eh),providedIn:"root"})}return n})(),eh=(()=>{class n extends vl{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(E(hu))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vn=new p("",{factory:()=>({})}),$n=new p(""),oa=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(gd);loadComponent(e,t){return le(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=le(this,null,function*(){try{let o=yield Du(Ze(e,()=>t.loadComponent())),a=yield ih(nh(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=le(this,null,function*(){try{let o=yield th(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function th(n,i,e,t){return le(this,null,function*(){let r=yield Du(Ze(e,()=>n.loadChildren())),o=yield ih(nh(r)),a;o instanceof cd||Array.isArray(o)?a=o:a=yield i.compileModuleAsync(o),t&&t(n);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get($n,[],{optional:!0,self:!0}).flat()),{routes:l.map(_l),injector:s,factory:u}})}function Ub(n){return n&&typeof n=="object"&&"default"in n}function nh(n){return Ub(n)?n.default:n}function ih(n){return le(this,null,function*(){return n})}var aa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>c(zb),providedIn:"root"})}return n})(),zb=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yl=new p(""),wl=new p("");function rh(n,i,e){let t=n.get(wl),r=n.get(I);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),$b(n)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:l}=t;return l&&Ze(n,()=>l({transition:s,from:i,to:e})),a}function $b(n){return new Promise(i=>{Se({read:()=>setTimeout(i)},{injector:n})})}var Hb=()=>{},Cl=new p(""),sa=(()=>{class n{currentNavigation=K(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=K(null);events=new y;transitionAbortWithErrorSubject=new y;configLoader=c(oa);environmentInjector=c(Oe);destroyRef=c(dn);urlSerializer=c(_n);rootContexts=c(zn);location=c(Pt);inputBindingEnabled=c(yr,{optional:!0})!==null;titleStrategy=c(vl);options=c(vn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(aa);createViewTransition=c(yl,{optional:!0});navigationErrorHandler=c(Cl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>S(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new qo(r)),t=r=>this.events.next(new Yo(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;ne(()=>{this.transitions?.next(ie(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ne(null),this.transitions.pipe(ge(t=>t!==null),ze(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return S(t).pipe(ze(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",We.SupersededByNewNavigation),Ue;this.currentTransition=t;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?ie(m({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Bt(s.id,this.urlSerializer.serialize(s.rawUrl),"",_i.IgnoredSameUrlNavigation)),s.resolve(!1),Ue;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return S(s).pipe(ze(h=>(this.events.next(new bn(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?Ue:Promise.resolve(h))),Lb(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),je(h=>{t.targetSnapshot=h.targetSnapshot,t.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(b=>(b.finalUrl=h.urlAfterRedirects,b)),this.events.next(new fr)}),ze(h=>Be(t.routesRecognizeHandler.deferredHandle??S(void 0)).pipe(j(()=>h))),je(()=>{let h=new mr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:h,extractedUrl:b,source:k,restoredState:w,extras:H}=s,F=new bn(h,this.urlSerializer.serialize(b),k,w);this.events.next(F);let W=ju(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=ie(m({},s),{targetSnapshot:W,urlAfterRedirects:b,extras:ie(m({},H),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ae=>(ae.finalUrl=b,ae)),S(t)}else return this.events.next(new Bt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",_i.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ue}),j(s=>{let l=new $o(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=t=ie(m({},s),{guards:Qg(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),cb(s=>this.events.next(s)),ze(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ta(this.urlSerializer,s.guardsResult);let l=new Ho(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Ue;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",We.GuardRejected),Ue;if(s.guards.canActivateChecks.length===0)return S(s);let d=new Go(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Ue;let u=!1;return S(s).pipe(Nb(this.paramsInheritanceStrategy),je({next:()=>{u=!0;let h=new Wo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)},complete:()=>{u||this.cancelNavigationTransition(s,"",We.NoDataFromResolver)}}))}),yu(s=>{let l=u=>{let h=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let b=u._environmentInjector;h.push(this.configLoader.loadComponent(b,u.routeConfig).then(k=>{u.component=k}))}for(let b of u.children)h.push(...l(b));return h},d=l(s.targetSnapshot.root);return d.length===0?S(s):Be(Promise.all(d).then(()=>s))}),yu(()=>this.afterPreactivation()),ze(()=>{let{currentSnapshot:s,targetSnapshot:l}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?Be(d).pipe(j(()=>t)):S(t)}),Ft(1),ze(s=>{let l=Yg(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=ie(m({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new yi);let d=t.beforeActivateHandler.deferredHandle;return d?Be(d.then(()=>s)):S(s)}),je(s=>{new ll(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=Hb,l)),this.lastSuccessfulNavigation.set(ne(this.currentNavigation)),this.events.next(new at(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ce(qu(o.signal).pipe(ge(()=>!r&&!t.targetRouterState),je(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",We.Aborted)}))),je({complete:()=>{r=!0}}),ce(this.transitionAbortWithErrorSubject.pipe(je(s=>{throw s}))),ti(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",We.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ei(s=>{if(r=!0,this.destroyed)return t.resolve(!1),Ue;if(Gu(s))this.events.next(new _t(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Kg(s)?this.events.next(new wi(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let l=new Vn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=Ze(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof Di){let{message:u,cancellationCode:h}=ta(this.urlSerializer,d);this.events.next(new _t(t.id,this.urlSerializer.serialize(t.extractedUrl),u,h)),this.events.next(new wi(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return Ue}))}))}cancelNavigationTransition(e,t,r){let o=new _t(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=ne(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Gb(n){return n!==gi}var oh=new p("");var ah=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>c(Wb),providedIn:"root"})}return n})(),ia=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Wb=(()=>{class n extends ia{static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),la=(()=>{class n{urlSerializer=c(_n);options=c(vn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Pt);urlHandlingStrategy=c(aa);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ct;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof ct?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=ju(null,c(Oe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>c(qb),providedIn:"root"})}return n})(),qb=(()=>{class n extends la{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof bn?this.updateStateMemento():e instanceof Bt?this.commitTransition(t):e instanceof mr?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof yi?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof _t&&!Bu(e)?this.restoreHistory(t):e instanceof Vn?this.restoreHistory(t,!0):e instanceof at&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,d=m(m({},s),this.generateNgRouterState(o,l,t));this.location.replaceState(e,"",d)}else{let l=m(m({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",l)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):m({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ca(n,i){n.events.pipe(ge(e=>e instanceof at||e instanceof _t||e instanceof Vn||e instanceof Bt),j(e=>e instanceof at||e instanceof Bt?0:(e instanceof _t?e.code===We.Redirect||e.code===We.SupersededByNewNavigation:!1)?2:1),ge(e=>e!==2),Ft(1)).subscribe(()=>{i()})}var vt=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(ls);stateManager=c(la);options=c(vn,{optional:!0})||{};pendingTasks=c(Yc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(sa);urlSerializer=c(_n);location=c(Pt);urlHandlingStrategy=c(aa);injector=c(Oe);_events=new y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(ah);injectorCleanup=c(oh,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c($n,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(yr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ce;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=ne(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof _t&&t.code!==We.Redirect&&t.code!==We.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof at)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof wi){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),l=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Gb(r.source)},a);this.scheduleNavigation(s,gi,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Wg(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),gi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=ie(m({},o),{browserUrl:e})),r){let d=m({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(s);this.scheduleNavigation(l,t,a,o).catch(d=>{this.disposed||this.injector.get(ii)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ne(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(_l),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=t,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let b=r?r.snapshot:this.routerState.snapshot.root;h=Ou(b)}catch(b){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return Pu(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=gn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,gi,null,t)}navigate(e,t={skipLocationChange:!1}){return Yb(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(In(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=m({},Eu):t===!1?r=m({},el):r=m(m({},el),t),gn(e))return fu(this.currentUrlTree,e,r);let o=this.parseUrl(e);return fu(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((h,b)=>{s=h,l=b});let u=this.pendingTasks.add();return ca(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Yb(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new A(4008,!1)}var Xb=(()=>{class n{router=c(vt);stateManager=c(la);fragment=K("");queryParams=K({});path=K("");serializer=c(_n);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof at&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new ct(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),da=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Zt("href"),{optional:!0});reactiveHref=bd(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ne(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ne(this._target)}_target=K(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ne(this._queryParams)}_queryParams=K(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ne(this._fragment)}_fragment=K(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ne(this._queryParamsHandling)}_queryParamsHandling=K(void 0);set state(e){this._state.set(e)}get state(){return ne(this._state)}_state=K(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ne(this._info)}_info=K(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ne(this._relativeTo)}_relativeTo=K(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ne(this._preserveFragment)}_preserveFragment=K(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ne(this._skipLocationChange)}_skipLocationChange=K(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ne(this._replaceUrl)}_replaceUrl=K(!1);isAnchorElement;onChanges=new y;applicationErrorHandler=c(ii);options=c(vn,{optional:!0});reactiveRouterState=c(Xb);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=K(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(gn(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=it(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:gn(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return ne(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(M(vt),M(jt),os("tabindex"),M(be),M(C),M(pt))};static \u0275dir=_({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&X("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&G("href",r.reactiveHref(),ad)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",x],skipLocationChange:[2,"skipLocationChange","skipLocationChange",x],replaceUrl:[2,"replaceUrl","replaceUrl",x],routerLink:"routerLink"},features:[de]})}return n})();var Cr=class{};var sh=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,o){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ge(e=>e instanceof at),Rn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let o of t){o.providers&&!o._injector&&(o._injector=ao(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Be(r).pipe(es())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return S(null);let r;t.loadChildren&&t.canLoad===void 0?r=Be(this.loader.loadChildren(e,t)):r=S(null);let o=r.pipe(At(a=>a===null?S(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return Be([o,a]).pipe(es())}else return o})}static \u0275fac=function(t){return new(t||n)(E(vt),E(Oe),E(Cr),E(oa))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lh=new p(""),Kb=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=gi;restoredId=0;store={};urlSerializer=c(_n);zone=c(R);viewportScroller=c(As);transitions=c(sa);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof bn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof at?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Bt&&e.code===_i.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof vi)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){let r=ne(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>le(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new vi(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){ld()};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();function Qb(n,...i){return zi([{provide:$n,multi:!0,useValue:n},[],{provide:jt,useFactory:ch},{provide:ds,multi:!0,useFactory:dh},i.map(e=>e.\u0275providers)])}function ch(){return c(vt).routerState.root}function ki(n,i){return{\u0275kind:n,\u0275providers:i}}function dh(){let n=c(q);return i=>{let e=n.get(Gt);if(i!==e.components[0])return;let t=n.get(vt),r=n.get(uh);n.get(xl)===1&&t.initialNavigation(),n.get(fh,null,{optional:!0})?.setUpPreloading(),n.get(lh,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var uh=new p("",{factory:()=>new y}),xl=new p("",{factory:()=>1});function hh(){let n=[{provide:ss,useValue:!0},{provide:xl,useValue:0},cs(()=>{let i=c(q);return i.get(gs,Promise.resolve()).then(()=>new Promise(t=>{let r=i.get(vt),o=i.get(uh);ca(r,()=>{t(!0)}),i.get(sa).afterPreactivation=()=>(t(!0),o.closed?S(void 0):o),r.initialNavigation()}))})];return ki(2,n)}function mh(){let n=[cs(()=>{c(vt).setUpLocationChangeListener()}),{provide:xl,useValue:2}];return ki(3,n)}var fh=new p("");function ph(n){return ki(0,[{provide:fh,useExisting:sh},{provide:Cr,useExisting:n}])}function Jb(){return ki(6,[{provide:pt,useClass:xo}])}function gh(){return ki(8,[gl,{provide:yr,useExisting:gl}])}function bh(n){ro("NgRouterViewTransitions");let i=[{provide:yl,useValue:rh},{provide:wl,useValue:m({skipNextTransition:!!n?.skipInitialTransition},n)}];return ki(9,i)}var _h=[Pt,{provide:_n,useClass:Jt},vt,zn,{provide:jt,useFactory:ch},oa,[]],El=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[_h,[],{provide:$n,multi:!0,useValue:e},[],t?.errorHandler?{provide:Cl,useValue:t.errorHandler}:[],{provide:vn,useValue:t||{}},t?.useHash?t_():n_(),e_(),t?.preloadingStrategy?ph(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?i_(t):[],t?.bindToComponentInputs?gh().\u0275providers:[],t?.enableViewTransitions?bh().\u0275providers:[],r_()]}}static forChild(e){return{ngModule:n,providers:[{provide:$n,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({})}return n})();function e_(){return{provide:lh,useFactory:()=>{let n=c(As),i=c(vn);return i.scrollOffset&&n.setOffset(i.scrollOffset),new Kb(i)}}}function t_(){return{provide:pt,useClass:xo}}function n_(){return{provide:pt,useClass:go}}function i_(n){return[n.initialNavigation==="disabled"?mh().\u0275providers:[],n.initialNavigation==="enabledBlocking"?hh().\u0275providers:[]]}var Dl=new p("");function r_(){return[{provide:Dl,useFactory:dh},{provide:ds,multi:!0,useExisting:Dl}]}function Dr(n){return n.buttons===0||n.detail===0}function xr(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var kl;function yh(){if(kl==null){let n=typeof document<"u"?document.head:null;kl=!!(n&&(n.createShadowRoot||n.attachShadow))}return kl}function Sl(n){if(yh()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function o_(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Qe(n){return n.composedPath?n.composedPath()[0]:n.target}var Rl;try{Rl=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Rl=!1}var Z=(()=>{class n{_platformId=c(ri);isBrowser=this._platformId?Wd(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Rl)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Er;function wh(){if(Er==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Er=!0}))}finally{Er=Er||!1}return Er}function Si(n){return wh()?n:!!n.capture}function yn(n,i=0){return Ch(n)?Number(n):arguments.length===2?i:0}function Ch(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Je(n){return n instanceof C?n.nativeElement:n}var Dh=new p("cdk-input-modality-detector-options"),xh={ignoreKeys:[18,17,224,91,16]},Eh=650,Il={passive:!0,capture:!0},kh=(()=>{class n{_platform=c(Z);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ne(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Qe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Eh||(this._modality.next(Dr(e)?"keyboard":"mouse"),this._mostRecentTarget=Qe(e))};_onTouchstart=e=>{if(xr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Qe(e)};constructor(){let e=c(R),t=c(I),r=c(Dh,{optional:!0});if(this._options=m(m({},xh),r),this.modalityDetected=this._modality.pipe(ni(1)),this.modalityChanged=this.modalityDetected.pipe(ns()),this._platform.isBrowser){let o=c(Ke).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Il),o.listen(t,"mousedown",this._onMousedown,Il),o.listen(t,"touchstart",this._onTouchstart,Il)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kr=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(kr||{}),Sh=new p("cdk-focus-monitor-default-options"),ua=Si({passive:!0,capture:!0}),en=(()=>{class n{_ngZone=c(R);_platform=c(Z);_inputModalityDetector=c(kh);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(I);_stopInputModalityDetector=new y;constructor(){let e=c(Sh,{optional:!0});this._detectionMode=e?.detectionMode||kr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Qe(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Je(e);if(!this._platform.isBrowser||r.nodeType!==1)return S();let o=Sl(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new y,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=Je(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Je(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===kr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===kr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Eh:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Qe(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,ua),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,ua)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ce(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ua),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ua),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ml=(()=>{class n{_elementRef=c(C);_focusMonitor=c(en);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new O;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var ha=new WeakMap,Me=(()=>{class n{_appRef;_injector=c(q);_environmentInjector=c(Oe);load(e){let t=this._appRef=this._appRef||this._injector.get(Gt),r=ha.get(t);r||(r={loaders:new Set,refs:[]},ha.set(t,r),t.onDestroy(()=>{ha.get(t)?.refs.forEach(o=>o.destroy()),ha.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(mo(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),ma;function a_(){if(ma===void 0&&(ma=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(ma=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return ma}function Hn(n){return a_()?.createHTML(n)||n}function Rh(n,i,e){let t=e.sanitize(Xe.HTML,i);n.innerHTML=Hn(t||"")}function Gn(n){return Array.isArray(n)?n:[n]}var Ih=new Set,Wn,Ri=(()=>{class n{_platform=c(Z);_nonce=c(oi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):l_}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&s_(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function s_(n,i){if(!Ih.has(n))try{Wn||(Wn=document.createElement("style"),i&&Wn.setAttribute("nonce",i),Wn.setAttribute("type","text/css"),document.head.appendChild(Wn)),Wn.sheet&&(Wn.sheet.insertRule(`@media ${n} {body{ }}`,0),Ih.add(n))}catch(e){console.error(e)}}function l_(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Sr=(()=>{class n{_mediaMatcher=c(Ri);_zone=c(R);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Mh(Gn(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Mh(Gn(e)).map(a=>this._registerQuery(a).observable),o=Vi(r);return o=Kr(o.pipe(Ft(1)),o.pipe(ni(1),an(0))),o.pipe(j(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new et(a=>{let s=l=>this._zone.run(()=>a.next(l));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Dt(t),j(({matches:a})=>({query:e,matches:a})),ce(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Mh(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function c_(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Th=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ah=(()=>{class n{_mutationObserverFactory=c(Th);_observedElements=new Map;_ngZone=c(R);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Je(e);return new et(r=>{let a=this._observeElement(t).pipe(j(s=>s.filter(l=>!c_(l))),ge(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new y,r=this._mutationObserverFactory.create(o=>t.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fh=(()=>{class n{_contentObserver=c(Ah);_elementRef=c(C);event=new O;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=yn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(an(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",x],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),pa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({providers:[Th]})}return n})();var d_=(()=>{class n{_platform=c(Z);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return h_(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=u_(y_(e));if(t&&(Oh(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Oh(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!__(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return v_(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function u_(n){try{return n.frameElement}catch(i){return null}}function h_(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function m_(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function f_(n){return g_(n)&&n.type=="hidden"}function p_(n){return b_(n)&&n.hasAttribute("href")}function g_(n){return n.nodeName.toLowerCase()=="input"}function b_(n){return n.nodeName.toLowerCase()=="a"}function Nh(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Oh(n){if(!Nh(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function __(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function v_(n){return f_(n)?!1:m_(n)||p_(n)||n.hasAttribute("contenteditable")||Nh(n)}function y_(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Al=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Se(i,{injector:this._injector}):setTimeout(i)}},w_=(()=>{class n{_checker=c(d_);_ngZone=c(R);_document=c(I);_injector=c(q);constructor(){c(Me).load(fa)}create(e,t=!1){return new Al(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bh=new p("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),jh=new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),C_=0,Fl=(()=>{class n{_ngZone=c(R);_defaultOptions=c(jh,{optional:!0});_liveElement;_document=c(I);_sanitizer=c(sr);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(Bh,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Rh(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${C_++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wn=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(wn||{}),Ph="cdk-high-contrast-black-on-white",Lh="cdk-high-contrast-white-on-black",Tl="cdk-high-contrast-active",Vh=(()=>{class n{_platform=c(Z);_hasCheckedHighContrastMode=!1;_document=c(I);_breakpointSubscription;constructor(){this._breakpointSubscription=c(Sr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return wn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return wn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return wn.BLACK_ON_WHITE}return wn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Tl,Ph,Lh),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===wn.BLACK_ON_WHITE?e.add(Tl,Ph):t===wn.WHITE_ON_BLACK&&e.add(Tl,Lh)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),D_=(()=>{class n{constructor(){c(Vh)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[pa]})}return n})();var x_=200,ga=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:x_;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(je(e=>this._pressedLetters.push(e)),an(i),ge(()=>this._pressedLetters.length>0),j(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Cn(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Ii=class{_items;_activeItemIndex=K(-1);_activeItem=K(null);_wrap=!1;_typeaheadSubscription=Ce.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof $i?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):si(i)&&(this._effectRef=An(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new ga(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Cn(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return si(this._items)?this._items():this._items instanceof $i?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Ol=class extends Ii{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Rr=class extends Ii{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Pl={},Fe=class n{_appId=c(Fn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Pl.hasOwnProperty(i)||(Pl[i]=0),`${i}${e?n._infix+"-":""}${Pl[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})};var zh=" ";function E_(n,i,e){let t=_a(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(zh)))}function k_(n,i,e){let t=_a(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(zh)):n.removeAttribute(i)}function _a(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var $h="cdk-describedby-message",ba="cdk-describedby-host",Nl=0,Hh=(()=>{class n{_platform=c(Z);_document=c(I);_messageRegistry=new Map;_messagesContainer=null;_id=`${Nl++}`;constructor(){c(Me).load(fa),this._id=c(Fn)+"-"+Nl++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=Ll(t,r);typeof t!="string"?(Uh(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=Ll(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ba}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ba);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Uh(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Ll(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=_a(e,"aria-describedby").filter(r=>r.indexOf($h)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);E_(e,"aria-describedby",r.messageElement.id),e.setAttribute(ba,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,k_(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ba)}_isElementDescribedByMessage(e,t){let r=_a(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ll(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Uh(n,i){n.id||(n.id=`${$h}-${i}-${Nl++}`)}var Rt=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(Rt||{}),va,qn;function ya(){if(qn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return qn=!1,qn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)qn=!0;else{let n=Element.prototype.scrollTo;n?qn=!/\{\s*\[native code\]\s*\}/.test(n.toString()):qn=!1}}return qn}function Mi(){if(typeof document!="object"||!document)return Rt.NORMAL;if(va==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),va=Rt.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,va=n.scrollLeft===0?Rt.NEGATED:Rt.INVERTED),n.remove()}return va}function Bl(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ti,Gh=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function jl(){if(Ti)return Ti;if(typeof document!="object"||!document)return Ti=new Set(Gh),Ti;let n=document.createElement("input");return Ti=new Set(Gh.filter(i=>(n.setAttribute("type",i),n.type===i))),Ti}var Wh={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var S_=new p("MATERIAL_ANIMATIONS"),qh=null;function Vl(){return c(S_,{optional:!0})?.animationsDisabled||c(to,{optional:!0})==="NoopAnimations"?"di-disabled":(qh??=c(Ri).matchMedia("(prefers-reduced-motion)").matches,qh?"reduced-motion":"enabled")}function De(){return Vl()!=="enabled"}function ke(n){return n==null?"":typeof n=="string"?n:`${n}px`}function yt(n){return n!=null&&`${n}`!="false"}var wt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(wt||{}),Ul=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=wt.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Yh=Si({passive:!0,capture:!0}),zl=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Yh)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Yh)))}_delegateEventHandler=i=>{let e=Qe(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Ir={enterDuration:225,exitDuration:150},R_=800,Zh=Si({passive:!0,capture:!0}),Xh=["mousedown","touchstart"],Kh=["mouseup","mouseleave","touchend","touchcancel"],I_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Mr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new zl;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Je(t)),o&&o.get(Me).load(I_)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},Ir),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||M_(i,e,r),s=i-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),b=h.transitionProperty,k=h.transitionDuration,w=b==="none"||k==="0s"||k==="0s, 0s"||r.width===0&&r.height===0,H=new Ul(this,u,t,w);u.style.transform="scale3d(1, 1, 1)",H.state=wt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=H);let F=null;return!w&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let W=()=>{F&&(F.fallbackTimer=null),clearTimeout(Te),this._finishRippleTransition(H)},ae=()=>this._destroyRipple(H),Te=setTimeout(ae,d+100);u.addEventListener("transitionend",W),u.addEventListener("transitioncancel",ae),F={onTransitionEnd:W,onTransitionCancel:ae,fallbackTimer:Te}}),this._activeRipples.set(H,F),(w||!d)&&this._finishRippleTransition(H),H}fadeOutRipple(i){if(i.state===wt.FADING_OUT||i.state===wt.HIDDEN)return;let e=i.element,t=m(m({},Ir),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=wt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Je(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Xh.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Kh.forEach(e=>{this._triggerElement.addEventListener(e,this,Zh)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===wt.FADING_IN?this._startFadeOutTransition(i):i.state===wt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=wt.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=wt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Dr(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+R_;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!xr(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===wt.VISIBLE||i.config.terminateOnPointerUp&&i.state===wt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Xh.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Kh.forEach(e=>i.removeEventListener(e,this,Zh)),this._pointerUpEventsRegistered=!1))}};function M_(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var wa=new p("mat-ripple-global-options"),Yn=(()=>{class n{_elementRef=c(C);_animationsDisabled=De();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(R),t=c(Z),r=c(wa,{optional:!0}),o=c(q);this._globalOptions=r||{},this._rippleRenderer=new Mr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:m(m(m({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,m(m({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,m(m({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&L("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var T_={capture:!0},A_=["focus","mousedown","mouseenter","touchstart"],$l="mat-ripple-loader-uninitialized",Hl="mat-ripple-loader-class-name",Qh="mat-ripple-loader-centered",Ca="mat-ripple-loader-disabled",Jh=(()=>{class n{_document=c(I);_animationsDisabled=De();_globalRippleOptions=c(wa,{optional:!0});_platform=c(Z);_ngZone=c(R);_injector=c(q);_eventCleanups;_hosts=new Map;constructor(){let e=c(Ke).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>A_.map(t=>e.listen(this._document,t,this._onInteraction,T_)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute($l,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Hl))&&e.setAttribute(Hl,t.className||""),t.centered&&e.setAttribute(Qh,""),t.disabled&&e.setAttribute(Ca,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Ca,""):e.removeAttribute(Ca)}_onInteraction=e=>{let t=Qe(e);if(t instanceof HTMLElement){let r=t.closest(`[${$l}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Hl)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ir.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ir.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Ca),rippleConfig:{centered:e.hasAttribute(Qh),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Mr(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute($l)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var F_=["mat-icon-button",""],O_=["*"],P_=new p("MAT_BUTTON_CONFIG");function em(n){return n==null?void 0:Ve(n)}var Gl=(()=>{class n{_elementRef=c(C);_ngZone=c(R);_animationsDisabled=De();_config=c(P_,{optional:!0});_focusMonitor=c(en);_cleanupClick;_renderer=c(be);_rippleLoader=c(Jh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Me).load(Dn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(G("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Pe(r.color?"mat-"+r.color:""),L("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",x],disabled:[2,"disabled","disabled",x],ariaDisabled:[2,"aria-disabled","ariaDisabled",x],disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],tabIndex:[2,"tabIndex","tabIndex",em],_tabindex:[2,"tabindex","_tabindex",em]}})}return n})(),Wl=(()=>{class n extends Gl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ue],attrs:F_,ngContentSelectors:O_,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ye(),Ot(0,"span",0),J(1),Ot(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var L_=new p("cdk-dir-doc",{providedIn:"root",factory:()=>c(I)}),N_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function tm(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?N_.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var ut=(()=>{class n{get value(){return this.valueSignal()}valueSignal=K("ltr");change=new O;constructor(){let e=c(L_,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(tm(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Le=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({})}return n})();var nm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[Le]})}return n})();var B_=["matButton",""],j_=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],V_=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var im=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),rm=(()=>{class n extends Gl{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=U_(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?im.get(this._appearance):null,o=im.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ue],attrs:B_,ngContentSelectors:V_,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ye(j_),Ot(0,"span",0),J(1),hn(2,"span",1),J(3,1),Pn(),J(4,2),Ot(5,"span",2)(6,"span",3)),t&2&&L("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function U_(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var z_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[nm,Le]})}return n})();function PS(n){return n&&typeof n.connect=="function"&&!(n instanceof Uc)}var Tr=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Tr||{}),om=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,r,o){i.forEachOperation((a,s,l)=>{let d,u;if(a.previousIndex==null){let h=()=>t(a,s,l);d=this._insertView(h,l,e,r(a)),u=d?Tr.INSERTED:Tr.REPLACED}else l==null?(this._detachAndCacheView(s,e),u=Tr.REMOVED):(d=this._moveView(s,l,e,r(a)),u=Tr.MOVED);o&&o({context:d?.context,operation:u,record:a})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){let o=this._insertViewFromCache(e,t);if(o){o.context.$implicit=r;return}let a=i();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){let o=t.get(i);return t.move(o,e),o.context.$implicit=r,o}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var $_=20,Zn=(()=>{class n{_ngZone=c(R);_platform=c(Z);_renderer=c(Ke).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=$_){return this._platform.isBrowser?new et(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ts(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):S()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ge(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=Je(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Yl=(()=>{class n{elementRef=c(C);scrollDispatcher=c(Zn);ngZone=c(R);dir=c(ut,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=c(be);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&Mi()!=Rt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Mi()==Rt.INVERTED?e.left=e.right:Mi()==Rt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;ya()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:t:e=="end"&&(e=a?t:r),a&&Mi()==Rt.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Mi()==Rt.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),H_=20,xn=(()=>{class n{_platform=c(Z);_listeners;_viewportSize=null;_change=new y;_document=c(I);constructor(){let e=c(R),t=c(Ke).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=H_){return e>0?this._change.pipe(ts(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var iR=new p("CDK_VIRTUAL_SCROLL_VIEWPORT");var ql=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({})}return n})(),Zl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[Le,ql,Le,ql]})}return n})();var Ar=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},En=class extends Ar{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Vt=class extends Ar{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Xl=class extends Ar{element;constructor(i){super(),this.element=i instanceof C?i.nativeElement:i}},Ai=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof En)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Vt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Xl)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Da=class extends Ai{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(oo,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||q.NULL,o=r.get(Oe,t.injector);e=mo(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},am=(()=>{class n extends Vt{constructor(){let e=c(ht),t=c(nt);super(e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ue]})}return n})(),Fi=(()=>{class n extends Ai{_moduleRef=c(oo,{optional:!0});_document=c(I);_viewContainerRef=c(nt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new O;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ue]})}return n})(),Kl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({})}return n})();var sm=ya();function pm(n){return new xa(n.get(xn),n.get(I))}var xa=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ke(-this._previousScrollPosition.left),i.style.top=ke(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),sm&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),sm&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function gm(n,i){return new Ea(n.get(Zn),n.get(R),n.get(xn),i)}var Ea=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(ge(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Fr=class{enable(){}disable(){}attach(){}};function Ql(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function lm(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function Or(n,i){return new ka(n.get(Zn),n.get(xn),n.get(R),i)}var ka=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();Ql(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},bm=(()=>{class n{_injector=c(q);constructor(){}noop=()=>new Fr;close=e=>gm(this._injector,e);block=()=>pm(this._injector);reposition=e=>Or(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kn=class{positionStrategy;scrollStrategy=new Fr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Sa=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var _m=(()=>{class n{_attachedOverlays=[];_document=c(I);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vm=(()=>{class n extends _m{_ngZone=c(R);_renderer=c(Ke).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ym=(()=>{class n extends _m{_platform=c(Z);_ngZone=c(R);_renderer=c(Ke).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Qe(e)};_clickListener=e=>{let t=Qe(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(cm(s.overlayElement,t)||cm(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function cm(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var wm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Cm=(()=>{class n{_platform=c(Z);_containerElement;_document=c(I);_styleLoader=c(Me);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Bl()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Bl()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(wm)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jl=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function tc(n){return n&&n.nodeType===1}var Ra=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=Ce.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(i,e,t,r,o,a,s,l,d,u=!1,h,b){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=b,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Se(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=m(m({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ie(m({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ke(this._config.width),i.height=ke(this._config.height),i.minWidth=ke(this._config.minWidth),i.minHeight=ke(this._config.minHeight),i.maxWidth=ke(this._config.maxWidth),i.maxHeight=ke(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;tc(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Jl(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Gn(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Se(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},dm="cdk-overlay-connected-position-bounding-box",G_=/([A-Za-z%]+)$/;function Pr(n,i){return new Ia(i,n.get(xn),n.get(I),n.get(Z),n.get(Cm))}var Ia=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=Ce.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(dm),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,t,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Xn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(dm),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof C?this._origin.nativeElement:tc(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=hm(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,h=a+o.width-t.width,b=0-s,k=s+o.height-t.height,w=this._subtractOverflows(o.width,u,h),H=this._subtractOverflows(o.height,b,k),F=w*H;return{visibleArea:F,isCompletelyWithinViewport:o.width*o.height===F,fitsInViewportVertically:H===o.height,fitsInViewportHorizontally:w==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=um(this._overlayRef.getConfig().minHeight),s=um(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=hm(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-t.top-i.y,0),d=Math.max(o.left-t.left-i.x,0),u=0,h=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?h=l||-s:h=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:u,y:h},{x:i.x+u,y:i.y+h}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!W_(this._lastScrollVisibility,t)){let r=new Sa(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let k=Math.min(t.bottom-i.y+t.top,i.y),w=this._lastBoundingBoxSize.height;o=k*2,a=i.y-k,o>w&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-w/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,h,b;if(d)b=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)h=i.x,u=t.right-i.x-this._getViewportMarginEnd();else{let k=Math.min(t.right-i.x+t.left,i.x),w=this._lastBoundingBoxSize.width;u=k*2,h=i.x-k,u>w&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-w/2)}return{top:a,left:h,bottom:s,right:b,width:u,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ke(t.width),r.height=ke(t.height),r.top=ke(t.top)||"auto",r.bottom=ke(t.bottom)||"auto",r.left=ke(t.left)||"auto",r.right=ke(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ke(o)),a&&(r.maxWidth=ke(a))}this._lastBoundingBoxSize=t,Xn(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Xn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Xn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Xn(t,this._getExactOverlayY(e,i,u)),Xn(t,this._getExactOverlayX(e,i,u))}else t.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=ke(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=ke(a.maxWidth):o&&(t.maxWidth="")),Xn(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ke(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ke(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:lm(i,t),isOriginOutsideView:Ql(i,t),isOverlayClipped:lm(e,t),isOverlayOutsideView:Ql(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Gn(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof C)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Xn(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function um(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(G_);return!e||e==="px"?parseFloat(i):null}return n||null}function hm(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function W_(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var mm="cdk-global-overlay-wrapper";function Ta(n){return new Ma}var Ma=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(mm),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,h=this._xOffset,b=this._overlayRef.getConfig().direction==="rtl",k="",w="",H="";l?H="flex-start":u==="center"?(H="center",b?w=h:k=h):b?u==="left"||u==="end"?(H="flex-end",k=h):(u==="right"||u==="start")&&(H="flex-start",w=h):u==="left"||u==="start"?(H="flex-start",k=h):(u==="right"||u==="end")&&(H="flex-end",w=h),i.position=this._cssPosition,i.marginLeft=l?"0":k,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":w,e.justifyContent=H,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(mm),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Dm=(()=>{class n{_injector=c(q);constructor(){}global(){return Ta()}flexibleConnectedTo(e){return Pr(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nc=new p("OVERLAY_DEFAULT_CONFIG");function Qn(n,i){n.get(Me).load(wm);let e=n.get(Cm),t=n.get(I),r=n.get(Fe),o=n.get(Gt),a=n.get(ut),s=n.get(be,null,{optional:!0})||n.get(Ke).createRenderer(null,null),l=new Kn(i),d=n.get(nc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in t.body?l.usePopover=i?.usePopover??d:l.usePopover=!1;let u=t.createElement("div"),h=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),l.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let b=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return tc(b)?b.after(h):b?.type==="parent"?b.element.appendChild(h):e.getContainerElement().appendChild(h),new Ra(new Da(u,o,n),h,u,l,n.get(R),n.get(vm),t,n.get(Pt),n.get(ym),i?.disableAnimations??n.get(to,null,{optional:!0})==="NoopAnimations",n.get(Oe),s)}var xm=(()=>{class n{scrollStrategies=c(bm);_positionBuilder=c(Dm);_injector=c(q);constructor(){}create(e){return Qn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),q_=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Y_=new p("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(q);return()=>Or(n)}}),ec=(()=>{class n{elementRef=c(C);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Em=new p("cdk-connected-overlay-default-config"),Z_=(()=>{class n{_dir=c(ut,{optional:!0});_injector=c(q);_overlayRef;_templatePortal;_backdropSubscription=Ce.EMPTY;_attachSubscription=Ce.EMPTY;_detachSubscription=Ce.EMPTY;_positionSubscription=Ce.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(Y_);_ngZone=c(R);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new O;positionChange=new O;attach=new O;detach=new O;overlayKeydown=new O;overlayOutsideClick=new O;constructor(){let e=c(ht),t=c(nt),r=c(Em,{optional:!0}),o=c(nc,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Vt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=q_);let e=this._overlayRef=Qn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Cn(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Qe(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Kn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Pr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ec?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ec?this.origin.elementRef.nativeElement:this.origin instanceof C?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Gc(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",x],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",x],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",x],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",x],push:[2,"cdkConnectedOverlayPush","push",x],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",x],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",x],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[de]})}return n})(),km=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({providers:[xm],imports:[Le,Kl,Zl,Zl]})}return n})();var X_=["tooltip"],K_=20;var Q_=new p("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(q);return()=>Or(n,{scrollThrottle:K_})}}),J_=new p("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Sm="tooltip-panel",ev={passive:!0},tv=8,nv=8,iv=24,rv=200,ic=(()=>{class n{_elementRef=c(C);_ngZone=c(R);_platform=c(Z);_ariaDescriber=c(Hh);_focusMonitor=c(en);_dir=c(ut);_injector=c(q);_viewContainerRef=c(nt);_mediaMatcher=c(Ri);_document=c(I);_renderer=c(be);_animationsDisabled=De();_defaultOptions=c(J_,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Rm;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=yt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=yt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=yn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=yn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=tv}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ce(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new En(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ce(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof C)return this._overlayRef;this._detach()}let t=this._injector.get(Zn).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Sm}`,o=Pr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(ce(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Qn(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Q_)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ce(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ce(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ce(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ce(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(m(m({},r.main),o.main)),this._addOffset(m(m({},r.fallback),o.fallback))])}_addOffset(e){let t=nv,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Se(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=t==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${Sm}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,ev))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Se({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Cn(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&L("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Rm=(()=>{class n{_changeDetectorRef=c(we);_elementRef=c(C);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=De();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>iv&&e.width>=rv}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&Ee(X_,7),t&2){let o;N(o=B())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&X("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(hn(0,"div",1,0),md("animationend",function(a){return r._handleAnimationEnd(a)}),hn(2,"div",2),ve(3),Pn()()),t&2&&(Pe(r.tooltipClass),L("mdc-tooltip--multiline",r._isMultiline),D(3),mn(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();function Im(n){return Error(`Unable to find icon with the name "${n}"`)}function ov(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Mm(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Tm(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var tn=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Fm=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new tn(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(Xe.HTML,r);if(!a)throw Tm(r);let s=Hn(a);return this._addSvgIconConfig(e,t,new tn("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new tn(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(Xe.HTML,t);if(!o)throw Tm(t);let a=Hn(o);return this._addSvgIconSetConfig(e,new tn("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Xe.RESOURCE_URL,e);if(!t)throw Mm(e);let r=this._cachedIconsByUrl.get(t);return r?S(Aa(r)):this._loadSvgIconFromConfig(new tn(e,null)).pipe(je(o=>this._cachedIconsByUrl.set(t,o)),j(o=>Aa(o)))}getNamedSvgIcon(e,t=""){let r=Am(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Zr(Im(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?S(Aa(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(j(t=>Aa(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return S(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ei(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Xe.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),S(null)})));return Jr(o).pipe(j(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Im(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(je(t=>e.svgText=t),j(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?S(null):this._fetchIcon(e).pipe(je(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Hn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Hn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ov();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(Xe.RESOURCE_URL,t);if(!a)throw Mm(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(j(d=>Hn(d)),ti(()=>this._inProgressUrlFetches.delete(a)),Hc());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Am(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return av(o)?new tn(o.url,null,o.options):new tn(o,null)}}static \u0275fac=function(t){return new(t||n)(E(fn,8),E(sr),E(I,8),E(Tn))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Aa(n){return n.cloneNode(!0)}function Am(n,i){return n+":"+i}function av(n){return!!(n.url&&n.options)}var sv=["*"],lv=new p("MAT_ICON_DEFAULT_OPTIONS"),cv=new p("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(I),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Om=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],dv=Om.map(n=>`[${n}]`).join(", "),uv=/^url\(['"]?#(.*?)['"]?\)$/,Fa=(()=>{class n{_elementRef=c(C);_iconRegistry=c(Fm);_location=c(cv);_errorHandler=c(Tn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ce.EMPTY;constructor(){let e=c(new Zt("aria-hidden"),{optional:!0}),t=c(lv,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(dv),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Om.forEach(a=>{let s=t[o],l=s.getAttribute(a),d=l?l.match(uv):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ft(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(G("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Pe(r.color?"mat-"+r.color:""),L("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",x],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:sv,decls:1,vars:0,template:function(t,r){t&1&&(ye(),J(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Pm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[Le]})}return n})();var Lm=(()=>{class n{constructor(e){this.router=e,this._breadcrumbs$=new Ne([]),this.breadcrumbs$=this._breadcrumbs$.asObservable(),this.router.events.pipe(ge(t=>t instanceof at)).subscribe(()=>{this.buildBreadcrumbs()}),this.buildBreadcrumbs()}buildBreadcrumbs(){let e=this.router.routerState.snapshot.root,t=[];this.addBreadcrumb(e,[],t),this._breadcrumbs$.next(t)}addBreadcrumb(e,t,r){if(e){let o=t.concat(e.url.map(a=>a.path));if(e.url.length>0){let a=e.url[0].path,s=a.charAt(0).toUpperCase()+a.slice(1);a==="analysis-group"&&(s="Analysis Group"),a==="search-session"&&(s="Search Session");let l="/"+o.join("/");r.push({label:s,url:l})}e.firstChild&&this.addBreadcrumb(e.firstChild,o,r)}}static{this.\u0275fac=function(t){return new(t||n)(E(vt))}}static{this.\u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function fv(n,i){if(n&1&&(g(0,"a",6),ve(1),v()),n&2){let e=pe().$implicit;te("routerLink",e.url),D(),ci(" ",e.label," ")}}function pv(n,i){if(n&1&&(g(0,"span",7),ve(1),v()),n&2){let e=pe().$implicit;D(),ci(" ",e.label," ")}}function gv(n,i){if(n&1&&(g(0,"li",2)(1,"mat-icon",5),ve(2,"chevron_right"),v(),me(3,fv,2,2,"a",6),me(4,pv,2,1,"span",7),v()),n&2){let e=i.$index,t=i.$count;D(3),fe(e!==t-1?3:-1),D(),fe(e===t-1?4:-1)}}function bv(n,i){if(n&1&&(g(0,"nav",0)(1,"ol",1)(2,"li",2)(3,"a",3)(4,"mat-icon",4),ve(5,"home"),v()()(),Gi(6,gv,5,2,"li",2,Hi),hs(8,"async"),v()()),n&2){let e=pe();D(6),Wi(ms(8,0,e.breadcrumbService.breadcrumbs$))}}var HI=(()=>{class n{constructor(e){this.breadcrumbService=e}static{this.\u0275fac=function(t){return new(t||n)(M(Lm))}}static{this.\u0275cmp=P({type:n,selectors:[["app-breadcrumb"]],decls:2,vars:3,consts:[["aria-label","Breadcrumb",1,"breadcrumb-nav"],[1,"breadcrumb-list"],[1,"breadcrumb-item"],["routerLink","/home",1,"breadcrumb-link"],[1,"home-icon"],[1,"separator"],[1,"breadcrumb-link",3,"routerLink"],["aria-current","page",1,"breadcrumb-current"]],template:function(t,r){if(t&1&&(me(0,bv,9,2,"nav",0),hs(1,"async")),t&2){let o;fe((o=ms(1,1,r.breadcrumbService.breadcrumbs$))!=null&&o.length?0:-1)}},dependencies:[di,El,da,Pm,Fa,Is],styles:[".breadcrumb-nav[_ngcontent-%COMP%]{padding:16px 50px;background-color:transparent}.breadcrumb-list[_ngcontent-%COMP%]{display:flex;list-style:none;margin:0;padding:0;align-items:center;flex-wrap:wrap}.breadcrumb-item[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px;color:var(--app-text-secondary)}.breadcrumb-link[_ngcontent-%COMP%]{color:var(--app-primary-color);text-decoration:none;font-weight:500;transition:color .2s}.breadcrumb-link[_ngcontent-%COMP%]:hover{color:var(--app-tertiary-color)}.breadcrumb-current[_ngcontent-%COMP%]{font-weight:500;color:var(--app-text-color)}.separator[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;margin:0 4px;color:var(--app-text-secondary);opacity:.5}.home-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--app-primary-color)}"],changeDetection:0})}}return n})();function _v(n,i){if(n&1){let e=qi();g(0,"div",1)(1,"button",2),X("click",function(){ln(e);let r=pe();return cn(r.action())}),ve(2),v()()}if(n&2){let e=pe();D(2),ci(" ",e.data.action," ")}}var vv=["label"];function yv(n,i){}var wv=Math.pow(2,31)-1,Lr=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,wv))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Nm=new p("MatSnackBarData"),Oi=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Cv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Dv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),xv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Ev=(()=>{class n{snackBarRef=c(Lr);data=c(Nm);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(g(0,"div",0),ve(1),v(),me(2,_v,3,1,"div",1)),t&2&&(D(),ci(" ",r.data.message,`
`),D(),fe(r.hasAction?2:-1))},dependencies:[rm,Cv,Dv,xv],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),rc="_mat-snack-bar-enter",oc="_mat-snack-bar-exit",kv=(()=>{class n extends Ai{_ngZone=c(R);_elementRef=c(C);_changeDetectorRef=c(we);_platform=c(Z);_animationsDisabled=De();snackBarConfig=c(Oi);_document=c(I);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(q);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=c(Fe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===oc?this._completeExit():e===rc&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Se(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(rc)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(rc)},200)))}exit(){return this._destroyed?S(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Se(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(oc)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(oc),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&Ee(Fi,7)(vv,7),t&2){let o;N(o=B())&&(r._portalOutlet=o.first),N(o=B())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&X("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&L("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ue],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(g(0,"div",1)(1,"div",2,0)(3,"div",3),xt(4,yv,0,0,"ng-template",4),v(),Q(5,"div"),v()()),t&2&&(D(5),G("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Fi],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Sv=new p("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Oi}),cM=(()=>{class n{_live=c(Fl);_injector=c(q);_breakpointObserver=c(Sr);_parentSnackBar=c(n,{optional:!0,skipSelf:!0});_defaultConfig=c(Sv);_animationsDisabled=De();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ev;snackBarContainerComponent=kv;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=m(m({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=q.create({parent:r||this._injector,providers:[{provide:Oi,useValue:t}]}),a=new En(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=m(m(m({},new Oi),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Lr(a,o);if(e instanceof ht){let l=new Vt(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),d=new En(e,void 0,l),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(Wh.HandsetPortrait).pipe(ce(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Kn;t.direction=e.direction;let r=Ta(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Qn(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return q.create({parent:r||this._injector,providers:[{provide:Lr,useValue:t},{provide:Nm,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nr={baseURL:"https://cinder.proteo.info",keycloakCallbackUrl:"https://localhost:4200"};var gM=(()=>{class n{constructor(e){this.http=e,this.baseURL=Nr.baseURL,this.collateRedrawSubject=new y}getCollates(e,t,r,o){let a=new re;e&&(a=a.append("limit",e)),t&&(a=a.append("offset",t)),r&&(a=a.append("search",r)),o&&(a=a.append("tag_ids",o.join(",")));let s=localStorage.getItem("cinderUserAccount");if(s){let l=JSON.parse(s);l.currentLabGroup&&(a=a.append("lab_group",l.currentLabGroup.toString())),l.currentUser&&(a=a.append("users",l.currentUser.toString()))}return this.http.get(`${this.baseURL}/api/collates`,{params:a})}getCollate(e){return this.http.get(`${this.baseURL}/api/collates/${e}`)}createCollate(e,t){return this.http.post(`${this.baseURL}/api/collates/`,{title:e,greeting:t})}updateCollate(e,t){return this.http.put(`${this.baseURL}/api/collates/${e}/`,t)}deleteCollate(e){return this.http.delete(`${this.baseURL}/api/collates/${e}/`)}getCollateTags(e,t=10,r=0){let o=new re;return e&&(o=o.append("search",e)),t&&(o=o.append("limit",t)),r&&(o=o.append("offset",r)),this.http.get(`${this.baseURL}/api/collate_tags/`,{params:o})}createCollateTag(e){return this.http.post(`${this.baseURL}/api/collate_tags/`,{name:e})}updateCollateTag(e,t){return this.http.put(`${this.baseURL}/api/collate_tags/${e}/`,{name:t})}deleteCollateTag(e){return this.http.delete(`${this.baseURL}/api/collate_tags/${e}/`)}addTagToCollate(e,t){return this.http.post(`${this.baseURL}/api/collate_tags/${t}/add_to_collate/`,{collate:e})}removeTagFromCollate(e,t){return this.http.post(`${this.baseURL}/api/collate_tags/${t}/remove_from_collate/`,{collate:e})}getCollateTagByID(e){return this.http.get(`${this.baseURL}/api/collate_tags/${e}/`)}static{this.\u0275fac=function(t){return new(t||n)(E(fn))}}static{this.\u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var wM=(()=>{class n{constructor(e){this.http=e,this.cinderInstanceID=crypto.randomUUID(),this.baseURL=Nr.baseURL,this.stringDBCache=new Map,this.keycloakCallbackUrl=Nr.keycloakCallbackUrl,this.searchSessionID=null,this.updateFromLabGroupSelection=new y}uploadDataChunk(e="",t,r,o){let a=new FormData;a.append("file",t),a.append("filename",r);let s=new bt;return s=s.append("Content-Range",o),e!==""?(e.startsWith("http://")&&!e.startsWith("http://localhost")&&(e=e.replace("http://","https://")),this.http.put(e,a,{responseType:"json",observe:"body",headers:s})):this.http.put(`${this.baseURL}/api/chunked_upload/`,a,{responseType:"json",observe:"body",headers:s})}uploadDataChunkComplete(e="",t,r,o){let a=new FormData;return a.append("sha256",t),e.startsWith("http://")&&!e.startsWith("http://localhost")&&(e=e.replace("http://","https://")),r&&o?(a.append("file",r),a.append("filename",o),this.http.post(`${this.baseURL}/api/chunked_upload/`,a,{responseType:"json",observe:"body"})):this.http.post(e,a,{responseType:"json",observe:"body"})}bindUploadedFile(e,t,r,o,a){return this.http.post(`${this.baseURL}/api/project_files/bind_uploaded_file/`,{file_name:o,analysis_group:e,file_type:t,file_category:r,upload_id:a},{responseType:"json",observe:"body"}).pipe(j(s=>(s.extra_data&&(s.extra_data=JSON.parse(s.extra_data)),s)))}processMetadataFile(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/process_uploaded_metadata_file/`,{upload_id:t},{responseType:"json",observe:"body"})}getProjects(e,t=10,r=0,o,a=null,s=null){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let l=new re;t&&(l=l.append("limit",t.toString())),r&&(l=l.append("offset",r.toString())),o&&o!==""&&(l=l.append("search",o)),a&&(l=l.append("species",a.id.toString()));let d=localStorage.getItem("cinderUserAccount");if(d){let u=JSON.parse(d);u.currentLabGroup?l=l.append("lab_group",u.currentLabGroup.toString()):s&&(l=l.append("lab_group",s.toString())),u.currentUser&&(l=l.append("users",u.currentUser.toString()))}return l=l.append("ordering","-created_at"),this.http.get(`${this.baseURL}/api/projects/`,{responseType:"json",observe:"body",params:l})}updateProject(e,t,r,o=null){return this.http.put(`${this.baseURL}/api/projects/${e}/`,{name:t,description:r,species:o},{responseType:"json",observe:"body"})}deleteProject(e){return this.http.delete(`${this.baseURL}/api/projects/${e}/`,{responseType:"json",observe:"body"})}createProject(e,t){return this.http.post(`${this.baseURL}/api/projects/`,{name:e,description:t},{responseType:"json",observe:"body"})}getAnalysisGroups(e,t=10,r=0,o,a,s){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let l=new re;t&&(l=l.append("limit",t.toString())),r&&(l=l.append("offset",r.toString())),o&&o!==""&&(l=l.append("search",o)),a&&(l=l.append("project",a.toString()));let d=localStorage.getItem("cinderUserAccount");if(d){let u=JSON.parse(d);u.currentLabGroup?l=l.append("lab_group",u.currentLabGroup.toString()):s&&(l=l.append("lab_group",s.toString())),u.currentUser&&(l=l.append("users",u.currentUser.toString()))}return l=l.append("ordering","-created_at"),this.http.get(`${this.baseURL}/api/analysis_groups/`,{responseType:"json",observe:"body",params:l})}createAnalysisGroup(e,t,r,o){return this.http.post(`${this.baseURL}/api/analysis_groups/`,{name:e,description:t,project:r,analysis_group_type:o},{responseType:"json",observe:"body"})}getProject(e){return this.http.get(`${this.baseURL}/api/projects/${e}/`,{responseType:"json",observe:"body"})}getAnalysisGroup(e){return this.http.get(`${this.baseURL}/api/analysis_groups/${e}/`,{responseType:"json",observe:"body"})}updateAnalysisGroup(e,t,r,o=null,a){let s={name:t,description:r};return o&&(s.curtain_link=o),a&&(s.session_id=a),this.http.put(`${this.baseURL}/api/analysis_groups/${e}/`,s,{responseType:"json",observe:"body"})}refreshCurtainLink(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/refresh_curtain_data/`,{session_id:t},{responseType:"json",observe:"body"})}getCurtainLinkData(e){return this.http.get(`${this.baseURL}/api/analysis_groups/${e}/get_curtain_data/`,{responseType:"json",observe:"body"})}getAnalysisGroupFiles(e){return this.http.get(`${this.baseURL}/api/analysis_groups/${e}/files/`,{responseType:"json",observe:"body"}).pipe(j(t=>t.map(r=>(r.extra_data&&(r.extra_data=JSON.parse(r.extra_data)),r))))}getProjectFileColumns(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/get_columns/`,{responseType:"json",observe:"body"})}createSampleAnnotation(e,t,r,o){return this.http.post(`${this.baseURL}/api/sample_annotations/`,{analysis_group:e,name:t,annotations:r,file:o}).pipe(j(a=>(a.annotations=JSON.parse(a.annotations),a)))}getSampleAnnotation(e){return this.http.get(`${this.baseURL}/api/sample_annotations/${e}/`,{responseType:"json",observe:"body"}).pipe(j(t=>(t.annotations=JSON.parse(t.annotations),t)))}updateSampleAnnotation(e,t,r){return this.http.put(`${this.baseURL}/api/sample_annotations/${e}/`,{name:t,annotations:r},{responseType:"json",observe:"body"}).pipe(j(o=>(o.annotations=JSON.parse(o.annotations),o)))}getProjectFileSampleAnnotations(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/sample_annotations/`,{responseType:"json",observe:"body"}).pipe(j(t=>(t.annotations=JSON.parse(t.annotations),t)))}createComparisonMatrix(e,t,r,o){return this.http.post(`${this.baseURL}/api/comparison_matrices/`,{name:t,matrix:r,analysis_group:e,file:o},{responseType:"json",observe:"body"}).pipe(j(a=>(a.matrix=JSON.parse(a.matrix),a)))}updateComparisonMatrix(e,t,r){return this.http.put(`${this.baseURL}/api/comparison_matrices/${e}/`,{name:t,matrix:r},{responseType:"json",observe:"body"}).pipe(j(o=>(o.matrix=JSON.parse(o.matrix),o)))}getProjectFileComparisonMatrix(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/comparison_matrices/`,{responseType:"json",observe:"body"}).pipe(j(t=>(t.matrix=JSON.parse(t.matrix),t)))}deleteAnalysisGroup(e){return this.http.delete(`${this.baseURL}/api/analysis_groups/${e}/`,{responseType:"json",observe:"body"})}createSearch(e,t,r=null,o=.6,a=1.31,s="full",l=void 0){let d={analysis_groups:e,search_term:t};return r&&(d.session_id=r),o&&(d.fc_cutoff=o),a&&(d.p_value_cutoff=a),s&&(d.search_mode=s),l&&(d.species=l.id),this.http.post(`${this.baseURL}/api/search/`,d,{responseType:"json",observe:"body"})}getSearchSessionID(){return this.http.get(`${this.baseURL}/api/search/session_id/`,{responseType:"json",observe:"body"})}getSearchSession(e){return this.http.get(`${this.baseURL}/api/search/${e}/`,{responseType:"json",observe:"body"})}getSearchSessions(e,t=10,r=0,o,a=!1,s=null){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let l=new re;return t&&(l=l.append("limit",t.toString())),r&&(l=l.append("offset",r.toString())),o&&o!==""&&(l=l.append("search",o)),a&&(l=l.append("user_owned_only","true")),s&&(l=l.append("session_id",s)),l=l.append("ordering","-created_at"),this.http.get(`${this.baseURL}/api/search/`,{responseType:"json",observe:"body",params:l})}getSearchResults(e,t=10,r=0,o="df",a="",s="desc",l="",d=0,u=0){let h=new re;return t&&(h=h.append("limit",t.toString())),r&&(h=h.append("offset",r.toString())),a&&a!==""&&s&&s!==""&&(s==="asc"?h=h.append("ordering",a):s==="desc"&&(h=h.append("ordering",`-${a}`))),l&&l!==""&&(h=h.append("search",l)),d&&d>0&&(h=h.append("log2_fc",d.toString())),u&&u>0&&(h=h.append("log10_p",u.toString())),h=h.append("file_category",o),h=h.append("search_id",e.toString()),this.http.get(`${this.baseURL}/api/search_results/`,{responseType:"json",observe:"body",params:h})}getSearchResultRelated(e,t="df",r=null){let o=new re;return o=o.append("file_category",t),r&&(o=o.append("primary_id",r)),this.http.get(`${this.baseURL}/api/search_results/${e}/get_related/`,{responseType:"json",observe:"body",params:o})}updateProjectFileExtraData(e,t){return this.http.put(`${this.baseURL}/api/project_files/${e}/`,{extra_data:t},{responseType:"json",observe:"body"}).pipe(j(r=>(r.extra_data&&(r.extra_data=JSON.parse(r.extra_data)),r)))}getProjectCount(e=null){let t=new re,r=localStorage.getItem("cinderUserAccount");if(r){let o=JSON.parse(r);o.currentLabGroup?t=t.append("lab_group",o.currentLabGroup.toString()):e&&(t=t.append("lab_group",e.toString()))}return this.http.get(`${this.baseURL}/api/projects/get_count/`,{responseType:"json",observe:"body",params:t})}getAnalysisGroupCount(e=null){let t=new re,r=localStorage.getItem("cinderUserAccount");if(r){let o=JSON.parse(r);o.currentLabGroup?t=t.append("lab_group",o.currentLabGroup.toString()):e&&(t=t.append("lab_group",e.toString()))}return this.http.get(`${this.baseURL}/api/analysis_groups/get_count/`,{responseType:"json",observe:"body",params:t})}deleteSearchSession(e){return this.http.delete(`${this.baseURL}/api/search/${e}/`,{responseType:"json",observe:"body"})}getAnalysisGroupsFromProjects(e){return this.http.post(`${this.baseURL}/api/search/get_analysis_groups_from_projects/`,{projects:e.map(t=>t.id)})}getSpecies(e,t=10,r=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new re;return t&&(a=a.append("limit",t.toString())),r&&(a=a.append("offset",r.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","official_name"),this.http.get(`${this.baseURL}/api/species/`,{responseType:"json",observe:"body",params:a})}getSpeciesByID(e){return this.http.get(`${this.baseURL}/api/species/${e}/`,{responseType:"json",observe:"body"})}getTissues(e,t=10,r=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new re;return t&&(a=a.append("limit",t.toString())),r&&(a=a.append("offset",r.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","identifier"),this.http.get(`${this.baseURL}/api/tissues/`,{responseType:"json",observe:"body",params:a})}getTissueByID(e){return this.http.get(`${this.baseURL}/api/tissues/${e}/`,{responseType:"json",observe:"body"})}getSubcellularLocations(e,t=10,r=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new re;return t&&(a=a.append("limit",t.toString())),r&&(a=a.append("offset",r.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","identifier"),this.http.get(`${this.baseURL}/api/subcellular_locations/`,{responseType:"json",observe:"body",params:a})}getSubcellularLocationByID(e){return this.http.get(`${this.baseURL}/api/subcellular_locations/${e}/`,{responseType:"json",observe:"body"})}getHumandDiseases(e,t=10,r=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new re;return t&&(a=a.append("limit",t.toString())),r&&(a=a.append("offset",r.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","identifier"),this.http.get(`${this.baseURL}/api/human_diseases/`,{responseType:"json",observe:"body",params:a})}getUniqueComparisonLabel(e,t){return this.http.get(`${this.baseURL}/api/project_files/${e}/get_unique_comparison_label/`,{responseType:"json",observe:"body",params:new re().append("column",t)})}composeAnalysisGroupFilesFromCurtainData(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/compose_files_from_curtain_data/`,{session_id:t},{responseType:"json",observe:"body"})}deleteProjectFile(e){return this.http.delete(`${this.baseURL}/api/project_files/${e}/`,{responseType:"json",observe:"body"})}exportSearchData(e,t,r=0,o=0,a){return this.http.post(`${this.baseURL}/api/search/${e}/export_search_data/`,{search_term:t,log2_fc:r,p_value:o,session_id:a,instance_id:this.cinderInstanceID},{responseType:"json",observe:"body"})}downloadTempFile(e){return this.http.get(`${this.baseURL}/api/search/download_temp_file/`,{responseType:"blob",observe:"body",params:new re().append("token",e)})}getFileDownloadToken(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/request_download_token/`,{responseType:"json",observe:"body"})}getProjectUniqueConditions(e){return this.http.get(`${this.baseURL}/api/projects/${e}/get_unique_conditions/`,{responseType:"json",observe:"body"})}getLabGroups(e="",t=10,r=0){let o=new re;return e&&e!==""&&(o=o.append("search",e)),t&&(o=o.append("limit",t.toString())),r&&(o=o.append("offset",r.toString())),this.http.get(`${this.baseURL}/api/lab_groups/`,{responseType:"json",observe:"body",params:o})}createLabGroup(e){return this.http.post(`${this.baseURL}/api/lab_groups/`,{name:e},{responseType:"json",observe:"body"})}deleteLabGroup(e){return this.http.delete(`${this.baseURL}/api/lab_groups/${e}/`,{responseType:"json",observe:"body"})}addLabGroupMember(e,t){return this.http.post(`${this.baseURL}/api/lab_groups/${e}/add_member/`,{user:t},{responseType:"json",observe:"body"})}removeLabGroupMember(e,t){return this.http.post(`${this.baseURL}/api/lab_groups/${e}/remove_member/`,{user:t},{responseType:"json",observe:"body"})}createUser(e,t,r){return this.http.post(`${this.baseURL}/api/users/`,{username:e,password:t,email:r},{responseType:"json",observe:"body"})}updateUser(e,t,r,o,a,s=null){let l={};return t&&(l.email=t),r&&(l.password=r),o&&(l.last_name=o),a&&(l.first_name=a),s&&(l.username=s),this.http.put(`${this.baseURL}/api/users/${e}/`,l,{responseType:"json",observe:"body"})}removeUser(e){return this.http.delete(`${this.baseURL}/api/users/${e}/`,{responseType:"json",observe:"body"})}getCurrentUser(){return this.http.get(`${this.baseURL}/api/users/get_current_user/`,{responseType:"json",observe:"body"})}getCurrentUserLabGroups(){return this.http.get(`${this.baseURL}/api/users/get_user_lab_group/`,{responseType:"json",observe:"body"})}createUserWithToken(e,t,r,o,a,s,l=null){let d={username:e,token:t,email:r,last_name:o,password:a,first_name:s};return l&&(d.lab_group=l.map(u=>u.id)),this.http.post(`${this.baseURL}/api/users/create_with_token/`,d,{responseType:"json",observe:"body"})}getUser(e){return this.http.get(`${this.baseURL}/api/users/${e}/`,{responseType:"json",observe:"body"})}getUsers(e,t=10,r=0,o=null){let a=new re;return e&&e!==""&&(a=a.append("search",e)),t&&(a=a.append("limit",t.toString())),r&&(a=a.append("offset",r.toString())),o&&o!==0&&(a=a.append("lab_group",o.toString())),this.http.get(`${this.baseURL}/api/users/`,{responseType:"json",observe:"body",params:a})}getFrontEndTemplateData(){return this.http.get(`${this.baseURL}/api/frontend_template/`,{responseType:"json",observe:"body"})}createMetaDataColumn(e,t,r){let o={analysis_group:e};return t&&(o.name=t.metadataName,o.type=t.metadataType,o.value=t.metadataValue),o.name==="Modification parameters"&&(t.metadataMM&&(o.value+=`;MM=${t.metadataMM}`),t.metadataPP&&(o.value+=`;PP=${t.metadataPP}`),t.metadataTA&&(o.value+=`;TA=${t.metadataTA}`),t.metadataTS&&(o.value+=`;TS=${t.metadataTS}`),t.metadataMT&&(o.value+=`;MT=${t.metadataMT}`),t.metadataAC&&(o.value+=`;AC=${t.metadataAC}`)),r&&(o.source_file=r),this.http.post(`${this.baseURL}/api/metadata_columns/`,o,{responseType:"json",observe:"body"})}updateMetaDataColumn(e,t,r,o,a){let s={};return t&&(s.name=t),o&&(s.value=o),r&&(s.type=r),a!==void 0&&(s.not_applicable=a),this.http.put(`${this.baseURL}/api/metadata_columns/${e}/`,s,{responseType:"json",observe:"body"})}deleteMetaDataColumn(e){return this.http.delete(`${this.baseURL}/api/metadata_columns/${e}/`,{responseType:"json",observe:"body"})}createSourceFile(e,t,r){let o={analysis_group:e,name:t};return r&&(o.description=r),this.http.post(`${this.baseURL}/api/source_files/`,o,{responseType:"json",observe:"body"})}deleteSourceFile(e){return this.http.delete(`${this.baseURL}/api/source_files/${e}/`,{responseType:"json",observe:"body"})}reorganizeColumns(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${t}/reorganize_column/`,{positions:e},{responseType:"json",observe:"body"})}getUnimod(e,t=10,r=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new re;return t&&(a=a.append("limit",t.toString())),r&&(a=a.append("offset",r.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","name"),this.http.get(`${this.baseURL}/api/unimod/`,{responseType:"json",observe:"body",params:a})}getMSVocab(e,t=10,r=0,o,a){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let s=new re;return t&&(s=s.append("limit",t.toString())),r&&(s=s.append("offset",r.toString())),o&&o!==""&&(s=s.append("search",`'${o}'`)),a&&a!==""&&(a==="cleavage agent details"&&(a="cleavage agent"),s=s.append("term_type",a)),s=s.append("ordering","name"),this.http.get(`${this.baseURL}/api/ms_vocab/`,{responseType:"json",observe:"body",params:s})}exportSDRFFile(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/export_sdrf/`,{session_id:t},{responseType:"json",observe:"body"})}updateSourceFile(e,t,r){return this.http.put(`${this.baseURL}/api/source_files/${e}/`,{name:t,description:r},{responseType:"json",observe:"body"})}validateSDRFFile(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/validate_sdrf/`,{session_id:t},{responseType:"json",observe:"body"})}bindUploadedMetadataFile(e,t,r,o){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/process_uploaded_metadata_file/`,{upload_id:t,file_type:r,session_id:o},{responseType:"json",observe:"body"})}copyMetadataValueToAllInSamePosition(e,t){let r="false";return t&&(r="true"),this.http.post(`${this.baseURL}/api/metadata_columns/${e}/copy_value_to_all_in_same_position/`,{blank_only:r},{responseType:"json",observe:"body"})}analysisGroupReorderColumns(e){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/reorder_columns/`,{},{responseType:"json",observe:"body"})}getLoginProviderRedirect(){let e=document.createElement("form");e.method="POST",e.action=`${this.baseURL}/_allauth/browser/v1/auth/provider/redirect`;let t=document.createElement("input");t.type="hidden",t.name="provider",t.value="keycloak",e.appendChild(t);let r=document.createElement("input");r.type="hidden",r.name="callback_url",r.value=this.keycloakCallbackUrl,e.appendChild(r);let o=document.createElement("input");o.type="hidden",o.name="process",o.value="login",e.appendChild(o);let a=this.getCSRFTokenFromCookies();if(a){let s=document.createElement("input");s.type="hidden",s.name="csrfmiddlewaretoken",s.value=a,e.appendChild(s)}document.body.appendChild(e),e.submit()}getCSRFTokenFromCookies(){let t=document.cookie.split(";").find(r=>r.trim().startsWith("csrfToken="));return t?t.split("=")[1]:null}getCSRFToken(){return this.http.get(`${this.baseURL}/api/set-csrf/`,{observe:"response"})}getAuthenticationStatus(){return this.http.get(`${this.baseURL}/_allauth/browser/v1/auth/session`,{responseType:"json",observe:"body",withCredentials:!0})}logoutProvider(){let e=new bt;return e=e.append("X-Session-Token",this.getSessionIDFromCookies()||""),e=e.append("X-CSRFToken",this.getCSRFTokenFromCookies()||""),this.http.delete(`${this.baseURL}/_allauth/browser/v1/auth/session`,{headers:e,withCredentials:!0})}userLogoutProvider(){let e=new bt;return e=e.append("X-Session-Token",this.getSessionIDFromCookies()||""),e=e.append("X-CSRFToken",this.getCSRFTokenFromCookies()||""),this.http.post(`${this.baseURL}/api/users/logout_provider/`,{withCredentials:!0,headers:e})}getSessionIDFromCookies(){let t=document.cookie.split(";").find(r=>r.trim().startsWith("sessionid="));return t?t.split("=")[1]:null}getUserTokenThroughSession(){return this.http.get(`${this.baseURL}/api/users/get_token/`,{responseType:"json",observe:"body"})}getUserProfile(){return this.http.get(`${this.baseURL}/api/users/get_profile/`,{responseType:"json",observe:"body"})}getStringDBInteractions(e,t,r=400,o="functional",a=0,s=!0){let l=`${e.sort().join(",")}_${t}_${r}_${o}_${a}`,d=this.stringDBCache.get(l);if(d)return d;let u=new re;u=u.append("identifiers",e.join("%0d")),u=u.append("required_score",r.toString()),u=u.append("species",t),u=u.append("network_type",o),a!==0&&(u=u.append("add_nodes",a.toString())),s&&(u=u.append("show_query_node_labels","1"));let h=this.http.get("https://string-db.org/api/json/network?",{responseType:"json",params:u,observe:"body"}).pipe(Ui(1));return this.stringDBCache.set(l,h),h}clearStringDBCache(){this.stringDBCache.clear()}static{this.\u0275fac=function(t){return new(t||n)(E(fn))}}static{this.\u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var ac=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new et(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ge(e=>e.some(t=>t.target===i)),Ui({bufferSize:1,refCount:!0}),ce(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Oa=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=c(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ac(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var uc=["*"];function Mv(n,i){n&1&&J(0)}var Tv=["tabListContainer"],Av=["tabList"],Fv=["tabListInner"],Ov=["nextPaginator"],Pv=["previousPaginator"],Lv=["content"];function Nv(n,i){}var Bv=["tabBodyWrapper"],jv=["tabHeader"];function Vv(n,i){}function Uv(n,i){if(n&1&&xt(0,Vv,0,0,"ng-template",12),n&2){let e=pe().$implicit;te("cdkPortalOutlet",e.templateLabel)}}function zv(n,i){if(n&1&&ve(0),n&2){let e=pe().$implicit;mn(e.textLabel)}}function $v(n,i){if(n&1){let e=qi();g(0,"div",7,2),X("click",function(){let r=ln(e),o=r.$implicit,a=r.$index,s=pe(),l=mt(1);return cn(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=ln(e).$index,a=pe();return cn(a._tabFocusChanged(r,o))}),Q(2,"span",8)(3,"div",9),g(4,"span",10)(5,"span",11),me(6,Uv,1,1,null,12)(7,zv,1,1),v()()()}if(n&2){let e=i.$implicit,t=i.$index,r=mt(1),o=pe();Pe(e.labelClass),L("mdc-tab--active",o.selectedIndex===t),te("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),G("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),D(3),te("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),D(3),fe(e.templateLabel?6:7)}}function Hv(n,i){n&1&&J(0)}function Gv(n,i){if(n&1){let e=qi();g(0,"mat-tab-body",13),X("_onCentered",function(){ln(e);let r=pe();return cn(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){ln(e);let o=pe();return cn(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){ln(e);let o=pe();return cn(o._bodyCentered(r))}),v()}if(n&2){let e=i.$implicit,t=i.$index,r=pe();Pe(e.bodyClass),te("id",r._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),G("tabindex",r.contentTabIndex!=null&&r.selectedIndex===t?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,t))("aria-hidden",r.selectedIndex!==t)}}var Wv=new p("MatTabContent"),qv=(()=>{class n{template=c(ht);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matTabContent",""]],features:[se([{provide:Wv,useExisting:n}])]})}return n})(),Yv=new p("MatTabLabel"),Um=new p("MAT_TAB"),Zv=(()=>{class n extends am{_closestTab=c(Um,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[se([{provide:Yv,useExisting:n}]),ue]})}return n})(),zm=new p("MAT_TAB_GROUP"),Xv=(()=>{class n{_viewContainerRef=c(nt);_closestTabGroup=c(zm,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new y;position=null;origin=null;isActive=!1;constructor(){c(Me).load(Dn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Vt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-tab"]],contentQueries:function(t,r,o){if(t&1&&qt(o,Zv,5)(o,qv,7,ht),t&2){let a;N(a=B())&&(r.templateLabel=a.first),N(a=B())&&(r._explicitContent=a.first)}},viewQuery:function(t,r){if(t&1&&Ee(ht,7),t&2){let o;N(o=B())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,r){t&2&&G("id",null)},inputs:{disabled:[2,"disabled","disabled",x],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[se([{provide:Um,useExisting:n}]),de],ngContentSelectors:uc,decls:1,vars:0,template:function(t,r){t&1&&(ye(),dd(0,Mv,1,0,"ng-template"))},encapsulation:2})}return n})(),sc="mdc-tab-indicator--active",Bm="mdc-tab-indicator--no-transition",lc=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let r=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},Kv=(()=>{class n{_elementRef=c(C);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(sc);return}let r=t.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;t.classList.add(Bm),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Bm),t.classList.add(sc),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(sc)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",x]}})}return n})();var $m=(()=>{class n extends Kv{elementRef=c(C);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,r){t&2&&(G("aria-disabled",!!r.disabled),L("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",x]},features:[ue]})}return n})(),jm={passive:!0},Qv=650,Jv=100,ey=(()=>{class n{_elementRef=c(C);_changeDetectorRef=c(we);_viewportRuler=c(xn);_dir=c(ut,{optional:!0});_ngZone=c(R);_platform=c(Z);_sharedResizeObserver=c(Oa);_injector=c(q);_renderer=c(be);_animationsDisabled=De();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),jm),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),jm))}ngAfterContentInit(){let e=this._dir?this._dir.change:S("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(an(32),ce(this._destroyed)),r=this._viewportRuler.change(150).pipe(ce(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Rr(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Se(o,{injector:this._injector}),Jn(e,r,t,this._items.changes,this._itemsResized()).pipe(ce(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Ue:this._items.changes.pipe(Dt(this._items),ze(e=>new et(t=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>t.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),ni(1),ge(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Cn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=t.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let d=this.scrollDistance,u=this.scrollDistance+r;s<d?this.scrollDistance-=d-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,r=e-t>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),$c(Qv,Jv).pipe(ce(Jn(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",x],selectedIndex:[2,"selectedIndex","selectedIndex",Ve]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),ty=(()=>{class n extends ey{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new lc(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275cmp=P({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,r,o){if(t&1&&qt(o,$m,4),t&2){let a;N(a=B())&&(r._items=a)}},viewQuery:function(t,r){if(t&1&&Ee(Tv,7)(Av,7)(Fv,7)(Ov,5)(Pv,5),t&2){let o;N(o=B())&&(r._tabListContainer=o.first),N(o=B())&&(r._tabList=o.first),N(o=B())&&(r._tabListInner=o.first),N(o=B())&&(r._nextPaginator=o.first),N(o=B())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,r){t&2&&L("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",x]},features:[ue],ngContentSelectors:uc,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,r){t&1&&(ye(),g(0,"div",5,0),X("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),Q(2,"div",6),v(),g(3,"div",7,1),X("keydown",function(a){return r._handleKeydown(a)}),g(5,"div",8,2),X("cdkObserveContent",function(){return r._onContentChanges()}),g(7,"div",9,3),J(9),v()()(),g(10,"div",10,4),X("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),Q(12,"div",6),v()),t&2&&(L("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),te("matRippleDisabled",r._disableScrollBefore||r.disableRipple),D(3),L("_mat-animation-noopable",r._animationsDisabled),D(2),G("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),D(5),L("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),te("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Yn,Fh],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return n})(),ny=new p("MAT_TABS_CONFIG"),Vm=(()=>{class n extends Fi{_host=c(cc);_ngZone=c(R);_centeringSub=Ce.EMPTY;_leavingSub=Ce.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Dt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matTabBodyHost",""]],features:[ue]})}return n})(),cc=(()=>{class n{_elementRef=c(C);_dir=c(ut,{optional:!0});_ngZone=c(R);_injector=c(q);_renderer=c(be);_diAnimationsDisabled=De();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Ce.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(we);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Se(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Se(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,r){if(t&1&&Ee(Vm,5)(Lv,5),t&2){let o;N(o=B())&&(r._portalHost=o.first),N(o=B())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,r){t&2&&G("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,r){t&1&&(g(0,"div",1,0),xt(2,Nv,0,0,"ng-template",2),v()),t&2&&L("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[Vm,Yl],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return n})(),nT=(()=>{class n{_elementRef=c(C);_changeDetectorRef=c(we);_ngZone=c(R);_tabsSubscription=Ce.EMPTY;_tabLabelSubscription=Ce.EMPTY;_tabBodySubscription=Ce.EMPTY;_diAnimationsDisabled=De();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new $i;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!c(Z).isBrowser;constructor(){let e=c(ny,{optional:!0});this._groupId=c(Fe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,r)=>{t.position=r-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),r;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=t[o];break}!r&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Dt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new dc;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Jn(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,r){t.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,r)=>t._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,r,o){if(t&1&&qt(o,Xv,5),t&2){let a;N(a=B())&&(r._allTabs=a)}},viewQuery:function(t,r){if(t&1&&Ee(Bv,5)(jv,5)(cc,5),t&2){let o;N(o=B())&&(r._tabBodyWrapper=o.first),N(o=B())&&(r._tabHeader=o.first),N(o=B())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,r){t&2&&(G("mat-align-tabs",r.alignTabs),Pe("mat-"+(r.color||"primary")),Yt("--mat-tab-animation-duration",r.animationDuration),L("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",x],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",x],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",x],selectedIndex:[2,"selectedIndex","selectedIndex",Ve],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ve],disablePagination:[2,"disablePagination","disablePagination",x],disableRipple:[2,"disableRipple","disableRipple",x],preserveContent:[2,"preserveContent","preserveContent",x],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[se([{provide:zm,useExisting:n}])],ngContentSelectors:uc,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,r){t&1&&(ye(),g(0,"mat-tab-header",3,0),X("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),Gi(2,$v,8,17,"div",4,Hi),v(),me(4,Hv,1,0),g(5,"div",5,1),Gi(7,Gv,1,10,"mat-tab-body",6,Hi),v()),t&2&&(te("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),hd("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),D(2),Wi(r._tabs),D(2),fe(r._isServer?4:-1),D(),L("_mat-animation-noopable",r._animationsDisabled()),D(2),Wi(r._tabs))},dependencies:[ty,$m,Ml,Yn,Fi,cc],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return n})(),dc=class{index;tab};var iy=["plot"],ry=["*"],It=class n{static{this.instances=[]}static{this.plotly=void 0}static{this.moduleName=void 0}static setModuleName(i){n.moduleName=i}static getModuleName(){return n.moduleName}static setPlotly(i){if(typeof i=="object"&&typeof i.react!="function")throw new Error("Invalid plotly.js version. Please, use any version above 1.40.0");n.moduleName="PlotlyJS",n.plotly=i}static insert(i){return n.instances.indexOf(i)===-1&&n.instances.push(i),i}static remove(i){let e=n.instances.indexOf(i);e>=0&&(n.instances.splice(e,1),n.plotly.purge(i))}getInstanceByDivId(i){for(let e of n.instances)if(e&&e.id===i)return e}getPlotly(){return le(this,null,function*(){return yield this.waitFor(()=>this._getPlotly()!=="waiting"),this._getPlotly()})}_getPlotly(){if(typeof n.plotly>"u"){let i=n.moduleName==="ViaCDN"?"Error loading Peer dependency plotly.js from CDN url":"Peer dependency plotly.js isn't installed";throw new Error(i)}return n.plotly}waitFor(i){return new Promise(e=>{let t=()=>{i()?e():setTimeout(t,10)};t()})}newPlot(i,e,t,r,o){return le(this,null,function*(){if(yield this.waitFor(()=>this._getPlotly()!=="waiting"),o){let a={data:e,layout:t,config:r,frames:o};return this._getPlotly().newPlot(i,a).then(()=>n.insert(i))}return this._getPlotly().newPlot(i,e,t,r).then(()=>n.insert(i))})}plot(i,e,t,r,o){if(o){let a={data:e,layout:t,config:r,frames:o};return this._getPlotly().newPlot(i,a)}return this._getPlotly().newPlot(i,e,t,r)}update(i,e,t,r,o){if(o){let a={data:e,layout:t,config:r,frames:o};return this._getPlotly().react(i,a)}return this._getPlotly().react(i,e,t,r)}resize(i){return this._getPlotly().Plots.resize(i)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}},hc=(()=>{class n{constructor(e,t,r){this.plotly=e,this.iterableDiffers=t,this.keyValueDiffers=r,this.defaultClassName="js-plotly-plot",this.data=He(),this.layout=He(),this.config=He(),this.frames=He(),this.style=He(),this.divId=He(),this.revision=He(0),this.className=He(),this.debug=He(!1),this.useResizeHandler=He(!1),this.updateOnLayoutChange=He(!0),this.updateOnDataChange=He(!0),this.updateOnlyWithRevision=He(!1),this.initialized=Y(),this.update=Y(),this.purge=Y(),this.error=Y(),this.afterExport=Y(),this.afterPlot=Y(),this.animated=Y(),this.animatingFrame=Y(),this.animationInterrupted=Y(),this.autoSize=Y(),this.beforeExport=Y(),this.beforeHover=Y(),this.buttonClicked=Y(),this.click=Y(),this.plotlyClick=Y(),this.clickAnnotation=Y(),this.deselect=Y(),this.doubleClick=Y(),this.framework=Y(),this.hover=Y(),this.legendClick=Y(),this.legendDoubleClick=Y(),this.react=Y(),this.relayout=Y(),this.relayouting=Y(),this.restyle=Y(),this.redraw=Y(),this.selected=Y(),this.selecting=Y(),this.sliderChange=Y(),this.sliderEnd=Y(),this.sliderStart=Y(),this.sunburstclick=Y(),this.transitioning=Y(),this.transitionInterrupted=Y(),this.unhover=Y(),this.treemapclick=Y(),this.webglcontextlost=Y(),this.eventNames=["afterExport","afterPlot","animated","animatingFrame","animationInterrupted","autoSize","beforeExport","beforeHover","buttonClicked","clickAnnotation","deselect","doubleClick","framework","hover","legendClick","legendDoubleClick","react","relayout","relayouting","restyle","redraw","selected","selecting","sliderChange","sliderEnd","sliderStart","sunburstclick","transitioning","transitionInterrupted","unhover","treemapclick","webglcontextlost"]}ngOnInit(){this.createPlot().then(()=>{let e=this.createFigure();this.initialized.emit(e)})}ngOnDestroy(){if(typeof this.resizeHandler=="function"&&(this.getWindow().removeEventListener("resize",this.resizeHandler),this.resizeHandler=void 0),this.plotlyInstance){let e=this.createFigure();this.purge.emit(e),It.remove(this.plotlyInstance)}}ngOnChanges(e){let t=!1,r=e.revision;r&&!r.isFirstChange()&&(t=!0);let o=e.debug;o&&!o.isFirstChange()&&(t=!0),t&&this.updatePlot(),this.updateWindowResizeHandler()}ngDoCheck(){if(this.updateOnlyWithRevision())return!1;let e=!1;this.updateOnLayoutChange()&&(this.layoutDiffer?this.layoutDiffer.diff(this.layout())&&(e=!0):this.layout()?this.layoutDiffer=this.keyValueDiffers.find(this.layout()).create():this.layoutDiffer=void 0),this.updateOnDataChange()&&(this.dataDiffer?this.dataDiffer.diff(this.data())&&(e=!0):Array.isArray(this.data())?this.dataDiffer=this.iterableDiffers.find(this.data()).create(this.dataDifferTrackBy):this.dataDiffer=void 0),e&&this.plotlyInstance&&this.updatePlot()}getData(){return this.data()??[]}getWindow(){return window}getClassName(){let e=[this.defaultClassName],t=this.className();return Array.isArray(t)?e=e.concat(t):t&&e.push(t),e.join(" ")}createPlot(){return this.plotly.newPlot(this.plotEl.nativeElement,this.getData(),this.layout(),this.config(),this.frames()).then(e=>{this.plotlyInstance=e,this.getWindow().gd=this.debug?e:void 0,this.eventNames.forEach(t=>{let r=`plotly_${t.toLowerCase()}`,o=this[t];e.on(r,a=>o.emit(a))}),e.on("plotly_click",t=>{this.plotlyClick.emit(t)}),this.updateWindowResizeHandler()},e=>{console.error("Error while plotting:",e),this.error.emit(e)})}createFigure(){let e=this.plotlyInstance;return{data:e.data,layout:e.layout,frames:e._transitionData?e._transitionData._frames:null}}updatePlot(){if(!this.plotlyInstance){let t=new Error("Plotly component wasn't initialized");throw this.error.emit(t),t}let e=m({},this.layout());return this.plotly.update(this.plotlyInstance,this.getData(),e,this.config(),this.frames()).then(()=>{let t=this.createFigure();this.update.emit(t)},t=>{console.error("Error while updating plot:",t),this.error.emit(t)})}updateWindowResizeHandler(){this.useResizeHandler()?this.resizeHandler===void 0&&(this.resizeHandler=()=>this.plotly.resize(this.plotlyInstance),this.getWindow().addEventListener("resize",this.resizeHandler)):typeof this.resizeHandler=="function"&&(this.getWindow().removeEventListener("resize",this.resizeHandler),this.resizeHandler=void 0)}dataDifferTrackBy(e,t){let r=Object.assign({},t,{uid:""});return JSON.stringify(r)}static{this.\u0275fac=function(t){return new(t||n)(M(It),M(uo),M(ho))}}static{this.\u0275cmp=P({type:n,selectors:[["plotly-plot"]],viewQuery:function(t,r){if(t&1&&Ee(iy,7),t&2){let o;N(o=B())&&(r.plotEl=o.first)}},inputs:{data:[1,"data"],layout:[1,"layout"],config:[1,"config"],frames:[1,"frames"],style:[1,"style"],divId:[1,"divId"],revision:[1,"revision"],className:[1,"className"],debug:[1,"debug"],useResizeHandler:[1,"useResizeHandler"],updateOnLayoutChange:[1,"updateOnLayoutChange"],updateOnDataChange:[1,"updateOnDataChange"],updateOnlyWithRevision:[1,"updateOnlyWithRevision"]},outputs:{initialized:"initialized",update:"update",purge:"purge",error:"error",afterExport:"afterExport",afterPlot:"afterPlot",animated:"animated",animatingFrame:"animatingFrame",animationInterrupted:"animationInterrupted",autoSize:"autoSize",beforeExport:"beforeExport",beforeHover:"beforeHover",buttonClicked:"buttonClicked",click:"click",plotlyClick:"plotlyClick",clickAnnotation:"clickAnnotation",deselect:"deselect",doubleClick:"doubleClick",framework:"framework",hover:"hover",legendClick:"legendClick",legendDoubleClick:"legendDoubleClick",react:"react",relayout:"relayout",relayouting:"relayouting",restyle:"restyle",redraw:"redraw",selected:"selected",selecting:"selecting",sliderChange:"sliderChange",sliderEnd:"sliderEnd",sliderStart:"sliderStart",sunburstclick:"sunburstclick",transitioning:"transitioning",transitionInterrupted:"transitionInterrupted",unhover:"unhover",treemapclick:"treemapclick",webglcontextlost:"webglcontextlost"},features:[se([It]),de],ngContentSelectors:ry,decls:3,vars:3,consts:[["plot",""],[3,"ngClass","ngStyle"]],template:function(t,r){t&1&&(ye(),g(0,"div",1,0),J(2),v()),t&2&&(te("ngClass",r.getClassName())("ngStyle",r.style()),G("id",r.divId()))},dependencies:[di,ks,Ss],encapsulation:2})}}return n})(),Hm=(()=>{class n{constructor(){if(!this.isValid()){let e="Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start to see how to add PlotlyJS to your project.";throw new Error(e)}}isValid(){return It.plotly!==void 0&&(typeof It.plotly.plot=="function"||typeof It.plotly.newPlot=="function")}static forRoot(e){return It.setPlotly(e),{ngModule:n,providers:[It]}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=U({type:n})}static{this.\u0275inj=V({providers:[It],imports:[hc]})}}return n})();var ay=["*",[["mat-toolbar-row"]]],sy=["*","mat-toolbar-row"],ly=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Gm=(()=>{class n{_elementRef=c(C);_platform=c(Z);_document=c(I);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&qt(o,ly,5),t&2){let a;N(a=B())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(Pe(r.color?"mat-"+r.color:""),L("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:sy,decls:2,vars:0,template:function(t,r){t&1&&(ye(ay),J(0),J(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var wT=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[Le]})}return n})();function cy(n,i){n&1&&(g(0,"div",5)(1,"div",8),ve(2,"Legend"),v(),g(3,"div",9),Q(4,"span",10),g(5,"span"),ve(6,"Project boundary"),v()(),g(7,"div",9),Q(8,"span",11),g(9,"span"),ve(10,"Comparison group"),v()(),g(11,"div",9),Q(12,"span",12),g(13,"span"),ve(14,"Comparison separator"),v()(),g(15,"div",9),Q(16,"span",13),g(17,"span"),ve(18,"Selected protein"),v()(),g(19,"div",9),Q(20,"span",14),g(21,"span"),ve(22,"Hover highlight"),v()(),g(23,"div",9),Q(24,"span",15),g(25,"span"),ve(26,"Log2FC (Viridis)"),v()()())}var FT=(()=>{class n{constructor(){this._data=[],this._highlightedProtein=null,this._selectedProteinIds=new Set,this.currentHoverTarget=new O,this.proteinClicked=new O,this.layout={},this.graphData=[],this.revision=0,this.showLegend=!1,this.allProteins=[],this.columnShapeByColIdx={},this.projectShapeByColIdx={},this.dataByColProtein={},this.proteinsByColIdx={},this.plotConfig={responsive:!0,scrollZoom:!1,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","zoomIn2d","zoomOut2d","autoScale2d","resetScale2d","pan2d","select2d","lasso2d"],displaylogo:!1}}set data(e){this._data=e??[],this.drawHeatmap()}set highlightedProtein(e){this._highlightedProtein=e,this.highlightProteinColumns(e)}set selectedProteinIds(e){this._selectedProteinIds=e??new Set,this._data.length&&this.drawHeatmap()}get data(){return this._data}get highlightedProtein(){return this._highlightedProtein}drawHeatmap(){if(!this._data.length)return;this.columnShapeByColIdx={},this.projectShapeByColIdx={},this.dataByColProtein={},this.proteinsByColIdx={};let e=this._data[0].searchTerm,t={};for(let z of this._data)(t[z.project]??=[]).push(z);for(let z in t)t[z].sort((xe,Ye)=>{let zt=(xe.comparison??"").localeCompare(Ye.comparison??"");return zt!==0?zt:(xe.protein??"").localeCompare(Ye.protein??"")});let r=new Map,o=[],a=[],s=[],l=0;for(let z in t){let xe=t[z],Ye=[],zt=new Set,qr=new Map;for(let Sn of xe){let $t=`${Sn.analysis_group}||${Sn.conditionA}||${Sn.conditionB}`;zt.has($t)||(zt.add($t),Ye.push($t)),qr.has($t)||qr.set($t,Sn)}let Lc=Ye.length,Nc={type:"rect",x0:l-.5,x1:l+Lc-.5,y0:0,y1:1,xref:"x",yref:"paper",line:{color:"#e53e3e",width:3},fillcolor:"rgba(0,0,0,0)"};o.push(Nc);let Bc="";Ye.forEach((Sn,$t)=>{let Yr=qr.get(Sn),Ht=l+$t;r.set(`${z}||${Sn}`,Ht),a.push(Ht),s.push(Yr.comparison!==Bc?Yr.comparison??"":""),$t>0&&qr.get(Ye[$t-1]).comparison!==Yr.comparison&&o.push({type:"line",x0:Ht-.5,x1:Ht-.5,y0:0,y1:1,xref:"x",yref:"paper",line:{color:"rgba(186,104,166,0.8)",width:2}});let jc={type:"rect",x0:Ht-.5,x1:Ht+.5,y0:0,y1:1,xref:"x",yref:"paper",line:{color:"rgba(0,0,0,0)",width:2},fillcolor:"rgba(0,0,0,0)"};o.push(jc),this.columnShapeByColIdx[Ht]=jc,this.projectShapeByColIdx[Ht]=Nc,this.proteinsByColIdx[Ht]=new Set,Bc=Yr.comparison??""}),l+=Lc}let d=l;for(let z of this._data){let xe=`${z.analysis_group}||${z.conditionA}||${z.conditionB}`,Ye=r.get(`${z.project}||${xe}`);Ye!==void 0&&(this.dataByColProtein[`${Ye}_${z.protein}`]=z,this.proteinsByColIdx[Ye]?.add(z.protein))}let u=Array.from(new Set(this._data.map(z=>z.protein))).sort();this.allProteins=u;let h=new Map(u.map((z,xe)=>[z,xe])),b=u.map(()=>new Array(d).fill(null)),k=u.map(()=>new Array(d).fill(null));for(let z of this._data){let xe=`${z.analysis_group}||${z.conditionA}||${z.conditionB}`,Ye=r.get(`${z.project}||${xe}`),zt=h.get(z.protein);Ye!==void 0&&zt!==void 0&&(b[zt][Ye]=z.log2fc,k[zt][Ye]={protein:z.protein,project:z.project,ag:z.analysis_group,comparison:z.comparison??"",log2fc:z.log2fc,pval:z.p_value})}let w=0;for(let z of b)for(let xe of z)xe!==null&&Math.abs(xe)>w&&(w=Math.abs(xe));w===0&&(w=1);let H=36,F=800,W=600,ae=Math.max(...u.map(z=>z.length)),Te=Math.max(...s.filter(z=>z).map(z=>z.length),4),ee={l:Math.max(140,ae*7+20),t:Math.max(140,Te*7+20),r:100,b:80},Ct=d*H,on=u.length*H,Tt=Ct+ee.l+ee.r,Oc=on+ee.t+ee.b;Tt<F&&(ee.r+=F-Tt),Oc<W&&(ee.b+=W-Oc);let zf=Array.from({length:d},(z,xe)=>xe),Pc=u.map((z,xe)=>xe),$f={x:zf,y:Pc,z:b,customdata:k,type:"heatmap",colorscale:[[0,"rgb(5, 48, 97)"],[.25,"rgb(67, 147, 195)"],[.5,"rgb(255, 255, 255)"],[.75,"rgb(214, 96, 77)"],[1,"rgb(103, 0, 31)"]],zmin:-w,zmax:w,zauto:!1,xgap:1,ygap:1,hoverongaps:!1,hovertemplate:"<b>Protein:</b> %{customdata.protein}<br><b>Project:</b> %{customdata.project}<br><b>Analysis Group:</b> %{customdata.ag}<br><b>Comparison:</b> %{customdata.comparison}<br><b>Log2FC:</b> %{customdata.log2fc:.3f}<br><b>-Log10(p):</b> %{customdata.pval:.3f}<extra></extra>",colorbar:{orientation:"h",lenmode:"pixels",len:200,thicknessmode:"pixels",thickness:12,xanchor:"center",x:.5,yanchor:"top",y:0,ypad:20,tickvals:[-w,0,w],ticktext:[(-w).toFixed(1),"0",w.toFixed(1)],tickfont:{size:9}}};u.forEach((z,xe)=>{this._selectedProteinIds.has(z)&&o.push({type:"rect",xref:"paper",yref:"y",x0:-.015,x1:0,y0:xe-.5,y1:xe+.5,fillcolor:"rgba(79, 70, 229, 0.7)",line:{width:0}})}),this.graphData=[$f],this.layout={title:`Search term: ${e}`,width:Ct+ee.l+ee.r,height:on+ee.t+ee.b,margin:ee,xaxis:{side:"top",showgrid:!1,zeroline:!1,fixedrange:!1,tickvals:a,ticktext:s,tickangle:45,tickfont:{size:9},dtick:1},yaxis:{autorange:"reversed",showgrid:!1,zeroline:!1,fixedrange:!1,tickvals:Pc,ticktext:u,tickfont:{size:9},dtick:1},hoverlabel:{bgcolor:"rgba(255,255,255,0.95)",bordercolor:"#555",font:{size:11},align:"left"},plot_bgcolor:"#e2e8f0",paper_bgcolor:"rgba(0,0,0,0)",shapes:o},this.revision++}onClick(e){let t=e.points[0].y,r=this.allProteins[t];r&&this.proteinClicked.emit(r)}handleHoverIn(e){let t=e.points[0].x,r=e.points[0].y,o=this.allProteins[r],a=this.projectShapeByColIdx[t];if(a){a.line.color="white";let s=this.columnShapeByColIdx[t];s&&(s.line.color="#1a202c",s.line.width=2),o&&this.currentHoverTarget.emit(this.dataByColProtein[`${t}_${o}`]),this.revision++}}handleHoverOut(e){let t=e.points[0].x,r=this.projectShapeByColIdx[t];if(r){r.line.color="#e53e3e";let o=this.columnShapeByColIdx[t];o&&(o.line.color="rgba(0,0,0,0)"),this.currentHoverTarget.emit(void 0),this.revision++}}highlightProteinColumns(e){Object.keys(this.columnShapeByColIdx).forEach(t=>{let r=parseInt(t,10),o=this.columnShapeByColIdx[r];if(o){let a=e?this.proteinsByColIdx[r]?.has(e):!1;o.line.color=a?"#00e676":"rgba(0,0,0,0)",o.line.width=a?3:2}}),this.revision++}exportToCsv(){if(!this._data.length)return;let e=["Protein","Project","Analysis Group","Condition A","Condition B","Comparison","Log2FC","P-value","Search Term"],t=this._data.map(l=>[l.protein,l.project,l.analysis_group,l.conditionA,l.conditionB,l.comparison,l.log2fc.toString(),l.p_value.toString(),l.searchTerm]),r=[e.join(","),...t.map(l=>l.map(d=>`"${d}"`).join(","))].join(`
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),s=document.createElement("a");s.setAttribute("href",a),s.setAttribute("download",`heatmap_${this._data[0]?.searchTerm||"data"}.csv`),s.style.visibility="hidden",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=P({type:n,selectors:[["app-heatmap-plot"]],inputs:{data:"data",highlightedProtein:"highlightedProtein",selectedProteinIds:"selectedProteinIds"},outputs:{currentHoverTarget:"currentHoverTarget",proteinClicked:"proteinClicked"},decls:14,vars:7,consts:[[1,"heatmap-card"],[1,"toolbar-title"],[1,"toolbar-spacer"],["mat-icon-button","","matTooltip","Export to CSV",3,"click"],["mat-icon-button","","matTooltip","Toggle Legend",3,"click"],[1,"heatmap-legend"],[1,"heatmap-content"],[3,"hover","unhover","plotly_click","data","layout","config","updateOnlyWithRevision","revision"],[1,"legend-title"],[1,"legend-item"],[1,"legend-color",2,"border","3px solid red"],[1,"legend-color",2,"border-bottom","3px solid rgb(179,0,137)"],[1,"legend-color",2,"border-left","3px solid rgba(186,104,166)"],[1,"legend-color",2,"border","3px solid #00ff00"],[1,"legend-color",2,"border","2px solid black"],[1,"legend-gradient"]],template:function(t,r){t&1&&(g(0,"div",0)(1,"mat-toolbar")(2,"span",1),ve(3,"Heatmap"),v(),Q(4,"span",2),g(5,"button",3),X("click",function(){return r.exportToCsv()}),g(6,"mat-icon"),ve(7,"download"),v()(),g(8,"button",4),X("click",function(){return r.showLegend=!r.showLegend}),g(9,"mat-icon"),ve(10),v()()(),me(11,cy,27,0,"div",5),g(12,"div",6)(13,"plotly-plot",7),X("hover",function(a){return r.handleHoverIn(a)})("unhover",function(a){return r.handleHoverOut(a)})("plotly_click",function(a){return r.onClick(a)}),v()()()),t&2&&(D(10),mn(r.showLegend?"visibility_off":"help_outline"),D(),fe(r.showLegend?11:-1),D(2),te("data",r.graphData)("layout",r.layout)("config",r.plotConfig)("updateOnlyWithRevision",!0)("revision",r.revision))},dependencies:[Hm,hc,Wl,Fa,ic,Gm],styles:[".blinking[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blink-animation 1s infinite}@keyframes _ngcontent-%COMP%_blink-animation{0%{opacity:1}50%{opacity:.5}to{opacity:1}}.heatmap-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid var(--app-outline-variant);border-radius:4px;background-color:var(--app-surface-color);overflow:hidden;margin-bottom:16px}.toolbar-title[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.heatmap-content[_ngcontent-%COMP%]{overflow:auto;position:relative}.heatmap-legend[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;z-index:99;background:var(--app-surface-color);border:1px solid var(--app-outline-variant);border-radius:4px;padding:8px 12px;font-size:12px;box-shadow:0 2px 8px #00000026}.legend-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:6px;border-bottom:1px solid var(--app-divider-color);padding-bottom:4px}.legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin:4px 0}.legend-color[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;background:var(--app-surface-color)}.legend-gradient[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;background:linear-gradient(to right,#440154,#3b528b,#21918c,#5ec962,#fde725)}"],changeDetection:0})}}return n})();var dy=["determinateSpinner"];function uy(n,i){if(n&1&&(Mn(),g(0,"svg",11),Q(1,"circle",12),v()),n&2){let e=pe();G("viewBox",e._viewBox()),D(),Yt("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),G("r",e._circleRadius())}}var hy=new p("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Wm})}),Wm=100,my=10,HT=(()=>{class n{_elementRef=c(C);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(hy),t=Vl(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Wm;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-my)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&Ee(dy,5),t&2){let o;N(o=B())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(G("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Pe("mat-"+r.color),Yt("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),L("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ve],diameter:[2,"diameter","diameter",Ve],strokeWidth:[2,"strokeWidth","strokeWidth",Ve]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(xt(0,uy,2,8,"ng-template",null,0,co),g(2,"div",2,1),Mn(),g(4,"svg",3),Q(5,"circle",4),v()(),eo(),g(6,"div",5)(7,"div",6)(8,"div",7),lo(9,8),v(),g(10,"div",9),lo(11,8),v(),g(12,"div",10),lo(13,8),v()()()),t&2){let o=mt(1);D(4),G("viewBox",r._viewBox()),D(),Yt("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),G("r",r._circleRadius()),D(4),te("ngTemplateOutlet",o),D(2),te("ngTemplateOutlet",o),D(2),te("ngTemplateOutlet",o)}},dependencies:[er],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var WT=(()=>{class n{createDefaultSettings(e){return{projectOrder:e.map(t=>t.id),analysisGroupOrderMap:{},renameSampleCondition:this.createEmptyProjectMap(e),projectAnalysisGroupVisibility:this.createEmptyProjectMap(e),projectConditionColorMap:this.createEmptyProjectMap(e),projectConditionOrder:this.createEmptyProjectMap(e),plotSettings:{},showTags:!1}}initializeSettings(e){if(!e.settings)return this.createDefaultSettings(e.projects);let t=m({},e.settings);return t.plotSettings||(t.plotSettings={}),t.projectAnalysisGroupVisibility||(t.projectAnalysisGroupVisibility=this.createEmptyProjectMap(e.projects)),t.renameSampleCondition||(t.renameSampleCondition=this.createEmptyProjectMap(e.projects)),t.projectConditionColorMap||(t.projectConditionColorMap=this.createEmptyProjectMap(e.projects)),t.projectConditionOrder||(t.projectConditionOrder=this.createEmptyProjectMap(e.projects)),t}orderProjectsBySettings(e,t){if(!t||t.length===0)return e;let r=t.map(a=>e.find(s=>s.id===a)).filter(a=>a!==void 0),o=e.filter(a=>!t.includes(a.id));return[...r,...o]}filterSearchResultsByTerms(e,t,r){let o={};return Object.keys(e).forEach(a=>{let s=parseInt(a,10),l=e[s].filter(d=>t.includes(d.search_term));r.analysisGroupOrderMap?.[s]&&(l=this.orderResultsByAnalysisGroup(l,r.analysisGroupOrderMap[s])),r.projectAnalysisGroupVisibility?.[s]&&(l=this.filterResultsByVisibility(l,r.projectAnalysisGroupVisibility[s])),o[s]=l}),o}orderAnalysisGroups(e,t){let r={};return Object.keys(e).forEach(o=>{let a=parseInt(o,10),s=e[a],l=t?.[a];if(!l){r[a]=s;return}let d=s.filter(h=>l.includes(h.id)).sort((h,b)=>l.indexOf(h.id)-l.indexOf(b.id)),u=s.filter(h=>!l.includes(h.id));r[a]=[...d,...u]}),r}groupAnalysisGroupsByProject(e){let t={};return e.forEach(r=>{t[r.project]||(t[r.project]=[]),t[r.project].push(r)}),t}initializeVisibilityMap(e,t){let r=t?m({},t):{};for(let o in e){r[o]||(r[o]={});for(let a of e[o])a.id in r[o]||(r[o][a.id]=!0)}return r}createEmptyProjectMap(e){let t={};return e.forEach(r=>{t[r.id]={}}),t}orderResultsByAnalysisGroup(e,t){let r=e.filter(a=>t.includes(a.analysis_group.id)).sort((a,s)=>t.indexOf(a.analysis_group.id)-t.indexOf(s.analysis_group.id)),o=e.filter(a=>!t.includes(a.analysis_group.id));return[...r,...o]}filterResultsByVisibility(e,t){return e.filter(r=>{let o=r.analysis_group.id;return o in t?t[o]:!0})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var ef=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(M(be),M(C))};static \u0275dir=_({type:n})}return n})(),tf=(()=>{class n extends ef{static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275dir=_({type:n,features:[ue]})}return n})(),rn=new p("");var fy={provide:rn,useExisting:tt(()=>nf),multi:!0};function py(){let n=ft()?ft().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var gy=new p(""),nf=(()=>{class n extends ef{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!py())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(M(be),M(C),M(gy,8))};static \u0275dir=_({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&X("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[se([fy]),ue]})}return n})();function gc(n){return n==null||bc(n)===0}function bc(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Ut=new p(""),Wr=new p(""),by=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,La=class{static min(i){return rf(i)}static max(i){return _y(i)}static required(i){return vy(i)}static requiredTrue(i){return yy(i)}static email(i){return wy(i)}static minLength(i){return Cy(i)}static maxLength(i){return Dy(i)}static pattern(i){return xy(i)}static nullValidator(i){return Na()}static compose(i){return df(i)}static composeAsync(i){return uf(i)}};function rf(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function _y(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function vy(n){return gc(n.value)?{required:!0}:null}function yy(n){return n.value===!0?null:{required:!0}}function wy(n){return gc(n.value)||by.test(n.value)?null:{email:!0}}function Cy(n){return i=>{let e=i.value?.length??bc(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Dy(n){return i=>{let e=i.value?.length??bc(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function xy(n){if(!n)return Na;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(gc(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Na(n){return null}function of(n){return n!=null}function af(n){return li(n)?Be(n):n}function sf(n){let i={};return n.forEach(e=>{i=e!=null?m(m({},i),e):i}),Object.keys(i).length===0?null:i}function lf(n,i){return i.map(e=>e(n))}function Ey(n){return!n.validate}function cf(n){return n.map(i=>Ey(i)?i:e=>i.validate(e))}function df(n){if(!n)return null;let i=n.filter(of);return i.length==0?null:function(e){return sf(lf(e,i))}}function _c(n){return n!=null?df(cf(n)):null}function uf(n){if(!n)return null;let i=n.filter(of);return i.length==0?null:function(e){let t=lf(e,i).map(af);return Jr(t).pipe(j(sf))}}function vc(n){return n!=null?uf(cf(n)):null}function qm(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function hf(n){return n._rawValidators}function mf(n){return n._rawAsyncValidators}function mc(n){return n?Array.isArray(n)?n:[n]:[]}function Ba(n,i){return Array.isArray(n)?n.includes(i):n===i}function Ym(n,i){let e=mc(i);return mc(n).forEach(r=>{Ba(e,r)||e.push(r)}),e}function Zm(n,i){return mc(i).filter(e=>!Ba(n,e))}var ja=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=_c(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=vc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},nn=class extends ja{name;get formDirective(){return null}get path(){return null}},Mt=class extends ja{_parent=null;name=null;valueAccessor=null},Va=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var dA=(()=>{class n extends Va{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(M(Mt,2))};static \u0275dir=_({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&L("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ue]})}return n})(),uA=(()=>{class n extends Va{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(M(nn,10))};static \u0275dir=_({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&L("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ue]})}return n})();var Br="VALID",Pa="INVALID",Pi="PENDING",jr="DISABLED",kn=class{},Ua=class extends kn{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Ur=class extends kn{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},zr=class extends kn{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Li=class extends kn{status;source;constructor(i,e){super(),this.status=i,this.source=e}},za=class extends kn{source;constructor(i){super(),this.source=i}},Hr=class extends kn{source;constructor(i){super(),this.source=i}};function yc(n){return(Wa(n)?n.validators:n)||null}function ky(n){return Array.isArray(n)?_c(n):n||null}function wc(n,i){return(Wa(i)?i.asyncValidators:n)||null}function Sy(n){return Array.isArray(n)?vc(n):n||null}function Wa(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function ff(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new A(1e3,"");if(!t[e])throw new A(1001,"")}function pf(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new A(-1002,"")})}var Ni=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ne(this.statusReactive)}set status(i){ne(()=>this.statusReactive.set(i))}_status=it(()=>this.statusReactive());statusReactive=K(void 0);get valid(){return this.status===Br}get invalid(){return this.status===Pa}get pending(){return this.status===Pi}get disabled(){return this.status===jr}get enabled(){return this.status!==jr}errors;get pristine(){return ne(this.pristineReactive)}set pristine(i){ne(()=>this.pristineReactive.set(i))}_pristine=it(()=>this.pristineReactive());pristineReactive=K(!0);get dirty(){return!this.pristine}get touched(){return ne(this.touchedReactive)}set touched(i){ne(()=>this.touchedReactive.set(i))}_touched=it(()=>this.touchedReactive());touchedReactive=K(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Ym(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Ym(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Zm(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Zm(i,this._rawAsyncValidators))}hasValidator(i){return Ba(this._rawValidators,i)}hasAsyncValidator(i){return Ba(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(ie(m({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new zr(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new zr(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(ie(m({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Ur(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Ur(!0,t))}markAsPending(i={}){this.status=Pi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Li(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(ie(m({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=jr,this.errors=null,this._forEachChild(r=>{r.disable(ie(m({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ua(this.value,t)),this._events.next(new Li(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ie(m({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Br,this._forEachChild(t=>{t.enable(ie(m({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ie(m({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Br||this.status===Pi)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ua(this.value,e)),this._events.next(new Li(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(ie(m({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?jr:Br}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Pi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=af(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Li(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?jr:this.errors?Pa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Pi)?Pi:this._anyControlsHaveStatus(Pa)?Pa:Br}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Ur(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new zr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Wa(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=ky(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Sy(this._rawAsyncValidators)}},Bi=class extends Ni{constructor(i,e,t){super(yc(e),wc(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){pf(this,!0,i),Object.keys(i).forEach(t=>{ff(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,ie(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Hr(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var fc=class extends Bi{};var ji=new p("",{factory:()=>qa}),qa="always";function gf(n,i){return[...i.path,n]}function Gr(n,i,e=qa){Cc(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),Iy(n,i),Ty(n,i),My(n,i),Ry(n,i)}function $a(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Ga(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Ha(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Ry(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Cc(n,i){let e=hf(n);i.validator!==null?n.setValidators(qm(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=mf(n);i.asyncValidator!==null?n.setAsyncValidators(qm(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Ha(i._rawValidators,r),Ha(i._rawAsyncValidators,r)}function Ga(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=hf(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=mf(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return Ha(i._rawValidators,t),Ha(i._rawAsyncValidators,t),e}function Iy(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&bf(n,i)})}function My(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&bf(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function bf(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ty(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function _f(n,i){n==null,Cc(n,i)}function Ay(n,i){return Ga(n,i)}function Dc(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Fy(n){return Object.getPrototypeOf(n.constructor)===tf}function vf(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function xc(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===nf?e=o:Fy(o)?t=o:r=o}),r||t||e||null}function Oy(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Py={provide:nn,useExisting:tt(()=>Ec)},Vr=Promise.resolve(),Ec=(()=>{class n extends nn{callSetDisabledState;get submitted(){return ne(this.submittedReactive)}_submitted=it(()=>this.submittedReactive());submittedReactive=K(!1);_directives=new Set;form;ngSubmit=new O;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Bi({},_c(e),vc(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Vr.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Gr(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Vr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Vr.then(()=>{let t=this._findContainer(e.path),r=new Bi({});_f(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Vr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Vr.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),vf(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new za(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(M(Ut,10),M(Wr,10),M(ji,8))};static \u0275dir=_({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&X("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[se([Py]),ue]})}return n})();function Xm(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function Km(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var $r=class extends Ni{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(yc(e),wc(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Wa(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Km(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Hr(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Xm(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Xm(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Km(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Ly=n=>n instanceof $r;var Ny={provide:Mt,useExisting:tt(()=>By)},Qm=Promise.resolve(),By=(()=>{class n extends Mt{_changeDetectorRef;callSetDisabledState;control=new $r;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new O;constructor(e,t,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=xc(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Dc(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Gr(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Qm.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&x(t);Qm.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?gf(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(M(nn,9),M(Ut,10),M(Wr,10),M(rn,10),M(we,8),M(ji,8))};static \u0275dir=_({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[se([Ny]),ue,de]})}return n})();var mA=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),jy={provide:rn,useExisting:tt(()=>Vy),multi:!0},Vy=(()=>{class n extends tf{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,r){t&1&&X("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[se([jy]),ue]})}return n})();var pc=class extends Ni{constructor(i,e,t){super(yc(e),wc(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){pf(this,!1,i),i.forEach((t,r)=>{ff(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],ie(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Hr(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Uy=(()=>{class n extends nn{callSetDisabledState;get submitted(){return ne(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=it(()=>this._submittedReactive());_submittedReactive=K(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ga(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return Gr(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){$a(e.control||null,e,!1),Oy(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,vf(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new za(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&($a(t||null,e),Ly(r)&&(Gr(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);_f(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Ay(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Cc(this.form,this),this._oldForm&&Ga(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(M(Ut,10),M(Wr,10),M(ji,8))};static \u0275dir=_({type:n,features:[ue,de]})}return n})();var kc=new p(""),zy={provide:Mt,useExisting:tt(()=>$y)},$y=(()=>{class n extends Mt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new O;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=xc(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&$a(t,this,!1),Gr(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Dc(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&$a(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||n)(M(Ut,10),M(Wr,10),M(rn,10),M(kc,8),M(ji,8))};static \u0275dir=_({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[se([zy]),ue,de]})}return n})();var Hy={provide:Mt,useExisting:tt(()=>Gy)},Gy=(()=>{class n extends Mt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new O;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=xc(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Dc(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return gf(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(M(nn,13),M(Ut,10),M(Wr,10),M(rn,10),M(kc,8))};static \u0275dir=_({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[se([Hy]),ue,de]})}return n})();var Wy={provide:nn,useExisting:tt(()=>Sc)},Sc=(()=>{class n extends Uy{form=null;ngSubmit=new O;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&X("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[se([Wy]),ue]})}return n})();function qy(n){return typeof n=="number"?n:parseFloat(n)}var Yy=(()=>{class n{_validator=Na;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Na,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,features:[de]})}return n})();var Zy={provide:Ut,useExisting:tt(()=>Xy),multi:!0},Xy=(()=>{class n extends Yy{min;inputName="min";normalizeInput=e=>qy(e);createValidator=e=>rf(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&G("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[se([Zy]),ue]})}return n})();var yf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({})}return n})();function Jm(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var fA=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return Jm(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Bi(r,o)}record(e,t=null){let r=this._reduceControls(e);return new fc(r,t)}control(e,t,r){let o={};return this.useNonNullable?(Jm(t)?o=t:(o.validators=t,o.asyncValidators=r),new $r(e,ie(m({},o),{nonNullable:!0}))):new $r(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new pc(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof $r)return e;if(e instanceof Ni)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var pA=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ji,useValue:e.callSetDisabledState??qa}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[yf]})}return n})(),gA=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:kc,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ji,useValue:e.callSetDisabledState??qa}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[yf]})}return n})();var yA=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=yt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=yt(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(G("aria-orientation",r.vertical?"vertical":"horizontal"),L("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ky=["notch"],Qy=["matFormFieldNotchedOutline",""],Jy=["*"],wf=["iconPrefixContainer"],Cf=["textPrefixContainer"],Df=["iconSuffixContainer"],xf=["textSuffixContainer"],e0=["textField"],t0=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],n0=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function i0(n,i){n&1&&Q(0,"span",21)}function r0(n,i){if(n&1&&(g(0,"label",20),J(1,1),me(2,i0,1,0,"span",21),v()),n&2){let e=pe(2);te("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),G("for",e._control.disableAutomaticLabeling?null:e._control.id),D(2),fe(!e.hideRequiredMarker&&e._control.required?2:-1)}}function o0(n,i){if(n&1&&me(0,r0,3,5,"label",20),n&2){let e=pe();fe(e._hasFloatingLabel()?0:-1)}}function a0(n,i){n&1&&Q(0,"div",7)}function s0(n,i){}function l0(n,i){if(n&1&&xt(0,s0,0,0,"ng-template",13),n&2){pe(2);let e=mt(1);te("ngTemplateOutlet",e)}}function c0(n,i){if(n&1&&(g(0,"div",9),me(1,l0,1,1,null,13),v()),n&2){let e=pe();te("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),D(),fe(e._forceDisplayInfixLabel()?-1:1)}}function d0(n,i){n&1&&(g(0,"div",10,2),J(2,2),v())}function u0(n,i){n&1&&(g(0,"div",11,3),J(2,3),v())}function h0(n,i){}function m0(n,i){if(n&1&&xt(0,h0,0,0,"ng-template",13),n&2){pe();let e=mt(1);te("ngTemplateOutlet",e)}}function f0(n,i){n&1&&(g(0,"div",14,4),J(2,4),v())}function p0(n,i){n&1&&(g(0,"div",15,5),J(2,5),v())}function g0(n,i){n&1&&Q(0,"div",16)}function b0(n,i){n&1&&(g(0,"div",18),J(1,6),v())}function _0(n,i){if(n&1&&(g(0,"mat-hint",22),ve(1),v()),n&2){let e=pe(2);te("id",e._hintLabelId),D(),mn(e.hintLabel)}}function v0(n,i){if(n&1&&(g(0,"div",19),me(1,_0,2,2,"mat-hint",22),J(2,7),Q(3,"div",23),J(4,8),v()),n&2){let e=pe();D(),fe(e.hintLabel?1:-1)}}var Za=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["mat-label"]]})}return n})(),Tf=new p("MatError"),Af=(()=>{class n{id=c(Fe).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&Wt("id",r.id)},inputs:{id:"id"},features:[se([{provide:Tf,useExisting:n}])]})}return n})(),Xa=(()=>{class n{align="start";id=c(Fe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Wt("id",r.id),G("align",null),L("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Ff=new p("MatPrefix"),Of=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[se([{provide:Ff,useExisting:n}])]})}return n})(),Pf=new p("MatSuffix"),Lf=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[se([{provide:Pf,useExisting:n}])]})}return n})(),Nf=new p("FloatingLabelParent"),Ef=(()=>{class n{_elementRef=c(C);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Oa);_ngZone=c(R);_parent=c(Nf);_resizeSubscription=new Ce;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return y0(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&L("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function y0(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var kf="mdc-line-ripple--active",Ya="mdc-line-ripple--deactivating",Sf=(()=>{class n{_elementRef=c(C);_cleanupTransitionEnd;constructor(){let e=c(R),t=c(be);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ya),e.add(kf)}deactivate(){this._elementRef.nativeElement.classList.add(Ya)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Ya);e.propertyName==="opacity"&&r&&t.remove(kf,Ya)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Rf=(()=>{class n{_elementRef=c(C);_ngZone=c(R);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Ee(Ky,5),t&2){let o;N(o=B())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&L("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Qy,ngContentSelectors:Jy,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(ye(),Ot(0,"div",1),hn(1,"div",2,0),J(3),Pn(),Ot(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Rc=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n})}return n})();var Ic=new p("MatFormField"),w0=new p("MAT_FORM_FIELD_DEFAULT_OPTIONS"),If="fill",C0="auto",Mf="fixed",D0="translateY(-50%)",Mc=(()=>{class n{_elementRef=c(C);_changeDetectorRef=c(we);_platform=c(Z);_idGenerator=c(Fe);_ngZone=c(R);_defaults=c(w0,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Yi("iconPrefixContainer");_textPrefixContainerSignal=Yi("textPrefixContainer");_iconSuffixContainerSignal=Yi("iconSuffixContainer");_textSuffixContainerSignal=Yi("textSuffixContainer");_prefixSuffixContainers=it(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=_d(Za);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=yt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||C0}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||If;this._appearanceSignal.set(t)}_appearanceSignal=K(If);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Mf}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Mf}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=De();constructor(){let e=this._defaults,t=c(ut);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),An(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=it(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Dt([void 0,void 0]),j(()=>[t.errorState,t.userAriaDescribedBy]),rs(),ge(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Jn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){yd({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=it(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",h=`${a+s}px`,k=`calc(${u} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,w=`var(--mat-mdc-form-field-label-transform, ${D0} translateX(${k}))`,H=a+s+l+d;return[w,H]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(fd(o,r._labelChild,Za,5),qt(o,Rc,5)(o,Ff,5)(o,Pf,5)(o,Tf,5)(o,Xa,5)),t&2){us();let a;N(a=B())&&(r._formFieldControl=a.first),N(a=B())&&(r._prefixChildren=a),N(a=B())&&(r._suffixChildren=a),N(a=B())&&(r._errorChildren=a),N(a=B())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(pd(r._iconPrefixContainerSignal,wf,5)(r._textPrefixContainerSignal,Cf,5)(r._iconSuffixContainerSignal,Df,5)(r._textSuffixContainerSignal,xf,5),Ee(e0,5)(wf,5)(Cf,5)(Df,5)(xf,5)(Ef,5)(Rf,5)(Sf,5)),t&2){us(4);let o;N(o=B())&&(r._textField=o.first),N(o=B())&&(r._iconPrefixContainer=o.first),N(o=B())&&(r._textPrefixContainer=o.first),N(o=B())&&(r._iconSuffixContainer=o.first),N(o=B())&&(r._textSuffixContainer=o.first),N(o=B())&&(r._floatingLabel=o.first),N(o=B())&&(r._notchedOutline=o.first),N(o=B())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&L("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[se([{provide:Ic,useExisting:n},{provide:Nf,useExisting:n}])],ngContentSelectors:n0,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(ye(t0),xt(0,o0,1,1,"ng-template",null,0,co),g(2,"div",6,1),X("click",function(a){return r._control.onContainerClick(a)}),me(4,a0,1,0,"div",7),g(5,"div",8),me(6,c0,2,2,"div",9),me(7,d0,3,0,"div",10),me(8,u0,3,0,"div",11),g(9,"div",12),me(10,m0,1,1,null,13),J(11),v(),me(12,f0,3,0,"div",14),me(13,p0,3,0,"div",15),v(),me(14,g0,1,0,"div",16),v(),g(15,"div",17),me(16,b0,2,0,"div",18)(17,v0,5,1,"div",19),v()),t&2){let o;D(2),L("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),D(2),fe(!r._hasOutline()&&!r._control.disabled?4:-1),D(2),fe(r._hasOutline()?6:-1),D(),fe(r._hasIconPrefix?7:-1),D(),fe(r._hasTextPrefix?8:-1),D(2),fe(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),D(2),fe(r._hasTextSuffix?12:-1),D(),fe(r._hasIconSuffix?13:-1),D(),fe(r._hasOutline()?-1:14),D(),L("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();D(),fe((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Ef,Rf,er,Sf,Xa],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Tc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[pa,Mc,Le]})}return n})();var x0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),E0={passive:!0},Bf=(()=>{class n{_platform=c(Z);_ngZone=c(R);_renderer=c(Ke).createRenderer(null,null);_styleLoader=c(Me);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ue;this._styleLoader.load(x0);let t=Je(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new y,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,E0)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=Je(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({})}return n})();var Vf=new p("MAT_INPUT_VALUE_ACCESSOR");var Uf=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ka=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var k0=["button","checkbox","file","hidden","image","radio","range","reset","submit"],S0=new p("MAT_INPUT_CONFIG"),EF=(()=>{class n{_elementRef=c(C);_platform=c(Z);ngControl=c(Mt,{optional:!0,self:!0});_autofillMonitor=c(Bf);_ngZone=c(R);_formField=c(Ic,{optional:!0});_renderer=c(be);_uid=c(Fe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(S0,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=yt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(La.required)??!1}set required(e){this._required=yt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&jl().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=yt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>jl().has(e));constructor(){let e=c(Ec,{optional:!0}),t=c(Sc,{optional:!0}),r=c(Uf),o=c(Vf,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?si(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ka(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&An(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){k0.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&X("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Wt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),G("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),L("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",x]},exportAs:["matInput"],features:[se([{provide:Rc,useExisting:n}]),de]})}return n})(),kF=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=U({type:n});static \u0275inj=V({imports:[Tc,Tc,jf,Le]})}return n})();var R0=["mat-internal-form-field",""],I0=["*"],Qa=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&L("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:R0,ngContentSelectors:I0,decls:1,vars:0,template:function(t,r){t&1&&(ye(),J(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var M0=["switch"],T0=["*"];function A0(n,i){n&1&&(g(0,"span",11),Mn(),g(1,"svg",13),Q(2,"path",14),v(),g(3,"svg",15),Q(4,"path",16),v()())}var F0=new p("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ja=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},GF=(()=>{class n{_elementRef=c(C);_focusMonitor=c(en);_changeDetectorRef=c(we);defaults=c(F0);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ja(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=De();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new O;toggleChange=new O;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){c(Me).load(Dn);let e=c(new Zt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=c(Fe).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ja(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,r){if(t&1&&Ee(M0,5),t&2){let o;N(o=B())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,r){t&2&&(Wt("id",r.id),G("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Pe(r.color?"mat-"+r.color:""),L("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",x],color:"color",disabled:[2,"disabled","disabled",x],disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ve(e)],checked:[2,"checked","checked",x],hideIcon:[2,"hideIcon","hideIcon",x],disabledInteractive:[2,"disabledInteractive","disabledInteractive",x]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[se([{provide:rn,useExisting:tt(()=>n),multi:!0},{provide:Ut,useExisting:n,multi:!0}]),de],ngContentSelectors:T0,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,r){if(t&1&&(ye(),g(0,"div",1)(1,"button",2,0),X("click",function(){return r._handleClick()}),Q(3,"div",3)(4,"span",4),g(5,"span",5)(6,"span",6)(7,"span",7),Q(8,"span",8),v(),g(9,"span",9),Q(10,"span",10),v(),me(11,A0,5,0,"span",11),v()()(),g(12,"label",12),X("click",function(a){return a.stopPropagation()}),J(13),v()()),t&2){let o=mt(2);te("labelPosition",r.labelPosition),D(),L("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),te("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),G("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),D(9),te("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),D(),fe(r.hideIcon?-1:11),D(),te("for",r.buttonId),G("id",r._labelId)}},dependencies:[Yn,Qa],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})();var O0=["input"],P0=["label"],L0=["*"],Ac={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},N0=new p("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ac}),qe=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(qe||{}),Fc=class{source;checked},lO=(()=>{class n{_elementRef=c(C);_changeDetectorRef=c(we);_ngZone=c(R);_animationsDisabled=De();_options=c(N0,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Fc;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new O;indeterminateChange=new O;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=qe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){c(Me).load(Dn);let e=c(new Zt("tabindex"),{optional:!0});this._options=this._options||Ac,this.color=this._options.color||Ac.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=c(Fe).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(qe.Indeterminate):this._transitionCheckState(this.checked?qe.Checked:qe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=K(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?qe.Checked:qe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case qe.Init:if(t===qe.Checked)return this._animationClasses.uncheckedToChecked;if(t==qe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case qe.Unchecked:return t===qe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case qe.Checked:return t===qe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case qe.Indeterminate:return t===qe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,r){if(t&1&&Ee(O0,5)(P0,5),t&2){let o;N(o=B())&&(r._inputElement=o.first),N(o=B())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,r){t&2&&(Wt("id",r.id),G("tabindex",null)("aria-label",null)("aria-labelledby",null),Pe(r.color?"mat-"+r.color:"mat-accent"),L("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",x],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",x],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ve(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],checked:[2,"checked","checked",x],disabled:[2,"disabled","disabled",x],indeterminate:[2,"indeterminate","indeterminate",x]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[se([{provide:rn,useExisting:tt(()=>n),multi:!0},{provide:Ut,useExisting:n,multi:!0}]),de],ngContentSelectors:L0,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,r){if(t&1&&(ye(),g(0,"div",3),X("click",function(a){return r._preventBubblingFromLabel(a)}),g(1,"div",4,0)(3,"div",5),X("click",function(){return r._onTouchTargetClick()}),v(),g(4,"input",6,1),X("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),v(),Q(6,"div",7),g(7,"div",8),Mn(),g(8,"svg",9),Q(9,"path",10),v(),eo(),Q(10,"div",11),v(),Q(11,"div",12),v(),g(12,"label",13,2),J(14),v()()),t&2){let o=mt(2);te("labelPosition",r.labelPosition),D(4),L("mdc-checkbox--selected",r.checked),te("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),G("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),D(7),te("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),D(),te("for",r.inputId)}},dependencies:[Yn,Qa],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();export{ks as a,er as b,Is as c,gp as d,bp as e,di as f,rC as g,Vs as h,Hp as i,bt as j,fn as k,bg as l,_g as m,hu as n,sr as o,at as p,jt as q,pl as r,vt as s,Qb as t,Jb as u,gh as v,El as w,yn as x,Je as y,Gn as z,yt as A,Z as B,Sl as C,o_ as D,Qe as E,Me as F,fa as G,Dr as H,xr as I,en as J,Sr as K,Fh as L,d_ as M,w_ as N,Fl as O,D_ as P,Cn as Q,Ol as R,Rr as S,Fe as T,E_ as U,k_ as V,Hh as W,Wh as X,Vl as Y,De as Z,Mr as _,wa as $,Yn as aa,Dn as ba,PS as ca,Tr as da,om as ea,rn as fa,nf as ga,La as ha,Mt as ia,dA as ja,uA as ka,Ec as la,$r as ma,By as na,mA as oa,Vy as pa,$y as qa,Gy as ra,Sc as sa,Xy as ta,fA as ua,pA as va,gA as wa,ut as xa,Le as ya,yA as za,nm as Aa,Zn as Ba,Yl as Ca,xn as Da,iR as Ea,ql as Fa,En as Ga,Vt as Ha,Ai as Ia,Fi as Ja,Kl as Ka,pm as La,Or as Ma,Kn as Na,Cm as Oa,Ra as Pa,Pr as Qa,Ta as Ra,nc as Sa,Qn as Ta,ec as Ua,Z_ as Va,km as Wa,Za as Xa,Af as Ya,Xa as Za,Of as _a,Lf as $a,Rc as ab,Ic as bb,Mc as cb,Uf as db,Ka as eb,Tc as fb,EF as gb,kF as hb,Jh as ib,Wl as jb,rm as kb,z_ as lb,ic as mb,Fa as nb,Pm as ob,HI as pb,cM as qb,Nr as rb,gM as sb,wM as tb,Zv as ub,Xv as vb,nT as wb,hc as xb,Hm as yb,GF as zb,ly as Ab,Gm as Bb,wT as Cb,lO as Db,FT as Eb,HT as Fb,WT as Gb};
