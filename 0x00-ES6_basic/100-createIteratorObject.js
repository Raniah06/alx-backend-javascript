export default function createIteratorObject(report) {
  const employees = Object.values(report);
  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index = index + 1;
        return { value, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
