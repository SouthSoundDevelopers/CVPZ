using AutoMapper;

namespace CVPZ.Web.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Models.User, Dtos.UserDto>();
            CreateMap<Dtos.UserDto, Models.User>();
        }
    }
}