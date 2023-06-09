import { Request, Response} from 'express'
import { CreateUserUseCase } from './createUserCase';
export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, password } = request.body;
        try {
            await this.createUserUseCase.execute({name, email, password});

            return response.status(201).send();
        } catch (e) {
            return response.status(400).json({
                message: e.message || 'Unexpected error'
            })
        }

    }
}