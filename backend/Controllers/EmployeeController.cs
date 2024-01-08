using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase {
    private readonly EmployeeRepository _employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        _employeeRepository = employeeRepository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Employee>> GetEmployees() {
        var employees = _employeeRepository.GetEmployees();
        return Ok(employees);
    }

    // GET: api/employee/{id}
    [HttpGet("{id}")]
    public ActionResult<Employee> GetEmployeeById(int id)
    {
        var employee = _employeeRepository.GetEmployeeById(id);

        if (employee == null)
        {
            return NotFound(); // Return 404 if employee not found
        }

        return Ok(employee);
    }

    // POST: api/employee
    [HttpPost]
    public ActionResult<Employee> CreateEmployee(Employee employee)
    {
        var createdEmployee = _employeeRepository.AddEmployee(employee);

        return CreatedAtAction(nameof(GetEmployeeById), new { id = createdEmployee.Id }, createdEmployee);
    }

    // PUT: api/employee/{id}
    [HttpPut("{id}")]
    public ActionResult<Employee> UpdateEmployee(int id, Employee updatedEmployee)
    {
        var existingEmployee = _employeeRepository.GetEmployeeById(id);

        if (existingEmployee == null)
        {
            return NotFound(); // Return 404 if employee not found
        }

        var updated = _employeeRepository.UpdateEmployee(updatedEmployee);

        if (!updated)
        {
            return BadRequest(); // Return 400 if update fails
        }

        return Ok(updatedEmployee);
    }

    // DELETE: api/employee/{id}
    [HttpDelete("{id}")]
    public ActionResult DeleteEmployee(int id)
    {
        var existingEmployee = _employeeRepository.GetEmployeeById(id);

        if (existingEmployee == null)
        {
            return NotFound(); // Return 404 if employee not found
        }

        _employeeRepository.DeleteEmployee(id);

        return NoContent(); // Return 204 for successful deletion
    }
}