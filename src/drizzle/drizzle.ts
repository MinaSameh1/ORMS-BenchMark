import { BenchMarkTimer } from "../helpers/benchMark.abstract";

export class BenchMark extends BenchMarkTimer {
  constructor() {
    super("Drizzle");
  }

  public async run() {
    console.log("Drizzle");
  }
}
