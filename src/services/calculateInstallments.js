function calculateInstallments (price, discount) {
  return discount === null? price / 6 : price * (1 - discount / 100) / 6;
}

export default calculateInstallments;