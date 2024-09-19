import{a as re,b as ae,d as oe}from"./chunk-LU7HVNBM.js";import{a as V,f as q,h as D,j}from"./chunk-OZBYPAFL.js";import{a as A}from"./chunk-QMSCXWF6.js";import{a as $}from"./chunk-HQFSCXZS.js";import{Aa as U,Ca as T,Ea as B,Fa as ie,Ga as Q,Ja as z,Ka as R,Q as x,R as I,S as E,ma as P,oa as d,qa as L,ra as k,ta as C,va as F,ya as M,za as N}from"./chunk-RBHTY4FE.js";import"./chunk-4N6BO7AP.js";import{p as te}from"./chunk-KCCSOALX.js";import{Aa as W,Ab as _,Ba as J,Bb as c,Jb as v,Kb as S,Lb as e,Mb as i,Nb as p,Rb as X,Ub as f,Wb as Y,_b as Z,bb as K,ed as ee,fb as s,gb as b,gc as a,hc as g,ic as w,ja as H,oc as y,sa as G,ta as O}from"./chunk-QNTGE4BG.js";var ne=(l,n)=>n.id;function fe(l,n){if(l&1){let h=X();e(0,"mat-chip",16),f("removed",function(){let o=W(h).$implicit,t=Y();return J(t.removeLabGroup(o))}),a(1),e(2,"mat-icon",17),a(3,"cancel"),i()()}if(l&2){let h=n.$implicit;s(),w(" ",h.name," ")}}function he(l,n){if(l&1&&(e(0,"mat-list-option",10),a(1),i()),l&2){let h=n.$implicit;c("value",h),s(),w(" ",h.name," ")}}var le=(()=>{let n=class n{set user(r){r?this._user=r:this.web.getCurrentUser().subscribe(o=>{this._user=o}),this.form.patchValue(r),this.web.getCurrentUserLabGroups().subscribe(o=>{this.labGroupForm.controls.lab_group.setValue(o)}),this.fetchLabGroups(),console.log(r),console.log(this._user)}get user(){return this._user}constructor(r,o,t){this.fb=r,this.web=o,this.snackBar=t,this._user=null,this.hidePassword=!0,this.hideConfirmPassword=!0,this.form=this.fb.group({username:["",d.required],first_name:["",d.required],last_name:["",d.required],email:["",d.required]}),this.passwordForm=this.fb.group({new_password:["",d.required],confirm_password:["",d.required]}),this.labGroupForm=this.fb.group({lab_group:new C([]),search_term:new C("")}),this.labGroupQuery=null,this.currentIndex=0,this.size=5}updateUser(){this.web.updateUser(this.user.id,this.form.value.email,null,this.form.value.last_name,this.form.value.first_name).subscribe(r=>{this.user=r,this.snackBar.open("User updated","Close",{duration:2e3})},r=>{this.snackBar.open("Error updating user","Close",{duration:2e3})})}updatePassword(){this.web.updateUser(this.user.id,null,this.passwordForm.value.new_password,null,null).subscribe(r=>{this.user=r,this.snackBar.open("Password updated","Close",{duration:2e3})},r=>{this.snackBar.open("Error updating password","Close",{duration:2e3})})}fetchLabGroups(){this.labGroupForm.controls.search_term.value?this.web.getLabGroups(this.labGroupForm.controls.search_term.value,this.size,this.currentIndex).subscribe(r=>{this.labGroupQuery=r}):this.web.getLabGroups(void 0,this.size,this.currentIndex).subscribe(r=>{this.labGroupQuery=r})}removeLabGroup(r){if(!this.labGroupForm.controls.lab_group.value)return;let o=this.labGroupForm.controls.lab_group.value.filter(t=>t.id!==r.id);this.labGroupForm.controls.lab_group.setValue(o)}previousPage(){this.currentIndex>0&&(this.currentIndex-=this.size,this.fetchLabGroups())}nextPage(){this.labGroupQuery&&this.labGroupQuery.results.length===this.size&&(this.currentIndex+=this.size,this.fetchLabGroups())}onLabGroupSelect(r){let o=r.options,t=this.labGroupForm.controls.lab_group.value||[];o.forEach(m=>{let u=m.value;t.some(ue=>ue.id===u.id)||t.push(u)}),this.labGroupForm.controls.lab_group.setValue(t)}onPageChange(r){this.size=r.pageSize,this.currentIndex=r.pageIndex*this.size,this.fetchLabGroups()}updateLabGroups(){this.web.getCurrentUserLabGroups().subscribe(r=>{let o=this.labGroupForm.controls.lab_group.value||[],t=new Set(o.map(u=>u.id)),m=new Set(r.map(u=>u.id));t.forEach(u=>{m.has(u)||this.web.addLabGroupMember(u,this.user.id).subscribe()}),o.forEach(u=>{m.has(u.id)||this.web.removeLabGroupMember(u.id,this.user.id).subscribe()})})}};n.\u0275fac=function(o){return new(o||n)(b(U),b(A),b($))},n.\u0275cmp=G({type:n,selectors:[["app-user"]],inputs:{user:"user"},standalone:!0,features:[y],decls:59,vars:13,consts:[[2,"display","flex","flex-direction","column","align-items","center","gap","20px"],[2,"width","600px"],[2,"display","flex","flex-direction","column","gap","20px","padding","20px",3,"ngSubmit","formGroup"],["matInput","","formControlName","first_name"],["matInput","","formControlName","last_name"],["matInput","","formControlName","email"],["mat-raised-button","","color","primary","type","submit"],[2,"display","flex","flex-direction","column","gap","20px","padding","20px",3,"formGroup"],["matInput","","formControlName","search_term",3,"input"],[3,"selectionChange"],[3,"value"],[3,"page","length","pageSize"],["mat-raised-button","","color","primary",3,"click"],["matInput","","formControlName","new_password","placeholder","Password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","confirm_password","placeholder","Confirm Password",3,"type"],[3,"removed"],["matChipRemove",""]],template:function(o,t){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),a(3,"Basic Information"),i(),e(4,"form",2),f("ngSubmit",function(){return t.updateUser()}),e(5,"mat-form-field"),p(6,"input",3),e(7,"mat-label"),a(8,"First Name"),i()(),e(9,"mat-form-field"),p(10,"input",4),e(11,"mat-label"),a(12,"Last Name"),i()(),e(13,"mat-form-field"),p(14,"input",5),e(15,"mat-label"),a(16,"Email Address"),i()(),e(17,"div")(18,"button",6),a(19,"Update Basic Information"),i()()(),p(20,"mat-divider"),e(21,"h1"),a(22,"Lab Group"),i(),e(23,"form",7),a(24," User Belongs To Lab Groups: "),e(25,"mat-chip-set"),v(26,fe,4,1,"mat-chip",null,ne),i(),a(28," Search Lab Groups: "),e(29,"mat-form-field")(30,"input",8),f("input",function(){return t.fetchLabGroups()}),i()(),e(31,"mat-selection-list",9),f("selectionChange",function(u){return t.onLabGroupSelect(u)}),v(32,he,2,2,"mat-list-option",10,ne),i(),e(34,"mat-paginator",11),f("page",function(u){return t.onPageChange(u)}),i(),e(35,"div")(36,"button",12),f("click",function(){return t.updateLabGroups()}),a(37,"Update Lab Groups"),i()()(),p(38,"mat-divider"),e(39,"h1"),a(40,"Change Password"),i(),e(41,"form",2),f("ngSubmit",function(){return t.updatePassword()}),e(42,"mat-form-field"),p(43,"input",13),e(44,"mat-label"),a(45,"Password"),i(),e(46,"button",14),f("click",function(){return t.hidePassword=!t.hidePassword}),e(47,"mat-icon"),a(48),i()()(),e(49,"mat-form-field"),p(50,"input",15),e(51,"mat-label"),a(52,"Confirm Password"),i(),e(53,"button",14),f("click",function(){return t.hideConfirmPassword=!t.hideConfirmPassword}),e(54,"mat-icon"),a(55),i()()(),e(56,"div")(57,"button",6),a(58,"Submit"),i()()()()()),o&2&&(s(4),c("formGroup",t.form),s(19),c("formGroup",t.labGroupForm),s(3),S(t.labGroupForm.controls.lab_group.value),s(6),S(t.labGroupQuery==null?null:t.labGroupQuery.results),s(2),c("length",t.labGroupQuery==null?null:t.labGroupQuery.count)("pageSize",t.size),s(7),c("formGroup",t.passwordForm),s(2),c("type",t.hidePassword?"password":"text"),s(3),_("aria-label","Hide password")("aria-pressed",t.hidePassword),s(2),g(t.hidePassword?"visibility_off":"visibility"),s(2),c("type",t.hideConfirmPassword?"password":"text"),s(3),_("aria-label","Hide confirm password")("aria-pressed",t.hideConfirmPassword),s(2),g(t.hideConfirmPassword?"visibility_off":"visibility"))},dependencies:[V,T,F,P,L,k,M,N,B,R,z,I,q,D,re,x,oe,ae,j,E,Q]});let l=n;return l})();var be=(l,n)=>n.id;function _e(l,n){if(l&1&&(e(0,"mat-list-option",15),a(1),i()),l&2){let h=n.$implicit;c("value",h),s(),w(" ",h.name," ")}}var me=(()=>{let n=class n{set token(r){this._token=r,this.form.controls.username.setValue(r.split(":")[0]);let o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.form.controls.username.value&&o.test(this.form.controls.username.value)&&this.form.controls.email.setValue(this.form.controls.username.value),this.form.controls.token.setValue(this._token)}get token(){return this._token}constructor(r,o,t){this.webService=r,this.fb=o,this.snackBar=t,this._token="",this.hidePassword=!0,this.hideConfirmPassword=!0,this.form=this.fb.group({email:["",[d.required,d.email]],password:["",[d.required,d.minLength(8)]],confirm_password:["",[d.required,d.minLength(8)]],token:["",d.required],username:["",d.required],first_name:["",d.required],last_name:["",d.required],lab_group:new C([]),search_lab_group:[""]}),this.labGroupQuery=null,this.limit=5,this.offset=0,this.webService.getLabGroups("",this.limit,this.offset).subscribe(m=>{this.labGroupQuery=m}),this.form.controls.search_lab_group.valueChanges.subscribe(m=>{m&&this.webService.getLabGroups(m,this.limit,this.offset).subscribe(u=>{this.labGroupQuery=u})})}createAccount(){if(this.form.value.password!==this.form.value.confirm_password){this.snackBar.open("Passwords do not match","Close",{duration:2e3});return}this.form.invalid||this.form.value.username&&this.form.value.token&&this.form.value.email&&this.form.value.last_name&&this.form.value.password&&this.form.value.first_name&&this.webService.createUserWithToken(this.form.value.username,this.form.value.token,this.form.value.email,this.form.value.last_name,this.form.value.password,this.form.value.first_name,this.form.value.lab_group).subscribe(r=>{this.snackBar.open("Account created","Close",{duration:2e3})},r=>{this.snackBar.open("Failed to create account","Close",{duration:2e3})})}onPageChange(r){this.limit=r.pageSize,this.offset=r.pageIndex*this.limit,this.form.controls.search_lab_group.value?this.webService.getLabGroups(this.form.controls.search_lab_group.value,this.limit,this.offset).subscribe(o=>{this.labGroupQuery=o}):this.webService.getLabGroups("",this.limit,this.offset).subscribe(o=>{this.labGroupQuery=o})}};n.\u0275fac=function(o){return new(o||n)(b(A),b(U),b($))},n.\u0275cmp=G({type:n,selectors:[["app-register"]],inputs:{token:"token"},standalone:!0,features:[y],decls:66,vars:15,consts:[[2,"display","flex","flex-direction","column","align-items","center","gap","20px"],[2,"width","600px"],[3,"href"],[2,"color","#ba0000"],[2,"display","flex","flex-direction","column","gap","20px","padding","20px",3,"ngSubmit","formGroup"],["matInput","","formControlName","username","placeholder","Username","type","text","readonly",""],["matInput","","formControlName","email","placeholder","Email","type","email"],["matInput","","formControlName","password","placeholder","Password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","confirm_password","placeholder","Confirm Password",3,"type"],["matInput","","formControlName","first_name","placeholder","First Name","type","text"],["matInput","","formControlName","last_name","placeholder","Last Name","type","text"],[2,"display","flex","flex-direction","column","gap","10px"],["matInput","","formControlName","search_lab_group"],["formControlName","lab_group",3,"multiple"],[3,"value"],[3,"page","length","pageSize","pageIndex"],["matInput","","formControlName","token","type","text","readonly",""],["mat-raised-button","","color","primary"]],template:function(o,t){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1")(3,"a",2)(4,"span",3),a(5,"Registration"),i()()(),e(6,"form",4),f("ngSubmit",function(){return t.createAccount()}),e(7,"mat-form-field"),p(8,"input",5),e(9,"mat-label"),a(10,"Username"),i(),e(11,"mat-hint"),a(12,"Username automatically assigned"),i()(),e(13,"mat-form-field"),p(14,"input",6),e(15,"mat-label"),a(16,"Email"),i(),e(17,"mat-hint"),a(18,"Must be a valid email"),i()(),e(19,"mat-form-field"),p(20,"input",7),e(21,"mat-label"),a(22,"Password"),i(),e(23,"button",8),f("click",function(){return t.hidePassword=!t.hidePassword}),e(24,"mat-icon"),a(25),i()(),e(26,"mat-hint"),a(27,"Password must be at least 8 characters long"),i()(),e(28,"mat-form-field"),p(29,"input",9),e(30,"mat-label"),a(31,"Confirm Password"),i(),e(32,"button",8),f("click",function(){return t.hideConfirmPassword=!t.hideConfirmPassword}),e(33,"mat-icon"),a(34),i()(),e(35,"mat-hint"),a(36,"Confirm password must match"),i()(),e(37,"mat-form-field"),p(38,"input",10),e(39,"mat-label"),a(40,"First Name"),i()(),e(41,"mat-form-field"),p(42,"input",11),e(43,"mat-label"),a(44,"Last Name"),i()(),p(45,"mat-divider"),e(46,"div",12)(47,"div"),a(48," Lab Group Selection: "),i(),e(49,"mat-form-field"),p(50,"input",13),e(51,"mat-label"),a(52,"Search Lab Group"),i()(),e(53,"mat-selection-list",14),v(54,_e,2,2,"mat-list-option",15,be),i(),e(56,"mat-paginator",16),f("page",function(u){return t.onPageChange(u)}),i()(),p(57,"mat-divider"),e(58,"mat-form-field"),p(59,"input",17),e(60,"mat-label"),a(61,"Registration token"),i(),e(62,"mat-hint"),a(63,"Automatically assigned"),i()(),e(64,"button",18),a(65,"Register"),i()()()()),o&2&&(s(3),Z("href","/#/user/register/",t.token,"",K),s(3),c("formGroup",t.form),s(14),c("type",t.hidePassword?"password":"text"),s(3),_("aria-label","Hide password")("aria-pressed",t.hidePassword),s(2),g(t.hidePassword?"visibility_off":"visibility"),s(4),c("type",t.hideConfirmPassword?"password":"text"),s(3),_("aria-label","Hide confirm password")("aria-pressed",t.hideConfirmPassword),s(2),g(t.hideConfirmPassword?"visibility_off":"visibility"),s(19),c("multiple",!1),s(),S(t.labGroupQuery==null?null:t.labGroupQuery.results),s(2),c("length",t.labGroupQuery==null?null:t.labGroupQuery.count)("pageSize",t.limit)("pageIndex",t.offset))},dependencies:[T,F,P,L,k,M,N,z,R,B,I,x,E,Q,ie,q,D,j,V]});let l=n;return l})();var ge=[{path:"",component:le},{path:"register/:token",component:me}],Ae=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=O({type:n}),n.\u0275inj=H({imports:[ee,te.forChild(ge)]});let l=n;return l})();export{Ae as UserModule};