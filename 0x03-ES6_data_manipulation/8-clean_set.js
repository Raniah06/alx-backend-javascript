export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.trim().length === 0) {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
