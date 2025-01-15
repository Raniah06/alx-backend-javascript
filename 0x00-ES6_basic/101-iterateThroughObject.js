export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = [];
  for (let employee of reportWithIterator) {
    employeeNames.push(employee);
  }
  return employeeNames.join(' | ');
}
