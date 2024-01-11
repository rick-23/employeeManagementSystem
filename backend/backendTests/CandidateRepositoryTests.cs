using Microsoft.EntityFrameworkCore;

namespace backendTests;

public class CandidateRepositoryTests
{
    [Fact]
    public void CreateCandidate_ShouldAddCandidateToDatabase()
    {
        // Arrange
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")  // Adjust the file path as needed
            .Build();

        var options = new DbContextOptionsBuilder<ApplicationDBContext>()
            .UseInMemoryDatabase(databaseName: "TestDatabase")
            .Options;

        using var context = new ApplicationDBContext(configuration, options);
        var repository = new CandidateRepository(context);

        var candidate = new Candidate
        {
            FirstName = "John",
            LastName = "Doe",
            DateOfBirth = new DateTime(2003, 12, 31, 0, 0, 0),
            Email = "john@example.com",
            ExperienceMonths = 6,
            ExperienceYears = 6,
            Id = 123456,
            MobileNumber = "9876543210",
            PrimarySkills = new List<string>{ "Java", "JavaScript", ".NET"},
            Resume = new byte[0],
            // Other properties...
        };

        // Act
        repository.CreateCandidate(candidate);

        // Assert
        var savedCandidate = context.Candidates.FirstOrDefault();
        Assert.NotNull(savedCandidate);
        Assert.Equal("John", savedCandidate.FirstName);
        Assert.Equal("Doe", savedCandidate.LastName);
        Assert.Equal("john@example.com", savedCandidate.Email);
    }
}