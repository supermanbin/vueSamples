export default function (app, options) {
  console.log(app, options);
  app.config.globalProperties.$COMMON = {
    SHAPEPROPERTY: {
      WIDTH: "WIDTH",
      HEIGHT: "HEIGHT",
    },
  };
}
