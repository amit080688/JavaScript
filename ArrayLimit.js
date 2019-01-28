Object.defineProperty(Array.prototype, "pushMax", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function(value, max) {
        if (this.length >= max) {
           this.splice(0, this.length - max + 1);
     	}
     	return this.push(value);
    }
});



var x = [0,1,2,3,4,5,6,7,8,9,10];
x.pushMax(11, 10);
x.pushMax(12, 10);
x.pushMax(13, 10);

for (let i of x) {
    console.log(i);
}