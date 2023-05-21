import { Router } from "express";
import { createuserController } from "./usecases/createUser";

const router = Router()


router.post('/users', (request, response) => {
    return createuserController.handle(request, response);
})


export { router }