
/* Checks if the second argument is a substring of the first argumen (case insensitive) */
export function stringIncludes(string, substring) {
  return string.toLowerCase().includes(substring.toLowerCase());
}