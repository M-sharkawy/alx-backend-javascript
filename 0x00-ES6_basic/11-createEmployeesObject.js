export default function createEmployeesObject(departmentName, employees) {
  const departMembers = {
    [departmentName] : employees
  }

  return departMembers;
}
