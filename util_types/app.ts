type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

// задача 1: создайте тип AnyButtonType, который описывает все вариации кнопок
type AnyButtonType = FormButton | {
    type: DialogButtonType
} | DialogButtonType // как можно заметить копипасты литералов тут нет

// задача 2: создайте тип ConfirmationHandlingFormButton

type ConfirmationHandlingFormButton = {
    onConfirm: ((type: DialogButtonType) => void) | null
}

function firstTask<T extends { id?: string } | Record<string, T>>(func: (arg: AnyButtonType) => Record<string, T>) {
    // ... как вы поняли, саму функцию писать не надо :)
    // нас интересует только ее сигнатура.
}

class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

// название переделал на английский потому что на русском как то не правильно
function stampFigures<T2,T extends { new(): T2 }>(someClass: T, count: number): T2[] {
    let a = []
    for (let i = 0; i < count; i++)
        a.push(new someClass());

    return a;
}

let a: Rectangle[] = stampFigures(Rectangle, 10);
let b: Circle[] = stampFigures(Circle, 20)

console.log(a)
console.log(b)