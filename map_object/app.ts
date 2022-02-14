function mapObject<Input, Arg, Func, NewObject>(obj: Input, func: (arg: Arg) => Func): NewObject {
    let newObject: any = {}
    for(let key in obj) {
        newObject[key] = func((obj[key] as unknown as Arg))
    }
    return (newObject as NewObject)
}

const result = mapObject({ "roma" : 5, "vasya": 2 }, (x) => x > 2)
console.log(result)
