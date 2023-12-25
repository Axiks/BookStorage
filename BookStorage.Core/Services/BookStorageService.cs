using BookStorage.Core.Helpers;
using BookStorage.Core.Interfaces;
using BookStorage.Core.Request;
using BookStorage.Data;
using Microsoft.EntityFrameworkCore;

namespace BookStorage.Core.Services
{
    public class BookStorageService : IBookStorageService
    {
        private readonly ApplicationDbContext _dbContext;

        public BookStorageService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<BookResponse> AddBookAsync(CreateBookRequest book)
        {
            var item = SimpleMapping.MapBookRequestToEntity(book);
            await _dbContext.AddAsync(item);
            _dbContext.SaveChanges();
            return SimpleMapping.MapBookEntityToResponse(item);
        }

        public async void DeleteBookAsync(Guid id)
        {
            var book = await _dbContext.Books.FirstOrDefaultAsync(x => x.Id == id);
            _dbContext.Remove(book);
            _dbContext.SaveChanges();
        }

        public async Task<List<BookResponse>> GetAllBookAsync()
        {
            var books = await _dbContext.Books.ToListAsync();
            return SimpleMapping.MapBookListEntityToResponse(books);
        }

        public async Task<BookResponse> GetBookAsync(Guid id)
        {
            var currentBook = await _dbContext.Books.FirstOrDefaultAsync(x => x.Id == id);
            var response = SimpleMapping.MapBookEntityToResponse(currentBook);
            return response;
        }

        public async Task<BookResponse> UpdateBookAsync(Guid id, UpdateBookRequest book)
        {
            var currentBook = await _dbContext.Books.FirstOrDefaultAsync(x => x.Id == id);
            if(book.Name != null) currentBook.Name = book.Name;
            if(book.Description != null) currentBook.Description = book.Description;
            _dbContext.SaveChanges();
            return SimpleMapping.MapBookEntityToResponse(currentBook);
        }
    }
}
