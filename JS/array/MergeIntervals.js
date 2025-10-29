function mergeIntervalsBruteForce(intervals) {
  if (intervals.length === 0) return [];

  let merged = [...intervals];
  let mergedSomething = true;

  while (mergedSomething) {
    mergedSomething = false;
    let newList = [];
    let used = new Array(merged.length).fill(false);

    for (let i = 0; i < merged.length; i++) {
      if (used[i]) continue;
      let [start, end] = merged[i];
      for (let j = i + 1; j < merged.length; j++) {
        if (used[j]) continue;
        let [s, e] = merged[j];
        // overlap condition
        if (Math.max(start, s) <= Math.min(end, e)) {
          start = Math.min(start, s);
          end = Math.max(end, e);
          used[j] = true;
          mergedSomething = true;
        }
      }
      used[i] = true;
      newList.push([start, end]);
    }
    merged = newList;
  }

  return merged;
}
