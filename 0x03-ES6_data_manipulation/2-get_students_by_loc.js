// 2-get_students_by_loc.js
export default function getStudentsByLocation(list, city) {
  return list.filter((student) => student.location === city);
}
