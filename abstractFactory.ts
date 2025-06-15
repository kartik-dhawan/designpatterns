type RoleType = "DEVELOPER" | "TESTER";
type ExpGroupType = "JUNIOR" | "SENIOR" | "MANAGER";

class User {
  role: RoleType;
  experience: ExpGroupType;

  constructor(role: RoleType, experience: ExpGroupType) {
    this.role = role;
    this.experience = experience;
  }

  login() {
    console.log(
      `User of role ${this.role} & experience ${this.experience} is logged in.`
    );
  }
}

class Developer extends User {
  constructor(exp: ExpGroupType) {
    super("DEVELOPER", exp);
  }

  code() {
    console.log(`${this.experience} Developer is coding.`);
  }
}

class Tester extends User {
  constructor(exp: ExpGroupType) {
    super("TESTER", exp);
  }

  test() {
    console.log(`${this.experience} tester of is testing.`);
  }
}

class DeveloperFactory {
  createDeveloper(exp: ExpGroupType) {
    if (exp === "JUNIOR") {
      return new Developer("JUNIOR");
    } else if (exp === "MANAGER") {
      return new Developer("MANAGER");
    } else if (exp === "SENIOR") {
      return new Developer("SENIOR");
    } else {
      throw new Error("Role not defined");
    }
  }
}

class TesterFactory {
  createTester(exp: ExpGroupType) {
    if (exp === "JUNIOR") {
      return new Tester("JUNIOR");
    } else if (exp === "MANAGER") {
      return new Tester("MANAGER");
    } else if (exp === "SENIOR") {
      return new Tester("SENIOR");
    } else {
      throw new Error("Role not defined");
    }
  }
}

class UserFactory {
  createUser(role: RoleType) {
    if (role === "DEVELOPER") {
      return new DeveloperFactory();
    } else if (role === "TESTER") {
      return new TesterFactory();
    } else {
      throw new Error("Role not defined");
    }
  }
}

const factory = new UserFactory();
const juniorDev = (
  factory.createUser("DEVELOPER") as DeveloperFactory
).createDeveloper("JUNIOR");
const seniorTester = (
  factory.createUser("TESTER") as TesterFactory
).createTester("SENIOR");

juniorDev.login(); // User of role DEVELOPER & experience JUNIOR is logged in.
juniorDev.code(); // JUNIOR Developer is coding.

seniorTester.login(); // User of role TESTER & experience SENIOR is logged in.
seniorTester.test(); // SENIOR tester of is testing.
