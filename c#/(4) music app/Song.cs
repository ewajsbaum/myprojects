using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusicPlayer
{
    class Song : PlayAudio
    {
        String songName { get; set; }
        Artist art { get; set; }
        Album alb { get; set; }
        public Song(string songName, Album alb)
        {
            this.songName = songName;
            this.alb = alb;
            alb.art = art;
        }

        public override void Play(PlayMethod meth)
        {
            for (int i = 0; i < (int)meth; i++)
            {
                Console.WriteLine($"Playing song: {songName}");
            }
        }
    }
}
