const fs = require("fs");
const path = require("path");
const process = require("process");

const ignoreList = [".vuepress", ".DS_Store"];

const workPath = path.join(process.cwd() + "/docs");

function buildChildren(path, parentName = "") {
  const files = fs.readdirSync(path);
  return files
    .map((file) => {
      if (ignoreList.includes(file)) return;
      const current = { title: file };
      const subPath = `${path}/${file}`;
      if (fs.statSync(subPath).isDirectory()) {
        current.children = buildChildren(subPath, `${parentName}/${file}`);
      } else {
        if (file === "README.md") {
          current.path = `${parentName}/`;
        } else {
          const suffixName = file.slice(-3);
          if (suffixName !== ".md") return;
          current.path = `${parentName}/${file.slice(0, -3)}`;
        }
      }
      return current;
    })
    .filter((item) => item);
}

const sidebar = buildChildren(workPath);

module.exports = {
  title: "前端知识",
  description:
    "主要记录自己对前端知识的梳理和理解。",
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/chuckbass2121/frontend-knowledge" }],
    sidebar,
  },
  dest: path.resolve(__dirname, "../", "../", "dist"),
  base: "/frontend-knowledge/",
  evergreen: true,
};
