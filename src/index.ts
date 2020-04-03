import { ProgressTracker } from './modules/ProgressTracker';
import { SumIntegers } from './modules/SumIntegers';

try {
  main();
} catch (e) {
  console.error(`Whoops, our script failed to run with error ${e}`);
}

function main(): void {
  const summer = new SumIntegers({
    finalInt: 8670,
    sumProgressTracker: new ProgressTracker(),
  });
  console.log(`We are summing integers up to ${summer.getFinalInt()}`);
  summer.computeSum();
  console.log(`The sum is ${summer.getSum()}`);
}
