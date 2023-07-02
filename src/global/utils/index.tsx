// Converts the camelCase string in to the title case
const camelToNormalCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => ` ${letter}`);
