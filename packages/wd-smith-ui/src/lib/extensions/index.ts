const svgs = import.meta.glob('./*.svg', { eager: true });

export const extIcons = Object.fromEntries(
  Object.entries(svgs).map(([key, value]) => {
    const svgName = key.replace('./', '').replace('.svg', '');
    return [svgName.toLowerCase(), (value as any).default];
  })
);
