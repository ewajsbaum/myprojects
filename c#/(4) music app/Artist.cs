using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicPlayer
{
    class Artist : PlayAudio
    {
        String name { get; set; }
        Album[] albums;
        public Artist(string name)
        {
            this.name = name;
        }
        public void Populate(Album alb1, Album alb2)
        {
            albums = new Album[] { alb1, alb2 };
        }
        public void Populate(Album alb1)
        {
            albums= new Album[] { alb1 };
        }
        public override void Play(PlayMethod meth)
        {
            for (int i = 0; i < (int)meth; i++)
            {
                Console.WriteLine($"Playing songs by {name}");
                foreach (var album in albums)
                {
                    album.Play(PlayMethod.normal);
                }
            }
        }
    }
}
