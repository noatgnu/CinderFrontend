import{b as Jt,c as Xt,d as Zt,e as te,f as ee,g as ie,h as ne,i as oe,j as re,k as ae,l as ge,m as se,n as dt}from"./chunk-6MKNUCXW.js";import"./chunk-FQN533I2.js";import"./chunk-FFURY27C.js";import{a as qt,b as Kt}from"./chunk-2AKSZP5T.js";import{a as $t,f as Yt,g as Ut,i as nt}from"./chunk-CZIDL4X6.js";import{Aa as it,Ca as Q,Da as Wt,I as Nt,J as zt,K as jt,ha as Y,ka as U,l as Pt,la as W,na as q,oa as K,qa as J,r as kt,ra as X,sa as k,u as Qt,ua as Z,v as Ht,wa as tt,za as et}from"./chunk-XE6BBNL2.js";import{h as Vt,k as Ft,o as Ot}from"./chunk-M5DCLWJD.js";import{c as P,d as A,f as _,g as y,h as j,i as M,j as Bt,k as Gt}from"./chunk-AESYL7IM.js";import{Ab as vt,Bb as xt,Cb as a,Db as s,Ea as gt,Eb as S,Fa as F,Fb as D,G as _t,Gb as R,Ib as I,Jc as At,Kc as Lt,Lb as C,Nb as h,Ob as wt,Pb as bt,Rb as $,Tb as yt,Ub as Dt,Vb as Rt,Xa as G,Xb as l,Yb as O,Za as c,Zb as T,_a as p,ac as b,cc as It,dc as Tt,e as Ce,ea as B,ec as Mt,fa as rt,ha as ft,m as ot,nb as st,nc as Et,oa as w,p as ut,pa as at,qa as St,rb as d,rc as z,sb as ct,tb as m,va as Ct,vb as lt,wa as v,xa as x,yb as f}from"./chunk-FYJXFM5Q.js";var ve=(t,e)=>e.id;function xe(t,e){if(t&1){let o=I();a(0,"mat-list-option",1),C("click",function(){let n=v(o).$implicit,r=h(2);return x(r.searchSessionSelected.emit(n))}),a(1,"div")(2,"div")(3,"b"),l(4),s()(),a(5,"small"),l(6),Tt(7,"date"),s()()(),S(8,"mat-divider")}if(t&2){let o=e.$implicit;m("value",o)("disabled",o.failed),c(4),O(o.search_term),c(2),O(Mt(7,4,o.created_at,"short"))}}function we(t,e){if(t&1&&(a(0,"mat-selection-list",0),vt(1,xe,9,7,null,null,ve),s()),t&2){let o=h();m("multiple",!1),c(),xt(o.searchSessionQuery.results)}}var ce=(()=>{let e=class e{set searchSessionQuery(i){this._searchSessionQuery=i}get searchSessionQuery(){return this._searchSessionQuery}constructor(){this._searchSessionQuery=void 0,this.searchSessionSelected=new F}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=w({type:e,selectors:[["app-search-session-list"]],inputs:{searchSessionQuery:"searchSessionQuery"},outputs:{searchSessionSelected:"searchSessionSelected"},standalone:!0,features:[b],decls:1,vars:1,consts:[[3,"multiple"],[3,"click","value","disabled"]],template:function(n,r){n&1&&d(0,we,3,1,"mat-selection-list",0),n&2&&f(r.searchSessionQuery?0:-1)},dependencies:[$t,Yt,Ut,At]});let t=e;return t})();var be=["mat-sort-header",""],ye=["*"];function De(t,e){if(t&1){let o=I();a(0,"div",2),C("@arrowPosition.start",function(){v(o);let n=h();return x(n._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){v(o);let n=h();return x(n._disableViewStateAnimation=!1)}),S(1,"div",3),a(2,"div",4),S(3,"div",5)(4,"div",6)(5,"div",7),s()()}if(t&2){let o=h();m("@arrowOpacity",o._getArrowViewState())("@arrowPosition",o._getArrowViewState())("@allowChildren",o._getArrowDirectionState()),c(2),m("@indicator",o._getArrowDirectionState()),c(),m("@leftPointer",o._getArrowDirectionState()),c(),m("@rightPointer",o._getArrowDirectionState())}}var le=new ft("MAT_SORT_DEFAULT_OPTIONS"),ht=(()=>{let e=class e{get direction(){return this._direction}set direction(i){this._direction=i}constructor(i){this._defaultOptions=i,this._initializedStream=new ut(1),this.sortables=new Map,this._stateChanges=new ot,this.start="asc",this._direction="",this.disabled=!1,this.sortChange=new F,this.initialized=this._initializedStream}register(i){this.sortables.set(i.id,i)}deregister(i){this.sortables.delete(i.id)}sort(i){this.active!=i.id?(this.active=i.id,this.direction=i.start?i.start:this.start):this.direction=this.getNextSortDirection(i),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(i){if(!i)return"";let n=i?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=Re(i.start||this.start,n),u=r.indexOf(this.direction)+1;return u>=r.length&&(u=0),r[u]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}};e.\u0275fac=function(n){return new(n||e)(p(le,8))},e.\u0275dir=St({type:e,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",z],disabled:[2,"matSortDisabled","disabled",z]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],standalone:!0,features:[st,Ct]});let t=e;return t})();function Re(t,e){let o=["asc","desc"];return t=="desc"&&o.reverse(),e||o.push(""),o}var V=Ht.ENTERING+" "+Qt.STANDARD_CURVE,H={indicator:P("indicator",[y("active-asc, asc",_({transform:"translateY(0px)"})),y("active-desc, desc",_({transform:"translateY(10px)"})),M("active-asc <=> active-desc",A(V))]),leftPointer:P("leftPointer",[y("active-asc, asc",_({transform:"rotate(-45deg)"})),y("active-desc, desc",_({transform:"rotate(45deg)"})),M("active-asc <=> active-desc",A(V))]),rightPointer:P("rightPointer",[y("active-asc, asc",_({transform:"rotate(45deg)"})),y("active-desc, desc",_({transform:"rotate(-45deg)"})),M("active-asc <=> active-desc",A(V))]),arrowOpacity:P("arrowOpacity",[y("desc-to-active, asc-to-active, active",_({opacity:1})),y("desc-to-hint, asc-to-hint, hint",_({opacity:.54})),y("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",_({opacity:0})),M("* => asc, * => desc, * => active, * => hint, * => void",A("0ms")),M("* <=> *",A(V))]),arrowPosition:P("arrowPosition",[M("* => desc-to-hint, * => desc-to-active",A(V,j([_({transform:"translateY(-25%)"}),_({transform:"translateY(0)"})]))),M("* => hint-to-desc, * => active-to-desc",A(V,j([_({transform:"translateY(0)"}),_({transform:"translateY(25%)"})]))),M("* => asc-to-hint, * => asc-to-active",A(V,j([_({transform:"translateY(25%)"}),_({transform:"translateY(0)"})]))),M("* => hint-to-asc, * => active-to-asc",A(V,j([_({transform:"translateY(0)"}),_({transform:"translateY(-25%)"})]))),y("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",_({transform:"translateY(0)"})),y("hint-to-desc, active-to-desc, desc",_({transform:"translateY(-25%)"})),y("hint-to-asc, active-to-asc, asc",_({transform:"translateY(25%)"}))]),allowChildren:P("allowChildren",[M("* <=> *",[Gt("@*",Bt(),{optional:!0})])])},Ie=(()=>{let e=class e{constructor(){this.changes=new ot}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var de=(()=>{let e=class e{get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(i){this._updateSortActionDescription(i)}constructor(i,n,r,u,E,N,g,pt){this._intl=i,this._changeDetectorRef=n,this._sort=r,this._columnDef=u,this._focusMonitor=E,this._elementRef=N,this._ariaDescriber=g,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this.disabled=!1,this._sortActionDescription="Sort",pt?.arrowPosition&&(this.arrowPosition=pt?.arrowPosition),this._handleStateChanges()}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{let n=!!i;n!==this._showIndicatorHint&&(this._setIndicatorHintVisible(n),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_setIndicatorHintVisible(i){this._isDisabled()&&i||(this._showIndicatorHint=i,this._isSorted()||(this._updateArrowDirection(),this._showIndicatorHint?this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"hint"}):this._setAnimationTransitionState({fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(i){this._viewState=i||{},this._disableViewStateAnimation&&(this._viewState={toState:i.toState})}_toggleOnInteraction(){this._sort.sort(this),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(i){!this._isDisabled()&&(i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){let i=this._viewState.fromState;return(i?`${i}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(i){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,i)),this._sortActionDescription=i}_handleStateChanges(){this._rerenderSubscription=_t(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&this._viewState.toState==="active"&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}};e.\u0275fac=function(n){return new(n||e)(p(Ie),p(Et),p(ht,8),p("MAT_SORT_HEADER_COLUMN_DEF",8),p(kt),p(gt),p(Pt,8),p(le,8))},e.\u0275cmp=w({type:e,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(n,r){n&1&&C("click",function(){return r._handleClick()})("keydown",function(E){return r._handleKeydown(E)})("mouseenter",function(){return r._setIndicatorHintVisible(!0)})("mouseleave",function(){return r._setIndicatorHintVisible(!1)}),n&2&&(ct("aria-sort",r._getAriaSortAttribute()),lt("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",z],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",z]},exportAs:["matSortHeader"],standalone:!0,features:[st,b],attrs:be,ngContentSelectors:ye,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(n,r){n&1&&(wt(),a(0,"div",0)(1,"div",1),bt(2),s(),d(3,De,6,6,"div",2),s()),n&2&&(lt("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before"),ct("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),c(3),f(r._renderArrow()?3:-1))},styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[H.indicator,H.leftPointer,H.rightPointer,H.arrowOpacity,H.arrowPosition,H.allowChildren]},changeDetection:0});let t=e;return t})();var Te=["table"];function Me(t,e){t&1&&(a(0,"div",1)(1,"h2"),l(2,"No results found"),s()())}function Ee(t,e){t&1&&(a(0,"th",20),l(1," Primary ID "),s())}function Ae(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.primary_id," ")}}function Le(t,e){t&1&&(a(0,"th",20),l(1," UniProt Accession ID "),s())}function Ve(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.uniprot_id," ")}}function Fe(t,e){t&1&&(a(0,"th",20),l(1," Gene name "),s())}function Oe(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.gene_name," ")}}function Pe(t,e){t&1&&(a(0,"th",22),l(1," Log2 FC "),s())}function ke(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.log2_fc," ")}}function Qe(t,e){t&1&&(a(0,"th",22),l(1," -Log10(P-Value) "),s())}function He(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.log10_p," ")}}function Ne(t,e){t&1&&(a(0,"th",20),l(1," Comparison "),s())}function ze(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.comparison_label," ")}}function je(t,e){t&1&&(a(0,"th",20),l(1," Search term "),s())}function Be(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.search_term," ")}}function Ge(t,e){t&1&&(a(0,"th",20),l(1," Condition A "),s())}function $e(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.condition_A,"")}}function Ye(t,e){t&1&&(a(0,"th",20),l(1," Condition B "),s())}function Ue(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.condition_B,"")}}function We(t,e){t&1&&(a(0,"th",20),l(1," File "),s())}function qe(t,e){if(t&1&&(a(0,"td",21),l(1),s()),t&2){let o=e.$implicit;c(),T(" ",o.file.name," ")}}function Ke(t,e){t&1&&(a(0,"th",20),l(1," Analysis Group "),s())}function Je(t,e){if(t&1&&(a(0,"td",21)(1,"a",23),l(2),s()()),t&2){let o=e.$implicit;c(),$("href","/#/analysis-group/",o.analysis_group.id,"",G),c(),O(o.analysis_group.name)}}function Xe(t,e){t&1&&S(0,"tr",24)}function Ze(t,e){if(t&1){let o=I();a(0,"tr",25),C("click",function(){let n=v(o).$implicit,r=h(3);return x(r.handleSelection(n))}),s()}}function ti(t,e){if(t&1){let o=I();a(0,"table",3,0),C("matSortChange",function(n){v(o);let r=h(2);return x(r.handleSortChange(n))}),D(2,4),d(3,Ee,2,0,"th",5)(4,Ae,2,1,"td",6),R(),D(5,7),d(6,Le,2,0,"th",5)(7,Ve,2,1,"td",6),R(),D(8,8),d(9,Fe,2,0,"th",5)(10,Oe,2,1,"td",6),R(),D(11,9),d(12,Pe,2,0,"th",10)(13,ke,2,1,"td",6),R(),D(14,11),d(15,Qe,2,0,"th",10)(16,He,2,1,"td",6),R(),D(17,12),d(18,Ne,2,0,"th",5)(19,ze,2,1,"td",6),R(),D(20,13),d(21,je,2,0,"th",5)(22,Be,2,1,"td",6),R(),D(23,14),d(24,Ge,2,0,"th",5)(25,$e,2,1,"td",6),R(),D(26,15),d(27,Ye,2,0,"th",5)(28,Ue,2,1,"td",6),R(),D(29,16),d(30,We,2,0,"th",5)(31,qe,2,1,"td",6),R(),D(32,17),d(33,Ke,2,0,"th",5)(34,Je,3,3,"td",6),R(),d(35,Xe,1,0,"tr",18)(36,Ze,1,0,"tr",19),s()}if(t&2){let o=h(2);m("dataSource",o.searchResultQuery.results),c(35),m("matHeaderRowDef",o.displayedColumns),c(),m("matRowDefColumns",o.displayedColumns)}}function ei(t,e){if(t&1&&d(0,Me,3,0,"div",1)(1,ti,37,3,"table",2),t&2){let o=h();f(o.searchResultQuery.results.length===0?0:1)}}var he=(()=>{let e=class e{set searchResultQuery(i){this._searchResultQuery=i,this.table&&this.table.renderRows()}get searchResultQuery(){return this._searchResultQuery}constructor(){this.displayedColumns=["primary_id","gene_name","uniprot_id","search_term","condition_A","condition_B","log2_fc","log10_p","file","comparison_label","analysis_group"],this._searchResultQuery=void 0,this.selected=new F,this.sortChange=new F}handleSelection(i){this.selected.emit(i)}handleSortChange(i){this.sortChange.emit(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=w({type:e,selectors:[["app-search-result-list"]],viewQuery:function(n,r){if(n&1&&yt(Te,5),n&2){let u;Dt(u=Rt())&&(r.table=u.first)}},inputs:{searchResultQuery:"searchResultQuery"},outputs:{selected:"selected",sortChange:"sortChange"},standalone:!0,features:[b],decls:1,vars:1,consts:[["table",""],[1,"no-results"],["mat-table","","matSort","",3,"dataSource"],["mat-table","","matSort","",3,"matSortChange","dataSource"],["matColumnDef","primary_id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","uniprot_id"],["matColumnDef","gene_name"],["matColumnDef","log2_fc"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","log10_p"],["matColumnDef","comparison_label"],["matColumnDef","search_term"],["matColumnDef","condition_A"],["matColumnDef","condition_B"],["matColumnDef","file"],["matColumnDef","analysis_group"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],["target","_blank",3,"href"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(n,r){n&1&&d(0,ei,2,1),n&2&&f(r.searchResultQuery?0:-1)},dependencies:[Jt,te,ee,Xt,ie,Zt,re,ae,oe,ne,ht,de],styles:[".mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%]{border-color:currentColor}"]});let t=e;return t})();var ni=Ce(ge());var me=(()=>{let e=class e{constructor(){this.defaultColorList=["#fd7f6f","#7eb0d5","#b2e061","#bd7ebe","#ffb55a","#ffee65","#beb9db","#fdcce5","#8bd3c7"]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();dt.plotlyjs=ni;var pe=(()=>{let e=class e{set annotationData(i){this._annotationData=i,this.currentColor=0,this.drawVerticalBarChart()}get annotationData(){return this._annotationData}constructor(i){this.graph=i,this.showOtherConditions=!1,this.title="",this.comparedConditions=[],this._annotationData=[],this.graphData=[],this.graphLayout={xaxis:{title:"Sample",tickfont:{size:17,color:"black"},tickvals:[],ticktext:[]},yaxis:{title:"Value"},margin:{r:40,l:100,b:120,t:100},width:1e3},this.barSize=50,this.revision=0,this.currentColor=0}drawVerticalBarChart(){let i=this.annotationData,n={},r=[],u=[];for(let g of i)n[g.Condition]||(n[g.Condition]={x:[],y:[],type:"bar",marker:{color:this.graph.defaultColorList[this.currentColor]},showlegend:!1,name:g.Condition},this.currentColor+=1,this.currentColor>=this.graph.defaultColorList.length&&(this.currentColor=0)),n[g.Condition].y.push(g.Value),n[g.Condition].x.push(g.Sample);let E=[],N=0;for(let g in n)!this.showOtherConditions&&this.comparedConditions.length>0&&!this.comparedConditions.includes(g)||(N=N+n[g].x.length,u.push(n[g].x[Math.round(n[g].x.length/2)-1]),r.push(g),E.push(n[g]));this.graphData=E,this.graphLayout.xaxis.tickvals=u,this.graphLayout.xaxis.ticktext=r,this.title&&(this.graphLayout.title=this.title),this.graphLayout.width=this.graphLayout.margin.l+this.graphLayout.margin.r+this.barSize*N,this.revision+=1}toggleOtherConditions(){this.showOtherConditions=!this.showOtherConditions,this.drawVerticalBarChart()}};e.\u0275fac=function(n){return new(n||e)(p(me))},e.\u0275cmp=w({type:e,selectors:[["app-vertical-bar-chart"]],inputs:{title:"title",comparedConditions:"comparedConditions",annotationData:"annotationData"},standalone:!0,features:[b],decls:6,vars:4,consts:[[2,"display","flex","flex-direction","column","gap","10px"],["mat-raised-button","",3,"click"],[2,"max-width","calc(100vw - 500px)","overflow","auto"],[3,"data","layout","updateOnlyWithRevision","revision"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"div")(2,"button",1),C("click",function(){return r.toggleOtherConditions()}),l(3,"Other Conditions"),s()(),a(4,"div",2),S(5,"plotly-plot",3),s()()),n&2&&(c(5),m("data",r.graphData)("layout",r.graphLayout)("updateOnlyWithRevision",!0)("revision",r.revision))},dependencies:[dt,se,zt]});let t=e;return t})();var oi=(t,e)=>[t,e];function ri(t,e){if(t&1&&S(0,"app-vertical-bar-chart",1),t&2){let o=h();m("title",o.searchResult.condition_A+"-"+o.searchResult.condition_B+" "+o.searchResult.gene_name+"("+o.searchResult.primary_id+")")("comparedConditions",It(3,oi,o.searchResult.condition_A,o.searchResult.condition_B))("annotationData",o.searchResult.searched_data)}}var fe=(()=>{let e=class e{set searchResult(i){this._searchResult=i}get searchResult(){return this._searchResult}constructor(i,n){this.web=i,this.fb=n,this._searchResult=void 0,this.relatedResultSearched=void 0,this.relatedResultCopyNumber=void 0,this.analysisGroup=void 0,this.analysisGroupDF=void 0,this.analysisGroupDFColumns=[],this.analysisGroupSearched=void 0,this.analysisGroupSearchedColumns=[],this.sampleAnnotations=void 0,this.comparisonMatrix=void 0}getSAIndex(i){return this.analysisGroupSearchedColumns?this.analysisGroupSearchedColumns.indexOf(i):-1}getCMIndex(i){return this.analysisGroupDFColumns?this.analysisGroupDFColumns.indexOf(i):-1}};e.\u0275fac=function(n){return new(n||e)(p(Q),p(k))},e.\u0275cmp=w({type:e,selectors:[["app-selected-result-view"]],inputs:{searchResult:"searchResult"},standalone:!0,features:[b],decls:2,vars:1,consts:[[2,"display","flex","flex-direction","row","justify-content","center"],[3,"title","comparedConditions","annotationData"]],template:function(n,r){n&1&&(a(0,"div",0),d(1,ri,1,6,"app-vertical-bar-chart",1),s()),n&2&&(c(),f(r.searchResult.searched_data?1:-1))},dependencies:[pe]});let t=e;return t})();function ai(t,e){if(t&1&&(a(0,"div"),S(1,"app-selected-result-view",5),s()),t&2){let o=h();c(),m("searchResult",o.selectedSearchResult)}}function si(t,e){if(t&1){let o=I();a(0,"app-search-result-list",6),C("selected",function(n){v(o);let r=h();return x(r.handleSelectedResult(n))})("sortChange",function(n){v(o);let r=h();return x(r.handleSort(n))}),s(),a(1,"mat-paginator",7,0),C("page",function(n){v(o);let r=h();return x(r.handlePageEvent(n))}),l(3,"> "),s()}if(t&2){let o=h();m("searchResultQuery",o.searchResultQuery),c(),m("length",o.searchResultQuery.count)("pageSize",o.pageSize)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",o.pageIndex)}}var Se=(()=>{let e=class e{set searchSession(i){this._searchSession=i,this.titleService.setTitle(`Search - ${i.search_term}`),this.searchResultQuery=void 0,i&&!i.failed&&this.web.getSearchResults(i.id,this.pageSize,0,"df",this.currentSort?.active,this.currentSort?.direction).subscribe(n=>{this.searchResultQuery=n})}get searchSession(){return this._searchSession}constructor(i,n,r){this.titleService=i,this.web=n,this.fb=r,this._searchSession=void 0,this.searchResultQuery=void 0,this.pageSize=10,this.pageIndex=0,this.selectedSearchResult=void 0,this.form=this.fb.group({searchTerm:new q("")}),this.currentSort=void 0,this.form.controls.searchTerm.valueChanges.subscribe(u=>{!this.searchSession.failed&&u&&this.web.getSearchResults(this.searchSession.id,this.pageSize,0,"df",this.currentSort?.active,this.currentSort?.direction,u).subscribe(E=>{this.searchResultQuery=E})})}handlePageEvent(i){let n=i.pageIndex*i.pageSize;this.pageSize=i.pageSize,this.form.controls.searchTerm.value?this.web.getSearchResults(this.searchSession.id,this.pageSize,n,"df",this.currentSort?.active,this.currentSort?.direction,this.form.controls.searchTerm.value).subscribe(r=>{this.searchResultQuery=r}):this.web.getSearchResults(this.searchSession.id,this.pageSize,n,"df",this.currentSort?.active,this.currentSort?.direction).subscribe(r=>{this.searchResultQuery=r})}handleSelectedResult(i){i&&(this.selectedSearchResult=i)}handleSort(i){this.currentSort=i,this.searchResultQuery&&(this.form.controls.searchTerm.value?this.web.getSearchResults(this.searchSession.id,this.pageSize,0,"df",i.active,i.direction,this.form.controls.searchTerm.value).subscribe(n=>{this.searchResultQuery=n}):this.web.getSearchResults(this.searchSession.id,this.pageSize,0,"df",i.active,i.direction).subscribe(n=>{this.searchResultQuery=n}))}};e.\u0275fac=function(n){return new(n||e)(p(Vt),p(Q),p(k))},e.\u0275cmp=w({type:e,selectors:[["app-search-session-view"]],inputs:{searchSession:"searchSession"},standalone:!0,features:[b],decls:9,vars:3,consts:[["paginator",""],[2,"display","flex","flex-direction","row","justify-content","center"],[2,"width","100%","padding","50px"],[3,"formGroup"],["matInput","","formControlName","searchTerm","type","search","placeholder","Search Term"],[3,"searchResult"],[3,"selected","sortChange","searchResultQuery"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"]],template:function(n,r){n&1&&(a(0,"div",1)(1,"div",2),d(2,ai,2,1,"div"),a(3,"form",3)(4,"mat-form-field"),S(5,"input",4),a(6,"mat-label"),l(7,"Filter Results Term"),s()()(),d(8,si,4,6),s()()),n&2&&(c(2),f(r.selectedSearchResult?2:-1),c(),m("formGroup",r.form),c(5),f(r.searchResultQuery?8:-1))},dependencies:[he,nt,Z,K,Y,U,W,J,X,et,tt,fe,it],styles:[".selected-result[_ngcontent-%COMP%]{width:500px;border-left:1px solid #000000;display:flex;flex-direction:column;height:calc(100vh - 148px)}"]});let t=e;return t})();function ci(t,e){if(t&1){let o=I();a(0,"div",14)(1,"app-search-session-list",15),C("searchSessionSelected",function(n){v(o);let r=h(3);return x(r.onSearchSessionSelected(n))}),s()(),a(2,"mat-paginator",16,0),C("page",function(n){v(o);let r=h(3);return x(r.handlePageEvent(n))}),s()}if(t&2){let o=h(3);c(),m("searchSessionQuery",o.searchSessionQuery),c(),m("length",o.searchSessionQuery.count)("pageSize",o.pageSize)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",o.pageIndex)}}function li(t,e){t&1&&(a(0,"p"),l(1,"No search sessions found."),s())}function di(t,e){if(t&1&&d(0,ci,4,6)(1,li,2,0,"p"),t&2){let o=h(2);f(o.searchSessionQuery.count>0?0:1)}}function hi(t,e){if(t&1&&(a(0,"div",2)(1,"mat-toolbar")(2,"mat-toolbar-row")(3,"span"),l(4,"Search Session"),s()()(),a(5,"div",10)(6,"form",11)(7,"mat-form-field",12),S(8,"input",13),a(9,"mat-label"),l(10,"Find Search Sessions"),s()()(),d(11,di,2,1),s()()),t&2){let o=h();c(6),m("formGroup",o.form),c(5),f(o.searchSessionQuery?11:-1)}}function mi(t,e){if(t&1&&(a(0,"a",5)(1,"span",17)(2,"b"),l(3),s()()()),t&2){let o=h();$("href","/#/search-session/",o.searchSession.id,"",G),c(3),O(o.searchSession.search_term)}}function pi(t,e){t&1&&l(0," Select Search Session ")}function ui(t,e){if(t&1){let o=I();a(0,"button",18),C("click",function(){v(o);let n=h();return x(n.deleteSearchSession(n.searchSession.id))}),a(1,"mat-icon"),l(2,"delete"),s()()}}function _i(t,e){if(t&1&&S(0,"app-search-session-view",9),t&2){let o=h();m("searchSession",o.searchSession)}}var mt=(()=>{let e=class e{set searchID(i){i&&(this._searchID=i,this.web.getSearchSession(i).subscribe(n=>{this._searchSession=n}))}get searchID(){return this._searchID}set searchSession(i){this._searchSession=i}get searchSession(){return this._searchSession}constructor(i,n,r,u){this.router=i,this.web=n,this.fb=r,this.accounts=u,this.sidebarOpen=!0,this._searchSession=void 0,this._searchID=0,this.searchSessionQuery=void 0,this.pageSize=10,this.pageIndex=0,this.form=this.fb.group({search:new q("")}),this.web.getSearchSessions(void 0,this.pageSize,0,void 0,this.accounts.loggedIn,this.web.searchSessionID).subscribe(E=>{this.searchSessionQuery=E})}handlePageEvent(i){this.pageSize=i.pageSize;let n=i.pageIndex*i.pageSize;this.form.controls.search.value?this.web.getSearchSessions(void 0,this.pageSize,n,this.form.controls.search.value,this.accounts.loggedIn,this.web.searchSessionID).subscribe(r=>{this.searchSessionQuery=r}):this.web.getSearchSessions(void 0,this.pageSize,n,void 0,this.accounts.loggedIn,this.web.searchSessionID).subscribe(r=>{this.searchSessionQuery=r})}deleteSearchSession(i){this.web.deleteSearchSession(i).subscribe(n=>{this.searchSession=void 0,this.searchSessionQuery?.results?.splice(this.searchSessionQuery.results.findIndex(r=>r.id===i),1)})}toggleSidePanel(){this.sidebarOpen=!this.sidebarOpen}onSearchSessionSelected(i){this.router.navigate(["/search-session",i.id])}};e.\u0275fac=function(n){return new(n||e)(p(Ft),p(Q),p(k),p(Wt))},e.\u0275cmp=w({type:e,selectors:[["app-search-session"]],inputs:{searchID:"searchID"},standalone:!0,features:[b],decls:15,vars:4,consts:[["paginator",""],[2,"display","flex","flex-direction","row"],[1,"search-session-side-nav"],[1,"search-session-main-content"],["mat-icon-button","",3,"click"],[3,"href"],[1,"spacer"],["mat-icon-button","","color","accent"],[2,"height","calc(100vh - 64px*2 - 20px)","overflow","auto"],[3,"searchSession"],[2,"display","flex","flex-direction","column","padding","5px"],[3,"formGroup"],[2,"width","100%"],["matInput","","formControlName","search","type","search","placeholder","Find Search Session"],[2,"height","calc(100vh - 64px*4 - 20px)","overflow","auto"],[3,"searchSessionSelected","searchSessionQuery"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"],[2,"color","#ba0000"],["mat-icon-button","","color","accent",3,"click"]],template:function(n,r){n&1&&(a(0,"div",1),d(1,hi,12,2,"div",2),a(2,"div",3)(3,"mat-toolbar")(4,"mat-toolbar-row")(5,"button",4),C("click",function(){return r.toggleSidePanel()}),a(6,"mat-icon"),l(7,"menu"),s()(),a(8,"div"),d(9,mi,4,3,"a",5)(10,pi,1,0),s(),S(11,"div",6),d(12,ui,3,0,"button",7),s()(),a(13,"div",8),d(14,_i,1,1,"app-search-session-view",9),s()()()),n&2&&(c(),f(r.sidebarOpen?1:-1),c(8),f(r.searchSession?9:10),c(3),f(r.searchSession?12:-1),c(2),f(r.searchSession?14:-1))},dependencies:[et,it,tt,Z,K,Y,U,W,J,X,Nt,jt,nt,Kt,qt,ce,Se],styles:[".search-session-side-nav[_ngcontent-%COMP%]{width:300px;border-right:1px solid #000000;display:flex;flex-direction:column;height:calc(100vh - 64px)}.search-session-main-content[_ngcontent-%COMP%]{flex:1}"]});let t=e;return t})();var fi=[{path:"",component:mt},{path:":searchID",component:mt}],Pn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=at({type:e}),e.\u0275inj=rt({imports:[Lt,Ot.forChild(fi)]});let t=e;return t})();export{Pn as SearchSessionModule};