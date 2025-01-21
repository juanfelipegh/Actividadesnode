const {envs} = require ('./config/env')
const {iniciarServer} = require ('./server/server')

const main =() =>{
    iniciarServer ({ 
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
})
}

// funcion anonima asincrona autoconvocada
(async () => {
    main()
})()
