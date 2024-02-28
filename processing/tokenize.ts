export function tokenize(s: string): string[] {
  return s.match(/\b(\w+\W*|\w+\b)/g) || [];
}
