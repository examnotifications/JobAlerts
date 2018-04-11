webpackJsonp([1],{

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		400,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__desc_desc__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, db, datepipe) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.datepipe = datepipe;
        // backup: Observable<any[]>;
        this.flag = false;
        this.profiles = db.collection('jobs', function (ref) { return ref.where('date', ">=", (new Date(new Date().getTime() - (15 * 24 * 60 * 60 * 1000)))).orderBy('date', 'desc'); }).valueChanges();
        // this.initializeItems();    
    }
    // doInfinite(infiniteScroll) {
    //   // console.log('Begin async operation');
    //   setTimeout(() => {
    //     this.page.more();
    //     // console.log('Async operation has ended');
    //     infiniteScroll.complete();
    //   }, 500);
    // }
    // initializeItems(){
    //   this.backup=this.page.data;
    // }
    HomePage.prototype.openPage = function (desc) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__desc_desc__["a" /* DescPage */], { profile: desc });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/advait/Projects/PWA/Job Alerts/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle *ngIf="!flag">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-searchbar #searchbar *ngIf="flag" (ionInput)="getItems($event)"></ion-searchbar>   -->\n    <ion-title *ngIf="!flag">\n      Job Alerts (Beta)\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only *ngIf="!flag" (click)="searchBar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only *ngIf="flag" (click)="searchBar()">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-card *ngFor="let profile of profiles  | async; let i = index" [hidden]="filter(profile)"> -->\n  <!-- <ion-card *ngFor="let profile of profiles  | async; let i = index"> -->\n  <ion-card *ngFor="let profile of profiles | async">\n    <ion-card-content >\n      <ion-card-title *ngIf="profile.link !=\'#\' && profile.link !=\'\'">\n        <a href=\'{{profile.link}}\'>{{ profile.profile }}</a>\n      </ion-card-title>\n      <ion-card-title *ngIf="profile.link ==\'#\' || profile.link ==\'\'">\n        <a (click)=\'openPage(profile)\'>{{ profile.profile }}</a>\n      </ion-card-title>\n      <p *ngIf="profile.src!=\'VTT\'">{{ profile.date | date:"dd-MMM-yyyy" }}</p>\n      <p *ngIf="profile.src==\'VTT\' && profile.deadline == undefined">{{ profile.date | date:"dd-MMM-yyyy" }}</p>\n      <p text-capitalize *ngIf="profile.src==\'VTT\' && profile.deadline != undefined">{{ profile.deadline }}</p>\n      <p *ngIf="profile.src==\'VTT\' && profile.pkg != \'Confidential\'"> {{ profile.pkg }}</p>\n      <p>{{ profile.company }} ({{ profile.city }})</p>\n      <!-- <p>{{ i }}</p> -->\n      <ion-row>\n          <ion-col>\n            <ion-icon name=\'briefcase\'></ion-icon>\n            {{ profile.exp }}\n          </ion-col>\n          \n          <ion-col text-right>            \n            <ion-icon name=\'logo-rss\'></ion-icon>\n            {{ profile.src }}            \n          </ion-col>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-label text-center *ngIf="page.done | async">End of a list</ion-label>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    <ion-infinite-scroll-content *ngIf="page.loading | async"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>'/*ion-inline-end:"/home/advait/Projects/PWA/Job Alerts/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescPage = (function () {
    function DescPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = navParams.get('profile');
        this.desc = this.profile.gsx$description.$t;
        //console.log(this.profile.gsx$description.$t);
    }
    DescPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-desc',template:/*ion-inline-start:"/home/advait/Projects/PWA/Job Alerts/src/pages/desc/desc.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{profile.gsx$jobprofile.$t}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <span style="white-space:pre-wrap;">{{desc}}</span>\n  <!-- <span style="white-space:pre-wrap;">{{desc}}</span> -->\n</ion-content>\n'/*ion-inline-end:"/home/advait/Projects/PWA/Job Alerts/src/pages/desc/desc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DescPage);
    return DescPage;
}());

//# sourceMappingURL=desc.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"/home/advait/Projects/PWA/Job Alerts/src/pages/about-us/about-us.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p text-justify>\n    This App is made for students and job seekers around Pune city only. \n    We collect data from various job portals, whatsapp groups, etc.\n    If you have any job updates please contact us, so that we together can help more people.\n  </p>\n  <p>\n    <b>Disclaimer</b>:<br/> \n    We don\'t have any intention of copying data from information sources. \n    Our objective is to help job seekers to get latest job notifications with minimum overhead, \n    so we just collects data from sources and cite them. \n    If you have any objection related to it, please mail us.    \n  </p>\n    \n  <ion-item no-lines>\n    <ion-label stacked>Contact Us</ion-label>\n    <ion-input text-wrap type="text" disabled value="examnotifications17@gmail.com"></ion-input>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/advait/Projects/PWA/Job Alerts/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(282);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_desc_desc__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Firebase


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBv2wcWFSi7lgHDcrk3eZjgo2JjzNg4ytE",
    authDomain: "jobalerts-c7c62.firebaseapp.com",
    databaseURL: "https://jobalerts-c7c62.firebaseio.com",
    projectId: "jobalerts-c7c62",
    storageBucket: "jobalerts-c7c62.appspot.com",
    messagingSenderId: "308776394994"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_desc_desc__["a" /* DescPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__["a" /* AboutUsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_desc_desc__["a" /* DescPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__["a" /* AboutUsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_us_about_us__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        //Side MENU Pages
        this.pages = [
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_3__pages_about_us_about_us__["a" /* AboutUsPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/advait/Projects/PWA/Job Alerts/src/app/app.html"*/'<ion-menu id="myMenu" [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>MENU</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n'/*ion-inline-end:"/home/advait/Projects/PWA/Job Alerts/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.js.map