var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IUser = /** @class */ (function () {
    function IUser(role, experience) {
        this.role = role;
        this.experience = experience;
    }
    IUser.prototype.login = function () {
        console.log("User of role ".concat(this.role, " & experience ").concat(this.experience, " is logged in."));
    };
    IUser.prototype.code = function () {
        console.warn("".concat(this.role, " can\u2019t code."));
    };
    IUser.prototype.test = function () {
        console.warn("".concat(this.role, " can\u2019t test."));
    };
    return IUser;
}());
var IDeveloper = /** @class */ (function (_super) {
    __extends(IDeveloper, _super);
    function IDeveloper(exp) {
        return _super.call(this, "DEVELOPER", exp) || this;
    }
    IDeveloper.prototype.code = function () {
        console.log("".concat(this.experience, " Developer is coding."));
    };
    return IDeveloper;
}(IUser));
var ITester = /** @class */ (function (_super) {
    __extends(ITester, _super);
    function ITester(exp) {
        return _super.call(this, "TESTER", exp) || this;
    }
    ITester.prototype.test = function () {
        console.log("".concat(this.experience, " tester is testing."));
    };
    return ITester;
}(IUser));
var IUserFactory = /** @class */ (function () {
    function IUserFactory() {
    }
    IUserFactory.prototype.createNewUser = function (exp) {
        var user = this.createUser(exp);
        return user;
    };
    return IUserFactory;
}());
var IDeveloperFactory = /** @class */ (function (_super) {
    __extends(IDeveloperFactory, _super);
    function IDeveloperFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IDeveloperFactory.prototype.createUser = function (exp) {
        return new IDeveloper(exp);
    };
    return IDeveloperFactory;
}(IUserFactory));
var ITesterFactory = /** @class */ (function (_super) {
    __extends(ITesterFactory, _super);
    function ITesterFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITesterFactory.prototype.createUser = function (exp) {
        return new ITester(exp);
    };
    return ITesterFactory;
}(IUserFactory));
var developerFactory = new IDeveloperFactory();
var testerFactory = new ITesterFactory();
var juniorDeveloper = developerFactory.createNewUser("JUNIOR");
var juniorTester = testerFactory.createNewUser("JUNIOR");
juniorDeveloper.code();
juniorTester.code();
