export class ProgressTracker {
  private progress: number;

  constructor() {
    this.progress = 0;
  }

  getProgress(): string {
    return `${this.progress}%`;
  }

  incrementProgress(amount: number = 0): void {
    this.validateProgressAmount(amount);
    this.progress += amount;
  }

  private validateProgressAmount(amount: number): void {
    if (amount < 0) {
      throw new Error('Cannot decrease progress');
    }
    if (this.progress + amount > 100) {
      throw new Error('Cannot have progress greater than 100');
    }
  }
}