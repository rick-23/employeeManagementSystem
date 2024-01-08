public class Candidate {
    public required int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required DateTime DateOfBirth { get; set; }
    public required string Email { get; set; }
    public required string MobileNumber { get; set; }
    public required string PrimarySkills { get; set; }
    public required int ExperienceYears { get; set; }
    public required int ExperienceMonths { get; set; }
    public required byte[] Resume { get; set; } 
}