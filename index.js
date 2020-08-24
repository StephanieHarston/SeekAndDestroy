function destroyer(arr, ...args) {
      return arr
      .concat(args)
      .filter(item => !arr.includes(item) || !args.includes(item))


}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
