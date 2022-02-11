enum Type {
    Plus = "+",
    Minus = "-"
}

type typesOfSigns = Type.Plus | Type.Minus

function resolveTypes(type: typesOfSigns) {
    console.log(`PRESSED: ${type}`)
    const body = JSON.stringify({
        sign: type
    })
    fetch('http://localhost:3000/type', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
}

