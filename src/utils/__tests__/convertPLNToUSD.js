import { convertPLNToUSD } from '../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when imput is text', () => {
    expect(convertPLNToUSD('4')).toBeNaN();
    expect(convertPLNToUSD('xyz')).toBeNaN();
    expect(convertPLNToUSD('098')).toBeNaN();
    expect(convertPLNToUSD('-34')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return Error when imput is different than number and string', () => {
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(function(){})).toBe('Error');
  });
  it('should return zero when input is lower than zero', () => {
    expect(convertPLNToUSD(-3)).toBe('$0.00');
    expect(convertPLNToUSD(-9)).toBe('$0.00');
    expect(convertPLNToUSD(-234)).toBe('$0.00');
  });
});