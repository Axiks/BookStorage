using BookStorage.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookStorage.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<BookEntity> Books { get; set; }
    }
}
