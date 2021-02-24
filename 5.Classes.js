// class Typescript {
//     version: string
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(version) {
//         this.version = version;
//     }
//     info(name: string) {
//         return `${name}: Typescript version is ${this.version}`
//     }
// }
// class Car {
//     readonly model: string
//     readonly wheelsAmount: number = 4
//     constructor(model: string) {
//         this.model = model;
//     }
// }
// class Car {
//     readonly wheelsAmount: number = 4;
//     constructor(readonly model: string) { }
// }
//  Modificators
// class Animal {
//     protected voice: string = ''
//     public color: string = 'black'
//     private go() {
//         console.log('Gone');
//     }
// }
// class Cat extends Animal {
//     public setVoice(voice: string): void {
//         this.voice = voice
//     }
// }
// const cat = new Cat()
// cat.setVoice('myau')
// cat.voice
// Abstract Classes
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component rendered');
    };
    AppComponent.prototype.info = function () {
        return "Info of Component";
    };
    return AppComponent;
}(Component));
