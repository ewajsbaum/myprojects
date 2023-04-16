using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    abstract class Account
    {
        public int balance;
        public void Deposit(int deposit)
        {
            balance += deposit;
            Console.WriteLine($"Deposit of {deposit} dollars successfully completed");
        }
        public virtual void Withdraw(int withdraw)
        {
            balance -= withdraw;
            Console.WriteLine($"Please collect your {withdraw} dollars");
        }
        public virtual void GetBalance()
        {
            Console.WriteLine("Your balance is $"+ balance);
        }
    }
}
