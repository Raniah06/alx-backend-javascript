export default function iterateThroughObject(reportWithIterator) {
  const employeesNames = [];
  for (let item of reportWithIterator) {
    employeesNames.push(item);
  }
  return employeesNames.join(' | ');
}
