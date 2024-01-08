public class CandidateRepository {
    private readonly ApplicationDBContext _context;

    public CandidateRepository(ApplicationDBContext context)
    {
        _context = context;
    }

    public IEnumerable<Candidate> GetCandidates()
    {
        return _context.Candidates.ToList();
    }

    public Candidate GetCandidateById(int id)
    {
        return _context.Candidates.FirstOrDefault(c => c.Id == id)!;
    }

    public Candidate CreateCandidate(Candidate candidate)
    {
        _context.Candidates.Add(candidate);
        _context.SaveChanges();
        return candidate;
    }

    public bool UpdateCandidate(int id, Candidate updatedCandidate)
    {
        var existingCandidate = _context.Candidates.FirstOrDefault(c => c.Id == id);

        if (existingCandidate != null)
        {
            // Update properties
            existingCandidate.FirstName = updatedCandidate.FirstName;
            existingCandidate.LastName = updatedCandidate.LastName;
            existingCandidate.DateOfBirth = updatedCandidate.DateOfBirth;
            existingCandidate.Email = updatedCandidate.Email;
            existingCandidate.MobileNumber = updatedCandidate.MobileNumber;
            existingCandidate.PrimarySkills = updatedCandidate.PrimarySkills;
            existingCandidate.ExperienceYears = updatedCandidate.ExperienceYears;
            existingCandidate.ExperienceMonths = updatedCandidate.ExperienceMonths;
            existingCandidate.Resume = updatedCandidate.Resume;

            _context.SaveChanges();
            return true;
        }

        return false;
    }

    public bool DeleteCandidate(int id)
    {
        var candidate = _context.Candidates.FirstOrDefault(c => c.Id == id);

        if (candidate != null)
        {
            _context.Candidates.Remove(candidate);
            _context.SaveChanges();
            return true;
        }

        return false;
    }
}