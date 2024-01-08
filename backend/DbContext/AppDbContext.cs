using Microsoft.EntityFrameworkCore;

public class ApplicationDBContext : DbContext {

    protected readonly IConfiguration Configuration;

    public ApplicationDBContext(IConfiguration configuration) { 
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
    }

    public DbSet<Employee> Employees { get; set; }
}