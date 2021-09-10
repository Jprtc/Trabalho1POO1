import {Request, Response} from 'express' 
import createUser from './services/createUser'

export function helloWorld(request: Request,response: Response){

    //const user = createUser('João Pedro','jptambasco@hotmail.com','159159')
    const user = createUser({
        email:'jptambasco@hotmail.com',
        password:'123456',
        name:'Node é legal!',
        techs: ['NodeJS','ReacJS',5,
                {title: 'teste',experience:100}]
    })

    console.log(user.email)
    return response.json({message: 'Hello World!!!!'})
}