import type { Request, Response ,NextFunction } from "express"


export type async_handler_type = ( req :Request ,res:Response , next : NextFunction) => Promise <responceType>


export interface responceType {
    statusCode   : number
    data?        : object | {}
    message      :string
    error?       : Error
    success      :boolean
    stack?       :string

}
    

  

