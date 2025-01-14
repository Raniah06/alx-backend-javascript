export default function createIteratorObject(report) {
  const employees = Object.values(report);
  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index++;
        return { value, done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
