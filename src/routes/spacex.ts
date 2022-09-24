import Express, {Response, Request} from "express";
import axios, {AxiosResponse} from "axios"

// ECMAScript Modules must be imported in a special way
// NodeJS by default uses the CommonJS modules but package maintainers have moved to ESM modules quicker

const router = Express.Router();

router.get('/launches', (req: Express.Request,res:Express.Response) => {
    axios.get('https://api.spacexdata.com/v5/launches/past').then((data: AxiosResponse)=> {
        res.send(`Date: ${data?.data[93].date_local} Ships: ${data?.data[93]?.ships}`)
        }
    )
})

export default router;
