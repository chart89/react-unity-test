export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  /* if imput is 'string' return NaN */
  if(typeof PLN === 'string') {
    return NaN;
  };

  /* if imput is empty retur NaN */
  if (PLN == null) {
    return NaN;
  }

  /* if imput is not a number and is not string return Error */
  if(typeof PLN !== 'string' && typeof PLN !== 'number') {
    return 'Error';
  };

  /* if imput is lower than o return $0.00 */
  if(PLN < 0) {
    return ('$0.00');
  }

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}