export function tokenize(s: string): string[] {
  return s.match(/\b(\w+\W+)/g) || [];
}
