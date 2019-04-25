using Microsoft.EntityFrameworkCore;
using CVPZ.Web.Models;

namespace CVPZ.Web.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}