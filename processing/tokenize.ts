export function tokenize(s: string): string[] {
  return s.match(/\b(\w+\W*|\w+\b)/g) || [];
}

export function clean(token: string): string {
  return token.toLowerCase().replace(/\W/g, '');
}
