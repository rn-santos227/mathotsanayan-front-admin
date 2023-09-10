const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "ec2-13-236-239-168.ap-southeast-2.compute.amazonaws.com",
  },
});
