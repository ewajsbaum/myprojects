using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderingApp
{
    public class OrderEventArgs : EventArgs {
        public int ordNum;
        public string name;
    }
    public class MakeOrder
    {
        public event EventHandler<OrderEventArgs> OrderCompleted;
        public void OrderSomething()
        {
            OnOrderCompleted(new OrderEventArgs { ordNum =1, name = "Adam" }) ;
        }
        public void OnOrderCompleted(OrderEventArgs e)
        {
            OrderCompleted?.Invoke(this, e);
        }
    }
}
