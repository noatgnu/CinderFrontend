import{a as ie,b as re,d as ae}from"./chunk-W7QCYLEC.js";import{e as z,g as q}from"./chunk-WV7MVBY3.js";import{a as A}from"./chunk-J77SK4ZO.js";import{a as V}from"./chunk-CPT4DPP3.js";import{Aa as U,Ca as T,Da as te,Ea as B,Ha as Q,Ia as R,Ka as D,Ma as j,Q as y,R as x,S as I,ka as E,ma as p,oa as P,pa as L,ra as C,ta as M,wa as k,xa as F,ya as N}from"./chunk-75XGRW5Y.js";import"./chunk-HX3ESI56.js";import{p as ee}from"./chunk-QJ2HU2ZW.js";import{Aa as O,Ab as b,Ba as W,Bb as d,Jb as g,Kb as v,Lb as e,Mb as r,Nb as u,Rb as K,Ub as f,Wb as X,_b as Y,bb as J,ed as Z,fb as n,gb as h,gc as a,hc as _,ic as S,ja as $,oc as G,sa as w,ta as H}from"./chunk-TUTLJQZA.js";var oe=(s,c)=>c.id;function fe(s,c){if(s&1){let i=K();e(0,"mat-chip",16),f("removed",function(){let t=O(i).$implicit,l=X();return W(l.removeLabGroup(t))}),a(1),e(2,"mat-icon",17),a(3,"cancel"),r()()}if(s&2){let i=c.$implicit;n(),S(" ",i.name," ")}}function ce(s,c){if(s&1&&(e(0,"mat-list-option",10),a(1),r()),s&2){let i=c.$implicit;d("value",i),n(),S(" ",i.name," ")}}var se=(()=>{class s{set user(i){i?(this._user=i,this.form.patchValue({username:this._user.username,first_name:this._user.first_name,last_name:this._user.last_name,email:this._user.email})):this.web.getCurrentUser().subscribe(o=>{this._user=o,this.form.patchValue({username:this._user.username,first_name:this._user.first_name,last_name:this._user.last_name,email:this._user.email})}),this.web.getCurrentUserLabGroups().subscribe(o=>{this.labGroupForm.controls.lab_group.setValue(o)}),this.fetchLabGroups()}get user(){return this._user}constructor(i,o,t){this.fb=i,this.web=o,this.snackBar=t,this._user=null,this.hidePassword=!0,this.hideConfirmPassword=!0,this.form=this.fb.group({username:["",p.required],first_name:["",p.required],last_name:["",p.required],email:["",p.required]}),this.passwordForm=this.fb.group({new_password:["",p.required],confirm_password:["",p.required]}),this.labGroupForm=this.fb.group({lab_group:new C([]),search_term:new C("")}),this.labGroupQuery=null,this.currentIndex=0,this.size=5}updateUser(){this.web.updateUser(this.user.id,this.form.value.email,null,this.form.value.last_name,this.form.value.first_name).subscribe(i=>{this.user=i,this.snackBar.open("User updated","Close",{duration:2e3})},i=>{this.snackBar.open("Error updating user","Close",{duration:2e3})})}updatePassword(){this.web.updateUser(this.user.id,null,this.passwordForm.value.new_password,null,null).subscribe(i=>{this.user=i,this.snackBar.open("Password updated","Close",{duration:2e3})},i=>{this.snackBar.open("Error updating password","Close",{duration:2e3})})}fetchLabGroups(){this.labGroupForm.controls.search_term.value?this.web.getLabGroups(this.labGroupForm.controls.search_term.value,this.size,this.currentIndex).subscribe(i=>{this.labGroupQuery=i}):this.web.getLabGroups(void 0,this.size,this.currentIndex).subscribe(i=>{this.labGroupQuery=i})}removeLabGroup(i){if(!this.labGroupForm.controls.lab_group.value)return;let o=this.labGroupForm.controls.lab_group.value.filter(t=>t.id!==i.id);this.labGroupForm.controls.lab_group.setValue(o)}previousPage(){this.currentIndex>0&&(this.currentIndex-=this.size,this.fetchLabGroups())}nextPage(){this.labGroupQuery&&this.labGroupQuery.results.length===this.size&&(this.currentIndex+=this.size,this.fetchLabGroups())}onLabGroupSelect(i){let o=i.options,t=this.labGroupForm.controls.lab_group.value||[];o.forEach(l=>{let m=l.value;t.some(me=>me.id===m.id)||t.push(m)}),this.labGroupForm.controls.lab_group.setValue(t)}onPageChange(i){this.size=i.pageSize,this.currentIndex=i.pageIndex*this.size,this.fetchLabGroups()}updateLabGroups(){this.web.getCurrentUserLabGroups().subscribe(i=>{let o=this.labGroupForm.controls.lab_group.value||[],t=new Set(o.map(m=>m.id)),l=new Set(i.map(m=>m.id));t.forEach(m=>{l.has(m)||this.web.addLabGroupMember(m,this.user.id).subscribe()}),l.forEach(m=>{t.has(m)||this.web.removeLabGroupMember(m,this.user.id).subscribe()})})}static{this.\u0275fac=function(o){return new(o||s)(h(N),h(j),h(A))}}static{this.\u0275cmp=w({type:s,selectors:[["app-user"]],inputs:{user:"user"},standalone:!0,features:[G],decls:59,vars:13,consts:[[2,"display","flex","flex-direction","column","align-items","center","gap","20px"],[2,"width","600px"],[2,"display","flex","flex-direction","column","gap","20px","padding","20px",3,"ngSubmit","formGroup"],["matInput","","formControlName","first_name"],["matInput","","formControlName","last_name"],["matInput","","formControlName","email"],["mat-raised-button","","color","primary","type","submit"],[2,"display","flex","flex-direction","column","gap","20px","padding","20px",3,"formGroup"],["matInput","","formControlName","search_term",3,"input"],[3,"selectionChange"],[3,"value"],[3,"page","length","pageSize"],["mat-raised-button","","color","primary",3,"click"],["matInput","","formControlName","new_password","placeholder","Password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","confirm_password","placeholder","Confirm Password",3,"type"],[3,"removed"],["matChipRemove",""]],template:function(o,t){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),a(3,"Basic Information"),r(),e(4,"form",2),f("ngSubmit",function(){return t.updateUser()}),e(5,"mat-form-field"),u(6,"input",3),e(7,"mat-label"),a(8,"First Name"),r()(),e(9,"mat-form-field"),u(10,"input",4),e(11,"mat-label"),a(12,"Last Name"),r()(),e(13,"mat-form-field"),u(14,"input",5),e(15,"mat-label"),a(16,"Email Address"),r()(),e(17,"div")(18,"button",6),a(19,"Update Basic Information"),r()()(),u(20,"mat-divider"),e(21,"h1"),a(22,"Lab Group"),r(),e(23,"form",7),a(24," User Belongs To Lab Groups: "),e(25,"mat-chip-set"),g(26,fe,4,1,"mat-chip",null,oe),r(),a(28," Search Lab Groups: "),e(29,"mat-form-field")(30,"input",8),f("input",function(){return t.fetchLabGroups()}),r()(),e(31,"mat-selection-list",9),f("selectionChange",function(m){return t.onLabGroupSelect(m)}),g(32,ce,2,2,"mat-list-option",10,oe),r(),e(34,"mat-paginator",11),f("page",function(m){return t.onPageChange(m)}),r(),e(35,"div")(36,"button",12),f("click",function(){return t.updateLabGroups()}),a(37,"Update Lab Groups"),r()()(),u(38,"mat-divider"),e(39,"h1"),a(40,"Change Password"),r(),e(41,"form",2),f("ngSubmit",function(){return t.updatePassword()}),e(42,"mat-form-field"),u(43,"input",13),e(44,"mat-label"),a(45,"Password"),r(),e(46,"button",14),f("click",function(){return t.hidePassword=!t.hidePassword}),e(47,"mat-icon"),a(48),r()()(),e(49,"mat-form-field"),u(50,"input",15),e(51,"mat-label"),a(52,"Confirm Password"),r(),e(53,"button",14),f("click",function(){return t.hideConfirmPassword=!t.hideConfirmPassword}),e(54,"mat-icon"),a(55),r()()(),e(56,"div")(57,"button",6),a(58,"Submit"),r()()()()()),o&2&&(n(4),d("formGroup",t.form),n(19),d("formGroup",t.labGroupForm),n(3),v(t.labGroupForm.controls.lab_group.value),n(6),v(t.labGroupQuery==null?null:t.labGroupQuery.results),n(2),d("length",t.labGroupQuery==null?null:t.labGroupQuery.count)("pageSize",t.size),n(7),d("formGroup",t.passwordForm),n(2),d("type",t.hidePassword?"password":"text"),n(3),b("aria-label","Hide password")("aria-pressed",t.hidePassword),n(2),_(t.hidePassword?"visibility_off":"visibility"),n(2),d("type",t.hideConfirmPassword?"password":"text"),n(3),b("aria-label","Hide confirm password")("aria-pressed",t.hideConfirmPassword),n(2),_(t.hideConfirmPassword?"visibility_off":"visibility"))},dependencies:[V,U,M,E,P,L,k,F,T,R,Q,x,z,q,ie,y,ae,re,D,I,B]})}}return s})();var he=(s,c)=>c.id;function be(s,c){if(s&1&&(e(0,"mat-list-option",15),a(1),r()),s&2){let i=c.$implicit;d("value",i),n(),S(" ",i.name," ")}}var le=(()=>{class s{set token(i){this._token=i,this.form.controls.username.setValue(i.split(":")[0]);let o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.form.controls.username.value&&o.test(this.form.controls.username.value)&&this.form.controls.email.setValue(this.form.controls.username.value),this.form.controls.token.setValue(this._token)}get token(){return this._token}constructor(i,o,t){this.webService=i,this.fb=o,this.snackBar=t,this._token="",this.hidePassword=!0,this.hideConfirmPassword=!0,this.form=this.fb.group({email:["",[p.required,p.email]],password:["",[p.required,p.minLength(8)]],confirm_password:["",[p.required,p.minLength(8)]],token:["",p.required],username:["",p.required],first_name:["",p.required],last_name:["",p.required],lab_group:new C([]),search_lab_group:[""]}),this.labGroupQuery=null,this.limit=5,this.offset=0,this.webService.getLabGroups("",this.limit,this.offset).subscribe(l=>{this.labGroupQuery=l}),this.form.controls.search_lab_group.valueChanges.subscribe(l=>{l&&this.webService.getLabGroups(l,this.limit,this.offset).subscribe(m=>{this.labGroupQuery=m})})}createAccount(){if(this.form.value.password!==this.form.value.confirm_password){this.snackBar.open("Passwords do not match","Close",{duration:2e3});return}this.form.invalid||this.form.value.username&&this.form.value.token&&this.form.value.email&&this.form.value.last_name&&this.form.value.password&&this.form.value.first_name&&this.webService.createUserWithToken(this.form.value.username,this.form.value.token,this.form.value.email,this.form.value.last_name,this.form.value.password,this.form.value.first_name,this.form.value.lab_group).subscribe(i=>{this.snackBar.open("Account created","Close",{duration:2e3})},i=>{this.snackBar.open("Failed to create account","Close",{duration:2e3})})}onPageChange(i){this.limit=i.pageSize,this.offset=i.pageIndex*this.limit,this.form.controls.search_lab_group.value?this.webService.getLabGroups(this.form.controls.search_lab_group.value,this.limit,this.offset).subscribe(o=>{this.labGroupQuery=o}):this.webService.getLabGroups("",this.limit,this.offset).subscribe(o=>{this.labGroupQuery=o})}static{this.\u0275fac=function(o){return new(o||s)(h(j),h(N),h(A))}}static{this.\u0275cmp=w({type:s,selectors:[["app-register"]],inputs:{token:"token"},standalone:!0,features:[G],decls:66,vars:15,consts:[[2,"display","flex","flex-direction","column","align-items","center","gap","20px"],[2,"width","600px"],[3,"href"],[2,"color","#ba0000"],[2,"display","flex","flex-direction","column","gap","20px","padding","20px",3,"ngSubmit","formGroup"],["matInput","","formControlName","username","placeholder","Username","type","text","readonly",""],["matInput","","formControlName","email","placeholder","Email","type","email"],["matInput","","formControlName","password","placeholder","Password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","confirm_password","placeholder","Confirm Password",3,"type"],["matInput","","formControlName","first_name","placeholder","First Name","type","text"],["matInput","","formControlName","last_name","placeholder","Last Name","type","text"],[2,"display","flex","flex-direction","column","gap","10px"],["matInput","","formControlName","search_lab_group"],["formControlName","lab_group",3,"multiple"],[3,"value"],[3,"page","length","pageSize","pageIndex"],["matInput","","formControlName","token","type","text","readonly",""],["mat-raised-button","","color","primary"]],template:function(o,t){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1")(3,"a",2)(4,"span",3),a(5,"Registration"),r()()(),e(6,"form",4),f("ngSubmit",function(){return t.createAccount()}),e(7,"mat-form-field"),u(8,"input",5),e(9,"mat-label"),a(10,"Username"),r(),e(11,"mat-hint"),a(12,"Username automatically assigned"),r()(),e(13,"mat-form-field"),u(14,"input",6),e(15,"mat-label"),a(16,"Email"),r(),e(17,"mat-hint"),a(18,"Must be a valid email"),r()(),e(19,"mat-form-field"),u(20,"input",7),e(21,"mat-label"),a(22,"Password"),r(),e(23,"button",8),f("click",function(){return t.hidePassword=!t.hidePassword}),e(24,"mat-icon"),a(25),r()(),e(26,"mat-hint"),a(27,"Password must be at least 8 characters long"),r()(),e(28,"mat-form-field"),u(29,"input",9),e(30,"mat-label"),a(31,"Confirm Password"),r(),e(32,"button",8),f("click",function(){return t.hideConfirmPassword=!t.hideConfirmPassword}),e(33,"mat-icon"),a(34),r()(),e(35,"mat-hint"),a(36,"Confirm password must match"),r()(),e(37,"mat-form-field"),u(38,"input",10),e(39,"mat-label"),a(40,"First Name"),r()(),e(41,"mat-form-field"),u(42,"input",11),e(43,"mat-label"),a(44,"Last Name"),r()(),u(45,"mat-divider"),e(46,"div",12)(47,"div"),a(48," Lab Group Selection: "),r(),e(49,"mat-form-field"),u(50,"input",13),e(51,"mat-label"),a(52,"Search Lab Group"),r()(),e(53,"mat-selection-list",14),g(54,be,2,2,"mat-list-option",15,he),r(),e(56,"mat-paginator",16),f("page",function(m){return t.onPageChange(m)}),r()(),u(57,"mat-divider"),e(58,"mat-form-field"),u(59,"input",17),e(60,"mat-label"),a(61,"Registration token"),r(),e(62,"mat-hint"),a(63,"Automatically assigned"),r()(),e(64,"button",18),a(65,"Register"),r()()()()),o&2&&(n(3),Y("href","/#/user/register/",t.token,"",J),n(3),d("formGroup",t.form),n(14),d("type",t.hidePassword?"password":"text"),n(3),b("aria-label","Hide password")("aria-pressed",t.hidePassword),n(2),_(t.hidePassword?"visibility_off":"visibility"),n(4),d("type",t.hideConfirmPassword?"password":"text"),n(3),b("aria-label","Hide confirm password")("aria-pressed",t.hideConfirmPassword),n(2),_(t.hideConfirmPassword?"visibility_off":"visibility"),n(19),d("multiple",!1),n(),v(t.labGroupQuery==null?null:t.labGroupQuery.results),n(2),d("length",t.labGroupQuery==null?null:t.labGroupQuery.count)("pageSize",t.limit)("pageIndex",t.offset))},dependencies:[U,M,E,P,L,k,F,Q,R,T,x,y,I,B,te,z,q,D,V]})}}return s})();var _e=[{path:"",component:se},{path:"register/:token",component:le}],je=(()=>{class s{static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275mod=H({type:s})}static{this.\u0275inj=$({imports:[Z,ee.forChild(_e)]})}}return s})();export{je as UserModule};