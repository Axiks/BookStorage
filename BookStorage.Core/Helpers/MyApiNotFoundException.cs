using System.Net;

namespace BookStorage.Core.Helpers
{
    public class MyApiNotFoundException : Exception
    {
        public MyApiNotFoundException(string message) : base(message) { }
    }
}
