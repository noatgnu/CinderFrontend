import{$ as Ne,T as G,U as Oe,V as Q,W as X,a as Ie,z as Me}from"./chunk-IO7LM37A.js";import{$b as v,Db as K,Dc as Te,Ea as y,Ec as L,Fa as be,Ga as Se,Hb as H,Ia as xe,Ic as b,Ja as V,La as x,Lb as F,Mb as T,Qb as f,Sc as Ee,Xb as Y,Yb as E,bc as R,cc as k,da as W,fb as j,gb as a,ia as Re,ib as C,la as $,n as De,na as ke,nb as P,nc as p,oa as O,oc as I,p as Ce,sa as S,sb as u,ua as c,ub as N,w as ae,xb as Z,y as ve,za as q,zb as Fe}from"./chunk-TUTLJQZA.js";var Xe=[[["caption"]],[["colgroup"],["col"]],"*"],Je=["caption","colgroup, col","*"];function et(i,r){i&1&&E(0,2)}function tt(i,r){i&1&&(F(0,"thead",0),f(1,1),T(),F(2,"tbody",0),f(3,2)(4,3),T(),F(5,"tfoot",0),f(6,4),T())}function it(i,r){i&1&&f(0,1)(1,2)(2,3)(3,4)}var _=new $("CDK_TABLE");var ne=(()=>{class i{constructor(e){this.template=e}static{this.\u0275fac=function(t){return new(t||i)(a(C))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkCellDef",""]],standalone:!0})}}return i})(),se=(()=>{class i{constructor(e){this.template=e}static{this.\u0275fac=function(t){return new(t||i)(a(C))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkHeaderCellDef",""]],standalone:!0})}}return i})(),Pe=(()=>{class i{constructor(e){this.template=e}static{this.\u0275fac=function(t){return new(t||i)(a(C))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkFooterCellDef",""]],standalone:!0})}}return i})(),B=(()=>{class i{get name(){return this._name}set name(e){this._setNameInput(e)}get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}constructor(e){this._table=e,this._hasStickyChanged=!1,this._sticky=!1,this._stickyEnd=!1}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static{this.\u0275fac=function(t){return new(t||i)(a(_,8))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,o,n){if(t&1&&(v(n,ne,5),v(n,se,5),v(n,Pe,5)),t&2){let s;R(s=k())&&(o.cell=s.first),R(s=k())&&(o.headerCell=s.first),R(s=k())&&(o.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",b],stickyEnd:[2,"stickyEnd","stickyEnd",b]},standalone:!0,features:[p([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:i}]),N]})}}return i})(),ee=class{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName)}},He=(()=>{class i extends ee{constructor(e,t){super(e,t)}static{this.\u0275fac=function(t){return new(t||i)(a(B),a(x))}}static{this.\u0275dir=c({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],standalone:!0,features:[u]})}}return i})();var Le=(()=>{class i extends ee{constructor(e,t){super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static{this.\u0275fac=function(t){return new(t||i)(a(B),a(x))}}static{this.\u0275dir=c({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],standalone:!0,features:[u]})}}return i})(),te=class{constructor(){this.tasks=[],this.endTasks=[]}},ie=new $("_COALESCED_STYLE_SCHEDULER"),ce=(()=>{class i{constructor(e){this._currentSchedule=null,this._ngZone=O(V)}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new te,this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){let e=this._currentSchedule;this._currentSchedule=new te;for(let t of e.tasks)t();for(let t of e.endTasks)t()}this._currentSchedule=null})))}static{this.\u0275fac=function(t){return new(t||i)(ke(V))}}static{this.\u0275prov=Re({token:i,factory:i.\u0275fac})}}return i})();var de=(()=>{class i{constructor(e,t){this.template=e,this._differs=t}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof U?e.headerCell.template:this instanceof he?e.footerCell.template:e.cell.template}static{this.\u0275fac=function(t){return new(t||i)(a(C),a(L))}}static{this.\u0275dir=c({type:i,features:[q]})}}return i})(),U=(()=>{class i extends de{get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}constructor(e,t,o){super(e,t),this._table=o,this._hasStickyChanged=!1,this._sticky=!1}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static{this.\u0275fac=function(t){return new(t||i)(a(C),a(L),a(_,8))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",b]},standalone:!0,features:[N,u,q]})}}return i})(),he=(()=>{class i extends de{get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}constructor(e,t,o){super(e,t),this._table=o,this._hasStickyChanged=!1,this._sticky=!1}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static{this.\u0275fac=function(t){return new(t||i)(a(C),a(L),a(_,8))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",b]},standalone:!0,features:[N,u,q]})}}return i})(),re=(()=>{class i extends de{constructor(e,t,o){super(e,t),this._table=o}static{this.\u0275fac=function(t){return new(t||i)(a(C),a(L),a(_,8))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},standalone:!0,features:[u]})}}return i})(),A=(()=>{class i{static{this.mostRecentCellOutlet=null}constructor(e){this._viewContainer=e,i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static{this.\u0275fac=function(t){return new(t||i)(a(P))}}static{this.\u0275dir=c({type:i,selectors:[["","cdkCellOutlet",""]],standalone:!0})}}return i})(),ue=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=S({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],standalone:!0,features:[I],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&f(0,0)},dependencies:[A],encapsulation:2})}}return i})();var fe=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=S({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],standalone:!0,features:[I],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&f(0,0)},dependencies:[A],encapsulation:2})}}return i})(),Be=(()=>{class i{constructor(e){this.templateRef=e,this._contentClassName="cdk-no-data-row"}static{this.\u0275fac=function(t){return new(t||i)(a(C))}}static{this.\u0275dir=c({type:i,selectors:[["ng-template","cdkNoDataRow",""]],standalone:!0})}}return i})(),Ae=["top","bottom","left","right"],le=class{constructor(r,e,t,o,n=!0,s=!0,l){this._isNativeHtmlTable=r,this._stickCellCss=e,this.direction=t,this._coalescedStyleScheduler=o,this._isBrowser=n,this._needsPositionStickyOnElement=s,this._positionListener=l,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(r,e){let t=[];for(let o of r)if(o.nodeType===o.ELEMENT_NODE){t.push(o);for(let n=0;n<o.children.length;n++)t.push(o.children[n])}this._coalescedStyleScheduler.schedule(()=>{for(let o of t)this._removeStickyStyle(o,e)})}updateStickyColumns(r,e,t,o=!0){if(!r.length||!this._isBrowser||!(e.some(n=>n)||t.some(n=>n))){this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]}));return}this._coalescedStyleScheduler.schedule(()=>{let n=r[0],s=n.children.length,l=this._getCellWidths(n,o),d=this._getStickyStartColumnPositions(l,e),D=this._getStickyEndColumnPositions(l,t),h=e.lastIndexOf(!0),g=t.indexOf(!0),w=this.direction==="rtl",M=w?"right":"left",ze=w?"left":"right";for(let z of r)for(let m=0;m<s;m++){let we=z.children[m];e[m]&&this._addStickyStyle(we,M,d[m],m===h),t[m]&&this._addStickyStyle(we,ze,D[m],m===g)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:h===-1?[]:l.slice(0,h+1).map((z,m)=>e[m]?z:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:g===-1?[]:l.slice(g).map((z,m)=>t[m+g]?z:null).reverse()}))})}stickRows(r,e,t){this._isBrowser&&this._coalescedStyleScheduler.schedule(()=>{let o=t==="bottom"?r.slice().reverse():r,n=t==="bottom"?e.slice().reverse():e,s=[],l=[],d=[];for(let h=0,g=0;h<o.length;h++){if(!n[h])continue;s[h]=g;let w=o[h];d[h]=this._isNativeHtmlTable?Array.from(w.children):[w];let M=w.getBoundingClientRect().height;g+=M,l[h]=M}let D=n.lastIndexOf(!0);for(let h=0;h<o.length;h++){if(!n[h])continue;let g=s[h],w=h===D;for(let M of d[h])this._addStickyStyle(M,t,g,w)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:s,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:s,elements:d})})}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&this._coalescedStyleScheduler.schedule(()=>{let t=r.querySelector("tfoot");t&&(e.some(o=>!o)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))})}_removeStickyStyle(r,e){for(let o of e)r.style[o]="",r.classList.remove(this._borderCellCss[o]);Ae.some(o=>e.indexOf(o)===-1&&r.style[o])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex="",this._needsPositionStickyOnElement&&(r.style.position=""),r.classList.remove(this._stickCellCss))}_addStickyStyle(r,e,t,o){r.classList.add(this._stickCellCss),o&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(r){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of Ae)r.style[o]&&(t+=e[o]);return t?`${t}`:""}_getCellWidths(r,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=r.children;for(let n=0;n<o.length;n++){let s=o[n];t.push(s.getBoundingClientRect().width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){let t=[],o=0;for(let n=0;n<r.length;n++)e[n]&&(t[n]=o,o+=r[n]);return t}_getStickyEndColumnPositions(r,e){let t=[],o=0;for(let n=r.length;n>0;n--)e[n]&&(t[n]=o,o+=r[n]);return t}};var oe=new $("CDK_SPL");var me=(()=>{class i{constructor(e,t){this.viewContainer=e,this.elementRef=t;let o=O(_);o._rowOutlet=this,o._outletAssigned()}static{this.\u0275fac=function(t){return new(t||i)(a(P),a(x))}}static{this.\u0275dir=c({type:i,selectors:[["","rowOutlet",""]],standalone:!0})}}return i})(),pe=(()=>{class i{constructor(e,t){this.viewContainer=e,this.elementRef=t;let o=O(_);o._headerRowOutlet=this,o._outletAssigned()}static{this.\u0275fac=function(t){return new(t||i)(a(P),a(x))}}static{this.\u0275dir=c({type:i,selectors:[["","headerRowOutlet",""]],standalone:!0})}}return i})(),ge=(()=>{class i{constructor(e,t){this.viewContainer=e,this.elementRef=t;let o=O(_);o._footerRowOutlet=this,o._outletAssigned()}static{this.\u0275fac=function(t){return new(t||i)(a(P),a(x))}}static{this.\u0275dir=c({type:i,selectors:[["","footerRowOutlet",""]],standalone:!0})}}return i})(),ye=(()=>{class i{constructor(e,t){this.viewContainer=e,this.elementRef=t;let o=O(_);o._noDataRowOutlet=this,o._outletAssigned()}static{this.\u0275fac=function(t){return new(t||i)(a(P),a(x))}}static{this.\u0275dir=c({type:i,selectors:[["","noDataRowOutlet",""]],standalone:!0})}}return i})();var _e=(()=>{class i{_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role"),t=e==="grid"||e==="treegrid"?"gridcell":"cell";this._cellRoleInternal=this._isNativeHtmlTable&&t==="cell"?null:t}return this._cellRoleInternal}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}constructor(e,t,o,n,s,l,d,D,h,g,w,M){this._differs=e,this._changeDetectorRef=t,this._elementRef=o,this._dir=s,this._platform=d,this._viewRepeater=D,this._coalescedStyleScheduler=h,this._viewportRuler=g,this._stickyPositioningListener=w,this._onDestroy=new De,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._hasAllOutlets=!1,this._hasInitialized=!1,this._cellRoleInternal=void 0,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new xe,this.viewChange=new Ce({start:0,end:Number.MAX_VALUE}),this._injector=O(Se),n||o.nativeElement.setAttribute("role","table"),this._document=l,this._isServer=!d.isBrowser,this._isNativeHtmlTable=o.nativeElement.nodeName==="TABLE"}ngOnInit(){this._setupStickyStyler(),this._dataDiffer=this._differs.find([]).create((e,t)=>this.trackBy?this.trackBy(t.dataIndex,t.data):t),this._viewportRuler.change().pipe(W(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),G(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,n,s)=>this._getEmbeddedViewArgs(o.item,s),o=>o.item.data,o=>{o.operation===Oe.INSERTED&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(o=>{let n=t.get(o.currentIndex);n.context.$implicit=o.item.data}),this._updateNoDataRow(),Fe(()=>{this.updateStickyColumnStyles()},{injector:this._injector}),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=je(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=je(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((n,s)=>{this._addStickyColumnStyles([n],this._headerRowDefs[s])}),this._rowDefs.forEach(n=>{let s=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===n&&s.push(t[l]);this._addStickyColumnStyles(s,n)}),o.forEach((n,s)=>{this._addStickyColumnStyles([n],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(n=>n.resetStickyChanged())}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){let e=[],t=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=0;o<this._data.length;o++){let n=this._data[o],s=this._getRenderRowsForData(n,o,t.get(n));this._cachedRenderRowsMap.has(n)||this._cachedRenderRowsMap.set(n,new WeakMap);for(let l=0;l<s.length;l++){let d=s[l],D=this._cachedRenderRowsMap.get(d.data);D.has(d.rowDef)?D.get(d.rowDef).push(d):D.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(s=>{let l=o&&o.has(s)?o.get(s):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return{data:e,rowDef:s,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),J(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=J(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=J(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=J(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);!this.multiTemplateDataRows&&e.length>1,this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,l)=>s||!!l.getColumnsDiff(),t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let n=this._footerRowDefs.reduce(e,!1);return n&&this._forceRenderFooterRows(),t||o||n}_switchDataSource(e){this._data=[],G(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;G(this.dataSource)?e=this.dataSource.connect(this):ve(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=ae(this.dataSource)),this._renderChangeSubscription=e.pipe(W(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);return d}),n=o.map(l=>l.sticky),s=o.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,n,s,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let n=e.viewContainer.get(o);t.push(n.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length==1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(n=>!n.when||n.when(t,e));else{let n=this._rowDefs.find(s=>s.when&&s.when(t,e))||this._defaultRowDef;n&&o.push(n)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,n={$implicit:e.data};return{templateRef:o.template,context:n,index:t}}_renderRow(e,t,o,n={}){let s=e.viewContainer.createEmbeddedView(t.template,n,o);return this._renderCellTemplateForItem(t,n),s}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))A.mostRecentCellOutlet&&A.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let s=e.get(t).context;s.count=o,s.first=t===0,s.last=t===o-1,s.even=t%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[t].dataIndex,s.renderIndex=t):s.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr";this._stickyStyler=new le(this._isNativeHtmlTable,this.stickyCssClass,e,this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:ae()).pipe(W(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let n=o.createEmbeddedView(e.templateRef),s=n.rootNodes[0];n.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE&&(s.setAttribute("role","row"),s.classList.add(e._contentClassName))}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}static{this.\u0275fac=function(t){return new(t||i)(a(L),a(Te),a(x),be("role"),a(Me,8),a(Ee),a(Ie),a(Q),a(ie),a(Ne),a(oe,12),a(V,8))}}static{this.\u0275cmp=S({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,o,n){if(t&1&&(v(n,Be,5),v(n,B,5),v(n,re,5),v(n,U,5),v(n,he,5)),t&2){let s;R(s=k())&&(o._noDataRow=s.first),R(s=k())&&(o._contentColumnDefs=s),R(s=k())&&(o._contentRowDefs=s),R(s=k())&&(o._contentHeaderRowDefs=s),R(s=k())&&(o._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,o){t&2&&K("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",b],fixedLayout:[2,"fixedLayout","fixedLayout",b]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],standalone:!0,features:[p([{provide:_,useExisting:i},{provide:Q,useClass:X},{provide:ie,useClass:ce},{provide:oe,useValue:null}]),N,I],ngContentSelectors:Je,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(Y(Xe),E(0),E(1,1),Z(2,et,1,0)(3,tt,7,0)(4,it,4,0)),t&2&&(j(2),H(o._isServer?2:-1),j(),H(o._isNativeHtmlTable?3:4))},dependencies:[pe,me,ye,ge],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2})}}return i})();function J(i,r){return i.concat(Array.from(r))}function je(i,r){let e=r.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o==="TABLE")break;t=t.parentNode}return null}var ot=[[["caption"]],[["colgroup"],["col"]],"*"],nt=["caption","colgroup, col","*"];function st(i,r){i&1&&E(0,2)}function rt(i,r){i&1&&(F(0,"thead",0),f(1,1),T(),F(2,"tbody",2),f(3,3)(4,4),T(),F(5,"tfoot",0),f(6,5),T())}function at(i,r){i&1&&f(0,1)(1,3)(2,4)(3,5)}var Zt=(()=>{class i extends _e{constructor(){super(...arguments),this.stickyCssClass="mat-mdc-table-sticky",this.needsPositionStickyOnElement=!1}static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275cmp=S({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,o){t&2&&K("mdc-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],standalone:!0,features:[p([{provide:_e,useExisting:i},{provide:_,useExisting:i},{provide:ie,useClass:ce},{provide:Q,useClass:X},{provide:oe,useValue:null}]),u,I],ngContentSelectors:nt,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(Y(ot),E(0),E(1,1),Z(2,st,1,0)(3,rt,7,0)(4,at,4,0)),t&2&&(j(2),H(o._isServer?2:-1),j(),H(o._isNativeHtmlTable?3:4))},dependencies:[pe,me,ye,ge],styles:[".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-app-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-app-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-app-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-app-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-app-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],encapsulation:2})}}return i})(),Kt=(()=>{class i extends ne{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["","matCellDef",""]],standalone:!0,features:[p([{provide:ne,useExisting:i}]),u]})}}return i})(),Yt=(()=>{class i extends se{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["","matHeaderCellDef",""]],standalone:!0,features:[p([{provide:se,useExisting:i}]),u]})}}return i})();var Gt=(()=>{class i extends B{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},standalone:!0,features:[p([{provide:B,useExisting:i},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:i}]),u]})}}return i})(),Xt=(()=>{class i extends He{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],standalone:!0,features:[u]})}}return i})();var Jt=(()=>{class i extends Le{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],standalone:!0,features:[u]})}}return i})();var ei=(()=>{class i extends U{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",b]},standalone:!0,features:[p([{provide:U,useExisting:i}]),N,u]})}}return i})();var ti=(()=>{class i extends re{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},standalone:!0,features:[p([{provide:re,useExisting:i}]),u]})}}return i})(),ii=(()=>{class i extends ue{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275cmp=S({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],standalone:!0,features:[p([{provide:ue,useExisting:i}]),u,I],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&f(0,0)},dependencies:[A],encapsulation:2})}}return i})();var oi=(()=>{class i extends fe{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=y(i)))(o||i)}})()}static{this.\u0275cmp=S({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],standalone:!0,features:[p([{provide:fe,useExisting:i}]),u,I],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&f(0,0)},dependencies:[A],encapsulation:2})}}return i})();export{Zt as a,Kt as b,Yt as c,Gt as d,Xt as e,Jt as f,ei as g,ti as h,ii as i,oi as j};