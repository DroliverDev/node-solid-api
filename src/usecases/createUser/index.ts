import { MailTrapProvider } from "../../providers/implementations/MailTrapProvider";
import { PostgresUserRepository } from "../../repositories/implementations/postgresUserRepository";
import { CreateUserUseCase } from "./createUserCase";
import { CreateUserController } from "./createUserController";

const mailTrapProvider = new MailTrapProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(postgresUserRepository, mailTrapProvider)

const createuserController = new CreateUserController(createUserUseCase)

export {createUserUseCase, createuserController}