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

