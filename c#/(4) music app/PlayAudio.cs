using System;

namespace MusicPlayer
{
    public enum PlayMethod
    {
        normal = 1,
        repeat = 2
    }
    abstract class PlayAudio
    {
        public virtual void Play(PlayMethod meth)
        {
            Console.WriteLine("Playing audio file");
        }
    }
}
