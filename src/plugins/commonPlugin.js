export default function (app) {
  app.config.globalProperties.$COMMON = {
    SHAPE_PROPERTY: {
      WIDTH: "WIDTH",
      HEIGHT: "HEIGHT",
    },
  };
}
