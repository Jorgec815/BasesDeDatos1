const rutas = require('express').Router();
const conexion = require('./config/conexion');

//asignación de rutas

//obtener equipos
rutas.get('/', (req, res)=>{
    let sql = 'select * from equipos order by puntos desc'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//contar equipos
rutas.get('/cantidadEquipos', (req, res)=>{
    let sql = 'select count(*) as total from equipos'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//obtener un equipo
rutas.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'select * from equipos where id_equipo = ?'
    conexion.query(sql, [id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo

rutas.post('/' ,(req, res)=>{
    const {nombre} = req.body
    let sql = `insert into equipos(nombre) values('${nombre}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})


//Eliminar

rutas.delete('/:id', (req, res)=>{
    const{id} = req.params

    let sql = `delete from equipos where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'eliminado'})
        }
    })

})

//modificar

rutas.put('/ganaEquipo/:id', (req, res)=>{
    const{id} = req.params
    const{goles_favor} = req.body
    const{goles_contra} = req.body

    let sql = `update equipos set puntos = puntos + 3, partidos_jugados = partidos_jugados + 1,
                partidos_ganados = partidos_ganados + 1, goles_favor = goles_favor + '${goles_favor}',
                goles_contra = goles_contra + '${goles_contra}' where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'actualizado'})
        }
    })
})

rutas.put('/pierdeEquipo/:id', (req, res)=>{
    const{id} = req.params
    const{goles_favor} = req.body
    const{goles_contra} = req.body

    let sql = `update equipos set partidos_jugados = partidos_jugados + 1,
                partidos_perdidos = partidos_perdidos + 1, goles_favor = goles_favor +'${goles_favor}',
                goles_contra = goles_contra + '${goles_contra}' where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'actualizado'})
        }
    })
})

rutas.put('/empate/:id', (req, res)=>{
    const{id} = req.params
    const{goles_favor} = req.body
    const{goles_contra} = req.body

    let sql = `update equipos set puntos = puntos + 1, partidos_jugados = partidos_jugados + 1,
                partidos_empatados = partidos_empatados + 1, goles_favor = goles_favor + '${goles_favor}',
                goles_contra = goles_contra + '${goles_contra}' where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'actualizado'})
        }
    })
})

module.exports = rutas;