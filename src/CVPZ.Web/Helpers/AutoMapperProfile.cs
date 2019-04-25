using AutoMapper;
using CVPZ.Web.Dtos;
using CVPZ.Web.Models;

namespace CVPZ.Web.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}