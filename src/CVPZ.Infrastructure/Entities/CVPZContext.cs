using CVPZ.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace CVPZ.Infrastructure.Entities
{
    public class CVPZContext : DbContext
    {

        public CVPZContext(DbContextOptions<CVPZContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JournalEntry>()
                .Property(x => x.Description)
                .IsRequired();
        }

        public DbSet<JournalEntry> JournalEntries { get; set; }
    }
}