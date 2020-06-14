// Create an Author class and a Book class.
class Author{
  _name = "";
  _email = "";
  _gender = "";
  constructor(name, email, gender){
      this.name = name;
      this.email = email;
      this.gender = gender;
  }
  get name(){
    return this._name
  }
  set name(value){
    this._name = value
  }
  get email(){
    return this._email
  }
  set email(value){
    this._email = value
  }
  get gender(){
    return this._gender
  }
  set gender(value){
    this._gender = value
  }
  toString(){
    return `${this.name}`
  }
} 

class Book{

  _title;
  _author;
  _price;
  _quantity;

  constructor(title, author, price, quantity){
      this.title = title;
      this.author = author;
      this.price = price;
      this.quantity = quantity;
  }

  get title(){
    return this._title;
  }

  set title(value){
    this._title = value;
  }

  get author(){
    return this._author;
  }

  set author(value){
    if(value instanceof Author) this._author = value;
    else throw new Error("Given value should be Author type")
  }

  get price(){
    return this._price;
  }

  set price(value){
    this._price = value;
  }

  get quantity(){
    return this._quantity;
  }

  set quantity(value){
    this._quantity = value;
  }

  getProfit(){
    return this.price*this.quantity;
  }

  toString(){
    return `${this.author.name} - ${this.title}`
  }

}


// Create an Account class. Account should have: id, name, balance.
class Account{

  _name
  _balance
  _id = Math.floor(Math.random()*100000);

  constructor(name, balance){
    this.name = name;
    this.balance = balance;
  }

  get id(){
    return this._id;
  } 
  get name(){
    return this._name;
  }
  set name(value){
    this._name = value;
  }
  get balance(){
    return this._balance;
  }
  set balance(value){
    this._balance = value;
  }

  credit(amount){
    if(amount<0) throw new Error("Amount can NOT be negative")
    this.balance+=amount
    return this.balance
  }

  debit(amount){
    if(amount<0) throw new Error("Amount can NOT be negative")
    this.balance<amount?console.log("Amount exceeded balance"):this.balance+=amount;
    return this.balance
  }

  transferTo(anotherAccount, amount){
    if(amount<0) throw new Error("Amount can NOT be negative")
    if(this.balance<amount){
      console.log("Amount exceeded balance")
    }else{
    this.balance-=amount;
    anotherAccount.balance += amount;
    }
  }

  static identifyAccounts(accountFirst, accountSecond){
      if(accountFirst.id===accountSecond.id && accountFirst.name===accountSecond.name && accountFirst.balance===accountSecond.balance){
        return true;
      }
      return false;
  }

  toString(){
    return `${this.name}`
  }

}


// Write classes: Person, Student, Staff.
class Person{

  _firstName;
  _lastName;
  _gender;
  _age;

  constructor(firstName, lastName, gender, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(value){
    this._firstName = value;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(value){
    this._lastName = value;
  }

  get gender(){
      return this._gender;
  }

  set gender(value){
    this._gender = value;
  }

  get age(){
    return this._age;
  }

  set age(value){
    this._age = value;
  }

  toString(){
    return `${this.firstName} ${this.lastName}`
  }
}

class Student extends Person{

  _program;
  _year;
  _fee;
  gradeData = {};

  constructor(firstName, lastName, gender, age, program, year, fee){
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  get program(){
    return this._program;
  }
  set program(value){
    this._program = value;

  }

  get year(){
    return this._year;
  }
  set year(value){
    this._year = value;
  }

  get fee(){
    return this._fee;
  }
  set fee(value){
    this._fee = value;
  }

  passExam(program, grade){
    this.gradeData[program] = grade;
  }

  passAllExams(){
    if(this.program.length === Object.keys(this.gradeData).length){
      for(let key in this.gradeData){
        if (this.gradeData[key]<50 || this.gradeData[key]===undefined) return "Try next year"
        
      }
      this.year+=1
      this.gradeData = {}
      return `All exams are passed. Year - ${this.year}`
    }
    return "Try next year"
  }


  toString(){
    return `${this.firstName} is on year ${this.year}`
  }
}

class Teacher extends Person{

  _program;
  _pay;

  constructor(firstName, lastName, gender, age, program,pay){
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }

  get program(){
    return this._program;
  }
  set program(value){
    this._program = value;
  }

  get pay(){
    return this._pay;
  }
  set pay(value){
    this._pay = value;
  }

  toString(){
    return `${this.firstName} earns ${this.pay}, teaches ${this.program}`
  }
}
