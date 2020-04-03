import { SumIntegers } from './';
import { ProgressTracker } from '../ProgressTracker';

let summer: SumIntegers;
const providedFinalInt = 12;
const trackerMocker = jest.fn<ProgressTracker, []>(() => ({
  getProgress: jest.fn(),
  incrementProgress: jest.fn(),
}) as unknown as ProgressTracker);
const mockProgressTracker = new trackerMocker();

beforeEach(() => {
  summer = new SumIntegers({ sumProgressTracker: mockProgressTracker });
});

describe('SumIntegers.getFinalInt', () => {
  test('returns the default value', () => {
    const finalInt = summer.getFinalInt();

    expect(finalInt).toBe(100);
  });

  test('returns the value passed to the constuctor', () => {
    const summer2 = new SumIntegers({ finalInt: providedFinalInt, sumProgressTracker: mockProgressTracker });

    const finalInt = summer2.getFinalInt();

    expect(finalInt).toBe(providedFinalInt);
  });
});

describe('SumIntegers.getSum', () => {
  test('returns 0 before running computeSum', () => {
    const sum = summer.getSum();

    expect(sum).toBe(0);
  });

  test('returns the sum after running computeSum', () => {
    summer.computeSum();
    const sum = summer.getSum();

    expect(sum).toBe(4950);
  });

  test('returns the sum after running computeSum for a different finalInt', () => {
    const summer2 = new SumIntegers({ finalInt: providedFinalInt, sumProgressTracker: mockProgressTracker });

    summer2.computeSum();
    const sum = summer2.getSum();

    expect(sum).toBe(66);
  });
});

describe('SumIntegers.computeSum', () => {
  test('does not fail', () => {
    summer.computeSum();
  });
});
