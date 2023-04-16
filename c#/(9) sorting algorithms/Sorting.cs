using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sorting
{
    class Sorting
    {
        Random rand = new Random();
        public Sorting()
        {
            int[] array = new int[20];
            for (int i = 0; i < array.Length; i++)
            {
                array[i] = rand.Next(100);
            }
            //int number = array[4];
            //Console.WriteLine("the number " + number);
            //Array.Sort(array);
            PrintArray(array);
            Console.WriteLine();
            //Console.WriteLine(BinarySearch(number, array));
            //SelectionSort(array);
            BubbleSort(array);
            PrintArray(array);
        }
        public void PrintArray(int[] array)
        {
            foreach (var item in array)
            {
                Console.Write(item + ", ");
            }
        }
        public void BubbleSort(int[] numbers)
        {
            int n = numbers.Length;
            for (int i = 0; i < n - 1; i++)
            {
                bool swapped = false;
                for (int j = 0; j < n - i - 1; j++)
                {
                    if (numbers[j] > numbers[j + 1])
                    {
                        int temp = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = temp;
                        swapped = true;
                    }
                }
                if (!swapped)
                    break;
            }
        }
        public void SelectionSort(int[] numbers)
        {
            int unsorted = 0;
            int minNumIndex = 0;
            for (unsorted = 0; unsorted < numbers.Length; unsorted++)
            {
                minNumIndex = unsorted;
                for (int i = unsorted + 1; i < numbers.Length; i++)
                {
                    if (numbers[minNumIndex] > numbers[i])
                    {
                        minNumIndex = i;
                    }
                }
                int temp = numbers[minNumIndex];
                numbers[minNumIndex] = numbers[unsorted];
                numbers[unsorted] = temp;
            }
        }
        int BinarySearch(int number, int[] array)
        {
            int index = -1, low = 0, hi = array.Length - 1;
            while (low < hi)
            {
                int mid = (low + hi) / 2;
                if (number > array[mid])
                {
                    low = mid + 1;
                }
                else if (number < array[mid])
                {
                    hi = mid - 1;
                }
                else
                {
                    index = mid;
                    break;
                }
            }
            return index;
        }
        static void Main(string[] args)
        {
            new Sorting();
        }
    }
}
