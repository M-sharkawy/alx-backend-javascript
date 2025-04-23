export default function getListStudents() {
  const list = [
    { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
    { firstName: 'James', id: 2, location: 'Columbia' },
    { firstName: 'Serena', id: 5, location: 'San Francisco' },
  ];

  const sortedList = list.sort((a, b) => a.id - b.id);

  return sortedList.map(({ id, firstName, location }) => ({
    id,
    firstName,
    location,
  }));
}
