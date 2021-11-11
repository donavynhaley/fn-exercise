//Underscore and Lodash already have a similar function, invoked as _.once(). Ramda also provides R.once(), and most FP libraries include similar functionality, so you wouldn't have to program it on your own.

//Singleton funcation that can be called only once
export const once = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

//Singleton funcation that can be called only once and returns another function on every succeeding call

export const onceAndAfter = (fn1, fn2) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn1(...args);
    } else {
      fn2(...args);
    }
  };
};

//Singleton function that can be called only once. No use of a temp variable. resets the return value

export const onceNoVar = (fn) => {
  return (...args) => {
    fn(...args);
    fn = () => console.log("Error, function can be called only once");
  };
};

export const alternator = (fn1, fn2) => {
  return (...args) => {
    fn1(...args);
    [fn1, fn2] = [fn2, fn1];
  };
};

//function that can be invoked a set number of times
export const callThisManyTime = (fn, limit) => {
  return (...args) => {
    if (limit > 0) {
      limit--;
      return fn(...args);
    }
  };
};
