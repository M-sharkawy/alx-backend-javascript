export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  const listId = list.map((item) => item.id);

  return listId.reduce((acc, curr) => acc + curr, 0);
}
