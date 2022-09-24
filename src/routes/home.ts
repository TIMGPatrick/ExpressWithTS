import Express, {Request, Response} from "express";
const router = Express.Router();


router.get('/', (req: Express.Request, res: Express.Response) => {
    res.send("This is the home page")
});

export default router;
