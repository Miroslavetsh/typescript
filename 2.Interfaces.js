// interface Rect {
//     readonly id: string,
//     color?: string,
//     size: {
//         width: number,
//         height: number
//     }
// }
// const firstRect: Rect = {
//     id: '1',
//     size: {
//         width = 20,
//         height = 60
//     }
// }
// const secRect: Rect = {
//     id: '1',
//     color: 'green',
//     size: {
//         width: 20,
//         height: 60
//     }
// }
// firstRect.color = "#eee"
// firstRect.id = "#eee"
// const thirdRect = {} as Rect;
// const fourthRect = <Rect>{};
// Nesting
// interface RectWithArea extends Rect {
//     getArea: () => number;
// }
// const fivethRect: RectWithArea = {
//     id: '1',
//     size: {
//         width: 50,
//         height: 70
//     },
//     getArea(): number {
//         return this.size.width * this.size.height;
//     }
// }
// interface IClock {
//     time: Date
//     setTime(date: Date): void
// }
// class Clock implements IClock {
//     time: Date = new Date()
//     setTime(date: Date) {
//         this.time = date
//         console.log(this.time);
//     }
// }
// Many args
// interface Styles {
//     [key: string]: string;
// }
// const css = {
//     border: '1px solid black',
//     marginRight: '5px',
//     borderRadius: '3px',
// }
