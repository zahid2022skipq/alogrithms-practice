var validUtf8 = function (data) {
  const binaries = getBinaryEncoding(data); // convert the number into its binary encoding
  return validate(binaries);
};

function getBinaryEncoding(data) {
  return data.map((num) => {
    const output = [];
    while (num) {
      const temp = num & 1;
      output.push(temp);
      num = num >>> 1;
    }
    while (output.length < 8) {
      // 1 byte = 8 bits
      output.push(0);
    }
    return output.reverse();
  });
}

function validate(bytes) {
  let idx = 0;
  let numOf1s = 0;
  while (idx < bytes.length) {
    // processing one char at a time
    const byte = bytes[idx];
    for (let bit of byte) {
      if (bit === 0) {
        break;
      }
      ++numOf1s;
    }
    if (numOf1s === 0) {
      // 1-byte character
      ++idx;
      continue;
    }
    if (!(numOf1s >= 2 && numOf1s <= 4)) {
      // each char can be 1 to 4 bytes long
      return false;
    }
    // count = idx was the 1st byte of the current char
    let count = idx + 1;
    while (count < idx + numOf1s && count < bytes.length) {
      const byte = bytes[count];
      if (byte[0] !== 1 || byte[1] !== 0) {
        // check most significant bits of each byte
        return false;
      }
      ++count;
    }
    if (count < idx + numOf1s) {
      // all bytes are not present to satisfy UTF-8 proeprties for a char
      return false;
    }
    idx += numOf1s; // move to the next char
    numOf1s = 0; // update the counter
  }
  return true;
}

console.log(validUtf8([197, 130, 1]));
