using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CVPZ.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CVPZ.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProfileController : ControllerBase
    {
        public Profile Get()
        {
            var profile = new Profile { Nickname = "Joe" };
            return profile;
        }
    }
}