using BookStorage.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookStorage.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<BookEntity> Books { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
    }
}
