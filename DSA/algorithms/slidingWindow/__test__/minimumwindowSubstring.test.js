import minWindow from '../minimumwindowSubstring';

describe('minimumwindowSubstring', () => {
  it('should return correct results', () => {
    // Replace the next dummy test with your playground function tests.
    expect(minWindow('ADOBECODEBANC', 'ABC')).toStrictEqual("BANC");
    // expect(minWindow('ADOBECODEBAN', 'ABC')).toStrictEqual("BANCx");
    expect(minWindow('ACDOBECODEBAN', 'ABC')).toStrictEqual("BANCx");
  });
});


