function formatPrice (price, decimals) {
  return new Intl.NumberFormat('ES-AR', 
                  { style: 'currency', 
                    currency: 'ARS' ,
                    maximumFractionDigits: decimals,

                  }).format(price);
}

export default formatPrice;