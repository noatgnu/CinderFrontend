import{b as ee,c as ie,d as ne,e as oe,f as re,g as ae,h as se,i as ce,j as le,k as de,l as be,m as he,n as ut}from"./chunk-XUVLJI7V.js";import"./chunk-HKLT2GVU.js";import"./chunk-7QHUN4KL.js";import{a as Zt,b as te}from"./chunk-M36QQL5H.js";import{a as Kt,f as Jt,g as Xt,i as rt}from"./chunk-4QPSL7KU.js";import{Ba as nt,Ca as ot,Ea as Q,Fa as at,J as $t,K as Yt,L as Ut,ia as W,l as Nt,ma as q,na as K,pa as J,qa as X,r as jt,sa as Z,ta as tt,u as Bt,ua as P,v as Gt,wa as et,ya as it}from"./chunk-IG4GEPI4.js";import{h as Qt,k as Ht,o as zt}from"./chunk-M5DCLWJD.js";import{c as O,d as A,f as _,g as D,h as j,i as E,j as Wt,k as qt}from"./chunk-AESYL7IM.js";import{Ab as bt,Bb as yt,Cb as a,Db as s,Ea as xt,Eb as S,Fa as V,Fb as R,G as Ct,Gb as I,Gc as kt,Ib as M,Jc as Ot,Kc as Pt,Lb as C,Nb as h,Ob as Dt,Pb as Rt,Rb as U,Tb as It,Ub as Mt,Vb as Tt,Xa as Y,Xb as l,Yb as k,Za as c,Zb as T,_a as p,ac as y,bc as Et,cc as At,dc as Lt,e as xe,ea as $,ec as Ft,fa as lt,ha as gt,m as ct,nb as ht,nc as Vt,oa as b,p as St,pa as dt,qa as vt,rb as d,rc as N,sb as mt,tb as m,va as wt,vb as pt,wa as w,xa as x,yb as f}from"./chunk-FYJXFM5Q.js";var ye=(t,e)=>e.id;function De(t,e){if(t&1){let o=M();a(0,"mat-list-option",1),C("click",function(){let n=w(o).$implicit,r=h(2);return x(r.searchSessionSelected.emit(n))}),a(1,"div")(2,"div")(3,"b"),l(4),s()(),a(5,"small"),l(6),Lt(7,"date"),s()()(),S(8,"mat-divider")}if(t&2){let o=e.$implicit;m("value",o)("disabled",o.failed),c(4),k(o.search_term),c(2),k(Ft(7,4,o.created_at,"short"))}}function Re(t,e){if(t&1&&(a(0,"mat-selection-list",0),bt(1,De,9,7,null,null,ye),s()),t&2){let o=h();m("multiple",!1),c(),yt(o.searchSessionQuery.results)}}var me=(()=>{let e=class e{set searchSessionQuery(i){this._searchSessionQuery=i}get searchSessionQuery(){return this._searchSessionQuery}constructor(){this._searchSessionQuery=void 0,this.searchSessionSelected=new V}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["app-search-session-list"]],inputs:{searchSessionQuery:"searchSessionQuery"},outputs:{searchSessionSelected:"searchSessionSelected"},standalone:!0,features:[y],decls:1,vars:1,consts:[[3,"multiple"],[3,"click","value","disabled"]],template:function(n,r){n&1&&d(0,Re,3,1,"mat-selection-list",0),n&2&&f(r.searchSessionQuery?0:-1)},dependencies:[Kt,Jt,Xt,Ot]});let t=e;return t})();var Ie=["mat-sort-header",""],Me=["*"];function Te(t,e){if(t&1){let o=M();a(0,"div",2),C("@arrowPosition.start",function(){w(o);let n=h();return x(n._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){w(o);let n=h();return x(n._disableViewStateAnimation=!1)}),S(1,"div",3),a(2,"div",4),S(3,"div",5)(4,"div",6)(5,"div",7),s()()}if(t&2){let o=h();m("@arrowOpacity",o._getArrowViewState())("@arrowPosition",o._getArrowViewState())("@allowChildren",o._getArrowDirectionState()),c(2),m("@indicator",o._getArrowDirectionState()),c(),m("@leftPointer",o._getArrowDirectionState()),c(),m("@rightPointer",o._getArrowDirectionState())}}var pe=new gt("MAT_SORT_DEFAULT_OPTIONS"),_t=(()=>{let e=class e{get direction(){return this._direction}set direction(i){this._direction=i}constructor(i){this._defaultOptions=i,this._initializedStream=new St(1),this.sortables=new Map,this._stateChanges=new ct,this.start="asc",this._direction="",this.disabled=!1,this.sortChange=new V,this.initialized=this._initializedStream}register(i){this.sortables.set(i.id,i)}deregister(i){this.sortables.delete(i.id)}sort(i){this.active!=i.id?(this.active=i.id,this.direction=i.start?i.start:this.start):this.direction=this.getNextSortDirection(i),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(i){if(!i)return"";let n=i?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=Ee(i.start||this.start,n),u=r.indexOf(this.direction)+1;return u>=r.length&&(u=0),r[u]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}};e.\u0275fac=function(n){return new(n||e)(p(pe,8))},e.\u0275dir=vt({type:e,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",N],disabled:[2,"matSortDisabled","disabled",N]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],standalone:!0,features:[ht,wt]});let t=e;return t})();function Ee(t,e){let o=["asc","desc"];return t=="desc"&&o.reverse(),e||o.push(""),o}var F=Gt.ENTERING+" "+Bt.STANDARD_CURVE,H={indicator:O("indicator",[D("active-asc, asc",_({transform:"translateY(0px)"})),D("active-desc, desc",_({transform:"translateY(10px)"})),E("active-asc <=> active-desc",A(F))]),leftPointer:O("leftPointer",[D("active-asc, asc",_({transform:"rotate(-45deg)"})),D("active-desc, desc",_({transform:"rotate(45deg)"})),E("active-asc <=> active-desc",A(F))]),rightPointer:O("rightPointer",[D("active-asc, asc",_({transform:"rotate(45deg)"})),D("active-desc, desc",_({transform:"rotate(-45deg)"})),E("active-asc <=> active-desc",A(F))]),arrowOpacity:O("arrowOpacity",[D("desc-to-active, asc-to-active, active",_({opacity:1})),D("desc-to-hint, asc-to-hint, hint",_({opacity:.54})),D("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",_({opacity:0})),E("* => asc, * => desc, * => active, * => hint, * => void",A("0ms")),E("* <=> *",A(F))]),arrowPosition:O("arrowPosition",[E("* => desc-to-hint, * => desc-to-active",A(F,j([_({transform:"translateY(-25%)"}),_({transform:"translateY(0)"})]))),E("* => hint-to-desc, * => active-to-desc",A(F,j([_({transform:"translateY(0)"}),_({transform:"translateY(25%)"})]))),E("* => asc-to-hint, * => asc-to-active",A(F,j([_({transform:"translateY(25%)"}),_({transform:"translateY(0)"})]))),E("* => hint-to-asc, * => active-to-asc",A(F,j([_({transform:"translateY(0)"}),_({transform:"translateY(-25%)"})]))),D("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",_({transform:"translateY(0)"})),D("hint-to-desc, active-to-desc, desc",_({transform:"translateY(-25%)"})),D("hint-to-asc, active-to-asc, asc",_({transform:"translateY(25%)"}))]),allowChildren:O("allowChildren",[E("* <=> *",[qt("@*",Wt(),{optional:!0})])])},Ae=(()=>{let e=class e{constructor(){this.changes=new ct}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ue=(()=>{let e=class e{get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(i){this._updateSortActionDescription(i)}constructor(i,n,r,u,g,B,G,z){this._intl=i,this._changeDetectorRef=n,this._sort=r,this._columnDef=u,this._focusMonitor=g,this._elementRef=B,this._ariaDescriber=G,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this.disabled=!1,this._sortActionDescription="Sort",z?.arrowPosition&&(this.arrowPosition=z?.arrowPosition),this._handleStateChanges()}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{let n=!!i;n!==this._showIndicatorHint&&(this._setIndicatorHintVisible(n),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_setIndicatorHintVisible(i){this._isDisabled()&&i||(this._showIndicatorHint=i,this._isSorted()||(this._updateArrowDirection(),this._showIndicatorHint?this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"hint"}):this._setAnimationTransitionState({fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(i){this._viewState=i||{},this._disableViewStateAnimation&&(this._viewState={toState:i.toState})}_toggleOnInteraction(){this._sort.sort(this),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(i){!this._isDisabled()&&(i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){let i=this._viewState.fromState;return(i?`${i}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(i){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,i)),this._sortActionDescription=i}_handleStateChanges(){this._rerenderSubscription=Ct(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&this._viewState.toState==="active"&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}};e.\u0275fac=function(n){return new(n||e)(p(Ae),p(Vt),p(_t,8),p("MAT_SORT_HEADER_COLUMN_DEF",8),p(jt),p(xt),p(Nt,8),p(pe,8))},e.\u0275cmp=b({type:e,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(n,r){n&1&&C("click",function(){return r._handleClick()})("keydown",function(g){return r._handleKeydown(g)})("mouseenter",function(){return r._setIndicatorHintVisible(!0)})("mouseleave",function(){return r._setIndicatorHintVisible(!1)}),n&2&&(mt("aria-sort",r._getAriaSortAttribute()),pt("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",N],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",N]},exportAs:["matSortHeader"],standalone:!0,features:[ht,y],attrs:Ie,ngContentSelectors:Me,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(n,r){n&1&&(Dt(),a(0,"div",0)(1,"div",1),Rt(2),s(),d(3,Te,6,6,"div",2),s()),n&2&&(pt("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before"),mt("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),c(3),f(r._renderArrow()?3:-1))},styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[H.indicator,H.leftPointer,H.rightPointer,H.arrowOpacity,H.arrowPosition,H.allowChildren]},changeDetection:0});let t=e;return t})();var Le=["table"],Fe=t=>({"highlighted-row":t});function Ve(t,e){t&1&&(a(0,"div",1)(1,"h2"),l(2,"No results found"),s()())}function ke(t,e){t&1&&(a(0,"th",20),l(1," Primary ID "),s())}function Oe(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.primary_id," ")}}function Pe(t,e){t&1&&(a(0,"th",20),l(1," UniProt Accession ID "),s())}function Qe(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.uniprot_id," ")}}function He(t,e){t&1&&(a(0,"th",20),l(1," Gene name "),s())}function ze(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.gene_name," ")}}function Ne(t,e){t&1&&(a(0,"th",22),l(1," Log2 FC "),s())}function je(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.log2_fc," ")}}function Be(t,e){t&1&&(a(0,"th",22),l(1," -Log10(P-Value) "),s())}function Ge(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.log10_p," ")}}function $e(t,e){t&1&&(a(0,"th",20),l(1," Comparison "),s())}function Ye(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.comparison_label," ")}}function Ue(t,e){t&1&&(a(0,"th",20),l(1," Search term "),s())}function We(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.search_term," ")}}function qe(t,e){t&1&&(a(0,"th",20),l(1," Condition A "),s())}function Ke(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.condition_A,"")}}function Je(t,e){t&1&&(a(0,"th",20),l(1," Condition B "),s())}function Xe(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.condition_B,"")}}function Ze(t,e){t&1&&(a(0,"th",20),l(1," File "),s())}function ti(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.file.name," ")}}function ei(t,e){t&1&&(a(0,"th",20),l(1," Analysis Group "),s())}function ii(t,e){if(t&1&&(a(0,"td",21)(1,"a",23),l(2),s()()),t&2){let o=e.$implicit;c(),U("href","/#/analysis-group/",o.analysis_group.id,"",Y),c(),k(o.analysis_group.name)}}function ni(t,e){t&1&&S(0,"tr",24)}function oi(t,e){if(t&1){let o=M();a(0,"tr",25),C("click",function(){let n=w(o).$implicit,r=h(3);return x(r.handleSelection(n))}),s()}if(t&2){let o=e.$implicit,i=h(3);m("ngClass",Et(1,Fe,i.selectedRow===o))}}function ri(t,e){if(t&1){let o=M();a(0,"table",3,0),C("matSortChange",function(n){w(o);let r=h(2);return x(r.handleSortChange(n))}),R(2,4),d(3,ke,2,0,"th",5)(4,Oe,2,1,"td",6),I(),R(5,7),d(6,Pe,2,0,"th",5)(7,Qe,2,1,"td",6),I(),R(8,8),d(9,He,2,0,"th",5)(10,ze,2,1,"td",6),I(),R(11,9),d(12,Ne,2,0,"th",10)(13,je,2,1,"td",6),I(),R(14,11),d(15,Be,2,0,"th",10)(16,Ge,2,1,"td",6),I(),R(17,12),d(18,$e,2,0,"th",5)(19,Ye,2,1,"td",6),I(),R(20,13),d(21,Ue,2,0,"th",5)(22,We,2,1,"td",6),I(),R(23,14),d(24,qe,2,0,"th",5)(25,Ke,2,1,"td",6),I(),R(26,15),d(27,Je,2,0,"th",5)(28,Xe,2,1,"td",6),I(),R(29,16),d(30,Ze,2,0,"th",5)(31,ti,2,1,"td",6),I(),R(32,17),d(33,ei,2,0,"th",5)(34,ii,3,3,"td",6),I(),d(35,ni,1,0,"tr",18)(36,oi,1,3,"tr",19),s()}if(t&2){let o=h(2);m("dataSource",o.searchResultQuery.results),c(35),m("matHeaderRowDef",o.displayedColumns),c(),m("matRowDefColumns",o.displayedColumns)}}function ai(t,e){if(t&1&&d(0,Ve,3,0,"div",1)(1,ri,37,3,"table",2),t&2){let o=h();f(o.searchResultQuery.results.length===0?0:1)}}var _e=(()=>{let e=class e{set searchResultQuery(i){this._searchResultQuery=i,this.table&&this.table.renderRows()}get searchResultQuery(){return this._searchResultQuery}constructor(){this.displayedColumns=["primary_id","gene_name","uniprot_id","search_term","condition_A","condition_B","log2_fc","log10_p","file","comparison_label","analysis_group"],this._searchResultQuery=void 0,this.selectedRow=void 0,this.selected=new V,this.sortChange=new V}handleSelection(i){this.selected.emit(i),this.selectedRow=i}handleSortChange(i){this.sortChange.emit(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["app-search-result-list"]],viewQuery:function(n,r){if(n&1&&It(Le,5),n&2){let u;Mt(u=Tt())&&(r.table=u.first)}},inputs:{searchResultQuery:"searchResultQuery"},outputs:{selected:"selected",sortChange:"sortChange"},standalone:!0,features:[y],decls:1,vars:1,consts:[["table",""],[1,"no-results"],["mat-table","","matSort","",3,"dataSource"],["mat-table","","matSort","",3,"matSortChange","dataSource"],["matColumnDef","primary_id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","uniprot_id"],["matColumnDef","gene_name"],["matColumnDef","log2_fc"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","log10_p"],["matColumnDef","comparison_label"],["matColumnDef","search_term"],["matColumnDef","condition_A"],["matColumnDef","condition_B"],["matColumnDef","file"],["matColumnDef","analysis_group"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],["target","_blank",3,"href"],["mat-header-row",""],["mat-row","",3,"click","ngClass"]],template:function(n,r){n&1&&d(0,ai,2,1),n&2&&f(r.searchResultQuery?0:-1)},dependencies:[ee,oe,re,ie,ae,ne,le,de,ce,se,_t,ue,kt],styles:[".mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%]{border-color:currentColor}.highlighted-row[_ngcontent-%COMP%]{background-color:#009dff}"]});let t=e;return t})();var li=xe(be());var fe=(()=>{let e=class e{constructor(){this.defaultColorList=["#fd7f6f","#7eb0d5","#b2e061","#bd7ebe","#ffb55a","#ffee65","#beb9db","#fdcce5","#8bd3c7"]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();ut.plotlyjs=li;var Se=(()=>{let e=class e{set annotationData(i){this._annotationData=i,this.currentColor=0,this.drawVerticalBarChart()}get annotationData(){return this._annotationData}constructor(i,n){this.graph=i,this.accounts=n,this.showOtherConditions=!1,this.title="",this.comparedConditions=[],this._annotationData=[],this.graphData=[],this.graphLayout={xaxis:{title:"Sample",tickfont:{size:17,color:"black"},tickvals:[],ticktext:[]},yaxis:{title:"Value",tickfont:{size:17,color:"black"}},margin:{r:40,l:100,b:120,t:100},width:1e3},this.barSize=50,this.revision=0,this.currentColor=0,this.colorMap={}}drawVerticalBarChart(){let i=document.getElementsByTagName("body")[0],r=window.getComputedStyle(i).backgroundColor;this.accounts.userAccount.darkMode?(this.graphLayout.plot_bgcolor=r,this.graphLayout.paper_bgcolor=r,this.graphLayout.font={color:"white",size:14},this.graphLayout.xaxis.tickfont.color="white",this.graphLayout.yaxis.tickfont.color="white"):(this.graphLayout.plot_bgcolor="#FFFFFF",this.graphLayout.paper_bgcolor="#FFFFFF",this.graphLayout.font={color:"black",size:14});let u=this.annotationData,g={},B=[],G=[];for(let v of u)g[v.Condition]||(this.colorMap[v.Condition]||(this.colorMap[v.Condition]=this.graph.defaultColorList[this.currentColor]),g[v.Condition]={x:[],y:[],type:"bar",marker:{color:this.colorMap[v.Condition]},showlegend:!1,name:v.Condition},this.currentColor+=1,this.currentColor>=this.graph.defaultColorList.length&&(this.currentColor=0)),g[v.Condition].y.push(v.Value),g[v.Condition].x.push(v.Sample);let z=[],st=0;for(let v in g)!this.showOtherConditions&&this.comparedConditions.length>0&&!this.comparedConditions.includes(v)||(st=st+g[v].x.length,G.push(g[v].x[Math.round(g[v].x.length/2)-1]),B.push(v),z.push(g[v]));this.graphData=z,this.graphLayout.xaxis.tickvals=G,this.graphLayout.xaxis.ticktext=B,this.title&&(this.graphLayout.title=this.title),this.graphLayout.width=this.graphLayout.margin.l+this.graphLayout.margin.r+this.barSize*st,this.revision+=1}toggleOtherConditions(){this.showOtherConditions=!this.showOtherConditions,this.drawVerticalBarChart()}};e.\u0275fac=function(n){return new(n||e)(p(fe),p(at))},e.\u0275cmp=b({type:e,selectors:[["app-vertical-bar-chart"]],inputs:{title:"title",comparedConditions:"comparedConditions",annotationData:"annotationData"},standalone:!0,features:[y],decls:6,vars:4,consts:[[2,"display","flex","flex-direction","column","gap","10px"],["mat-raised-button","",3,"click"],[2,"max-width","calc(100vw - 500px)","overflow","auto"],[3,"data","layout","updateOnlyWithRevision","revision"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"div")(2,"button",1),C("click",function(){return r.toggleOtherConditions()}),l(3,"Other Conditions"),s()(),a(4,"div",2),S(5,"plotly-plot",3),s()()),n&2&&(c(5),m("data",r.graphData)("layout",r.graphLayout)("updateOnlyWithRevision",!0)("revision",r.revision))},dependencies:[ut,he,Yt]});let t=e;return t})();var di=(t,e)=>[t,e];function hi(t,e){if(t&1&&S(0,"app-vertical-bar-chart",1),t&2){let o=h();m("title",o.searchResult.condition_A+"-"+o.searchResult.condition_B+" "+o.searchResult.gene_name+"("+o.searchResult.primary_id+")")("comparedConditions",At(3,di,o.searchResult.condition_A,o.searchResult.condition_B))("annotationData",o.searchResult.searched_data)}}var ve=(()=>{let e=class e{set searchResult(i){this._searchResult=i}get searchResult(){return this._searchResult}constructor(i,n){this.web=i,this.fb=n,this._searchResult=void 0,this.relatedResultSearched=void 0,this.relatedResultCopyNumber=void 0,this.analysisGroup=void 0,this.analysisGroupDF=void 0,this.analysisGroupDFColumns=[],this.analysisGroupSearched=void 0,this.analysisGroupSearchedColumns=[],this.sampleAnnotations=void 0,this.comparisonMatrix=void 0}getSAIndex(i){return this.analysisGroupSearchedColumns?this.analysisGroupSearchedColumns.indexOf(i):-1}getCMIndex(i){return this.analysisGroupDFColumns?this.analysisGroupDFColumns.indexOf(i):-1}};e.\u0275fac=function(n){return new(n||e)(p(Q),p(P))},e.\u0275cmp=b({type:e,selectors:[["app-selected-result-view"]],inputs:{searchResult:"searchResult"},standalone:!0,features:[y],decls:2,vars:1,consts:[[2,"display","flex","flex-direction","row","justify-content","center"],[3,"title","comparedConditions","annotationData"]],template:function(n,r){n&1&&(a(0,"div",0),d(1,hi,1,6,"app-vertical-bar-chart",1),s()),n&2&&(c(),f(r.searchResult.searched_data?1:-1))},dependencies:[Se]});let t=e;return t})();function mi(t,e){if(t&1&&(a(0,"div"),S(1,"app-selected-result-view",5),s()),t&2){let o=h();c(),m("searchResult",o.selectedSearchResult)}}function pi(t,e){if(t&1){let o=M();a(0,"app-search-result-list",6),C("selected",function(n){w(o);let r=h();return x(r.handleSelectedResult(n))})("sortChange",function(n){w(o);let r=h();return x(r.handleSort(n))}),s(),a(1,"mat-paginator",7,0),C("page",function(n){w(o);let r=h();return x(r.handlePageEvent(n))}),l(3,"> "),s()}if(t&2){let o=h();m("searchResultQuery",o.searchResultQuery),c(),m("length",o.searchResultQuery.count)("pageSize",o.pageSize)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",o.pageIndex)}}var we=(()=>{let e=class e{set searchSession(i){this._searchSession=i,this.titleService.setTitle(`Search - ${i.search_term}`),this.searchResultQuery=void 0,i&&!i.failed&&this.web.getSearchResults(i.id,this.pageSize,0,"df",this.currentSort?.active,this.currentSort?.direction).subscribe(n=>{this.searchResultQuery=n})}get searchSession(){return this._searchSession}constructor(i,n,r){this.titleService=i,this.web=n,this.fb=r,this._searchSession=void 0,this.searchResultQuery=void 0,this.pageSize=10,this.pageIndex=0,this.selectedSearchResult=void 0,this.form=this.fb.group({searchTerm:new J("")}),this.currentSort=void 0,this.form.controls.searchTerm.valueChanges.subscribe(u=>{!this.searchSession.failed&&u&&this.web.getSearchResults(this.searchSession.id,this.pageSize,0,"df",this.currentSort?.active,this.currentSort?.direction,u).subscribe(g=>{this.searchResultQuery=g})})}handlePageEvent(i){let n=i.pageIndex*i.pageSize;this.pageSize=i.pageSize,this.form.controls.searchTerm.value?this.web.getSearchResults(this.searchSession.id,this.pageSize,n,"df",this.currentSort?.active,this.currentSort?.direction,this.form.controls.searchTerm.value).subscribe(r=>{this.searchResultQuery=r}):this.web.getSearchResults(this.searchSession.id,this.pageSize,n,"df",this.currentSort?.active,this.currentSort?.direction).subscribe(r=>{this.searchResultQuery=r})}handleSelectedResult(i){i&&(this.selectedSearchResult=i)}handleSort(i){this.currentSort=i,this.searchResultQuery&&(this.form.controls.searchTerm.value?this.web.getSearchResults(this.searchSession.id,this.pageSize,0,"df",i.active,i.direction,this.form.controls.searchTerm.value).subscribe(n=>{this.searchResultQuery=n}):this.web.getSearchResults(this.searchSession.id,this.pageSize,0,"df",i.active,i.direction).subscribe(n=>{this.searchResultQuery=n}))}};e.\u0275fac=function(n){return new(n||e)(p(Qt),p(Q),p(P))},e.\u0275cmp=b({type:e,selectors:[["app-search-session-view"]],inputs:{searchSession:"searchSession"},standalone:!0,features:[y],decls:9,vars:3,consts:[["paginator",""],[2,"display","flex","flex-direction","row","justify-content","center"],[2,"width","100%","padding","50px"],[3,"formGroup"],["matInput","","formControlName","searchTerm","type","search","placeholder","Search Term"],[3,"searchResult"],[3,"selected","sortChange","searchResultQuery"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"]],template:function(n,r){n&1&&(a(0,"div",1)(1,"div",2),d(2,mi,2,1,"div"),a(3,"form",3)(4,"mat-form-field"),S(5,"input",4),a(6,"mat-label"),l(7,"Filter Results Term"),s()()(),d(8,pi,4,6),s()()),n&2&&(c(2),f(r.selectedSearchResult?2:-1),c(),m("formGroup",r.form),c(5),f(r.searchResultQuery?8:-1))},dependencies:[_e,rt,et,X,W,q,K,Z,tt,nt,it,ve,ot],styles:[".selected-result[_ngcontent-%COMP%]{width:500px;border-left:1px solid #000000;display:flex;flex-direction:column;height:calc(100vh - 148px)}"]});let t=e;return t})();function ui(t,e){if(t&1){let o=M();a(0,"div",14)(1,"app-search-session-list",15),C("searchSessionSelected",function(n){w(o);let r=h(3);return x(r.onSearchSessionSelected(n))}),s()(),a(2,"mat-paginator",16,0),C("page",function(n){w(o);let r=h(3);return x(r.handlePageEvent(n))}),s()}if(t&2){let o=h(3);c(),m("searchSessionQuery",o.searchSessionQuery),c(),m("length",o.searchSessionQuery.count)("pageSize",o.pageSize)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",o.pageIndex)}}function _i(t,e){t&1&&(a(0,"p"),l(1,"No search sessions found."),s())}function fi(t,e){if(t&1&&d(0,ui,4,6)(1,_i,2,0,"p"),t&2){let o=h(2);f(o.searchSessionQuery.count>0?0:1)}}function Si(t,e){if(t&1&&(a(0,"div",2)(1,"mat-toolbar")(2,"mat-toolbar-row")(3,"span"),l(4,"Search Session"),s()()(),a(5,"div",10)(6,"form",11)(7,"mat-form-field",12),S(8,"input",13),a(9,"mat-label"),l(10,"Find Search Sessions"),s()()(),d(11,fi,2,1),s()()),t&2){let o=h();c(6),m("formGroup",o.form),c(5),f(o.searchSessionQuery?11:-1)}}function Ci(t,e){if(t&1&&(a(0,"a",5)(1,"span",17)(2,"b"),l(3),s()()()),t&2){let o=h();U("href","/#/search-session/",o.searchSession.id,"",Y),c(3),k(o.searchSession.search_term)}}function gi(t,e){t&1&&l(0," Select Search Session ")}function vi(t,e){if(t&1){let o=M();a(0,"button",18),C("click",function(){w(o);let n=h();return x(n.deleteSearchSession(n.searchSession.id))}),a(1,"mat-icon"),l(2,"delete"),s()()}}function wi(t,e){if(t&1&&S(0,"app-search-session-view",9),t&2){let o=h();m("searchSession",o.searchSession)}}var ft=(()=>{let e=class e{set searchID(i){i&&(this._searchID=i,this.web.getSearchSession(i).subscribe(n=>{this._searchSession=n}))}get searchID(){return this._searchID}set searchSession(i){this._searchSession=i}get searchSession(){return this._searchSession}constructor(i,n,r,u){this.router=i,this.web=n,this.fb=r,this.accounts=u,this.sidebarOpen=!0,this._searchSession=void 0,this._searchID=0,this.searchSessionQuery=void 0,this.pageSize=10,this.pageIndex=0,this.form=this.fb.group({search:new J("")}),this.web.getSearchSessions(void 0,this.pageSize,0,void 0,this.accounts.loggedIn,this.web.searchSessionID).subscribe(g=>{this.searchSessionQuery=g})}handlePageEvent(i){this.pageSize=i.pageSize;let n=i.pageIndex*i.pageSize;this.form.controls.search.value?this.web.getSearchSessions(void 0,this.pageSize,n,this.form.controls.search.value,this.accounts.loggedIn,this.web.searchSessionID).subscribe(r=>{this.searchSessionQuery=r}):this.web.getSearchSessions(void 0,this.pageSize,n,void 0,this.accounts.loggedIn,this.web.searchSessionID).subscribe(r=>{this.searchSessionQuery=r})}deleteSearchSession(i){this.web.deleteSearchSession(i).subscribe(n=>{this.searchSession=void 0,this.searchSessionQuery?.results?.splice(this.searchSessionQuery.results.findIndex(r=>r.id===i),1)})}toggleSidePanel(){this.sidebarOpen=!this.sidebarOpen}onSearchSessionSelected(i){this.router.navigate(["/search-session",i.id])}};e.\u0275fac=function(n){return new(n||e)(p(Ht),p(Q),p(P),p(at))},e.\u0275cmp=b({type:e,selectors:[["app-search-session"]],inputs:{searchID:"searchID"},standalone:!0,features:[y],decls:15,vars:4,consts:[["paginator",""],[2,"display","flex","flex-direction","row"],[1,"search-session-side-nav"],[1,"search-session-main-content"],["mat-icon-button","",3,"click"],[3,"href"],[1,"spacer"],["mat-icon-button","","color","accent"],[2,"height","calc(100vh - 64px*2 - 20px)","overflow","auto"],[3,"searchSession"],[2,"display","flex","flex-direction","column","padding","5px"],[3,"formGroup"],[2,"width","100%"],["matInput","","formControlName","search","type","search","placeholder","Find Search Session"],[2,"height","calc(100vh - 64px*4 - 20px)","overflow","auto"],[3,"searchSessionSelected","searchSessionQuery"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"],[2,"color","#ba0000"],["mat-icon-button","","color","accent",3,"click"]],template:function(n,r){n&1&&(a(0,"div",1),d(1,Si,12,2,"div",2),a(2,"div",3)(3,"mat-toolbar")(4,"mat-toolbar-row")(5,"button",4),C("click",function(){return r.toggleSidePanel()}),a(6,"mat-icon"),l(7,"menu"),s()(),a(8,"div"),d(9,Ci,4,3,"a",5)(10,gi,1,0),s(),S(11,"div",6),d(12,vi,3,0,"button",7),s()(),a(13,"div",8),d(14,wi,1,1,"app-search-session-view",9),s()()()),n&2&&(c(),f(r.sidebarOpen?1:-1),c(8),f(r.searchSession?9:10),c(3),f(r.searchSession?12:-1),c(2),f(r.searchSession?14:-1))},dependencies:[nt,ot,it,et,X,W,q,K,Z,tt,$t,Ut,rt,te,Zt,me,we],styles:[".search-session-side-nav[_ngcontent-%COMP%]{width:300px;border-right:1px solid #000000;display:flex;flex-direction:column;height:calc(100vh - 64px)}.search-session-main-content[_ngcontent-%COMP%]{flex:1}"]});let t=e;return t})();var xi=[{path:"",component:ft},{path:":searchID",component:ft}],Bn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=dt({type:e}),e.\u0275inj=lt({imports:[Pt,zt.forChild(xi)]});let t=e;return t})();export{Bn as SearchSessionModule};
