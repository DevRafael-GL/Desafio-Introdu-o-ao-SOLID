import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userProfileAlreadyExists = this.usersRepository.findById(user_id);

    if (!userProfileAlreadyExists) {
      throw new Error("User not exists");
    }

    return userProfileAlreadyExists;
  }
}

export { ShowUserProfileUseCase };
