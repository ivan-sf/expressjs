const express=require('express')
const morgan=require('morgan')
const app=express()

app.set('port',666)
app.set('view engine','ejs')
/*
function logger(req,res,next){
    console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}
*/
app.use(express.json())
app.use(morgan('dev'))
//app.use(logger)

/*app.all('/user',(req,res,next)=>{
    console.log("El paso por esta etapa es obligatorio todo es parte del proceso")
    next()
})*/

app.get('/ejs',(req,res)=>{
    const data=[{name:'Bowie'}, {name:'Mercury'}, {name:'Musk'}, {name:'Tesla'}]
    res.render('index.ejs',{people:data})
})

app.get('/user',(req,res)=>{   
    res.json({
        username:'Bowie',
        score:666
    })
    console.log('get')    
})

app.post('/user/:id',(req,res)=>{
    res.send('POST RECEIVED')
    console.log(req.body)   
    console.log(req.params) 
})

app.put('/user/:id',(req,res)=>{
    res.send('Seguimos avanzando !')
    console.log('update')    
    console.log(`El usuario ${req.params.id} ha sido actualizado correctamente`)
})

app.delete('/user/:id',(req,res)=>{
    res.send(`El usuario ${req.params.id} ha sido eliminado`)
})

app.use(express.static('public'))
app.listen(app.get('port'), function () { console.log('Listening to port: ' + app.get('port')); }); 
