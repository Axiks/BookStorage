using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStorage.Data.Entities
{
    public class BookEntity
    {
        public Guid Id {  get; set; }
        public required string Name { get; set; }
        public string Description { get; set; } = string.Empty;
    }
}
