export default function iterateThroughObject(reportWithIterator) {
  const employeesNames = [];
  for (const item of reportWithIterator) {
    employeesNames.push(item);
  }
  return employeesNames.join(' | ');
}
