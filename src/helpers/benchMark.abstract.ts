export class BenchMarkTimer {
  start: number;
  end: number;
  name: string;

  get duration() {
    return this.end - this.start;
  }

  constructor(name: string) {
    this.name = name;
  }

  startTimer() {
    this.start = performance.now();
  }

  endTimer() {
    if (!this.start) {
      return;
    }
    this.end = performance.now() - this.start;
    console.log(`>#Execution time of ${this.name}: ` + this.end * 0.001 + "s");
    return this.end;
  }
}
