const CLOSERS_TO_OPENER_MAP =  { ')':'(', ']':'[', '}':'{' };
const OPENERS = /[\(\[\{]/;
const CLOSERS = /[\)\]\}]/;

const handleIsParen = (char, stack) => {
    if( OPENERS.test(char) ) {
      stack.push(char);
    };
    const lastSeenOpener = stack[stack.length - 1];
    if( CLOSERS_TO_OPENER_MAP[char] === lastSeenOpener) {
      stack.pop();
    };
};

const isValid = (str) => {
  if (str.length > 104) { return false };

  const seenOpeners = [];

  for(let idx = 0; idx < str.length; idx += 1) {
    const char = str[idx];
    if( CLOSERS.test(char) || OPENERS.test(char) ) {
      handleIsParen(char, seenOpeners);
      continue;
    };

    return false;
  };

  return seenOpeners.length === 0;
};

export { isValid };
