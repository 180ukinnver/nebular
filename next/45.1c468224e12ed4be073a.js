(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{cqwV:function(t,n,e){"use strict";e.r(n),e.d(n,"OAuth2PlaygroundModule",(function(){return S}));var o=e("ofXK"),c=e("3Pt+"),i=e("tk/3"),u=e("0AKQ"),r=e("F4EV"),s=e("Abgx"),a=e("X/Iy"),b=e("89WS"),l=e("tyNb"),p=e("1G5W"),h=e("XNiG"),f=e("fXoL"),g=e("BDhN"),d=e("vuB0"),y=function(){function t(t,n){var e=this;this.authService=t,this.router=n,this.destroy$=new h.a,this.authService.authenticate("google").pipe(Object(p.a)(this.destroy$)).subscribe((function(t){t.isSuccess()&&t.getRedirect()&&e.router.navigateByUrl(t.getRedirect())}))}return t.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},t.\u0275fac=function(n){return new(n||t)(f.Qb(g.a),f.Qb(l.c))},t.\u0275cmp=f.Kb({type:t,selectors:[["nb-playground-oauth2-callback"]],decls:3,vars:0,template:function(t,n){1&t&&(f.Wb(0,"nb-layout"),f.Wb(1,"nb-layout-column"),f.Lc(2,"Authenticating..."),f.Vb(),f.Vb())},directives:[d.b,d.a],encapsulation:2}),t}(),k=e("S+eJ");function m(t,n){if(1&t){var e=f.Xb();f.Wb(0,"button",2),f.hc("click",(function(){return f.Cc(e),f.lc().login()})),f.Lc(1,"Sign In with Google"),f.Vb()}}function v(t,n){if(1&t){var e=f.Xb();f.Wb(0,"button",3),f.hc("click",(function(){return f.Cc(e),f.lc().logout()})),f.Lc(1,"Sign Out"),f.Vb()}}var w=[{path:"",component:function(){function t(t){var n=this;this.authService=t,this.destroy$=new h.a,this.authService.onTokenChange().pipe(Object(p.a)(this.destroy$)).subscribe((function(t){n.token=null,t&&t.isValid()&&(n.token=t)}))}return t.prototype.login=function(){this.authService.authenticate("google").pipe(Object(p.a)(this.destroy$)).subscribe((function(t){}))},t.prototype.logout=function(){this.authService.logout("google").pipe(Object(p.a)(this.destroy$)).subscribe((function(t){}))},t.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},t.\u0275fac=function(n){return new(n||t)(f.Qb(g.a))},t.\u0275cmp=f.Kb({type:t,selectors:[["nb-playground-auth"]],decls:11,vars:6,consts:[["nbButton","","status","success",3,"click",4,"ngIf"],["nbButton","","status","warning",3,"click",4,"ngIf"],["nbButton","","status","success",3,"click"],["nbButton","","status","warning",3,"click"]],template:function(t,n){1&t&&(f.Wb(0,"nb-layout"),f.Wb(1,"nb-layout-column"),f.Wb(2,"nb-card"),f.Wb(3,"nb-card-body"),f.Wb(4,"p"),f.Lc(5),f.Vb(),f.Wb(6,"p"),f.Lc(7),f.mc(8,"json"),f.Vb(),f.Jc(9,m,2,0,"button",0),f.Jc(10,v,2,0,"button",1),f.Vb(),f.Vb(),f.Vb(),f.Vb()),2&t&&(f.Db(5),f.Nc("Current User Authenticated: ",!!n.token,""),f.Db(2),f.Nc("Current User Token: ",f.nc(8,4,n.token),""),f.Db(2),f.rc("ngIf",!n.token),f.Db(1),f.rc("ngIf",n.token))},directives:[d.b,d.a,k.b,k.a,o.o],pipes:[o.i],encapsulation:2}),t}()},{path:"callback",component:y}],V=function(){function t(){}return t.\u0275mod=f.Ob({type:t}),t.\u0275inj=f.Nb({factory:function(n){return new(n||t)},imports:[[l.g.forChild(w)],l.g]}),t}(),S=function(){function t(){}return t.\u0275mod=f.Ob({type:t}),t.\u0275inj=f.Nb({factory:function(n){return new(n||t)},imports:[[o.c,c.g,i.c,s.a.forRoot({strategies:[a.a.setup({name:"google",clientId:"806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com",clientSecret:"",authorize:{endpoint:"https://accounts.google.com/o/oauth2/v2/auth",responseType:b.c.TOKEN,scope:"https://www.googleapis.com/auth/userinfo.profile",redirectUri:"https://akveo.github.io/nebular/example/oauth2/callback"},redirect:{success:"/example/oauth2"}})]}),u.a,r.a,V]]}),t}()}}]);