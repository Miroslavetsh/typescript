// // function add(a: number, b: number): number {
// //     return a + b;
// // }

// // function toUpperCase(str: string): string {
// //     return str.trim().toUpperCase();
// // }

// interface MyPosition {
//     x: number | undefined
//     y: number | undefined
// }

// interface MyPositionWithDefaultState extends MyPosition {
//     default: string
// }

// function position(): MyPosition
// function position(a: number): MyPositionWithDefaultState
// function position(a: number, b: number): MyPosition


// function position(a?: number, b?: number) {
//     if (!a && !b) {
//         return {
//             x: undefined,
//             y: undefined,
//         }
//     }

//     if (a && !b) {
//         return {
//             x: a,
//             y: undefined,
//             default: a.toString(),
//         }
//     }

//     else {
//         return {
//             x: a,
//             y: b,
//         }
//     }
// }


// console.log('Empty:', position());
// console.log('One param:', position(42));
// console.log('Two params:', position(15, 20));
