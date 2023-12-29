using BookStorage.Core.Helpers;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace BookStorage.API.Controllers
{
    [ApiController]
    public class ErrorController : ControllerBase
    {
        [Route("/error")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult HandleError()
        {
            var exceptionHandlerFeature =
                HttpContext.Features.Get<IExceptionHandlerFeature>()!;
            return Problem(title: exceptionHandlerFeature.Error.Message);
        }

        [Route("/error-development")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult HandleErrorDevelopment(
        [FromServices] IHostEnvironment hostEnvironment)
        {
            if (!hostEnvironment.IsDevelopment())
            {
                return NotFound();
            }

            var exceptionHandlerFeature =
                HttpContext.Features.Get<IExceptionHandlerFeature>()!;

            var problemDetails = new ProblemDetails
            {
                Status = StatusCodes.Status500InternalServerError,
                Title = "An unexpected error occurred",
                Detail = exceptionHandlerFeature.Error.Message
            };

            if (exceptionHandlerFeature.Error is MyApiNotFoundException)
            {
                problemDetails.Status = StatusCodes.Status404NotFound;
                problemDetails.Title = "Not found";
            }

            return StatusCode(problemDetails.Status.Value, problemDetails);
        }
    }
}
