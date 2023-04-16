using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicPlayer
{
    class Player
    {
        static void Main(string[] args)
        {
            Artist Baruch = new Artist("Baruch Levine");
            Artist Yaakov = new Artist("Yaakov Shwekey");

            Album toastToLife = new Album("A Toast to Life", Yaakov);
            Album musica = new Album("Musica", Yaakov);
            Album offRecord = new Album("Off the Record", Baruch);

            Song[] songs1 = new Song[] { new Song("L'Chaim", toastToLife), new Song("A Yid", toastToLife) };
            Song[] songs2 = new Song[] { new Song("Perfect World", musica), new Song("Netzach Yisrael", musica) };
            Song[] songs3 = new Song[] { new Song("Dear Nikolai", offRecord), new Song("Goodbye Galus", offRecord) };
            Song[][] allsongs = new Song[][] { songs1, songs2, songs3 };

            Yaakov.Populate(toastToLife, musica);
            Baruch.Populate(offRecord);
            toastToLife.Populate(songs1);
            musica.Populate(songs2);
            offRecord.Populate(songs3);

            offRecord.Play(PlayMethod.repeat);
            Console.WriteLine();
            Yaakov.Play(PlayMethod.normal);
            Console.WriteLine();
            songs1[0].Play(PlayMethod.repeat);
            Console.WriteLine();
            for (int i = 0; i < allsongs.Length; i++)
            {
                for (int j = 0; j < allsongs[i].Length; j++)
                {
                    allsongs[i][j].Play(PlayMethod.normal);
                }
            }
            
        }    
    }
}
