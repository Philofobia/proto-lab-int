import { DataInt } from "../types/types";

export const  splitArrayOfObjects = (arr: DataInt[], size: number): DataInt[][] => {
    let results: DataInt[][] = [];
    while (arr.length) {
      results.push(arr.slice(0, size));
      arr = arr.slice(size);
    }
    return results;
  }