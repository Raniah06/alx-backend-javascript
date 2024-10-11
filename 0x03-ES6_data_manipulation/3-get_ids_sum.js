// 3-get_ids_sum.js
export default function getStudentIdsSum(list) {
  return list.reduce((sum, student) => sum + student.id, 0);
}
