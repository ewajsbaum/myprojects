using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UsingIO
{
    class StreamReaderWriter
    {
        public StreamReaderWriter()
        {
            string dirPath = @"C:\Users\estiw\Documents\PCS\us-500";
            string[] files = Directory.GetFiles(dirPath);
            try
            {
                foreach (string file in files)
                {
                    string filePath = Path.Combine(dirPath, file);
                    Console.WriteLine("New file starts here:");
                    using (var sr = new StreamReader(new FileStream(filePath, FileMode.OpenOrCreate, FileAccess.ReadWrite)))
                    {
                        StringBuilder sb = new StringBuilder();
                        String s = sr.ReadLine();
                        while (s != null)
                        {
                            sb.Append(s);
                            s = sr.ReadLine();
                        }
                        Console.WriteLine(sb);
                    }
                }
            }
            catch (IOException ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}
