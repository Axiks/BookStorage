using BookStorage.Core.Request;

namespace BookStorage.Core.Interfaces
{
    public interface IBookStorageService
    {
        public List<BookResponse> GetAllBook();
        public BookResponse GetBook(Guid id);
        public BookResponse AddBook(BookReqest book);
        public BookResponse UpdateBook(Guid id, BookReqest book);
        public void DeleteBook(Guid id);
    }
}
