export type ClassNameValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean | undefined | null>
  | ClassNameValue[];

export const classNames = (...args: ClassNameValue[]): string => {
  const classes: string[] = [];

  const processArg = (arg: ClassNameValue) => {
    if (!arg && arg !== 0) {
      return;
    }

    if (Array.isArray(arg)) {
      for (const item of arg) {
        processArg(item);
      }
      return;
    }

    if (typeof arg === 'string') {
      const trimmed = arg.trim();

      if (trimmed) {
        classes.push(trimmed);
      }
      return;
    }

    if (typeof arg === 'number') {
      classes.push(String(arg));
      return;
    }

    if (typeof arg === 'object' && arg !== null) {
      for (const [key, value] of Object.entries(arg)) {
        if (value) classes.push(key);
      }
    }
  };

  for (const arg of args) {
    processArg(arg);
  }

  return [...new Set(classes)].join(' ');
};
