import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateFormat (dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Utilisation du format 24 heures
  };

  return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

export function isNotEmpty(value: any): boolean {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length > 0;
  }

  return true;
}

export function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge<T>(target: T, source: Partial<T>): T {
  // Si le source n'est pas un objet, retourne directement le source
  if (!isObject(source)) {
    return source as T;
  }

  const output = { ...target } as any;

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (isObject(sourceValue)) {
        if (!target[key]) {
          output[key] = sourceValue;
        } else {
          output[key] = deepMerge(
            targetValue as Record<string, unknown>,
            sourceValue as Record<string, unknown>
          );
        }
      } else if (Array.isArray(sourceValue)) {
        output[key] = Array.isArray(targetValue)
          ? [...targetValue, ...sourceValue]
          : sourceValue;
      } else {
        output[key] = sourceValue;
      }
    }
  }

  return output;
}
