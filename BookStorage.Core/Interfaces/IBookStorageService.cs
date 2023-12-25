using BookStorage.Core.Request;

namespace BookStorage.Core.Interfaces
{
    public interface IBookStorageService
    {
        public List<BookResponse> GetAllBook();
        public BookResponse GetBook(Guid id);
        public BookResponse AddBook(BookRequest book);
        public BookResponse UpdateBook(Guid id, BookRequest book);
        public void DeleteBook(Guid id);
    }
}
