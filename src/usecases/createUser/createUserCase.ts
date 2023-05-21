import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./createUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
        ) {}

    async execute(data: ICreateUserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        await this.userRepository.save(new User(data))

        await this.mailProvider.sendMail({
            to: {
                email: data.email,
                name: data.name
            },
            from: {
                email: data.email,
                name: data.name
            },
            subject: 'Bem vindo à plataforma',
            body: '<p> Obrigada por se cadastrar </p>'
        })
    }
}