interface IUser {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: IUser[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// TASK 1

const getNames = (arr: IUser[]): string => {
  let names = arr.map((e) => e.name).join();
  return names;
};
console.log(getNames(users));

// TASK 2

const countCars = (arr: IUser[]): number => {
  let sum = 0;
  arr.forEach((e) => {
    if (e.cars) {
      sum += e.cars.length;
    }
  });
  return sum;
};

console.log(countCars(users));

// TASK 3

const getEducatedUsers = (arr: IUser[]): IUser[] => {
  let educatedUsers = arr.filter((e) => e.hasEducation);
  return educatedUsers;
};

console.log(getEducatedUsers(users));

// TASK 4

const getUsersWithAnimals = (arr: IUser[]): IUser[] => {
  let usersWithAnimals = arr.filter((e) => e.animals);
  return usersWithAnimals;
};

console.log(getUsersWithAnimals(users));

// TASK 5

const getCars = (arr: IUser[]): string => {
  let cars = arr
    .filter((e) => e.cars)
    .map((e) => e.cars)
    .join();
  return cars;
};

console.log(getCars(users));
