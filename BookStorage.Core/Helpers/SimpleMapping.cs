using BookStorage.Core.Request;
using BookStorage.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStorage.Core.Helpers
{
    public static class SimpleMapping
    {
        public static BookEntity MapBookRequestToEntity(CreateBookRequest request) => new BookEntity { Name = request.Name, Description = request.Description };
        public static BookResponse MapBookEntityToResponse(BookEntity book) => new BookResponse { Id = book.Id, Name = book.Name, Description = book.Description };
        public static List<BookResponse> MapBookListEntityToResponse(List<BookEntity> books)
        {
            List<BookResponse> booksResponse = new List<BookResponse>();
            foreach (BookEntity book in books)
            {
                booksResponse.Add(MapBookEntityToResponse(book));
            }
            return booksResponse;
        }
    }
}
