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


console.log(mergeIntervalsBruteForce([[1,3], [2,6], [8,10], [15,18]])
)




function mergeIntervalsOptimized(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]); // sort by start time
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = result[result.length - 1];
    const curr = intervals[i];

    if (curr[0] <= prev[1]) {
      // overlap — merge them
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      // no overlap — add new interval
      result.push(curr);
    }
  }

  return result;
}

