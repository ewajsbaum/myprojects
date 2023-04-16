using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderingApp
{
    class ReadyOrder
    {
        public ReadyOrder()
        {
            DisplayOrders.makeOrder.OrderCompleted += IsOrderReady;
        }
        public void IsOrderReady(object sender, OrderEventArgs e)
        {
            Console.WriteLine($"Order #{e.ordNum++} for {e.name} is ready!");
        }
    }
}
