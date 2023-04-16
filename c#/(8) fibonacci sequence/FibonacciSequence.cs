  using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fibonacci
{
    class FibonacciSequence
    {
        public static void Main(string[] args)
        {
            Console.WriteLine(LoopIndex(3));
            Console.WriteLine(LoopIndex(6));
            Console.WriteLine(LoopIndex(10));
            Console.WriteLine(RecursionIndex(3));
            Console.WriteLine(RecursionIndex(6));
            Console.WriteLine(RecursionIndex(10));
        }

        public static int LoopIndex(int index)
        {
            int[] nums = new int[20];
            for (int i = 0; i < nums.Length; i++)
            {
                if (i < 2)
                    nums[i] = i;
                else
                    nums[i] = nums[i - 1] + nums[i - 2];
            }
            return nums[index];
        }

        public static int RecursionIndex(int index)
        {
            if (index < 2)
                return index;
            else
                return RecursionIndex(index - 1) + RecursionIndex(index - 2);
        }
    }
}
