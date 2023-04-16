using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
    class Square : Shape
    {
        private int size;

        public int Size
        {
            get { return size; }
            set { size = value; }
        }
        
        public Square(int size)
        {
            Size = size;
        }
        public Square() : this(10)
        {
        }

        public override void Draw()
        {
            Console.WriteLine($"Square, size {Size}");
        }
    }
}
