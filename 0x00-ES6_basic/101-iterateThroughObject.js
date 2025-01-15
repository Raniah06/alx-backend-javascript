export default function iterateThroughObject(reportWithIterator) {
  let result = "";
  let first = true; // Flag to handle the first element

  for (const item of reportWithIterator) {
    if (!first) {
      result += " | ";
    }
    result += item;
    first = false;
  }

  return result;
}
