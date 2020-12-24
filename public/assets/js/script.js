var Test = /** @class */ (function () {
    function Test(msg) {
        this.msg = msg;
    }
    Test.prototype.alert = function () {
        alert(this.msg);
    };
    Test.prototype.log = function () {
        console.log(this.msg);
    };
    return Test;
}());
export { Test };
