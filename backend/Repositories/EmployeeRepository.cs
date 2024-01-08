using System.Collections.Generic;
using System.Linq;

public class EmployeeRepository {
    private readonly ApplicationDBContext _context;

    public EmployeeRepository(ApplicationDBContext context) {
        _context = context;
    }

    public IEnumerable<Employee> GetEmployees() {
        return _context.Employees.ToList();
    }

    public Employee GetEmployeeById(int id) {
        return _context.Employees.FirstOrDefault(e => e.Id == id);
    }



    public Employee AddEmployee(Employee employee) {
        _context.Employees.Add(employee);
        _context.SaveChanges();
        return employee;
    }

    public bool UpdateEmployee(Employee employee) {
        _context.Employees.Update(employee);
        _context.SaveChanges();
        return true;
    }

    public void DeleteEmployee(int id) {
        var employee = _context.Employees.FirstOrDefault(e => e.Id == id);
        if(employee != null) {
            _context.Employees.Remove(employee);
            _context.SaveChanges();
        }
    }
}