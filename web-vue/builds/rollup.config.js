// 单个组件打包
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import { getPackagesSync } from "@lerna/project";
import vue from "rollup-plugin-vue";

// 获取package.json 找到名字 以@upfos(排除theme-chalk包) 开头的
const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes("@upfos") && name !== '@upfos/theme-chalk');
export default inputs.map((name) => {
  const pckName = name.split("@upfos")[1];
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: "es",
      file:  `packages/${pckName}/lib/${pckName}.js`
    },
    plugins: [
      nodeResolve(),
      vue({
        target: "browser",
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            // 打包单个组件的时候不生成ts声明文件
            declaration: false,
          },
          exclude: ["node_modules"],
        },
      }),
    ],
    external(id) {
      // 对vue本身、自己写的包 都排除掉不打包
      return /^vue/.test(id) || /^@upfos/.test(id)
    },
  };
});
