var Singleton = (function () {
    let instance: string;

    function createInstance() {
        var str = "I am the object";
        return str;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();




var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1)
console.log(instance2)