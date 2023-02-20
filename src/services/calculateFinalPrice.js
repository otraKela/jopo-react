function calculateFinalPrice (price, discount) {
  return price * (1 - discount / 100);
}

export default calculateFinalPrice;
