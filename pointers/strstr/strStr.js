const strStr = function(haystack, needle) {
  for(let idx = 0; idx < haystack.length; idx += 1) {
    const char = haystack[idx];
    if (char === needle[0]) {
      const needleCandidate = haystack.slice(idx, idx + needle.length);
      if (needleCandidate === needle) { return idx }
    }
  }

  return -1
};
