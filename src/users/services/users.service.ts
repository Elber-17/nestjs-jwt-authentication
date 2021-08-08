import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
    @InjectRepository(User)
    private readonly userRepository: Repository<User>;

    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ email: email });
    }
}
