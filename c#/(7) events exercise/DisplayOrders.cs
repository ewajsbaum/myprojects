using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderingApp
{
    class DisplayOrders
    {
        public static MakeOrder makeOrder;
        static void Main(string[] args)
        {
            makeOrder = new MakeOrder();
            ReadyOrder order1 = new ReadyOrder();
            ReadyOrder order2 = new ReadyOrder();
            ReadyOrder order3 = new ReadyOrder();
            makeOrder.OrderSomething();
        }
    }
}
