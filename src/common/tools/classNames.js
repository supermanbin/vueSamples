const classNames = (...opt) => {
  let cls = "";
  const getObjectClass = (item) => {
    if (Array.isArray(item)) {
      getClassFromArray(item);
      return;
    }
    for (const clsKey in item) {
      const val = item[clsKey];
      if (typeof val === "boolean" && val) {
        cls = cls + clsKey + " ";
      }
    }
  };

  const getClassFromArray = (arrayCls) => {
    arrayCls.forEach((item) => {
      switch (typeof item) {
        case "string":
        case "number":
          cls = cls + item + " ";
          break;
        case "object":
          getObjectClass(item);
          break;
        default:
          return cls;
      }
    });
  };
  getClassFromArray(opt);
  return cls;
};

export default classNames;
