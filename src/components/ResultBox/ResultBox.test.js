import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


  const testCases = [
    {amount: '100', output: 'PLN 100.00 = $28.57'},
    {amount: '140', output: 'PLN 140.00 = $40.00'},
    {amount: '200', output: 'PLN 200.00 = $57.14'},
    {amount: '10', output: 'PLN 10.00 = $2.86'},
  ];

  const revTestCases = [
    {amount: '100', output: '$100.00 = PLN 350.00'},
    {amount: '140', output: '$140.00 = PLN 490.00'},
    {amount: '200', output: '$200.00 = PLN 700.00'},
    {amount: '10', output: '$10.00 = PLN 35.00'},
  ];

  const biTestCases = [
    {amount: '100', from: 'PLN', to: 'PLN', output: 'PLN 100.00 = PLN 100.00'},
    {amount: '140', from: 'PLN', to: 'PLN', output: 'PLN 140.00 = PLN 140.00'},
    {amount: '200', from: 'PLN', to: 'PLN', output: 'PLN 200.00 = PLN 200.00'},
    {amount: '10', from: 'PLN', to: 'PLN', output: 'PLN 10.00 = PLN 10.00'},
    {amount: '100', from: 'USD', to: 'USD', output: '$100.00 = $100.00'},
    {amount: '140', from: 'USD', to: 'USD', output: '$140.00 = $140.00'},
    {amount: '200', from: 'USD', to: 'USD', output: '$200.00 = $200.00'},
    {amount: '10', from: 'USD', to: 'USD', output: '$10.00 = $10.00'},
  ];

  const minTestCases = [
    {amount: '-100', from: 'PLN', to: 'PLN', output: 'Wrong value...'},
    {amount: '-140', from: 'PLN', to: 'PLN', output: 'Wrong value...'},
    {amount: '-200', from: 'PLN', to: 'PLN', output: 'Wrong value...'},
    {amount: '-10', from: 'PLN', to: 'PLN', output: 'Wrong value...'},
    {amount: '-100', from: 'USD', to: 'USD', output: 'Wrong value...'},
    {amount: '-140', from: 'USD', to: 'USD', output: 'Wrong value...'},
    {amount: '-200', from: 'USD', to: 'USD', output: 'Wrong value...'},
    {amount: '-10', from: 'USD', to: 'USD', output: 'Wrong value...'},
  ];

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {

      for(const testObj of testCases){
        render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
        const output = screen.getByTestId('div-ResultBox');
        expect(output).toHaveTextContent(testObj.output);
        cleanup()
      }
    });
    it('should render without crashing when from="USD" and to="PLN"', () => {
      for(const revTestObj of revTestCases){
        render(<ResultBox from="USD" to="PLN" amount={parseInt(revTestObj.amount)} />);
        const output = screen.getByTestId('div-ResultBox');
        expect(output).toHaveTextContent(revTestObj.output);
        cleanup()
      }
    });
    it('should render without crashing when from and to are the same', () => {
      for(const biTestObj of biTestCases){
        render(<ResultBox from={biTestObj.from} to={biTestObj.to} amount={parseInt(biTestObj.amount)} />);
        const output = screen.getByTestId('div-ResultBox');
        expect(output).toHaveTextContent(biTestObj.output);
        cleanup()
      }
    });
    it('should return error message when input value < 0', () => {
      for(const minTestObj of minTestCases){
        render(<ResultBox from={minTestObj.from} to={minTestObj.to} amount={parseInt(minTestObj.amount)} />);
        const output = screen.getByTestId('div-ResultBox-wrong');
        expect(output).toHaveTextContent(minTestObj.output);
        cleanup()
      }
    })
});