import{a as ne}from"./chunk-WV2J2NJN.js";import{a as ue}from"./chunk-IO2NW5IQ.js";import{a as pe}from"./chunk-APV6WLOB.js";import{a as me,b as de}from"./chunk-KB5LNH5J.js";import{b as re,c as ae,d as se,e as ce,f as le,h as $}from"./chunk-CS4FZ5ZY.js";import{Ba as O,Ca as R,H as I,I as oe,J as V,ba as E,ga as T,ha as M,ja as D,ka as F,ma as j,na as Q,pa as N,qa as G,ra as k,ta as z,va as L,ya as A,za as B}from"./chunk-2DNFP57H.js";import{h as te,n as ie}from"./chunk-63W3RUDO.js";import"./chunk-AESYL7IM.js";import{$b as y,Ab as q,Bb as W,Cb as r,Db as a,Eb as x,Fa as U,Ib as C,Jc as ee,Lb as h,Nb as l,Rb as Y,Xa as X,Xb as p,Yb as Z,Za as c,Zb as P,_a as g,fa as J,oa as v,pa as K,rb as f,tb as m,wa as d,xa as u,yb as _}from"./chunk-QZPYU5ZS.js";var _e=(i,n)=>n.id;function we(i,n){if(i&1){let o=C();r(0,"button",14),h("click",function(){d(o);let t=l(2);return u(t.changeSpeciesEditableState())}),r(1,"mat-icon"),p(2,"lock_open"),a()()}}function Se(i,n){if(i&1){let o=C();r(0,"button",14),h("click",function(){d(o);let t=l(2);return u(t.changeSpeciesEditableState())}),r(1,"mat-icon"),p(2,"lock"),a()()}}function ve(i,n){if(i&1&&(r(0,"mat-list-option",16),p(1),a()),i&2){let o=n.$implicit;m("value",o),c(),P(" ",o.official_name," ")}}function Pe(i,n){if(i&1&&(r(0,"mat-selection-list",15),q(1,ve,2,2,"mat-list-option",16,_e),a()),i&2){let o=l(3);m("multiple",!1),c(),W(o.speciesQuery.results)}}function ye(i,n){if(i&1&&f(0,Pe,3,1,"mat-selection-list",15),i&2){let o=l(2);_(o.speciesQuery.results.length>0?0:-1)}}function Ie(i,n){if(i&1&&(r(0,"mat-list-item")(1,"a",18),p(2),a(),x(3,"hr"),a()),i&2){let o=n.$implicit;c(),Y("href","/#/analysis-group/",o.id,"",X),c(),Z(o.name)}}function Ve(i,n){if(i&1&&(r(0,"mat-list"),q(1,Ie,4,3,"mat-list-item",null,_e),a()),i&2){let o=l(3);c(),W(o.analysisGroupQuery.results)}}function Ee(i,n){i&1&&(r(0,"p"),p(1,"No analysis groups found."),a())}function Te(i,n){if(i&1){let o=C();r(0,"div",13)(1,"b"),p(2,"Associated Analysis Group"),a(),f(3,Ve,3,0,"mat-list")(4,Ee,2,0,"p"),r(5,"mat-paginator",17,0),h("page",function(t){d(o);let s=l(2);return u(s.handlePageChange(t))}),a()()}if(i&2){let o=l(2);c(3),_(o.analysisGroupQuery.results.length>0?3:4),c(2),m("length",o.analysisGroupQuery.count)("pageSize",o.pageSize)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",o.currentPage)}}function Me(i,n){if(i&1){let o=C();r(0,"form",3),h("ngSubmit",function(){d(o);let t=l();return u(t.updateProject())}),r(1,"mat-form-field",2),x(2,"input",4),r(3,"mat-label"),p(4,"Project Name"),a()(),r(5,"mat-form-field",2),x(6,"textarea",5),r(7,"mat-label"),p(8,"Project Description"),a()(),r(9,"div",6)(10,"mat-form-field",2),x(11,"input",7),r(12,"mat-label"),p(13,"Species Name Search"),a()(),f(14,we,3,0,"button",8)(15,Se,3,0,"button",8),a(),f(16,ye,1,1),r(17,"div",9)(18,"button",10),p(19,"Update"),a(),r(20,"button",11),h("click",function(){d(o);let t=l();return u(t.openAnalysisGroupCreateModal())}),r(21,"mat-icon"),p(22,"add"),a(),p(23," Analysis Group"),a(),r(24,"button",12),h("click",function(){d(o);let t=l();return u(t.deleteProject())}),p(25,"Delete"),a()()(),f(26,Te,7,6,"div",13)}if(i&2){let o=l();m("formGroup",o.form),c(14),_(o.speciesEditable?14:15),c(2),_(o.speciesQuery&&o.speciesEditable?16:-1),c(2),m("disabled",!o.accounts.loggedIn),c(2),m("disabled",!o.accounts.loggedIn),c(4),m("disabled",!o.accounts.loggedIn),c(2),_(o.analysisGroupQuery?26:-1)}}var he=(()=>{let n=class n{set project(e){this._project=e,e&&(this.titleService.setTitle(`Project - ${e.name}`),this.form.controls.name.setValue(e.name),this.form.controls.description.setValue(e.description),this.web.getAnalysisGroups(void 0,this.pageSize,0,void 0,e.id).subscribe(t=>{this.analysisGroupQuery=t}),e.species&&(console.log(e.species),this.web.getSpeciesByID(e.species).subscribe(t=>{this.form.controls.species_name.enable(),this.form.controls.species.enable(),this.form.controls.species_name.setValue(t.official_name),this.form.controls.species.setValue([t]),this.form.controls.species.disable(),this.form.controls.species_name.disable(),this.speciesEditable=!1})))}get project(){return this._project}constructor(e,t,s,w,S){this.titleService=e,this.fb=t,this.web=s,this.dialog=w,this.accounts=S,this.speciesEditable=!1,this.form=this.fb.group({name:new j({value:"",disabled:!this.accounts.loggedIn},M.required),description:new j({value:"",disabled:!this.accounts.loggedIn},M.required),species_name:new j({value:"",disabled:!this.accounts.loggedIn||!this.speciesEditable}),species:new j({value:null,disabled:!this.accounts.loggedIn},M.required)}),this.deleted=new U,this.updated=new U,this.pageSize=10,this.currentPage=0,this.form.controls.species_name.valueChanges.subscribe(b=>{b&&this.web.getSpecies(void 0,20,0,b).subscribe(ge=>{this.speciesQuery=ge})}),this.form.controls.species.valueChanges.subscribe(b=>{b&&this.form.controls.species_name.setValue(b[0].official_name)})}updateProject(){this.form.invalid||(this.form.value.species?this.web.updateProject(this.project.id,this.form.value.name,this.form.value.description,this.form.value.species[0].id).subscribe(e=>{this.project=e,this.updated.emit(e)}):this.web.updateProject(this.project.id,this.form.value.name,this.form.value.description).subscribe(e=>{this.project=e,this.updated.emit(e)}))}deleteProject(){this.web.deleteProject(this.project.id).subscribe(()=>{this.project=void 0,this.deleted.emit(!0)})}openAnalysisGroupCreateModal(){let e=this.dialog.open(pe);e.componentInstance.project=this.project,e.afterClosed().subscribe(t=>{t&&window.open(`/#/analysis-group/${t.id}`,"_blank")})}handlePageChange(e){let t=e.pageIndex*e.pageSize;this.currentPage=e.pageIndex,this.web.getAnalysisGroups(void 0,e.pageSize,t,void 0,this.project.id).subscribe(s=>{this.analysisGroupQuery=s})}changeSpeciesEditableState(){this.speciesEditable=!this.speciesEditable,this.speciesEditable?(this.form.controls.species.enable(),this.form.controls.species_name.enable()):(this.form.controls.species.disable(),this.form.controls.species_name.disable())}};n.\u0275fac=function(t){return new(t||n)(g(te),g(k),g(O),g(E),g(R))},n.\u0275cmp=v({type:n,selectors:[["app-project-view"]],inputs:{project:"project"},outputs:{deleted:"deleted",updated:"updated"},standalone:!0,features:[y],decls:3,vars:1,consts:[["paginator",""],[2,"display","flex","flex-direction","row","justify-content","center","padding","50px"],[2,"width","100%"],[2,"display","flex","flex-direction","column","gap","20px",3,"ngSubmit","formGroup"],["matInput","","formControlName","name","type","text","placeholder","Project Name"],["matInput","","formControlName","description","placeholder","Project Description"],[2,"display","flex","flex-direction","row","gap","10px","align-items","center"],["matInput","","formControlName","species_name","placeholder","Species Name","type","search"],["mat-icon-button",""],[2,"display","flex","flex-direction","row","gap","20px"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["mat-raised-button","","color","accent",3,"click","disabled"],["mat-raised-button","","color","warn",3,"click","disabled"],[2,"padding","20px"],["mat-icon-button","",3,"click"],["formControlName","species",2,"max-height","200px","overflow","auto",3,"multiple"],[3,"value"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"],["matListItemTitle","","target","_blank",3,"href"]],template:function(t,s){t&1&&(r(0,"div",1)(1,"div",2),f(2,Me,27,7),a()()),t&2&&(c(2),_(s.project?2:-1))},dependencies:[z,Q,T,D,F,N,G,A,B,L,oe,I,ae,se,$,re,le,ce,V]});let i=n;return i})();function De(i,n){if(i&1){let o=C();r(0,"div",11)(1,"app-project-list",12),h("projectSelected",function(t){d(o);let s=l(2);return u(s.handleProjectSelect(t))}),a()(),r(2,"mat-paginator",13,0),h("page",function(t){d(o);let s=l(2);return u(s.handlePageEvent(t))}),a()}if(i&2){let o=l(2);c(),m("projectQuery",o.projectQuery),c(),m("length",o.projectQuery.count)("pageSize",o.limit)("showFirstLastButtons",!0)("hidePageSize",!0)("pageIndex",o.pageIndex)}}function Fe(i,n){i&1&&(r(0,"p"),p(1,"No projects found."),a())}function Qe(i,n){if(i&1&&f(0,De,4,6)(1,Fe,2,0,"p"),i&2){let o=l();_(o.projectQuery.count>0?0:1)}}function Ne(i,n){if(i&1&&p(0),i&2){let o=l();P(" ",o.selectedProject.name," ")}}function Ge(i,n){i&1&&p(0," Select Project ")}function ke(i,n){if(i&1){let o=C();r(0,"app-project-view",14),h("deleted",function(){d(o);let t=l();return u(t.refreshData())})("updated",function(t){d(o);let s=l();return u(s.handleUpdateData(t))}),a()}if(i&2){let o=l();m("project",o.selectedProject)}}var H=(()=>{let n=class n{set projectID(e){this._projectID=e,e&&this.web.getProject(e).subscribe(t=>{this.selectedProject=t})}get projectID(){return this._projectID}constructor(e,t,s,w){this.web=e,this.dialog=t,this.fb=s,this.accounts=w,this.pageIndex=0,this.limit=15,this.offset=0,this.form=this.fb.group({name:new j}),this.web.getProjects(void 0,this.limit,this.offset).subscribe(S=>{this.projectQuery=S}),this.form.controls.name.valueChanges.subscribe(S=>{S&&this.web.getProjects(void 0,this.limit,this.offset,S).subscribe(b=>{this.projectQuery=b})})}openCreateProjectDialog(){this.dialog.open(ne).afterClosed().subscribe(t=>{t&&this.accounts.loggedIn&&this.web.createProject(t.name,t.description).subscribe(s=>{this.selectedProject=s,this.web.getProjects(void 0,this.limit,this.offset).subscribe(w=>{this.projectQuery=w})})})}handlePageEvent(e){this.offset=e.pageIndex*e.pageSize,this.limit=e.pageSize,this.form.controls.name.value?this.web.getProjects(void 0,this.limit,this.offset,this.form.controls.name.value).subscribe(t=>{this.projectQuery=t}):this.web.getProjects(void 0,this.limit,this.offset).subscribe(t=>{this.projectQuery=t})}handleProjectSelect(e){this.selectedProject=e}refreshData(){if(this.form.controls.name.value){this.web.getProjects(void 0,this.limit,this.offset,this.form.controls.name.value).subscribe(e=>{this.projectQuery=e});return}this.web.getProjects(void 0,this.limit,this.offset).subscribe(e=>{this.projectQuery=e})}handleUpdateData(e){this.projectQuery.results=this.projectQuery.results.map(t=>t.id===e.id?e:t)}};n.\u0275fac=function(t){return new(t||n)(g(O),g(E),g(k),g(R))},n.\u0275cmp=v({type:n,selectors:[["app-project"]],inputs:{projectID:"projectID"},standalone:!0,features:[y],decls:24,vars:4,consts:[["paginator",""],[2,"display","flex","flex-direction","row"],[1,"project-side-nav"],["mat-icon-button","",3,"click"],[2,"display","flex","flex-direction","column","padding","5px"],[3,"formGroup"],[2,"width","100%"],["matInput","","formControlName","name","type","search","placeholder","Search Project"],[1,"project-main-content"],[2,"height","calc(100vh - 64px*2 - 20px)","overflow","auto"],[3,"project"],[2,"height","calc(100vh - 64px*4 - 20px)","overflow","auto"],[3,"projectSelected","projectQuery"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","hidePageSize","pageIndex"],[3,"deleted","updated","project"]],template:function(t,s){t&1&&(r(0,"div",1)(1,"div",2)(2,"mat-toolbar")(3,"mat-toolbar-row")(4,"span"),p(5,"Project"),a(),r(6,"button",3),h("click",function(){return s.openCreateProjectDialog()}),r(7,"mat-icon"),p(8,"create_new_folder"),a()()()(),r(9,"div",4)(10,"form",5)(11,"mat-form-field",6),x(12,"input",7),r(13,"mat-label"),p(14,"Search Project"),a()()(),f(15,Qe,2,1),a()(),r(16,"div",8)(17,"mat-toolbar")(18,"mat-toolbar-row")(19,"span"),f(20,Ne,1,1)(21,Ge,1,0),a()()(),r(22,"div",9),f(23,ke,1,1,"app-project-view",10),a()()()),t&2&&(c(10),m("formGroup",s.form),c(5),_(s.projectQuery?15:-1),c(5),_(s.selectedProject?20:21),c(3),_(s.selectedProject?23:-1))},dependencies:[de,me,V,I,ue,z,Q,T,D,F,N,G,A,B,L,$,he],styles:[".project-side-nav[_ngcontent-%COMP%]{width:300px;border-right:1px solid #000000;display:flex;flex-direction:column;height:calc(100vh - 64px)}.project-main-content[_ngcontent-%COMP%]{flex:1}"]});let i=n;return i})();var ze=[{path:"",component:H},{path:":projectID",component:H}],ut=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=K({type:n}),n.\u0275inj=J({imports:[ee,ie.forChild(ze)]});let i=n;return i})();export{ut as ProjectModule};
