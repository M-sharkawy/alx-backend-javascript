export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const filteredList = students.filter((item) => item.location === city);

  return filteredList;
}
