const CLOSERS =  { ')':'(', ']':'[', '}':'{' };
const OPENERS = { '(':true, '[':true, '{':true }

const isValid = (str) => {
  if (str.length > 104) { return false };

  const seenOpeners = [];

  for(let idx = 0; idx < str.length; idx += 1) {
    const char = str[idx];
    if( !CLOSERS[char] && !OPENERS[char] ) {
      return false;
    };
    if( OPENERS[char] ) {
      seenOpeners.push(char);
      continue;
    }
    const lastSeenOpener = seenOpeners[seenOpeners.length - 1];
    if( CLOSERS[char] === lastSeenOpener) {
      seenOpeners.pop();
      continue;
    };

    return false;
  };

  return seenOpeners.length === 0;
};

export { isValid };
