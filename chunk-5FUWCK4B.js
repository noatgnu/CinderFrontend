import{b as $,c as O,d as W,e as H,f as J,h as K}from"./chunk-JIDGBZP6.js";import{$ as T,Aa as U,I,ba as M,ca as A,da as w,fa as E,ga as g,ia as L,ja as N,la as c,ma as F,oa as V,pa as Q,qa as k,sa as R,ua as q,xa as z,ya as B}from"./chunk-3ISCNT2B.js";import{$b as G,Ab as v,Bb as P,Cb as o,Db as a,Eb as h,Ib as D,Lb as j,Nb as u,Xb as m,Za as s,Zb as x,_a as C,oa as S,rb as f,tb as d,wa as b,xa as y,yb as _}from"./chunk-SHGYA7ZZ.js";var Y=(e,n)=>n.id;function Z(e,n){if(e&1&&(o(0,"mat-list-option",9),m(1),a()),e&2){let i=n.$implicit;d("value",i),s(),x(" ",i.name," ")}}function ee(e,n){if(e&1){let i=D();o(0,"mat-selection-list",8),v(1,Z,2,2,"mat-list-option",9,Y),a(),o(3,"mat-paginator",10),j("page",function(r){b(i);let l=u(3);return y(l.handlePageEvent(r))}),a()}if(e&2){let i=u(3);d("multiple",!1),s(),P(i.projectQuery.results),s(2),d("pageSize",i.projectPageLimit)("length",i.projectQuery.count)("pageIndex",i.projectPageIndex)}}function te(e,n){if(e&1&&f(0,ee,4,4),e&2){let i=u(2);_(i.projectQuery.results.length>0?0:-1)}}function ie(e,n){if(e&1&&(o(0,"form",1)(1,"mat-form-field",6),h(2,"input",7),o(3,"mat-label"),m(4,"Project Search Term"),a()(),f(5,te,1,1),a()),e&2){let i=u();d("formGroup",i.formProjectSearch),s(5),_(i.projectQuery?5:-1)}}function oe(e,n){if(e&1&&(o(0,"mat-list")(1,"mat-list-item")(2,"span",11)(3,"b"),m(4),a()()()()),e&2){let i=u();s(4),x("Selected project: ",i.project.name,"")}}function ne(e,n){e&1&&h(0,"mat-selection-list")}var he=(()=>{let n=class n{set project(t){this._project=t,this.form.controls.project_id.setValue(t.id),this.form.controls.project_name.setValue(t.name)}get project(){return this._project}constructor(t,r,l){this.web=t,this.fb=r,this.matDialogRef=l,this.enableProjectSelection=!1,this.form=this.fb.group({name:new c("",g.required),description:new c("",g.required),project_name:new c("",g.required),project_id:new c(0,g.required)}),this.formProjectSearch=this.fb.group({searchTerm:new c(""),selectedProject:new c(void 0)}),this.projectPageLimit=5,this.projectPageIndex=0,this.projectQuery=void 0,this.formProjectSearch.controls.selectedProject.valueChanges.subscribe(p=>{p&&(this.project=p[0])}),this.formProjectSearch.controls.searchTerm.valueChanges.subscribe(p=>{this.web.getProjects(void 0,this.projectPageLimit,0,p).subscribe(X=>{this.projectQuery=X})})}close(){this.matDialogRef.close()}submit(){this.form.valid&&this.project&&this.form.value.name&&this.form.value.description&&this.form.value.project_id&&this.web.createAnalysisGroup(this.form.value.name,this.form.value.description,this.form.value.project_id).subscribe(t=>{this.matDialogRef.close(t)},t=>{this.matDialogRef.close(t)})}getProjects(t,r){this.web.getProjects(void 0,r,t,this.formProjectSearch.value.searchTerm).subscribe(l=>{this.projectQuery=l})}handlePageEvent(t){this.projectPageIndex=t.pageIndex;let r=t.pageIndex*t.pageSize;this.getProjects(r,this.projectPageLimit)}};n.\u0275fac=function(r){return new(r||n)(C(U),C(k),C(T))},n.\u0275cmp=S({type:n,selectors:[["app-create-analysis-group-dialog"]],inputs:{enableProjectSelection:"enableProjectSelection",project:"project"},standalone:!0,features:[G],decls:20,vars:3,consts:[["mat-dialog-title",""],[3,"formGroup"],[2,"display","flex","flex-direction","column","gap","1px",3,"formGroup"],["matInput","","formControlName","name","type","text","placeholder","Analysis Group Name"],["matInput","","formControlName","description","placeholder","Analysis Group Description"],["mat-button","",3,"click"],[2,"width","100%"],["matInput","","formControlName","searchTerm","placeholder","Project Search","type","search"],["formControlName","selectedProject",3,"multiple"],[3,"value"],[3,"page","pageSize","length","pageIndex"],["matListItemTitle",""]],template:function(r,l){r&1&&(o(0,"h2",0),m(1,"Create Analysis Group"),a(),o(2,"mat-dialog-content"),f(3,ie,6,2,"form",1),o(4,"form",2),f(5,oe,5,1,"mat-list")(6,ne,1,0,"mat-selection-list"),o(7,"mat-form-field"),h(8,"input",3),o(9,"mat-label"),m(10,"Analysis Group Name"),a()(),o(11,"mat-form-field"),h(12,"textarea",4),o(13,"mat-label"),m(14,"Analysis Group Description"),a()()()(),o(15,"mat-dialog-actions")(16,"button",5),j("click",function(){return l.submit()}),m(17,"Create"),a(),o(18,"button",5),j("click",function(){return l.close()}),m(19,"Close"),a()()),r&2&&(s(3),_(l.enableProjectSelection?3:-1),s(),d("formGroup",l.form),s(),_(l.project?5:6))},dependencies:[M,A,R,F,E,L,N,V,Q,z,B,w,I,J,H,O,W,q,$,K]});let e=n;return e})();export{he as a};
