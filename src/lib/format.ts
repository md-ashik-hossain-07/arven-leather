const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"] as const;

export function toBanglaNumber(value: number | string) {
  return String(value).replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
}

export function formatTaka(value: number) {
  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0
  }).format(value);

  return "৳ " + toBanglaNumber(formatted);
}
