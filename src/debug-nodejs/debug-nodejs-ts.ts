/**
 * go to Run and Debug panel, select `nodejs-ts` config and start the debugger.
 */

class User {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  printStat() {
    console.log({ firstName: this.firstName, lastName: this.lastName, age: this.age });
  }
}

const { NODE_ENV, MONGODDB_USER, MONGODB_PASSWORD } = process.env;
console.log({ NODE_ENV, MONGODDB_USER, MONGODB_PASSWORD });

const firstName = 'Jack';
const lastName = 'London';
const age = 23;

const user1 = new User(firstName, lastName, age);

user1.printStat();
