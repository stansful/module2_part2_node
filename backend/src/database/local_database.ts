import { User } from 'user/user_interface';
import { Database } from './database_interface';

class LocalDatabase implements Database<User> {
  private database: User[];

  constructor() {
    const users: User[] = [
      { email: 'asergeev@flo.team', password: 'jgF5tn4F' },
      { email: 'vkotikov@flo.team', password: 'po3FGas8' },
      { email: 'tpupkin@flo.team', password: 'tpupkin@flo.team' },
    ];
    this.database = [];
    users.forEach((user) => this.create(user));
  }

  findAll(): User[] {
    return this.database;
  }

  findOne(candidate: User): User {
    const user = this.database.find((user) => user.email === candidate.email);
    if (!user) {
      throw new Error('User did not exist');
    }
    return user;
  }

  create(candidate: User): User {
    const user = this.findOne(candidate);
    if (user) {
      throw new Error('User already exist');
    }
    this.database.push(candidate);
    return candidate;
  }

  delete(candidate: User): User {
    const user = this.findOne(candidate);
    if (!user) {
      throw new Error('User didnt exist');
    }
    this.database.filter((user) => user.email !== candidate.email);
    return candidate;
  }
}

export const localDatabase = new LocalDatabase();