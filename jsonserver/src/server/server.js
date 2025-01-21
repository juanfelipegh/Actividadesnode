const express = require('express')

const path = require('path')

const iniciarServer = (option) => {
    const {port, public_path = 'public'} = option
    const app = express()
    app.use(express.static(public_path))
    app.get('/',(req,res) => {
    const pagina = path.join(__dirname + `../../public/index.html`) 
    res.sendFile(indexPath)    
})
 app.listen(port,()=>{
    console.log(`Ejecutando el servidor en el puerto ${port}`)
 })
    }

module.exports = {
    iniciarServer
}