using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recursion
{
    class Person
    {
        Person[] children;
        Random rand = new Random();
        static int counter;
        public Person(int numOfChildren)
        {
            children = new Person[numOfChildren];
            counter++;
            for (int i = 0; i < numOfChildren; i++)
            {
                children[i] = new Person(rand.Next(0, 3));
            }
        }

        public void Print()
        {
            Console.WriteLine("Total # of people: "+counter);
        }
    }
}
