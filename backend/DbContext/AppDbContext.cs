using System.Data;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

public class ApplicationDBContext : DbContext {

    protected readonly IConfiguration Configuration;

    public ApplicationDBContext(IConfiguration configuration, DbContextOptions<ApplicationDBContext> options) : base(options) { 
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
    }

    public DbSet<Employee> Employees { get; set; }

    public DbSet<Candidate> Candidates { get; set; }
}