import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    findCustomer() {
        return {
            id: 1,
            email: 'ikennamail@me.com',
            createdAt: new Date()
        }
    }
}
