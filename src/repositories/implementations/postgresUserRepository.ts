import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUsersRepository {
    private users: User[] = [];
    async findByEmail(Email: string): Promise<User> {
        const user = this.users.find(user => user.email === Email)

        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}