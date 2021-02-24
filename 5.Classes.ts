// class Typescript {
//     version: string

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

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component rendered')
    }

    info(): string {
        return "Info of Component"
    }
}