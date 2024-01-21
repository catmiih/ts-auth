import express from "express";
import Filter from "../model/Filter";
import Active from "../model/Active";
import ActiveService from "../service/ActiveService";

const router = express.Router();

router.post("/find", async (req, res) => {
    const {reference} = req.body;
    const activeService = new ActiveService();

    if (!reference) {
        return res.status(400).json({ error: 'O corpo da requisição deve conter a propriedade "reference".' });
    }
    
    activeService.getActiveSymbols(reference)
    .then((reference) => {
        const filteredActives = reference.map((reference) => reference.split('.')[0]);
        res.json(filteredActives)
    })
    .catch((error) => {
        console.error('Erro geral:', error.message);
        res.json(error)
    });
});

// router.post("/register", async (req, res) => {
//     const {symbol} = req.body;
//     const activeService = new ActiveService();

//     if (!symbol) {
//         return res.status(400).json({ error: 'O corpo da requisição deve conter a propriedade "symbol".' });
//     }
    
//     activeService.getActiveSymbols(reference)
//     .then((reference) => {
//         console.log('Símbolos Ativos:', reference);
//         res.json(reference)
//     })
//     .catch((error) => {
//         console.error('Erro geral:', error.message);
//         res.json(error)
//     });
// });
  
export {router as ActiveController};
