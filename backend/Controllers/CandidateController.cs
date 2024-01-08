using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CandidateController : ControllerBase
{
    private readonly CandidateRepository _candidateRepository;

    public CandidateController(CandidateRepository candidateRepository)
    {
        _candidateRepository = candidateRepository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Candidate>> GetCandidates()
    {
        var candidates = _candidateRepository.GetCandidates();
        return Ok(candidates);
    }

    [HttpGet("{id}")]
    public ActionResult<Candidate> GetCandidateById(int id)
    {
        var candidate = _candidateRepository.GetCandidateById(id);

        if (candidate == null)
        {
            return NotFound();
        }

        return Ok(candidate);
    }

    [HttpPost]
    public ActionResult<Candidate> CreateCandidate(Candidate candidate)
    {
        var createdCandidate = _candidateRepository.CreateCandidate(candidate);
        return CreatedAtAction(nameof(GetCandidateById), new { id = createdCandidate.Id }, createdCandidate);
    }

    [HttpPut("{id}")]
    public ActionResult<Candidate> UpdateCandidate(int id, Candidate updatedCandidate)
    {
        var success = _candidateRepository.UpdateCandidate(id, updatedCandidate);

        if (!success)
        {
            return NotFound();
        }

        return Ok(updatedCandidate);
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteCandidate(int id)
    {
        var success = _candidateRepository.DeleteCandidate(id);

        if (!success)
        {
            return NotFound();
        }

        return NoContent();
    }
}