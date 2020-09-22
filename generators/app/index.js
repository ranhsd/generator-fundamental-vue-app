const Generator = require("yeoman-generator");
const yosay = require("yosay");
const path = require("path");
const get = require("lodash.get");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        name: "projectName",
        type: "input",
        message: "Enter the project name",
      },
      {
        name: "appTitle",
        type: "input",
        message: "Enter the app title",
      },
      {
        name: "description",
        type: "input",
        message: "Enter the app description",
        default: this.description,
      },
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );

    this.fs.copyTpl(
      this.templatePath("vue.config.js"),
      this.destinationPath("vue.config.js")
    );

    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );

    this.fs.copyTpl(
      this.templatePath("babel.config.js"),
      this.destinationPath("babel.config.js")
    );

    this.fs.copyTpl(
      this.templatePath("postcss.config.js"),
      this.destinationPath("postcss.config.js")
    );

    this.fs.copyTpl(this.templatePath("src"), this.destinationPath("src"), {
      appTitle: this.answers.appTitle,
    });

    this.fs.copyTpl(
      this.templatePath("public"),
      this.destinationPath("public"),
      { title: this.appname }
    );
  }

  configuring() {
    this.destinationRoot(
      path.join(this.destinationRoot(), get(this, "answers.projectName", ""))
    );
  }

  install() {
    this.installDependencies({ npm: true, bower: false });
  }

  end() {
    console.log(yosay("Creating tailwindcss config file"));

    this.spawnCommand("npx", [
      "tailwind",
      "init",
      "tailwind.config.js",
      "--full",
    ]);
  }
};
