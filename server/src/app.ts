import express, { NextFunction, Request, Response } from "express"
import morgan from "morgan";
import { routes } from "./routes/AnimeRoutes";
import createHttpError, {isHttpError} from "http-errors";

export const app = express();

app.use(morgan("dev"))
app.use(express.json())
app.use("/anime", routes)




app.use((req, res, next)=>{

    next(createHttpError(404, "path does not exist"))

})


// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction)=>{

    console.error(error)

    let errorMessage = "your internet might not be stable or my server sucks !!!"
    
    let statusCode = 500

    if(isHttpError(error)){
         errorMessage = error.message;

         statusCode = error.status;
    }


    res.status(statusCode).json({error: errorMessage})

})