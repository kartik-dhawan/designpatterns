type IRoleType = "DEVELOPER" | "TESTER";
type IExpGroupType = "JUNIOR" | "SENIOR" | "MANAGER";

class IUser {
  role: IRoleType;
  experience: IExpGroupType;

  constructor(role: IRoleType, experience: IExpGroupType) {
    this.role = role;
    this.experience = experience;
  }

  login() {
    console.log(
      `User of role ${this.role} & experience ${this.experience} is logged in.`
    );
  }

  public code(): void {
    console.warn(`${this.role} can’t code.`);
  }

  public test(): void {
    console.warn(`${this.role} can’t test.`);
  }
}

class IDeveloper extends IUser {
  constructor(exp: IExpGroupType) {
    super("DEVELOPER", exp);
  }

  code() {
    console.log(`${this.experience} Developer is coding.`);
  }
}

class ITester extends IUser {
  constructor(exp: IExpGroupType) {
    super("TESTER", exp);
  }

  test() {
    console.log(`${this.experience} tester is testing.`);
  }
}

abstract class IUserFactory {
  protected abstract createUser(exp: IExpGroupType): IUser;

  public createNewUser(exp: IExpGroupType): IUser {
    const user = this.createUser(exp);
    return user;
  }
}

class IDeveloperFactory extends IUserFactory {
  protected createUser(exp: IExpGroupType): IUser {
    return new IDeveloper(exp);
  }
}

class ITesterFactory extends IUserFactory {
  protected createUser(exp: IExpGroupType): IUser {
    return new ITester(exp);
  }
}

const developerFactory = new IDeveloperFactory();
const testerFactory = new ITesterFactory();

const juniorDeveloper = developerFactory.createNewUser("JUNIOR");
const juniorTester = testerFactory.createNewUser("JUNIOR");

juniorDeveloper.code(); // JUNIOR Developer is coding.
juniorTester.code(); // TESTER can’t code.
