using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
    class ShapeManager
    {
        static void Main(string[] args)
        {
            Shape[] shapes = new Shape[] { new Circle(), new Circle(11), new Square(), new Square(3)};
            foreach (var shape in shapes)
            {
                shape.Draw();

                if (shape is Circle)
                {
                    ((Circle)shape).Radius++;
                }
                if (shape is Square)
                {
                    ((Square)shape).Size--;
                }
            }
            Console.WriteLine();
            foreach (var shape in shapes)
            {
                shape.Draw();
            }
        }
    }
}
