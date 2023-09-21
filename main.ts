// interface User {
//   name: string;
//   id: number;
// }

// const user: User = {
//   name: 'Ruslana',
//   id: 0,
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const userInfo: User = new UserAccount('Ruslana', 1)

// type Customer = {
//   birthday: Date
// }

// function getCustomer (id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(0);
// // optional property access operator
// console.log(customer?.birthday.getFullYear);

// type User = {
//   id: number;
//   name : string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const users: User[] = [
//   { id: 1, name: 'Alice'},
//   { id: 2, name: 'Bob'},
//   { id: 3, name: 'Charlie'}
// ];

// let result = getUserNames(users);
// console.log(result);

////////////////////////////////////////////////////////

// type Coordinate = [number, number];

// type UserWithCoords = {
//   id: number,
//   name: string,
//   coords: Coordinate,
// };

// const userWithCoords: UserWithCoords = {
//   id: 1,
//   name: 'Alice',
//   coords: [10,20],
// };

// export{};

////////////////////////////////////////////////////////
// enum AnimalIds {
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// };

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   }
//   [AnimalIds.dog]: {
//     bark: () => string;
//   }
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   }
// };

// let cat: Animal[AnimalIds.cat] = {
//   meow: () => 'Meow! I am a cat';
// };

// let dog: Animal[AnimalIds.dog] = {
//   bark: () => 'Woof! I am a dog';
// };

// let fish: Animal[AnimalIds.fish] = {
//   swim: () => undefined;
// };

////////////////////////////////////////////////////////

// type ComplexType = string | number;

// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// export {};

////////////////////////////////////////////////////////

// class Account {
//   id: number;
//   owner: string;
//   balance: number;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner,
//     this.balance = balance;
//   }

//   deposit(amount: number): void {
//     if(amount <= 0)
//     throw new Error ('Invalid anount');
//   this.balance += amount;
//   }
// };

////////////////////////////////////////////////////////