import { Router } from "express";
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const versionApi = process.env.API_VERSION 
const router = Router()
const cleanFileName = (fileName: string) => fileName.split('.').shift()
readdirSync(PATH_ROUTER).filter((fileName) =>{
  const cleanName =  cleanFileName(fileName)
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta ... /${cleanName}`)
      router.use(`/api/v=${versionApi}/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }