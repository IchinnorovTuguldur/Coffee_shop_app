import _ from 'lodash';

export const fibonacci = _.memoize((n = 0) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
