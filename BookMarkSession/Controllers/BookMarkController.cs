using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplicationApi.Controllers
{
    public class BookMarkItem
    {
        public string Name { get; set; }
        public Owner Owner { get; set; }
    }

    public class Owner
    {
      public string Avatar_url { get; set; }
      public string Url { get; set; }

    }
    [Route("[controller]")]
    public class BookMarkController : Controller
    {

        [HttpPost]
        public IActionResult SendMail([FromBody]  BookMarkItem bookMark)
        {
           // SessionExtensions.Set<BookMarkItem>("Book-Mark", bookMark);
            return Ok(bookMark);
        }
    }
}
