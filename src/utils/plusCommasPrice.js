/**
 * 가격 쉼표 추가
 * @param {string} price 가격
 */
export const plusCommasPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}