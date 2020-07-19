#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const { version } = require("@/package.json");

program
  .usage("library command")
  .version(version);

program
  .command("build")
  .description("编译源代码")
  .action(require("@/actions/build-source"));

program
  .command("publish")
  .description("发布到npm注册源")
  .action(require("@/actions/publish-it"))

program.parse(process.argv);