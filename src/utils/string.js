export function shortenString(str) {
  if (str.length >= 5) {
    return str.slice(0, 4) + "..."
  }
  return str
}
