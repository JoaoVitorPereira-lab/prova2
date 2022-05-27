import { DiaSemana, Semaforo, Fatorial } from './services.js';

import { Router } from "express";

const server = Router();

server.get('/semaforo/:cor', (req, resp) => {

    try
    {
        const a = (req.params.cor);

        const x = Semaforo(a);
        resp.send({
            cor:x
        })
    }

    catch(err)
    {
        resp.send({
            err:err.message
        })
    }
})

server.get('/diasemana', (req, resp) => {

    try
    {
        const a = (req.query.dia);

        const x = DiaSemana(a);
        resp.send({
            dia:x
        })
    }

    catch(err)
    {
        resp.send({
            err:err.message
        })
    }
})

server.post('/fatorial', (req, resp) => {

    try
    {
        const b = Number(req.query.num);

        const x = Fatorial(b);
        resp.send({
            num:x
        })
    }

    catch(err)
    {
        resp.send({
            err:err.message
        })
    }
})

export default server;