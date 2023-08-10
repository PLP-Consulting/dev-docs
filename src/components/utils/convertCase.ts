export function toSentenceCase(string: string): string {
  let lower = string.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
}

export function toSnakeCase(string: string): string {
  let lower = string.toLowerCase();
  return lower.toLowerCase().replaceAll(" ", "_");
}
