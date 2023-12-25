using BookStorage.Core.Interfaces;
using BookStorage.Core.Request;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookStorage.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StorageController : ControllerBase
    {
        private readonly IBookStorageService _bookStorageService;

        public StorageController(IBookStorageService bookStorageService)
        {
            _bookStorageService = bookStorageService;
        }

        // GET: api/<StorageController>
        [HttpGet]
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(List<BookResponse>))]
        public IActionResult Get()
        {
            var result = _bookStorageService.GetAllBookAsync();
            return Ok(result);
        }

        // GET api/<StorageController>/5
        [HttpGet("{id}")]
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(BookResponse))]
        public IActionResult Get(Guid id)
        {
            var result = _bookStorageService.GetBookAsync(id);
            return Ok(result);
        }

        // POST api/<StorageController>
        [HttpPost]
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(BookResponse))]
        public IActionResult Post(CreateBookRequest book)
        {
            var result = _bookStorageService.AddBookAsync(book);
            return Ok(result);
        }

        // PUT api/<StorageController>/5
        [HttpPut("{id}")]
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(BookResponse))]
        public IActionResult Put(Guid id, CreateBookRequest book)
        {
            var result = _bookStorageService.UpdateBookAsync(id, book);
            return Ok(result);
        }

        // DELETE api/<StorageController>/5
        [HttpDelete("{id}")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        public IActionResult Delete(Guid id)
        {
            _bookStorageService.DeleteBookAsync(id);
            return Ok();
        }
    }
}
