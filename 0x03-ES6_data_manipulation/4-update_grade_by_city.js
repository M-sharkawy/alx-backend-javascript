export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list)) {
    return [];
  }

  const filteredListCity = list
    .filter((students) => students.location === city)
    .map((students) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === students.id);

      return {
        ...students,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });

  return filteredListCity;
}
