using BookStorage.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace BookStorage.Data
{
    public class ApplicationDbContext : DbContext
    {
        DbSet<BookEntity> Books { get; set; }
    }
}
