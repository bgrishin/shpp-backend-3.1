
function mapObject<Object extends Record<string, any>, NewObject> (obj: Object, func: (val: Object[keyof Object]) => NewObject) {
    let NewObject: Partial<Record<keyof Object, NewObject>> = {}
    for(let item in obj) {
        NewObject[item] = func(obj[item])
    }
    return NewObject
}

const result = mapObject({ "roma" : 5, "vasya": 2 }, (x) => x > 2)
console.log(result)
