using System;
using System.Collections.Generic;
using System.Linq; 
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    class Chequing : Account
    {
        private int maxWithdraw;
        private int fee = 15;
        private int wdcount = 0;

        public Chequing(int maxWithdraw)
        {
            this.maxWithdraw = maxWithdraw;
        }
        public Chequing() : this(30)
        {
        }
        public override void Withdraw(int withdraw)
        {
            base.Withdraw(withdraw);
            wdcount++;
        }
        public override void GetBalance()
        {
            base.GetBalance();
            if (wdcount > maxWithdraw)
                Console.WriteLine("exceeded withdrawal limit: fee $" + fee) ;
        }

    }
}
