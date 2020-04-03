import { ProgressTracker } from './';

let tracker: ProgressTracker;

beforeEach(() => {
  tracker = new ProgressTracker();
});

describe('ProgressTracker.incrementProgress', () => {
  test('throws when incrementing to over 100', () => {
    const excessiveIncrement = 101;

    const failedCall = () => {
      tracker.incrementProgress(excessiveIncrement);
    }

    expect(failedCall).toThrow('Cannot have progress greater than 100');
  });

  test('throws when providing a negative increment', () => {
    const negativeIncrement = -1;

    const failedCall = () => {
      tracker.incrementProgress(negativeIncrement);
    }

    expect(failedCall).toThrow('Cannot decrease progress');
  });

  test('succeeds when given a small positive integer', () => {
    tracker.incrementProgress(15);
  });
});

describe('ProgressTracker.getProgress', () => {
  test('returns progress as a percentage', () => {
    const progress = tracker.getProgress();

    expect(progress).toBe('0%');
  });

  test('updates to reflect a change in progress', () => {
    const increment = 13;

    tracker.incrementProgress(increment);
    const progress = tracker.getProgress();

    expect(progress).toBe(`${increment}%`);
  });
});
