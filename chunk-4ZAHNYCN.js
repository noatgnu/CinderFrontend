import{$ as dt,$a as $m,$b as ot,$c as Ye,A as Ei,Aa as oe,Ab as ke,B as dc,Bb as Ha,C as Oa,Ca as Fm,Cb as _c,Cc as X,D as Mi,Da as Vn,Db as pn,Dc as eu,E as Fa,Ea as me,Eb as Dr,F as Em,Fa as ue,Fb as Km,G as Mm,Ga as pc,Gb as bc,Gc as wc,H as Be,Ha as M,Hb as vc,Hc as Cc,I as _e,Ia as Wi,Ib as Ri,J as fo,Ja as Pm,Jb as Qm,Jc as fn,K as gr,Ka as zn,Kb as N,Kc as tu,L as Nn,La as Lm,Lb as V,Lc as xc,M as dn,Ma as wr,Mb as z,Mc as De,N as Xe,Na as Pa,Nb as li,Nc as Nt,Oa as Cr,Ob as Ge,Oc as iu,P as hc,Pa as Nm,Pb as We,Pc as Kt,Q as _r,Qa as fc,Qb as O,Qc as nu,R as hn,Ra as gc,Rb as m,Rc as pe,S as mc,Sa as La,Sb as u,Sc as Ct,T as uc,Ta as un,Tb as j,Tc as yo,U as Rm,Ua as xr,Ub as Tt,Uc as ru,V as go,Va as Bm,Vb as qt,W as br,Wa as jm,Wb as Ii,Wc as J,X as Ae,Xa as Vm,Xb as bo,Xc as Ti,Y as je,Ya as zm,Yb as vo,Yc as Ga,Z as G,Za as Um,Zb as gt,Zc as ou,_ as Im,_a as Hm,_b as qe,_c as D,a as g,aa as ne,ab as It,ac as Yt,ad as au,b as re,ba as Bn,bc as at,bd as Wa,ca as ut,cc as k,cd as su,da as y,db as Gm,dc as $a,ea as K,ec as C,f as Oe,fa as Tm,fb as f,fc as se,g as ye,ga as _,gb as Un,gc as P,ha as Z,hb as Wm,hc as ze,i as Dm,ia as l,ib as Na,ic as ge,j as _t,ja as _o,jb as Ba,jc as S,k as km,kb as xe,kc as E,l as b,la as Am,lb as Ve,lc as Zm,ma as pt,mb as ft,mc as Xm,n as tt,na as Rt,nb as fe,nc as yc,o as lc,oa as we,ob as L,oc as it,p as cc,pa as Ce,pb as ja,pc as ci,q as po,qa as Lt,qb as Ke,qc as T,r as yt,ra as vr,rb as Va,rc as Qe,s as bt,sa as q,sb as qm,sc as x,t as Y,ta as $,tb as za,tc as Ie,u as Aa,ua as mn,ub as R,uc as wt,v as fr,va as Om,vb as Q,w as Sm,wa as I,wb as v,wc as kr,xa as H,xb as Ua,xc as Sr,y as te,ya as jn,yb as Ym,yc as Er,z as Gi,za as yr,zb as W,zc as Jm}from"./chunk-7AEGLYFL.js";var lu=null;function ei(){return lu}function Dc(i){lu??=i}var wo=class{},qi=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>l(cu),providedIn:"platform"})}return i})(),kc=new _(""),cu=(()=>{class i extends qi{_location;_history;_doc=l($);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ei().getBaseHref(this._doc)}onPopState(e){let t=ei().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=ei().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,n){this._history.pushState(e,t,n)}replaceState(e,t,n){this._history.replaceState(e,t,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function qa(i,r){return i?r?i.endsWith("/")?r.startsWith("/")?i+r.slice(1):i+r:r.startsWith("/")?i+r:`${i}/${r}`:i:r}function du(i){let r=i.search(/#|\?|$/);return i[r-1]==="/"?i.slice(0,r-1)+i.slice(r):i}function di(i){return i&&i[0]!=="?"?`?${i}`:i}var ti=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>l(Ka),providedIn:"root"})}return i})(),Ya=new _(""),Ka=(()=>{class i extends ti{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l($).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return qa(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+di(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${t}${n}`:t}pushState(e,t,n,o){let a=this.prepareExternalUrl(n+di(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,n,o){let a=this.prepareExternalUrl(n+di(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(Z(qi),Z(Ya,8))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ai=(()=>{class i{_subject=new b;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Hb(du(hu(t))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+di(t))}normalize(e){return i.stripTrailingSlash(Ub(this._basePath,hu(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",n=null){this._locationStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+di(t)),n)}replaceState(e,t="",n=null){this._locationStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+di(t)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(n=>n(e,t))}subscribe(e,t,n){return this._subject.subscribe({next:e,error:t??void 0,complete:n??void 0})}static normalizeQueryParams=di;static joinWithSlash=qa;static stripTrailingSlash=du;static \u0275fac=function(t){return new(t||i)(Z(ti))};static \u0275prov=y({token:i,factory:()=>zb(),providedIn:"root"})}return i})();function zb(){return new Ai(Z(ti))}function Ub(i,r){if(!i||!r.startsWith(i))return r;let e=r.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function hu(i){return i.replace(/\/index.html$/,"")}function Hb(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var ns=(()=>{class i extends ti{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=qa(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,n,o){let a=this.prepareExternalUrl(n+di(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,n,o){let a=this.prepareExternalUrl(n+di(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(Z(qi),Z(Ya,8))};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})();var Fc=(function(i){return i[i.Decimal=0]="Decimal",i[i.Percent=1]="Percent",i[i.Currency=2]="Currency",i[i.Scientific=3]="Scientific",i})(Fc||{});var xt=(function(i){return i[i.Format=0]="Format",i[i.Standalone=1]="Standalone",i})(xt||{}),Fe=(function(i){return i[i.Narrow=0]="Narrow",i[i.Abbreviated=1]="Abbreviated",i[i.Wide=2]="Wide",i[i.Short=3]="Short",i})(Fe||{}),Bt=(function(i){return i[i.Short=0]="Short",i[i.Medium=1]="Medium",i[i.Long=2]="Long",i[i.Full=3]="Full",i})(Bt||{}),jt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function fu(i){return Yt(i)[at.LocaleId]}function gu(i,r,e){let t=Yt(i),n=[t[at.DayPeriodsFormat],t[at.DayPeriodsStandalone]],o=ii(n,r);return ii(o,e)}function _u(i,r,e){let t=Yt(i),n=[t[at.DaysFormat],t[at.DaysStandalone]],o=ii(n,r);return ii(o,e)}function bu(i,r,e){let t=Yt(i),n=[t[at.MonthsFormat],t[at.MonthsStandalone]],o=ii(n,r);return ii(o,e)}function vu(i,r){let t=Yt(i)[at.Eras];return ii(t,r)}function Co(i,r){let e=Yt(i);return ii(e[at.DateFormat],r)}function xo(i,r){let e=Yt(i);return ii(e[at.TimeFormat],r)}function Do(i,r){let t=Yt(i)[at.DateTimeFormat];return ii(t,r)}function Oi(i,r){let e=Yt(i),t=e[at.NumberSymbols][r];if(typeof t>"u"){if(r===jt.CurrencyDecimal)return e[at.NumberSymbols][jt.Decimal];if(r===jt.CurrencyGroup)return e[at.NumberSymbols][jt.Group]}return t}function yu(i,r){return Yt(i)[at.NumberFormats][r]}function wu(i){if(!i[at.ExtraData])throw new ne(2303,!1)}function Cu(i){let r=Yt(i);return wu(r),(r[at.ExtraData][2]||[]).map(t=>typeof t=="string"?Sc(t):[Sc(t[0]),Sc(t[1])])}function xu(i,r,e){let t=Yt(i);wu(t);let n=[t[at.ExtraData][0],t[at.ExtraData][1]],o=ii(n,r)||[];return ii(o,e)||[]}function ii(i,r){for(let e=r;e>-1;e--)if(typeof i[e]<"u")return i[e];throw new ne(2304,!1)}function Sc(i){let[r,e]=i.split(":");return{hours:+r,minutes:+e}}var $b=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Qa={},Gb=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Du(i,r,e,t){let n=ev(i);r=Yi(e,r)||r;let a=[],s;for(;r;)if(s=Gb.exec(r),s){a=a.concat(s.slice(1));let h=a.pop();if(!h)break;r=h}else{a.push(r);break}let c=n.getTimezoneOffset();t&&(c=Su(t,c),n=Jb(n,t));let d="";return a.forEach(h=>{let p=Zb(h);d+=p?p(n,e,c):h==="''"?"'":h.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function ts(i,r,e){let t=new Date(0);return t.setFullYear(i,r,e),t.setHours(0,0,0),t}function Yi(i,r){let e=fu(i);if(Qa[e]??={},Qa[e][r])return Qa[e][r];let t="";switch(r){case"shortDate":t=Co(i,Bt.Short);break;case"mediumDate":t=Co(i,Bt.Medium);break;case"longDate":t=Co(i,Bt.Long);break;case"fullDate":t=Co(i,Bt.Full);break;case"shortTime":t=xo(i,Bt.Short);break;case"mediumTime":t=xo(i,Bt.Medium);break;case"longTime":t=xo(i,Bt.Long);break;case"fullTime":t=xo(i,Bt.Full);break;case"short":let n=Yi(i,"shortTime"),o=Yi(i,"shortDate");t=Za(Do(i,Bt.Short),[n,o]);break;case"medium":let a=Yi(i,"mediumTime"),s=Yi(i,"mediumDate");t=Za(Do(i,Bt.Medium),[a,s]);break;case"long":let c=Yi(i,"longTime"),d=Yi(i,"longDate");t=Za(Do(i,Bt.Long),[c,d]);break;case"full":let h=Yi(i,"fullTime"),p=Yi(i,"fullDate");t=Za(Do(i,Bt.Full),[h,p]);break}return t&&(Qa[e][r]=t),t}function Za(i,r){return r&&(i=i.replace(/\{([^}]+)}/g,function(e,t){return r!=null&&t in r?r[t]:e})),i}function hi(i,r,e="-",t,n){let o="";(i<0||n&&i<=0)&&(n?i=-i+1:(i=-i,o=e));let a=String(i);for(;a.length<r;)a="0"+a;return t&&(a=a.slice(a.length-r)),o+a}function Wb(i,r){return hi(i,3).substring(0,r)}function st(i,r,e=0,t=!1,n=!1){return function(o,a){let s=qb(i,o);if((e>0||s>-e)&&(s+=e),i===3)s===0&&e===-12&&(s=12);else if(i===6)return Wb(s,r);let c=Oi(a,jt.MinusSign);return hi(s,r,c,t,n)}}function qb(i,r){switch(i){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new ne(2301,!1)}}function Ue(i,r,e=xt.Format,t=!1){return function(n,o){return Yb(n,o,i,r,e,t)}}function Yb(i,r,e,t,n,o){switch(e){case 2:return bu(r,n,t)[i.getMonth()];case 1:return _u(r,n,t)[i.getDay()];case 0:let a=i.getHours(),s=i.getMinutes();if(o){let d=Cu(r),h=xu(r,n,t),p=d.findIndex(w=>{if(Array.isArray(w)){let[A,U]=w,ae=a>=A.hours&&s>=A.minutes,F=a<U.hours||a===U.hours&&s<U.minutes;if(A.hours<U.hours){if(ae&&F)return!0}else if(ae||F)return!0}else if(w.hours===a&&w.minutes===s)return!0;return!1});if(p!==-1)return h[p]}return gu(r,n,t)[a<12?0:1];case 3:return vu(r,t)[i.getFullYear()<=0?0:1];default:let c=e;throw new ne(2302,!1)}}function Xa(i){return function(r,e,t){let n=-1*t,o=Oi(e,jt.MinusSign),a=n>0?Math.floor(n/60):Math.ceil(n/60);switch(i){case 0:return(n>=0?"+":"")+hi(a,2,o)+hi(Math.abs(n%60),2,o);case 1:return"GMT"+(n>=0?"+":"")+hi(a,1,o);case 2:return"GMT"+(n>=0?"+":"")+hi(a,2,o)+":"+hi(Math.abs(n%60),2,o);case 3:return t===0?"Z":(n>=0?"+":"")+hi(a,2,o)+":"+hi(Math.abs(n%60),2,o);default:throw new ne(2310,!1)}}}var Kb=0,es=4;function Qb(i){let r=ts(i,Kb,1).getDay();return ts(i,0,1+(r<=es?es:es+7)-r)}function ku(i){let r=i.getDay(),e=r===0?-3:es-r;return ts(i.getFullYear(),i.getMonth(),i.getDate()+e)}function Ec(i,r=!1){return function(e,t){let n;if(r){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();n=1+Math.floor((a+o)/7)}else{let o=ku(e),a=Qb(o.getFullYear()),s=o.getTime()-a.getTime();n=1+Math.round(s/6048e5)}return hi(n,i,Oi(t,jt.MinusSign))}}function Ja(i,r=!1){return function(e,t){let o=ku(e).getFullYear();return hi(o,i,Oi(t,jt.MinusSign),r)}}var Mc={};function Zb(i){if(Mc[i])return Mc[i];let r;switch(i){case"G":case"GG":case"GGG":r=Ue(3,Fe.Abbreviated);break;case"GGGG":r=Ue(3,Fe.Wide);break;case"GGGGG":r=Ue(3,Fe.Narrow);break;case"y":r=st(0,1,0,!1,!0);break;case"yy":r=st(0,2,0,!0,!0);break;case"yyy":r=st(0,3,0,!1,!0);break;case"yyyy":r=st(0,4,0,!1,!0);break;case"Y":r=Ja(1);break;case"YY":r=Ja(2,!0);break;case"YYY":r=Ja(3);break;case"YYYY":r=Ja(4);break;case"M":case"L":r=st(1,1,1);break;case"MM":case"LL":r=st(1,2,1);break;case"MMM":r=Ue(2,Fe.Abbreviated);break;case"MMMM":r=Ue(2,Fe.Wide);break;case"MMMMM":r=Ue(2,Fe.Narrow);break;case"LLL":r=Ue(2,Fe.Abbreviated,xt.Standalone);break;case"LLLL":r=Ue(2,Fe.Wide,xt.Standalone);break;case"LLLLL":r=Ue(2,Fe.Narrow,xt.Standalone);break;case"w":r=Ec(1);break;case"ww":r=Ec(2);break;case"W":r=Ec(1,!0);break;case"d":r=st(2,1);break;case"dd":r=st(2,2);break;case"c":case"cc":r=st(7,1);break;case"ccc":r=Ue(1,Fe.Abbreviated,xt.Standalone);break;case"cccc":r=Ue(1,Fe.Wide,xt.Standalone);break;case"ccccc":r=Ue(1,Fe.Narrow,xt.Standalone);break;case"cccccc":r=Ue(1,Fe.Short,xt.Standalone);break;case"E":case"EE":case"EEE":r=Ue(1,Fe.Abbreviated);break;case"EEEE":r=Ue(1,Fe.Wide);break;case"EEEEE":r=Ue(1,Fe.Narrow);break;case"EEEEEE":r=Ue(1,Fe.Short);break;case"a":case"aa":case"aaa":r=Ue(0,Fe.Abbreviated);break;case"aaaa":r=Ue(0,Fe.Wide);break;case"aaaaa":r=Ue(0,Fe.Narrow);break;case"b":case"bb":case"bbb":r=Ue(0,Fe.Abbreviated,xt.Standalone,!0);break;case"bbbb":r=Ue(0,Fe.Wide,xt.Standalone,!0);break;case"bbbbb":r=Ue(0,Fe.Narrow,xt.Standalone,!0);break;case"B":case"BB":case"BBB":r=Ue(0,Fe.Abbreviated,xt.Format,!0);break;case"BBBB":r=Ue(0,Fe.Wide,xt.Format,!0);break;case"BBBBB":r=Ue(0,Fe.Narrow,xt.Format,!0);break;case"h":r=st(3,1,-12);break;case"hh":r=st(3,2,-12);break;case"H":r=st(3,1);break;case"HH":r=st(3,2);break;case"m":r=st(4,1);break;case"mm":r=st(4,2);break;case"s":r=st(5,1);break;case"ss":r=st(5,2);break;case"S":r=st(6,1);break;case"SS":r=st(6,2);break;case"SSS":r=st(6,3);break;case"Z":case"ZZ":case"ZZZ":r=Xa(0);break;case"ZZZZZ":r=Xa(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":r=Xa(1);break;case"OOOO":case"ZZZZ":case"zzzz":r=Xa(2);break;default:return null}return Mc[i]=r,r}function Su(i,r){i=i.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+i)/6e4;return isNaN(e)?r:e}function Xb(i,r){return i=new Date(i.getTime()),i.setMinutes(i.getMinutes()+r),i}function Jb(i,r,e){let n=i.getTimezoneOffset(),o=Su(r,n);return Xb(i,-1*(o-n))}function ev(i){if(mu(i))return i;if(typeof i=="number"&&!isNaN(i))return new Date(i);if(typeof i=="string"){if(i=i.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(i)){let[n,o=1,a=1]=i.split("-").map(s=>+s);return ts(n,o-1,a)}let e=parseFloat(i);if(!isNaN(i-e))return new Date(e);let t;if(t=i.match($b))return tv(t)}let r=new Date(i);if(!mu(r))throw new ne(2311,!1);return r}function tv(i){let r=new Date(0),e=0,t=0,n=i[8]?r.setUTCFullYear:r.setFullYear,o=i[8]?r.setUTCHours:r.setHours;i[9]&&(e=Number(i[9]+i[10]),t=Number(i[9]+i[11])),n.call(r,Number(i[1]),Number(i[2])-1,Number(i[3]));let a=Number(i[4]||0)-e,s=Number(i[5]||0)-t,c=Number(i[6]||0),d=Math.floor(parseFloat("0."+(i[7]||0))*1e3);return o.call(r,a,s,c,d),r}function mu(i){return i instanceof Date&&!isNaN(i.valueOf())}var iv=/^(\d+)?\.((\d+)(-(\d+))?)?$/,uu=22,is=".",ko="0",nv=";",rv=",",Rc="#";function ov(i,r,e,t,n,o,a=!1){let s="",c=!1;if(!isFinite(i))s=Oi(e,jt.Infinity);else{let d=lv(i);a&&(d=sv(d));let h=r.minInt,p=r.minFrac,w=r.maxFrac;if(o){let ce=o.match(iv);if(ce===null)throw new ne(2306,!1);let Re=ce[1],Pe=ce[3],Gt=ce[5];Re!=null&&(h=Ic(Re)),Pe!=null&&(p=Ic(Pe)),Gt!=null?w=Ic(Gt):Pe!=null&&p>w&&(w=p)}cv(d,p,w);let A=d.digits,U=d.integerLen,ae=d.exponent,F=[];for(c=A.every(ce=>!ce);U<h;U++)A.unshift(0);for(;U<0;U++)A.unshift(0);U>0?F=A.splice(U,A.length):(F=A,A=[0]);let ee=[];for(A.length>=r.lgSize&&ee.unshift(A.splice(-r.lgSize,A.length).join(""));A.length>r.gSize;)ee.unshift(A.splice(-r.gSize,A.length).join(""));A.length&&ee.unshift(A.join("")),s=ee.join(Oi(e,t)),F.length&&(s+=Oi(e,n)+F.join("")),ae&&(s+=Oi(e,jt.Exponential)+"+"+ae)}return i<0&&!c?s=r.negPre+s+r.negSuf:s=r.posPre+s+r.posSuf,s}function Eu(i,r,e){let t=yu(r,Fc.Decimal),n=av(t,Oi(r,jt.MinusSign));return ov(i,n,r,jt.Group,jt.Decimal,e)}function av(i,r="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},t=i.split(nv),n=t[0],o=t[1],a=n.indexOf(is)!==-1?n.split(is):[n.substring(0,n.lastIndexOf(ko)+1),n.substring(n.lastIndexOf(ko)+1)],s=a[0],c=a[1]||"";e.posPre=s.substring(0,s.indexOf(Rc));for(let h=0;h<c.length;h++){let p=c.charAt(h);p===ko?e.minFrac=e.maxFrac=h+1:p===Rc?e.maxFrac=h+1:e.posSuf+=p}let d=s.split(rv);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,o){let h=n.length-e.posPre.length-e.posSuf.length,p=o.indexOf(Rc);e.negPre=o.substring(0,p).replace(/'/g,""),e.negSuf=o.slice(p+h).replace(/'/g,"")}else e.negPre=r+e.posPre,e.negSuf=e.posSuf;return e}function sv(i){if(i.digits[0]===0)return i;let r=i.digits.length-i.integerLen;return i.exponent?i.exponent+=2:(r===0?i.digits.push(0,0):r===1&&i.digits.push(0),i.integerLen+=2),i}function lv(i){let r=Math.abs(i)+"",e=0,t,n,o,a,s;for((n=r.indexOf(is))>-1&&(r=r.replace(is,"")),(o=r.search(/e/i))>0?(n<0&&(n=o),n+=+r.slice(o+1),r=r.substring(0,o)):n<0&&(n=r.length),o=0;r.charAt(o)===ko;o++);if(o===(s=r.length))t=[0],n=1;else{for(s--;r.charAt(s)===ko;)s--;for(n-=o,t=[],a=0;o<=s;o++,a++)t[a]=Number(r.charAt(o))}return n>uu&&(t=t.splice(0,uu-1),e=n-1,n=1),{digits:t,exponent:e,integerLen:n}}function cv(i,r,e){if(r>e)throw new ne(2307,!1);let t=i.digits,n=t.length-i.integerLen,o=Math.min(Math.max(r,n),e),a=o+i.integerLen,s=t[a];if(a>0){t.splice(Math.max(i.integerLen,a));for(let p=a;p<t.length;p++)t[p]=0}else{n=Math.max(0,n),i.integerLen=1,t.length=Math.max(1,a=o+1),t[0]=0;for(let p=1;p<a;p++)t[p]=0}if(s>=5)if(a-1<0){for(let p=0;p>a;p--)t.unshift(0),i.integerLen++;t.unshift(1),i.integerLen++}else t[a-1]++;for(;n<Math.max(0,o);n++)t.push(0);let c=o!==0,d=r+i.integerLen,h=t.reduceRight(function(p,w,A,U){return w=w+p,U[A]=w<10?w:w-10,c&&(U[A]===0&&A>=d?U.pop():c=!1),w>=10?1:0},0);h&&(t.unshift(h),i.integerLen++)}function Ic(i){let r=parseInt(i);if(isNaN(r))throw new ne(2305,!1);return r}var Tc=/\s+/,pu=[],Pc=(()=>{class i{_ngEl;_renderer;initialClasses=pu;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(Tc):pu}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Tc):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let n=this.stateMap.get(e);n!==void 0?(n.enabled!==t&&(n.changed=!0,n.enabled=t),n.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],n=e[1];n.changed?(this._toggleClass(t,n.enabled),n.changed=!1):n.touched||(n.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),n.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(Tc).forEach(n=>{t?this._renderer.addClass(this._ngEl.nativeElement,n):this._renderer.removeClass(this._ngEl.nativeElement,n)})}static \u0275fac=function(t){return new(t||i)(L(M),L(fe))};static \u0275dir=v({type:i,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return i})();var Lc=(()=>{class i{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,n){this._ngEl=e,this._differs=t,this._renderer=n}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[n,o]=e.split("."),a=n.indexOf("-")===-1?void 0:Un.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,n,o?`${t}${o}`:t,a):this._renderer.removeStyle(this._ngEl.nativeElement,n,a)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static \u0275fac=function(t){return new(t||i)(L(M),L(Ga),L(fe))};static \u0275dir=v({type:i,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return i})(),Hn=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(q);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let n=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,n,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,n)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,n):!1,get:(e,t,n)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,n)}})}static \u0275fac=function(t){return new(t||i)(L(Ke))};static \u0275dir=v({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[me]})}return i})();function Nc(i,r){return new ne(2100,!1)}var Ac=class{createSubscription(r,e,t){return De(()=>r.subscribe({next:e,error:t}))}dispose(r){De(()=>r.unsubscribe())}},Oc=class{createSubscription(r,e,t){return r.then(n=>e?.(n),n=>t?.(n)),{unsubscribe:()=>{e=null,t=null}}}dispose(r){r.unsubscribe()}},dv=new Oc,hv=new Ac,Bc=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=l(yr);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(Dr(e))return dv;if(Km(e))return hv;throw Nc(i,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||i)(L(J,16))};static \u0275pipe=Ua({name:"async",type:i,pure:!1})}return i})();var mv="mediumDate",Mu=new _(""),Ru=new _(""),uv=(()=>{class i{locale;defaultTimezone;defaultOptions;constructor(e,t,n){this.locale=e,this.defaultTimezone=t,this.defaultOptions=n}transform(e,t,n,o){if(e==null||e===""||e!==e)return null;try{let a=t??this.defaultOptions?.dateFormat??mv,s=n??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Du(e,a,o||this.locale,s)}catch(a){throw Nc(i,a.message)}}static \u0275fac=function(t){return new(t||i)(L(xc,16),L(Mu,24),L(Ru,24))};static \u0275pipe=Ua({name:"date",type:i,pure:!0})}return i})();var pv=(()=>{class i{_locale;constructor(e){this._locale=e}transform(e,t,n){if(!fv(e))return null;n||=this._locale;try{let o=gv(e);return Eu(o,n,t)}catch(o){throw Nc(i,o.message)}}static \u0275fac=function(t){return new(t||i)(L(xc,16))};static \u0275pipe=Ua({name:"number",type:i,pure:!0})}return i})();function fv(i){return!(i==null||i===""||i!==i)}function gv(i){if(typeof i=="string"&&!isNaN(Number(i)-parseFloat(i)))return Number(i);if(typeof i!="number")throw new ne(2309,!1);return i}var Mr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({})}return i})();function So(i,r){r=encodeURIComponent(r);for(let e of i.split(";")){let t=e.indexOf("="),[n,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(n.trim()===r)return decodeURIComponent(o)}return null}var $n=class{};var Vc="browser";function Au(i){return i===Vc}var zc=(()=>{class i{static \u0275prov=y({token:i,providedIn:"root",factory:()=>new jc(l($),window)})}return i})(),jc=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r,e){this.window.scrollTo(re(g({},e),{left:r[0],top:r[1]}))}scrollToAnchor(r,e){let t=bv(this.document,r);t&&(this.scrollToElement(t,e),t.focus({preventScroll:!0}))}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch(e){console.warn(Bn(2400,!1))}}scrollToElement(r,e){let t=r.getBoundingClientRect(),n=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(re(g({},e),{left:n-a[0],top:o-a[1]}))}};function bv(i,r){let e=i.getElementById(r)||i.getElementsByName(r)[0];if(e)return e;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let t=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=t.currentNode;for(;n;){let o=n.shadowRoot;if(o){let a=o.getElementById(r)||o.querySelector(`[name="${r}"]`);if(a)return a}n=t.nextNode()}}return null}var Ou=i=>i.src,vv=new _("",{factory:()=>Ou});var Iu=/^((\s*\d+w\s*(,|$)){1,})$/;var yv=[1,2],wv=640;var Cv=1920,xv=1080;var EM=(()=>{class i{imageLoader=l(vv);config=Dv(l(fc));renderer=l(fe);imgElement=l(M).nativeElement;injector=l(q);destroyRef=l(mn);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Ba("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&Iu.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let t=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let t=e;this.loaderParams&&(t.loaderParams=this.loaderParams);let n=this.getAspectRatio();return n!==null&&t.width&&(t.height=Math.round(t.width/n)),this.imageLoader(t)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=Iu.test(this.ngSrcset);return this.ngSrcset.split(",").filter(n=>n!=="").map(n=>{n=n.trim();let o=e?parseFloat(n):parseFloat(n)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${n}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,t=e;return this.sizes?.trim()==="100vw"&&(t=e.filter(o=>o>=wv)),t.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let t=this.getRewrittenSrc();this.setHostAttribute("src",t);let n;return this.ngSrcset?n=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(n=this.getAutomaticSrcset()),n&&this.setHostAttribute("srcset",n),n}getFixedSrcset(){return yv.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Cv||this.height>xv),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Ou&&!e}generatePlaceholder(e){let{placeholderResolution:t}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:t,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let t=()=>{let a=this.injector.get(J);n(),o(),this.placeholder=!1,a.markForCheck()},n=this.renderer.listen(e,"load",t),o=this.renderer.listen(e,"error",t);this.destroyRef.onDestroy(()=>{n(),o()}),kv(e,t)}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(t,n){t&2&&ci("position",n.fill?"absolute":null)("width",n.fill?"100%":null)("height",n.fill?"100%":null)("inset",n.fill?"0":null)("background-size",n.placeholder?"cover":null)("background-position",n.placeholder?"50% 50%":null)("background-repeat",n.placeholder?"no-repeat":null)("background-image",n.placeholder?n.generatePlaceholder(n.placeholder):null)("filter",n.placeholder&&n.shouldBlurPlaceholder(n.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Sv],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",Ye],height:[2,"height","height",Ye],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",D],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",D],fill:[2,"fill","fill",D],placeholder:[2,"placeholder","placeholder",Ev],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[me]})}return i})();function Dv(i){let r={};return i.breakpoints&&(r.breakpoints=i.breakpoints.sort((e,t)=>e-t)),Object.assign({},Nm,i,r)}function kv(i,r){i.complete&&i.naturalWidth&&r()}function Sv(i){return typeof i=="string"?i:un(i)}function Ev(i){return typeof i=="string"&&i!=="true"&&i!=="false"&&i!==""?i:D(i)}var Eo=class{_doc;constructor(r){this._doc=r}manager},rs=(()=>{class i extends Eo{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n,o){return e.addEventListener(t,n,o),()=>this.removeEventListener(e,t,n,o)}removeEventListener(e,t,n,o){return e.removeEventListener(t,n,o)}static \u0275fac=function(t){return new(t||i)(Z($))};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})(),ss=new _(""),Wc=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let n=e.filter(a=>!(a instanceof rs));this._plugins=n.slice().reverse();let o=e.find(a=>a instanceof rs);o&&this._plugins.push(o)}addEventListener(e,t,n,o){return this._findPluginFor(t).addEventListener(e,t,n,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new ne(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(Z(ss),Z(H))};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})(),Hc="ng-app-id";function Fu(i){for(let r of i)r.remove()}function Pu(i,r){let e=r.createElement("style");return e.textContent=i,e}function Mv(i,r,e,t){let n=i.head?.querySelectorAll(`style[${Hc}="${r}"],link[${Hc}="${r}"]`);if(n)for(let o of n)o.removeAttribute(Hc),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Gc(i,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var qc=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,n,o={}){this.doc=e,this.appId=t,this.nonce=n,Mv(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let n of e)this.addUsage(n,this.inline,Pu);t?.forEach(n=>this.addUsage(n,this.external,Gc))}removeStyles(e,t){for(let n of e)this.removeUsage(n,this.inline);t?.forEach(n=>this.removeUsage(n,this.external))}addUsage(e,t,n){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,n(e,this.doc)))})}removeUsage(e,t){let n=t.get(e);n&&(n.usage--,n.usage<=0&&(Fu(n.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Fu(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:n}]of this.inline)n.push(this.addElement(e,Pu(t,this.doc)));for(let[t,{elements:n}]of this.external)n.push(this.addElement(e,Gc(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(Z($),Z(zn),Z(Cr,8),Z(wr))};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})(),$c={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Yc=/%COMP%/g;var Nu="%COMP%",Rv=`_nghost-${Nu}`,Iv=`_ngcontent-${Nu}`,Tv=!0,Av=new _("",{factory:()=>Tv});function Ov(i){return Iv.replace(Yc,i)}function Fv(i){return Rv.replace(Yc,i)}function Bu(i,r){return r.map(e=>e.replace(Yc,i))}var Kc=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,n,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Mo(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let n=this.getOrCreateRenderer(e,t);return n instanceof as?n.applyToHost(e):n instanceof Ro&&n.applyStyles(),n}getOrCreateRenderer(e,t){let n=this.rendererByCompId,o=n.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,p=this.tracingService;switch(t.encapsulation){case La.Emulated:o=new as(c,d,t,this.appId,h,a,s,p);break;case La.ShadowDom:return new os(c,e,t,a,s,this.nonce,p,d);case La.ExperimentalIsolatedShadowDom:return new os(c,e,t,a,s,this.nonce,p);default:o=new Ro(c,d,t,h,a,s,p);break}n.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(Z(Wc),Z(qc),Z(zn),Z(Av),Z($),Z(H),Z(Cr),Z(Na,8))};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})(),Mo=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,n){this.eventManager=r,this.doc=e,this.ngZone=t,this.tracingService=n}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS($c[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Lu(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(Lu(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){e.remove()}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new ne(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,n){if(n){e=n+":"+e;let o=$c[n];o?r.setAttributeNS(o,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let n=$c[t];n?r.removeAttributeNS(n,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,n){n&(Un.DashCase|Un.Important)?r.style.setProperty(e,t,n&Un.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&Un.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,n){if(typeof r=="string"&&(r=ei().getGlobalEventTarget(this.doc,r),!r))throw new ne(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,n)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Lu(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var os=class extends Mo{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,t,n,o,a,s,c){super(r,n,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Bu(t.id,d);for(let p of d){let w=document.createElement("style");a&&w.setAttribute("nonce",a),w.textContent=p,this.shadowRoot.appendChild(w)}let h=t.getExternalStyles?.();if(h)for(let p of h){let w=Gc(p,n);a&&w.setAttribute("nonce",a),this.shadowRoot.appendChild(w)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ro=class extends Mo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,n,o,a,s,c){super(r,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=n;let d=t.styles;this.styles=c?Bu(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Wm.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},as=class extends Ro{contentAttr;hostAttr;constructor(r,e,t,n,o,a,s,c){let d=n+"-"+t.id;super(r,e,t,o,a,s,c,d),this.contentAttr=Ov(d),this.hostAttr=Fv(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}};var ls=class i extends wo{supportsDOMEvents=!0;static makeCurrent(){Dc(new i)}onAndCancel(r,e,t,n){return r.addEventListener(e,t,n),()=>{r.removeEventListener(e,t,n)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Lv();return e==null?null:Nv(e)}resetBaseElement(){Io=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return So(document.cookie,r)}},Io=null;function Lv(){return Io=Io||document.head.querySelector("base"),Io?Io.getAttribute("href"):null}function Nv(i){return new URL(i,document.baseURI).pathname}var Bv=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})(),ju=["alt","control","meta","shift"],jv={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Vv={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Vu=(()=>{class i extends Eo{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,n,o){let a=i.parseEventName(t),s=i.eventCallback(a.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ei().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),n=t.shift();if(t.length===0||!(n==="keydown"||n==="keyup"))return null;let o=i._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),ju.forEach(d=>{let h=t.indexOf(d);h>-1&&(t.splice(h,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=n,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let n=jv[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(n=e.code,o="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),ju.forEach(a=>{if(a!==n){let s=Vv[a];s(e)&&(o+=a+".")}}),o+=n,o===t)}static eventCallback(e,t,n){return o=>{i.matchEventFullKeyCode(o,e)&&n.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(Z($))};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})();function zv(i,r,e){return Oe(this,null,function*(){let t=g({rootComponent:i},Uv(r,e));return ou(t)})}function Uv(i,r){return{platformRef:r?.platformRef,appProviders:[...qv,...i?.providers??[]],platformProviders:Wv}}function Hv(){ls.makeCurrent()}function $v(){return new jn}function Gv(){return Pm(document),document}var Wv=[{provide:wr,useValue:Vc},{provide:Lm,useValue:Hv,multi:!0},{provide:$,useFactory:Gv}];var qv=[{provide:Am,useValue:"root"},{provide:jn,useFactory:$v},{provide:ss,useClass:rs,multi:!0},{provide:ss,useClass:Vu,multi:!0},Kc,qc,Wc,{provide:ft,useExisting:Kc},{provide:$n,useClass:Bv},[]];var Vt=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let n=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(n,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let t=r.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(r.name,e);let n=(r.op==="a"?this.headers.get(e):void 0)||[];n.push(...t),this.headers.set(e,n);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let t=r.toLowerCase();this.maybeSetNormalizedName(r,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(r,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),n=r.toLowerCase();this.headers.set(n,t),this.maybeSetNormalizedName(r,n)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var ds=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},hs=class{encodeKey(r){return zu(r)}encodeValue(r){return zu(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Yv(i,r){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(n=>{let o=n.indexOf("="),[a,s]=o==-1?[r.decodeKey(n),""]:[r.decodeKey(n.slice(0,o)),r.decodeValue(n.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var Kv=/%(\d[a-f0-9])/gi,Qv={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function zu(i){return encodeURIComponent(i).replace(Kv,(r,e)=>Qv[e]??r)}function cs(i){return`${i}`}var Se=class i{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new hs,r.fromString){if(r.fromObject)throw new ne(2805,!1);this.map=Yv(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let t=r.fromObject[e],n=Array.isArray(t)?t.map(cs):[cs(t)];this.map.set(e,n)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(t=>{let n=r[t];Array.isArray(n)?n.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:n,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(cs(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let t=this.map.get(r.param)||[],n=t.indexOf(cs(r.value));n!==-1&&t.splice(n,1),t.length>0?this.map.set(r.param,t):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Zv(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Uu(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Hu(i){return typeof Blob<"u"&&i instanceof Blob}function $u(i){return typeof FormData<"u"&&i instanceof FormData}function Xv(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Gu="Content-Type",Wu="Accept",qu="text/plain",Yu="application/json",Jv=`${Yu}, ${qu}, */*`,Rr=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,t,n){this.url=e,this.method=r.toUpperCase();let o;if(Zv(this.method)||n?(this.body=t!==void 0?t:null,o=n):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new ne(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Vt,this.context??=new ds,!this.params)this.params=new Se,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Uu(this.body)||Hu(this.body)||$u(this.body)||Xv(this.body)?this.body:this.body instanceof Se?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||$u(this.body)?null:Hu(this.body)?this.body.type||null:Uu(this.body)?null:typeof this.body=="string"?qu:this.body instanceof Se?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Yu:null}clone(r={}){let e=r.method||this.method,t=r.url||this.url,n=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,c=r.mode||this.mode,d=r.redirect||this.redirect,h=r.credentials||this.credentials,p=r.referrer||this.referrer,w=r.integrity||this.integrity,A=r.referrerPolicy||this.referrerPolicy,U=r.transferCache??this.transferCache,ae=r.timeout??this.timeout,F=r.body!==void 0?r.body:this.body,ee=r.withCredentials??this.withCredentials,ce=r.reportProgress??this.reportProgress,Re=r.headers||this.headers,Pe=r.params||this.params,Gt=r.context??this.context;return r.setHeaders!==void 0&&(Re=Object.keys(r.setHeaders).reduce((Di,ki)=>Di.set(ki,r.setHeaders[ki]),Re)),r.setParams&&(Pe=Object.keys(r.setParams).reduce((Di,ki)=>Di.set(ki,r.setParams[ki]),Pe)),new i(e,t,F,{params:Pe,headers:Re,context:Gt,reportProgress:ce,responseType:n,withCredentials:ee,transferCache:U,keepalive:o,cache:s,priority:a,timeout:ae,mode:c,redirect:d,credentials:h,referrer:p,integrity:w,referrerPolicy:A})}},Gn=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(Gn||{}),Tr=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,t="OK"){this.headers=r.headers||new Vt,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||t,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},ms=class i extends Tr{constructor(r={}){super(r)}type=Gn.ResponseHeader;clone(r={}){return new i({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},To=class i extends Tr{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Gn.Response;clone(r={}){return new i({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},Ir=class extends Tr{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},ey=200,ty=204;var iy=new _("");var ny=/^\)\]\}',?\n/;var Zc=(()=>{class i{xhrFactory;tracingService=l(Na,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new ne(-2800,!1);let t=this.xhrFactory;return Y(null).pipe(je(()=>new _t(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((F,ee)=>a.setRequestHeader(F,ee.join(","))),e.headers.has(Wu)||a.setRequestHeader(Wu,Jv),!e.headers.has(Gu)){let F=e.detectContentTypeHeader();F!==null&&a.setRequestHeader(Gu,F)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let F=e.responseType.toLowerCase();a.responseType=F!=="json"?F:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let F=a.statusText||"OK",ee=new Vt(a.getAllResponseHeaders()),ce=a.responseURL||e.url;return c=new ms({headers:ee,status:a.status,statusText:F,url:ce}),c},h=this.maybePropagateTrace(()=>{let{headers:F,status:ee,statusText:ce,url:Re}=d(),Pe=null;ee!==ty&&(Pe=typeof a.response>"u"?a.responseText:a.response),ee===0&&(ee=Pe?ey:0);let Gt=ee>=200&&ee<300;if(e.responseType==="json"&&typeof Pe=="string"){let Di=Pe;Pe=Pe.replace(ny,"");try{Pe=Pe!==""?JSON.parse(Pe):null}catch(ki){Pe=Di,Gt&&(Gt=!1,Pe={error:ki,text:Pe})}}Gt?(o.next(new To({body:Pe,headers:F,status:ee,statusText:ce,url:Re||void 0})),o.complete()):o.error(new Ir({error:Pe,headers:F,status:ee,statusText:ce,url:Re||void 0}))}),p=this.maybePropagateTrace(F=>{let{url:ee}=d(),ce=new Ir({error:F,status:a.status||0,statusText:a.statusText||"Unknown Error",url:ee||void 0});o.error(ce)}),w=p;e.timeout&&(w=this.maybePropagateTrace(F=>{let{url:ee}=d(),ce=new Ir({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:ee||void 0});o.error(ce)}));let A=!1,U=this.maybePropagateTrace(F=>{A||(o.next(d()),A=!0);let ee={type:Gn.DownloadProgress,loaded:F.loaded};F.lengthComputable&&(ee.total=F.total),e.responseType==="text"&&a.responseText&&(ee.partialText=a.responseText),o.next(ee)}),ae=this.maybePropagateTrace(F=>{let ee={type:Gn.UploadProgress,loaded:F.loaded};F.lengthComputable&&(ee.total=F.total),o.next(ee)});return a.addEventListener("load",h),a.addEventListener("error",p),a.addEventListener("timeout",w),a.addEventListener("abort",p),e.reportProgress&&(a.addEventListener("progress",U),s!==null&&a.upload&&a.upload.addEventListener("progress",ae)),a.send(s),o.next({type:Gn.Sent}),()=>{a.removeEventListener("error",p),a.removeEventListener("abort",p),a.removeEventListener("load",h),a.removeEventListener("timeout",w),e.reportProgress&&(a.removeEventListener("progress",U),s!==null&&a.upload&&a.upload.removeEventListener("progress",ae)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||i)(Z($n))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ry(i,r){return r(i)}function oy(i,r,e){return(t,n)=>Rt(e,()=>r(t,o=>i(o,n)))}var Xc=new _("",{factory:()=>[]}),Ku=new _(""),Qu=new _("",{factory:()=>!0});var Jc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:function(t){let n=null;return t?n=new(t||i):n=Z(Zc),n},providedIn:"root"})}return i})();var us=(()=>{class i{backend;injector;chain=null;pendingTasks=l(Fm);contributeToStability=l(Qu);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Xc),...this.injector.get(Ku,[])]));this.chain=t.reduceRight((n,o)=>oy(n,o,this.injector),ry)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,n=>this.backend.handle(n)).pipe(_r(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(Z(Jc),Z(pt))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ed=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:function(t){let n=null;return t?n=new(t||i):n=Z(us),n},providedIn:"root"})}return i})();function Qc(i,r){return{body:r,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Fi=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,n={}){let o;if(e instanceof Rr)o=e;else{let c;n.headers instanceof Vt?c=n.headers:c=new Vt(n.headers);let d;n.params&&(n.params instanceof Se?d=n.params:d=new Se({fromObject:n.params})),o=new Rr(e,t,n.body!==void 0?n.body:null,{headers:c,context:n.context,params:d,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials,transferCache:n.transferCache,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,credentials:n.credentials,referrer:n.referrer,referrerPolicy:n.referrerPolicy,integrity:n.integrity,timeout:n.timeout})}let a=Y(o).pipe(Nn(c=>this.handler.handle(c)));if(e instanceof Rr||n.observe==="events")return a;let s=a.pipe(_e(c=>c instanceof To));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(te(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new ne(2806,!1);return c.body}));case"blob":return s.pipe(te(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new ne(2807,!1);return c.body}));case"text":return s.pipe(te(c=>{if(c.body!==null&&typeof c.body!="string")throw new ne(2808,!1);return c.body}));default:return s.pipe(te(c=>c.body))}case"response":return s;default:throw new ne(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Se().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,n={}){return this.request("PATCH",e,Qc(n,t))}post(e,t,n={}){return this.request("POST",e,Qc(n,t))}put(e,t,n={}){return this.request("PUT",e,Qc(n,t))}static \u0275fac=function(t){return new(t||i)(Z(ed))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ay=new _("",{factory:()=>!0}),sy="XSRF-TOKEN",ly=new _("",{factory:()=>sy}),cy="X-XSRF-TOKEN",dy=new _("",{factory:()=>cy}),hy=(()=>{class i{cookieName=l(ly);doc=l($);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=So(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Zu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:function(t){let n=null;return t?n=new(t||i):n=Z(hy),n},providedIn:"root"})}return i})();function my(i,r){if(!l(ay)||i.method==="GET"||i.method==="HEAD")return r(i);try{let n=l(qi).href,{origin:o}=new URL(n),{origin:a}=new URL(i.url,o);if(o!==a)return r(i)}catch(n){return r(i)}let e=l(Zu).getToken(),t=l(dy);return e!=null&&!i.headers.has(t)&&(i=i.clone({headers:i.headers.set(t,e)})),r(i)}var td=(function(i){return i[i.Interceptors=0]="Interceptors",i[i.LegacyInterceptors=1]="LegacyInterceptors",i[i.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",i[i.NoXsrfProtection=3]="NoXsrfProtection",i[i.JsonpSupport=4]="JsonpSupport",i[i.RequestsMadeViaParent=5]="RequestsMadeViaParent",i[i.Fetch=6]="Fetch",i})(td||{});function uy(i,r){return{\u0275kind:i,\u0275providers:r}}function py(...i){let r=[Fi,us,{provide:ed,useExisting:us},{provide:Jc,useFactory:()=>l(iy,{optional:!0})??l(Zc)},{provide:Xc,useValue:my,multi:!0}];for(let e of i)r.push(...e.\u0275providers);return _o(r)}function fy(i){return uy(td.Interceptors,i.map(r=>({provide:Xc,useValue:r,multi:!0})))}var Xu=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(Z($))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ao=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:function(t){let n=null;return t?n=new(t||i):n=Z(_y),n},providedIn:"root"})}return i})(),_y=(()=>{class i extends Ao{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case It.NONE:return t;case It.HTML:return xr(t,"HTML")?un(t):$m(this._doc,String(t)).toString();case It.STYLE:return xr(t,"Style")?un(t):t;case It.SCRIPT:if(xr(t,"Script"))return un(t);throw new ne(5200,!1);case It.URL:return xr(t,"URL")?un(t):Hm(String(t));case It.RESOURCE_URL:if(xr(t,"ResourceURL"))return un(t);throw new ne(5201,!1);default:throw new ne(5202,!1)}}bypassSecurityTrustHtml(e){return Bm(e)}bypassSecurityTrustStyle(e){return jm(e)}bypassSecurityTrustScript(e){return Vm(e)}bypassSecurityTrustUrl(e){return zm(e)}bypassSecurityTrustResourceUrl(e){return Um(e)}static \u0275fac=function(t){return new(t||i)(Z($))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var le="primary",$o=Symbol("RouteTitle"),ad=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function qn(i){return new ad(i)}function id(i,r,e){for(let t=0;t<i.length;t++){let n=i[t],o=r[t];if(n[0]===":")e[n.substring(1)]=o;else if(n!==o.path)return!1}return!0}function sp(i,r,e){let t=e.path.split("/"),n=t.indexOf("**");if(n===-1){if(t.length>i.length||e.pathMatch==="full"&&(r.hasChildren()||t.length<i.length))return null;let c={},d=i.slice(0,t.length);return id(t,d,c)?{consumed:d,posParams:c}:null}if(n!==t.lastIndexOf("**"))return null;let o=t.slice(0,n),a=t.slice(n+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let s={};return!id(o,i.slice(0,o.length),s)||!id(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function ys(i){return new Promise((r,e)=>{i.pipe(hn()).subscribe({next:t=>r(t),error:t=>e(t)})})}function by(i,r){if(i.length!==r.length)return!1;for(let e=0;e<i.length;++e)if(!Pi(i[e],r[e]))return!1;return!0}function Pi(i,r){let e=i?sd(i):void 0,t=r?sd(r):void 0;if(!e||!t||e.length!=t.length)return!1;let n;for(let o=0;o<e.length;o++)if(n=e[o],!lp(i[n],r[n]))return!1;return!0}function sd(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function lp(i,r){if(Array.isArray(i)&&Array.isArray(r)){if(i.length!==r.length)return!1;let e=[...i].sort(),t=[...r].sort();return e.every((n,o)=>t[o]===n)}else return i===r}function vy(i){return i.length>0?i[i.length-1]:null}function Kn(i){return fr(i)?i:Dr(i)?bt(Promise.resolve(i)):Y(i)}function cp(i){return fr(i)?ys(i):Promise.resolve(i)}var yy={exact:mp,subset:up},dp={exact:wy,subset:Cy,ignored:()=>!0},hp={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ld={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ep(i,r,e){return yy[e.paths](i.root,r.root,e.matrixParams)&&dp[e.queryParams](i.queryParams,r.queryParams)&&!(e.fragment==="exact"&&i.fragment!==r.fragment)}function wy(i,r){return Pi(i,r)}function mp(i,r,e){if(!Wn(i.segments,r.segments)||!_s(i.segments,r.segments,e)||i.numberOfChildren!==r.numberOfChildren)return!1;for(let t in r.children)if(!i.children[t]||!mp(i.children[t],r.children[t],e))return!1;return!0}function Cy(i,r){return Object.keys(r).length<=Object.keys(i).length&&Object.keys(r).every(e=>lp(i[e],r[e]))}function up(i,r,e){return pp(i,r,r.segments,e)}function pp(i,r,e,t){if(i.segments.length>e.length){let n=i.segments.slice(0,e.length);return!(!Wn(n,e)||r.hasChildren()||!_s(n,e,t))}else if(i.segments.length===e.length){if(!Wn(i.segments,e)||!_s(i.segments,e,t))return!1;for(let n in r.children)if(!i.children[n]||!up(i.children[n],r.children[n],t))return!1;return!0}else{let n=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!Wn(i.segments,n)||!_s(i.segments,n,t)||!i.children[le]?!1:pp(i.children[le],r,o,t)}}function _s(i,r,e){return r.every((t,n)=>dp[e](i[n].parameters,t.parameters))}var Zt=class{root;queryParams;fragment;_queryParamMap;constructor(r=new Ee([],{}),e={},t=null){this.root=r,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=qn(this.queryParams),this._queryParamMap}toString(){return ky.serialize(this)}},Ee=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return bs(this)}},gn=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=qn(this.parameters),this._parameterMap}toString(){return gp(this)}};function xy(i,r){return Wn(i,r)&&i.every((e,t)=>Pi(e.parameters,r[t].parameters))}function Wn(i,r){return i.length!==r.length?!1:i.every((e,t)=>e.path===r[t].path)}function Dy(i,r){let e=[];return Object.entries(i.children).forEach(([t,n])=>{t===le&&(e=e.concat(r(n,t)))}),Object.entries(i.children).forEach(([t,n])=>{t!==le&&(e=e.concat(r(n,t)))}),e}var vn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>new Qi,providedIn:"root"})}return i})(),Qi=class{parse(r){let e=new dd(r);return new Zt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Oo(r.root,!0)}`,t=My(r.queryParams),n=typeof r.fragment=="string"?`#${Sy(r.fragment)}`:"";return`${e}${t}${n}`}},ky=new Qi;function bs(i){return i.segments.map(r=>gp(r)).join("/")}function Oo(i,r){if(!i.hasChildren())return bs(i);if(r){let e=i.children[le]?Oo(i.children[le],!1):"",t=[];return Object.entries(i.children).forEach(([n,o])=>{n!==le&&t.push(`${n}:${Oo(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Dy(i,(t,n)=>n===le?[Oo(i.children[le],!1)]:[`${n}:${Oo(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[le]!=null?`${bs(i)}/${e[0]}`:`${bs(i)}/(${e.join("//")})`}}function fp(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function fs(i){return fp(i).replace(/%3B/gi,";")}function Sy(i){return encodeURI(i)}function cd(i){return fp(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function vs(i){return decodeURIComponent(i)}function tp(i){return vs(i.replace(/\+/g,"%20"))}function gp(i){return`${cd(i.path)}${Ey(i.parameters)}`}function Ey(i){return Object.entries(i).map(([r,e])=>`;${cd(r)}=${cd(e)}`).join("")}function My(i){let r=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(n=>`${fs(e)}=${fs(n)}`).join("&"):`${fs(e)}=${fs(t)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var Ry=/^[^\/()?;#]+/;function nd(i){let r=i.match(Ry);return r?r[0]:""}var Iy=/^[^\/()?;=#]+/;function Ty(i){let r=i.match(Iy);return r?r[0]:""}var Ay=/^[^=?&#]+/;function Oy(i){let r=i.match(Ay);return r?r[0]:""}var Fy=/^[^&#]+/;function Py(i){let r=i.match(Fy);return r?r[0]:""}var dd=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ee([],{}):new Ee([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new ne(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,r));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1,r)),(e.length>0||Object.keys(t).length>0)&&(n[le]=new Ee(e,t)),n}parseSegment(){let r=nd(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new ne(4009,!1);return this.capture(r),new gn(vs(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=Ty(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let n=nd(this.remaining);n&&(t=n,this.capture(t))}r[vs(e)]=vs(t)}parseQueryParam(r){let e=Oy(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Py(this.remaining);a&&(t=a,this.capture(t))}let n=tp(e),o=tp(t);if(r.hasOwnProperty(n)){let a=r[n];Array.isArray(a)||(a=[a],r[n]=a),a.push(o)}else r[n]=o}parseParens(r,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=nd(this.remaining),o=this.remaining[n.length];if(o!=="/"&&o!==")"&&o!==";")throw new ne(4010,!1);let a;n.indexOf(":")>-1?(a=n.slice(0,n.indexOf(":")),this.capture(a),this.capture(":")):r&&(a=le);let s=this.parseChildren(e+1);t[a??le]=Object.keys(s).length===1&&s[le]?s[le]:new Ee([],s),this.consumeOptional("//")}return t}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new ne(4011,!1)}};function _p(i){return i.segments.length>0?new Ee([],{[le]:i}):i}function bp(i){let r={};for(let[t,n]of Object.entries(i.children)){let o=bp(n);if(t===le&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))r[a]=s;else(o.segments.length>0||o.hasChildren())&&(r[t]=o)}let e=new Ee(i.segments,r);return Ly(e)}function Ly(i){if(i.numberOfChildren===1&&i.children[le]){let r=i.children[le];return new Ee(i.segments.concat(r.segments),r.children)}return i}function _n(i){return i instanceof Zt}function vp(i,r,e=null,t=null,n=new Qi){let o=yp(i);return wp(o,r,e,t,n)}function yp(i){let r;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new Ee(o.url,a);return o===i&&(r=s),s}let t=e(i.root),n=_p(t);return r??n}function wp(i,r,e,t,n){let o=i;for(;o.parent;)o=o.parent;if(r.length===0)return rd(o,o,o,e,t,n);let a=Ny(r);if(a.toRoot())return rd(o,o,new Ee([],{}),e,t,n);let s=By(a,o,i),c=s.processChildren?Po(s.segmentGroup,s.index,a.commands):xp(s.segmentGroup,s.index,a.commands);return rd(o,s.segmentGroup,c,e,t,n)}function ws(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function No(i){return typeof i=="object"&&i!=null&&i.outlets}function ip(i,r,e){i||="\u0275";let t=new Zt;return t.queryParams={[i]:r},e.parse(e.serialize(t)).queryParams[i]}function rd(i,r,e,t,n,o){let a={};for(let[d,h]of Object.entries(t??{}))a[d]=Array.isArray(h)?h.map(p=>ip(d,p,o)):ip(d,h,o);let s;i===r?s=e:s=Cp(i,r,e);let c=_p(bp(s));return new Zt(c,a,n)}function Cp(i,r,e){let t={};return Object.entries(i.children).forEach(([n,o])=>{o===r?t[n]=e:t[n]=Cp(o,r,e)}),new Ee(i.segments,t)}var Cs=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,t){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=t,r&&t.length>0&&ws(t[0]))throw new ne(4003,!1);let n=t.find(No);if(n&&n!==vy(t))throw new ne(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ny(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Cs(!0,0,i);let r=0,e=!1,t=i.reduce((n,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...n,{outlets:s}]}if(o.segmentPath)return[...n,o.segmentPath]}return typeof o!="string"?[...n,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?r++:s!=""&&n.push(s))}),n):[...n,o]},[]);return new Cs(e,r,t)}var Or=class{segmentGroup;processChildren;index;constructor(r,e,t){this.segmentGroup=r,this.processChildren=e,this.index=t}};function By(i,r,e){if(i.isAbsolute)return new Or(r,!0,0);if(!e)return new Or(r,!1,NaN);if(e.parent===null)return new Or(e,!0,0);let t=ws(i.commands[0])?0:1,n=e.segments.length-1+t;return jy(e,n,i.numberOfDoubleDots)}function jy(i,r,e){let t=i,n=r,o=e;for(;o>n;){if(o-=n,t=t.parent,!t)throw new ne(4005,!1);n=t.segments.length}return new Or(t,!1,n-o)}function Vy(i){return No(i[0])?i[0].outlets:{[le]:i}}function xp(i,r,e){if(i??=new Ee([],{}),i.segments.length===0&&i.hasChildren())return Po(i,r,e);let t=zy(i,r,e),n=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new Ee(i.segments.slice(0,t.pathIndex),{});return o.children[le]=new Ee(i.segments.slice(t.pathIndex),i.children),Po(o,0,n)}else return t.match&&n.length===0?new Ee(i.segments,{}):t.match&&!i.hasChildren()?hd(i,r,e):t.match?Po(i,0,n):hd(i,r,e)}function Po(i,r,e){if(e.length===0)return new Ee(i.segments,{});{let t=Vy(e),n={};if(Object.keys(t).some(o=>o!==le)&&i.children[le]&&i.numberOfChildren===1&&i.children[le].segments.length===0){let o=Po(i.children[le],r,e);return new Ee(i.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(n[o]=xp(i.children[o],r,a))}),Object.entries(i.children).forEach(([o,a])=>{t[o]===void 0&&(n[o]=a)}),new Ee(i.segments,n)}}function zy(i,r,e){let t=0,n=r,o={match:!1,pathIndex:0,commandIndex:0};for(;n<i.segments.length;){if(t>=e.length)return o;let a=i.segments[n],s=e[t];if(No(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(n>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!rp(c,d,a))return o;t+=2}else{if(!rp(c,{},a))return o;t++}n++}return{match:!0,pathIndex:n,commandIndex:t}}function hd(i,r,e){let t=i.segments.slice(0,r),n=0;for(;n<e.length;){let o=e[n];if(No(o)){let c=Uy(o.outlets);return new Ee(t,c)}if(n===0&&ws(e[0])){let c=i.segments[r];t.push(new gn(c.path,np(e[0]))),n++;continue}let a=No(o)?o.outlets[le]:`${o}`,s=n<e.length-1?e[n+1]:null;a&&s&&ws(s)?(t.push(new gn(a,np(s))),n+=2):(t.push(new gn(a,{})),n++)}return new Ee(t,{})}function Uy(i){let r={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(r[e]=hd(new Ee([],{}),0,t))}),r}function np(i){let r={};return Object.entries(i).forEach(([e,t])=>r[e]=`${t}`),r}function rp(i,r,e){return i==e.path&&Pi(r,e.parameters)}var Fr="imperative",ht=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(ht||{}),Xt=class{id;url;constructor(r,e){this.id=r,this.url=e}},bn=class extends Xt{type=ht.NavigationStart;navigationTrigger;restoredState;constructor(r,e,t="imperative",n=null){super(r,e),this.navigationTrigger=t,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},zt=class extends Xt{urlAfterRedirects;type=ht.NavigationEnd;constructor(r,e,t){super(r,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Dt=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(Dt||{}),Lr=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Lr||{}),ni=class extends Xt{reason;code;type=ht.NavigationCancel;constructor(r,e,t,n){super(r,e),this.reason=t,this.code=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Dp(i){return i instanceof ni&&(i.code===Dt.Redirect||i.code===Dt.SupersededByNewNavigation)}var Li=class extends Xt{reason;code;type=ht.NavigationSkipped;constructor(r,e,t,n){super(r,e),this.reason=t,this.code=n}},Yn=class extends Xt{error;target;type=ht.NavigationError;constructor(r,e,t,n){super(r,e),this.error=t,this.target=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Bo=class extends Xt{urlAfterRedirects;state;type=ht.RoutesRecognized;constructor(r,e,t,n){super(r,e),this.urlAfterRedirects=t,this.state=n}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xs=class extends Xt{urlAfterRedirects;state;type=ht.GuardsCheckStart;constructor(r,e,t,n){super(r,e),this.urlAfterRedirects=t,this.state=n}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ds=class extends Xt{urlAfterRedirects;state;shouldActivate;type=ht.GuardsCheckEnd;constructor(r,e,t,n,o){super(r,e),this.urlAfterRedirects=t,this.state=n,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ks=class extends Xt{urlAfterRedirects;state;type=ht.ResolveStart;constructor(r,e,t,n){super(r,e),this.urlAfterRedirects=t,this.state=n}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ss=class extends Xt{urlAfterRedirects;state;type=ht.ResolveEnd;constructor(r,e,t,n){super(r,e),this.urlAfterRedirects=t,this.state=n}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Es=class{route;type=ht.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ms=class{route;type=ht.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Rs=class{snapshot;type=ht.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Is=class{snapshot;type=ht.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ts=class{snapshot;type=ht.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},As=class{snapshot;type=ht.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nr=class{routerEvent;position;anchor;scrollBehavior;type=ht.Scroll;constructor(r,e,t,n){this.routerEvent=r,this.position=e,this.anchor=t,this.scrollBehavior=n}toString(){let r=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${r}')`}},Br=class{},jo=class{},jr=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Hy(i){return!(i instanceof Br)&&!(i instanceof jr)&&!(i instanceof jo)}var Os=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new Qn(this.rootInjector)}},Qn=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let n=this.getOrCreateContext(e);n.outlet=t,this.contexts.set(e,n)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Os(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(Z(pt))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Fs=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=md(r,this._root);return e?e.children.map(t=>t.value):[]}firstChild(r){let e=md(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=ud(r,this._root);return e.length<2?[]:e[e.length-2].children.map(n=>n.value).filter(n=>n!==r)}pathFromRoot(r){return ud(r,this._root).map(e=>e.value)}};function md(i,r){if(i===r.value)return r;for(let e of r.children){let t=md(i,e);if(t)return t}return null}function ud(i,r){if(i===r.value)return[r];for(let e of r.children){let t=ud(i,e);if(t.length)return t.unshift(r),t}return[]}var Qt=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ar(i){let r={};return i&&i.children.forEach(e=>r[e.value.outlet]=e),r}var Vo=class extends Fs{snapshot;constructor(r,e){super(r),this.snapshot=e,Cd(this,r)}toString(){return this.snapshot.toString()}};function kp(i,r){let e=$y(i,r),t=new tt([new gn("",{})]),n=new tt({}),o=new tt({}),a=new tt({}),s=new tt(""),c=new Ni(t,n,a,s,o,le,i,e.root);return c.snapshot=e.root,new Vo(new Qt(c,[]),e)}function $y(i,r){let e={},t={},n={},a=new Vr([],e,n,"",t,le,i,null,{},r);return new zo("",new Qt(a,[]))}var Ni=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,t,n,o,a,s,c){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=n,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(te(d=>d[$o]))??Y(void 0),this.url=r,this.params=e,this.queryParams=t,this.fragment=n,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(te(r=>qn(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(te(r=>qn(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function wd(i,r,e="emptyOnly"){let t,{routeConfig:n}=i;return r!==null&&(e==="always"||n?.path===""||!r.component&&!r.routeConfig?.loadComponent)?t={params:g(g({},r.params),i.params),data:g(g({},r.data),i.data),resolve:g(g(g(g({},i.data),r.data),n?.data),i._resolvedData)}:t={params:g({},i.params),data:g({},i.data),resolve:g(g({},i.data),i._resolvedData??{})},n&&Ep(n)&&(t.resolve[$o]=n.title),t}var Vr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[$o]}constructor(r,e,t,n,o,a,s,c,d,h){this.url=r,this.params=e,this.queryParams=t,this.fragment=n,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=qn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=qn(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},zo=class extends Fs{url;constructor(r,e){super(e),this.url=r,Cd(this,e)}toString(){return Sp(this._root)}};function Cd(i,r){r.value._routerState=i,r.children.forEach(e=>Cd(i,e))}function Sp(i){let r=i.children.length>0?` { ${i.children.map(Sp).join(", ")} } `:"";return`${i.value}${r}`}function od(i){if(i.snapshot){let r=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Pi(r.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Pi(r.params,e.params)||i.paramsSubject.next(e.params),by(r.url,e.url)||i.urlSubject.next(e.url),Pi(r.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function pd(i,r){let e=Pi(i.params,r.params)&&xy(i.url,r.url),t=!i.parent!=!r.parent;return e&&!t&&(!i.parent||pd(i.parent,r.parent))}function Ep(i){return typeof i.title=="string"||i.title===null}var Mp=new _(""),xd=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=le;activateEvents=new I;deactivateEvents=new I;attachEvents=new I;detachEvents=new I;routerOutletData=Ct();parentContexts=l(Qn);location=l(Ke);changeDetector=l(J);inputBinder=l(Go,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:n}=e.name;if(t)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ne(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ne(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ne(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new ne(4013,!1);this._activatedRoute=e;let n=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new fd(e,s,n.injector,this.routerOutletData);this.activated=n.createComponent(a,{index:n.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[me]})}return i})(),fd=class{route;childContexts;parent;outletData;constructor(r,e,t,n){this.route=r,this.childContexts=e,this.parent=t,this.outletData=n}get(r,e){return r===Ni?this.route:r===Qn?this.childContexts:r===Mp?this.outletData:this.parent.get(r,e)}},Go=new _(""),Dd=(()=>{class i{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,n=Gi([t.queryParams,t.params,t.data]).pipe(je(([o,a,s],c)=>(s=g(g(g({},o),a),s),c===0?Y(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=su(t.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,n)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})(),kd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,n){t&1&&j(0,"router-outlet")},dependencies:[xd],encapsulation:2})}return i})();function Sd(i){let r=i.children&&i.children.map(Sd),e=r?re(g({},i),{children:r}):g({},i);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==le&&(e.component=kd),e}function Gy(i,r,e){let t=Uo(i,r._root,e?e._root:void 0);return new Vo(t,r)}function Uo(i,r,e){if(e&&i.shouldReuseRoute(r.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=r.value;let n=Wy(i,r,e);return new Qt(t,n)}else{if(i.shouldAttach(r.value)){let o=i.retrieve(r.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(s=>Uo(i,s)),a}}let t=qy(r.value),n=r.children.map(o=>Uo(i,o));return new Qt(t,n)}}function Wy(i,r,e){return r.children.map(t=>{for(let n of e.children)if(i.shouldReuseRoute(t.value,n.value.snapshot))return Uo(i,t,n);return Uo(i,t)})}function qy(i){return new Ni(new tt(i.url),new tt(i.params),new tt(i.queryParams),new tt(i.fragment),new tt(i.data),i.outlet,i.component,i)}var zr=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},Rp="ngNavigationCancelingError";function Ps(i,r){let{redirectTo:e,navigationBehaviorOptions:t}=_n(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,n=Ip(!1,Dt.Redirect);return n.url=e,n.navigationBehaviorOptions=t,n}function Ip(i,r){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Rp]=!0,e.cancellationCode=r,e}function Yy(i){return Tp(i)&&_n(i.url)}function Tp(i){return!!i&&i[Rp]}var gd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,t,n,o){this.routeReuseStrategy=r,this.futureState=e,this.currState=t,this.forwardEvent=n,this.inputBindingEnabled=o}activate(r){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,r),od(this.futureState.root),this.activateChildRoutes(e,t,r)}deactivateChildRoutes(r,e,t){let n=Ar(e);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,n[a],t),delete n[a]}),Object.values(n).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(r,e,t){let n=r.value,o=e?e.value:null;if(n===o)if(n.component){let a=t.getContext(n.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let t=e.getContext(r.value.outlet),n=t&&r.value.component?t.children:e,o=Ar(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,n);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,e){let t=e.getContext(r.value.outlet),n=t&&r.value.component?t.children:e,o=Ar(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,n);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(r,e,t){let n=Ar(e);r.children.forEach(o=>{this.activateRoutes(o,n[o.value.outlet],t),this.forwardEvent(new As(o.value.snapshot))}),r.children.length&&this.forwardEvent(new Is(r.value.snapshot))}activateRoutes(r,e,t){let n=r.value,o=e?e.value:null;if(od(n),n===o)if(n.component){let a=t.getOrCreateContext(n.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,t);else if(n.component){let a=t.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let s=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),od(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=n,a.outlet&&a.outlet.activateWith(n,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,t)}},Ls=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Pr=class{component;route;constructor(r,e){this.component=r,this.route=e}};function Ky(i,r,e){let t=i._root,n=r?r._root:null;return Fo(t,n,e,[t.value])}function Qy(i){let r=i.routeConfig?i.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:i,guards:r}}function Hr(i,r){let e=Symbol(),t=r.get(i,e);return t===e?typeof i=="function"&&!Tm(i)?i:r.get(i):t}function Fo(i,r,e,t,n={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ar(r);return i.children.forEach(a=>{Zy(a,o[a.value.outlet],e,t.concat([a.value]),n),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Lo(s,e.getContext(a),n)),n}function Zy(i,r,e,t,n={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=r?r.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Xy(a,o,o.routeConfig.runGuardsAndResolvers);c?n.canActivateChecks.push(new Ls(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Fo(i,r,s?s.children:null,t,n):Fo(i,r,e,t,n),c&&s&&s.outlet&&s.outlet.isActivated&&n.canDeactivateChecks.push(new Pr(s.outlet.component,a))}else a&&Lo(r,s,n),n.canActivateChecks.push(new Ls(t)),o.component?Fo(i,null,s?s.children:null,t,n):Fo(i,null,e,t,n);return n}function Xy(i,r,e){if(typeof e=="function")return Rt(r._environmentInjector,()=>e(i,r));switch(e){case"pathParamsChange":return!Wn(i.url,r.url);case"pathParamsOrQueryParamsChange":return!Wn(i.url,r.url)||!Pi(i.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!pd(i,r)||!Pi(i.queryParams,r.queryParams);default:return!pd(i,r)}}function Lo(i,r,e){let t=Ar(i),n=i.value;Object.entries(t).forEach(([o,a])=>{n.component?r?Lo(a,r.children.getContext(o),e):Lo(a,null,e):Lo(a,r,e)}),n.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new Pr(r.outlet.component,n)):e.canDeactivateChecks.push(new Pr(null,n)):e.canDeactivateChecks.push(new Pr(null,n))}function Wo(i){return typeof i=="function"}function Jy(i){return typeof i=="boolean"}function e0(i){return i&&Wo(i.canLoad)}function t0(i){return i&&Wo(i.canActivate)}function i0(i){return i&&Wo(i.canActivateChild)}function n0(i){return i&&Wo(i.canDeactivate)}function r0(i){return i&&Wo(i.canMatch)}function Ap(i){return i instanceof Sm||i?.name==="EmptyError"}var gs=Symbol("INITIAL_VALUE");function Ur(){return je(i=>Gi(i.map(r=>r.pipe(Xe(1),Ae(gs)))).pipe(te(r=>{for(let e of r)if(e!==!0){if(e===gs)return gs;if(e===!1||o0(e))return e}return!0}),_e(r=>r!==gs),Xe(1)))}function o0(i){return _n(i)||i instanceof zr}function Op(i){return i.aborted?Y(void 0).pipe(Xe(1)):new _t(r=>{let e=()=>{r.next(),r.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function Fp(i){return G(Op(i))}function a0(i){return Ei(r=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:n,canDeactivateChecks:o}}=r;return o.length===0&&n.length===0?Y(re(g({},r),{guardsResult:!0})):s0(o,e,t).pipe(Ei(a=>a&&Jy(a)?l0(e,n,i):Y(a)),te(a=>re(g({},r),{guardsResult:a})))})}function s0(i,r,e){return bt(i).pipe(Ei(t=>u0(t.component,t.route,e,r)),hn(t=>t!==!0,!0))}function l0(i,r,e){return bt(r).pipe(Nn(t=>Oa(d0(t.route.parent,e),c0(t.route,e),m0(i,t.path),h0(i,t.route))),hn(t=>t!==!0,!0))}function c0(i,r){return i!==null&&r&&r(new Ts(i)),Y(!0)}function d0(i,r){return i!==null&&r&&r(new Rs(i)),Y(!0)}function h0(i,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return Y(!0);let t=e.map(n=>Mi(()=>{let o=r._environmentInjector,a=Hr(n,o),s=t0(a)?a.canActivate(r,i):Rt(o,()=>a(r,i));return Kn(s).pipe(hn())}));return Y(t).pipe(Ur())}function m0(i,r){let e=r[r.length-1],n=r.slice(0,r.length-1).reverse().map(o=>Qy(o)).filter(o=>o!==null).map(o=>Mi(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Hr(s,c),h=i0(d)?d.canActivateChild(e,i):Rt(c,()=>d(e,i));return Kn(h).pipe(hn())});return Y(a).pipe(Ur())}));return Y(n).pipe(Ur())}function u0(i,r,e,t){let n=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!n||n.length===0)return Y(!0);let o=n.map(a=>{let s=r._environmentInjector,c=Hr(a,s),d=n0(c)?c.canDeactivate(i,r,e,t):Rt(s,()=>c(i,r,e,t));return Kn(d).pipe(hn())});return Y(o).pipe(Ur())}function p0(i,r,e,t,n){let o=r.canLoad;if(o===void 0||o.length===0)return Y(!0);let a=o.map(s=>{let c=Hr(s,i),d=e0(c)?c.canLoad(r,e):Rt(i,()=>c(r,e)),h=Kn(d);return n?h.pipe(Fp(n)):h});return Y(a).pipe(Ur(),Pp(t))}function Pp(i){return Dm(dt(r=>{if(typeof r!="boolean")throw Ps(i,r)}),te(r=>r===!0))}function f0(i,r,e,t,n,o){let a=r.canMatch;if(!a||a.length===0)return Y(!0);let s=a.map(c=>{let d=Hr(c,i),h=r0(d)?d.canMatch(r,e,n):Rt(i,()=>d(r,e,n));return Kn(h).pipe(Fp(o))});return Y(s).pipe(Ur(),Pp(t))}var Ki=class i extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,i.prototype)}},Ho=class i extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,i.prototype)}};function g0(i){throw new ne(4e3,!1)}function _0(i){throw Ip(!1,Dt.GuardRejected)}var _d=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}lineralizeSegments(r,e){return Oe(this,null,function*(){let t=[],n=e.root;for(;;){if(t=t.concat(n.segments),n.numberOfChildren===0)return t;if(n.numberOfChildren>1||!n.children[le])throw g0(`${r.redirectTo}`);n=n.children[le]}})}applyRedirectCommands(r,e,t,n,o){return Oe(this,null,function*(){let a=yield b0(e,n,o);if(a instanceof Zt)throw new Ho(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,t);if(a[0]==="/")throw new Ho(s);return s})}applyRedirectCreateUrlTree(r,e,t,n){let o=this.createSegmentGroup(r,e.root,t,n);return new Zt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let t={};return Object.entries(r).forEach(([n,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[n]=e[s]}else t[n]=o}),t}createSegmentGroup(r,e,t,n){let o=this.createSegments(r,e.segments,t,n),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(r,c,t,n)}),new Ee(o,a)}createSegments(r,e,t,n){return e.map(o=>o.path[0]===":"?this.findPosParam(r,o,n):this.findOrReturn(o,t))}findPosParam(r,e,t){let n=t[e.path.substring(1)];if(!n)throw new ne(4001,!1);return n}findOrReturn(r,e){let t=0;for(let n of e){if(n.path===r.path)return e.splice(t),n;t++}return r}};function b0(i,r,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return ys(Kn(Rt(e,()=>t(r))))}function v0(i,r){return i.providers&&!i._injector&&(i._injector=za(i.providers,r,`Route: ${i.path}`)),i._injector??r}function mi(i){return i.outlet||le}function y0(i,r){let e=i.filter(t=>mi(t)===r);return e.push(...i.filter(t=>mi(t)!==r)),e}var bd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Lp(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function w0(i,r,e,t,n,o,a){let s=Np(i,r,e);if(!s.matched)return Y(s);let c=Lp(o(s));return t=v0(r,t),f0(t,r,e,n,c,a).pipe(te(d=>d===!0?s:g({},bd)))}function Np(i,r,e){if(r.path==="")return r.pathMatch==="full"&&(i.hasChildren()||e.length>0)?g({},bd):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let n=(r.matcher||sp)(e,i,r);if(!n)return g({},bd);let o={};Object.entries(n.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=n.consumed.length>0?g(g({},o),n.consumed[n.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:n.consumed,remainingSegments:e.slice(n.consumed.length),parameters:a,positionalParamSegments:n.posParams??{}}}function op(i,r,e,t,n){return e.length>0&&D0(i,e,t,n)?{segmentGroup:new Ee(r,x0(t,new Ee(e,i.children))),slicedSegments:[]}:e.length===0&&k0(i,e,t)?{segmentGroup:new Ee(i.segments,C0(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new Ee(i.segments,i.children),slicedSegments:e}}function C0(i,r,e,t){let n={};for(let o of e)if(Bs(i,r,o)&&!t[mi(o)]){let a=new Ee([],{});n[mi(o)]=a}return g(g({},t),n)}function x0(i,r){let e={};e[le]=r;for(let t of i)if(t.path===""&&mi(t)!==le){let n=new Ee([],{});e[mi(t)]=n}return e}function D0(i,r,e,t){return e.some(n=>!Bs(i,r,n)||!(mi(n)!==le)?!1:!(t!==void 0&&mi(n)===t))}function k0(i,r,e){return e.some(t=>Bs(i,r,t))}function Bs(i,r,e){return(i.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function S0(i,r,e){return r.length===0&&!i.children[e]}var vd=class{};function E0(i,r,e,t,n,o,a="emptyOnly",s){return Oe(this,null,function*(){return new yd(i,r,e,t,n,a,o,s).recognize()})}var M0=31,yd=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,t,n,o,a,s,c){this.injector=r,this.configLoader=e,this.rootComponentType=t,this.config=n,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new _d(this.urlSerializer,this.urlTree)}noMatchError(r){return new ne(4002,`'${r.segmentGroup}'`)}recognize(){return Oe(this,null,function*(){let r=op(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(r),n=new Qt(t,e),o=new zo("",n),a=vp(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(r){return Oe(this,null,function*(){let e=new Vr([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),le,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,r,le,e),rootSnapshot:e}}catch(t){if(t instanceof Ho)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Ki?this.noMatchError(t):t}})}processSegmentGroup(r,e,t,n,o){return Oe(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(r,e,t,o);let a=yield this.processSegment(r,e,t,t.segments,n,!0,o);return a instanceof Qt?[a]:[]})}processChildren(r,e,t,n){return Oe(this,null,function*(){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],h=y0(e,c),p=yield this.processSegmentGroup(r,h,d,c,n);a.push(...p)}let s=Bp(a);return R0(s),s})}processSegment(r,e,t,n,o,a,s){return Oe(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??r,e,c,t,n,o,a,s)}catch(d){if(d instanceof Ki||Ap(d))continue;throw d}if(S0(t,n,o))return new vd;throw new Ki(t)})}processSegmentAgainstRoute(r,e,t,n,o,a,s,c){return Oe(this,null,function*(){if(mi(t)!==a&&(a===le||!Bs(n,o,t)))throw new Ki(n);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,n,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(r,n,e,t,o,a,c);throw new Ki(n)})}expandSegmentAgainstRouteUsingRedirect(r,e,t,n,o,a,s){return Oe(this,null,function*(){let{matched:c,parameters:d,consumedSegments:h,positionalParamSegments:p,remainingSegments:w}=Np(e,n,o);if(!c)throw new Ki(e);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>M0&&(this.allowRedirects=!1));let A=this.createSnapshot(r,n,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let U=yield this.applyRedirects.applyRedirectCommands(h,n.redirectTo,p,Lp(A),r),ae=yield this.applyRedirects.lineralizeSegments(n,U);return this.processSegment(r,t,e,ae.concat(w),a,!1,s)})}createSnapshot(r,e,t,n,o){let a=new Vr(t,n,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,T0(e),mi(e),e.component??e._loadedComponent??null,e,A0(e),r),s=wd(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}matchSegmentAgainstRoute(r,e,t,n,o,a){return Oe(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Re=>this.createSnapshot(r,t,Re.consumedSegments,Re.parameters,a),c=yield ys(w0(e,t,n,r,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Ki(e);r=t._injector??r;let{routes:d}=yield this.getChildConfig(r,t,n),h=t._loadedInjector??r,{parameters:p,consumedSegments:w,remainingSegments:A}=c,U=this.createSnapshot(r,t,w,p,a),{segmentGroup:ae,slicedSegments:F}=op(e,w,A,d,o);if(F.length===0&&ae.hasChildren()){let Re=yield this.processChildren(h,d,ae,U);return new Qt(U,Re)}if(d.length===0&&F.length===0)return new Qt(U,[]);let ee=mi(t)===o,ce=yield this.processSegment(h,d,ae,F,ee?le:o,!0,U);return new Qt(U,ce instanceof Qt?[ce]:[])})}getChildConfig(r,e,t){return Oe(this,null,function*(){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield ys(p0(r,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(r,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw _0(e)}return{routes:[],injector:r}})}};function R0(i){i.sort((r,e)=>r.value.outlet===le?-1:e.value.outlet===le?1:r.value.outlet.localeCompare(e.value.outlet))}function I0(i){let r=i.value.routeConfig;return r&&r.path===""}function Bp(i){let r=[],e=new Set;for(let t of i){if(!I0(t)){r.push(t);continue}let n=r.find(o=>t.value.routeConfig===o.value.routeConfig);n!==void 0?(n.children.push(...t.children),e.add(n)):r.push(t)}for(let t of e){let n=Bp(t.children);r.push(new Qt(t.value,n))}return r.filter(t=>!e.has(t))}function T0(i){return i.data||{}}function A0(i){return i.resolve||{}}function O0(i,r,e,t,n,o,a){return Ei(s=>Oe(null,null,function*(){let{state:c,tree:d}=yield E0(i,r,e,t,s.extractedUrl,n,o,a);return re(g({},s),{targetSnapshot:c,urlAfterRedirects:d})}))}function F0(i){return Ei(r=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=r;if(!t.length)return Y(r);let n=new Set(t.map(s=>s.route)),o=new Set;for(let s of n)if(!o.has(s))for(let c of jp(s))o.add(c);let a=0;return bt(o).pipe(Nn(s=>n.has(s)?P0(s,e,i):(s.data=wd(s,s.parent,i).resolve,Y(void 0))),dt(()=>a++),mc(1),Ei(s=>a===o.size?Y(r):yt))})}function jp(i){let r=i.children.map(e=>jp(e)).flat();return[i,...r]}function P0(i,r,e){let t=i.routeConfig,n=i._resolve;return t?.title!==void 0&&!Ep(t)&&(n[$o]=t.title),Mi(()=>(i.data=wd(i,i.parent,e).resolve,L0(n,i,r).pipe(te(o=>(i._resolvedData=o,i.data=g(g({},i.data),o),null)))))}function L0(i,r,e){let t=sd(i);if(t.length===0)return Y({});let n={};return bt(t).pipe(Ei(o=>N0(i[o],r,e).pipe(hn(),dt(a=>{if(a instanceof zr)throw Ps(new Qi,a);n[o]=a}))),mc(1),te(()=>n),gr(o=>Ap(o)?yt:Aa(o)))}function N0(i,r,e){let t=r._environmentInjector,n=Hr(i,t),o=n.resolve?n.resolve(r,e):Rt(t,()=>n(r,e));return Kn(o)}function ap(i){return je(r=>{let e=i(r);return e?bt(e).pipe(te(()=>r)):Y(r)})}var Ed=(()=>{class i{buildTitle(e){let t,n=e.root;for(;n!==void 0;)t=this.getResolvedTitleForRoute(n)??t,n=n.children.find(o=>o.outlet===le);return t}getResolvedTitleForRoute(e){return e.data[$o]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>l(Vp),providedIn:"root"})}return i})(),Vp=(()=>{class i extends Ed{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(Z(Xu))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),yn=new _("",{factory:()=>({})}),Zn=new _(""),js=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(tu);loadComponent(e,t){return Oe(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=Oe(this,null,function*(){try{let o=yield cp(Rt(e,()=>t.loadComponent())),a=yield Hp(Up(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,n),n})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let n=Oe(this,null,function*(){try{let o=yield zp(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,n),n}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function zp(i,r,e,t){return Oe(this,null,function*(){let n=yield cp(Rt(e,()=>i.loadChildren())),o=yield Hp(Up(n)),a;o instanceof qm||Array.isArray(o)?a=o:a=yield r.compileModuleAsync(o),t&&t(i);let s,c,d=!1,h;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,h=a,c=s.get(Zn,[],{optional:!0,self:!0}).flat()),{routes:c.map(Sd),injector:s,factory:h}})}function B0(i){return i&&typeof i=="object"&&"default"in i}function Up(i){return B0(i)?i.default:i}function Hp(i){return Oe(this,null,function*(){return i})}var Vs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>l(j0),providedIn:"root"})}return i})(),j0=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Md=new _(""),Rd=new _("");function $p(i,r,e){let t=i.get(Rd),n=i.get($);if(!n.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=n.startViewTransition(()=>(o(),V0(i)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:c}=t;return c&&Rt(i,()=>c({transition:s,from:r,to:e})),a}function V0(i){return new Promise(r=>{xe({read:()=>setTimeout(r)},{injector:i})})}var z0=()=>{},Id=new _(""),zs=(()=>{class i{currentNavigation=oe(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=oe(null);events=new b;transitionAbortWithErrorSubject=new b;configLoader=l(js);environmentInjector=l(pt);destroyRef=l(mn);urlSerializer=l(vn);rootContexts=l(Qn);location=l(Ai);inputBindingEnabled=l(Go,{optional:!0})!==null;titleStrategy=l(Ed);options=l(yn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Vs);createViewTransition=l(Md,{optional:!0});navigationErrorHandler=l(Id,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=n=>this.events.next(new Es(n)),t=n=>this.events.next(new Ms(n));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;De(()=>{this.transitions?.next(re(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new tt(null),this.transitions.pipe(_e(t=>t!==null),je(t=>{let n=!1,o=new AbortController,a=()=>!n&&this.currentTransition?.id===t.id;return Y(t).pipe(je(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Dt.SupersededByNewNavigation),yt;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?re(g({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&h!=="reload")return this.events.next(new Li(s.id,this.urlSerializer.serialize(s.rawUrl),"",Lr.IgnoredSameUrlNavigation)),s.resolve(!1),yt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Y(s).pipe(je(p=>(this.events.next(new bn(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?yt:Promise.resolve(p))),O0(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),dt(p=>{t.targetSnapshot=p.targetSnapshot,t.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(w=>(w.finalUrl=p.urlAfterRedirects,w)),this.events.next(new jo)}),je(p=>bt(t.routesRecognizeHandler.deferredHandle??Y(void 0)).pipe(te(()=>p))),dt(()=>{let p=new Bo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:w,source:A,restoredState:U,extras:ae}=s,F=new bn(p,this.urlSerializer.serialize(w),A,U);this.events.next(F);let ee=kp(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=re(g({},s),{targetSnapshot:ee,urlAfterRedirects:w,extras:re(g({},ae),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ce=>(ce.finalUrl=w,ce)),Y(t)}else return this.events.next(new Li(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Lr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),yt}),te(s=>{let c=new xs(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=re(g({},s),{guards:Ky(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),a0(s=>this.events.next(s)),je(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ps(this.urlSerializer,s.guardsResult);let c=new Ds(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return yt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Dt.GuardRejected),yt;if(s.guards.canActivateChecks.length===0)return Y(s);let d=new ks(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return yt;let h=!1;return Y(s).pipe(F0(this.paramsInheritanceStrategy),dt({next:()=>{h=!0;let p=new Ss(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{h||this.cancelNavigationTransition(s,"",Dt.NoDataFromResolver)}}))}),ap(s=>{let c=h=>{let p=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let w=h._environmentInjector;p.push(this.configLoader.loadComponent(w,h.routeConfig).then(A=>{h.component=A}))}for(let w of h.children)p.push(...c(w));return p},d=c(s.targetSnapshot.root);return d.length===0?Y(s):bt(Promise.all(d).then(()=>s))}),ap(()=>this.afterPreactivation()),je(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?bt(d).pipe(te(()=>t)):Y(t)}),Xe(1),je(s=>{let c=Gy(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=re(g({},s),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),this.events.next(new Br);let d=t.beforeActivateHandler.deferredHandle;return d?bt(d.then(()=>s)):Y(s)}),dt(s=>{new gd(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(n=!0,this.currentNavigation.update(c=>(c.abort=z0,c)),this.lastSuccessfulNavigation.set(De(this.currentNavigation)),this.events.next(new zt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),G(Op(o.signal).pipe(_e(()=>!n&&!t.targetRouterState),dt(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Dt.Aborted)}))),dt({complete:()=>{n=!0}}),G(this.transitionAbortWithErrorSubject.pipe(dt(s=>{throw s}))),_r(()=>{o.abort(),n||this.cancelNavigationTransition(t,"",Dt.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),gr(s=>{if(n=!0,this.destroyed)return t.resolve(!1),yt;if(Tp(s))this.events.next(new ni(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Yy(s)?this.events.next(new jr(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new Yn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=Rt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof zr){let{message:h,cancellationCode:p}=Ps(this.urlSerializer,d);this.events.next(new ni(t.id,this.urlSerializer.serialize(t.extractedUrl),h,p)),this.events.next(new jr(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return yt}))}))}cancelNavigationTransition(e,t,n){let o=new ni(e.id,this.urlSerializer.serialize(e.extractedUrl),t,n);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=De(this.currentNavigation),n=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==n?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function U0(i){return i!==Fr}var Gp=new _("");var Wp=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>l(H0),providedIn:"root"})}return i})(),Ns=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},H0=(()=>{class i extends Ns{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Us=(()=>{class i{urlSerializer=l(vn);options=l(yn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Ai);urlHandlingStrategy=l(Vs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Zt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:n}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=n??o;return a instanceof Zt?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:n}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,n),this.routerState=e):this.rawUrlTree=n}routerState=kp(null,l(pt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:()=>l($0),providedIn:"root"})}return i})(),$0=(()=>{class i extends Us{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof bn?this.updateStateMemento():e instanceof Li?this.commitTransition(t):e instanceof Bo?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Br?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof ni&&!Dp(e)?this.restoreHistory(t):e instanceof Yn?this.restoreHistory(t,!0):e instanceof zt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:n,id:o}=t,{replaceUrl:a,state:s}=n;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,d=g(g({},s),this.generateNgRouterState(o,c,t));this.location.replaceState(e,"",d)}else{let c=g(g({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,o=this.currentPageId-n;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,n){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:t},this.routerUrlState(n)):g({navigationId:e},this.routerUrlState(n))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Hs(i,r){i.events.pipe(_e(e=>e instanceof zt||e instanceof ni||e instanceof Yn||e instanceof Li),te(e=>e instanceof zt||e instanceof Li?0:(e instanceof ni?e.code===Dt.Redirect||e.code===Dt.SupersededByNewNavigation:!1)?2:1),_e(e=>e!==2),Xe(1)).subscribe(()=>{r()})}var ri=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(_c);stateManager=l(Us);options=l(yn,{optional:!0})||{};pendingTasks=l(Om);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(zs);urlSerializer=l(vn);location=l(Ai);urlHandlingStrategy=l(Vs);injector=l(pt);_events=new b;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Wp);injectorCleanup=l(Gp,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Zn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Go,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ye;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let n=this.navigationTransitions.currentTransition,o=De(this.navigationTransitions.currentNavigation);if(n!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof ni&&t.code!==Dt.Redirect&&t.code!==Dt.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof zt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof jr){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,n.currentRawUrl),c=g({scroll:n.extras.scroll,browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||U0(n.source)},a);this.scheduleNavigation(s,Fr,null,c,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}Hy(t)&&this._events.next(t)}catch(n){this.navigationTransitions.transitionAbortWithErrorSubject.next(n)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Fr,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,n,o)=>{this.navigateToSyncWithBrowser(e,n,t,o)})}navigateToSyncWithBrowser(e,t,n,o){let a=n?.navigationId?n:null,s=n?.\u0275routerUrl??e;if(n?.\u0275routerUrl&&(o=re(g({},o),{browserUrl:e})),n){let d=g({},n);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,t,a,o).catch(d=>{this.disposed||this.injector.get(yr)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return De(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Sd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:n,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let p;try{let w=n?n.snapshot:this.routerState.snapshot.root;p=yp(w)}catch(w){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),p=this.currentUrlTree.root}return wp(p,e,h,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let n=_n(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(o,Fr,null,t)}navigate(e,t={skipLocationChange:!1}){return G0(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(Bn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let n;if(t===!0?n=g({},hp):t===!1?n=g({},ld):n=g(g({},ld),t),_n(e))return ep(this.currentUrlTree,e,n);let o=this.parseUrl(e);return ep(this.currentUrlTree,o,n)}removeEmptyProps(e){return Object.entries(e).reduce((t,[n,o])=>(o!=null&&(t[n]=o),t),{})}scheduleNavigation(e,t,n,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((p,w)=>{s=p,c=w});let h=this.pendingTasks.add();return Hs(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function G0(i){for(let r=0;r<i.length;r++)if(i[r]==null)throw new ne(4008,!1)}var q0=(()=>{class i{router=l(ri);stateManager=l(Us);fragment=oe("");queryParams=oe({});path=oe("");serializer=l(vn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof zt&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:n}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(n),this.path.set(this.serializer.serialize(new Zt(t)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$s=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Kt("href"),{optional:!0});reactiveHref=iu(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return De(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return De(this._target)}_target=oe(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return De(this._queryParams)}_queryParams=oe(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return De(this._fragment)}_fragment=oe(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return De(this._queryParamsHandling)}_queryParamsHandling=oe(void 0);set state(e){this._state.set(e)}get state(){return De(this._state)}_state=oe(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return De(this._info)}_info=oe(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return De(this._relativeTo)}_relativeTo=oe(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return De(this._preserveFragment)}_preserveFragment=oe(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return De(this._skipLocationChange)}_skipLocationChange=oe(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return De(this._replaceUrl)}_replaceUrl=oe(!1);isAnchorElement;onChanges=new b;applicationErrorHandler=l(yr);options=l(yn,{optional:!0});reactiveRouterState=l(q0);constructor(e,t,n,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=n,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=oe(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(_n(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,n,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||n||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let n=this.renderer,o=this.el.nativeElement;t!==null?n.setAttribute(o,e,t):n.removeAttribute(o,e)}_urlTree=Nt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=n=>n==="preserve"||n==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:_n(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return De(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||i)(L(ri),L(Ni),pc("tabindex"),L(fe),L(M),L(ti))};static \u0275dir=v({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,n){t&1&&k("click",function(a){return n.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&N("href",n.reactiveHref(),Gm)("target",n._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",D],skipLocationChange:[2,"skipLocationChange","skipLocationChange",D],replaceUrl:[2,"replaceUrl","replaceUrl",D],routerLink:"routerLink"},features:[me]})}return i})();var qo=class{};var qp=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,n,o){this.router=e,this.injector=t,this.preloadingStrategy=n,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(_e(e=>e instanceof zt),Nn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let n=[];for(let o of t){o.providers&&!o._injector&&(o._injector=za(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&n.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&n.push(this.processRoutes(s,o.children??o._loadedRoutes))}return bt(n).pipe(dc())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return Y(null);let n;t.loadChildren&&t.canLoad===void 0?n=bt(this.loader.loadChildren(e,t)):n=Y(null);let o=n.pipe(Ei(a=>a===null?Y(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return bt([o,a]).pipe(dc())}else return o})}static \u0275fac=function(t){return new(t||i)(Z(ri),Z(pt),Z(qo),Z(js))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Yp=new _(""),Y0=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Fr;restoredId=0;store={};urlSerializer=l(vn);zone=l(H);viewportScroller=l(zc);transitions=l(zs);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof bn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof zt?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Li&&e.code===Lr.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Nr)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){let n=De(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Oe(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Nr(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,n))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){ja()};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})();function K0(i,...r){return _o([{provide:Zn,multi:!0,useValue:i},[],{provide:Ni,useFactory:Kp},{provide:vc,multi:!0,useFactory:Qp},r.map(e=>e.\u0275providers)])}function Kp(){return l(ri).routerState.root}function $r(i,r){return{\u0275kind:i,\u0275providers:r}}function Qp(){let i=l(q);return r=>{let e=i.get(Ri);if(r!==e.components[0])return;let t=i.get(ri),n=i.get(Zp);i.get(Ad)===1&&t.initialNavigation(),i.get(ef,null,{optional:!0})?.setUpPreloading(),i.get(Yp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var Zp=new _("",{factory:()=>new b}),Ad=new _("",{factory:()=>1});function Xp(){let i=[{provide:gc,useValue:!0},{provide:Ad,useValue:0},bc(()=>{let r=l(q);return r.get(kc,Promise.resolve()).then(()=>new Promise(t=>{let n=r.get(ri),o=r.get(Zp);Hs(n,()=>{t(!0)}),r.get(zs).afterPreactivation=()=>(t(!0),o.closed?Y(void 0):o),n.initialNavigation()}))})];return $r(2,i)}function Jp(){let i=[bc(()=>{l(ri).setUpLocationChangeListener()}),{provide:Ad,useValue:2}];return $r(3,i)}var ef=new _("");function tf(i){return $r(0,[{provide:ef,useExisting:qp},{provide:qo,useExisting:i}])}function Q0(){return $r(6,[{provide:ti,useClass:ns}])}function nf(){return $r(8,[Dd,{provide:Go,useExisting:Dd}])}function rf(i){Ba("NgRouterViewTransitions");let r=[{provide:Md,useValue:$p},{provide:Rd,useValue:g({skipNextTransition:!!i?.skipInitialTransition},i)}];return $r(9,r)}var of=[Ai,{provide:vn,useClass:Qi},ri,Qn,{provide:Ni,useFactory:Kp},js,[]],Od=(()=>{class i{constructor(){}static forRoot(e,t){return{ngModule:i,providers:[of,[],{provide:Zn,multi:!0,useValue:e},[],t?.errorHandler?{provide:Id,useValue:t.errorHandler}:[],{provide:yn,useValue:t||{}},t?.useHash?X0():J0(),Z0(),t?.preloadingStrategy?tf(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?ew(t):[],t?.bindToComponentInputs?nf().\u0275providers:[],t?.enableViewTransitions?rf().\u0275providers:[],tw()]}}static forChild(e){return{ngModule:i,providers:[{provide:Zn,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({})}return i})();function Z0(){return{provide:Yp,useFactory:()=>{let i=l(zc),r=l(yn);return r.scrollOffset&&i.setOffset(r.scrollOffset),new Y0(r)}}}function X0(){return{provide:ti,useClass:ns}}function J0(){return{provide:ti,useClass:Ka}}function ew(i){return[i.initialNavigation==="disabled"?Jp().\u0275providers:[],i.initialNavigation==="enabledBlocking"?Xp().\u0275providers:[]]}var Td=new _("");function tw(){return[{provide:Td,useFactory:Qp},{provide:vc,multi:!0,useExisting:Td}]}var Fd;try{Fd=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){Fd=!1}var de=(()=>{class i{_platformId=l(wr);isBrowser=this._platformId?Au(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Fd)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Pd;function sf(){if(Pd==null){let i=typeof document<"u"?document.head:null;Pd=!!(i&&(i.createShadowRoot||i.attachShadow))}return Pd}function Xn(i){if(sf()){let r=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function Jn(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let r=i.shadowRoot.activeElement;if(r===i)break;i=r}return i}function Je(i){return i.composedPath?i.composedPath()[0]:i.target}function Ld(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Gs=new WeakMap,Me=(()=>{class i{_appRef;_injector=l(q);_environmentInjector=l(pt);load(e){let t=this._appRef=this._appRef||this._injector.get(Ri),n=Gs.get(t);n||(n={loaders:new Set,refs:[]},Gs.set(t,n),t.onDestroy(()=>{Gs.get(t)?.refs.forEach(o=>o.destroy()),Gs.delete(t)})),n.loaders.has(e)||(n.loaders.add(e),n.refs.push(Wa(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function nt(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Zi(i){return Array.isArray(i)?i:[i]}function kt(i,r=0){return lf(i)?Number(i):arguments.length===2?r:0}function lf(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Ze(i){return i instanceof M?i.nativeElement:i}var iw=new _("cdk-dir-doc",{providedIn:"root",factory:()=>l($)}),nw=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function cf(i){let r=i?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?nw.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var Le=(()=>{class i{get value(){return this.valueSignal()}valueSignal=oe("ltr");change=new I;constructor(){let e=l(iw,{optional:!0});if(e){let t=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(cf(t||n||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ui=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(ui||{}),Ws,er;function qs(){if(er==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return er=!1,er;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)er=!0;else{let i=Element.prototype.scrollTo;i?er=!/\{\s*\[native code\]\s*\}/.test(i.toString()):er=!1}}return er}function Gr(){if(typeof document!="object"||!document)return ui.NORMAL;if(Ws==null){let i=document.createElement("div"),r=i.style;i.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),Ws=ui.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Ws=i.scrollLeft===0?ui.NEGATED:ui.INVERTED),i.remove()}return Ws}function Ys(i){return i&&typeof i.connect=="function"&&!(i instanceof km)}var pi=(function(i){return i[i.REPLACED=0]="REPLACED",i[i.INSERTED=1]="INSERTED",i[i.MOVED=2]="MOVED",i[i.REMOVED=3]="REMOVED",i})(pi||{}),Ks=class{viewCacheSize=20;_viewCache=[];applyChanges(r,e,t,n,o){r.forEachOperation((a,s,c)=>{let d,h;if(a.previousIndex==null){let p=()=>t(a,s,c);d=this._insertView(p,c,e,n(a)),h=d?pi.INSERTED:pi.REPLACED}else c==null?(this._detachAndCacheView(s,e),h=pi.REMOVED):(d=this._moveView(s,c,e,n(a)),h=pi.MOVED);o&&o({context:d?.context,operation:h,record:a})})}detach(){for(let r of this._viewCache)r.destroy();this._viewCache=[]}_insertView(r,e,t,n){let o=this._insertViewFromCache(e,t);if(o){o.context.$implicit=n;return}let a=r();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(r,e){let t=e.detach(r);this._maybeCacheView(t,e)}_moveView(r,e,t,n){let o=t.get(r);return t.move(o,e),o.context.$implicit=n,o}_maybeCacheView(r,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(r);else{let t=e.indexOf(r);t===-1?r.destroy():e.remove(t)}}_insertViewFromCache(r,e){let t=this._viewCache.pop();return t&&e.insert(t,r),t||null}};var Ne=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({})}return i})();var rw=20,Bi=(()=>{class i{_ngZone=l(H);_platform=l(de);_renderer=l(ft).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new b;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=rw){return this._platform.isBrowser?new _t(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(fo(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(_e(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let n=Ze(t),o=e.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Yo=(()=>{class i{elementRef=l(M);scrollDispatcher=l(Bi);ngZone=l(H);dir=l(Le,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new b;_renderer=l(fe);_cleanupScroll;_elementScrolled=new b;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=n?e.end:e.start),e.right==null&&(e.right=n?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&Gr()!=ui.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Gr()==ui.INVERTED?e.left=e.right:Gr()==ui.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;qs()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",n="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?n:t:e=="end"&&(e=a?t:n),a&&Gr()==ui.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Gr()==ui.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),ow=20,St=(()=>{class i{_platform=l(de);_listeners;_viewportSize=null;_change=new b;_document=l($);constructor(){let e=l(H),t=l(ft).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return{top:a,left:s}}change(e=ow){return e>0?this._change.pipe(fo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var df=new _("CDK_VIRTUAL_SCROLL_VIEWPORT");var Wr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({})}return i})(),Qs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[Ne,Wr,Ne,Wr]})}return i})();var Nd={},be=class i{_appId=l(zn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),Nd.hasOwnProperty(r)||(Nd[r]=0),`${r}${e?i._infix+"-":""}${Nd[r]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ko=class{_attachedHost=null;attach(r){return this._attachedHost=r,r.attach(this)}detach(){let r=this._attachedHost;r!=null&&(this._attachedHost=null,r.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(r){this._attachedHost=r}},fi=class extends Ko{component;viewContainerRef;injector;projectableNodes;bindings;constructor(r,e,t,n,o){super(),this.component=r,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=o||null}},Ut=class extends Ko{templateRef;viewContainerRef;context;injector;constructor(r,e,t,n){super(),this.templateRef=r,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(r,e=this.context){return this.context=e,super.attach(r)}detach(){return this.context=void 0,super.detach()}},Bd=class extends Ko{element;constructor(r){super(),this.element=r instanceof M?r.nativeElement:r}},wn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(r){if(r instanceof fi)return this._attachedPortal=r,this.attachComponentPortal(r);if(r instanceof Ut)return this._attachedPortal=r,this.attachTemplatePortal(r);if(this.attachDomPortal&&r instanceof Bd)return this._attachedPortal=r,this.attachDomPortal(r)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(r){this._disposeFn=r}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Qo=class extends wn{outletElement;_appRef;_defaultInjector;constructor(r,e,t){super(),this.outletElement=r,this._appRef=e,this._defaultInjector=t}attachComponentPortal(r){let e;if(r.viewContainerRef){let t=r.injector||r.viewContainerRef.injector,n=t.get(Va,null,{optional:!0})||void 0;e=r.viewContainerRef.createComponent(r.component,{index:r.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:r.projectableNodes||void 0,bindings:r.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=r.injector||this._defaultInjector||q.NULL,o=n.get(pt,t.injector);e=Wa(r.component,{elementInjector:n,environmentInjector:o,projectableNodes:r.projectableNodes||void 0,bindings:r.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=r,e}attachTemplatePortal(r){let e=r.viewContainerRef,t=e.createEmbeddedView(r.templateRef,r.context,{injector:r.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=r,t}attachDomPortal=r=>{let e=r.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=r,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(r){return r.hostView.rootNodes[0]}},hf=(()=>{class i extends Ut{constructor(){let e=l(Ve),t=l(Ke);super(e,t)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[W]})}return i})(),gi=(()=>{class i extends wn{_moduleRef=l(Va,{optional:!0});_document=l($);_viewContainerRef=l(Ke);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new I;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[W]})}return i})(),Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({})}return i})();function He(i,...r){return r.length?r.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var mf=qs();function Kr(i){return new Zs(i.get(St),i.get($))}var Zs=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(r,e){this._viewportRuler=r,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let r=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=r.style.left||"",this._previousHTMLStyles.top=r.style.top||"",r.style.left=nt(-this._previousScrollPosition.left),r.style.top=nt(-this._previousScrollPosition.top),r.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let r=this._document.documentElement,e=this._document.body,t=r.style,n=e.style,o=t.scrollBehavior||"",a=n.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,r.classList.remove("cdk-global-scrollblock"),mf&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),mf&&(t.scrollBehavior=o,n.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function vf(i,r){return new Xs(i.get(Bi),i.get(H),i.get(St),r)}var Xs=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(r,e,t,n){this._scrollDispatcher=r,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(this._scrollSubscription)return;let r=this._scrollDispatcher.scrolled(0).pipe(_e(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=r.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=r.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Zo=class{enable(){}disable(){}attach(){}};function jd(i,r){return r.some(e=>{let t=i.bottom<e.top,n=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return t||n||o||a})}function uf(i,r){return r.some(e=>{let t=i.top<e.top,n=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return t||n||o||a})}function Ji(i,r){return new Js(i.get(Bi),i.get(St),i.get(H),r)}var Js=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(r,e,t,n){this._scrollDispatcher=r,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(!this._scrollSubscription){let r=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(r).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();jd(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},yf=(()=>{class i{_injector=l(q);constructor(){}noop=()=>new Zo;close=e=>vf(this._injector,e);block=()=>Kr(this._injector);reposition=e=>Ji(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_i=class{positionStrategy;scrollStrategy=new Zo;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(r){if(r){let e=Object.keys(r);for(let t of e)r[t]!==void 0&&(this[t]=r[t])}}};var el=class{connectionPair;scrollableViewProperties;constructor(r,e){this.connectionPair=r,this.scrollableViewProperties=e}};var wf=(()=>{class i{_attachedOverlays=[];_document=l($);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Cf=(()=>{class i extends wf{_ngZone=l(H);_renderer=l(ft).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let o=t[n];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),xf=(()=>{class i extends wf{_platform=l(de);_ngZone=l(H);_renderer=l(ft).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,n),o.listen(t,"click",this._clickListener,n),o.listen(t,"auxclick",this._clickListener,n),o.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Je(e)};_clickListener=e=>{let t=Je(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(pf(s.overlayElement,t)||pf(s.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function pf(i,r){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=r;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Df=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return i})(),nl=(()=>{class i{_platform=l(de);_containerElement;_document=l($);_styleLoader=l(Me);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ld()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Ld()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Df)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Vd=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(r,e,t,n){this._renderer=e,this._ngZone=t,this.element=r.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let r=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(r,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),r.style.pointerEvents="none",r.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function zd(i){return i&&i.nodeType===1}var qr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new b;_attachments=new b;_detachments=new b;_positionStrategy;_scrollStrategy;_locationChanges=ye.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new b;_outsidePointerEvents=new b;_afterNextRenderRef;constructor(r,e,t,n,o,a,s,c,d,h=!1,p,w){this._portalOutlet=r,this._host=e,this._pane=t,this._config=n,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=h,this._injector=p,this._renderer=w,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(r){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(r);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=xe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let r=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),r}dispose(){if(this._disposed)return;let r=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,r&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(r){r!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=r,this.hasAttached()&&(r.attach(this),this.updatePosition()))}updateSize(r){this._config=g(g({},this._config),r),this._updateElementSize()}setDirection(r){this._config=re(g({},this._config),{direction:r}),this._updateElementDirection()}addPanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!0)}removePanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!1)}getDirection(){let r=this._config.direction;return r?typeof r=="string"?r:r.value:"ltr"}updateScrollStrategy(r){r!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=r,this.hasAttached()&&(r.attach(this),r.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let r=this._pane.style;r.width=nt(this._config.width),r.height=nt(this._config.height),r.minWidth=nt(this._config.minWidth),r.minHeight=nt(this._config.minHeight),r.maxWidth=nt(this._config.maxWidth),r.maxHeight=nt(this._config.maxHeight)}_togglePointerEvents(r){this._pane.style.pointerEvents=r?"":"none"}_attachHost(){if(!this._host.parentElement){let r=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;zd(r)?r.after(this._host):r?.type==="parent"?r.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(r){}}_attachBackdrop(){let r="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Vd(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(r))}):this._backdropRef.element.classList.add(r)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(r,e,t){let n=Zi(e||[]).filter(o=>!!o);n.length&&(t?r.classList.add(...n):r.classList.remove(...n))}_detachContentWhenEmpty(){let r=!1;try{this._detachContentAfterRenderRef=xe(()=>{r=!0,this._detachContent()},{injector:this._injector})}catch(e){if(r)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let r=this._scrollStrategy;r?.disable(),r?.detach?.()}},ff="cdk-overlay-connected-position-bounding-box",sw=/([A-Za-z%]+)$/;function ir(i,r){return new tl(r,i.get(St),i.get($),i.get(de),i.get(nl))}var tl=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new b;_resizeSubscription=ye.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(r,e,t,n,o){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=o,this.setOrigin(r)}attach(r){this._overlayRef&&this._overlayRef,this._validatePositions(),r.hostElement.classList.add(ff),this._overlayRef=r,this._boundingBox=r.hostElement,this._pane=r.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let r=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(r,n,s),d=this._getOverlayPoint(c,e,s),h=this._getOverlayFit(d,e,t,s);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(h,d,t)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<h.visibleArea)&&(a={overlayFit:h,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let d of o){let h=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);h>c&&(c=h,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&tr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ff),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let r=this._lastPosition;r?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(r,this._getOriginPoint(this._originRect,this._containerRect,r))):this.apply()}withScrollableContainers(r){return this._scrollables=r,this}withPositions(r){return this._preferredPositions=r,r.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(r){return this._viewportMargin=r,this}withFlexibleDimensions(r=!0){return this._hasFlexibleDimensions=r,this}withGrowAfterOpen(r=!0){return this._growAfterOpen=r,this}withPush(r=!0){return this._canPush=r,this}withLockedPosition(r=!0){return this._positionLocked=r,this}setOrigin(r){return this._origin=r,this}withDefaultOffsetX(r){return this._offsetX=r,this}withDefaultOffsetY(r){return this._offsetY=r,this}withTransformOriginOn(r){return this._transformOriginSelector=r,this}withPopoverLocation(r){return this._popoverLocation=r,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof M?this._origin.nativeElement:zd(this._origin)?this._origin:null}_getOriginPoint(r,e,t){let n;if(t.originX=="center")n=r.left+r.width/2;else{let a=this._isRtl()?r.right:r.left,s=this._isRtl()?r.left:r.right;n=t.originX=="start"?a:s}e.left<0&&(n-=e.left);let o;return t.originY=="center"?o=r.top+r.height/2:o=t.originY=="top"?r.top:r.bottom,e.top<0&&(o-=e.top),{x:n,y:o}}_getOverlayPoint(r,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:r.x+n,y:r.y+o}}_getOverlayFit(r,e,t,n){let o=_f(e),{x:a,y:s}=r,c=this._getOffset(n,"x"),d=this._getOffset(n,"y");c&&(a+=c),d&&(s+=d);let h=0-a,p=a+o.width-t.width,w=0-s,A=s+o.height-t.height,U=this._subtractOverflows(o.width,h,p),ae=this._subtractOverflows(o.height,w,A),F=U*ae;return{visibleArea:F,isCompletelyWithinViewport:o.width*o.height===F,fitsInViewportVertically:ae===o.height,fitsInViewportHorizontally:U==o.width}}_canFitWithFlexibleDimensions(r,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,o=t.right-e.x,a=gf(this._overlayRef.getConfig().minHeight),s=gf(this._overlayRef.getConfig().minWidth),c=r.fitsInViewportVertically||a!=null&&a<=n,d=r.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(r,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:r.x+this._previousPushAmount.x,y:r.y+this._previousPushAmount.y};let n=_f(e),o=this._viewportRect,a=Math.max(r.x+n.width-o.width,0),s=Math.max(r.y+n.height-o.height,0),c=Math.max(o.top-t.top-r.y,0),d=Math.max(o.left-t.left-r.x,0),h=0,p=0;return n.width<=o.width?h=d||-a:h=r.x<this._getViewportMarginStart()?o.left-t.left-r.x:0,n.height<=o.height?p=c||-s:p=r.y<this._getViewportMarginTop()?o.top-t.top-r.y:0,this._previousPushAmount={x:h,y:p},{x:r.x+h,y:r.y+p}}_applyPosition(r,e){if(this._setTransformOrigin(r),this._setOverlayElementStyles(e,r),this._setBoundingBoxStyles(e,r),r.panelClass&&this._addPanelClasses(r.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(r!==this._lastPosition||!this._lastScrollVisibility||!lw(this._lastScrollVisibility,t)){let n=new el(r,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=r,this._isInitialRender=!1}_setTransformOrigin(r){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=r.overlayY;r.overlayX==="center"?t="center":this._isRtl()?t=r.overlayX==="start"?"right":"left":t=r.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(r,e){let t=this._viewportRect,n=this._isRtl(),o,a,s;if(e.overlayY==="top")a=r.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-r.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let A=Math.min(t.bottom-r.y+t.top,r.y),U=this._lastBoundingBoxSize.height;o=A*2,a=r.y-A,o>U&&!this._isInitialRender&&!this._growAfterOpen&&(a=r.y-U/2)}let c=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,d=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,h,p,w;if(d)w=t.width-r.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=r.x-this._getViewportMarginStart();else if(c)p=r.x,h=t.right-r.x-this._getViewportMarginEnd();else{let A=Math.min(t.right-r.x+t.left,r.x),U=this._lastBoundingBoxSize.width;h=A*2,p=r.x-A,h>U&&!this._isInitialRender&&!this._growAfterOpen&&(p=r.x-U/2)}return{top:a,left:p,bottom:s,right:w,width:h,height:o}}_setBoundingBoxStyles(r,e){let t=this._calculateBoundingBoxRect(r,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;n.width=nt(t.width),n.height=nt(t.height),n.top=nt(t.top)||"auto",n.bottom=nt(t.bottom)||"auto",n.left=nt(t.left)||"auto",n.right=nt(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(n.maxHeight=nt(o)),a&&(n.maxWidth=nt(a))}this._lastBoundingBoxSize=t,tr(this._boundingBox.style,n)}_resetBoundingBoxStyles(){tr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){tr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(r,e){let t={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(n){let h=this._viewportRuler.getViewportScrollPosition();tr(t,this._getExactOverlayY(e,r,h)),tr(t,this._getExactOverlayX(e,r,h))}else t.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(n?t.maxHeight=nt(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(n?t.maxWidth=nt(a.maxWidth):o&&(t.maxWidth="")),tr(this._pane.style,t)}_getExactOverlayY(r,e,t){let n={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,r);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),r.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;n.bottom=`${a-(o.y+this._overlayRect.height)}px`}else n.top=nt(o.y);return n}_getExactOverlayX(r,e,t){let n={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,r);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=r.overlayX==="end"?"left":"right":a=r.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;n.right=`${s-(o.x+this._overlayRect.width)}px`}else n.left=nt(o.x);return n}_getScrollVisibility(){let r=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:uf(r,t),isOriginOutsideView:jd(r,t),isOverlayClipped:uf(e,t),isOverlayOutsideView:jd(e,t)}}_subtractOverflows(r,...e){return e.reduce((t,n)=>t-Math.max(n,0),r)}_getNarrowedViewportRect(){let r=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+r-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:r-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(r,e){return e==="x"?r.offsetX==null?this._offsetX:r.offsetX:r.offsetY==null?this._offsetY:r.offsetY}_validatePositions(){}_addPanelClasses(r){this._pane&&Zi(r).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(r=>{this._pane.classList.remove(r)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let r=this._origin;if(r instanceof M)return r.nativeElement.getBoundingClientRect();if(r instanceof Element)return r.getBoundingClientRect();let e=r.width||0,t=r.height||0;return{top:r.y,bottom:r.y+t,left:r.x,right:r.x+e,height:t,width:e}}_getContainerRect(){let r=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();r&&(e.style.display="block");let t=e.getBoundingClientRect();return r&&(e.style.display=""),t}};function tr(i,r){for(let e in r)r.hasOwnProperty(e)&&(i[e]=r[e]);return i}function gf(i){if(typeof i!="number"&&i!=null){let[r,e]=i.split(sw);return!e||e==="px"?parseFloat(r):null}return i||null}function _f(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function lw(i,r){return i===r?!0:i.isOriginClipped===r.isOriginClipped&&i.isOriginOutsideView===r.isOriginOutsideView&&i.isOverlayClipped===r.isOverlayClipped&&i.isOverlayOutsideView===r.isOverlayOutsideView}var bf="cdk-global-overlay-wrapper";function xn(i){return new il}var il=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(r){let e=r.getConfig();this._overlayRef=r,this._width&&!e.width&&r.updateSize({width:this._width}),this._height&&!e.height&&r.updateSize({height:this._height}),r.hostElement.classList.add(bf),this._isDisposed=!1}top(r=""){return this._bottomOffset="",this._topOffset=r,this._alignItems="flex-start",this}left(r=""){return this._xOffset=r,this._xPosition="left",this}bottom(r=""){return this._topOffset="",this._bottomOffset=r,this._alignItems="flex-end",this}right(r=""){return this._xOffset=r,this._xPosition="right",this}start(r=""){return this._xOffset=r,this._xPosition="start",this}end(r=""){return this._xOffset=r,this._xPosition="end",this}width(r=""){return this._overlayRef?this._overlayRef.updateSize({width:r}):this._width=r,this}height(r=""){return this._overlayRef?this._overlayRef.updateSize({height:r}):this._height=r,this}centerHorizontally(r=""){return this.left(r),this._xPosition="center",this}centerVertically(r=""){return this.top(r),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:o,maxWidth:a,maxHeight:s}=t,c=(n==="100%"||n==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),h=this._xPosition,p=this._xOffset,w=this._overlayRef.getConfig().direction==="rtl",A="",U="",ae="";c?ae="flex-start":h==="center"?(ae="center",w?U=p:A=p):w?h==="left"||h==="end"?(ae="flex-end",A=p):(h==="right"||h==="start")&&(ae="flex-start",U=p):h==="left"||h==="start"?(ae="flex-start",A=p):(h==="right"||h==="end")&&(ae="flex-end",U=p),r.position=this._cssPosition,r.marginLeft=c?"0":A,r.marginTop=d?"0":this._topOffset,r.marginBottom=this._bottomOffset,r.marginRight=c?"0":U,e.justifyContent=ae,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(bf),t.justifyContent=t.alignItems=r.marginTop=r.marginBottom=r.marginLeft=r.marginRight=r.position="",this._overlayRef=null,this._isDisposed=!0}},kf=(()=>{class i{_injector=l(q);constructor(){}global(){return xn()}flexibleConnectedTo(e){return ir(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Xo=new _("OVERLAY_DEFAULT_CONFIG");function bi(i,r){i.get(Me).load(Df);let e=i.get(nl),t=i.get($),n=i.get(be),o=i.get(Ri),a=i.get(Le),s=i.get(fe,null,{optional:!0})||i.get(ft).createRenderer(null,null),c=new _i(r),d=i.get(Xo,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=r?.usePopover??d:c.usePopover=!1;let h=t.createElement("div"),p=t.createElement("div");h.id=n.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),p.appendChild(h),c.usePopover&&(p.setAttribute("popover","manual"),p.classList.add("cdk-overlay-popover"));let w=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return zd(w)?w.after(p):w?.type==="parent"?w.element.appendChild(p):e.getContainerElement().appendChild(p),new qr(new Qo(h,o,i),p,h,c,i.get(H),i.get(Cf),t,i.get(Ai),i.get(xf),r?.disableAnimations??i.get(Pa,null,{optional:!0})==="NoopAnimations",i.get(pt),s)}var Sf=(()=>{class i{scrollStrategies=l(yf);_positionBuilder=l(kf);_injector=l(q);constructor(){}create(e){return bi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),cw=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],dw=new _("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(q);return()=>Ji(i)}}),Yr=(()=>{class i{elementRef=l(M);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Ef=new _("cdk-connected-overlay-default-config"),rl=(()=>{class i{_dir=l(Le,{optional:!0});_injector=l(q);_overlayRef;_templatePortal;_backdropSubscription=ye.EMPTY;_attachSubscription=ye.EMPTY;_detachSubscription=ye.EMPTY;_positionSubscription=ye.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(dw);_ngZone=l(H);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new I;positionChange=new I;attach=new I;detach=new I;overlayKeydown=new I;overlayOutsideClick=new I;constructor(){let e=l(Ve),t=l(Ke),n=l(Ef,{optional:!0}),o=l(Xo,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ut(e,t),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=cw);let e=this._overlayRef=bi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!He(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let n=this._getOriginElement(),o=Je(t);(!n||n!==o&&!n.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new _i({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=ir(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Yr?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Yr?this.origin.elementRef.nativeElement:this.origin instanceof M?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Im(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",D],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",D],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",D],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",D],push:[2,"cdkConnectedOverlayPush","push",D],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",D],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",D],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[me]})}return i})(),Dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({providers:[Sf],imports:[Ne,Cn,Qs,Qs]})}return i})();function en(i){return i.buttons===0||i.detail===0}function tn(i){let r=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Jo;function Mf(){if(Jo==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Jo=!0}))}finally{Jo=Jo||!1}return Jo}function Qr(i){return Mf()?i:!!i.capture}var Rf=new _("cdk-input-modality-detector-options"),If={ignoreKeys:[18,17,224,91,16]},Tf=650,Ud={passive:!0,capture:!0},Af=(()=>{class i{_platform=l(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new tt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Je(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Tf||(this._modality.next(en(e)?"keyboard":"mouse"),this._mostRecentTarget=Je(e))};_onTouchstart=e=>{if(tn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Je(e)};constructor(){let e=l(H),t=l($),n=l(Rf,{optional:!0});if(this._options=g(g({},If),n),this.modalityDetected=this._modality.pipe(br(1)),this.modalityChanged=this.modalityDetected.pipe(hc()),this._platform.isBrowser){let o=l(ft).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Ud),o.listen(t,"mousedown",this._onMousedown,Ud),o.listen(t,"touchstart",this._onTouchstart,Ud)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ea=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(ea||{}),Of=new _("cdk-focus-monitor-default-options"),ol=Qr({passive:!0,capture:!0}),Et=(()=>{class i{_ngZone=l(H);_platform=l(de);_inputModalityDetector=l(Af);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l($);_stopInputModalityDetector=new b;constructor(){let e=l(Of,{optional:!0});this._detectionMode=e?.detectionMode||ea.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Je(e);for(let n=t;n;n=n.parentElement)e.type==="focus"?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=Ze(e);if(!this._platform.isBrowser||n.nodeType!==1)return Y();let o=Xn(n)||this._document,a=this._elementInfo.get(n);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new b,rootNode:o};return this._elementInfo.set(n,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=Ze(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let o=Ze(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ea.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ea.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Tf:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),o=Je(e);!n||!n.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,ol),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,ol)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(G(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ol),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ol),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,o)=>{(o===e||n.checkChildren&&o.contains(e))&&t.push([o,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Hd=(()=>{class i{_elementRef=l(M);_focusMonitor=l(Et);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new I;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return i})();var kn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return i})(),al;function hw(){if(al===void 0&&(al=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(al=i.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return al}function nr(i){return hw()?.createHTML(i)||i}function Ff(i,r,e){let t=e.sanitize(It.HTML,r);i.innerHTML=nr(t||"")}var Pf=new Set,rr,Zr=(()=>{class i{_platform=l(de);_nonce=l(Cr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):uw}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&mw(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function mw(i,r){if(!Pf.has(i))try{rr||(rr=document.createElement("style"),r&&rr.setAttribute("nonce",r),rr.setAttribute("type","text/css"),document.head.appendChild(rr)),rr.sheet&&(rr.sheet.insertRule(`@media ${i} {body{ }}`,0),Pf.add(i))}catch(e){console.error(e)}}function uw(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var ta=(()=>{class i{_mediaMatcher=l(Zr);_zone=l(H);_queries=new Map;_destroySubject=new b;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Lf(Zi(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=Lf(Zi(e)).map(a=>this._registerQuery(a).observable),o=Gi(n);return o=Oa(o.pipe(Xe(1)),o.pipe(br(1),dn(0))),o.pipe(te(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new _t(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Ae(t),te(({matches:a})=>({query:e,matches:a})),G(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Lf(i){return i.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function pw(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let r=0;r<i.addedNodes.length;r++)if(!(i.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<i.removedNodes.length;r++)if(!(i.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var Nf=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Bf=(()=>{class i{_mutationObserverFactory=l(Nf);_observedElements=new Map;_ngZone=l(H);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Ze(e);return new _t(n=>{let a=this._observeElement(t).pipe(te(s=>s.filter(c=>!pw(c))),_e(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{n.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new b,n=this._mutationObserverFactory.create(o=>t.next(o));n&&n.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:n,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:n}=this._observedElements.get(e);t&&t.disconnect(),n.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ia=(()=>{class i{_contentObserver=l(Bf);_elementRef=l(M);event=new I;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=kt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(dn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",D],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),na=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({providers:[Nf]})}return i})();var Wd=(()=>{class i{_platform=l(de);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return gw(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=fw(Dw(e));if(t&&(jf(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),o=jf(e);return e.hasAttribute("contenteditable")?o!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Cw(e)?!1:n==="audio"?e.hasAttribute("controls")?o!==-1:!1:n==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return xw(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function fw(i){try{return i.frameElement}catch(r){return null}}function gw(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function _w(i){let r=i.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function bw(i){return yw(i)&&i.type=="hidden"}function vw(i){return ww(i)&&i.hasAttribute("href")}function yw(i){return i.nodeName.toLowerCase()=="input"}function ww(i){return i.nodeName.toLowerCase()=="a"}function Uf(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let r=i.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function jf(i){if(!Uf(i))return null;let r=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function Cw(i){let r=i.nodeName.toLowerCase(),e=r==="input"&&i.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function xw(i){return bw(i)?!1:_w(i)||vw(i)||i.hasAttribute("contenteditable")||Uf(i)}function Dw(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Gd=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,t,n,o=!1,a){this._element=r,this._checker=e,this._ngZone=t,this._document=n,this._injector=a,o||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(r),!!t}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let t=0;t<e.length;t++){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let t=e.length-1;t>=0;t--){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?xe(r,{injector:this._injector}):setTimeout(r)}},qd=(()=>{class i{_checker=l(Wd);_ngZone=l(H);_document=l($);_injector=l(q);constructor(){l(Me).load(kn)}create(e,t=!1){return new Gd(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Hf=new _("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),$f=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),kw=0,ra=(()=>{class i{_ngZone=l(H);_defaultOptions=l($f,{optional:!0});_liveElement;_document=l($);_sanitizer=l(Ao);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Hf,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=n&&n.politeness?n.politeness:"polite"),a==null&&n&&(a=n.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ff(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),n=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return n.classList.add(e),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),n.id=`cdk-live-announcer-${kw++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let o=t[n],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Sn=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Sn||{}),Vf="cdk-high-contrast-black-on-white",zf="cdk-high-contrast-white-on-black",$d="cdk-high-contrast-active",Gf=(()=>{class i{_platform=l(de);_hasCheckedHighContrastMode=!1;_document=l($);_breakpointSubscription;constructor(){this._breakpointSubscription=l(ta).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Sn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Sn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Sn.BLACK_ON_WHITE}return Sn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove($d,Vf,zf),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Sn.BLACK_ON_WHITE?e.add($d,Vf):t===Sn.WHITE_ON_BLACK&&e.add($d,zf)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Yd=(()=>{class i{constructor(){l(Gf)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[na]})}return i})();function Sw(i,r){}var En=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Qd=(()=>{class i extends wn{_elementRef=l(M);_focusTrapFactory=l(qd);_config;_interactivityChecker=l(Wd);_ngZone=l(H);_focusMonitor=l(Et);_renderer=l(fe);_changeDetectorRef=l(J);_injector=l(q);_platform=l(de);_document=l($);_portalOutlet;_focusTrapped=new b;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(En,{optional:!0})||new En,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),a=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||xe(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=Jn(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Jn();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Jn()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&ge(gi,7),t&2){let o;S(o=E())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&N("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[W],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&ke(0,Sw,0,0,"ng-template",0)},dependencies:[gi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),oa=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new b;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(r,e){this.overlayRef=r,this.config=e,this.disableClose=e.disableClose,this.backdropClick=r.backdropClick(),this.keydownEvents=r.keydownEvents(),this.outsidePointerEvents=r.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!He(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=r.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(r,e){if(this._canClose(r)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(r),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(r="",e=""){return this.overlayRef.updateSize({width:r,height:e}),this}addPanelClass(r){return this.overlayRef.addPanelClass(r),this}removePanelClass(r){return this.overlayRef.removePanelClass(r),this}_canClose(r){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(r,e,this.componentInstance))}},Ew=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=l(q);return()=>Kr(i)}}),Mw=new _("DialogData"),Rw=new _("DefaultDialogConfig");function Iw(i){let r=oe(i),e=new I;return{valueSignal:r,get value(){return r()},change:e,ngOnDestroy(){e.complete()}}}var Zd=(()=>{class i{_injector=l(q);_defaultOptions=l(Rw,{optional:!0});_parentDialog=l(i,{optional:!0,skipSelf:!0});_overlayContainer=l(nl);_idGenerator=l(be);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;_ariaHiddenElements=new Map;_scrollStrategy=l(Ew);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Mi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ae(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new En;t=g(g({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),a=bi(this._injector,o),s=new oa(a,t),c=this._attachContainer(a,s,t);if(s.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Xe(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,c,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Kd(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Kd(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Kd(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new _i({positionStrategy:e.positionStrategy||xn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,a=[{provide:En,useValue:n},{provide:oa,useValue:t},{provide:qr,useValue:e}],s;n.container?typeof n.container=="function"?s=n.container:(s=n.container.type,a.push(...n.container.providers(n))):s=Qd;let c=new fi(s,n.viewContainerRef,q.create({parent:o||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,t,n,o){if(e instanceof Ve){let a=this._createInjector(o,t,n,void 0),s={$implicit:o.data,dialogRef:t};o.templateContext&&(s=g(g({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new Ut(e,null,s,a))}else{let a=this._createInjector(o,t,n,this._injector),s=n.attachComponentPortal(new fi(e,o.viewContainerRef,a));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,n,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:Mw,useValue:e.data},{provide:oa,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,n)):s.push(...e.providers)),e.direction&&(!a||!a.get(Le,null,{optional:!0}))&&s.push({provide:Le,useValue:Iw(e.direction)}),q.create({parent:a||o,providers:s})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Kd(i,r){let e=i.length;for(;e--;)r(i[e])}var Wf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({providers:[Zd],imports:[Dn,Cn,Yd,Cn]})}return i})();function et(i){return i!=null&&`${i}`!="false"}var qf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Tw=new _("MATERIAL_ANIMATIONS"),Yf=null;function Xd(){return l(Tw,{optional:!0})?.animationsDisabled||l(Pa,{optional:!0})==="NoopAnimations"?"di-disabled":(Yf??=l(Zr).matchMedia("(prefers-reduced-motion)").matches,Yf?"reduced-motion":"enabled")}function ve(){return Xd()!=="enabled"}var Aw=200,sl=class{_letterKeyStream=new b;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new b;selectedItem=this._selectedItem;constructor(r,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Aw;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(dt(e=>this._pressedLetters.push(e)),dn(r),_e(()=>this._pressedLetters.length>0),te(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let n=(this._selectedItemIndex+t)%this._items.length,o=this._items[n];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};var Xr=class{_items;_activeItemIndex=oe(-1);_activeItem=oe(null);_wrap=!1;_typeaheadSubscription=ye.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Wi?this._itemChangesSubscription=r.changes.subscribe(t=>this._itemsChanged(t.toArray())):pn(r)&&(this._effectRef=Vn(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new b;change=new b;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new sl(e,{debounceInterval:typeof r=="number"?r:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}else return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&n){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&n){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&n){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&n){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(n||He(r,"shiftKey"))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),t=typeof r=="number"?r:e.indexOf(r),n=e[t];this._activeItem.set(n??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let n=(this._activeItemIndex()+r*t+e.length)%e.length,o=e[n];if(!this._skipPredicateFn(o)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let t=this._getItemsArray();if(t[r]){for(;this._skipPredicateFn(t[r]);)if(r+=e,!t[r])return;this.setActiveItem(r)}}_getItemsArray(){return pn(this._items)?this._items():this._items instanceof Wi?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let t=r.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var la=class extends Xr{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var vi=class extends Xr{_origin="program";setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Zf=" ";function th(i,r,e){let t=dl(i,r);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),i.setAttribute(r,t.join(Zf)))}function hl(i,r,e){let t=dl(i,r);e=e.trim();let n=t.filter(o=>o!==e);n.length?i.setAttribute(r,n.join(Zf)):i.removeAttribute(r)}function dl(i,r){return i.getAttribute(r)?.match(/\S+/g)??[]}var Xf="cdk-describedby-message",cl="cdk-describedby-host",eh=0,Jf=(()=>{class i{_platform=l(de);_document=l($);_messageRegistry=new Map;_messagesContainer=null;_id=`${eh++}`;constructor(){l(Me).load(kn),this._id=l(zn)+"-"+eh++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let o=Jd(t,n);typeof t!="string"?(Qf(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let o=Jd(t,n);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${cl}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(cl);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement("div");Qf(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(Jd(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=dl(e,"aria-describedby").filter(n=>n.indexOf(Xf)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);th(e,"aria-describedby",n.messageElement.id),e.setAttribute(cl,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,hl(e,"aria-describedby",n.messageElement.id),e.removeAttribute(cl)}_isElementDescribedByMessage(e,t){let n=dl(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&n.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let n=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return n?!o||o.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Jd(i,r){return typeof i=="string"?`${r||""}/${i}`:i}function Qf(i,r){i.id||(i.id=`${Xf}-${r}-${eh++}`)}function Ow(i,r){}var ul=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},ih="mdc-dialog--open",eg="mdc-dialog--opening",tg="mdc-dialog--closing",Fw=150,Pw=75,Lw=(()=>{class i extends Qd{_animationStateChanged=new I;_animationsEnabled=!ve();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ng(this._config.enterAnimationDuration)??Fw:0;_exitAnimationDuration=this._animationsEnabled?ng(this._config.exitAnimationDuration)??Pw:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ig,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(eg,ih)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ih),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ih),this._animationsEnabled?(this._hostElement.style.setProperty(ig,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(tg)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(eg,tg)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(ot("id",n._config.id),N("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),T("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[W],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(m(0,"div",0)(1,"div",1),ke(2,Ow,0,0,"ng-template",2),u()())},dependencies:[gi],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),ig="--mat-dialog-transition-duration";function ng(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?kt(i.substring(0,i.length-2)):i.endsWith("s")?kt(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var ml=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(ml||{}),Ht=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new lc(1);_beforeClosed=new lc(1);_result;_closeFallbackTimeout;_state=ml.OPEN;_closeInteractionType;constructor(r,e,t){this._ref=r,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=r.id,r.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(_e(n=>n.state==="opened"),Xe(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(_e(n=>n.state==="closed"),Xe(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),r.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Be(this.backdropClick(),this.keydownEvents().pipe(_e(n=>n.keyCode===27&&!this.disableClose&&!He(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Nw(this,n.type==="keydown"?"keyboard":"mouse"))})}close(r){let e=this._config.closePredicate;e&&!e(r,this._config,this.componentInstance)||(this._result=r,this._containerInstance._animationStateChanged.pipe(_e(t=>t.state==="closing"),Xe(1)).subscribe(t=>{this._beforeClosed.next(r),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=ml.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(r){let e=this._ref.config.positionStrategy;return r&&(r.left||r.right)?r.left?e.left(r.left):e.right(r.right):e.centerHorizontally(),r&&(r.top||r.bottom)?r.top?e.top(r.top):e.bottom(r.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(r="",e=""){return this._ref.updateSize(r,e),this}addPanelClass(r){return this._ref.addPanelClass(r),this}removePanelClass(r){return this._ref.removePanelClass(r),this}getState(){return this._state}_finishDialogClose(){this._state=ml.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Nw(i,r,e){return i._closeInteractionType=r,i.close(e)}var Bw=new _("MatMdcDialogData"),jw=new _("mat-mdc-dialog-default-options"),Vw=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(q);return()=>Kr(i)}}),rg=(()=>{class i{_defaultOptions=l(jw,{optional:!0});_scrollStrategy=l(Vw);_parentDialog=l(i,{optional:!0,skipSelf:!0});_idGenerator=l(be);_injector=l(q);_dialog=l(Zd);_animationsDisabled=ve();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;dialogConfigClass=ul;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Mi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ae(void 0)));constructor(){this._dialogRefConstructor=Ht,this._dialogContainerType=Lw,this._dialogDataToken=Bw}open(e,t){let n;t=g(g({},this._defaultOptions||new ul),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,re(g({},t),{positionStrategy:xn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:En,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(a,s,c)=>(n=new this._dialogRefConstructor(a,t,c),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(n);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var og=(()=>{class i{_dialogRef=l(Ht,{optional:!0});_elementRef=l(M);_dialog=l(rg);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=zw(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i})}return i})(),ji=(()=>{class i extends og{id=l(be).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&ot("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[W]})}return i})(),Vi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ym([Yo])]})}return i})(),zi=(()=>{class i extends og{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&T("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[W]})}return i})();function zw(i,r){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?r.find(t=>t.id===e.id):null}var sF=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({providers:[rg],imports:[Wf,Dn,Cn,Ne]})}return i})();var Jr,ag=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function nh(){if(Jr)return Jr;if(typeof document!="object"||!document)return Jr=new Set(ag),Jr;let i=document.createElement("input");return Jr=new Set(ag.filter(r=>(i.setAttribute("type",r),i.type===r))),Jr}var oi=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(oi||{}),rh=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=oi.HIDDEN;constructor(r,e,t,n=!1){this._renderer=r,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},sg=Qr({passive:!0,capture:!0}),oh=class{_events=new Map;addHandler(r,e,t,n){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(n):o.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,sg)})}removeHandler(r,e,t){let n=this._events.get(r);if(!n)return;let o=n.get(e);o&&(o.delete(t),o.size===0&&n.delete(e),n.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,sg)))}_delegateEventHandler=r=>{let e=Je(r);e&&this._events.get(r.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(o=>o.handleEvent(r))})}},da={enterDuration:225,exitDuration:150},Uw=800,lg=Qr({passive:!0,capture:!0}),cg=["mousedown","touchstart"],dg=["mouseup","mouseleave","touchend","touchcancel"],Hw=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return i})(),ar=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new oh;constructor(r,e,t,n,o){this._target=r,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=Ze(t)),o&&o.get(Me).load(Hw)}fadeInRipple(r,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},da),t.animation);t.centered&&(r=n.left+n.width/2,e=n.top+n.height/2);let a=t.radius||$w(r,e,n),s=r-n.left,c=e-n.top,d=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${s-a}px`,h.style.top=`${c-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,t.color!=null&&(h.style.backgroundColor=t.color),h.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(h);let p=window.getComputedStyle(h),w=p.transitionProperty,A=p.transitionDuration,U=w==="none"||A==="0s"||A==="0s, 0s"||n.width===0&&n.height===0,ae=new rh(this,h,t,U);h.style.transform="scale3d(1, 1, 1)",ae.state=oi.FADING_IN,t.persistent||(this._mostRecentTransientRipple=ae);let F=null;return!U&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ee=()=>{F&&(F.fallbackTimer=null),clearTimeout(Re),this._finishRippleTransition(ae)},ce=()=>this._destroyRipple(ae),Re=setTimeout(ce,d+100);h.addEventListener("transitionend",ee),h.addEventListener("transitioncancel",ce),F={onTransitionEnd:ee,onTransitionCancel:ce,fallbackTimer:Re}}),this._activeRipples.set(ae,F),(U||!d)&&this._finishRippleTransition(ae),ae}fadeOutRipple(r){if(r.state===oi.FADING_OUT||r.state===oi.HIDDEN)return;let e=r.element,t=g(g({},da),r.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",r.state=oi.FADING_OUT,(r._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=Ze(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,cg.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{dg.forEach(e=>{this._triggerElement.addEventListener(e,this,lg)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===oi.FADING_IN?this._startFadeOutTransition(r):r.state===oi.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:t}=r.config;r.state=oi.VISIBLE,!t&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=oi.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=en(r),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Uw;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!tn(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===oi.VISIBLE||r.config.terminateOnPointerUp&&r.state===oi.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(cg.forEach(e=>i._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(dg.forEach(e=>r.removeEventListener(e,this,lg)),this._pointerUpEventsRegistered=!1))}};function $w(i,r,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(t*t+n*n)}var Rn=new _("mat-ripple-global-options"),yi=(()=>{class i{_elementRef=l(M);_animationsDisabled=ve();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(H),t=l(de),n=l(Rn,{optional:!0}),o=l(q);this._globalOptions=n||{},this._rippleRenderer=new ar(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,g(g({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&T("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Gw={capture:!0},Ww=["focus","mousedown","mouseenter","touchstart"],ah="mat-ripple-loader-uninitialized",sh="mat-ripple-loader-class-name",hg="mat-ripple-loader-centered",pl="mat-ripple-loader-disabled",fl=(()=>{class i{_document=l($);_animationsDisabled=ve();_globalRippleOptions=l(Rn,{optional:!0});_platform=l(de);_ngZone=l(H);_injector=l(q);_eventCleanups;_hosts=new Map;constructor(){let e=l(ft).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Ww.map(t=>e.listen(this._document,t,this._onInteraction,Gw)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ah,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(sh))&&e.setAttribute(sh,t.className||""),t.centered&&e.setAttribute(hg,""),t.disabled&&e.setAttribute(pl,"")}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(pl,""):e.removeAttribute(pl)}_onInteraction=e=>{let t=Je(e);if(t instanceof HTMLElement){let n=t.closest(`[${ah}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(sh)),e.append(t);let n=this._globalRippleOptions,o=this._animationsDisabled?0:n?.animation?.enterDuration??da.enterDuration,a=this._animationsDisabled?0:n?.animation?.exitDuration??da.exitDuration,s={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(pl),rippleConfig:{centered:e.hasAttribute(hg),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new ar(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(ah)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return i})();var qw=["mat-icon-button",""],Yw=["*"],Kw=new _("MAT_BUTTON_CONFIG");function mg(i){return i==null?void 0:Ye(i)}var lh=(()=>{class i{_elementRef=l(M);_ngZone=l(H);_animationsDisabled=ve();_config=l(Kw,{optional:!0});_focusMonitor=l(Et);_cleanupClick;_renderer=l(fe);_rippleLoader=l(fl);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Me).load(vt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,n){t&2&&(N("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),Qe(n.color?"mat-"+n.color:""),T("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",D],disabled:[2,"disabled","disabled",D],ariaDisabled:[2,"aria-disabled","ariaDisabled",D],disabledInteractive:[2,"disabledInteractive","disabledInteractive",D],tabIndex:[2,"tabIndex","tabIndex",mg],_tabindex:[2,"tabindex","_tabindex",mg]}})}return i})(),sr=(()=>{class i extends lh{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[W],attrs:qw,ngContentSelectors:Yw,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(se(),Ii(0,"span",0),P(1),Ii(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return i})();var gl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[Ne]})}return i})();var Qw=["matButton",""],Zw=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Xw=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ug=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),$t=(()=>{class i extends lh{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Jw(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?ug.get(this._appearance):null,o=ug.get(e);n&&t.remove(...n),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[W],attrs:Qw,ngContentSelectors:Xw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(se(Zw),Ii(0,"span",0),P(1),Tt(2,"span",1),P(3,1),qt(),P(4,2),Ii(5,"span",2)(6,"span",3)),t&2&&T("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return i})();function Jw(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var eC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[gl,Ne]})}return i})();var tC=["tooltip"],iC=20;var nC=new _("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(q);return()=>Ji(i,{scrollThrottle:iC})}}),rC=new _("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var pg="tooltip-panel",oC={passive:!0},aC=8,sC=8,lC=24,cC=200,ha=(()=>{class i{_elementRef=l(M);_ngZone=l(H);_platform=l(de);_ariaDescriber=l(Jf);_focusMonitor=l(Et);_dir=l(Le);_injector=l(q);_viewContainerRef=l(Ke);_mediaMatcher=l(Zr);_document=l($);_renderer=l(fe);_animationsDisabled=ve();_defaultOptions=l(rC,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=fg;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=et(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=et(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=kt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=kt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new b;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=aC}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(G(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new fi(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(G(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof M)return this._overlayRef;this._detach()}let t=this._injector.get(Bi).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${pg}`,o=ir(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(G(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=bi(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(nC)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(G(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(G(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(G(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(G(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(g(g({},n.main),o.main)),this._addOffset(g(g({},n.fallback),o.fallback))])}_addOffset(e){let t=sC,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),xe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:o}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=n==="end"?"left":"right":a=n==="start"?"left":"right":a=t==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${pg}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,oC))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||xe({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!He(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&T("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),fg=(()=>{class i{_changeDetectorRef=l(J);_elementRef=l(M);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ve();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new b;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>lC&&e.width>=cC}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:n),t.classList.add(e?n:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&ge(tC,7),t&2){let o;S(o=E())&&(n._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&k("mouseleave",function(a){return n._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&(Tt(0,"div",1,0),$a("animationend",function(a){return n._handleAnimationEnd(a)}),Tt(2,"div",2),x(3),qt()()),t&2&&(Qe(n.tooltipClass),T("mdc-tooltip--multiline",n._isMultiline),f(3),Ie(n.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return i})();function gg(i){return Error(`Unable to find icon with the name "${i}"`)}function dC(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function _g(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function bg(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var nn=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},yg=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,o){return this._addSvgIconConfig(e,t,new nn(n,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,o){let a=this._sanitizer.sanitize(It.HTML,n);if(!a)throw bg(n);let s=nr(a);return this._addSvgIconConfig(e,t,new nn("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new nn(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let o=this._sanitizer.sanitize(It.HTML,t);if(!o)throw bg(t);let a=nr(o);return this._addSvgIconSetConfig(e,new nn("",a,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(It.RESOURCE_URL,e);if(!t)throw _g(e);let n=this._cachedIconsByUrl.get(t);return n?Y(_l(n)):this._loadSvgIconFromConfig(new nn(e,null)).pipe(dt(o=>this._cachedIconsByUrl.set(t,o)),te(o=>_l(o)))}getNamedSvgIcon(e,t=""){let n=vg(t,e),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Aa(gg(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Y(_l(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(te(t=>_l(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return Y(n);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(gr(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(It.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),Y(null)})));return Fa(o).pipe(te(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw gg(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let o=t[n];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(dt(t=>e.svgText=t),te(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Y(null):this._fetchIcon(e).pipe(dt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,n);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),n);let s=this._svgElementFromString(nr("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(nr("<svg></svg>")),n=e.attributes;for(let o=0;o<n.length;o++){let{name:a,value:s}=n[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,o=n?.withCredentials??!1;if(!this._httpClient)throw dC();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(It.RESOURCE_URL,t);if(!a)throw _g(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(te(d=>nr(d)),_r(()=>this._inProgressUrlFetches.delete(a)),Rm());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(vg(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](t,e);if(o)return hC(o)?new nn(o.url,null,o.options):new nn(o,null)}}static \u0275fac=function(t){return new(t||i)(Z(Fi,8),Z(Ao),Z($,8),Z(jn))};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _l(i){return i.cloneNode(!0)}function vg(i,r){return i+":"+r}function hC(i){return!!(i.url&&i.options)}var mC=["*"],uC=new _("MAT_ICON_DEFAULT_OPTIONS"),pC=new _("mat-icon-location",{providedIn:"root",factory:()=>{let i=l($),r=i?i.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),wg=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],fC=wg.map(i=>`[${i}]`).join(", "),gC=/^url\(['"]?#(.*?)['"]?\)$/,Ui=(()=>{class i{_elementRef=l(M);_iconRegistry=l(yg);_location=l(pC);_errorHandler=l(jn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ye.EMPTY;constructor(){let e=l(new Kt("aria-hidden"),{optional:!0}),t=l(uC,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,o)=>{n.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(fC),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)wg.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(gC):null;if(d){let h=n.get(s);h||(h=[],n.set(s,h)),h.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(Xe(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&(N("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),Qe(n.color?"mat-"+n.color:""),T("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",D],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:mC,decls:1,vars:0,template:function(t,n){t&1&&(se(),P(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return i})(),Cg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[Ne]})}return i})();var xg=(()=>{class i{constructor(e){this.router=e,this._breadcrumbs$=new tt([]),this.breadcrumbs$=this._breadcrumbs$.asObservable(),this.router.events.pipe(_e(t=>t instanceof zt)).subscribe(()=>{this.buildBreadcrumbs()}),this.buildBreadcrumbs()}buildBreadcrumbs(){let e=this.router.routerState.snapshot.root,t=[];this.addBreadcrumb(e,[],t),this._breadcrumbs$.next(t)}addBreadcrumb(e,t,n){if(e){let o=t.concat(e.url.map(a=>a.path));if(e.url.length>0){let a=e.url[0].path,s=a.charAt(0).toUpperCase()+a.slice(1);a==="analysis-group"&&(s="Analysis Group"),a==="search-session"&&(s="Search Session");let c="/"+o.join("/");n.push({label:s,url:c})}e.firstChild&&this.addBreadcrumb(e.firstChild,o,n)}}static{this.\u0275fac=function(t){return new(t||i)(Z(ri))}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function vC(i,r){if(i&1&&(m(0,"a",6),x(1),u()),i&2){let e=C().$implicit;O("routerLink",e.url),f(),wt(" ",e.label," ")}}function yC(i,r){if(i&1&&(m(0,"span",7),x(1),u()),i&2){let e=C().$implicit;f(),wt(" ",e.label," ")}}function wC(i,r){if(i&1&&(m(0,"li",2)(1,"mat-icon",5),x(2,"chevron_right"),u(),V(3,vC,2,2,"a",6),V(4,yC,2,1,"span",7),u()),i&2){let e=r.$index,t=r.$count;f(3),z(e!==t-1?3:-1),f(),z(e===t-1?4:-1)}}function CC(i,r){if(i&1&&(m(0,"nav",0)(1,"ol",1)(2,"li",2)(3,"a",3)(4,"mat-icon",4),x(5,"home"),u()()(),Ge(6,wC,5,2,"li",2,li),wc(8,"async"),u()()),i&2){let e=C();f(6),We(Cc(8,0,e.breadcrumbService.breadcrumbs$))}}var UP=(()=>{class i{constructor(e){this.breadcrumbService=e}static{this.\u0275fac=function(t){return new(t||i)(L(xg))}}static{this.\u0275cmp=R({type:i,selectors:[["app-breadcrumb"]],decls:2,vars:3,consts:[["aria-label","Breadcrumb",1,"breadcrumb-nav"],[1,"breadcrumb-list"],[1,"breadcrumb-item"],["routerLink","/home",1,"breadcrumb-link"],[1,"home-icon"],[1,"separator"],[1,"breadcrumb-link",3,"routerLink"],["aria-current","page",1,"breadcrumb-current"]],template:function(t,n){if(t&1&&(V(0,CC,9,2,"nav",0),wc(1,"async")),t&2){let o;z((o=Cc(1,1,n.breadcrumbService.breadcrumbs$))!=null&&o.length?0:-1)}},dependencies:[Mr,Od,$s,Cg,Ui,Bc],styles:[".breadcrumb-nav[_ngcontent-%COMP%]{padding:16px 50px;background-color:transparent}.breadcrumb-list[_ngcontent-%COMP%]{display:flex;list-style:none;margin:0;padding:0;align-items:center;flex-wrap:wrap}.breadcrumb-item[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px;color:var(--app-text-secondary)}.breadcrumb-link[_ngcontent-%COMP%]{color:var(--app-primary-color);text-decoration:none;font-weight:500;transition:color .2s}.breadcrumb-link[_ngcontent-%COMP%]:hover{color:var(--app-tertiary-color)}.breadcrumb-current[_ngcontent-%COMP%]{font-weight:500;color:var(--app-text-color)}.separator[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;margin:0 4px;color:var(--app-text-secondary);opacity:.5}.home-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--app-primary-color)}"],changeDetection:0})}}return i})();function xC(i,r){if(i&1){let e=qe();m(0,"div",1)(1,"button",2),k("click",function(){we(e);let n=C();return Ce(n.action())}),x(2),u()()}if(i&2){let e=C();f(2),wt(" ",e.data.action," ")}}var DC=["label"];function kC(i,r){}var SC=Math.pow(2,31)-1,ma=class{_overlayRef;instance;containerInstance;_afterDismissed=new b;_afterOpened=new b;_onAction=new b;_durationTimeoutId;_dismissedByAction=!1;constructor(r,e){this._overlayRef=e,this.containerInstance=r,r._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,SC))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Dg=new _("MatSnackBarData"),eo=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},EC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),MC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),RC=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),IC=(()=>{class i{snackBarRef=l(ma);data=l(Dg);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(m(0,"div",0),x(1),u(),V(2,xC,3,1,"div",1)),t&2&&(f(),wt(" ",n.data.message,`
`),f(),z(n.hasAction?2:-1))},dependencies:[$t,EC,MC,RC],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ch="_mat-snack-bar-enter",dh="_mat-snack-bar-exit",TC=(()=>{class i extends wn{_ngZone=l(H);_elementRef=l(M);_changeDetectorRef=l(J);_platform=l(de);_animationsDisabled=ve();snackBarConfig=l(eo);_document=l($);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(q);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new b;_onExit=new b;_onEnter=new b;_animationState="void";_live;_label;_role;_liveElementId=l(be).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===dh?this._completeExit():e===ch&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ch)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ch)},200)))}exit(){return this._destroyed?Y(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(dh)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(dh),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,o="mdc-snackbar__label";n.classList.toggle(o,!n.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let o=t[n],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),n=e.querySelector("[aria-live]");if(t&&n){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&ge(gi,7)(DC,7),t&2){let o;S(o=E())&&(n._portalOutlet=o.first),S(o=E())&&(n._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,n){t&1&&k("animationend",function(a){return n.onAnimationEnd(a.animationName)})("animationcancel",function(a){return n.onAnimationEnd(a.animationName)}),t&2&&T("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[W],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),ke(4,kC,0,0,"ng-template",4),u(),j(5,"div"),u()()),t&2&&(f(5),N("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[gi],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return i})(),AC=new _("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new eo}),kg=(()=>{class i{_live=l(ra);_injector=l(q);_breakpointObserver=l(ta);_parentSnackBar=l(i,{optional:!0,skipSelf:!0});_defaultConfig=l(AC);_animationsDisabled=ve();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=IC;snackBarContainerComponent=TC;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let o=g(g({},this._defaultConfig),n);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=q.create({parent:n||this._injector,providers:[{provide:eo,useValue:t}]}),a=new fi(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let n=g(g(g({},new eo),this._defaultConfig),t),o=this._createOverlay(n),a=this._attachSnackBarContainer(o,n),s=new ma(a,o);if(e instanceof Ve){let c=new Ut(e,null,{$implicit:n.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(n,s),d=new fi(e,void 0,c),h=a.attachComponentPortal(d);s.instance=h.instance}return this._breakpointObserver.observe(qf.HandsetPortrait).pipe(G(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),n.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(s,n),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new _i;t.direction=e.direction;let n=xn(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?n.left("0"):s?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,bi(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return q.create({parent:n||this._injector,providers:[{provide:ma,useValue:t},{provide:Dg,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var lr={baseURL:"https://cinder.proteo.info",keycloakCallbackUrl:"https://localhost:4200"};var mL=(()=>{class i{constructor(e){this.http=e,this.baseURL=lr.baseURL,this.collateRedrawSubject=new b}getCollates(e,t,n,o){let a=new Se;e&&(a=a.append("limit",e)),t&&(a=a.append("offset",t)),n&&(a=a.append("search",n)),o&&(a=a.append("tag_ids",o.join(",")));let s=localStorage.getItem("cinderUserAccount");if(s){let c=JSON.parse(s);c.currentLabGroup&&(a=a.append("lab_group",c.currentLabGroup.toString())),c.currentUser&&(a=a.append("users",c.currentUser.toString()))}return this.http.get(`${this.baseURL}/api/collates`,{params:a})}getCollate(e){return this.http.get(`${this.baseURL}/api/collates/${e}`)}createCollate(e,t){return this.http.post(`${this.baseURL}/api/collates/`,{title:e,greeting:t})}updateCollate(e,t){return this.http.put(`${this.baseURL}/api/collates/${e}/`,t)}deleteCollate(e){return this.http.delete(`${this.baseURL}/api/collates/${e}/`)}getCollateTags(e,t=10,n=0){let o=new Se;return e&&(o=o.append("search",e)),t&&(o=o.append("limit",t)),n&&(o=o.append("offset",n)),this.http.get(`${this.baseURL}/api/collate_tags/`,{params:o})}createCollateTag(e){return this.http.post(`${this.baseURL}/api/collate_tags/`,{name:e})}updateCollateTag(e,t){return this.http.put(`${this.baseURL}/api/collate_tags/${e}/`,{name:t})}deleteCollateTag(e){return this.http.delete(`${this.baseURL}/api/collate_tags/${e}/`)}addTagToCollate(e,t){return this.http.post(`${this.baseURL}/api/collate_tags/${t}/add_to_collate/`,{collate:e})}removeTagFromCollate(e,t){return this.http.post(`${this.baseURL}/api/collate_tags/${t}/remove_from_collate/`,{collate:e})}getCollateTagByID(e){return this.http.get(`${this.baseURL}/api/collate_tags/${e}/`)}static{this.\u0275fac=function(t){return new(t||i)(Z(Fi))}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var _L=(()=>{class i{constructor(e){this.http=e,this.token="",this.loggedIn=!1,this.baseURL=lr.baseURL,this.username="",this.lastVisited=new Date,this.userAccount={token:"",username:"",darkMode:!1,lastVisited:new Date,currentLabGroup:null,currentUser:null},this.triggerLoginSubject=new b,this.is_staff=!1,this.currentUser=null,this.initializeTheme()}initializeTheme(){let e=document.getElementsByTagName("body")[0];if(!e)return;let t=localStorage.getItem("cinderUserAccount");if(t)try{JSON.parse(t).darkMode?(e.classList.add("dark-theme"),e.classList.remove("light-theme")):(e.classList.remove("dark-theme"),e.classList.add("light-theme"))}catch(n){e.classList.add("light-theme")}else e.classList.add("light-theme")}login(e,t){this.loggedIn=!1;let n=new Vt;return n.append("Content-Type","application/json"),n.append("Accept","application/json"),this.http.post(`${this.baseURL}/api/token-auth/`,{username:e,password:t},{responseType:"json",observe:"body"})}logout(){this.loggedIn=!1,this.token="",localStorage.removeItem("cinderToken"),localStorage.removeItem("cinderUsername"),localStorage.removeItem("cinderUserAccount"),this.currentUser=null}loadAuthFromStorage(){let e=localStorage.getItem("cinderToken"),t=localStorage.getItem("cinderUsername"),n=localStorage.getItem("cinderLastVisited");e&&t&&(this.userAccount.token=e,this.userAccount.username=t,this.loggedIn=!0,localStorage.removeItem("cinderToken"),localStorage.removeItem("cinderUsername"),localStorage.setItem("cinderUserAccount",JSON.stringify(this.userAccount))),n&&(this.userAccount.lastVisited=new Date(JSON.parse(n)));let o=localStorage.getItem("cinderUserAccount");o&&(this.userAccount=JSON.parse(o),this.userAccount.token!==""&&this.userAccount.username!==""&&(this.loggedIn=!0));let a=document.getElementsByTagName("body")[0];this.userAccount.darkMode?(a.classList.add("dark-theme"),a.classList.remove("light-theme")):(a.classList.remove("dark-theme"),a.classList.add("light-theme"))}saveToStorage(){localStorage.setItem("cinderUserAccount",JSON.stringify(this.userAccount))}getProjectPermissions(e){return this.http.get(`${this.baseURL}/api/projects/${e}/permissions/`,{responseType:"json",observe:"body"})}getAnalysisGroupPermissions(e){return this.http.get(`${this.baseURL}/api/analysis_groups/${e}/permissions/`,{responseType:"json",observe:"body"})}getCollatePermissions(e){return this.http.get(`${this.baseURL}/api/collates/${e}/permissions/`,{responseType:"json",observe:"body"})}static{this.\u0275fac=function(t){return new(t||i)(Z(Fi))}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var to=(()=>{class i{constructor(e){this.http=e,this.cinderInstanceID=crypto.randomUUID(),this.baseURL=lr.baseURL,this.stringDBCache=new Map,this.keycloakCallbackUrl=lr.keycloakCallbackUrl,this.searchSessionID=null,this.updateFromLabGroupSelection=new b}uploadDataChunk(e="",t,n,o){let a=new FormData;a.append("file",t),a.append("filename",n);let s=new Vt;return s=s.append("Content-Range",o),e!==""?(e.startsWith("http://")&&!e.startsWith("http://localhost")&&(e=e.replace("http://","https://")),this.http.put(e,a,{responseType:"json",observe:"body",headers:s})):this.http.put(`${this.baseURL}/api/chunked_upload/`,a,{responseType:"json",observe:"body",headers:s})}uploadDataChunkComplete(e="",t,n,o){let a=new FormData;return a.append("sha256",t),e.startsWith("http://")&&!e.startsWith("http://localhost")&&(e=e.replace("http://","https://")),n&&o?(a.append("file",n),a.append("filename",o),this.http.post(`${this.baseURL}/api/chunked_upload/`,a,{responseType:"json",observe:"body"})):this.http.post(e,a,{responseType:"json",observe:"body"})}bindUploadedFile(e,t,n,o,a){return this.http.post(`${this.baseURL}/api/project_files/bind_uploaded_file/`,{file_name:o,analysis_group:e,file_type:t,file_category:n,upload_id:a},{responseType:"json",observe:"body"}).pipe(te(s=>(s.extra_data&&(s.extra_data=JSON.parse(s.extra_data)),s)))}processMetadataFile(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/process_uploaded_metadata_file/`,{upload_id:t},{responseType:"json",observe:"body"})}getProjects(e,t=10,n=0,o,a=null,s=null){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let c=new Se;t&&(c=c.append("limit",t.toString())),n&&(c=c.append("offset",n.toString())),o&&o!==""&&(c=c.append("search",o)),a&&(c=c.append("species",a.id.toString()));let d=localStorage.getItem("cinderUserAccount");if(d){let h=JSON.parse(d);h.currentLabGroup?c=c.append("lab_group",h.currentLabGroup.toString()):s&&(c=c.append("lab_group",s.toString())),h.currentUser&&(c=c.append("users",h.currentUser.toString()))}return c=c.append("ordering","-created_at"),this.http.get(`${this.baseURL}/api/projects/`,{responseType:"json",observe:"body",params:c})}updateProject(e,t,n,o=null){return this.http.put(`${this.baseURL}/api/projects/${e}/`,{name:t,description:n,species:o},{responseType:"json",observe:"body"})}deleteProject(e){return this.http.delete(`${this.baseURL}/api/projects/${e}/`,{responseType:"json",observe:"body"})}createProject(e,t){return this.http.post(`${this.baseURL}/api/projects/`,{name:e,description:t},{responseType:"json",observe:"body"})}getAnalysisGroups(e,t=10,n=0,o,a,s){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let c=new Se;t&&(c=c.append("limit",t.toString())),n&&(c=c.append("offset",n.toString())),o&&o!==""&&(c=c.append("search",o)),a&&(c=c.append("project",a.toString()));let d=localStorage.getItem("cinderUserAccount");if(d){let h=JSON.parse(d);h.currentLabGroup?c=c.append("lab_group",h.currentLabGroup.toString()):s&&(c=c.append("lab_group",s.toString())),h.currentUser&&(c=c.append("users",h.currentUser.toString()))}return c=c.append("ordering","-created_at"),this.http.get(`${this.baseURL}/api/analysis_groups/`,{responseType:"json",observe:"body",params:c})}createAnalysisGroup(e,t,n,o){return this.http.post(`${this.baseURL}/api/analysis_groups/`,{name:e,description:t,project:n,analysis_group_type:o},{responseType:"json",observe:"body"})}getProject(e){return this.http.get(`${this.baseURL}/api/projects/${e}/`,{responseType:"json",observe:"body"})}getAnalysisGroup(e){return this.http.get(`${this.baseURL}/api/analysis_groups/${e}/`,{responseType:"json",observe:"body"})}updateAnalysisGroup(e,t,n,o=null,a){let s={name:t,description:n};return o&&(s.curtain_link=o),a&&(s.session_id=a),this.http.put(`${this.baseURL}/api/analysis_groups/${e}/`,s,{responseType:"json",observe:"body"})}refreshCurtainLink(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/refresh_curtain_data/`,{session_id:t},{responseType:"json",observe:"body"})}getCurtainLinkData(e){return this.http.get(`${this.baseURL}/api/analysis_groups/${e}/get_curtain_data/`,{responseType:"json",observe:"body"})}getAnalysisGroupFiles(e){return this.http.get(`${this.baseURL}/api/analysis_groups/${e}/files/`,{responseType:"json",observe:"body"}).pipe(te(t=>t.map(n=>(n.extra_data&&(n.extra_data=JSON.parse(n.extra_data)),n))))}getProjectFileColumns(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/get_columns/`,{responseType:"json",observe:"body"})}createSampleAnnotation(e,t,n,o){return this.http.post(`${this.baseURL}/api/sample_annotations/`,{analysis_group:e,name:t,annotations:n,file:o}).pipe(te(a=>(a.annotations=JSON.parse(a.annotations),a)))}getSampleAnnotation(e){return this.http.get(`${this.baseURL}/api/sample_annotations/${e}/`,{responseType:"json",observe:"body"}).pipe(te(t=>(t.annotations=JSON.parse(t.annotations),t)))}updateSampleAnnotation(e,t,n){return this.http.put(`${this.baseURL}/api/sample_annotations/${e}/`,{name:t,annotations:n},{responseType:"json",observe:"body"}).pipe(te(o=>(o.annotations=JSON.parse(o.annotations),o)))}getProjectFileSampleAnnotations(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/sample_annotations/`,{responseType:"json",observe:"body"}).pipe(te(t=>(t.annotations=JSON.parse(t.annotations),t)))}createComparisonMatrix(e,t,n,o){return this.http.post(`${this.baseURL}/api/comparison_matrices/`,{name:t,matrix:n,analysis_group:e,file:o},{responseType:"json",observe:"body"}).pipe(te(a=>(a.matrix=JSON.parse(a.matrix),a)))}updateComparisonMatrix(e,t,n){return this.http.put(`${this.baseURL}/api/comparison_matrices/${e}/`,{name:t,matrix:n},{responseType:"json",observe:"body"}).pipe(te(o=>(o.matrix=JSON.parse(o.matrix),o)))}getProjectFileComparisonMatrix(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/comparison_matrices/`,{responseType:"json",observe:"body"}).pipe(te(t=>(t.matrix=JSON.parse(t.matrix),t)))}deleteAnalysisGroup(e){return this.http.delete(`${this.baseURL}/api/analysis_groups/${e}/`,{responseType:"json",observe:"body"})}createSearch(e,t,n=null,o=.6,a=1.31,s="full",c=void 0){let d={analysis_groups:e,search_term:t};return n&&(d.session_id=n),o&&(d.fc_cutoff=o),a&&(d.p_value_cutoff=a),s&&(d.search_mode=s),c&&(d.species=c.id),this.http.post(`${this.baseURL}/api/search/`,d,{responseType:"json",observe:"body"})}getSearchSessionID(){return this.http.get(`${this.baseURL}/api/search/session_id/`,{responseType:"json",observe:"body"})}getSearchSession(e){return this.http.get(`${this.baseURL}/api/search/${e}/`,{responseType:"json",observe:"body"})}getSearchSessions(e,t=10,n=0,o,a=!1,s=null){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let c=new Se;return t&&(c=c.append("limit",t.toString())),n&&(c=c.append("offset",n.toString())),o&&o!==""&&(c=c.append("search",o)),a&&(c=c.append("user_owned_only","true")),s&&(c=c.append("session_id",s)),c=c.append("ordering","-created_at"),this.http.get(`${this.baseURL}/api/search/`,{responseType:"json",observe:"body",params:c})}getSearchResults(e,t=10,n=0,o="df",a="",s="desc",c="",d=0,h=0){let p=new Se;return t&&(p=p.append("limit",t.toString())),n&&(p=p.append("offset",n.toString())),a&&a!==""&&s&&s!==""&&(s==="asc"?p=p.append("ordering",a):s==="desc"&&(p=p.append("ordering",`-${a}`))),c&&c!==""&&(p=p.append("search",c)),d&&d>0&&(p=p.append("log2_fc",d.toString())),h&&h>0&&(p=p.append("log10_p",h.toString())),p=p.append("file_category",o),p=p.append("search_id",e.toString()),this.http.get(`${this.baseURL}/api/search_results/`,{responseType:"json",observe:"body",params:p})}getSearchResultRelated(e,t="df",n=null){let o=new Se;return o=o.append("file_category",t),n&&(o=o.append("primary_id",n)),this.http.get(`${this.baseURL}/api/search_results/${e}/get_related/`,{responseType:"json",observe:"body",params:o})}updateProjectFileExtraData(e,t){return this.http.put(`${this.baseURL}/api/project_files/${e}/`,{extra_data:t},{responseType:"json",observe:"body"}).pipe(te(n=>(n.extra_data&&(n.extra_data=JSON.parse(n.extra_data)),n)))}getProjectCount(e=null){let t=new Se,n=localStorage.getItem("cinderUserAccount");if(n){let o=JSON.parse(n);o.currentLabGroup?t=t.append("lab_group",o.currentLabGroup.toString()):e&&(t=t.append("lab_group",e.toString()))}return this.http.get(`${this.baseURL}/api/projects/get_count/`,{responseType:"json",observe:"body",params:t})}getAnalysisGroupCount(e=null){let t=new Se,n=localStorage.getItem("cinderUserAccount");if(n){let o=JSON.parse(n);o.currentLabGroup?t=t.append("lab_group",o.currentLabGroup.toString()):e&&(t=t.append("lab_group",e.toString()))}return this.http.get(`${this.baseURL}/api/analysis_groups/get_count/`,{responseType:"json",observe:"body",params:t})}deleteSearchSession(e){return this.http.delete(`${this.baseURL}/api/search/${e}/`,{responseType:"json",observe:"body"})}getAnalysisGroupsFromProjects(e){return this.http.post(`${this.baseURL}/api/search/get_analysis_groups_from_projects/`,{projects:e.map(t=>t.id)})}getSpecies(e,t=10,n=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new Se;return t&&(a=a.append("limit",t.toString())),n&&(a=a.append("offset",n.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","official_name"),this.http.get(`${this.baseURL}/api/species/`,{responseType:"json",observe:"body",params:a})}getSpeciesByID(e){return this.http.get(`${this.baseURL}/api/species/${e}/`,{responseType:"json",observe:"body"})}getTissues(e,t=10,n=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new Se;return t&&(a=a.append("limit",t.toString())),n&&(a=a.append("offset",n.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","identifier"),this.http.get(`${this.baseURL}/api/tissues/`,{responseType:"json",observe:"body",params:a})}getTissueByID(e){return this.http.get(`${this.baseURL}/api/tissues/${e}/`,{responseType:"json",observe:"body"})}getSubcellularLocations(e,t=10,n=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new Se;return t&&(a=a.append("limit",t.toString())),n&&(a=a.append("offset",n.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","identifier"),this.http.get(`${this.baseURL}/api/subcellular_locations/`,{responseType:"json",observe:"body",params:a})}getSubcellularLocationByID(e){return this.http.get(`${this.baseURL}/api/subcellular_locations/${e}/`,{responseType:"json",observe:"body"})}getHumandDiseases(e,t=10,n=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new Se;return t&&(a=a.append("limit",t.toString())),n&&(a=a.append("offset",n.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","identifier"),this.http.get(`${this.baseURL}/api/human_diseases/`,{responseType:"json",observe:"body",params:a})}getUniqueComparisonLabel(e,t){return this.http.get(`${this.baseURL}/api/project_files/${e}/get_unique_comparison_label/`,{responseType:"json",observe:"body",params:new Se().append("column",t)})}composeAnalysisGroupFilesFromCurtainData(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/compose_files_from_curtain_data/`,{session_id:t},{responseType:"json",observe:"body"})}deleteProjectFile(e){return this.http.delete(`${this.baseURL}/api/project_files/${e}/`,{responseType:"json",observe:"body"})}exportSearchData(e,t,n=0,o=0,a){return this.http.post(`${this.baseURL}/api/search/${e}/export_search_data/`,{search_term:t,log2_fc:n,p_value:o,session_id:a,instance_id:this.cinderInstanceID},{responseType:"json",observe:"body"})}downloadTempFile(e){return this.http.get(`${this.baseURL}/api/search/download_temp_file/`,{responseType:"blob",observe:"body",params:new Se().append("token",e)})}getFileDownloadToken(e){return this.http.get(`${this.baseURL}/api/project_files/${e}/request_download_token/`,{responseType:"json",observe:"body"})}getProjectUniqueConditions(e){return this.http.get(`${this.baseURL}/api/projects/${e}/get_unique_conditions/`,{responseType:"json",observe:"body"})}getLabGroups(e="",t=10,n=0){let o=new Se;return e&&e!==""&&(o=o.append("search",e)),t&&(o=o.append("limit",t.toString())),n&&(o=o.append("offset",n.toString())),this.http.get(`${this.baseURL}/api/lab_groups/`,{responseType:"json",observe:"body",params:o})}createLabGroup(e){return this.http.post(`${this.baseURL}/api/lab_groups/`,{name:e},{responseType:"json",observe:"body"})}deleteLabGroup(e){return this.http.delete(`${this.baseURL}/api/lab_groups/${e}/`,{responseType:"json",observe:"body"})}addLabGroupMember(e,t){return this.http.post(`${this.baseURL}/api/lab_groups/${e}/add_member/`,{user:t},{responseType:"json",observe:"body"})}removeLabGroupMember(e,t){return this.http.post(`${this.baseURL}/api/lab_groups/${e}/remove_member/`,{user:t},{responseType:"json",observe:"body"})}createUser(e,t,n){return this.http.post(`${this.baseURL}/api/users/`,{username:e,password:t,email:n},{responseType:"json",observe:"body"})}updateUser(e,t,n,o,a,s=null){let c={};return t&&(c.email=t),n&&(c.password=n),o&&(c.last_name=o),a&&(c.first_name=a),s&&(c.username=s),this.http.put(`${this.baseURL}/api/users/${e}/`,c,{responseType:"json",observe:"body"})}removeUser(e){return this.http.delete(`${this.baseURL}/api/users/${e}/`,{responseType:"json",observe:"body"})}getCurrentUser(){return this.http.get(`${this.baseURL}/api/users/get_current_user/`,{responseType:"json",observe:"body"})}getCurrentUserLabGroups(){return this.http.get(`${this.baseURL}/api/users/get_user_lab_group/`,{responseType:"json",observe:"body"})}createUserWithToken(e,t,n,o,a,s,c=null){let d={username:e,token:t,email:n,last_name:o,password:a,first_name:s};return c&&(d.lab_group=c.map(h=>h.id)),this.http.post(`${this.baseURL}/api/users/create_with_token/`,d,{responseType:"json",observe:"body"})}getUser(e){return this.http.get(`${this.baseURL}/api/users/${e}/`,{responseType:"json",observe:"body"})}getUsers(e,t=10,n=0,o=null){let a=new Se;return e&&e!==""&&(a=a.append("search",e)),t&&(a=a.append("limit",t.toString())),n&&(a=a.append("offset",n.toString())),o&&o!==0&&(a=a.append("lab_group",o.toString())),this.http.get(`${this.baseURL}/api/users/`,{responseType:"json",observe:"body",params:a})}getFrontEndTemplateData(){return this.http.get(`${this.baseURL}/api/frontend_template/`,{responseType:"json",observe:"body"})}createMetaDataColumn(e,t,n){let o={analysis_group:e};return t&&(o.name=t.metadataName,o.type=t.metadataType,o.value=t.metadataValue),o.name==="Modification parameters"&&(t.metadataMM&&(o.value+=`;MM=${t.metadataMM}`),t.metadataPP&&(o.value+=`;PP=${t.metadataPP}`),t.metadataTA&&(o.value+=`;TA=${t.metadataTA}`),t.metadataTS&&(o.value+=`;TS=${t.metadataTS}`),t.metadataMT&&(o.value+=`;MT=${t.metadataMT}`),t.metadataAC&&(o.value+=`;AC=${t.metadataAC}`)),n&&(o.source_file=n),this.http.post(`${this.baseURL}/api/metadata_columns/`,o,{responseType:"json",observe:"body"})}updateMetaDataColumn(e,t,n,o,a){let s={};return t&&(s.name=t),o&&(s.value=o),n&&(s.type=n),a!==void 0&&(s.not_applicable=a),this.http.put(`${this.baseURL}/api/metadata_columns/${e}/`,s,{responseType:"json",observe:"body"})}deleteMetaDataColumn(e){return this.http.delete(`${this.baseURL}/api/metadata_columns/${e}/`,{responseType:"json",observe:"body"})}createSourceFile(e,t,n){let o={analysis_group:e,name:t};return n&&(o.description=n),this.http.post(`${this.baseURL}/api/source_files/`,o,{responseType:"json",observe:"body"})}deleteSourceFile(e){return this.http.delete(`${this.baseURL}/api/source_files/${e}/`,{responseType:"json",observe:"body"})}reorganizeColumns(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${t}/reorganize_column/`,{positions:e},{responseType:"json",observe:"body"})}getUnimod(e,t=10,n=0,o){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let a=new Se;return t&&(a=a.append("limit",t.toString())),n&&(a=a.append("offset",n.toString())),o&&o!==""&&(a=a.append("search",`'${o}'`)),a=a.append("ordering","name"),this.http.get(`${this.baseURL}/api/unimod/`,{responseType:"json",observe:"body",params:a})}getMSVocab(e,t=10,n=0,o,a){if(e)return this.http.get(e,{responseType:"json",observe:"body"});let s=new Se;return t&&(s=s.append("limit",t.toString())),n&&(s=s.append("offset",n.toString())),o&&o!==""&&(s=s.append("search",`'${o}'`)),a&&a!==""&&(a==="cleavage agent details"&&(a="cleavage agent"),s=s.append("term_type",a)),s=s.append("ordering","name"),this.http.get(`${this.baseURL}/api/ms_vocab/`,{responseType:"json",observe:"body",params:s})}exportSDRFFile(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/export_sdrf/`,{session_id:t},{responseType:"json",observe:"body"})}updateSourceFile(e,t,n){return this.http.put(`${this.baseURL}/api/source_files/${e}/`,{name:t,description:n},{responseType:"json",observe:"body"})}validateSDRFFile(e,t){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/validate_sdrf/`,{session_id:t},{responseType:"json",observe:"body"})}bindUploadedMetadataFile(e,t,n,o){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/process_uploaded_metadata_file/`,{upload_id:t,file_type:n,session_id:o},{responseType:"json",observe:"body"})}copyMetadataValueToAllInSamePosition(e,t){let n="false";return t&&(n="true"),this.http.post(`${this.baseURL}/api/metadata_columns/${e}/copy_value_to_all_in_same_position/`,{blank_only:n},{responseType:"json",observe:"body"})}analysisGroupReorderColumns(e){return this.http.post(`${this.baseURL}/api/analysis_groups/${e}/reorder_columns/`,{},{responseType:"json",observe:"body"})}getLoginProviderRedirect(){let e=document.createElement("form");e.method="POST",e.action=`${this.baseURL}/_allauth/browser/v1/auth/provider/redirect`;let t=document.createElement("input");t.type="hidden",t.name="provider",t.value="keycloak",e.appendChild(t);let n=document.createElement("input");n.type="hidden",n.name="callback_url",n.value=this.keycloakCallbackUrl,e.appendChild(n);let o=document.createElement("input");o.type="hidden",o.name="process",o.value="login",e.appendChild(o);let a=this.getCSRFTokenFromCookies();if(a){let s=document.createElement("input");s.type="hidden",s.name="csrfmiddlewaretoken",s.value=a,e.appendChild(s)}document.body.appendChild(e),e.submit()}getCSRFTokenFromCookies(){let t=document.cookie.split(";").find(n=>n.trim().startsWith("csrfToken="));return t?t.split("=")[1]:null}getCSRFToken(){return this.http.get(`${this.baseURL}/api/set-csrf/`,{observe:"response"})}getAuthenticationStatus(){return this.http.get(`${this.baseURL}/_allauth/browser/v1/auth/session`,{responseType:"json",observe:"body",withCredentials:!0})}logoutProvider(){let e=new Vt;return e=e.append("X-Session-Token",this.getSessionIDFromCookies()||""),e=e.append("X-CSRFToken",this.getCSRFTokenFromCookies()||""),this.http.delete(`${this.baseURL}/_allauth/browser/v1/auth/session`,{headers:e,withCredentials:!0})}userLogoutProvider(){let e=new Vt;return e=e.append("X-Session-Token",this.getSessionIDFromCookies()||""),e=e.append("X-CSRFToken",this.getCSRFTokenFromCookies()||""),this.http.post(`${this.baseURL}/api/users/logout_provider/`,{withCredentials:!0,headers:e})}getSessionIDFromCookies(){let t=document.cookie.split(";").find(n=>n.trim().startsWith("sessionid="));return t?t.split("=")[1]:null}getUserTokenThroughSession(){return this.http.get(`${this.baseURL}/api/users/get_token/`,{responseType:"json",observe:"body"})}getUserProfile(){return this.http.get(`${this.baseURL}/api/users/get_profile/`,{responseType:"json",observe:"body"})}getStringDBInteractions(e,t,n=400,o="functional",a=0,s=!0){let c=`${e.sort().join(",")}_${t}_${n}_${o}_${a}`,d=this.stringDBCache.get(c);if(d)return d;let h=new Se;h=h.append("identifiers",e.join("%0d")),h=h.append("required_score",n.toString()),h=h.append("species",t),h=h.append("network_type",o),a!==0&&(h=h.append("add_nodes",a.toString())),s&&(h=h.append("show_query_node_labels","1"));let p=this.http.get("https://string-db.org/api/json/network?",{responseType:"json",params:h,observe:"body"}).pipe(go(1));return this.stringDBCache.set(c,p),p}clearStringDBCache(){this.stringDBCache.clear()}static{this.\u0275fac=function(t){return new(t||i)(Z(Fi))}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var mh=class{_box;_destroyed=new b;_resizeSubject=new b;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new _t(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),t.unsubscribe(),this._elementObservables.delete(r)}}).pipe(_e(e=>e.some(t=>t.target===r)),go({bufferSize:1,refCount:!0}),G(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},bl=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(H);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new mh(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _h=["*"];function FC(i,r){i&1&&P(0)}var PC=["tabListContainer"],LC=["tabList"],NC=["tabListInner"],BC=["nextPaginator"],jC=["previousPaginator"],VC=["content"];function zC(i,r){}var UC=["tabBodyWrapper"],HC=["tabHeader"];function $C(i,r){}function GC(i,r){if(i&1&&ke(0,$C,0,0,"ng-template",12),i&2){let e=C().$implicit;O("cdkPortalOutlet",e.templateLabel)}}function WC(i,r){if(i&1&&x(0),i&2){let e=C().$implicit;Ie(e.textLabel)}}function qC(i,r){if(i&1){let e=qe();m(0,"div",7,2),k("click",function(){let n=we(e),o=n.$implicit,a=n.$index,s=C(),c=it(1);return Ce(s._handleClick(o,c,a))})("cdkFocusChange",function(n){let o=we(e).$index,a=C();return Ce(a._tabFocusChanged(n,o))}),j(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),V(6,GC,1,1,null,12)(7,WC,1,1),u()()()}if(i&2){let e=r.$implicit,t=r.$index,n=it(1),o=C();Qe(e.labelClass),T("mdc-tab--active",o.selectedIndex===t),O("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),N("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),f(3),O("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),f(3),z(e.templateLabel?6:7)}}function YC(i,r){i&1&&P(0)}function KC(i,r){if(i&1){let e=qe();m(0,"mat-tab-body",13),k("_onCentered",function(){we(e);let n=C();return Ce(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){we(e);let o=C();return Ce(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){we(e);let o=C();return Ce(o._bodyCentered(n))}),u()}if(i&2){let e=r.$implicit,t=r.$index,n=C();Qe(e.bodyClass),O("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),N("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var QC=new _("MatTabContent"),ZC=(()=>{class i{template=l(Ve);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matTabContent",""]],features:[X([{provide:QC,useExisting:i}])]})}return i})(),XC=new _("MatTabLabel"),Rg=new _("MAT_TAB"),JC=(()=>{class i extends hf{_closestTab=l(Rg,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[X([{provide:XC,useExisting:i}]),W]})}return i})(),Ig=new _("MAT_TAB_GROUP"),ex=(()=>{class i{_viewContainerRef=l(Ke);_closestTabGroup=l(Ig,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new b;position=null;origin=null;isActive=!1;constructor(){l(Me).load(vt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ut(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,o){if(t&1&&ze(o,JC,5)(o,ZC,7,Ve),t&2){let a;S(a=E())&&(n.templateLabel=a.first),S(a=E())&&(n._explicitContent=a.first)}},viewQuery:function(t,n){if(t&1&&ge(Ve,7),t&2){let o;S(o=E())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&N("id",null)},inputs:{disabled:[2,"disabled","disabled",D],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[X([{provide:Rg,useExisting:i}]),me],ngContentSelectors:_h,decls:1,vars:0,template:function(t,n){t&1&&(se(),Ha(0,FC,1,0,"ng-template"))},encapsulation:2})}return i})(),uh="mdc-tab-indicator--active",Sg="mdc-tab-indicator--no-transition",ph=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let e=this._items.find(n=>n.elementRef.nativeElement===r),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},tx=(()=>{class i{_elementRef=l(M);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(uh);return}let n=t.getBoundingClientRect(),o=e.width/n.width,a=e.left-n.left;t.classList.add(Sg),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Sg),t.classList.add(uh),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(uh)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D]}})}return i})();var Tg=(()=>{class i extends tx{elementRef=l(M);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(N("aria-disabled",!!n.disabled),T("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",D]},features:[W]})}return i})(),Eg={passive:!0},ix=650,nx=100,rx=(()=>{class i{_elementRef=l(M);_changeDetectorRef=l(J);_viewportRuler=l(St);_dir=l(Le,{optional:!0});_ngZone=l(H);_platform=l(de);_sharedResizeObserver=l(bl);_injector=l(q);_renderer=l(fe);_animationsDisabled=ve();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new b;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new b;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new I;indexFocused=new I;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Eg),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Eg))}ngAfterContentInit(){let e=this._dir?this._dir.change:Y("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(dn(32),G(this._destroyed)),n=this._viewportRuler.change(150).pipe(G(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new vi(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),xe(o,{injector:this._injector}),Be(e,n,t,this._items.changes,this._itemsResized()).pipe(G(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?yt:this._items.changes.pipe(Ae(this._items),je(e=>new _t(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>t.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),br(1),_e(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!He(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=t.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let d=this.scrollDistance,h=this.scrollDistance+n;s<d?this.scrollDistance-=d-s:c>h&&(this.scrollDistance+=Math.min(c-h,s-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Em(ix,nx).pipe(G(Be(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",D],selectedIndex:[2,"selectedIndex","selectedIndex",Ye]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),ox=(()=>{class i extends rx{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ph(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,o){if(t&1&&ze(o,Tg,4),t&2){let a;S(a=E())&&(n._items=a)}},viewQuery:function(t,n){if(t&1&&ge(PC,7)(LC,7)(NC,7)(BC,5)(jC,5),t&2){let o;S(o=E())&&(n._tabListContainer=o.first),S(o=E())&&(n._tabList=o.first),S(o=E())&&(n._tabListInner=o.first),S(o=E())&&(n._nextPaginator=o.first),S(o=E())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&T("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",D]},features:[W],ngContentSelectors:_h,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(se(),m(0,"div",5,0),k("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(a){return n._handlePaginatorPress("before",a)})("touchend",function(){return n._stopInterval()}),j(2,"div",6),u(),m(3,"div",7,1),k("keydown",function(a){return n._handleKeydown(a)}),m(5,"div",8,2),k("cdkObserveContent",function(){return n._onContentChanges()}),m(7,"div",9,3),P(9),u()()(),m(10,"div",10,4),k("mousedown",function(a){return n._handlePaginatorPress("after",a)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),j(12,"div",6),u()),t&2&&(T("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),O("matRippleDisabled",n._disableScrollBefore||n.disableRipple),f(3),T("_mat-animation-noopable",n._animationsDisabled),f(2),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),f(5),T("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),O("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[yi,ia],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return i})(),ax=new _("MAT_TABS_CONFIG"),Mg=(()=>{class i extends gi{_host=l(fh);_ngZone=l(H);_centeringSub=ye.EMPTY;_leavingSub=ye.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ae(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matTabBodyHost",""]],features:[W]})}return i})(),fh=(()=>{class i{_elementRef=l(M);_dir=l(Le,{optional:!0});_ngZone=l(H);_injector=l(q);_renderer=l(fe);_diAnimationsDisabled=ve();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ye.EMPTY;_position;_previousPosition;_onCentering=new I;_beforeCentering=new I;_afterLeavingCenter=new I;_onCentered=new I(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=l(J);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),xe(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),xe(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&ge(Mg,5)(VC,5),t&2){let o;S(o=E())&&(n._portalHost=o.first),S(o=E())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&N("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(m(0,"div",1,0),ke(2,zC,0,0,"ng-template",2),u()),t&2&&T("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Mg,Yo],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return i})(),tN=(()=>{class i{_elementRef=l(M);_changeDetectorRef=l(J);_ngZone=l(H);_tabsSubscription=ye.EMPTY;_tabLabelSubscription=ye.EMPTY;_tabBodySubscription=ye.EMPTY;_diAnimationsDisabled=ve();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Wi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new I;focusChange=new I;animationDone=new I;selectedTabChange=new I(!0);_groupId;_isServer=!l(de).isBrowser;constructor(){let e=l(ax,{optional:!0});this._groupId=l(be).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=t[o];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ae(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new gh;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Be(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,o){if(t&1&&ze(o,ex,5),t&2){let a;S(a=E())&&(n._allTabs=a)}},viewQuery:function(t,n){if(t&1&&ge(UC,5)(HC,5)(fh,5),t&2){let o;S(o=E())&&(n._tabBodyWrapper=o.first),S(o=E())&&(n._tabHeader=o.first),S(o=E())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(N("mat-align-tabs",n.alignTabs),Qe("mat-"+(n.color||"primary")),ci("--mat-tab-animation-duration",n.animationDuration),T("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",D],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",D],selectedIndex:[2,"selectedIndex","selectedIndex",Ye],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ye],disablePagination:[2,"disablePagination","disablePagination",D],disableRipple:[2,"disableRipple","disableRipple",D],preserveContent:[2,"preserveContent","preserveContent",D],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[X([{provide:Ig,useExisting:i}])],ngContentSelectors:_h,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(se(),m(0,"mat-tab-header",3,0),k("indexFocused",function(a){return n._focusChanged(a)})("selectFocusedIndex",function(a){return n.selectedIndex=a}),Ge(2,qC,8,17,"div",4,li),u(),V(4,YC,1,0),m(5,"div",5,1),Ge(7,KC,1,10,"mat-tab-body",6,li),u()),t&2&&(O("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Qm("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),f(2),We(n._tabs),f(2),z(n._isServer?4:-1),f(),T("_mat-animation-noopable",n._animationsDisabled()),f(2),We(n._tabs))},dependencies:[ox,Tg,Hd,yi,gi,fh],styles:[`.mdc-tab {
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
`],encapsulation:2})}return i})(),gh=class{index;tab};var sx=["plot"],lx=["*"],wi=class i{static{this.instances=[]}static{this.plotly=void 0}static{this.moduleName=void 0}static setModuleName(r){i.moduleName=r}static getModuleName(){return i.moduleName}static setPlotly(r){if(typeof r=="object"&&typeof r.react!="function")throw new Error("Invalid plotly.js version. Please, use any version above 1.40.0");i.moduleName="PlotlyJS",i.plotly=r}static insert(r){return i.instances.indexOf(r)===-1&&i.instances.push(r),r}static remove(r){let e=i.instances.indexOf(r);e>=0&&(i.instances.splice(e,1),i.plotly.purge(r))}getInstanceByDivId(r){for(let e of i.instances)if(e&&e.id===r)return e}getPlotly(){return Oe(this,null,function*(){return yield this.waitFor(()=>this._getPlotly()!=="waiting"),this._getPlotly()})}_getPlotly(){if(typeof i.plotly>"u"){let r=i.moduleName==="ViaCDN"?"Error loading Peer dependency plotly.js from CDN url":"Peer dependency plotly.js isn't installed";throw new Error(r)}return i.plotly}waitFor(r){return new Promise(e=>{let t=()=>{r()?e():setTimeout(t,10)};t()})}newPlot(r,e,t,n,o){return Oe(this,null,function*(){if(yield this.waitFor(()=>this._getPlotly()!=="waiting"),o){let a={data:e,layout:t,config:n,frames:o};return this._getPlotly().newPlot(r,a).then(()=>i.insert(r))}return this._getPlotly().newPlot(r,e,t,n).then(()=>i.insert(r))})}plot(r,e,t,n,o){if(o){let a={data:e,layout:t,config:n,frames:o};return this._getPlotly().newPlot(r,a)}return this._getPlotly().newPlot(r,e,t,n)}update(r,e,t,n,o){if(o){let a={data:e,layout:t,config:n,frames:o};return this._getPlotly().react(r,a)}return this._getPlotly().react(r,e,t,n)}resize(r){return this._getPlotly().Plots.resize(r)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}},bh=(()=>{class i{constructor(e,t,n){this.plotly=e,this.iterableDiffers=t,this.keyValueDiffers=n,this.defaultClassName="js-plotly-plot",this.data=Ct(),this.layout=Ct(),this.config=Ct(),this.frames=Ct(),this.style=Ct(),this.divId=Ct(),this.revision=Ct(0),this.className=Ct(),this.debug=Ct(!1),this.useResizeHandler=Ct(!1),this.updateOnLayoutChange=Ct(!0),this.updateOnDataChange=Ct(!0),this.updateOnlyWithRevision=Ct(!1),this.initialized=pe(),this.update=pe(),this.purge=pe(),this.error=pe(),this.afterExport=pe(),this.afterPlot=pe(),this.animated=pe(),this.animatingFrame=pe(),this.animationInterrupted=pe(),this.autoSize=pe(),this.beforeExport=pe(),this.beforeHover=pe(),this.buttonClicked=pe(),this.click=pe(),this.plotlyClick=pe(),this.clickAnnotation=pe(),this.deselect=pe(),this.doubleClick=pe(),this.framework=pe(),this.hover=pe(),this.legendClick=pe(),this.legendDoubleClick=pe(),this.react=pe(),this.relayout=pe(),this.relayouting=pe(),this.restyle=pe(),this.redraw=pe(),this.selected=pe(),this.selecting=pe(),this.sliderChange=pe(),this.sliderEnd=pe(),this.sliderStart=pe(),this.sunburstclick=pe(),this.transitioning=pe(),this.transitionInterrupted=pe(),this.unhover=pe(),this.treemapclick=pe(),this.webglcontextlost=pe(),this.eventNames=["afterExport","afterPlot","animated","animatingFrame","animationInterrupted","autoSize","beforeExport","beforeHover","buttonClicked","clickAnnotation","deselect","doubleClick","framework","hover","legendClick","legendDoubleClick","react","relayout","relayouting","restyle","redraw","selected","selecting","sliderChange","sliderEnd","sliderStart","sunburstclick","transitioning","transitionInterrupted","unhover","treemapclick","webglcontextlost"]}ngOnInit(){this.createPlot().then(()=>{let e=this.createFigure();this.initialized.emit(e)})}ngOnDestroy(){if(typeof this.resizeHandler=="function"&&(this.getWindow().removeEventListener("resize",this.resizeHandler),this.resizeHandler=void 0),this.plotlyInstance){let e=this.createFigure();this.purge.emit(e),wi.remove(this.plotlyInstance)}}ngOnChanges(e){let t=!1,n=e.revision;n&&!n.isFirstChange()&&(t=!0);let o=e.debug;o&&!o.isFirstChange()&&(t=!0),t&&this.updatePlot(),this.updateWindowResizeHandler()}ngDoCheck(){if(this.updateOnlyWithRevision())return!1;let e=!1;this.updateOnLayoutChange()&&(this.layoutDiffer?this.layoutDiffer.diff(this.layout())&&(e=!0):this.layout()?this.layoutDiffer=this.keyValueDiffers.find(this.layout()).create():this.layoutDiffer=void 0),this.updateOnDataChange()&&(this.dataDiffer?this.dataDiffer.diff(this.data())&&(e=!0):Array.isArray(this.data())?this.dataDiffer=this.iterableDiffers.find(this.data()).create(this.dataDifferTrackBy):this.dataDiffer=void 0),e&&this.plotlyInstance&&this.updatePlot()}getData(){return this.data()??[]}getWindow(){return window}getClassName(){let e=[this.defaultClassName],t=this.className();return Array.isArray(t)?e=e.concat(t):t&&e.push(t),e.join(" ")}createPlot(){return this.plotly.newPlot(this.plotEl.nativeElement,this.getData(),this.layout(),this.config(),this.frames()).then(e=>{this.plotlyInstance=e,this.getWindow().gd=this.debug?e:void 0,this.eventNames.forEach(t=>{let n=`plotly_${t.toLowerCase()}`,o=this[t];e.on(n,a=>o.emit(a))}),e.on("plotly_click",t=>{this.plotlyClick.emit(t)}),this.updateWindowResizeHandler()},e=>{console.error("Error while plotting:",e),this.error.emit(e)})}createFigure(){let e=this.plotlyInstance;return{data:e.data,layout:e.layout,frames:e._transitionData?e._transitionData._frames:null}}updatePlot(){if(!this.plotlyInstance){let t=new Error("Plotly component wasn't initialized");throw this.error.emit(t),t}let e=g({},this.layout());return this.plotly.update(this.plotlyInstance,this.getData(),e,this.config(),this.frames()).then(()=>{let t=this.createFigure();this.update.emit(t)},t=>{console.error("Error while updating plot:",t),this.error.emit(t)})}updateWindowResizeHandler(){this.useResizeHandler()?this.resizeHandler===void 0&&(this.resizeHandler=()=>this.plotly.resize(this.plotlyInstance),this.getWindow().addEventListener("resize",this.resizeHandler)):typeof this.resizeHandler=="function"&&(this.getWindow().removeEventListener("resize",this.resizeHandler),this.resizeHandler=void 0)}dataDifferTrackBy(e,t){let n=Object.assign({},t,{uid:""});return JSON.stringify(n)}static{this.\u0275fac=function(t){return new(t||i)(L(wi),L(Ti),L(Ga))}}static{this.\u0275cmp=R({type:i,selectors:[["plotly-plot"]],viewQuery:function(t,n){if(t&1&&ge(sx,7),t&2){let o;S(o=E())&&(n.plotEl=o.first)}},inputs:{data:[1,"data"],layout:[1,"layout"],config:[1,"config"],frames:[1,"frames"],style:[1,"style"],divId:[1,"divId"],revision:[1,"revision"],className:[1,"className"],debug:[1,"debug"],useResizeHandler:[1,"useResizeHandler"],updateOnLayoutChange:[1,"updateOnLayoutChange"],updateOnDataChange:[1,"updateOnDataChange"],updateOnlyWithRevision:[1,"updateOnlyWithRevision"]},outputs:{initialized:"initialized",update:"update",purge:"purge",error:"error",afterExport:"afterExport",afterPlot:"afterPlot",animated:"animated",animatingFrame:"animatingFrame",animationInterrupted:"animationInterrupted",autoSize:"autoSize",beforeExport:"beforeExport",beforeHover:"beforeHover",buttonClicked:"buttonClicked",click:"click",plotlyClick:"plotlyClick",clickAnnotation:"clickAnnotation",deselect:"deselect",doubleClick:"doubleClick",framework:"framework",hover:"hover",legendClick:"legendClick",legendDoubleClick:"legendDoubleClick",react:"react",relayout:"relayout",relayouting:"relayouting",restyle:"restyle",redraw:"redraw",selected:"selected",selecting:"selecting",sliderChange:"sliderChange",sliderEnd:"sliderEnd",sliderStart:"sliderStart",sunburstclick:"sunburstclick",transitioning:"transitioning",transitionInterrupted:"transitionInterrupted",unhover:"unhover",treemapclick:"treemapclick",webglcontextlost:"webglcontextlost"},features:[X([wi]),me],ngContentSelectors:lx,decls:3,vars:3,consts:[["plot",""],[3,"ngClass","ngStyle"]],template:function(t,n){t&1&&(se(),m(0,"div",1,0),P(2),u()),t&2&&(O("ngClass",n.getClassName())("ngStyle",n.style()),N("id",n.divId()))},dependencies:[Mr,Pc,Lc],encapsulation:2})}}return i})(),Ag=(()=>{class i{constructor(){if(!this.isValid()){let e="Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start to see how to add PlotlyJS to your project.";throw new Error(e)}}isValid(){return wi.plotly!==void 0&&(typeof wi.plotly.plot=="function"||typeof wi.plotly.newPlot=="function")}static forRoot(e){return wi.setPlotly(e),{ngModule:i,providers:[wi]}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=Q({type:i})}static{this.\u0275inj=K({providers:[wi],imports:[bh]})}}return i})();var Og=(()=>{class i{constructor(){this.defaultColorList=["#fd7f6f","#7eb0d5","#b2e061","#bd7ebe","#ffb55a","#ffee65","#beb9db","#fdcce5","#8bd3c7"],this.redrawTrigger=new b,this.proteinSelectionSubject=new b,this.plotSettings={marginLeft:150,marginRight:100,marginTop:100,marginBottom:100,titleTextSize:14,showTitle:!0,height:500,barSize:50},this.projectConditionColorMap={}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var hx=["*",[["mat-toolbar-row"]]],mx=["*","mat-toolbar-row"],ux=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Fg=(()=>{class i{_elementRef=l(M);_platform=l(de);_document=l($);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,o){if(t&1&&ze(o,ux,5),t&2){let a;S(a=E())&&(n._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(Qe(n.color?"mat-"+n.color:""),T("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:mx,decls:2,vars:0,template:function(t,n){t&1&&(se(hx),P(0),P(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return i})();var wN=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[Ne]})}return i})();var px=["mat-menu-item",""],fx=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],gx=["mat-icon, [matMenuItemIcon]","*"];function _x(i,r){i&1&&(Lt(),m(0,"svg",2),j(1,"polygon",3),u())}var bx=["*"];function vx(i,r){if(i&1){let e=qe();Tt(0,"div",0),$a("click",function(){we(e);let n=C();return Ce(n.closed.emit("click"))})("animationstart",function(n){we(e);let o=C();return Ce(o._onAnimationStart(n.animationName))})("animationend",function(n){we(e);let o=C();return Ce(o._onAnimationDone(n.animationName))})("animationcancel",function(n){we(e);let o=C();return Ce(o._onAnimationDone(n.animationName))}),Tt(1,"div",1),P(2),qt()()}if(i&2){let e=C();Qe(e._classList),T("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),ot("id",e.panelId),N("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var wh=new _("MAT_MENU_PANEL"),yh=(()=>{class i{_elementRef=l(M);_document=l($);_focusMonitor=l(Et);_parentMenu=l(wh,{optional:!0});_changeDetectorRef=l(J);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new b;_focused=new b;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(Me).load(vt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&k("click",function(a){return n._checkDisabled(a)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(N("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),T("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",D],disableRipple:[2,"disableRipple","disableRipple",D]},exportAs:["matMenuItem"],attrs:px,ngContentSelectors:gx,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(se(fx),P(0),m(1,"span",0),P(2,1),u(),j(3,"div",1),V(4,_x,2,0,":svg:svg",2)),t&2&&(f(3),O("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),f(),z(n._triggersSubmenu?4:-1))},dependencies:[yi],encapsulation:2,changeDetection:0})}return i})();var yx=new _("MatMenuContent");var wx=new _("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),vh="_mat-menu-enter",vl="_mat-menu-exit",yl=(()=>{class i{_elementRef=l(M);_changeDetectorRef=l(J);_injector=l(q);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ve();_allItems;_directDescendantItems=new Wi;_classList={};_panelAnimationState="void";_animationDone=new b;_isAnimating=oe(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=g({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new I;close=this.closed;panelId=l(be).getId("mat-menu-panel-");constructor(){let e=l(wx);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new vi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ae(this._directDescendantItems),je(e=>Be(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ae(this._directDescendantItems),je(t=>Be(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:He(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=xe(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=re(g({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===vl;(t||e===vh)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===vh||e===vl)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(vl),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?vh:vl)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ae(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,o){if(t&1&&ze(o,yx,5)(o,yh,5)(o,yh,4),t&2){let a;S(a=E())&&(n.lazyContent=a.first),S(a=E())&&(n._allItems=a),S(a=E())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&ge(Ve,5),t&2){let o;S(o=E())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&N("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",D],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:D(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[X([{provide:wh,useExisting:i}])],ngContentSelectors:bx,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(se(),Ha(0,vx,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Cx=new _("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(q);return()=>Ji(i)}});var io=new WeakMap,xx=(()=>{class i{_canHaveBackdrop;_element=l(M);_viewContainerRef=l(Ke);_menuItemInstance=l(yh,{optional:!0,self:!0});_dir=l(Le,{optional:!0});_focusMonitor=l(Et);_ngZone=l(H);_injector=l(q);_scrollStrategy=l(Cx);_changeDetectorRef=l(J);_animationsDisabled=ve();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ye.EMPTY;_menuCloseSubscription=ye.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(wh,{optional:!0});this._parentMaterialMenu=t instanceof yl?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&io.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=io.get(t);io.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof yl&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(G(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof yl&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Xe(1)).subscribe(()=>{t.detach(),io.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&io.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=bi(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof yl&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new _i({positionStrategy:ir(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",a=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[n,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,d]=[a,s],[h,p]=[n,o],w=0;if(this._triggersSubmenu()){if(p=n=e.xPosition==="before"?"start":"end",o=h=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let A=this._parentMaterialMenu.items.first;this._parentInnerPadding=A?A._getHostElement().offsetTop:0}w=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=a==="top"?"bottom":"top",d=s==="top"?"bottom":"top");t.withPositions([{originX:n,originY:c,overlayX:h,overlayY:a,offsetY:w},{originX:o,originY:c,overlayX:p,overlayY:a,offsetY:w},{originX:n,originY:d,overlayX:h,overlayY:s,offsetY:-w},{originX:o,originY:d,overlayX:p,overlayY:s,offsetY:-w}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Y(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(_e(a=>this._menuOpen&&a!==this._menuItemInstance)):Y();return Be(e,n,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ut(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return io.get(e)===this}_triggerIsAriaDisabled(){return D(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){ja()};static \u0275dir=v({type:i})}return i})(),WN=(()=>{class i extends xx{_cleanupTouchstart;_hoverSubscription=ye.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new I;onMenuOpen=this.menuOpened;menuClosed=new I;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(fe);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{tn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){en(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&k("click",function(a){return n._handleClick(a)})("mousedown",function(a){return n._handleMousedown(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&N("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[W]})}return i})();var Dx=["notch"],kx=["matFormFieldNotchedOutline",""],Sx=["*"],Pg=["iconPrefixContainer"],Lg=["textPrefixContainer"],Ng=["iconSuffixContainer"],Bg=["textSuffixContainer"],Ex=["textField"],Mx=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Rx=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Ix(i,r){i&1&&j(0,"span",21)}function Tx(i,r){if(i&1&&(m(0,"label",20),P(1,1),V(2,Ix,1,0,"span",21),u()),i&2){let e=C(2);O("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),N("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),z(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ax(i,r){if(i&1&&V(0,Tx,3,5,"label",20),i&2){let e=C();z(e._hasFloatingLabel()?0:-1)}}function Ox(i,r){i&1&&j(0,"div",7)}function Fx(i,r){}function Px(i,r){if(i&1&&ke(0,Fx,0,0,"ng-template",13),i&2){C(2);let e=it(1);O("ngTemplateOutlet",e)}}function Lx(i,r){if(i&1&&(m(0,"div",9),V(1,Px,1,1,null,13),u()),i&2){let e=C();O("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),z(e._forceDisplayInfixLabel()?-1:1)}}function Nx(i,r){i&1&&(m(0,"div",10,2),P(2,2),u())}function Bx(i,r){i&1&&(m(0,"div",11,3),P(2,3),u())}function jx(i,r){}function Vx(i,r){if(i&1&&ke(0,jx,0,0,"ng-template",13),i&2){C();let e=it(1);O("ngTemplateOutlet",e)}}function zx(i,r){i&1&&(m(0,"div",14,4),P(2,4),u())}function Ux(i,r){i&1&&(m(0,"div",15,5),P(2,5),u())}function Hx(i,r){i&1&&j(0,"div",16)}function $x(i,r){i&1&&(m(0,"div",18),P(1,6),u())}function Gx(i,r){if(i&1&&(m(0,"mat-hint",22),x(1),u()),i&2){let e=C(2);O("id",e._hintLabelId),f(),Ie(e.hintLabel)}}function Wx(i,r){if(i&1&&(m(0,"div",19),V(1,Gx,2,2,"mat-hint",22),P(2,7),j(3,"div",23),P(4,8),u()),i&2){let e=C();f(),z(e.hintLabel?1:-1)}}var In=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["mat-label"]]})}return i})(),Gg=new _("MatError"),Wg=(()=>{class i{id=l(be).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,n){t&2&&ot("id",n.id)},inputs:{id:"id"},features:[X([{provide:Gg,useExisting:i}])]})}return i})(),Cl=(()=>{class i{align="start";id=l(be).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(ot("id",n.id),N("align",null),T("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),qg=new _("MatPrefix"),Yg=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[X([{provide:qg,useExisting:i}])]})}return i})(),Kg=new _("MatSuffix"),Qg=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[X([{provide:Kg,useExisting:i}])]})}return i})(),Zg=new _("FloatingLabelParent"),jg=(()=>{class i{_elementRef=l(M);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(bl);_ngZone=l(H);_parent=l(Zg);_resizeSubscription=new ye;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return qx(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&T("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function qx(i){let r=i;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Vg="mdc-line-ripple--active",wl="mdc-line-ripple--deactivating",zg=(()=>{class i{_elementRef=l(M);_cleanupTransitionEnd;constructor(){let e=l(H),t=l(fe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(wl),e.add(Vg)}deactivate(){this._elementRef.nativeElement.classList.add(wl)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(wl);e.propertyName==="opacity"&&n&&t.remove(Vg,wl)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Ug=(()=>{class i{_elementRef=l(M);_ngZone=l(H);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&ge(Dx,5),t&2){let o;S(o=E())&&(n._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&T("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:kx,ngContentSelectors:Sx,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(se(),Ii(0,"div",1),Tt(1,"div",2,0),P(3),qt(),Ii(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),cr=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i})}return i})();var dr=new _("MatFormField"),Yx=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Hg="fill",Kx="auto",$g="fixed",Qx="translateY(-50%)",rn=(()=>{class i{_elementRef=l(M);_changeDetectorRef=l(J);_platform=l(de);_idGenerator=l(be);_ngZone=l(H);_defaults=l(Yx,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=yo("iconPrefixContainer");_textPrefixContainerSignal=yo("textPrefixContainer");_iconSuffixContainerSignal=yo("iconSuffixContainer");_textSuffixContainerSignal=yo("textSuffixContainer");_prefixSuffixContainers=Nt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ru(In);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=et(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Kx}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Hg;this._appearanceSignal.set(t)}_appearanceSignal=oe(Hg);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$g}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||$g}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new b;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ve();constructor(){let e=this._defaults,t=l(Le);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Vn(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Nt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ae([void 0,void 0]),te(()=>[t.errorState,t.userAriaDescribedBy]),uc(),_e(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(G(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Be(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){au({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Nt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,n;if(t){let o=this._describedByIds||e;n=e.concat(t.filter(a=>a&&!o.includes(a)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=n?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",p=`${a+s}px`,A=`calc(${h} * (${p} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,U=`var(--mat-mdc-form-field-label-transform, ${Qx} translateX(${A}))`,ae=a+s+c+d;return[U,ae]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,o){if(t&1&&(Zm(o,n._labelChild,In,5),ze(o,cr,5)(o,qg,5)(o,Kg,5)(o,Gg,5)(o,Cl,5)),t&2){yc();let a;S(a=E())&&(n._formFieldControl=a.first),S(a=E())&&(n._prefixChildren=a),S(a=E())&&(n._suffixChildren=a),S(a=E())&&(n._errorChildren=a),S(a=E())&&(n._hintChildren=a)}},viewQuery:function(t,n){if(t&1&&(Xm(n._iconPrefixContainerSignal,Pg,5)(n._textPrefixContainerSignal,Lg,5)(n._iconSuffixContainerSignal,Ng,5)(n._textSuffixContainerSignal,Bg,5),ge(Ex,5)(Pg,5)(Lg,5)(Ng,5)(Bg,5)(jg,5)(Ug,5)(zg,5)),t&2){yc(4);let o;S(o=E())&&(n._textField=o.first),S(o=E())&&(n._iconPrefixContainer=o.first),S(o=E())&&(n._textPrefixContainer=o.first),S(o=E())&&(n._iconSuffixContainer=o.first),S(o=E())&&(n._textSuffixContainer=o.first),S(o=E())&&(n._floatingLabel=o.first),S(o=E())&&(n._notchedOutline=o.first),S(o=E())&&(n._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&T("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[X([{provide:dr,useExisting:i},{provide:Zg,useExisting:i}])],ngContentSelectors:Rx,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(se(Mx),ke(0,Ax,1,1,"ng-template",null,0,fn),m(2,"div",6,1),k("click",function(a){return n._control.onContainerClick(a)}),V(4,Ox,1,0,"div",7),m(5,"div",8),V(6,Lx,2,2,"div",9),V(7,Nx,3,0,"div",10),V(8,Bx,3,0,"div",11),m(9,"div",12),V(10,Vx,1,1,null,13),P(11),u(),V(12,zx,3,0,"div",14),V(13,Ux,3,0,"div",15),u(),V(14,Hx,1,0,"div",16),u(),m(15,"div",17),V(16,$x,2,0,"div",18)(17,Wx,5,1,"div",19),u()),t&2){let o;f(2),T("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),f(2),z(!n._hasOutline()&&!n._control.disabled?4:-1),f(2),z(n._hasOutline()?6:-1),f(),z(n._hasIconPrefix?7:-1),f(),z(n._hasTextPrefix?8:-1),f(2),z(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),f(2),z(n._hasTextSuffix?12:-1),f(),z(n._hasIconSuffix?13:-1),f(),z(n._hasOutline()?-1:14),f(),T("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let a=n._getSubscriptMessageType();f(),z((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[jg,Ug,Hn,zg,Cl],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var Ch=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[na,rn,Ne]})}return i})();var Zx=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),Xx={passive:!0},Xg=(()=>{class i{_platform=l(de);_ngZone=l(H);_renderer=l(ft).createRenderer(null,null);_styleLoader=l(Me);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return yt;this._styleLoader.load(Zx);let t=Ze(e),n=this._monitoredElements.get(t);if(n)return n.subject;let o=new b,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,Xx)));return this._monitoredElements.set(t,{subject:o,unlisten:c}),o}stopMonitoring(e){let t=Ze(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Jg=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({})}return i})();var s_=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(L(fe),L(M))};static \u0275dir=v({type:i})}return i})(),l_=(()=>{class i extends s_{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,features:[W]})}return i})(),ai=new _("");var Jx={provide:ai,useExisting:ut(()=>An),multi:!0};function eD(){let i=ei()?ei().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var tD=new _(""),An=(()=>{class i extends s_{_compositionMode;_composing=!1;constructor(e,t,n){super(e,t),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!eD())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(L(fe),L(M),L(tD,8))};static \u0275dir=v({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,n){t&1&&k("input",function(a){return n._handleInput(a.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(a){return n._compositionEnd(a.target.value)})},standalone:!1,features:[X([Jx]),W]})}return i})();function Sh(i){return i==null||Eh(i)===0}function Eh(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Ci=new _(""),ya=new _(""),iD=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Hi=class{static min(r){return c_(r)}static max(r){return d_(r)}static required(r){return nD(r)}static requiredTrue(r){return rD(r)}static email(r){return oD(r)}static minLength(r){return aD(r)}static maxLength(r){return sD(r)}static pattern(r){return lD(r)}static nullValidator(r){return Dl()}static compose(r){return g_(r)}static composeAsync(r){return __(r)}};function c_(i){return r=>{if(r.value==null||i==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e<i?{min:{min:i,actual:r.value}}:null}}function d_(i){return r=>{if(r.value==null||i==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e>i?{max:{max:i,actual:r.value}}:null}}function nD(i){return Sh(i.value)?{required:!0}:null}function rD(i){return i.value===!0?null:{required:!0}}function oD(i){return Sh(i.value)||iD.test(i.value)?null:{email:!0}}function aD(i){return r=>{let e=r.value?.length??Eh(r.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function sD(i){return r=>{let e=r.value?.length??Eh(r.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function lD(i){if(!i)return Dl;let r,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),r=new RegExp(e)):(e=i.toString(),r=i),t=>{if(Sh(t.value))return null;let n=t.value;return r.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function Dl(i){return null}function h_(i){return i!=null}function m_(i){return Dr(i)?bt(i):i}function u_(i){let r={};return i.forEach(e=>{r=e!=null?g(g({},r),e):r}),Object.keys(r).length===0?null:r}function p_(i,r){return r.map(e=>e(i))}function cD(i){return!i.validate}function f_(i){return i.map(r=>cD(r)?r:e=>r.validate(e))}function g_(i){if(!i)return null;let r=i.filter(h_);return r.length==0?null:function(e){return u_(p_(e,r))}}function Mh(i){return i!=null?g_(f_(i)):null}function __(i){if(!i)return null;let r=i.filter(h_);return r.length==0?null:function(e){let t=p_(e,r).map(m_);return Fa(t).pipe(te(u_))}}function Rh(i){return i!=null?__(f_(i)):null}function e_(i,r){return i===null?[r]:Array.isArray(i)?[...i,r]:[i,r]}function b_(i){return i._rawValidators}function v_(i){return i._rawAsyncValidators}function xh(i){return i?Array.isArray(i)?i:[i]:[]}function kl(i,r){return Array.isArray(i)?i.includes(r):i===r}function t_(i,r){let e=xh(r);return xh(i).forEach(n=>{kl(e,n)||e.push(n)}),e}function i_(i,r){return xh(r).filter(e=>!kl(i,e))}var Sl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=Mh(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=Rh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control?.reset(r)}hasError(r,e){return this.control?this.control.hasError(r,e):!1}getError(r,e){return this.control?this.control.getError(r,e):null}},on=class extends Sl{name;get formDirective(){return null}get path(){return null}},Ot=class extends Sl{_parent=null;name=null;valueAccessor=null},El=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var On=(()=>{class i extends El{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(L(Ot,2))};static \u0275dir=v({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,n){t&2&&T("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[W]})}return i})(),Ol=(()=>{class i extends El{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(L(on,10))};static \u0275dir=v({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,n){t&2&&T("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[W]})}return i})();var ua="VALID",xl="INVALID",no="PENDING",pa="DISABLED",Tn=class{},Ml=class extends Tn{value;source;constructor(r,e){super(),this.value=r,this.source=e}},ga=class extends Tn{pristine;source;constructor(r,e){super(),this.pristine=r,this.source=e}},_a=class extends Tn{touched;source;constructor(r,e){super(),this.touched=r,this.source=e}},ro=class extends Tn{status;source;constructor(r,e){super(),this.status=r,this.source=e}},Rl=class extends Tn{source;constructor(r){super(),this.source=r}},ba=class extends Tn{source;constructor(r){super(),this.source=r}};function Ih(i){return(Fl(i)?i.validators:i)||null}function dD(i){return Array.isArray(i)?Mh(i):i||null}function Th(i,r){return(Fl(r)?r.asyncValidators:i)||null}function hD(i){return Array.isArray(i)?Rh(i):i||null}function Fl(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function y_(i,r,e){let t=i.controls;if(!(r?Object.keys(t):t).length)throw new ne(1e3,"");if(!t[e])throw new ne(1001,"")}function w_(i,r,e){i._forEachChild((t,n)=>{if(e[n]===void 0)throw new ne(-1002,"")})}var oo=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,e){this._assignValidators(r),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return De(this.statusReactive)}set status(r){De(()=>this.statusReactive.set(r))}_status=Nt(()=>this.statusReactive());statusReactive=oe(void 0);get valid(){return this.status===ua}get invalid(){return this.status===xl}get pending(){return this.status===no}get disabled(){return this.status===pa}get enabled(){return this.status!==pa}errors;get pristine(){return De(this.pristineReactive)}set pristine(r){De(()=>this.pristineReactive.set(r))}_pristine=Nt(()=>this.pristineReactive());pristineReactive=oe(!0);get dirty(){return!this.pristine}get touched(){return De(this.touchedReactive)}set touched(r){De(()=>this.touchedReactive.set(r))}_touched=Nt(()=>this.touchedReactive());touchedReactive=oe(!1);get untouched(){return!this.touched}_events=new b;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(t_(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(t_(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(i_(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(i_(r,this._rawAsyncValidators))}hasValidator(r){return kl(this._rawValidators,r)}hasAsyncValidator(r){return kl(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let e=this.touched===!1;this.touched=!0;let t=r.sourceControl??this;r.onlySelf||this._parent?.markAsTouched(re(g({},r),{sourceControl:t})),e&&r.emitEvent!==!1&&this._events.next(new _a(!0,t))}markAllAsDirty(r={}){this.markAsDirty({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(r))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(r))}markAsUntouched(r={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=r.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:t})}),r.onlySelf||this._parent?._updateTouched(r,t),e&&r.emitEvent!==!1&&this._events.next(new _a(!1,t))}markAsDirty(r={}){let e=this.pristine===!0;this.pristine=!1;let t=r.sourceControl??this;r.onlySelf||this._parent?.markAsDirty(re(g({},r),{sourceControl:t})),e&&r.emitEvent!==!1&&this._events.next(new ga(!1,t))}markAsPristine(r={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=r.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),r.onlySelf||this._parent?._updatePristine(r,t),e&&r.emitEvent!==!1&&this._events.next(new ga(!0,t))}markAsPending(r={}){this.status=no;let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new ro(this.status,e)),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.markAsPending(re(g({},r),{sourceControl:e}))}disable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=pa,this.errors=null,this._forEachChild(n=>{n.disable(re(g({},r),{onlySelf:!0}))}),this._updateValue();let t=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ml(this.value,t)),this._events.next(new ro(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(re(g({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=ua,this._forEachChild(t=>{t.enable(re(g({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(re(g({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(r,e){r.onlySelf||(this._parent?.updateValueAndValidity(r),r.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ua||this.status===no)&&this._runAsyncValidator(t,r.emitEvent)}let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ml(this.value,e)),this._events.next(new ro(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.updateValueAndValidity(re(g({},r),{sourceControl:e}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?pa:ua}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,e){if(this.asyncValidator){this.status=no,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:r!==!1};let t=m_(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,e={}){this.errors=r,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(r){let e=r;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,n)=>t&&t._find(n),this)}getError(r,e){let t=e?this.get(e):this;return t?.errors?t.errors[r]:null}hasError(r,e){return!!this.getError(r,e)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,e,t){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||t)&&this._events.next(new ro(this.status,e)),this._parent&&this._parent._updateControlsErrors(r,e,t)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?pa:this.errors?xl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(no)?no:this._anyControlsHaveStatus(xl)?xl:ua}_anyControlsHaveStatus(r){return this._anyControls(e=>e.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,e){let t=!this._anyControlsDirty(),n=this.pristine!==t;this.pristine=t,r.onlySelf||this._parent?._updatePristine(r,e),n&&this._events.next(new ga(this.pristine,e))}_updateTouched(r={},e){this.touched=this._anyControlsTouched(),this._events.next(new _a(this.touched,e)),r.onlySelf||this._parent?._updateTouched(r,e)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){Fl(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){return!r&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=dD(this._rawValidators)}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=hD(this._rawAsyncValidators)}},ao=class extends oo{constructor(r,e,t){super(Ih(e),Th(t,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(r,e){return this.controls[r]?this.controls[r]:(this.controls[r]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(r,e,t={}){this.registerControl(r,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(r,e={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(r,e,t={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],e&&this.registerControl(r,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(r){return this.controls.hasOwnProperty(r)&&this.controls[r].enabled}setValue(r,e={}){w_(this,!0,r),Object.keys(r).forEach(t=>{y_(this,!0,t),this.controls[t].setValue(r[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(Object.keys(r).forEach(t=>{let n=this.controls[t];n&&n.patchValue(r[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r={},e={}){this._forEachChild((t,n)=>{t.reset(r?r[n]:null,re(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ba(this))}getRawValue(){return this._reduceChildren({},(r,e,t)=>(r[t]=e.getRawValue(),r))}_syncPendingControls(){let r=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&r(t,e)})}_setUpControls(){this._forEachChild(r=>{r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(r){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&r(t))return!0;return!1}_reduceValue(){let r={};return this._reduceChildren(r,(e,t,n)=>((t.enabled||this.disabled)&&(e[n]=t.value),e))}_reduceChildren(r,e){let t=r;return this._forEachChild((n,o)=>{t=e(t,n,o)}),t}_allControlsDisabled(){for(let r of Object.keys(this.controls))if(this.controls[r].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(r){return this.controls.hasOwnProperty(r)?this.controls[r]:null}};var Dh=class extends ao{};var so=new _("",{factory:()=>Pl}),Pl="always";function C_(i,r){return[...r.path,i]}function va(i,r,e=Pl){Ah(i,r),r.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&r.valueAccessor.setDisabledState?.(i.disabled),uD(i,r),fD(i,r),pD(i,r),mD(i,r)}function Il(i,r,e=!0){let t=()=>{};r?.valueAccessor?.registerOnChange(t),r?.valueAccessor?.registerOnTouched(t),Al(i,r),i&&(r._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Tl(i,r){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(r)})}function mD(i,r){if(r.valueAccessor.setDisabledState){let e=t=>{r.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),r._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Ah(i,r){let e=b_(i);r.validator!==null?i.setValidators(e_(e,r.validator)):typeof e=="function"&&i.setValidators([e]);let t=v_(i);r.asyncValidator!==null?i.setAsyncValidators(e_(t,r.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();Tl(r._rawValidators,n),Tl(r._rawAsyncValidators,n)}function Al(i,r){let e=!1;if(i!==null){if(r.validator!==null){let n=b_(i);if(Array.isArray(n)&&n.length>0){let o=n.filter(a=>a!==r.validator);o.length!==n.length&&(e=!0,i.setValidators(o))}}if(r.asyncValidator!==null){let n=v_(i);if(Array.isArray(n)&&n.length>0){let o=n.filter(a=>a!==r.asyncValidator);o.length!==n.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return Tl(r._rawValidators,t),Tl(r._rawAsyncValidators,t),e}function uD(i,r){r.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&x_(i,r)})}function pD(i,r){r.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&x_(i,r),i.updateOn!=="submit"&&i.markAsTouched()})}function x_(i,r){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function fD(i,r){let e=(t,n)=>{r.valueAccessor.writeValue(t),n&&r.viewToModelUpdate(t)};i.registerOnChange(e),r._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function D_(i,r){i==null,Ah(i,r)}function gD(i,r){return Al(i,r)}function Oh(i,r){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(r,e.currentValue)}function _D(i){return Object.getPrototypeOf(i.constructor)===l_}function k_(i,r){i._syncPendingControls(),r.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Fh(i,r){if(!r)return null;Array.isArray(r);let e,t,n;return r.forEach(o=>{o.constructor===An?e=o:_D(o)?t=o:n=o}),n||t||e||null}function bD(i,r){let e=i.indexOf(r);e>-1&&i.splice(e,1)}var vD={provide:on,useExisting:ut(()=>an)},fa=Promise.resolve(),an=(()=>{class i extends on{callSetDisabledState;get submitted(){return De(this.submittedReactive)}_submitted=Nt(()=>this.submittedReactive());submittedReactive=oe(!1);_directives=new Set;form;ngSubmit=new I;options;constructor(e,t,n){super(),this.callSetDisabledState=n,this.form=new ao({},Mh(e),Rh(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){fa.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),va(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){fa.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){fa.then(()=>{let t=this._findContainer(e.path),n=new ao({});D_(n,e),t.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){fa.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){fa.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),k_(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Rl(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(L(Ci,10),L(ya,10),L(so,8))};static \u0275dir=v({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){t&1&&k("submit",function(a){return n.onSubmit(a)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[X([vD]),W]})}return i})();function n_(i,r){let e=i.indexOf(r);e>-1&&i.splice(e,1)}function r_(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var hr=class extends oo{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,e,t){super(Ih(e),Th(t,e)),this._applyFormState(r),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Fl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(r_(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,e={}){this.value=this._pendingValue=r,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(r,e={}){this.setValue(r,e)}reset(r=this.defaultValue,e={}){this._applyFormState(r),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ba(this))}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){n_(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){n_(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){r_(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var yD=i=>i instanceof hr;var wD={provide:Ot,useExisting:ut(()=>mr)},o_=Promise.resolve(),mr=(()=>{class i extends Ot{_changeDetectorRef;callSetDisabledState;control=new hr;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new I;constructor(e,t,n,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=Fh(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Oh(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){va(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){o_.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,n=t!==0&&D(t);o_.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?C_(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(L(on,9),L(Ci,10),L(ya,10),L(ai,10),L(J,8),L(so,8))};static \u0275dir=v({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[X([wD]),W,me]})}return i})();var Ll=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})(),CD={provide:ai,useExisting:ut(()=>Ph),multi:!0},Ph=(()=>{class i extends l_{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,n){t&1&&k("input",function(a){return n.onChange(a.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[X([CD]),W]})}return i})();var kh=class extends oo{constructor(r,e,t){super(Ih(e),Th(t,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(r){return this.controls[this._adjustIndex(r)]}push(r,e={}){Array.isArray(r)?r.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(r),this._registerControl(r)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(r,e,t={}){this.controls.splice(r,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(r,e={}){let t=this._adjustIndex(r);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(r,e,t={}){let n=this._adjustIndex(r);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),e&&(this.controls.splice(n,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(r,e={}){w_(this,!1,r),r.forEach((t,n)=>{y_(this,!1,n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(r.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r=[],e={}){this._forEachChild((t,n)=>{t.reset(r[n],re(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ba(this))}getRawValue(){return this.controls.map(r=>r.getRawValue())}clear(r={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:r.emitEvent}))}_adjustIndex(r){return r<0?r+this.length:r}_syncPendingControls(){let r=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){this.controls.forEach((e,t)=>{r(e,t)})}_updateValue(){this.value=this.controls.filter(r=>r.enabled||this.disabled).map(r=>r.value)}_anyControls(r){return this.controls.some(e=>e.enabled&&r(e))}_setUpControls(){this._forEachChild(r=>this._registerControl(r))}_allControlsDisabled(){for(let r of this.controls)if(r.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(r){r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)}_find(r){return this.at(r)??null}};var xD=(()=>{class i extends on{callSetDisabledState;get submitted(){return De(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Nt(()=>this._submittedReactive());_submittedReactive=oe(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,n){super(),this.callSetDisabledState=n,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Al(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return va(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Il(e.control||null,e,!1),bD(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,k_(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Rl(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,n=this.form.get(e.path);t!==n&&(Il(t||null,e),yD(n)&&(va(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);D_(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&gD(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ah(this.form,this),this._oldForm&&Al(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(L(Ci,10),L(ya,10),L(so,8))};static \u0275dir=v({type:i,features:[W,me]})}return i})();var Lh=new _(""),DD={provide:Ot,useExisting:ut(()=>kD)},kD=(()=>{class i extends Ot{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new I;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,n,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=Fh(this,n)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&Il(t,this,!1),va(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Oh(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Il(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||i)(L(Ci,10),L(ya,10),L(ai,10),L(Lh,8),L(so,8))};static \u0275dir=v({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[X([DD]),W,me]})}return i})();var SD={provide:Ot,useExisting:ut(()=>Nh)},Nh=(()=>{class i extends Ot{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new I;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,n,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=Fh(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Oh(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return C_(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(L(on,13),L(Ci,10),L(ya,10),L(ai,10),L(Lh,8))};static \u0275dir=v({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[X([SD]),W,me]})}return i})();var ED={provide:on,useExisting:ut(()=>sn)},sn=(()=>{class i extends xD{form=null;ngSubmit=new I;get control(){return this.form}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,n){t&1&&k("submit",function(a){return n.onSubmit(a)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[X([ED]),W]})}return i})();function S_(i){return typeof i=="number"?i:parseFloat(i)}var E_=(()=>{class i{_validator=Dl;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Dl,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,features:[me]})}return i})(),MD={provide:Ci,useExisting:ut(()=>Bh),multi:!0},Bh=(()=>{class i extends E_{max;inputName="max";normalizeInput=e=>S_(e);createValidator=e=>d_(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("max",n._enabled?n.max:null)},inputs:{max:"max"},standalone:!1,features:[X([MD]),W]})}return i})(),RD={provide:Ci,useExisting:ut(()=>jh),multi:!0},jh=(()=>{class i extends E_{min;inputName="min";normalizeInput=e=>S_(e);createValidator=e=>c_(e);static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,n){t&2&&N("min",n._enabled?n.min:null)},inputs:{min:"min"},standalone:!1,features:[X([RD]),W]})}return i})();var M_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({})}return i})();function a_(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var R_=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let n=this._reduceControls(e),o={};return a_(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new ao(n,o)}record(e,t=null){let n=this._reduceControls(e);return new Dh(n,t)}control(e,t,n){let o={};return this.useNonNullable?(a_(t)?o=t:(o.validators=t,o.asyncValidators=n),new hr(e,re(g({},o),{nonNullable:!0}))):new hr(e,t,n)}array(e,t,n){let o=e.map(a=>this._createControl(a));return new kh(o,t,n)}_reduceControls(e){let t={};return Object.keys(e).forEach(n=>{t[n]=this._createControl(e[n])}),t}_createControl(e){if(e instanceof hr)return e;if(e instanceof oo)return e;if(Array.isArray(e)){let t=e[0],n=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,n,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var lo=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:so,useValue:e.callSetDisabledState??Pl}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[M_]})}return i})(),I_=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Lh,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:so,useValue:e.callSetDisabledState??Pl}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[M_]})}return i})();var T_=new _("MAT_INPUT_VALUE_ACCESSOR");var co=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Fn=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(r,e,t,n,o){this._defaultMatcher=r,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o}updateErrorState(){let r=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(n,e)??!1;o!==r&&(this.errorState=o,this._stateChanges.next())}};var ID=["button","checkbox","file","hidden","image","radio","range","reset","submit"],TD=new _("MAT_INPUT_CONFIG"),Bl=(()=>{class i{_elementRef=l(M);_platform=l(de);ngControl=l(Ot,{optional:!0,self:!0});_autofillMonitor=l(Xg);_ngZone=l(H);_formField=l(dr,{optional:!0});_renderer=l(fe);_uid=l(be).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(TD,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new b;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=et(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Hi.required)??!1}set required(e){this._required=et(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&nh().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=et(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>nh().has(e));constructor(){let e=l(an,{optional:!0}),t=l(sn,{optional:!0}),n=l(co),o=l(T_,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?pn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Fn(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Vn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ID.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&k("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(ot("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),N("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),T("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",D]},exportAs:["matInput"],features:[X([{provide:cr,useExisting:i}]),me]})}return i})(),fB=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[Ch,Ch,Jg,Ne]})}return i})();var AD=["mat-internal-form-field",""],OD=["*"],jl=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&T("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:AD,ngContentSelectors:OD,decls:1,vars:0,template:function(t,n){t&1&&(se(),P(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var FD=["input"],PD=["label"],LD=["*"],Vh={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},ND=new _("mat-checkbox-default-options",{providedIn:"root",factory:()=>Vh}),Mt=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(Mt||{}),zh=class{source;checked},Vl=(()=>{class i{_elementRef=l(M);_changeDetectorRef=l(J);_ngZone=l(H);_animationsDisabled=ve();_options=l(ND,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new zh;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new I;indeterminateChange=new I;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Mt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){l(Me).load(vt);let e=l(new Kt("tabindex"),{optional:!0});this._options=this._options||Vh,this.color=this._options.color||Vh.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=l(be).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Mt.Indeterminate):this._transitionCheckState(this.checked?Mt.Checked:Mt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=oe(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Mt.Checked:Mt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case Mt.Init:if(t===Mt.Checked)return this._animationClasses.uncheckedToChecked;if(t==Mt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Mt.Unchecked:return t===Mt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Mt.Checked:return t===Mt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Mt.Indeterminate:return t===Mt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&ge(FD,5)(PD,5),t&2){let o;S(o=E())&&(n._inputElement=o.first),S(o=E())&&(n._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(ot("id",n.id),N("tabindex",null)("aria-label",null)("aria-labelledby",null),Qe(n.color?"mat-"+n.color:"mat-accent"),T("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",D],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",D],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",D],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ye(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",D],checked:[2,"checked","checked",D],disabled:[2,"disabled","disabled",D],indeterminate:[2,"indeterminate","indeterminate",D]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[X([{provide:ai,useExisting:ut(()=>i),multi:!0},{provide:Ci,useExisting:i,multi:!0}]),me],ngContentSelectors:LD,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(se(),m(0,"div",3),k("click",function(a){return n._preventBubblingFromLabel(a)}),m(1,"div",4,0)(3,"div",5),k("click",function(){return n._onTouchTargetClick()}),u(),m(4,"input",6,1),k("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(a){return n._onInteractionEvent(a)}),u(),j(6,"div",7),m(7,"div",8),Lt(),m(8,"svg",9),j(9,"path",10),u(),vr(),j(10,"div",11),u(),j(11,"div",12),u(),m(12,"label",13,2),P(14),u()()),t&2){let o=it(2);O("labelPosition",n.labelPosition),f(4),T("mdc-checkbox--selected",n.checked),O("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),N("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),f(7),O("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),f(),O("for",n.inputId)}},dependencies:[yi,jl],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})();var BD=()=>({standalone:!0}),A_=(i,r)=>r.id;function jD(i,r){if(i&1){let e=qe();m(0,"mat-checkbox",6),Er("ngModelChange",function(n){let o=we(e).$implicit,a=C(2).$implicit,s=C();return Sr(s.projectAnalysisGroupVisibilityMap[a.id][o.id],n)||(s.projectAnalysisGroupVisibilityMap[a.id][o.id]=n),Ce(n)}),x(1),u()}if(i&2){let e=r.$implicit,t=C(2).$implicit,n=C();kr("ngModel",n.projectAnalysisGroupVisibilityMap[t.id][e.id]),O("ngModelOptions",eu(3,BD)),f(),wt(" ",e.name," ")}}function VD(i,r){if(i&1&&Ge(0,jD,2,4,"mat-checkbox",5,A_),i&2){let e=C().$implicit,t=C();We(t.projectAnalysisGroupMap[e.id])}}function zD(i,r){if(i&1&&(m(0,"h2"),x(1),u(),V(2,VD,2,0)),i&2){let e=r.$implicit,t=C();f(),Ie(e.name),f(),z(t.projectAnalysisGroupMap[e.id]?2:-1)}}var jB=(()=>{class i{set projects(e){this._projects=e,this.cdr.markForCheck()}get projects(){return this._projects}set projectAnalysisGroupMap(e){this._projectAnalysisGroupMap=e,this.cdr.markForCheck()}get projectAnalysisGroupMap(){return this._projectAnalysisGroupMap}set projectAnalysisGroupVisibilityMap(e){this._projectAnalysisGroupVisibilityMap={};for(let t in e){this._projectAnalysisGroupVisibilityMap[t]={};for(let n in e[t])this._projectAnalysisGroupVisibilityMap[t][n]=e[t][n]}}get projectAnalysisGroupVisibilityMap(){return this._projectAnalysisGroupVisibilityMap}constructor(e,t){this.dialog=e,this.cdr=t,this._projects=[],this._projectAnalysisGroupMap={},this._projectAnalysisGroupVisibilityMap={}}close(){this.dialog.close()}save(){this.dialog.close(this.projectAnalysisGroupVisibilityMap)}static{this.\u0275fac=function(t){return new(t||i)(L(Ht),L(J))}}static{this.\u0275cmp=R({type:i,selectors:[["app-collate-project-analysis-group-visibility-dialog"]],inputs:{projects:"projects",projectAnalysisGroupMap:"projectAnalysisGroupMap",projectAnalysisGroupVisibilityMap:"projectAnalysisGroupVisibilityMap"},decls:11,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[2,"display","flex","flex-direction","column","gap","20px"],["mat-dialog-actions",""],["mat-button","",3,"click"],[3,"ngModel","ngModelOptions"],[3,"ngModelChange","ngModel","ngModelOptions"]],template:function(t,n){t&1&&(m(0,"h1",0),x(1,"Analysis Group Visibility"),u(),m(2,"div",1)(3,"form",2),Ge(4,zD,3,2,null,null,A_),u()(),m(6,"div",3)(7,"button",4),k("click",function(){return n.close()}),x(8,"Cancel"),u(),m(9,"button",4),k("click",function(){return n.save()}),x(10,"Submit"),u()()),t&2&&(f(4),We(n.projects))},dependencies:[ji,Vi,lo,Ll,On,Ol,mr,an,Vl,zi,$t],encapsulation:2,changeDetection:0})}}return i})();function wa(){return{colorScaleFixed:!1,colorScaleMin:-3,colorScaleMax:3,minLabel:"",maxLabel:"",useAgNameForAxis:!1,swapAxes:!1,cellSize:36,labelFontSize:9,summaryMode:"none"}}function zB(){return{log2fcCutoff:0,pValueCutoff:0,maskSubThreshold:!1,proteinFilter:"",visibilityMap:{},flippedAnalysisGroupIds:new Set}}var UD=["plotContainer"];function HD(i,r){i&1&&(m(0,"div",10)(1,"div",13),x(2,"Legend"),u(),m(3,"div",14),j(4,"span",15),m(5,"span"),x(6,"Project boundary"),u()(),m(7,"div",14),j(8,"span",16),m(9,"span"),x(10,"Comparison group"),u()(),m(11,"div",14),j(12,"span",17),m(13,"span"),x(14,"Comparison separator"),u()(),m(15,"div",14),j(16,"span",18),m(17,"span"),x(18,"Selected protein"),u()(),m(19,"div",14),j(20,"span",19),m(21,"span"),x(22,"Hover highlight"),u()(),m(23,"div",14),j(24,"span",20),m(25,"span"),x(26,"Log2FC (Viridis)"),u()()())}var tj=(()=>{class i{constructor(e){this.cdr=e,this._data=[],this._highlightedProtein=null,this._selectedProteinIds=new Set,this._proteinOrder=[],this._heatmapSettings=wa(),this.currentHoverTarget=new I,this.proteinClicked=new I,this.layout={},this.graphData=[],this.revision=0,this.showLegend=!1,this.allProteins=[],this.dataByColProtein={},this.proteinsByColIdx={},this.projectBoundaries=[],this.separatorLines=[],this.columnGroups=[],this.colIdxToGroupKey={},this.hoveredGroupKey=null,this.plotConfig={responsive:!0,scrollZoom:!1,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","zoomIn2d","zoomOut2d","autoScale2d","resetScale2d","pan2d","select2d","lasso2d"],displaylogo:!1}}toggleLegend(){this.showLegend=!this.showLegend,this.cdr.markForCheck()}zoomIn(){this.updateZoom(.8)}zoomOut(){this.updateZoom(1.25)}resetZoom(){let e=window.Plotly,t=this.plotContainerRef?.nativeElement?.querySelector(".js-plotly-plot");e&&t&&e.relayout(t,{"xaxis.autorange":!0,"yaxis.autorange":!0})}updateZoom(e){let t=window.Plotly,n=this.plotContainerRef?.nativeElement?.querySelector(".js-plotly-plot");if(!t||!n)return;let o=n.layout,a=o?.xaxis?.range,s=o?.yaxis?.range;if(!a||!s)return;let c=(a[0]+a[1])/2,d=(a[1]-a[0])*e,h=(s[0]+s[1])/2,p=(s[1]-s[0])*e;t.relayout(n,{"xaxis.range":[c-d/2,c+d/2],"yaxis.range":[h-p/2,h+p/2]})}set data(e){this._data=e??[],this.drawHeatmap()}set highlightedProtein(e){this._highlightedProtein=e,this._data.length&&(this.rebuildShapes(),this.cdr.markForCheck())}set selectedProteinIds(e){this._selectedProteinIds=e??new Set,this._data.length&&(this.rebuildShapes(),this.cdr.markForCheck())}set heatmapSettings(e){this._heatmapSettings=e??wa(),this._data.length&&this.drawHeatmap()}set proteinOrder(e){this._proteinOrder=e??[],this._data.length&&this.drawHeatmap()}get data(){return this._data}get highlightedProtein(){return this._highlightedProtein}get selectedProteinIds(){return this._selectedProteinIds}drawHeatmap(){if(!this._data.length)return;this.dataByColProtein={},this.proteinsByColIdx={},this.projectBoundaries=[],this.separatorLines=[],this.columnGroups=[],this.colIdxToGroupKey={},this.hoveredGroupKey=null;let e=this._heatmapSettings,t=e.swapAxes,n=Math.max(5,e.cellSize??36),o=Math.max(4,e.labelFontSize??9),a={};for(let ie of this._data)(a[ie.project]??=[]).push(ie);for(let ie in a)a[ie].sort(($e,he)=>{let lt=($e.comparison??"").localeCompare(he.comparison??"");return lt!==0?lt:($e.protein??"").localeCompare(he.protein??"")});let s=new Map,c=[],d=[],h=0,p=new Map;for(let ie in a){let $e=a[ie],he=[],lt=new Set,Te=new Map;for(let mt of $e){let ct=`${mt.analysis_group}||${mt.conditionA}||${mt.conditionB}`;lt.has(ct)||(lt.add(ct),he.push(ct)),Te.has(ct)||Te.set(ct,mt)}let Wt=he.length;this.projectBoundaries.push({x0:h-.5,x1:h+Wt-.5});let Pt=e.useAgNameForAxis,rt="";he.forEach((mt,ct)=>{let Si=Te.get(mt),cn=h+ct;s.set(`${ie}||${mt}`,cn);let $i=Pt?Si.analysis_group:Si.comparison??"",Ta=`${ie}||${$i}`;if(c.push(cn),d.push($i!==rt?$i:""),this.colIdxToGroupKey[cn]=Ta,p.has(Ta)||p.set(Ta,[]),p.get(Ta).push(cn),ct>0){let xm=Te.get(he[ct-1]);(Pt?xm.analysis_group:xm.comparison??"")!==$i&&this.separatorLines.push(cn-.5)}this.proteinsByColIdx[cn]=new Set,rt=$i}),h+=Wt}this.columnGroups=Array.from(p.entries()).map(([ie,$e])=>({groupKey:ie,colIdxs:$e}));let w=h;for(let ie of this._data){let $e=`${ie.analysis_group}||${ie.conditionA}||${ie.conditionB}`,he=s.get(`${ie.project}||${$e}`);he!==void 0&&(this.dataByColProtein[`${he}_${ie.protein}`]=ie,this.proteinsByColIdx[he]?.add(ie.protein))}let A=Array.from(new Set(this._data.map(ie=>ie.protein))),U=this._proteinOrder.length?[...this._proteinOrder.filter(ie=>A.includes(ie)),...A.filter(ie=>!this._proteinOrder.includes(ie))]:A.sort();this.allProteins=U;let ae=new Map(U.map((ie,$e)=>[ie,$e])),F=U.map(()=>new Array(w).fill(null)),ee=U.map(()=>new Array(w).fill(null));for(let ie of this._data){let $e=`${ie.analysis_group}||${ie.conditionA}||${ie.conditionB}`,he=s.get(`${ie.project}||${$e}`),lt=ae.get(ie.protein);he!==void 0&&lt!==void 0&&(F[lt][he]=ie.log2fc,ee[lt][he]={protein:ie.protein,project:ie.project,ag:ie.analysis_group,comparison:ie.comparison??"",log2fc:ie.log2fc,pval:ie.p_value})}let ce,Re;if(e.colorScaleFixed)ce=e.colorScaleMin,Re=e.colorScaleMax;else{let ie=0;for(let $e of F)for(let he of $e)he!==null&&Math.abs(he)>ie&&(ie=Math.abs(he));ie===0&&(ie=1),ce=-ie,Re=ie}let Pe=e.minLabel||ce.toFixed(1),Gt=e.maxLabel||Re.toFixed(1),Di=Re>ce?-ce/(Re-ce):.5,ki=[[0,"rgb(5, 48, 97)"],[Math.max(0,Di*.5),"rgb(67, 147, 195)"],[Math.min(1,Math.max(0,Di)),"rgb(255, 255, 255)"],[Math.min(1,Di+(1-Di)*.5),"rgb(214, 96, 77)"],[1,"rgb(103, 0, 31)"]],ym="<b>Protein:</b> %{customdata.protein}<br><b>Project:</b> %{customdata.project}<br><b>Analysis Group:</b> %{customdata.ag}<br><b>Comparison:</b> %{customdata.comparison}<br><b>Log2FC:</b> %{customdata.log2fc:.3f}<br><b>-Log10(p):</b> %{customdata.pval:.3f}<extra></extra>",wm={orientation:"h",lenmode:"pixels",len:200,thicknessmode:"pixels",thickness:12,xanchor:"center",x:.5,yanchor:"top",y:0,ypad:20,tickvals:[ce,0,Re],ticktext:[Pe,"0",Gt],tickfont:{size:9}},Ra=800,Ia=600,pr=[];e.summaryMode!=="none"&&U.forEach((ie,$e)=>{let he=0,lt=0,Te=0;for(let rt=0;rt<w;rt++){let mt=F[$e][rt];mt!==null&&(Te++,mt>0?he++:mt<0&&lt++)}if(Te===0)return;let Wt,Pt;if(e.summaryMode==="percentage"?(Wt=`\u2191${Math.round(he/Te*100)}%`,Pt=`\u2193${Math.round(lt/Te*100)}%`):(Wt=`\u2191${he}`,Pt=`\u2193${lt}`),!t)pr.push({x:1,y:$e,xshift:8,xref:"paper",yref:"y",text:Wt,showarrow:!1,font:{size:8,color:"rgb(103,0,31)"},xanchor:"left"}),pr.push({x:1,y:$e,xshift:38,xref:"paper",yref:"y",text:Pt,showarrow:!1,font:{size:8,color:"rgb(5,48,97)"},xanchor:"left"});else{let rt=$e%2!==0?-20:0;pr.push({x:$e,y:0,yshift:-12+rt,xref:"x",yref:"paper",text:Wt,showarrow:!1,font:{size:8,color:"rgb(103,0,31)"},yanchor:"top"}),pr.push({x:$e,y:0,yshift:-24+rt,xref:"x",yref:"paper",text:Pt,showarrow:!1,font:{size:8,color:"rgb(5,48,97)"},yanchor:"top"})}});let Vb=e.summaryMode!=="none"&&!t?70:0,Cm=e.summaryMode!=="none"&&t?60:0;if(t){let ie=Array.from({length:w},(ct,Si)=>U.map((cn,$i)=>F[$i][Si])),$e=Array.from({length:w},(ct,Si)=>U.map((cn,$i)=>ee[$i][Si])),he=Math.max(...d.filter(ct=>ct).map(ct=>ct.length),4),lt=Math.max(...U.map(ct=>ct.length),4),Te={l:Math.max(200,he*7+20),t:Math.max(100,lt*7+20),r:80,b:Math.max(80+Cm,80)},Wt=U.length*n,Pt=w*n;Wt+Te.l+Te.r<Ra&&(Te.r+=Ra-Wt-Te.l-Te.r),Pt+Te.t+Te.b<Ia&&(Te.b+=Ia-Pt-Te.t-Te.b);let rt=U.map((ct,Si)=>Si),mt=Array.from({length:w},(ct,Si)=>Si);this.graphData=[{x:rt,y:mt,z:ie,customdata:$e,type:"heatmap",colorscale:ki,zmin:ce,zmax:Re,zauto:!1,xgap:1,ygap:1,hoverongaps:!1,hovertemplate:ym,colorbar:re(g({},wm),{y:0,ypad:Cm+20})}],this.layout={width:Wt+Te.l+Te.r,height:Pt+Te.t+Te.b,margin:Te,annotations:pr,xaxis:{side:"top",showgrid:!1,zeroline:!1,fixedrange:!1,tickvals:rt,ticktext:U,tickangle:45,tickfont:{size:o},dtick:1},yaxis:{autorange:"reversed",showgrid:!1,zeroline:!1,fixedrange:!1,tickvals:mt,ticktext:d,tickfont:{size:o},dtick:1},hoverlabel:{bgcolor:"rgba(255,255,255,0.95)",bordercolor:"#555",font:{size:11},align:"left"},plot_bgcolor:"#e2e8f0",paper_bgcolor:"rgba(0,0,0,0)",shapes:[]}}else{let ie=Math.max(...U.map(rt=>rt.length)),$e=Math.max(...d.filter(rt=>rt).map(rt=>rt.length),4),he={l:Math.max(140,ie*7+20),t:Math.max(140,$e*7+20),r:Math.max(100+Vb,100),b:80},lt=w*n,Te=U.length*n;lt+he.l+he.r<Ra&&(he.r+=Ra-lt-he.l-he.r),Te+he.t+he.b<Ia&&(he.b+=Ia-Te-he.t-he.b);let Wt=Array.from({length:w},(rt,mt)=>mt),Pt=U.map((rt,mt)=>mt);this.graphData=[{x:Wt,y:Pt,z:F,customdata:ee,type:"heatmap",colorscale:ki,zmin:ce,zmax:Re,zauto:!1,xgap:1,ygap:1,hoverongaps:!1,hovertemplate:ym,colorbar:wm}],this.layout={width:lt+he.l+he.r,height:Te+he.t+he.b,margin:he,annotations:pr,xaxis:{side:"top",showgrid:!1,zeroline:!1,fixedrange:!1,tickvals:c,ticktext:d,tickangle:45,tickfont:{size:o},dtick:1},yaxis:{autorange:"reversed",showgrid:!1,zeroline:!1,fixedrange:!1,tickvals:Pt,ticktext:U,tickfont:{size:o},dtick:1},hoverlabel:{bgcolor:"rgba(255,255,255,0.95)",bordercolor:"#555",font:{size:11},align:"left"},plot_bgcolor:"#e2e8f0",paper_bgcolor:"rgba(0,0,0,0)",shapes:[]}}this.rebuildShapes()}rebuildShapes(){let e=[];for(let t of this.projectBoundaries)e.push({type:"rect",x0:t.x0,x1:t.x1,y0:0,y1:1,xref:"x",yref:"paper",line:{color:"#e53e3e",width:3},fillcolor:"rgba(0,0,0,0)"});for(let t of this.separatorLines)e.push({type:"line",x0:t,x1:t,y0:0,y1:1,xref:"x",yref:"paper",line:{color:"rgba(186,104,166,0.8)",width:2}});if(this.hoveredGroupKey!==null){let t=this.columnGroups.find(n=>n.groupKey===this.hoveredGroupKey);if(t)for(let n of t.colIdxs)e.push({type:"rect",x0:n-.5,x1:n+.5,y0:0,y1:1,xref:"x",yref:"paper",line:{color:"#1a202c",width:2},fillcolor:"rgba(0,0,0,0)"})}this.allProteins.forEach((t,n)=>{this._selectedProteinIds.has(t)&&e.push({type:"rect",xref:"paper",yref:"y",x0:-.015,x1:0,y0:n-.5,y1:n+.5,fillcolor:"rgba(79, 70, 229, 0.7)",line:{width:0}})}),this.layout=re(g({},this.layout),{shapes:e}),this.revision++}onClick(e){let t=e.points[0].y,n=this.allProteins[t];n&&this.proteinClicked.emit(n)}handleHoverIn(e){let t=e.points[0].x,n=e.points[0].y,o=this.allProteins[n];this.hoveredGroupKey=this.colIdxToGroupKey[t]??null,o&&this.currentHoverTarget.emit(this.dataByColProtein[`${t}_${o}`]),this.rebuildShapes(),this.cdr.markForCheck()}handleHoverOut(e){this.hoveredGroupKey=null,this.currentHoverTarget.emit(void 0),this.rebuildShapes(),this.cdr.markForCheck()}exportToCsv(e="all"){let t=e==="selected"&&this._selectedProteinIds.size>0?this._data.filter(p=>this._selectedProteinIds.has(p.protein)):this._data;if(!t.length)return;let n=["Protein","Project","Analysis Group","Condition A","Condition B","Comparison","Log2FC","P-value","Search Term"],o=t.map(p=>[p.protein,p.project,p.analysis_group,p.conditionA,p.conditionB,p.comparison,p.log2fc.toString(),p.p_value.toString(),p.searchTerm]),a=[n.join(","),...o.map(p=>p.map(w=>`"${w}"`).join(","))].join(`
`),s=new Blob([a],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(s),d=document.createElement("a"),h=e==="selected"?"heatmap_selected.csv":`heatmap_${t[0]?.searchTerm||"data"}.csv`;d.setAttribute("href",c),d.setAttribute("download",h),d.style.visibility="hidden",document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(c)}static{this.\u0275fac=function(t){return new(t||i)(L(J))}}static{this.\u0275cmp=R({type:i,selectors:[["app-heatmap-plot"]],viewQuery:function(t,n){if(t&1&&ge(UD,5),t&2){let o;S(o=E())&&(n.plotContainerRef=o.first)}},inputs:{data:"data",highlightedProtein:"highlightedProtein",selectedProteinIds:"selectedProteinIds",heatmapSettings:"heatmapSettings",proteinOrder:"proteinOrder"},outputs:{currentHoverTarget:"currentHoverTarget",proteinClicked:"proteinClicked"},decls:27,vars:8,consts:[["plotContainer",""],[1,"heatmap-card"],[1,"toolbar-title"],[1,"toolbar-spacer"],["mat-icon-button","","matTooltip","Zoom in",3,"click"],["mat-icon-button","","matTooltip","Zoom out",3,"click"],["mat-icon-button","","matTooltip","Reset zoom",3,"click"],["mat-icon-button","","matTooltip","Export all",3,"click"],["mat-icon-button","","matTooltip","Export selected",3,"click","disabled"],["mat-icon-button","","matTooltip","Toggle Legend",3,"click"],[1,"heatmap-legend"],[1,"heatmap-content"],[3,"hover","unhover","plotly_click","data","layout","config","updateOnlyWithRevision","revision"],[1,"legend-title"],[1,"legend-item"],[1,"legend-color",2,"border","3px solid red"],[1,"legend-color",2,"border-bottom","3px solid rgb(179,0,137)"],[1,"legend-color",2,"border-left","3px solid rgba(186,104,166)"],[1,"legend-color",2,"border","3px solid #00ff00"],[1,"legend-color",2,"border","2px solid black"],[1,"legend-gradient"]],template:function(t,n){t&1&&(m(0,"div",1)(1,"mat-toolbar")(2,"span",2),x(3,"Heatmap"),u(),j(4,"span",3),m(5,"button",4),k("click",function(){return n.zoomIn()}),m(6,"mat-icon"),x(7,"zoom_in"),u()(),m(8,"button",5),k("click",function(){return n.zoomOut()}),m(9,"mat-icon"),x(10,"zoom_out"),u()(),m(11,"button",6),k("click",function(){return n.resetZoom()}),m(12,"mat-icon"),x(13,"fit_screen"),u()(),m(14,"button",7),k("click",function(){return n.exportToCsv("all")}),m(15,"mat-icon"),x(16,"download"),u()(),m(17,"button",8),k("click",function(){return n.exportToCsv("selected")}),m(18,"mat-icon"),x(19,"cloud_download"),u()(),m(20,"button",9),k("click",function(){return n.toggleLegend()}),m(21,"mat-icon"),x(22),u()()(),V(23,HD,27,0,"div",10),m(24,"div",11,0)(26,"plotly-plot",12),k("hover",function(a){return n.handleHoverIn(a)})("unhover",function(a){return n.handleHoverOut(a)})("plotly_click",function(a){return n.onClick(a)}),u()()()),t&2&&(f(17),O("disabled",n.selectedProteinIds.size===0),f(5),Ie(n.showLegend?"visibility_off":"help_outline"),f(),z(n.showLegend?23:-1),f(3),O("data",n.graphData)("layout",n.layout)("config",n.plotConfig)("updateOnlyWithRevision",!0)("revision",n.revision))},dependencies:[Ag,bh,sr,Ui,ha,Fg],styles:[".blinking[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blink-animation 1s infinite}@keyframes _ngcontent-%COMP%_blink-animation{0%{opacity:1}50%{opacity:.5}to{opacity:1}}.heatmap-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:var(--app-surface-color);overflow:hidden;position:relative}.heatmap-card[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{background:transparent;height:40px;min-height:40px;padding:0 8px}.toolbar-title[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.heatmap-content[_ngcontent-%COMP%]{overflow:auto;position:relative;display:flex;justify-content:center}.heatmap-legend[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;z-index:99;background:var(--app-surface-color);border:1px solid var(--app-outline-variant);border-radius:4px;padding:8px 12px;font-size:12px;box-shadow:0 2px 8px #00000026}.legend-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:6px;border-bottom:1px solid var(--app-divider-color);padding-bottom:4px}.legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin:4px 0}.legend-color[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;background:var(--app-surface-color)}.legend-gradient[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;background:linear-gradient(to right,#440154,#3b528b,#21918c,#5ec962,#fde725)}"],changeDetection:0})}}return i})();var $D=["determinateSpinner"];function GD(i,r){if(i&1&&(Lt(),m(0,"svg",11),j(1,"circle",12),u()),i&2){let e=C();N("viewBox",e._viewBox()),f(),ci("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),N("r",e._circleRadius())}}var WD=new _("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:O_})}),O_=100,qD=10,uj=(()=>{class i{_elementRef=l(M);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(WD),t=Xd(),n=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=O_;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-qD)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,n){if(t&1&&ge($D,5),t&2){let o;S(o=E())&&(n._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,n){t&2&&(N("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),Qe("mat-"+n.color),ci("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),T("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ye],diameter:[2,"diameter","diameter",Ye],strokeWidth:[2,"strokeWidth","strokeWidth",Ye]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,n){if(t&1&&(ke(0,GD,2,8,"ng-template",null,0,fn),m(2,"div",2,1),Lt(),m(4,"svg",3),j(5,"circle",4),u()(),vr(),m(6,"div",5)(7,"div",6)(8,"div",7),gt(9,8),u(),m(10,"div",9),gt(11,8),u(),m(12,"div",10),gt(13,8),u()()()),t&2){let o=it(1);f(4),N("viewBox",n._viewBox()),f(),ci("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),N("r",n._circleRadius()),f(4),O("ngTemplateOutlet",o),f(2),O("ngTemplateOutlet",o),f(2),O("ngTemplateOutlet",o)}},dependencies:[Hn],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return i})();var fj=(()=>{class i{createDefaultSettings(e){return{projectOrder:e.map(t=>t.id),analysisGroupOrderMap:{},renameSampleCondition:this.createEmptyProjectMap(e),projectAnalysisGroupVisibility:this.createEmptyProjectMap(e),projectConditionColorMap:this.createEmptyProjectMap(e),projectConditionOrder:this.createEmptyProjectMap(e),plotSettings:{},showTags:!1}}initializeSettings(e){if(!e.settings)return this.createDefaultSettings(e.projects);let t=g({},e.settings);return t.plotSettings||(t.plotSettings={}),t.projectAnalysisGroupVisibility||(t.projectAnalysisGroupVisibility=this.createEmptyProjectMap(e.projects)),t.renameSampleCondition||(t.renameSampleCondition=this.createEmptyProjectMap(e.projects)),t.projectConditionColorMap||(t.projectConditionColorMap=this.createEmptyProjectMap(e.projects)),t.projectConditionOrder||(t.projectConditionOrder=this.createEmptyProjectMap(e.projects)),t}orderProjectsBySettings(e,t){if(!t||t.length===0)return e;let n=t.map(a=>e.find(s=>s.id===a)).filter(a=>a!==void 0),o=e.filter(a=>!t.includes(a.id));return[...n,...o]}filterSearchResultsByTerms(e,t,n){let o={};return Object.keys(e).forEach(a=>{let s=parseInt(a,10),c=e[s].filter(d=>t.includes(d.search_term));n.analysisGroupOrderMap?.[s]&&(c=this.orderResultsByAnalysisGroup(c,n.analysisGroupOrderMap[s])),n.projectAnalysisGroupVisibility?.[s]&&(c=this.filterResultsByVisibility(c,n.projectAnalysisGroupVisibility[s])),o[s]=c}),o}orderAnalysisGroups(e,t){let n={};return Object.keys(e).forEach(o=>{let a=parseInt(o,10),s=e[a],c=t?.[a];if(!c){n[a]=s;return}let d=s.filter(p=>c.includes(p.id)).sort((p,w)=>c.indexOf(p.id)-c.indexOf(w.id)),h=s.filter(p=>!c.includes(p.id));n[a]=[...d,...h]}),n}groupAnalysisGroupsByProject(e){let t={};return e.forEach(n=>{t[n.project]||(t[n.project]=[]),t[n.project].push(n)}),t}initializeVisibilityMap(e,t){let n=t?g({},t):{};for(let o in e){n[o]||(n[o]={});for(let a of e[o])a.id in n[o]||(n[o][a.id]=!0)}return n}createEmptyProjectMap(e){let t={};return e.forEach(n=>{t[n.id]={}}),t}orderResultsByAnalysisGroup(e,t){let n=e.filter(a=>t.includes(a.analysis_group.id)).sort((a,s)=>t.indexOf(a.analysis_group.id)-t.indexOf(s.analysis_group.id)),o=e.filter(a=>!t.includes(a.analysis_group.id));return[...n,...o]}filterResultsByVisibility(e,t){return e.filter(n=>{let o=n.analysis_group.id;return o in t?t[o]:!0})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Pn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new b;constructor(r=!1,e,t=!0,n){this._multiple=r,this._emitChanges=t,this.compareWith=n,e&&e.length&&(r?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...r){this._verifyValueAssignment(r),r.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...r){this._verifyValueAssignment(r),r.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...r){this._verifyValueAssignment(r);let e=this.selected,t=new Set(r.map(o=>this._getConcreteValue(o)));r.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(r){return this.isSelected(r)?this.deselect(r):this.select(r)}clear(r=!0){this._unmarkAll();let e=this._hasQueuedChanges();return r&&this._emitChangeEvent(),e}isSelected(r){return this._selection.has(this._getConcreteValue(r))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(r){this._multiple&&this.selected&&this._selected.sort(r)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(r){r=this._getConcreteValue(r),this.isSelected(r)||(this._multiple||this._unmarkAll(),this.isSelected(r)||this._selection.add(r),this._emitChanges&&this._selectedToEmit.push(r))}_unmarkSelected(r){r=this._getConcreteValue(r),this.isSelected(r)&&(this._selection.delete(r),this._emitChanges&&this._deselectedToEmit.push(r))}_unmarkAll(){this.isEmpty()||this._selection.forEach(r=>this._unmarkSelected(r))}_verifyValueAssignment(r){r.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(r,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(r,t))return t;return r}else return r}};var YD=(()=>{class i{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var zl=class{applyChanges(r,e,t,n,o){r.forEachOperation((a,s,c)=>{let d,h;if(a.previousIndex==null){let p=t(a,s,c);d=e.createEmbeddedView(p.templateRef,p.context,p.index),h=pi.INSERTED}else c==null?(e.remove(s),h=pi.REMOVED):(d=e.get(s),e.move(d,c),h=pi.MOVED);o&&o({context:d?.context,operation:h,record:a})})}detach(){}};var ho=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=et(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=et(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,n){t&2&&(N("aria-orientation",n.vertical?"vertical":"horizontal"),T("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return i})();var F_=(()=>{class i{_animationsDisabled=ve();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&T("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var P_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[Ne]})}return i})();var L_=["*"],N_=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,B_=["unscopedContent"],KD=["text"],QD=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],ZD=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"],XD=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],JD=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function ek(i,r){i&1&&P(0,4)}function tk(i,r){if(i&1&&(m(0,"div",11),j(1,"input",12),m(2,"div",13),Lt(),m(3,"svg",14),j(4,"path",15),u(),vr(),j(5,"div",16),u()()),i&2){let e=C();T("mdc-checkbox--disabled",e.disabled),f(),O("checked",e.selected)("disabled",e.disabled)}}function ik(i,r){if(i&1&&(m(0,"div",17),j(1,"input",18),m(2,"div",19),j(3,"div",20)(4,"div",21),u()()),i&2){let e=C();T("mdc-radio--disabled",e.disabled),f(),O("checked",e.selected)("disabled",e.disabled)}}function nk(i,r){}function rk(i,r){if(i&1&&(m(0,"span",4),ke(1,nk,0,0,"ng-template",6),u()),i&2){C();let e=it(3);f(),O("ngTemplateOutlet",e)}}function ok(i,r){}function ak(i,r){if(i&1&&(m(0,"span",5),ke(1,ok,0,0,"ng-template",6),u()),i&2){C();let e=it(5);f(),O("ngTemplateOutlet",e)}}function sk(i,r){}function lk(i,r){if(i&1&&ke(0,sk,0,0,"ng-template",6),i&2){C();let e=it(1);O("ngTemplateOutlet",e)}}function ck(i,r){}function dk(i,r){if(i&1&&(m(0,"span",9),ke(1,ck,0,0,"ng-template",6),u()),i&2){C();let e=it(3);f(),O("ngTemplateOutlet",e)}}function hk(i,r){}function mk(i,r){if(i&1&&(m(0,"span",9),ke(1,hk,0,0,"ng-template",6),u()),i&2){C();let e=it(5);f(),O("ngTemplateOutlet",e)}}function uk(i,r){}function pk(i,r){if(i&1&&ke(0,uk,0,0,"ng-template",6),i&2){C();let e=it(1);O("ngTemplateOutlet",e)}}var j_=new _("ListOption"),V_=(()=>{class i{_elementRef=l(M);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Ul=(()=>{class i{_elementRef=l(M);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),fk=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),z_=(()=>{class i{_listOption=l(j_,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,hostVars:4,hostBindings:function(t,n){t&2&&T("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),gk=(()=>{class i extends z_{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[W]})}return i})(),_k=(()=>{class i extends z_{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[W]})}return i})(),bk=new _("MAT_LIST_CONFIG"),Ca=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=et(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(et(e))}_disabled=oe(!1);_defaultOptions=l(bk,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,hostVars:1,hostBindings:function(t,n){t&2&&N("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),Uh=(()=>{class i{_elementRef=l(M);_ngZone=l(H);_listBase=l(Ca,{optional:!0});_platform=l(de);_hostElement;_isButtonElement;_noopAnimations=ve();_avatars;_icons;set lines(e){this._explicitLines=kt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=et(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(et(e))}_disabled=oe(!1);_subscriptions=new ye;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(Me).load(vt);let e=l(Rn,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ar(this,this._ngZone,this._hostElement,this._platform,l(q)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Be(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,contentQueries:function(t,n,o){if(t&1&&ze(o,gk,4)(o,_k,4),t&2){let a;S(a=E())&&(n._avatars=a),S(a=E())&&(n._icons=a)}},hostVars:4,hostBindings:function(t,n){t&2&&(N("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),T("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Hl=(()=>{class i extends Ca{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[X([{provide:Ca,useExisting:i}]),W],ngContentSelectors:L_,decls:1,vars:0,template:function(t,n){t&1&&(se(),P(0))},styles:[N_],encapsulation:2,changeDetection:0})}return i})(),$l=(()=>{class i extends Uh{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=et(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,n,o){if(t&1&&ze(o,Ul,5)(o,V_,5)(o,fk,5),t&2){let a;S(a=E())&&(n._lines=a),S(a=E())&&(n._titles=a),S(a=E())&&(n._meta=a)}},viewQuery:function(t,n){if(t&1&&ge(B_,5)(KD,5),t&2){let o;S(o=E())&&(n._unscopedContent=o.first),S(o=E())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,n){t&2&&(N("aria-current",n._getAriaCurrent()),T("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[W],ngContentSelectors:ZD,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,n){t&1&&(se(QD),P(0),m(1,"span",1),P(2,1),P(3,2),m(4,"span",2,0),k("cdkObserveContent",function(){return n._updateItemLines(!0)}),P(6,3),u()(),P(7,4),P(8,5),j(9,"div",3))},dependencies:[ia],encapsulation:2,changeDetection:0})}return i})(),U_=new _("SelectionList"),vk=(()=>{class i extends Uh{_selectionList=l(U_);_changeDetectorRef=l(J);_lines;_titles;_unscopedContent;selectedChange=new I;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(e){this.togglePosition=e}get color(){return this._color||this._selectionList.color}set color(e){this._color=e}_color;get value(){return this._value}set value(e){this.selected&&e!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=e}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(e){let t=et(e);t!==this._selected&&(this._setSelected(t),(t||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let e=this._selectionList;e._value&&e._value.some(n=>e.compareWith(this._value,n))&&this._setSelected(!0);let t=this._selected;Promise.resolve().then(()=>{(this._selected||t)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(e){return this._selectionList.multiple&&this._getTogglePosition()===e}_hasRadioAt(e){return!this._selectionList.multiple&&this._getTogglePosition()===e&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(e){return this._hasProjected("icons",e)||this._hasProjected("avatars",e)}_hasProjected(e,t){return this._getTogglePosition()!==t&&(e==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(e){return e===this._selected?!1:(this._selected=e,e?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(e),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(e){this._hostElement.setAttribute("tabindex",e+"")}_hasBothLeadingAndTrailing(){let e=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),t=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return e&&t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-list-option"]],contentQueries:function(t,n,o){if(t&1&&ze(o,Ul,5)(o,V_,5),t&2){let a;S(a=E())&&(n._lines=a),S(a=E())&&(n._titles=a)}},viewQuery:function(t,n){if(t&1&&ge(B_,5),t&2){let o;S(o=E())&&(n._unscopedContent=o.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(t,n){t&1&&k("blur",function(){return n._handleBlur()})("click",function(){return n._toggleOnInteraction()}),t&2&&(N("aria-selected",n.selected),T("mdc-list-item--selected",n.selected&&!n._selectionList.multiple&&n._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",n._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",n._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",n._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",n._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",n._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",n._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",n._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",n._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("mat-accent",n.color!=="primary"&&n.color!=="warn")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[X([{provide:Uh,useExisting:i},{provide:j_,useExisting:i}]),W],ngContentSelectors:JD,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(t,n){t&1&&(se(XD),ke(0,ek,1,0,"ng-template",null,0,fn)(2,tk,6,4,"ng-template",null,1,fn)(4,ik,5,4,"ng-template",null,2,fn),V(6,rk,2,1,"span",4)(7,ak,2,1,"span",5),V(8,lk,1,1,null,6),m(9,"span",7),P(10),P(11,1),m(12,"span",8,3),k("cdkObserveContent",function(){return n._updateItemLines(!0)}),P(14,2),u()(),V(15,dk,2,1,"span",9)(16,mk,2,1,"span",9),V(17,pk,1,1,null,6),P(18,3),j(19,"div",10)),t&2&&(f(6),z(n._hasCheckboxAt("before")?6:n._hasRadioAt("before")?7:-1),f(2),z(n._hasIconsOrAvatarsAt("before")?8:-1),f(7),z(n._hasCheckboxAt("after")?15:n._hasRadioAt("after")?16:-1),f(2),z(n._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[Hn,ia],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
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
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
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
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
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
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
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
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
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
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
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
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),H_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","mat-subheader",""],["","matSubheader",""]],hostAttrs:[1,"mat-mdc-subheader","mdc-list-group__subheader"]})}return i})();var yk={provide:ai,useExisting:ut(()=>wk),multi:!0},Hh=class{source;options;constructor(r,e){this.source=r,this.options=e}},wk=(()=>{class i extends Ca{_element=l(M);_ngZone=l(H);_renderer=l(fe);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new b;_isDestroyed=!1;_onChange=e=>{};_items;selectionChange=new I;color="accent";compareWith=(e,t)=>e===t;get multiple(){return this._multiple}set multiple(e){let t=et(e);t!==this._multiple&&(this._multiple=t,this.selectedOptions=new Pn(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=et(e)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new Pn(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=l(J);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(e){let t=e.disabled,n=e.disableRipple,o=e.hideSingleSelectionIndicator;(n&&!n.firstChange||t&&!t.firstChange||o&&!o.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(e){this._element.nativeElement.focus(e)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let e=this._getSelectedOptionValues();this._onChange(e),this._value=e}}_emitChangeEvent(e){this.selectionChange.emit(new Hh(this,e))}writeValue(e){this._value=e,this.options&&this._setOptionsFromValues(e||[])}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(e){this._selectionListDisabled.set(et(e)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=oe(!1);registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}_watchForSelectionChange(){this.selectedOptions.changed.pipe(G(this._destroyed)).subscribe(e=>{for(let t of e.added)t.selected=!0;for(let t of e.removed)t.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(e){this.options.forEach(t=>t._setSelected(!1)),e.forEach(t=>{let n=this.options.find(o=>o.selected?!1:this.compareWith(o.value,t));n&&n._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(e=>e.selected).map(e=>e.value)}_markOptionsForCheck(){this.options&&this.options.forEach(e=>e._markForCheck())}_setAllOptionsSelected(e,t){let n=[];return this.options.forEach(o=>{(!t||!o.disabled)&&o._setSelected(e)&&n.push(o)}),n.length&&this._reportValueChange(),n}get options(){return this._items}_handleKeydown(e){let t=this._keyManager.activeItem;if((e.keyCode===13||e.keyCode===32)&&!this._keyManager.isTyping()&&t&&!t.disabled)e.preventDefault(),t._toggleOnInteraction();else if(e.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&He(e,"ctrlKey","metaKey")){let n=this.options.some(o=>!o.disabled&&!o.selected);e.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(n,!0))}else this._keyManager.onKeydown(e)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=e=>{if(this.disabled)return;let t=this._items.toArray().findIndex(n=>n._elementRef.nativeElement.contains(e.target));t>-1?this._setActiveOption(t):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new vi(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(e=>this._setActiveOption(e)),this._items.changes.pipe(G(this._destroyed)).subscribe(()=>{let e=this._keyManager.activeItem;(!e||this._items.toArray().indexOf(e)===-1)&&this._resetActiveOption()})}_setActiveOption(e){this._items.forEach((t,n)=>t._setTabindex(n===e?0:-1)),this._keyManager.updateActiveItem(e)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let e=this._items.find(t=>t.selected&&!t.disabled)||this._items.first;this._setActiveOption(e?this._items.toArray().indexOf(e):-1)}_containsFocus(){let e=Jn();return e&&this._element.nativeElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-selection-list"]],contentQueries:function(t,n,o){if(t&1&&ze(o,vk,5),t&2){let a;S(a=E())&&(n._items=a)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(t,n){t&1&&k("keydown",function(a){return n._handleKeydown(a)}),t&2&&N("aria-multiselectable",n.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[X([yk,{provide:Ca,useExisting:i},{provide:U_,useExisting:i}]),W,me],ngContentSelectors:L_,decls:1,vars:0,template:function(t,n){t&1&&(se(),P(0))},styles:[N_],encapsulation:2,changeDetection:0})}return i})();function Wh(i){let r=i.cloneNode(!0),e=r.querySelectorAll("[id]"),t=i.nodeName.toLowerCase();r.removeAttribute("id");for(let n=0;n<e.length;n++)e[n].removeAttribute("id");return t==="canvas"?W_(i,r):(t==="input"||t==="select"||t==="textarea")&&G_(i,r),$_("canvas",i,r,W_),$_("input, textarea, select",i,r,G_),r}function $_(i,r,e,t){let n=r.querySelectorAll(i);if(n.length){let o=e.querySelectorAll(i);for(let a=0;a<n.length;a++)t(n[a],o[a])}}var Ck=0;function G_(i,r){r.type!=="file"&&(r.value=i.value),r.type==="radio"&&r.name&&(r.name=`mat-clone-${r.name}-${Ck++}`)}function W_(i,r){let e=r.getContext("2d");if(e)try{e.drawImage(i,0,0)}catch(t){}}function Jh(i){let r=i.getBoundingClientRect();return{top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height,x:r.x,y:r.y}}function qh(i,r,e){let{top:t,bottom:n,left:o,right:a}=i;return e>=t&&e<=n&&r>=o&&r<=a}function xk(i,r){let e=r.left<i.left,t=r.left+r.width>i.right,n=r.top<i.top,o=r.top+r.height>i.bottom;return e||t||n||o}function ka(i,r,e){i.top+=r,i.bottom=i.top+i.height,i.left+=e,i.right=i.left+i.width}function q_(i,r,e,t){let{top:n,right:o,bottom:a,left:s,width:c,height:d}=i,h=c*r,p=d*r;return t>n-p&&t<a+p&&e>s-h&&e<o+h}var Gl=class{_document;positions=new Map;constructor(r){this._document=r}clear(){this.positions.clear()}cache(r){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),r.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Jh(e)})})}handleScroll(r){let e=Je(r),t=this.positions.get(e);if(!t)return null;let n=t.scrollPosition,o,a;if(e===this._document){let d=this.getViewportScrollPosition();o=d.top,a=d.left}else o=e.scrollTop,a=e.scrollLeft;let s=n.top-o,c=n.left-a;return this.positions.forEach((d,h)=>{d.clientRect&&e!==h&&e.contains(h)&&ka(d.clientRect,s,c)}),n.top=o,n.left=a,{top:s,left:c}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function ob(i,r){let e=i.rootNodes;if(e.length===1&&e[0].nodeType===r.ELEMENT_NODE)return e[0];let t=r.createElement("div");return e.forEach(n=>t.appendChild(n)),t}function em(i,r,e){for(let t in r)if(r.hasOwnProperty(t)){let n=r[t];n?i.setProperty(t,n,e?.has(t)?"important":""):i.removeProperty(t)}return i}function mo(i,r){let e=r?"":"none";em(i.style,{"touch-action":r?"":"none","-webkit-user-drag":r?"":"none","-webkit-tap-highlight-color":r?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Y_(i,r,e){em(i.style,{position:r?"":"fixed",top:r?"":"0",opacity:r?"":"0",left:r?"":"-999em"},e)}function Wl(i,r){return r&&r!="none"?i+" "+r:i}function K_(i,r){i.style.width=`${r.width}px`,i.style.height=`${r.height}px`,i.style.transform=Sa(r.left,r.top)}function Sa(i,r){return`translate3d(${Math.round(i)}px, ${Math.round(r)}px, 0)`}var xa={capture:!0},$h={passive:!1,capture:!0},Dk=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,n){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return i})(),Yl=(()=>{class i{_ngZone=l(H);_document=l($);_styleLoader=l(Me);_renderer=l(ft).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new b;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=oe([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new b;pointerUp=new b;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,$h)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(Dk),this._activeDragInstances.update(n=>[...n,e]),this._activeDragInstances().length===1)){let n=t.type.startsWith("touch"),o=s=>this.pointerUp.next(s),a=[["scroll",s=>this._scroll.next(s),xa],["selectstart",this._preventDefaultWhileDragging,$h]];n?a.push(["touchend",o,xa],["touchcancel",o,xa]):a.push(["mouseup",o,xa]),n||a.push(["mousemove",s=>this.pointerMove.next(s),$h]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=a.map(([s,c,d])=>this._renderer.listen(this._document,s,c,d))})}}stopDragging(e){this._activeDragInstances.update(t=>{let n=t.indexOf(e);return n>-1?(t.splice(n,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new _t(n=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",a=>{this._activeDragInstances().length&&n.next(a)},xa);return()=>{o()}}))),Be(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Q_(i){let r=i.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(i)*r}function kk(i){let r=getComputedStyle(i),e=Gh(r,"transition-property"),t=e.find(s=>s==="transform"||s==="all");if(!t)return 0;let n=e.indexOf(t),o=Gh(r,"transition-duration"),a=Gh(r,"transition-delay");return Q_(o[n])+Q_(a[n])}function Gh(i,r){return i.getPropertyValue(r).split(",").map(t=>t.trim())}var Sk=new Set(["position"]),Yh=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(r,e,t,n,o,a,s,c,d,h){this._document=r,this._rootElement=e,this._direction=t,this._initialDomRect=n,this._previewTemplate=o,this._previewClass=a,this._pickupPositionOnPage=s,this._initialTransform=c,this._zIndex=d,this._renderer=h}attach(r){this._preview=this._createPreview(),r.appendChild(this._preview),Z_(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(r){this._preview.style.transform=r}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(r){this._preview.classList.add(r)}getTransitionDuration(){return kk(this._preview)}addEventListener(r,e){return this._renderer.listen(this._preview,r,e)}_createPreview(){let r=this._previewTemplate,e=this._previewClass,t=r?r.template:null,n;if(t&&r){let o=r.matchSize?this._initialDomRect:null,a=r.viewContainer.createEmbeddedView(t,r.context);a.detectChanges(),n=ob(a,this._document),this._previewEmbeddedView=a,r.matchSize?K_(n,o):n.style.transform=Sa(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=Wh(this._rootElement),K_(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return em(n.style,{"pointer-events":"none",margin:Z_(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Sk),mo(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>n.classList.add(o)):n.classList.add(e)),n}};function Z_(i){return"showPopover"in i}var Ek={passive:!0},X_={passive:!1},Mk={passive:!1,capture:!0},Rk=800,J_="cdk-drag-placeholder",eb=new Set(["position"]);function ab(i,r,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=i.get(fe,null,{optional:!0})||i.get(ft).createRenderer(null,null);return new Kh(r,e,i.get($),i.get(H),i.get(St),i.get(Yl),t)}var Kh=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=oe(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new b;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=ye.EMPTY;_pointerUpSubscription=ye.EMPTY;_scrollSubscription=ye.EMPTY;_resizeSubscription=ye.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(r){r!==this._disabled&&(this._disabled=r,this._toggleNativeDragInteractions(),this._handles.forEach(e=>mo(e,r)))}_disabled=!1;beforeStarted=new b;started=new b;released=new b;ended=new b;entered=new b;exited=new b;dropped=new b;moved=this._moveEvents;data;constrainPosition;constructor(r,e,t,n,o,a,s){this._config=e,this._document=t,this._ngZone=n,this._viewportRuler=o,this._dragDropRegistry=a,this._renderer=s,this.withRootElement(r).withParent(e.parentDragRef||null),this._parentPositions=new Gl(t),a.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(r){this._handles=r.map(t=>Ze(t)),this._handles.forEach(t=>mo(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(r){return this._previewTemplate=r,this}withPlaceholderTemplate(r){return this._placeholderTemplate=r,this}withRootElement(r){let e=Ze(r);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,X_),t.listen(e,"touchstart",this._pointerDown,Ek),t.listen(e,"dragstart",this._nativeDragStart,X_)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(r){return this._boundaryElement=r?Ze(r):null,this._resizeSubscription.unsubscribe(),r&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(r){return this._parentDragRef=r,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&xk(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let r=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,n=0;e.left<r.left?t=r.left-e.left:e.right>r.right&&(t=r.right-e.right),e.top<r.top?n=r.top-e.top:e.bottom>r.bottom&&(n=r.bottom-e.bottom);let o=this._activeTransform.x,a=this._activeTransform.y,s=o+t,c=a+n;this._rootElement.style.transform=Sa(s,c),this._activeTransform={x:s,y:c},this._passiveTransform={x:s,y:c}}}disableHandle(r){!this._disabledHandles.has(r)&&this._handles.indexOf(r)>-1&&(this._disabledHandles.add(r),mo(r,!0))}enableHandle(r){this._disabledHandles.has(r)&&(this._disabledHandles.delete(r),mo(r,this.disabled))}withDirection(r){return this._direction=r,this}_withDropContainer(r){this._dropContainer=r}getFreeDragPosition(){let r=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:r.x,y:r.y}}setFreeDragPosition(r){return this._activeTransform={x:0,y:0},this._passiveTransform.x=r.x,this._passiveTransform.y=r.y,this._dropContainer||this._applyRootElementTransform(r.x,r.y),this}withPreviewContainer(r){return this._previewContainer=r,this}_sortFromLastPointerPosition(){let r=this._lastKnownPointerPosition;r&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(r),r)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=r=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(r);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,r)}else this.disabled||this._initializeDragSequence(this._rootElement,r)};_pointerMove=r=>{let e=this._getPointerPositionOnPage(r);if(!this._hasStartedDragging()){let n=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(n+o>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(r),c=this._dropContainer;if(!s){this._endDragSequence(r);return}(!c||!c.isDragging()&&!c.isReceiving())&&(r.cancelable&&r.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(r)))}return}r.cancelable&&r.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=t.x-n.x+this._passiveTransform.x,o.y=t.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:r,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=r=>{this._endDragSequence(r)};_endDragSequence(r){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:r}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(r),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(r);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:r})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(r){Da(r)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",Ik,Mk)}),t){let n=this._rootElement,o=n.parentNode,a=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");o.insertBefore(s,n),this._initialTransform=n.style.transform||"",this._preview=new Yh(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),Y_(n,!1,eb),this._document.body.appendChild(o.replaceChild(a,n)),this.started.next({source:this,event:r}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:r}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(r,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),n=Da(e),o=!n&&e.button!==0,a=this._rootElement,s=Je(e),c=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+Rk>Date.now(),d=n?tn(e):en(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),t||o||c||d)return;if(this._handles.length){let w=a.style;this._rootElementTapHighlight=w.webkitTapHighlightColor||"",w.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(w=>this._updateOnScroll(w)),this._boundaryElement&&(this._boundaryRect=Jh(this._boundaryElement));let h=this._previewTemplate;this._pickupPositionInElement=h&&h.template&&!h.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,r,e);let p=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:p.x,y:p.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(r){Y_(this._rootElement,!0,eb),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),n=this._getPointerPositionOnPage(r),o=this._getDragDistance(n),a=e._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:o,dropPoint:n,event:r}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:a,distance:o,dropPoint:n,event:r}),e.drop(this,t,this._initialIndex,this._initialContainer,a,o,n,r),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:r,y:e},{x:t,y:n}){let o=this._initialContainer._getSiblingContainerFromPosition(this,r,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(r,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let a=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(a+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,s),this._dropContainer=o,this._dropContainer.enter(this,r,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,n),this._dropContainer._sortItem(this,r,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(r,e):this._applyPreviewTransform(r-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let r=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(r.left,r.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let n=s=>{(!s||this._preview&&Je(s)===this._preview.element&&s.propertyName==="transform")&&(a(),t(),clearTimeout(o))},o=setTimeout(n,e*1.5),a=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let r=this._placeholderTemplate,e=r?r.template:null,t;return e?(this._placeholderRef=r.viewContainer.createEmbeddedView(e,r.context),this._placeholderRef.detectChanges(),t=ob(this._placeholderRef,this._document)):t=Wh(this._rootElement),t.style.pointerEvents="none",t.classList.add(J_),t}_getPointerPositionInElement(r,e,t){let n=e===this._rootElement?null:e,o=n?n.getBoundingClientRect():r,a=Da(t)?t.targetTouches[0]:t,s=this._getViewportScrollPosition(),c=a.pageX-o.left-s.left,d=a.pageY-o.top-s.top;return{x:o.left-r.left+c,y:o.top-r.top+d}}_getPointerPositionOnPage(r){let e=this._getViewportScrollPosition(),t=Da(r)?r.touches[0]||r.changedTouches[0]||{pageX:0,pageY:0}:r,n=t.pageX-e.left,o=t.pageY-e.top;if(this._ownerSVGElement){let a=this._ownerSVGElement.getScreenCTM();if(a){let s=this._ownerSVGElement.createSVGPoint();return s.x=n,s.y=o,s.matrixTransform(a.inverse())}}return{x:n,y:o}}_getConstrainedPointerPosition(r){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:n}=this.constrainPosition?this.constrainPosition(r,this,this._initialDomRect,this._pickupPositionInElement):r;if(this.lockAxis==="x"||e==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:a}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:c,height:d}=this._getPreviewRect(),h=s.top+a,p=s.bottom-(d-a),w=s.left+o,A=s.right-(c-o);t=tb(t,w,A),n=tb(n,h,p)}return{x:t,y:n}}_updatePointerDirectionDelta(r){let{x:e,y:t}=r,n=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,a=Math.abs(e-o.x),s=Math.abs(t-o.y);return a>this._config.pointerDirectionChangeThreshold&&(n.x=e>o.x?1:-1,o.x=e),s>this._config.pointerDirectionChangeThreshold&&(n.y=t>o.y?1:-1,o.y=t),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let r=this._handles.length>0||!this.isDragging();r!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=r,mo(this._rootElement,r))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(r=>r()),this._rootElementCleanups=void 0}_applyRootElementTransform(r,e){let t=1/this.scale,n=Sa(r*t,e*t),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=Wl(n,this._initialTransform)}_applyPreviewTransform(r,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,n=Sa(r,e);this._preview.setTransform(Wl(n,t))}_getDragDistance(r){let e=this._pickupPositionOnPage;return e?{x:r.x-e.x,y:r.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:r,y:e}=this._passiveTransform;if(r===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||t.width===0&&t.height===0)return;let o=n.left-t.left,a=t.right-n.right,s=n.top-t.top,c=t.bottom-n.bottom;n.width>t.width?(o>0&&(r+=o),a>0&&(r-=a)):r=0,n.height>t.height?(s>0&&(e+=s),c>0&&(e-=c)):e=0,(r!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:r})}_getDragStartDelay(r){let e=this.dragStartDelay;return typeof e=="number"?e:Da(r)?e.touch:e?e.mouse:0}_updateOnScroll(r){let e=this._parentPositions.handleScroll(r);if(e){let t=Je(r);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&ka(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Xn(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(r,e){let t=this._previewContainer||"global";if(t==="parent")return r;if(t==="global"){let n=this._document;return e||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return Ze(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=r=>{if(this._handles.length){let e=this._getTargetHandle(r);e&&!this._disabledHandles.has(e)&&!this.disabled&&r.preventDefault()}else this.disabled||r.preventDefault()};_getTargetHandle(r){return this._handles.find(e=>r.target&&(r.target===e||e.contains(r.target)))}_conditionallyInsertAnchor(r,e,t){if(r===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let n=this._anchor??=Wh(this._placeholder);n.classList.remove(J_),n.classList.add("cdk-drag-anchor"),n.style.transform="",t?t.before(n):Ze(e.element).appendChild(n)}}};function tb(i,r,e){return Math.max(r,Math.min(e,i))}function Da(i){return i.type[0]==="t"}function Ik(i){i.preventDefault()}function Ln(i,r,e){let t=ib(r,i.length-1),n=ib(e,i.length-1);if(t===n)return;let o=i[t],a=n<t?-1:1;for(let s=t;s!==n;s+=a)i[s]=i[s+a];i[n]=o}function ib(i,r){return Math.max(0,Math.min(r,i))}var ql=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(r){this._dragDropRegistry=r}_previousSwap={drag:null,delta:0,overlaps:!1};start(r){this.withItems(r)}sort(r,e,t,n){let o=this._itemPositions,a=this._getItemIndexFromPointerPosition(r,e,t,n);if(a===-1&&o.length>0)return null;let s=this.orientation==="horizontal",c=o.findIndex(F=>F.drag===r),d=o[a],h=o[c].clientRect,p=d.clientRect,w=c>a?1:-1,A=this._getItemOffsetPx(h,p,w),U=this._getSiblingOffsetPx(c,o,w),ae=o.slice();return Ln(o,c,a),o.forEach((F,ee)=>{if(ae[ee]===F)return;let ce=F.drag===r,Re=ce?A:U,Pe=ce?r.getPlaceholderElement():F.drag.getRootElement();F.offset+=Re;let Gt=Math.round(F.offset*(1/F.drag.scale));s?(Pe.style.transform=Wl(`translate3d(${Gt}px, 0, 0)`,F.initialTransform),ka(F.clientRect,0,Re)):(Pe.style.transform=Wl(`translate3d(0, ${Gt}px, 0)`,F.initialTransform),ka(F.clientRect,Re,0))}),this._previousSwap.overlaps=qh(p,e,t),this._previousSwap.drag=d.drag,this._previousSwap.delta=s?n.x:n.y,{previousIndex:c,currentIndex:a}}enter(r,e,t,n){let o=this._activeDraggables,a=o.indexOf(r),s=r.getPlaceholderElement();a>-1&&o.splice(a,1);let c=n==null||n<0?this._getItemIndexFromPointerPosition(r,e,t):n,d=o[c];if(d===r&&(d=o[c+1]),!d&&(c==null||c===-1||c<o.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(d=o[0]),d&&!this._dragDropRegistry.isDragging(d)){let h=d.getRootElement();h.parentElement.insertBefore(s,h),o.splice(c,0,r)}else this._element.appendChild(s),o.push(r);s.style.transform="",this._cacheItemPositions()}withItems(r){this._activeDraggables=r.slice(),this._cacheItemPositions()}withSortPredicate(r){this._sortPredicate=r}reset(){this._activeDraggables?.forEach(r=>{let e=r.getRootElement();if(e){let t=this._itemPositions.find(n=>n.drag===r)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(r){return this._getVisualItemPositions().findIndex(e=>e.drag===r)}getItemAtIndex(r){return this._getVisualItemPositions()[r]?.drag||null}updateOnScroll(r,e){this._itemPositions.forEach(({clientRect:t})=>{ka(t,r,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(r){this._element=r}_cacheItemPositions(){let r=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:Jh(t)}}).sort((e,t)=>r?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(r,e,t){let n=this.orientation==="horizontal",o=n?e.left-r.left:e.top-r.top;return t===-1&&(o+=n?e.width-r.width:e.height-r.height),o}_getSiblingOffsetPx(r,e,t){let n=this.orientation==="horizontal",o=e[r].clientRect,a=e[r+t*-1],s=o[n?"width":"height"]*t;if(a){let c=n?"left":"top",d=n?"right":"bottom";t===-1?s-=a.clientRect[c]-o[d]:s+=o[c]-a.clientRect[d]}return s}_shouldEnterAsFirstChild(r,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,n=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let a=t[t.length-1].clientRect;return n?r>=a.right:e>=a.bottom}else{let a=t[0].clientRect;return n?r<=a.left:e<=a.top}}_getItemIndexFromPointerPosition(r,e,t,n){let o=this.orientation==="horizontal",a=this._itemPositions.findIndex(({drag:s,clientRect:c})=>{if(s===r)return!1;if(n){let d=o?n.x:n.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&d===this._previousSwap.delta)return!1}return o?e>=Math.floor(c.left)&&e<Math.floor(c.right):t>=Math.floor(c.top)&&t<Math.floor(c.bottom)});return a===-1||!this._sortPredicate(a,r)?-1:a}},Qh=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(r,e){this._document=r,this._dragDropRegistry=e}start(r){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let n=e[t];this._relatedNodes.push([n,n.nextSibling])}this.withItems(r)}sort(r,e,t,n){let o=this._getItemIndexFromPointerPosition(r,e,t),a=this._previousSwap;if(o===-1||this._activeItems[o]===r)return null;let s=this._activeItems[o];if(a.drag===s&&a.overlaps&&a.deltaX===n.x&&a.deltaY===n.y)return null;let c=this.getItemIndex(r),d=r.getPlaceholderElement(),h=s.getRootElement();o>c?h.after(d):h.before(d),Ln(this._activeItems,c,o);let p=this._getRootNode().elementFromPoint(e,t);return a.deltaX=n.x,a.deltaY=n.y,a.drag=s,a.overlaps=h===p||h.contains(p),{previousIndex:c,currentIndex:o}}enter(r,e,t,n){let o=this._activeItems.indexOf(r);o>-1&&this._activeItems.splice(o,1);let a=n==null||n<0?this._getItemIndexFromPointerPosition(r,e,t):n;a===-1&&(a=this._getClosestItemIndexToPointer(r,e,t));let s=this._activeItems[a];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(a,0,r),s.getRootElement().before(r.getPlaceholderElement())):(this._activeItems.push(r),this._element.appendChild(r.getPlaceholderElement()))}withItems(r){this._activeItems=r.slice()}withSortPredicate(r){this._sortPredicate=r}reset(){let r=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[n,o]=this._relatedNodes[t];n.parentNode===r&&n.nextSibling!==o&&(o===null?r.appendChild(n):o.parentNode===r&&r.insertBefore(n,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(r){return this._activeItems.indexOf(r)}getItemAtIndex(r){return this._activeItems[r]||null}updateOnScroll(){this._activeItems.forEach(r=>{this._dragDropRegistry.isDragging(r)&&r._sortFromLastPointerPosition()})}withElementContainer(r){r!==this._element&&(this._element=r,this._rootNode=void 0)}_getItemIndexFromPointerPosition(r,e,t){let n=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),o=n?this._activeItems.findIndex(a=>{let s=a.getRootElement();return n===s||s.contains(n)}):-1;return o===-1||!this._sortPredicate(o,r)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=Xn(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(r,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,o=-1;for(let a=0;a<this._activeItems.length;a++){let s=this._activeItems[a];if(s!==r){let{x:c,y:d}=s.getRootElement().getBoundingClientRect(),h=Math.hypot(e-c,t-d);h<n&&(n=h,o=a)}}return o}},nb=.05,sb=.05,si=(function(i){return i[i.NONE=0]="NONE",i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i})(si||{}),Ft=(function(i){return i[i.NONE=0]="NONE",i[i.LEFT=1]="LEFT",i[i.RIGHT=2]="RIGHT",i})(Ft||{});function lb(i,r){return new Zh(r,i.get(Yl),i.get($),i.get(H),i.get(St))}var Zh=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new b;entered=new b;exited=new b;dropped=new b;sorted=new b;receivingStarted=new b;receivingStopped=new b;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=ye.EMPTY;_verticalScrollDirection=si.NONE;_horizontalScrollDirection=Ft.NONE;_scrollNode;_stopScrollTimers=new b;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(r,e,t,n,o){this._dragDropRegistry=e,this._ngZone=n,this._viewportRuler=o;let a=this.element=Ze(r);this._document=t,this.withOrientation("vertical").withElementContainer(a),e.registerDropContainer(this),this._parentPositions=new Gl(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(r,e,t,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(r)),this._sortStrategy.enter(r,e,t,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:r,container:this,currentIndex:this.getItemIndex(r)})}exit(r){this._reset(),this.exited.next({item:r,container:this})}drop(r,e,t,n,o,a,s,c={}){this._reset(),this.dropped.next({item:r,currentIndex:e,previousIndex:t,container:this,previousContainer:n,isPointerOverContainer:o,distance:a,dropPoint:s,event:c})}withItems(r){let e=this._draggables;return this._draggables=r,r.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(n=>n.isDragging()).every(n=>r.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(r){return this._direction=r,this._sortStrategy instanceof ql&&(this._sortStrategy.direction=r),this}connectedTo(r){return this._siblings=r.slice(),this}withOrientation(r){if(r==="mixed")this._sortStrategy=new Qh(this._document,this._dragDropRegistry);else{let e=new ql(this._dragDropRegistry);e.direction=this._direction,e.orientation=r,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(r){let e=this._container;return this._scrollableElements=r.indexOf(e)===-1?[e,...r]:r.slice(),this}withElementContainer(r){if(r===this._container)return this;let e=Ze(this.element),t=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(r);return t>-1&&this._scrollableElements.splice(t,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(r),this._cachedShadowRoot=null,this._scrollableElements.unshift(r),this._container=r,this}getScrollableParents(){return this._scrollableElements}getItemIndex(r){return this._isDragging?this._sortStrategy.getItemIndex(r):this._draggables.indexOf(r)}getItemAtIndex(r){return this._isDragging?this._sortStrategy.getItemAtIndex(r):this._draggables[r]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(r,e,t,n){if(this.sortingDisabled||!this._domRect||!q_(this._domRect,nb,e,t))return;let o=this._sortStrategy.sort(r,e,t,n);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:r})}_startScrollingIfNecessary(r,e){if(this.autoScrollDisabled)return;let t,n=si.NONE,o=Ft.NONE;if(this._parentPositions.positions.forEach((a,s)=>{s===this._document||!a.clientRect||t||q_(a.clientRect,nb,r,e)&&([n,o]=Tk(s,a.clientRect,this._direction,r,e),(n||o)&&(t=s))}),!n&&!o){let{width:a,height:s}=this._viewportRuler.getViewportSize(),c={width:a,height:s,top:0,right:a,bottom:s,left:0};n=cb(c,e),o=db(c,r),t=window}t&&(n!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=o,this._scrollNode=t,(n||o)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let r=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=r.msScrollSnapType||r.scrollSnapType||"",r.scrollSnapType=r.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let r=this._container.style;r.scrollSnapType=r.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Mm(0,po).pipe(G(this._stopScrollTimers)).subscribe(()=>{let r=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===si.UP?r.scrollBy(0,-e):this._verticalScrollDirection===si.DOWN&&r.scrollBy(0,e),this._horizontalScrollDirection===Ft.LEFT?r.scrollBy(-e,0):this._horizontalScrollDirection===Ft.RIGHT&&r.scrollBy(e,0)})};_isOverContainer(r,e){return this._domRect!=null&&qh(this._domRect,r,e)}_getSiblingContainerFromPosition(r,e,t){return this._siblings.find(n=>n._canReceive(r,e,t))}_canReceive(r,e,t){if(!this._domRect||!qh(this._domRect,e,t)||!this.enterPredicate(r,this))return!1;let n=this._getShadowRoot().elementFromPoint(e,t);return n?n===this._container||this._container.contains(n):!1}_startReceiving(r,e){let t=this._activeSiblings;!t.has(r)&&e.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(t.add(r),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:r,receiver:this,items:e}))}_stopReceiving(r){this._activeSiblings.delete(r),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:r,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(r=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(r);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let r=Xn(this._container);this._cachedShadowRoot=r||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let r=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,r))}};function cb(i,r){let{top:e,bottom:t,height:n}=i,o=n*sb;return r>=e-o&&r<=e+o?si.UP:r>=t-o&&r<=t+o?si.DOWN:si.NONE}function db(i,r){let{left:e,right:t,width:n}=i,o=n*sb;return r>=e-o&&r<=e+o?Ft.LEFT:r>=t-o&&r<=t+o?Ft.RIGHT:Ft.NONE}function Tk(i,r,e,t,n){let o=cb(r,n),a=db(r,t),s=si.NONE,c=Ft.NONE;if(o){let d=i.scrollTop;o===si.UP?d>0&&(s=si.UP):i.scrollHeight-d>i.clientHeight&&(s=si.DOWN)}if(a){let d=i.scrollLeft;e==="rtl"?a===Ft.RIGHT?d<0&&(c=Ft.RIGHT):i.scrollWidth+d>i.clientWidth&&(c=Ft.LEFT):a===Ft.LEFT?d>0&&(c=Ft.LEFT):i.scrollWidth-d>i.clientWidth&&(c=Ft.RIGHT)}return[s,c]}var Ak=(()=>{class i{_injector=l(q);constructor(){}createDrag(e,t){return ab(this._injector,e,t)}createDropList(e){return lb(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Xh=new _("CDK_DRAG_PARENT");var hb=new _("CdkDragHandle"),Kl=(()=>{class i{element=l(M);_parentDrag=l(Xh,{optional:!0,skipSelf:!0});_dragDropRegistry=l(Yl);_stateChanges=new b;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._stateChanges.next(this)}_disabled=!1;constructor(){this._parentDrag?._addHandle(this)}ngAfterViewInit(){if(!this._parentDrag){let e=this.element.nativeElement.parentElement;for(;e;){let t=this._dragDropRegistry.getDragDirectiveForNode(e);if(t){this._parentDrag=t,t._addHandle(this);break}e=e.parentElement}}}ngOnDestroy(){this._parentDrag?._removeHandle(this),this._stateChanges.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:[2,"cdkDragHandleDisabled","disabled",D]},features:[X([{provide:hb,useExisting:i}])]})}return i})(),mb=new _("CDK_DRAG_CONFIG"),ub=new _("CdkDropList"),Ql=(()=>{class i{element=l(M);dropContainer=l(ub,{optional:!0,skipSelf:!0});_ngZone=l(H);_viewContainerRef=l(Ke);_dir=l(Le,{optional:!0});_changeDetectorRef=l(J);_selfHandle=l(hb,{optional:!0,self:!0});_parentDrag=l(Xh,{optional:!0,skipSelf:!0});_dragDropRegistry=l(Yl);_destroyed=new b;_handles=new tt([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new I;released=new I;ended=new I;entered=new I;exited=new I;dropped=new I;moved=new _t(e=>{let t=this._dragRef.moved.pipe(te(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=l(q);constructor(){let e=this.dropContainer,t=l(mb,{optional:!0});this._dragRef=ab(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(G(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){xe(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,n=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),n=t.indexOf(e);n>-1&&(t.splice(n,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Ze(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,n=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,a=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof n=="object"&&n?n:kt(n),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(a).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(Xe(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let n=this._dragDropRegistry.getDragDirectiveForNode(t);if(n){e.withParent(n._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:n,constrainPosition:o,previewClass:a,boundaryElement:s,draggingDisabled:c,rootElementSelector:d,previewContainer:h}=e;this.disabled=c??!1,this.dragStartDelay=n||0,this.lockAxis=t||null,o&&(this.constrainPosition=o),a&&(this.previewClass=a),s&&(this.boundaryElement=s),d&&(this.rootElementSelector=d),h&&(this.previewContainer=h)}_setupHandlesListener(){this._handles.pipe(dt(e=>{let t=e.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),je(e=>Be(...e.map(t=>t._stateChanges.pipe(Ae(t))))),G(this._destroyed)).subscribe(e=>{let t=this._dragRef,n=e.element.nativeElement;e.disabled?t.disableHandle(n):t.enableHandle(n)})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,n){t&2&&T("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",D],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",Ye]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[X([{provide:Xh,useExisting:i}]),me]})}return i})(),rb=new _("CdkDropListGroup");var Zl=(()=>{class i{element=l(M);_changeDetectorRef=l(J);_scrollDispatcher=l(Bi);_dir=l(Le,{optional:!0});_group=l(rb,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new b;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(be).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new I;entered=new I;exited=new I;sorted=new I;_unsortedItems=new Set;constructor(){let e=l(mb,{optional:!0}),t=l(q);this._dropListRef=lb(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(n,o)=>this.enterPredicate(n.data,o.data),this._dropListRef.sortPredicate=(n,o,a)=>this.sortPredicate(n,o.data,a.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),i._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=i._dropLists.indexOf(this);e>-1&&i._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Ae(this._dir.value),G(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=Zi(this.connectedTo).map(n=>{if(typeof n=="string"){let o=i._dropLists.find(a=>a.id===n);return o}return n});if(this._group&&this._group._items.forEach(n=>{t.indexOf(n)===-1&&t.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(n)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=kt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),Be(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:n,sortingDisabled:o,listAutoScrollDisabled:a,listOrientation:s}=e;this.disabled=n??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=a??!1,this.orientation=s||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,n){t&2&&(N("id",n.id),T("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",D],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",D],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",D],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",D]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[X([{provide:rb,useValue:void 0},{provide:ub,useExisting:i}])]})}return i})();var xV=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({providers:[Ak],imports:[Wr]})}return i})();var pb=(i,r)=>r.id;function Ok(i,r){if(i&1&&(m(0,"mat-list-item",5)(1,"mat-icon",7),x(2,"notes"),u(),m(3,"div",8),x(4),u(),j(5,"div",9),u()),i&2){let e=r.$implicit;f(4),Ie(e.name)}}function Fk(i,r){if(i&1){let e=qe();m(0,"div",5)(1,"div",6)(2,"b"),x(3),u()(),m(4,"div",4),k("cdkDropListDropped",function(n){let o=we(e).$implicit,a=C(2);return Ce(a.drop(n,o.id))}),Ge(5,Ok,6,1,"mat-list-item",5,pb),u(),j(7,"mat-divider"),u()}if(i&2){let e=r.$implicit,t=C(2);f(3),Ie(e.name),f(2),We(t.projectAnalysisGroupMap[e.id])}}function Pk(i,r){if(i&1){let e=qe();m(0,"mat-list")(1,"div",4),k("cdkDropListDropped",function(n){we(e);let o=C();return Ce(o.dropProject(n))}),Ge(2,Fk,8,1,"div",5,pb),u()()}if(i&2){let e=C();f(2),We(e.projects)}}var AV=(()=>{class i{set projects(e){this._projects=e.slice(),this.cdr.markForCheck()}get projects(){return this._projects}set projectAnalysisGroupMap(e){this._projectAnalysisGroupMap=e,this.cdr.markForCheck()}get projectAnalysisGroupMap(){return this._projectAnalysisGroupMap}constructor(e,t){this.dialogRef=e,this.cdr=t,this._projectAnalysisGroupMap={},this._projects=[]}save(){this.dialogRef.close({projects:this.projects,projectAnalysisGroupMap:this.projectAnalysisGroupMap})}cancel(){this.dialogRef.close()}drop(e,t){Ln(this.projectAnalysisGroupMap[t],e.previousIndex,e.currentIndex)}dropProject(e){Ln(this.projects,e.previousIndex,e.currentIndex)}static{this.\u0275fac=function(t){return new(t||i)(L(Ht),L(J))}}static{this.\u0275cmp=R({type:i,selectors:[["app-collate-project-analysis-group-reorder-dialog"]],inputs:{projects:"projects",projectAnalysisGroupMap:"projectAnalysisGroupMap"},decls:9,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag",""],["mat-subheader","","cdkDragHandle",""],["cdkDragHandle","","matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""]],template:function(t,n){t&1&&(m(0,"h1",0),x(1,"Analysis Group Reorder"),u(),m(2,"div",1),V(3,Pk,4,0,"mat-list"),u(),m(4,"div",2)(5,"button",3),k("click",function(){return n.cancel()}),x(6,"Close"),u(),m(7,"button",3),k("click",function(){return n.save()}),x(8,"Save"),u()()),t&2&&(f(3),z(n.projects.length>0?3:-1))},dependencies:[ji,Vi,Hl,H_,$l,ho,Ui,Ul,Kl,Zl,Ql,zi,$t],encapsulation:2,changeDetection:0})}}return i})();var Lk=(i,r)=>r.id;function Nk(i,r){if(i&1){let e=qe();m(0,"div",6)(1,"label",7)(2,"input",8),Er("ngModelChange",function(n){let o=we(e).$implicit,a=C(2).$implicit,s=C();return Sr(s.projectConditionColorMap[a.id][o],n)||(s.projectConditionColorMap[a.id][o]=n),Ce(n)}),u(),m(3,"span",9),x(4),u()()()}if(i&2){let e=r.$implicit,t=C(2).$implicit,n=C();f(2),kr("ngModel",n.projectConditionColorMap[t.id][e]),N("aria-label","Color for "+e),f(2),Ie(e)}}function Bk(i,r){if(i&1&&Ge(0,Nk,5,3,"div",6,li),i&2){let e=C().$implicit,t=C();We(t.projectConditionMap[e.id])}}function jk(i,r){if(i&1&&(m(0,"div",2)(1,"div",5),x(2),u(),V(3,Bk,2,0),u()),i&2){let e=r.$implicit,t=C();f(2),Ie(e.name),f(),z(t.projectConditionMap[e.id]?3:-1)}}var BV=(()=>{class i{set projects(e){this._projects=e;for(let t of e)this.web.getProjectUniqueConditions(t.id).pipe(G(this.destroy$)).subscribe(n=>{for(let o of n)this.projectConditionMap[o.AnalysisGroup.project]||(this.projectConditionMap[o.AnalysisGroup.project]=[]),this.projectConditionMap[o.AnalysisGroup.project].includes(o.Condition)||this.projectConditionMap[o.AnalysisGroup.project].push(o.Condition),this.projectConditionColorMap[o.AnalysisGroup.project]||(this.projectConditionColorMap[o.AnalysisGroup.project]={}),this.projectConditionColorMap[o.AnalysisGroup.project][o.Condition]?this.projectConditionColorMap[o.AnalysisGroup.project][o.Condition]=this.normalizeColor(this.projectConditionColorMap[o.AnalysisGroup.project][o.Condition]):this.projectConditionColorMap[o.AnalysisGroup.project][o.Condition]=this.getNextDefaultColor();this.cdr.markForCheck()})}get projects(){return this._projects}set projectConditionColorMap(e){if(e==null){this._projectConditionColorMap={};return}let t={};for(let n in e){t[n]={};for(let o in e[n])t[n][o]=this.normalizeColor(e[n][o])}this._projectConditionColorMap=t}get projectConditionColorMap(){return this._projectConditionColorMap}constructor(e,t,n,o){this.dialogRef=e,this.web=t,this.cdr=n,this.graph=o,this.destroy$=new b,this._projects=[],this.colorIndex=0,this.projectConditionMap={},this._projectConditionColorMap={}}getNextDefaultColor(){let e=this.graph.defaultColorList[this.colorIndex%this.graph.defaultColorList.length];return this.colorIndex++,e}normalizeColor(e){if(!e||e.trim()==="")return this.getNextDefaultColor();if(e=e.trim(),/^#[0-9A-Fa-f]{6}$/.test(e))return e;if(/^#[0-9A-Fa-f]{8}$/.test(e))return`#${e.slice(3,9)}`;if(/^#[0-9A-Fa-f]{3}$/.test(e)){let n=e[1],o=e[2],a=e[3];return`#${n}${n}${o}${o}${a}${a}`}if(/^#[0-9A-Fa-f]{4}$/.test(e)){let n=e[2],o=e[3],a=e[4];return`#${n}${n}${o}${o}${a}${a}`}let t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(t){let n=parseInt(t[1],10).toString(16).padStart(2,"0"),o=parseInt(t[2],10).toString(16).padStart(2,"0"),a=parseInt(t[3],10).toString(16).padStart(2,"0");return`#${n}${o}${a}`}return this.getNextDefaultColor()}save(){this.dialogRef.close(this.projectConditionColorMap)}cancel(){this.dialogRef.close()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(L(Ht),L(to),L(J),L(Og))}}static{this.\u0275cmp=R({type:i,selectors:[["app-collate-condition-color-editor-dialog"]],inputs:{projects:"projects",projectConditionColorMap:"projectConditionColorMap"},decls:10,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"project-section"],["mat-dialog-actions",""],["mat-button","",3,"click"],[1,"project-name"],[1,"condition-row"],[1,"color-label"],["type","color",1,"color-picker",3,"ngModelChange","ngModel"],[1,"condition-name"]],template:function(t,n){t&1&&(m(0,"h1",0),x(1,"Condition Color Editor"),u(),m(2,"div",1),Ge(3,jk,4,2,"div",2,Lk),u(),m(5,"div",3)(6,"button",4),k("click",function(){return n.cancel()}),x(7,"Close"),u(),m(8,"button",4),k("click",function(){return n.save()}),x(9,"Save"),u()()),t&2&&(f(3),We(n.projects))},dependencies:[ji,Vi,lo,An,On,mr,$t,zi],styles:[".project-section[_ngcontent-%COMP%]{margin-bottom:16px}.project-name[_ngcontent-%COMP%]{font-weight:500;font-size:13px;color:var(--app-text-color);margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid var(--app-divider-color)}.condition-row[_ngcontent-%COMP%]{margin-bottom:6px}.color-label[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center;cursor:pointer}.color-picker[_ngcontent-%COMP%]{width:28px;height:28px;padding:0;border:1px solid var(--app-outline-variant);border-radius:4px;cursor:pointer;background:transparent}.color-picker[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper{padding:2px}.color-picker[_ngcontent-%COMP%]::-webkit-color-swatch{border:none;border-radius:2px}.color-picker[_ngcontent-%COMP%]::-moz-color-swatch{border:none;border-radius:2px}.color-picker[_ngcontent-%COMP%]:hover{border-color:var(--app-primary-color)}.color-picker[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--app-primary-color);box-shadow:0 0 0 2px #c0010033}.condition-name[_ngcontent-%COMP%]{font-size:13px;color:var(--app-text-color)}"],changeDetection:0})}}return i})();var Vk=["switch"],zk=["*"];function Uk(i,r){i&1&&(m(0,"span",11),Lt(),m(1,"svg",13),j(2,"path",14),u(),m(3,"svg",15),j(4,"path",16),u()())}var Hk=new _("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Xl=class{source;checked;constructor(r,e){this.source=r,this.checked=e}},fb=(()=>{class i{_elementRef=l(M);_focusMonitor=l(Et);_changeDetectorRef=l(J);defaults=l(Hk);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Xl(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ve();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new I;toggleChange=new I;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(Me).load(vt);let e=l(new Kt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(be).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Xl(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(t&1&&ge(Vk,5),t&2){let o;S(o=E())&&(n._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,n){t&2&&(ot("id",n.id),N("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Qe(n.color?"mat-"+n.color:""),T("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",D],color:"color",disabled:[2,"disabled","disabled",D],disableRipple:[2,"disableRipple","disableRipple",D],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ye(e)],checked:[2,"checked","checked",D],hideIcon:[2,"hideIcon","hideIcon",D],disabledInteractive:[2,"disabledInteractive","disabledInteractive",D]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[X([{provide:ai,useExisting:ut(()=>i),multi:!0},{provide:Ci,useExisting:i,multi:!0}]),me],ngContentSelectors:zk,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,n){if(t&1&&(se(),m(0,"div",1)(1,"button",2,0),k("click",function(){return n._handleClick()}),j(3,"div",3)(4,"span",4),m(5,"span",5)(6,"span",6)(7,"span",7),j(8,"span",8),u(),m(9,"span",9),j(10,"span",10),u(),V(11,Uk,5,0,"span",11),u()()(),m(12,"label",12),k("click",function(a){return a.stopPropagation()}),P(13),u()()),t&2){let o=it(2);O("labelPosition",n.labelPosition),f(),T("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),O("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),N("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),f(9),O("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),f(),z(n.hideIcon?-1:11),f(),O("for",n.buttonId),N("id",n._labelId)}},dependencies:[yi,jl],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return i})();var $k=["text"],Gk=[[["mat-icon"]],"*"],Wk=["mat-icon","*"];function qk(i,r){if(i&1&&j(0,"mat-pseudo-checkbox",1),i&2){let e=C();O("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Yk(i,r){if(i&1&&j(0,"mat-pseudo-checkbox",3),i&2){let e=C();O("disabled",e.disabled)}}function Kk(i,r){if(i&1&&(m(0,"span",4),x(1),u()),i&2){let e=C();f(),wt("(",e.group.label,")")}}var ec=new _("MAT_OPTION_PARENT_COMPONENT"),tc=new _("MatOptgroup");var Jl=class{source;isUserInput;constructor(r,e=!1){this.source=r,this.isUserInput=e}},ln=(()=>{class i{_element=l(M);_changeDetectorRef=l(J);_parent=l(ec,{optional:!0});group=l(tc,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(be).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=oe(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new I;_text;_stateChanges=new b;constructor(){let e=l(Me);e.load(vt),e.load(kn),this._signalDisableRipple=!!this._parent&&pn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!He(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Jl(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&ge($k,7),t&2){let o;S(o=E())&&(n._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&k("click",function(){return n._selectViaInteraction()})("keydown",function(a){return n._handleKeydown(a)}),t&2&&(ot("id",n.id),N("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),T("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",D]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Wk,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(se(Gk),V(0,qk,1,2,"mat-pseudo-checkbox",1),P(1),m(2,"span",2,0),P(4,1),u(),V(5,Yk,1,1,"mat-pseudo-checkbox",3),V(6,Kk,2,1,"span",4),j(7,"div",5)),t&2&&(z(n.multiple?0:-1),f(5),z(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),f(),z(n.group&&n.group._inert?6:-1),f(),O("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[F_,yi],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function tm(i,r,e){if(e.length){let t=r.toArray(),n=e.toArray(),o=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===n[o]&&o++;return o}return 0}function im(i,r,e,t){return i<e?i:i+r>e+t?Math.max(0,i-t+r):e}var Cz=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=K({imports:[gl,P_,ln,Ne]})}return i})();var Qk=["trigger"],Zk=["panel"],Xk=[[["mat-select-trigger"]],"*"],Jk=["mat-select-trigger","*"];function eS(i,r){if(i&1&&(m(0,"span",4),x(1),u()),i&2){let e=C();f(),Ie(e.placeholder)}}function tS(i,r){i&1&&P(0)}function iS(i,r){if(i&1&&(m(0,"span",11),x(1),u()),i&2){let e=C(2);f(),Ie(e.triggerValue)}}function nS(i,r){if(i&1&&(m(0,"span",5),V(1,tS,1,0)(2,iS,2,1,"span",11),u()),i&2){let e=C();f(),z(e.customTrigger?1:2)}}function rS(i,r){if(i&1){let e=qe();m(0,"div",12,1),k("keydown",function(n){we(e);let o=C();return Ce(o._handleKeydown(n))}),P(2,1),u()}if(i&2){let e=C();Qe(e.panelClass),T("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),N("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var oS=new _("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(q);return()=>Ji(i)}}),aS=new _("MAT_SELECT_CONFIG"),sS=new _("MatSelectTrigger"),nm=class{source;value;constructor(r,e){this.source=r,this.value=e}},ic=(()=>{class i{_viewportRuler=l(St);_changeDetectorRef=l(J);_elementRef=l(M);_dir=l(Le,{optional:!0});_idGenerator=l(be);_renderer=l(fe);_parentFormField=l(dr,{optional:!0});ngControl=l(Ot,{self:!0,optional:!0});_liveAnnouncer=l(ra);_defaultOptions=l(aS,{optional:!0});_animationsDisabled=ve();_popoverLocation;_initialized=new b;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,o=tm(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?n.scrollTop=0:n.scrollTop=im(a.offsetTop,a.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new nm(this,e)}_scrollStrategyFactory=l(oS);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new b;_errorStateTracker;stateChanges=new b;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=oe(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Hi.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Mi(()=>{let e=this.options;return e?e.changes.pipe(Ae(e),je(()=>Be(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(je(()=>this.optionSelectionChanges))});openedChange=new I;_openedStream=this.openedChange.pipe(_e(e=>e),te(()=>{}));_closedStream=this.openedChange.pipe(_e(e=>!e),te(()=>{}));selectionChange=new I;valueChange=new I;constructor(){let e=l(co),t=l(an,{optional:!0}),n=l(sn,{optional:!0}),o=l(new Kt("tabindex"),{optional:!0}),a=l(Xo,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Fn(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Pn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(G(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(G(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ae(null),G(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Xe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&hl(this._trackedModal,"aria-owns",t),th(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;hl(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!He(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,o=n===40||n===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(n===13||n===32)&&t.activeItem&&!He(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!He(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Yr?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new la(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Be(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(G(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Be(...this.options.map(t=>t._stateChanges)).pipe(G(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Je(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,o){if(t&1&&ze(o,sS,5)(o,ln,5)(o,tc,5),t&2){let a;S(a=E())&&(n.customTrigger=a.first),S(a=E())&&(n.options=a),S(a=E())&&(n.optionGroups=a)}},viewQuery:function(t,n){if(t&1&&ge(Qk,5)(Zk,5)(rl,5),t&2){let o;S(o=E())&&(n.trigger=o.first),S(o=E())&&(n.panel=o.first),S(o=E())&&(n._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&k("keydown",function(a){return n._handleKeydown(a)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(N("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),T("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",D],disableRipple:[2,"disableRipple","disableRipple",D],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ye(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",D],placeholder:"placeholder",required:[2,"required","required",D],multiple:[2,"multiple","multiple",D],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",D],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ye],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",D]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[X([{provide:cr,useExisting:i},{provide:ec,useExisting:i}]),me],ngContentSelectors:Jk,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(se(Xk),m(0,"div",2,0),k("click",function(){return n.open()}),m(3,"div",3),V(4,eS,2,1,"span",4)(5,nS,3,1,"span",5),u(),m(6,"div",6)(7,"div",7),Lt(),m(8,"svg",8),j(9,"path",9),u()()()(),ke(10,rS,3,16,"ng-template",10),k("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(a){return n._handleOverlayKeydown(a)})),t&2){let o=it(1);f(3),N("id",n._valueId),f(),z(n.empty?4:5),f(6),O("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[Yr,rl],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var gb=(i,r)=>r.id;function lS(i,r){if(i&1){let e=qe();m(0,"div",19)(1,"button",20),k("click",function(){we(e);let n=C();return Ce(n.backClick.emit())}),m(2,"mat-icon"),x(3,"arrow_back"),u(),x(4," Back to Search "),u()(),j(5,"mat-divider")}}function cS(i,r){if(i&1){let e=qe();m(0,"mat-form-field",4)(1,"mat-label"),x(2,"Max value (\xB1N)"),u(),m(3,"input",21),k("ngModelChange",function(n){we(e);let o=C();return Ce(o.onColorScaleMaxChange(+n))}),u()()}if(i&2){let e=C();f(3),O("ngModel",e.heatmapSettings.colorScaleMax)}}function dS(i,r){if(i&1){let e=qe();m(0,"div",26)(1,"mat-checkbox",27),k("change",function(){let n=we(e).$implicit,o=C(3).$implicit,a=C();return Ce(a.toggleVisibility(o.id,n.id))}),u(),m(2,"button",28),k("click",function(){let n=we(e).$implicit,o=C(4);return Ce(o.toggleFlip(n.id))}),m(3,"mat-icon"),x(4,"swap_vert"),u()(),m(5,"span",29),x(6),u()()}if(i&2){let e=r.$implicit,t=C(3).$implicit,n=C();f(),O("checked",n.isVisible(t.id,e.id)),f(),T("flipped",n.isFlipped(e.id)),f(3),O("title",e.name),f(),Ie(e.name)}}function hS(i,r){if(i&1&&Ge(0,dS,7,5,"div",26,gb),i&2){let e=C(2).$implicit,t=C();We(t.projectAnalysisGroups[e.id])}}function mS(i,r){if(i&1){let e=qe();m(0,"div",22)(1,"div",23),k("click",function(){we(e);let n=C().$implicit,o=C();return Ce(o.toggleProjectCollapse(n.id))}),m(2,"mat-icon",24),x(3),u(),m(4,"span",25),x(5),u()(),V(6,hS,2,0),u()}if(i&2){let e=C().$implicit,t=C();f(3),wt(" ",t.isProjectCollapsed(e.id)?"chevron_right":"expand_more"," "),f(),O("title",e.name),f(),Ie(e.name),f(),z(t.isProjectCollapsed(e.id)?-1:6)}}function uS(i,r){if(i&1&&V(0,mS,7,4,"div",22),i&2){let e=r.$implicit,t=C();z(t.projectAnalysisGroups[e.id]!=null&&t.projectAnalysisGroups[e.id].length?0:-1)}}var bU=(()=>{class i{constructor(){this.collate=null,this.projects=[],this.projectAnalysisGroups={},this.heatmapSettings=wa(),this.showBackButton=!0,this.stateChange=new I,this.heatmapSettingsChange=new I,this.backClick=new I,this.collapsedProjects=new Set}toggleProjectCollapse(e){this.collapsedProjects.has(e)?this.collapsedProjects.delete(e):this.collapsedProjects.add(e)}isProjectCollapsed(e){return this.collapsedProjects.has(e)}onProteinFilterChange(e){this.emit({proteinFilter:e})}onLog2fcCutoffChange(e){this.emit({log2fcCutoff:Math.max(0,e)})}onPValueCutoffChange(e){this.emit({pValueCutoff:Math.max(0,e)})}onMaskToggle(e){this.emit({maskSubThreshold:e})}toggleVisibility(e,t){let n=g({},this.state.visibilityMap);n[e]=g({},n[e]),n[e][t]=!(n[e][t]??!0),this.emit({visibilityMap:n})}toggleFlip(e){let t=new Set(this.state.flippedAnalysisGroupIds);t.has(e)?t.delete(e):t.add(e),this.emit({flippedAnalysisGroupIds:t})}isVisible(e,t){return this.state.visibilityMap[e]?.[t]??!0}isFlipped(e){return this.state.flippedAnalysisGroupIds.has(e)}resetFilters(){this.emit({log2fcCutoff:0,pValueCutoff:0,maskSubThreshold:!1,proteinFilter:""})}onColorScaleFixedChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{colorScaleFixed:e}))}onColorScaleMaxChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{colorScaleMax:Math.max(.1,e)}))}onMinLabelChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{minLabel:e}))}onMaxLabelChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{maxLabel:e}))}onUseAgNameChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{useAgNameForAxis:e}))}onColorScaleMinChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{colorScaleMin:e}))}onSwapAxesChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{swapAxes:e}))}onCellSizeChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{cellSize:Math.max(5,Math.min(200,e))}))}onLabelFontSizeChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{labelFontSize:Math.max(4,Math.min(24,e))}))}onSummaryModeChange(e){this.heatmapSettingsChange.emit(re(g({},this.heatmapSettings),{summaryMode:e}))}emit(e){this.stateChange.emit(g(g({},this.state),e))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=R({type:i,selectors:[["app-heatmap-sidebar"]],inputs:{collate:"collate",projects:"projects",projectAnalysisGroups:"projectAnalysisGroups",state:"state",heatmapSettings:"heatmapSettings",showBackButton:"showBackButton"},outputs:{stateChange:"stateChange",heatmapSettingsChange:"heatmapSettingsChange",backClick:"backClick"},decls:92,vars:14,consts:[[1,"sidebar"],[1,"sidebar-section"],[1,"section-header"],[1,"section-title"],["appearance","outline",1,"full-width","compact"],["matInput","","placeholder","gene name, uniprot...",3,"ngModelChange","ngModel"],["mat-icon-button","","matTooltip","Reset thresholds",1,"small-btn",3,"click"],["matInput","","type","number","min","0","step","0.1",3,"ngModelChange","ngModel"],["matInput","","type","number","min","0","step","0.5",3,"ngModelChange","ngModel"],[1,"toggle-row"],[1,"compact-toggle",3,"change","checked"],["matInput","","placeholder","e.g. Down-regulated",3,"ngModelChange","ngModel"],["matInput","","placeholder","e.g. Up-regulated",3,"ngModelChange","ngModel"],["matInput","","type","number","min","5","max","200","step","1",3,"ngModelChange","ngModel"],["matInput","","type","number","min","4","max","24","step","1",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],["value","none"],["value","count"],["value","percentage"],[1,"back-section"],["mat-stroked-button","",1,"back-btn",3,"click"],["matInput","","type","number","min","0.1","step","0.5",3,"ngModelChange","ngModel"],[1,"project-group"],[1,"project-header",3,"click"],[1,"collapse-icon"],[1,"project-name",3,"title"],[1,"ag-row"],[3,"change","checked"],["mat-icon-button","","matTooltip","Flip log2FC sign",1,"flip-btn",3,"click"],[1,"ag-name",3,"title"]],template:function(t,n){t&1&&(m(0,"div",0),V(1,lS,6,0),m(2,"div",1)(3,"div",2)(4,"span",3),x(5,"Filter Proteins"),u()(),m(6,"mat-form-field",4)(7,"mat-label"),x(8,"Name / ID"),u(),m(9,"input",5),k("ngModelChange",function(a){return n.onProteinFilterChange(a)}),u()()(),j(10,"mat-divider"),m(11,"div",1)(12,"div",2)(13,"span",3),x(14,"Significance Thresholds"),u(),m(15,"button",6),k("click",function(){return n.resetFilters()}),m(16,"mat-icon"),x(17,"refresh"),u()()(),m(18,"mat-form-field",4)(19,"mat-label"),x(20,"|log2FC| \u2265"),u(),m(21,"input",7),k("ngModelChange",function(a){return n.onLog2fcCutoffChange(+a)}),u()(),m(22,"mat-form-field",4)(23,"mat-label"),x(24,"-log10(p) \u2265"),u(),m(25,"input",8),k("ngModelChange",function(a){return n.onPValueCutoffChange(+a)}),u()(),m(26,"div",9)(27,"mat-slide-toggle",10),k("change",function(a){return n.onMaskToggle(a.checked)}),x(28," Exclude sub-threshold "),u()()(),j(29,"mat-divider"),m(30,"div",1)(31,"div",2)(32,"span",3),x(33,"Color Scale"),u()(),m(34,"div",9)(35,"mat-slide-toggle",10),k("change",function(a){return n.onColorScaleFixedChange(a.checked)}),x(36," Fixed range "),u()(),V(37,cS,4,1,"mat-form-field",4),m(38,"mat-form-field",4)(39,"mat-label"),x(40,"Min label (optional)"),u(),m(41,"input",11),k("ngModelChange",function(a){return n.onMinLabelChange(a)}),u()(),m(42,"mat-form-field",4)(43,"mat-label"),x(44,"Max label (optional)"),u(),m(45,"input",12),k("ngModelChange",function(a){return n.onMaxLabelChange(a)}),u()()(),j(46,"mat-divider"),m(47,"div",1)(48,"div",2)(49,"span",3),x(50,"Layout"),u()(),m(51,"mat-form-field",4)(52,"mat-label"),x(53,"Cell size (px)"),u(),m(54,"input",13),k("ngModelChange",function(a){return n.onCellSizeChange(+a)}),u()(),m(55,"mat-form-field",4)(56,"mat-label"),x(57,"Font size (px)"),u(),m(58,"input",14),k("ngModelChange",function(a){return n.onLabelFontSizeChange(+a)}),u()(),m(59,"div",9)(60,"mat-slide-toggle",10),k("change",function(a){return n.onSwapAxesChange(a.checked)}),x(61," Swap axes "),u()()(),j(62,"mat-divider"),m(63,"div",1)(64,"div",2)(65,"span",3),x(66,"Summary Stats"),u()(),m(67,"mat-form-field",4)(68,"mat-label"),x(69,"Display"),u(),m(70,"mat-select",15),k("ngModelChange",function(a){return n.onSummaryModeChange(a)}),m(71,"mat-option",16),x(72,"None"),u(),m(73,"mat-option",17),x(74,"Count"),u(),m(75,"mat-option",18),x(76,"Percentage"),u()()()(),j(77,"mat-divider"),m(78,"div",1)(79,"div",2)(80,"span",3),x(81,"X-Axis"),u()(),m(82,"div",9)(83,"mat-slide-toggle",10),k("change",function(a){return n.onUseAgNameChange(a.checked)}),x(84," Use analysis group name "),u()()(),j(85,"mat-divider"),m(86,"div",1)(87,"div",2)(88,"span",3),x(89,"Analysis Groups"),u()(),Ge(90,uS,1,1,null,null,gb),u()()),t&2&&(f(),z(n.showBackButton?1:-1),f(8),O("ngModel",n.state.proteinFilter),f(12),O("ngModel",n.state.log2fcCutoff),f(4),O("ngModel",n.state.pValueCutoff),f(2),O("checked",n.state.maskSubThreshold),f(8),O("checked",n.heatmapSettings.colorScaleFixed),f(2),z(n.heatmapSettings.colorScaleFixed?37:-1),f(4),O("ngModel",n.heatmapSettings.minLabel),f(4),O("ngModel",n.heatmapSettings.maxLabel),f(9),O("ngModel",n.heatmapSettings.cellSize),f(4),O("ngModel",n.heatmapSettings.labelFontSize),f(2),O("checked",n.heatmapSettings.swapAxes),f(10),O("ngModel",n.heatmapSettings.summaryMode),f(13),O("checked",n.heatmapSettings.useAgNameForAxis),f(7),We(n.projects))},dependencies:[lo,An,Ph,On,jh,Bh,mr,rn,In,Bl,Vl,fb,ho,Ui,$t,sr,ha,ic,ln],styles:[".back-section[_ngcontent-%COMP%]{padding:8px 12px;flex-shrink:0}.back-btn[_ngcontent-%COMP%]{width:100%;justify-content:flex-start;font-size:12px}.back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px}.sidebar[_ngcontent-%COMP%]{width:280px;min-width:280px;height:100%;overflow-y:auto;border-right:1px solid var(--app-border-color, #e0e0e0);background:var(--app-surface-color, #fff);display:flex;flex-direction:column;gap:0}.sidebar-section[_ngcontent-%COMP%]{padding:10px 12px;display:flex;flex-direction:column;gap:6px}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.section-title[_ngcontent-%COMP%]{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--app-text-secondary, #666)}.full-width[_ngcontent-%COMP%]{width:100%}.compact[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%]{display:none}.toggle-row[_ngcontent-%COMP%]{display:flex;align-items:center;padding:2px 0}.compact-toggle[_ngcontent-%COMP%]{font-size:12px}.small-btn[_ngcontent-%COMP%]{--mdc-icon-button-state-layer-size: 28px;--mdc-icon-button-icon-size: 16px;padding:0}.project-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0;margin-bottom:4px}.project-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;cursor:pointer;padding:3px 0;border-radius:4px}.project-header[_ngcontent-%COMP%]:hover{background:var(--app-hover-color, rgba(0, 0, 0, .04))}.collapse-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:var(--app-text-secondary, #666)}.project-name[_ngcontent-%COMP%]{font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:160px}.ag-row[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1px 0 1px 16px;gap:4px}.ag-name[_ngcontent-%COMP%]{font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0}.flip-btn[_ngcontent-%COMP%]{--mdc-icon-button-state-layer-size: 24px;--mdc-icon-button-icon-size: 14px;padding:0;color:var(--app-text-secondary, #999)}.flip-btn.flipped[_ngcontent-%COMP%]{color:var(--app-primary-color, #3f51b5)}"],changeDetection:0})}}return i})();var pS=[[["caption"]],[["colgroup"],["col"]],"*"],fS=["caption","colgroup, col","*"];function gS(i,r){i&1&&P(0,2)}function _S(i,r){i&1&&(m(0,"thead",0),gt(1,1),u(),m(2,"tbody",0),gt(3,2)(4,3),u(),m(5,"tfoot",0),gt(6,4),u())}function bS(i,r){i&1&&gt(0,1)(1,2)(2,3)(3,4)}var xi=new _("CDK_TABLE");var oc=(()=>{class i{template=l(Ve);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),ac=(()=>{class i{template=l(Ve);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),vb=(()=>{class i{template=l(Ve);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),uo=(()=>{class i{_table=l(xi,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,o){if(t&1&&ze(o,oc,5)(o,ac,5)(o,vb,5),t&2){let a;S(a=E())&&(n.cell=a.first),S(a=E())&&(n.headerCell=a.first),S(a=E())&&(n.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",D],stickyEnd:[2,"stickyEnd","stickyEnd",D]}})}return i})(),rc=class{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName)}},yb=(()=>{class i extends rc{constructor(){super(l(uo),l(M))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[W]})}return i})();var wb=(()=>{class i extends rc{constructor(){let e=l(uo),t=l(M);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[W]})}return i})();var om=(()=>{class i{template=l(Ve);_differs=l(Ti);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ma?e.headerCell.template:this instanceof am?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,features:[me]})}return i})(),Ma=(()=>{class i extends om{_table=l(xi,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(Ve),l(Ti))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",D]},features:[W,me]})}return i})(),am=(()=>{class i extends om{_table=l(xi,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(Ve),l(Ti))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",D]},features:[W,me]})}return i})(),sc=(()=>{class i extends om{_table=l(xi,{optional:!0});when;constructor(){super(l(Ve),l(Ti))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[W]})}return i})(),ur=(()=>{class i{_viewContainer=l(Ke);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),sm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&gt(0,0)},dependencies:[ur],encapsulation:2})}return i})();var lm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&gt(0,0)},dependencies:[ur],encapsulation:2})}return i})(),Cb=(()=>{class i{templateRef=l(Ve);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),_b=["top","bottom","left","right"],rm=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(r=>this._updateCachedSizes(r)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(r,e,t=!0,n=!0,o,a,s){this._isNativeHtmlTable=r,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(r,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(r);let t=[];for(let n of r)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));xe({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(r,e,t,n=!0,o=!0){if(!r.length||!this._isBrowser||!(e.some(F=>F)||t.some(F=>F))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=r[0],s=a.children.length,c=this.direction==="rtl",d=c?"right":"left",h=c?"left":"right",p=e.lastIndexOf(!0),w=t.indexOf(!0),A,U,ae;o&&this._updateStickyColumnReplayQueue({rows:[...r],stickyStartStates:[...e],stickyEndStates:[...t]}),xe({earlyRead:()=>{A=this._getCellWidths(a,n),U=this._getStickyStartColumnPositions(A,e),ae=this._getStickyEndColumnPositions(A,t)},write:()=>{for(let F of r)for(let ee=0;ee<s;ee++){let ce=F.children[ee];e[ee]&&this._addStickyStyle(ce,d,U[ee],ee===p),t[ee]&&this._addStickyStyle(ce,h,ae[ee],ee===w)}this._positionListener&&A.some(F=>!!F)&&(this._positionListener.stickyColumnsUpdated({sizes:p===-1?[]:A.slice(0,p+1).map((F,ee)=>e[ee]?F:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:w===-1?[]:A.slice(w).map((F,ee)=>t[ee+w]?F:null).reverse()}))}},{injector:this._tableInjector})}stickRows(r,e,t){if(!this._isBrowser)return;let n=t==="bottom"?r.slice().reverse():r,o=t==="bottom"?e.slice().reverse():e,a=[],s=[],c=[];xe({earlyRead:()=>{for(let d=0,h=0;d<n.length;d++){if(!o[d])continue;a[d]=h;let p=n[d];c[d]=this._isNativeHtmlTable?Array.from(p.children):[p];let w=this._retrieveElementSize(p).height;h+=w,s[d]=w}},write:()=>{let d=o.lastIndexOf(!0);for(let h=0;h<n.length;h++){if(!o[h])continue;let p=a[h],w=h===d;for(let A of c[h])this._addStickyStyle(A,t,p,w)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&xe({write:()=>{let t=r.querySelector("tfoot");t&&(e.some(n=>!n)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(r,e){if(!r.classList.contains(this._stickCellCss))return;for(let n of e)r.style[n]="",r.classList.remove(this._borderCellCss[n]);_b.some(n=>e.indexOf(n)===-1&&r.style[n])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex="",this._needsPositionStickyOnElement&&(r.style.position=""),r.classList.remove(this._stickCellCss))}_addStickyStyle(r,e,t,n){r.classList.add(this._stickCellCss),n&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(r){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of _b)r.style[n]&&(t+=e[n]);return t?`${t}`:""}_getCellWidths(r,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=r.children;for(let o=0;o<n.length;o++){let a=n[o];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){let t=[],n=0;for(let o=0;o<r.length;o++)e[o]&&(t[o]=n,n+=r[o]);return t}_getStickyEndColumnPositions(r,e){let t=[],n=0;for(let o=r.length;o>0;o--)e[o]&&(t[o]=n,n+=r[o]);return t}_retrieveElementSize(r){let e=this._elemSizeCache.get(r);if(e)return e;let t=r.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(r,n),this._resizeObserver.observe(r,{box:"border-box"})),n}_updateStickyColumnReplayQueue(r){this._removeFromStickyColumnReplayQueue(r.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(r)}_removeFromStickyColumnReplayQueue(r){let e=new Set(r);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(r){let e=!1;for(let t of r){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&vS(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function vS(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(r=>i.classList.contains(r))}var Ea=new _("STICKY_POSITIONING_LISTENER");var cm=(()=>{class i{viewContainer=l(Ke);elementRef=l(M);constructor(){let e=l(xi);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","rowOutlet",""]]})}return i})(),dm=(()=>{class i{viewContainer=l(Ke);elementRef=l(M);constructor(){let e=l(xi);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),hm=(()=>{class i{viewContainer=l(Ke);elementRef=l(M);constructor(){let e=l(xi);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),mm=(()=>{class i{viewContainer=l(Ke);elementRef=l(M);constructor(){let e=l(xi);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),um=(()=>{class i{_differs=l(Ti);_changeDetectorRef=l(J);_elementRef=l(M);_dir=l(Le,{optional:!0});_platform=l(de);_viewRepeater;_viewportRuler=l(St);_injector=l(q);_virtualScrollViewport=l(df,{optional:!0,host:!0});_positionListener=l(Ea,{optional:!0})||l(Ea,{optional:!0,skipSelf:!0});_document=l($);_data;_renderedRange;_onDestroy=new b;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new b;_footerRowStickyUpdates=new b;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new b;_dataStream=new b;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new I;viewChange=new tt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){l(new Kt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(G(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ks:new zl,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ys(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,o,a)=>this._getEmbeddedViewArgs(n.item,a),n=>n.item.data,n=>{n.operation===pi.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let o=t.get(n.currentIndex);o.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=bb(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=bb(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===o&&a.push(t[s]);this._addStickyColumnStyles(a,o)}),n.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,n.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let c=0;c<s.length;c++){let d=s[c],h=this._cachedRenderRowsMap.get(d.data);h.has(d.rowDef)?h.get(d.rowDef).push(d):h.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(a=>{let s=n&&n.has(a)?n.get(a):[];if(s.length){let c=s.shift();return c.dataIndex=t,c}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),nc(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=nc(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=nc(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=nc(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let c=!!s.getColumnsDiff();return a||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||n||o}_switchDataSource(e){this._data=[],Ys(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ys(this.dataSource)?e=this.dataSource.connect(this):fr(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Y(this.dataSource)),this._renderChangeSubscription=Gi([e,this.viewChange]).pipe(G(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(s=>{let c=this._columnDefsByName.get(s);return c}),o=n.map(s=>s.sticky),a=n.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let o=e.viewContainer.get(n);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;o&&n.push(o)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,o={$implicit:e.data};return{templateRef:n.template,context:o,index:t}}_renderRow(e,t,n,o={}){let a=e.viewContainer.createEmbeddedView(t.template,o,n);return this._renderCellTemplateForItem(t,o),a}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))ur.mostRecentCellOutlet&&ur.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let a=e.get(t).context;a.count=n,a.first=t===0,a.last=t===n-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new rm(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Y()).pipe(G(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?po:cc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(fo(0,t),G(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,o)=>this._measureRangeSize(n,o)}),Gi([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(G(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let c=o.offsets[a],d=n!==0?Math.max(n-c,c):-c;for(let h of s)h.style.top=`${-d}px`}}}),Gi([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(G(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let c of s)c.style.bottom=`${n+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let o=n.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let c=0;c<s.length;c++)s[c].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let n=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<n.start||e.end>n.end;let a=e.start-n.start,s=e.end-e.start,c,d;for(let w=0;w<s;w++){let A=o.get(w+a);if(A&&A.rootNodes.length){c=d=A.rootNodes[0];break}}for(let w=s-1;w>-1;w--){let A=o.get(w+a);if(A&&A.rootNodes.length){d=A.rootNodes[A.rootNodes.length-1];break}}let h=c?.getBoundingClientRect?.(),p=d?.getBoundingClientRect?.();return h&&p?p.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,o){if(t&1&&ze(o,Cb,5)(o,uo,5)(o,sc,5)(o,Ma,5)(o,am,5),t&2){let a;S(a=E())&&(n._noDataRow=a.first),S(a=E())&&(n._contentColumnDefs=a),S(a=E())&&(n._contentRowDefs=a),S(a=E())&&(n._contentHeaderRowDefs=a),S(a=E())&&(n._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){t&2&&T("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",D],fixedLayout:[2,"fixedLayout","fixedLayout",D],recycleRows:[2,"recycleRows","recycleRows",D]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[X([{provide:xi,useExisting:i},{provide:Ea,useValue:null}])],ngContentSelectors:fS,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(se(pS),P(0),P(1,1),V(2,gS,1,0),V(3,_S,7,0)(4,bS,4,0)),t&2&&(f(2),z(n._isServer?2:-1),f(),z(n._isNativeHtmlTable?3:4))},dependencies:[dm,cm,mm,hm],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return i})();function nc(i,r){return i.concat(Array.from(r))}function bb(i,r){let e=r.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n==="TABLE")break;t=t.parentNode}return null}var yS=[[["caption"]],[["colgroup"],["col"]],"*"],wS=["caption","colgroup, col","*"];function CS(i,r){i&1&&P(0,2)}function xS(i,r){i&1&&(m(0,"thead",0),gt(1,1),u(),m(2,"tbody",2),gt(3,3)(4,4),u(),m(5,"tfoot",0),gt(6,5),u())}function DS(i,r){i&1&&gt(0,1)(1,3)(2,4)(3,5)}var xb=(()=>{class i extends um{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,n){t&2&&T("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[X([{provide:um,useExisting:i},{provide:xi,useExisting:i},{provide:Ea,useValue:null}]),W],ngContentSelectors:wS,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(se(yS),P(0),P(1,1),V(2,CS,1,0),V(3,xS,7,0)(4,DS,4,0)),t&2&&(f(2),z(n._isServer?2:-1),f(),z(n._isNativeHtmlTable?3:4))},dependencies:[dm,cm,mm,hm],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return i})(),Db=(()=>{class i extends oc{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matCellDef",""]],features:[X([{provide:oc,useExisting:i}]),W]})}return i})(),kb=(()=>{class i extends ac{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matHeaderCellDef",""]],features:[X([{provide:ac,useExisting:i}]),W]})}return i})();var Sb=(()=>{class i extends uo{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[X([{provide:uo,useExisting:i}]),W]})}return i})(),Eb=(()=>{class i extends yb{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[W]})}return i})();var Mb=(()=>{class i extends wb{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[W]})}return i})();var Rb=(()=>{class i extends Ma{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",D]},features:[X([{provide:Ma,useExisting:i}]),W]})}return i})();var Ib=(()=>{class i extends sc{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[X([{provide:sc,useExisting:i}]),W]})}return i})(),Tb=(()=>{class i extends sm{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[X([{provide:sm,useExisting:i}]),W],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&gt(0,0)},dependencies:[ur],encapsulation:2})}return i})();var Ab=(()=>{class i extends lm{static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[X([{provide:lm,useExisting:i}]),W],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&gt(0,0)},dependencies:[ur],encapsulation:2})}return i})();var SS=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],ES=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function MS(i,r){i&1&&(m(0,"span",3),P(1,1),u())}function RS(i,r){i&1&&(m(0,"span",6),P(1,2),u())}var IS=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`,TS=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],AS=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function OS(i,r){i&1&&j(0,"span",0)}function FS(i,r){i&1&&(m(0,"span",1),P(1),u())}function PS(i,r){i&1&&(m(0,"span",3),P(1,1),u())}function LS(i,r){i&1&&P(0,2)}function NS(i,r){i&1&&j(0,"span",7)}function BS(i,r){if(i&1&&V(0,LS,1,0)(1,NS,1,0,"span",7),i&2){let e=C();z(e.contentEditInput?0:1)}}function jS(i,r){i&1&&P(0,3)}function VS(i,r){i&1&&(m(0,"span",6),P(1,4),u())}var Nb=["*"],zS=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,US=new _("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Ob=new _("MatChipAvatar"),Fb=new _("MatChipTrailingIcon"),Pb=new _("MatChipEdit"),fm=new _("MatChipRemove"),bm=new _("MatChip"),Bb=(()=>{class i{_elementRef=l(M);_parentChip=l(bm);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(Me).load(vt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,n){t&2&&(N("disabled",n._getDisabledAttribute())("aria-disabled",n.disabled),T("mdc-evolution-chip__action--primary",n._isPrimary)("mdc-evolution-chip__action--secondary",!n._isPrimary)("mdc-evolution-chip__action--trailing",!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,"disabled","disabled",D],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ye(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),vm=(()=>{class i extends Bb{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,n){t&1&&k("click",function(a){return n._handleClick(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&(N("tabindex",n._getTabindex()),T("mdc-evolution-chip__action--presentational",!1))},features:[W]})}return i})();var kH=(()=>{class i extends vm{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ue(i)))(n||i)}})();static \u0275dir=v({type:i,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,n){t&2&&N("aria-hidden",null)},features:[X([{provide:fm,useExisting:i}]),W]})}return i})(),gm=(()=>{class i{_changeDetectorRef=l(J);_elementRef=l(M);_tagName=l(nu);_ngZone=l(H);_focusMonitor=l(Et);_globalRippleOptions=l(Rn,{optional:!0});_document=l($);_onFocus=new b;_onBlur=new b;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ve();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(be).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new I;destroyed=new I;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(fl);_injector=l(q);constructor(){let e=l(Me);e.load(vt),e.load(kn),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Be(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let n=t._elementRef.nativeElement;return n===e||n.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,n,o){if(t&1&&ze(o,Ob,5)(o,Pb,5)(o,Fb,5)(o,fm,5)(o,Ob,5)(o,Fb,5)(o,Pb,5)(o,fm,5),t&2){let a;S(a=E())&&(n.leadingIcon=a.first),S(a=E())&&(n.editIcon=a.first),S(a=E())&&(n.trailingIcon=a.first),S(a=E())&&(n.removeIcon=a.first),S(a=E())&&(n._allLeadingIcons=a),S(a=E())&&(n._allTrailingIcons=a),S(a=E())&&(n._allEditIcons=a),S(a=E())&&(n._allRemoveIcons=a)}},viewQuery:function(t,n){if(t&1&&ge(vm,5),t&2){let o;S(o=E())&&(n.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,n){t&1&&k("keydown",function(a){return n._handleKeydown(a)}),t&2&&(ot("id",n.id),N("role",n.role)("aria-label",n.ariaLabel),Qe("mat-"+(n.color||"primary")),T("mdc-evolution-chip",!n._isBasicChip)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-basic-chip",n._isBasicChip)("mat-mdc-standard-chip",!n._isBasicChip)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon())("_mat-animation-noopable",n._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",D],highlighted:[2,"highlighted","highlighted",D],disableRipple:[2,"disableRipple","disableRipple",D],disabled:[2,"disabled","disabled",D]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[X([{provide:bm,useExisting:i}])],ngContentSelectors:ES,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,n){t&1&&(se(SS),j(0,"span",0),m(1,"span",1)(2,"span",2),V(3,MS,2,0,"span",3),m(4,"span",4),P(5),j(6,"span",5),u()()(),V(7,RS,2,0,"span",6)),t&2&&(f(3),z(n.leadingIcon?3:-1),f(4),z(n._hasTrailingIcon()?7:-1))},dependencies:[Bb],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var pm=(()=>{class i{_elementRef=l(M);_document=l($);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return i})(),HS=(()=>{class i extends gm{basicChipAttrName="mat-basic-chip-row";_renderer=l(fe);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new I;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(G(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,xe(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,n,o){if(t&1&&ze(o,pm,5),t&2){let a;S(a=E())&&(n.contentEditInput=a.first)}},viewQuery:function(t,n){if(t&1&&ge(pm,5),t&2){let o;S(o=E())&&(n.defaultEditInput=o.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,n){t&1&&k("focus",function(){return n._handleFocus()})("click",function(a){return n._hasInteractiveActions()?n._handleClick(a):null})("dblclick",function(a){return n._handleDoubleclick(a)}),t&2&&(ot("id",n.id),N("tabindex",n.disabled?null:-1)("aria-label",null)("aria-description",null)("role",n.role),T("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-chip-editing",n._isEditing)("mat-mdc-chip-editable",n.editable)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-leading-action",n._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[X([{provide:gm,useExisting:i},{provide:bm,useExisting:i}]),W],ngContentSelectors:AS,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,n){t&1&&(se(TS),V(0,OS,1,0,"span",0),V(1,FS,2,0,"span",1),m(2,"span",2),V(3,PS,2,0,"span",3),m(4,"span",4),V(5,BS,2,1)(6,jS,1,0),j(7,"span",5),u()(),V(8,VS,2,0,"span",6)),t&2&&(z(n._isEditing?-1:0),f(),z(n._hasLeadingActionIcon()?1:-1),f(),O("disabled",n.disabled),N("aria-description",n.ariaDescription)("aria-label",n.ariaLabel),f(),z(n.leadingIcon?3:-1),f(2),z(n._isEditing?5:6),f(3),z(n._hasTrailingIcon()?8:-1))},dependencies:[vm,pm],styles:[IS],encapsulation:2,changeDetection:0})}return i})(),$S=(()=>{class i{_elementRef=l(M);_changeDetectorRef=l(J);_dir=l(Le,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new b;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Wi;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Ae(null),je(()=>Be(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Ae(this._chips)).subscribe(e=>{let t=[];e.forEach(n=>n._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new vi(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(G(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(G(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Ae(null),G(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(G(this._destroyed)).subscribe(e=>{let n=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(n)&&s&&(this._lastDestroyedFocusedChipIndex=n)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-chip-set"]],contentQueries:function(t,n,o){if(t&1&&ze(o,gm,5),t&2){let a;S(a=E())&&(n._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,n){t&1&&k("keydown",function(a){return n._handleKeydown(a)}),t&2&&N("role",n.role)},inputs:{disabled:[2,"disabled","disabled",D],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ye(e)]},ngContentSelectors:Nb,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,n){t&1&&(se(),Tt(0,"div",0),P(1),qt())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var _m=class{source;value;constructor(r,e){this.source=r,this.value=e}},SH=(()=>{class i extends $S{ngControl=l(Ot,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=l(be).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(Hi.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new I;valueChange=new I;_chips=void 0;stateChanges=new b;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=l(an,{optional:!0}),t=l(sn,{optional:!0}),n=l(co);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new Fn(n,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(G(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),Be(this.chipFocusChanges,this._chips.changes).pipe(G(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,n=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&He(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),n?this._keyManager.setActiveItem(n):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&n){let o=this._chipActions.filter(c=>c._isPrimary===n._isPrimary&&!this._skipPredicate(c)),a=o.indexOf(n),s=e.keyCode===38?-1:1;e.preventDefault(),a>-1&&this._isValidIndex(a+s)&&this._keyManager.setActiveItem(o[a+s])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new _m(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-chip-grid"]],contentQueries:function(t,n,o){if(t&1&&ze(o,HS,5),t&2){let a;S(a=E())&&(n._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,n){t&1&&k("focus",function(){return n.focus()})("blur",function(){return n._blur()}),t&2&&(N("role",n.role)("tabindex",n.disabled||n._chips&&n._chips.length===0?-1:n.tabIndex)("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState),T("mat-mdc-chip-list-disabled",n.disabled)("mat-mdc-chip-list-invalid",n.errorState)("mat-mdc-chip-list-required",n.required))},inputs:{disabled:[2,"disabled","disabled",D],placeholder:"placeholder",required:[2,"required","required",D],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[X([{provide:cr,useExisting:i}]),W],ngContentSelectors:Nb,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,n){t&1&&(se(),Tt(0,"div",0),P(1),qt())},styles:[zS],encapsulation:2,changeDetection:0})}return i})(),EH=(()=>{class i{_elementRef=l(M);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new I;placeholder="";id=l(be).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=l(US),t=l(dr,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let n,o;typeof t=="number"?(n=t,o=null):(n=t.keyCode,o=t.modifiers);let a=o?.length?He(e,...o):!He(e);if(n===e.keyCode&&a)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,n){t&1&&k("keydown",function(a){return n._keydown(a)})("blur",function(){return n._blur()})("focus",function(){return n._focus()})("input",function(){return n._onInput()}),t&2&&(ot("id",n.id),N("disabled",n.disabled&&!n.disabledInteractive?"":null)("placeholder",n.placeholder||null)("aria-invalid",n._chipGrid&&n._chipGrid.ngControl?n._chipGrid.ngControl.invalid:null)("aria-required",n._chipGrid&&n._chipGrid.required||null)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("readonly",n._getReadonlyAttribute())("required",n._chipGrid&&n._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",D],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",D],readonly:[2,"readonly","readonly",D],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",D]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[me]})}return i})();var GS=(i,r)=>r.id;function WS(i,r){i&1&&(m(0,"th",11),x(1," Original Title "),u())}function qS(i,r){if(i&1&&(m(0,"td",12),x(1),u()),i&2){let e=r.$implicit;f(),wt(" ",e," ")}}function YS(i,r){i&1&&(m(0,"th",11),x(1," Display Title "),u())}function KS(i,r){if(i&1&&(m(0,"td",12)(1,"form",13)(2,"mat-form-field"),j(3,"input",14),u()()()),i&2){let e=r.$implicit,t=C(2).$implicit,n=C();f(),O("formGroup",n.formMap[t.id][e]),f(2),O("formControlName",Jm(e))}}function QS(i,r){i&1&&j(0,"tr",15)}function ZS(i,r){i&1&&j(0,"tr",16)}function XS(i,r){if(i&1&&(m(0,"h5"),x(1),u(),m(2,"table",4),bo(3,5),ke(4,WS,2,0,"th",6)(5,qS,2,1,"td",7),vo(),bo(6,8),ke(7,YS,2,0,"th",6)(8,KS,4,3,"td",7),vo(),ke(9,QS,1,0,"tr",9)(10,ZS,1,0,"tr",10),u()),i&2){let e=C().$implicit,t=C();f(),Ie(e.name),f(),O("dataSource",t.projectConditionMap[e.id]),f(7),O("matHeaderRowDef",t.displayedColumns),f(),O("matRowDefColumns",t.displayedColumns)}}function JS(i,r){if(i&1&&V(0,XS,11,4),i&2){let e=r.$implicit,t=C();z(t.formMap[e.id]?0:-1)}}var NH=(()=>{class i{set projects(e){this._projects=e.slice()}get projects(){return this._projects}set renameSampleCondition(e){for(let t of this.projects)this.web.getProjectUniqueConditions(t.id).pipe(G(this.destroy$)).subscribe(n=>{for(let o of n){if(this.formMap[o.AnalysisGroup.project]||(this.formMap[o.AnalysisGroup.project]={}),!this.formMap[o.AnalysisGroup.project][o.Condition]){let a={};a[o.Condition]=new hr(o.Condition,Hi.required),this.formMap[o.AnalysisGroup.project][o.Condition]=this.fb.group(a)}this.projectConditionMap[o.AnalysisGroup.project]||(this.projectConditionMap[o.AnalysisGroup.project]=[]),this.projectConditionMap[o.AnalysisGroup.project].includes(o.Condition)||this.projectConditionMap[o.AnalysisGroup.project].push(o.Condition),this.renameSampleCondition[o.AnalysisGroup.project]||(this.renameSampleCondition[o.AnalysisGroup.project]={}),this.renameSampleCondition[o.AnalysisGroup.project][o.Condition]||(this.renameSampleCondition[o.AnalysisGroup.project][o.Condition]=o.Condition),e[o.AnalysisGroup.project]&&e[o.AnalysisGroup.project][o.Condition]&&(this.renameSampleCondition[o.AnalysisGroup.project][o.Condition]=e[o.AnalysisGroup.project][o.Condition],this.formMap[o.AnalysisGroup.project][o.Condition].controls[o.Condition].setValue(e[o.AnalysisGroup.project][o.Condition]))}this.cdr.markForCheck()})}get renameSampleCondition(){return this._renameSampleCondition}constructor(e,t,n,o,a){this.dialog=e,this.web=t,this.fb=n,this.sb=o,this.cdr=a,this.destroy$=new b,this.displayedColumns=["original","display"],this.projectConditionMap={},this._projects=[],this._renameSampleCondition={},this.formMap={}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}close(){this.dialog.close()}submit(){let e={};for(let t in this.formMap){e[t]={};for(let n in this.formMap[t])if(e[t][n]=this.formMap[t][n].value[n],!this.formMap[t][n].valid){this.sb.open(`${n} is invalid`);return}}this.dialog.close(e)}static{this.\u0275fac=function(t){return new(t||i)(L(Ht),L(to),L(R_),L(kg),L(J))}}static{this.\u0275cmp=R({type:i,selectors:[["app-collate-rename-sample-condition-dialog"]],inputs:{projects:"projects",renameSampleCondition:"renameSampleCondition"},decls:10,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","original"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","display"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"formGroup"],["matInput","",2,"border-radius","0",3,"formControlName"],["mat-header-row",""],["mat-row",""]],template:function(t,n){t&1&&(m(0,"h1",0),x(1,"Rename Conditions"),u(),m(2,"div",1),Ge(3,JS,1,1,null,null,GS),u(),m(5,"div",2)(6,"button",3),k("click",function(){return n.submit()}),x(7,"Submit"),u(),m(8,"button",3),k("click",function(){return n.close()}),x(9,"Close"),u()()),t&2&&(f(3),We(n.projects))},dependencies:[ji,Vi,I_,Ll,An,On,Ol,sn,Nh,Mb,Db,Sb,Eb,Tb,Rb,Ab,Ib,xb,kb,zi,$t,rn,Bl],encapsulation:2,changeDetection:0})}}return i})();var jb=(i,r)=>r.id;function eE(i,r){if(i&1&&(m(0,"mat-list-item",9)(1,"mat-icon",11),x(2,"drag_handle"),u(),m(3,"div",12),x(4),u()()),i&2){let e=r.$implicit;f(4),Ie(e)}}function tE(i,r){if(i&1&&(m(0,"mat-list-item",9)(1,"mat-icon",11),x(2,"drag_handle"),u(),m(3,"div",12),x(4),u()()),i&2){let e=r.$implicit;f(4),Ie(e)}}function iE(i,r){if(i&1){let e=qe();m(0,"div",13)(1,"div",14)(2,"span"),x(3),u(),m(4,"button",15),k("click",function(){let n=we(e).$implicit,o=C(2).$implicit,a=C();return Ce(a.removeAgOverride(o.id,n))}),m(5,"mat-icon"),x(6,"close"),u()()(),m(7,"mat-list",7)(8,"div",8),k("cdkDropListDropped",function(n){let o=we(e).$implicit,a=C(2).$implicit,s=C();return Ce(s.dropAgOverride(n,a.id,o))}),Ge(9,tE,5,1,"mat-list-item",9,li),u()()()}if(i&2){let e=r.$implicit,t=C(2).$implicit,n=C();f(3),Ie(n.agName(t.id,e)),f(6),We(n.agConditions(t.id,e))}}function nE(i,r){if(i&1&&(m(0,"div",6),x(1,"Analysis group overrides"),u(),Ge(2,iE,11,1,"div",13,li)),i&2){let e=C().$implicit,t=C();f(2),We(t.agOverrideIds(e.id))}}function rE(i,r){if(i&1&&(m(0,"mat-option",18),x(1),u()),i&2){let e=r.$implicit;O("value",e.id),f(),Ie(e.name)}}function oE(i,r){if(i&1){let e=qe();m(0,"div",10)(1,"mat-form-field",16)(2,"mat-label"),x(3,"Add AG-specific override"),u(),m(4,"mat-select",17),Er("valueChange",function(n){we(e);let o=C().$implicit,a=C();return Sr(a.selectedAgOverride[o.id],n)||(a.selectedAgOverride[o.id]=n),Ce(n)}),Ge(5,rE,2,2,"mat-option",18,jb),u()(),m(7,"button",19),k("click",function(){we(e);let n=C().$implicit,o=C();return Ce(o.addAgOverride(n.id))}),m(8,"mat-icon"),x(9,"add"),u()()()}if(i&2){let e=C().$implicit,t=C();f(4),kr("value",t.selectedAgOverride[e.id]),f(),We(t.availableAgsForOverride(e.id)),f(2),O("disabled",!t.selectedAgOverride[e.id])}}function aE(i,r){if(i&1){let e=qe();m(0,"div",4)(1,"div",5),x(2),u(),m(3,"div",6),x(4,"Global order"),u(),m(5,"mat-list",7)(6,"div",8),k("cdkDropListDropped",function(n){let o=we(e).$implicit,a=C();return Ce(a.dropGlobal(n,o.id))}),Ge(7,eE,5,1,"mat-list-item",9,li),u()(),V(9,nE,4,0),V(10,oE,10,2,"div",10),u(),j(11,"mat-divider")}if(i&2){let e=r.$implicit,t=C();f(2),Ie(e.name),f(5),We(t.projectConditionOrder[e.id]==null?null:t.projectConditionOrder[e.id].global),f(2),z(t.agOverrideIds(e.id).length>0?9:-1),f(),z(t.availableAgsForOverride(e.id).length>0?10:-1)}}var ZH=(()=>{class i{set projects(e){this._projects=e;for(let t of e)this.projectConditionOrder[t.id]||(this.projectConditionOrder[t.id]={global:[],perAnalysisGroup:{}}),this.selectedAgOverride[t.id]=null,this.web.getProjectUniqueConditions(t.id).pipe(G(this.destroy$)).subscribe(n=>{let o=[];for(let c of n)o.includes(c.Condition)||o.push(c.Condition);this.projectConditions[t.id]=o;let a=this.projectConditionOrder[t.id],s=new Set(a.global);for(let c of o)s.has(c)||a.global.push(c);this.cdr.markForCheck()}),this.web.getAnalysisGroupsFromProjects([t]).pipe(G(this.destroy$)).subscribe(n=>{this.projectAnalysisGroups[t.id]=n,this.cdr.markForCheck()})}get projects(){return this._projects}set initialOrder(e){if(e)for(let t in e)this.projectConditionOrder[t]={global:[...e[t].global??[]],perAnalysisGroup:Object.fromEntries(Object.entries(e[t].perAnalysisGroup??{}).map(([n,o])=>[n,[...o]]))}}constructor(e,t,n){this.dialogRef=e,this.web=t,this.cdr=n,this.destroy$=new b,this._projects=[],this.projectConditions={},this.projectConditionOrder={},this.projectAnalysisGroups={},this.selectedAgOverride={}}dropGlobal(e,t){Ln(this.projectConditionOrder[t].global,e.previousIndex,e.currentIndex)}dropAgOverride(e,t,n){Ln(this.projectConditionOrder[t].perAnalysisGroup[n],e.previousIndex,e.currentIndex)}addAgOverride(e){let t=this.selectedAgOverride[e];if(t==null)return;let n=this.projectConditionOrder[e];n.perAnalysisGroup[t]||(n.perAnalysisGroup[t]=[...n.global]),this.selectedAgOverride[e]=null,this.cdr.markForCheck()}removeAgOverride(e,t){delete this.projectConditionOrder[e].perAnalysisGroup[t],this.cdr.markForCheck()}agOverrideIds(e){return Object.keys(this.projectConditionOrder[e]?.perAnalysisGroup??{}).map(Number)}agConditions(e,t){return this.projectConditionOrder[e]?.perAnalysisGroup?.[t]??[]}agName(e,t){return this.projectAnalysisGroups[e]?.find(n=>n.id===t)?.name??`AG ${t}`}availableAgsForOverride(e){let t=new Set(this.agOverrideIds(e));return(this.projectAnalysisGroups[e]??[]).filter(n=>!t.has(n.id))}save(){this.dialogRef.close(this.projectConditionOrder)}cancel(){this.dialogRef.close()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(L(Ht),L(to),L(J))}}static{this.\u0275cmp=R({type:i,selectors:[["app-collate-condition-order-dialog"]],inputs:{projects:"projects",initialOrder:"initialOrder"},decls:10,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-button","",3,"click"],[1,"project-section"],[1,"project-header"],[1,"section-label"],["dense",""],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","",1,"order-item"],[1,"add-override-row"],["cdkDragHandle","","matListItemIcon","",1,"drag-handle"],["matListItemTitle",""],[1,"ag-override-block"],[1,"ag-override-header"],["mat-icon-button","","matTooltip","Remove override",3,"click"],["appearance","outline",1,"ag-select"],[3,"valueChange","value"],[3,"value"],["mat-icon-button","","matTooltip","Add override",3,"click","disabled"]],template:function(t,n){t&1&&(m(0,"h2",0),x(1,"Condition Order"),u(),m(2,"div",1),Ge(3,aE,12,3,null,null,jb),u(),m(5,"div",2)(6,"button",3),k("click",function(){return n.cancel()}),x(7,"Cancel"),u(),m(8,"button",3),k("click",function(){return n.save()}),x(9,"Save"),u()()),t&2&&(f(3),We(n.projects))},dependencies:[ji,Vi,zi,$t,sr,ho,Ui,Hl,$l,Zl,Ql,Kl,ic,ln,rn,In],styles:[".project-section[_ngcontent-%COMP%]{padding:8px 0}.project-header[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:var(--app-text-color);margin-bottom:4px}.section-label[_ngcontent-%COMP%]{font-size:11px;color:var(--app-text-secondary);margin:6px 0 2px;text-transform:uppercase;letter-spacing:.05em}.order-item[_ngcontent-%COMP%]{cursor:grab;border-radius:4px}.order-item[_ngcontent-%COMP%]:hover{background:var(--app-surface-variant)}.drag-handle[_ngcontent-%COMP%]{cursor:grab;color:var(--app-text-secondary)}.ag-override-block[_ngcontent-%COMP%]{border:1px solid var(--app-outline-variant);border-radius:6px;margin:4px 0 8px;padding:4px 8px}.ag-override-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:12px;font-weight:500;padding:2px 0}.add-override-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-top:8px}.ag-select[_ngcontent-%COMP%]{flex:1;font-size:12px}"],changeDetection:0})}}return i})();export{Pc as a,Bc as b,uv as c,pv as d,Mr as e,EM as f,Kc as g,zv as h,Fi as i,py as j,fy as k,Xu as l,Ao as m,zt as n,Ni as o,xd as p,ri as q,K0 as r,Q0 as s,nf as t,Od as u,Zi as v,de as w,Jn as x,Je as y,Me as z,Et as A,ta as B,He as C,la as D,vi as E,be as F,th as G,hl as H,Jf as I,qf as J,Xd as K,ve as L,yi as M,vt as N,Pn as O,YD as P,ai as Q,An as R,Hi as S,On as T,Ol as U,hr as V,mr as W,Ll as X,Ph as Y,kD as Z,Nh as _,sn as $,Bh as aa,jh as ba,R_ as ca,lo as da,I_ as ea,Le as fa,Ne as ga,ho as ha,F_ as ia,V_ as ja,Ul as ka,Hl as la,$l as ma,vk as na,wk as oa,St as pa,Wr as qa,Ut as ra,gi as sa,Ji as ta,_i as ua,ir as va,bi as wa,Dn as xa,Ht as ya,Bw as za,rg as Aa,ji as Ba,Vi as Ca,zi as Da,sF as Ea,In as Fa,Wg as Ga,Cl as Ha,Yg as Ia,Qg as Ja,dr as Ka,rn as La,Ch as Ma,Bl as Na,fB as Oa,sr as Pa,$t as Qa,eC as Ra,ec as Sa,tc as Ta,Jl as Ua,ln as Va,tm as Wa,im as Xa,Cz as Ya,ic as Za,ha as _a,Ui as $a,Cg as ab,kH as bb,gm as cb,HS as db,$S as eb,SH as fb,EH as gb,UP as hb,kg as ib,lr as jb,mL as kb,_L as lb,to as mb,JC as nb,ex as ob,tN as pb,Ln as qb,Kl as rb,Ql as sb,Zl as tb,xV as ub,bh as vb,Ag as wb,Og as xb,uo as yb,xb as zb,Db as Ab,kb as Bb,Sb as Cb,Eb as Db,Mb as Eb,Rb as Fb,Ib as Gb,Tb as Hb,Ab as Ib,fb as Jb,ux as Kb,Fg as Lb,wN as Mb,yh as Nb,yl as Ob,WN as Pb,Vl as Qb,jB as Rb,wa as Sb,zB as Tb,tj as Ub,uj as Vb,fj as Wb,AV as Xb,BV as Yb,bU as Zb,NH as _b,ZH as $b};
