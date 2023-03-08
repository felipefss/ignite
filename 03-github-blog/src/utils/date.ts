function getDaysDurationFromCreatedAt(createdAt: string): number {
  const createdMs = Date.parse(createdAt);
  const now = Date.now();
  const result = (now - createdMs) / 86400000;

  return Math.round(result);
}

export function formatDuration(createdAtISO: string): string {
  const daysAgo = getDaysDurationFromCreatedAt(createdAtISO);

  return `Há ${daysAgo} dia${daysAgo > 1 && 's'}`;
}
