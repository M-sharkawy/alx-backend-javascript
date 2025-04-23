export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const newarr = [];

  for (const item of set) {
    if (item.startsWith(startString)) {
      const trim = item.slice(startString.length);
      if (trim) {
        newarr.push(trim);
      }
    }
  }

  return newarr.join('-');
}
