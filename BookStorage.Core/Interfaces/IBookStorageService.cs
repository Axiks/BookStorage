using BookStorage.Core.Request;

namespace BookStorage.Core.Interfaces
{
    public interface IBookStorageService
    {
        public Task<List<BookResponse>> GetAllBookAsync();
        public Task<BookResponse> GetBookAsync(Guid id);
        public Task<BookResponse> AddBookAsync(CreateBookRequest book);
        public Task<BookResponse> UpdateBookAsync(Guid id, UpdateBookRequest book);
        public Task DeleteBookAsync(Guid id);
    }
}
