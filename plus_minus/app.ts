import express, {Request, Response} from 'express'
const app = express()
const router = express.Router()

enum Type {
    Plus = "+",
    Minus = "-"
}

type typesOfSigns = Type.Plus | Type.Minus

app.use(express.static('plus_minus/public'));
app.use(express.json())

app.post('/type', ((req, res) => {
    const sign: typesOfSigns = req.body.sign
    console.log(`PRESSED: ${sign}`)
    return res.send({
        ok: true
    })
}))

app.listen(3000, () => {
    console.log('Server is started on port - 3000')
    console.log('The back result outputting here')
})