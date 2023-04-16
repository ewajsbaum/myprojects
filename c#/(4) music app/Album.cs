using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicPlayer
{
    class Album : PlayAudio
    {
        String albName { get; set; }
        public Artist art { get; set; }
        Song[] songs;
        public Album(string albName, Artist art)
        {
            this.albName = albName;
            this.art = art;
        }
        public void Populate(Song[] songs)
        {
            this.songs = songs;
        }
        
        public override void Play(PlayMethod meth)
        {
            for (int i = 0; i < (int)meth; i++)
            {
                Console.WriteLine($"Playing album: {albName}");
                foreach (var song in songs)
                {
                    song.Play(PlayMethod.normal);
                }
            }
        }
    }
}
