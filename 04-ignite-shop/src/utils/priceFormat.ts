export const priceFormat = (price: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format((price ?? 0) / 100);
