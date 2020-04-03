import { ProgressTracker } from '../ProgressTracker';

export class SumIntegers {
  private finalInt: Constructor['finalInt'];
  private sumProgressTracker: Constructor['sumProgressTracker'];
  private sum: number;
  private meter: number;

  constructor({ finalInt = 100, sumProgressTracker }: Constructor) {
    this.validateFinalInt(finalInt);
    this.finalInt = finalInt;
    this.sumProgressTracker = sumProgressTracker;
    this.sum = 0;
    this.meter = 20;
  }

  getSum(): number {
    return this.sum;
  }

  getFinalInt(): number {
    return this.finalInt;
  }

  computeSum(): number {
    this.sum = 0;
    for (let i = 0; i < this.finalInt; i++) {
      this.sum += i;
      if (i % (this.meter * this.finalInt / 100) === 0) {
        this.sumProgressTracker.incrementProgress(this.meter);
        console.log(`Sum Progress: ${this.sumProgressTracker.getProgress()}`);
      }
    }
    return this.sum;
  }

  private validateFinalInt(finalInt: number): void {
    if (finalInt < 0) {
      throw new Error('Final integer cannot be negative');
    }
  }
}

interface Constructor {
  finalInt?: number;
  sumProgressTracker: ProgressTracker;
}
