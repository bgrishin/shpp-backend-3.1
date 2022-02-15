// function mapObject<Input, Arg, Func, NewObject>(obj: Input, func: (arg: Arg) => Func): NewObject {
//     let newObject: any = {}
//     for(let key in obj) {
//         newObject[key] = func((obj[key] as unknown as Arg))
//     }
//     return (newObject as NewObject)
// }
//
// const result = mapObject({ "roma" : 5, "vasya": 2 }, (x) => x > 3)
// console.log(result)

function mapObject<Object extends Record<string, Arg | Func>, Arg, Func, NewObject extends Record<string, Arg | Func>>(obj: Object, func: (x: Arg) => Func): NewObject {
    let NewObject: NewObject | Record<string, Arg | Func> = {}
    for(let item in obj) {
        NewObject[item] = func((obj[item] as Arg))
    }
    return (NewObject as NewObject)
}

const result = mapObject({ "roma" : 5, "vasya": 2 }, (x) => x > 2)
console.log(result)
