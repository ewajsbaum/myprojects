using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
    class Circle : Shape
    {
        private int radius;

        public int Radius
        {
            get { return radius; }
            set { radius = value; }
        }
        public Circle(int radius)
        {
            Radius = radius;
        }
        public Circle() : this(5)
        { 
        }

        public override void Draw()
        {
            Console.WriteLine($"Circle, radius {Radius}");
        }
    }
}
