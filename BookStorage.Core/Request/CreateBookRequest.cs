using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStorage.Core.Request
{
    public class CreateBookRequest
    {
        public required string Name { get; set; }
        public string Description { get; set; } = string.Empty;
    }
}
