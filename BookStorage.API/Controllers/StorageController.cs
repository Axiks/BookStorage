using BookStorage.Core.Interfaces;
using BookStorage.Core.Request;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookStorage.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StorageController : ControllerBase
    {
        private IBookStorageService _bookStorageService;
        // GET: api/<StorageController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = _bookStorageService.GetAllBook();
            return Ok(result);
        }

        // GET api/<StorageController>/5
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var result = _bookStorageService.GetBook(id);
            return Ok(result);
        }

        // POST api/<StorageController>
        [HttpPost]
        public IActionResult Post(BookRequest book)
        {
            var result = _bookStorageService.AddBook(book);
            return Ok(result);
        }

        // PUT api/<StorageController>/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, BookRequest book)
        {
            var result = _bookStorageService.UpdateBook(id, book);
            return Ok(result);
        }

        // DELETE api/<StorageController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _bookStorageService.DeleteBook(id);
            return Ok();
        }
    }
}
