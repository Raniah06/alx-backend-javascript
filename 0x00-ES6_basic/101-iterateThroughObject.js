import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';
import createIteratorObject from './100-createIteratorObject';

export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }
  return employees.join(' | ');
}
