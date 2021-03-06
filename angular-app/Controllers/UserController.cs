namespace angular_app.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using Models;

    [ApiController]
    [Route("[controller]")]
    public class UserController: ControllerBase
    {
        private static readonly User[] users = new[]
        {
            new User {Name = "João", ID = 1},
            new User {Name = "Danilo", ID = 2}
        };

        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

    }
}