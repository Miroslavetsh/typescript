// interface Person {
//     name: string
//     age: number
// }
// type PersonKeys = keyof Person
// let key: PersonKeys = 'name'
// key = 'age'
// // key = 'job'
// type User = {
//     _id: string
//     name: string
//     email: string
//     createdAt: Date
// }
// type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>
// type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>
