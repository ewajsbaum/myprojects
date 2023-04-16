using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    class Banking
    {
        static void Main(string[] args)
        {
            Chequing a = new Chequing(2);
            a.Deposit(20);
            a.Withdraw(5);
            a.Withdraw(5);
            a.Withdraw(1);
            a.GetBalance();
        }
    }
}
