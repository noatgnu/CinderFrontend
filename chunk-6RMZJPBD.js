import{a as ae}from"./chunk-I32RFAXD.js";import{a as _e}from"./chunk-7VIYT6JL.js";import{a as de}from"./chunk-Z27MMUYN.js";import"./chunk-ZDUQ6FEO.js";import{a as ue,b as fe}from"./chunk-YLNQ6YAN.js";import{a as he}from"./chunk-PRCX7VDN.js";import{b as se,d as ce,e as le,f as pe,h as me}from"./chunk-3ZRSVP4T.js";import{c as V,g as O}from"./chunk-LUNVEN3K.js";import{Aa as G,Ca as k,Ea as re,Ha as z,Ia as L,Ka as A,Ma as B,Q as v,R as ne,S as y,ka as I,ma as E,oa as M,pa as T,ra as b,ta as D,wa as F,xa as Q,ya as N}from"./chunk-QJNOXFLF.js";import"./chunk-HX3ESI56.js";import{h as te,l as ie,p as oe}from"./chunk-QJ2HU2ZW.js";import{Aa as f,Ba as _,Bb as j,Hb as d,Ia as U,Jb as q,Kb as W,Lb as o,Mb as r,Nb as x,Rb as g,Ub as C,Wb as s,_b as X,bb as K,ed as ee,fb as a,gb as h,gc as c,hc as Z,ic as S,ja as H,oc as P,sa as w,ta as J,xb as m}from"./chunk-TUTLJQZA.js";var je=(t,l)=>l.id;function Pe(t,l){t&1&&(o(0,"mat-icon"),c(1,"lock_open"),r())}function ve(t,l){t&1&&(o(0,"mat-icon"),c(1,"lock"),r())}function ye(t,l){if(t&1&&(o(0,"mat-list-option",12),c(1),r()),t&2){let e=l.$implicit;j("value",e),a(),S(" ",e.official_name," ")}}function Ve(t,l){if(t&1&&(o(0,"mat-selection-list",11),q(1,ye,2,2,"mat-list-option",12,je),r()),t&2){let e=s(3);j("multiple",!1),a(),W(e.speciesQuery.results)}}function Ie(t,l){if(t&1&&m(0,Ve,3,1,"mat-selection-list",11),t&2){let e=s(2);d(e.speciesQuery.results.length>0?0:-1)}}function Ee(t,l){if(t&1){let e=g();o(0,"button",13),C("click",function(){f(e);let n=s(2);return _(n.openAnalysisGroupCreateModal())}),o(1,"mat-icon"),c(2,"add"),r(),c(3," Analysis Group"),r(),o(4,"button",14),C("click",function(){f(e);let n=s(2);return _(n.deleteProject())}),c(5,"Delete"),r()}}function Me(t,l){if(t&1&&(o(0,"mat-list-item")(1,"a",16),c(2),r(),x(3,"hr"),r()),t&2){let e=l.$implicit;a(),X("href","/#/analysis-group/",e.id,"",K),a(),Z(e.name)}}function Te(t,l){if(t&1&&(o(0,"mat-list"),q(1,Me,4,3,"mat-list-item",null,je),r()),t&2){let e=s(3);a(),W(e.analysisGroupQuery.results)}}function De(t,l){t&1&&(o(0,"p"),c(1,"No analysis groups found."),r())}function Fe(t,l){if(t&1){let e=g();o(0,"div",10)(1,"p"),c(2,"Associated Analysis Group"),r(),m(3,Te,3,0,"mat-list")(4,De,2,0,"p"),o(5,"mat-paginator",15,0),C("page",function(n){f(e);let p=s(2);return _(p.handlePageChange(n))}),r()()}if(t&2){let e=s(2);a(3),d(e.analysisGroupQuery.results.length>0?3:4),a(2),j("length",e.analysisGroupQuery.count)("pageSize",e.pageSize)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",e.currentPage)}}function Qe(t,l){if(t&1){let e=g();o(0,"form",3),C("ngSubmit",function(){f(e);let n=s();return _(n.updateProject())}),o(1,"mat-form-field",2),x(2,"input",4),o(3,"mat-label"),c(4,"Project Name"),r()(),o(5,"mat-form-field",2),x(6,"textarea",5),o(7,"mat-label"),c(8,"Project Description"),r()(),o(9,"mat-form-field",2),x(10,"input",6),o(11,"mat-label"),c(12,"Species Name Search"),r(),o(13,"button",7),C("click",function(){f(e);let n=s();return _(n.changeSpeciesEditableState())}),m(14,Pe,2,0,"mat-icon")(15,ve,2,0,"mat-icon"),r()(),m(16,Ie,1,1),o(17,"div",8)(18,"button",9),c(19,"Update"),r(),m(20,Ee,6,0),r()(),m(21,Fe,7,6,"div",10)}if(t&2){let e=s();j("formGroup",e.form),a(14),d(e.speciesEditable?14:15),a(2),d(e.speciesQuery&&e.speciesEditable?16:-1),a(2),j("disabled",!e.canEdit),a(2),d(e.canEdit?20:-1),a(),d(e.analysisGroupQuery?21:-1)}}var ge=(()=>{class t{set project(e){this._project=e,e&&(this.accounts.getProjectPermissions(e.id).subscribe(i=>{this.canEdit=i.edit}),this.titleService.setTitle(`Project - ${e.name}`),this.form.controls.name.setValue(e.name),this.form.controls.description.setValue(e.description),this.web.getAnalysisGroups(void 0,this.pageSize,0,void 0,e.id).subscribe(i=>{this.analysisGroupQuery=i}),e.species&&(console.log(e.species),this.web.getSpeciesByID(e.species).subscribe(i=>{this.form.controls.species_name.enable(),this.form.controls.species.enable(),this.form.controls.species_name.setValue(i.official_name),this.form.controls.species.setValue([i]),this.form.controls.species.disable(),this.form.controls.species_name.disable(),this.speciesEditable=!1})))}get project(){return this._project}constructor(e,i,n,p,R){this.titleService=e,this.fb=i,this.web=n,this.dialog=p,this.accounts=R,this.canEdit=!1,this.speciesEditable=!1,this.form=this.fb.group({name:new b({value:"",disabled:!this.accounts.loggedIn},E.required),description:new b({value:"",disabled:!this.accounts.loggedIn},E.required),species_name:new b({value:"",disabled:!this.accounts.loggedIn||!this.speciesEditable}),species:new b({value:null,disabled:!this.accounts.loggedIn},E.required)}),this.deleted=new U,this.updated=new U,this.pageSize=10,this.currentPage=0,this.form.controls.species_name.valueChanges.subscribe(u=>{u&&this.web.getSpecies(void 0,20,0,u).subscribe($=>{this.speciesQuery=$})}),this.form.controls.species.valueChanges.subscribe(u=>{u&&this.form.controls.species_name.setValue(u[0].official_name)})}updateProject(){this.form.invalid||(this.form.value.species?this.web.updateProject(this.project.id,this.form.value.name,this.form.value.description,this.form.value.species[0].id).subscribe(e=>{this.project=e,this.updated.emit(e)}):this.web.updateProject(this.project.id,this.form.value.name,this.form.value.description).subscribe(e=>{this.project=e,this.updated.emit(e)}))}deleteProject(){this.dialog.open(he).afterClosed().subscribe(e=>{e&&this.web.deleteProject(this.project.id).subscribe(()=>{this.project=void 0,this.deleted.emit(!0)})})}openAnalysisGroupCreateModal(){let e=this.dialog.open(de);e.componentInstance.project=this.project,e.afterClosed().subscribe(i=>{i&&window.open(`/#/analysis-group/${i.id}`,"_blank")})}handlePageChange(e){let i=e.pageIndex*e.pageSize;this.currentPage=e.pageIndex,this.web.getAnalysisGroups(void 0,e.pageSize,i,void 0,this.project.id).subscribe(n=>{this.analysisGroupQuery=n})}changeSpeciesEditableState(){this.speciesEditable=!this.speciesEditable,this.speciesEditable?(this.form.controls.species.enable(),this.form.controls.species_name.enable()):(this.form.controls.species.disable(),this.form.controls.species_name.disable())}static{this.\u0275fac=function(i){return new(i||t)(h(te),h(N),h(B),h(V),h(O))}}static{this.\u0275cmp=w({type:t,selectors:[["app-project-view"]],inputs:{project:"project"},outputs:{deleted:"deleted",updated:"updated"},standalone:!0,features:[P],decls:3,vars:1,consts:[["paginator",""],[2,"display","flex","flex-direction","row","justify-content","center","padding","50px"],[2,"width","100%"],[2,"display","flex","flex-direction","column","gap","20px",3,"ngSubmit","formGroup"],["matInput","","formControlName","name","type","text","placeholder","Project Name"],["matInput","","formControlName","description","placeholder","Project Description"],["matInput","","formControlName","species_name","placeholder","Species Name","type","search"],["mat-icon-button","","matSuffix","",3,"click"],[2,"display","flex","flex-direction","row","gap","20px"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[2,"padding","20px"],["formControlName","species",2,"max-height","200px","overflow","auto",3,"multiple"],[3,"value"],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","warn",3,"click"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"],["matListItemTitle","","target","_blank",3,"href"]],template:function(i,n){i&1&&(o(0,"div",1)(1,"div",2),m(2,Qe,22,6),r()()),i&2&&(a(2),d(n.project?2:-1))},dependencies:[G,D,I,M,T,F,Q,z,L,k,ne,v,ce,le,A,se,me,pe,y,re]})}}return t})();function Ne(t,l){if(t&1){let e=g();o(0,"div",12)(1,"app-project-list",13),C("projectSelected",function(n){f(e);let p=s(3);return _(p.handleProjectSelect(n))}),r()(),o(2,"mat-paginator",14,0),C("page",function(n){f(e);let p=s(3);return _(p.handlePageEvent(n))}),r()}if(t&2){let e=s(3);a(),j("projectQuery",e.projectQuery),a(),j("length",e.projectQuery.count)("pageSize",e.limit)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",e.pageIndex)}}function Ge(t,l){t&1&&(o(0,"p"),c(1,"No projects found."),r())}function ke(t,l){if(t&1&&m(0,Ne,4,6)(1,Ge,2,0,"p"),t&2){let e=s(2);d(e.projectQuery.count>0?0:1)}}function ze(t,l){if(t&1){let e=g();o(0,"div",2)(1,"mat-toolbar")(2,"mat-toolbar-row")(3,"span"),c(4,"Project"),r(),o(5,"button",5),C("click",function(){f(e);let n=s();return _(n.openCreateProjectDialog())}),o(6,"mat-icon"),c(7,"create_new_folder"),r()()()(),o(8,"div",8)(9,"form",9)(10,"mat-form-field",10),x(11,"input",11),o(12,"mat-label"),c(13,"Search Project"),r()()(),m(14,ke,2,1),r()()}if(t&2){let e=s();a(9),j("formGroup",e.form),a(5),d(e.projectQuery?14:-1)}}function Le(t,l){if(t&1&&c(0),t&2){let e=s();S(" ",e.selectedProject.name," ")}}function Ae(t,l){t&1&&c(0," Select Project ")}function Be(t,l){if(t&1){let e=g();o(0,"app-project-view",15),C("deleted",function(){f(e);let n=s();return _(n.refreshData())})("updated",function(n){f(e);let p=s();return _(p.handleUpdateData(n))}),r()}if(t&2){let e=s();j("project",e.selectedProject)}}var Y=(()=>{class t{set projectID(e){this._projectID=e,e&&this.web.getProject(e).subscribe(i=>{this.selectedProject=i})}get projectID(){return this._projectID}constructor(e,i,n,p,R){this.router=e,this.web=i,this.dialog=n,this.fb=p,this.accounts=R,this.sidebarOpen=!0,this.pageIndex=0,this.limit=15,this.offset=0,this.form=this.fb.group({name:new b}),this.web.getProjects(void 0,this.limit,this.offset).subscribe(u=>{this.projectQuery=u}),this.form.controls.name.valueChanges.subscribe(u=>{u&&this.web.getProjects(void 0,this.limit,this.offset,u).subscribe($=>{this.projectQuery=$})}),this.web.updateFromLabGroupSelection.subscribe(u=>{u&&this.refreshData()})}openCreateProjectDialog(){this.dialog.open(ae).afterClosed().subscribe(i=>{i&&this.accounts.loggedIn&&this.web.createProject(i.name,i.description).subscribe(n=>{this.selectedProject=n,this.web.getProjects(void 0,this.limit,this.offset).subscribe(p=>{this.projectQuery=p})})})}handlePageEvent(e){this.offset=e.pageIndex*e.pageSize,this.limit=e.pageSize,this.form.controls.name.value?this.web.getProjects(void 0,this.limit,this.offset,this.form.controls.name.value).subscribe(i=>{this.projectQuery=i}):this.web.getProjects(void 0,this.limit,this.offset).subscribe(i=>{this.projectQuery=i})}handleProjectSelect(e){this.router.navigate(["/project",e.id])}refreshData(){if(this.form.controls.name.value){this.web.getProjects(void 0,this.limit,this.offset,this.form.controls.name.value).subscribe(e=>{this.projectQuery=e});return}this.web.getProjects(void 0,this.limit,this.offset).subscribe(e=>{this.projectQuery=e})}handleUpdateData(e){this.projectQuery.results=this.projectQuery.results.map(i=>i.id===e.id?e:i)}toggleSidePanel(){this.sidebarOpen=!this.sidebarOpen}static{this.\u0275fac=function(i){return new(i||t)(h(ie),h(B),h(V),h(N),h(O))}}static{this.\u0275cmp=w({type:t,selectors:[["app-project"]],inputs:{projectID:"projectID"},standalone:!0,features:[P],decls:14,vars:3,consts:[["paginator",""],[2,"display","flex","flex-direction","row"],[1,"project-side-nav"],[1,"project-main-content"],[2,"display","flex","flex-direction","row","justify-content","center","align-items","center"],["mat-icon-button","",3,"click"],[2,"height","calc(100vh - 64px*2 - 20px)","overflow","auto"],[3,"project"],[2,"display","flex","flex-direction","column","padding","5px"],[3,"formGroup"],[2,"width","100%"],["matInput","","formControlName","name","type","search","placeholder","Search Project"],[2,"height","calc(100vh - 64px*4 - 20px)","overflow","auto"],[3,"projectSelected","projectQuery"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"],[3,"deleted","updated","project"]],template:function(i,n){i&1&&(o(0,"div",1),m(1,ze,15,2,"div",2),o(2,"div",3)(3,"mat-toolbar")(4,"mat-toolbar-row")(5,"div",4)(6,"button",5),C("click",function(){return n.toggleSidePanel()}),o(7,"mat-icon"),c(8,"menu"),r()(),o(9,"span"),m(10,Le,1,1)(11,Ae,1,0),r()()()(),o(12,"div",6),m(13,Be,1,1,"app-project-view",7),r()()()),i&2&&(a(),d(n.sidebarOpen?1:-1),a(9),d(n.selectedProject?10:11),a(3),d(n.selectedProject?13:-1))},dependencies:[fe,ue,y,v,_e,G,D,I,M,T,F,Q,z,L,k,A,ge],styles:[".project-side-nav[_ngcontent-%COMP%]{width:300px;border-right:1px solid #000000;display:flex;flex-direction:column;height:calc(100vh - 64px)}.project-main-content[_ngcontent-%COMP%]{flex:1}"]})}}return t})();var Oe=[{path:"",component:Y},{path:":projectID",component:Y}],gt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=J({type:t})}static{this.\u0275inj=H({imports:[ee,oe.forChild(Oe)]})}}return t})();export{gt as ProjectModule};
