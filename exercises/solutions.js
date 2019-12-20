function makeAccount(startingBalance){
  return{
      checkBalance(){
          return startingBalance = startingBalance;
      },
      add(num){
          startingBalance +=  num
          return `${num} added`
      },
      subtract(num){
          startingBalance -=  num
          return `${num} subtracted`
      }
  }
}
const myAccount = makeAccount(100);
myAccount.checkBalance();
myAccount.add(50);        
myAccount.checkBalance();
myAccount.subtract(30);   
myAccount.checkBalance(); 

function SavingsAccount(name){
    this.name = name;
    this.balance = 0;
}

SavingsAccount.prototype.showBalance = function(){
    return `$${this.balance}`;
}
SavingsAccount.prototype.depositFunds = function(number){
   if(number < 0) return 'Please include a deposit amount that is greater than 0';
   this.balance += number;
   return `$${number} deposited`
}
SavingsAccount.prototype.withdrawFunds = function(number){
    if(number > this.balance) return 'Insufficient Funds';
    this.balance -= number;
    return `$${number} withdrawn`
}


function Phone(phoneNumber){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
}

Phone.prototype.addContact = function(number,name){
//      if(this.number.length === 0 || number.name.length === 0 && this.number.length < 10) return `Invalid`;
     this.contacts.push(number);
     return `${number.name} has been added`
}

Phone.prototype.removeContact = function(name){
//     if(this.contacts.includes(name)){
       this.contacts.splice(this.contacts.indexOf(name), 1)
       return `${name} has been removed`
//     }
//     return `Contact not found`
}
Phone.prototype.call = function(name,phoneNumber){
    
}


module.exports = {
  makeAccount,
  SavingsAccount
  // Phone
  // AppleiPhone
  // Person
  // Student
  // GraduateStudent
  // Professor
  // Doctor
};
