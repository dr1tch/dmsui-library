import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "rollup-plugin-json";

import "antd";
const packageJson = require("./package.json");

export default [{
        input: "src/index.ts",
        output: [{
                file: packageJson.main,
                format: "cjs",
            },
            {
                file: packageJson.module,
                format: "esm",
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                config: {
                    path: "./postcss.config.js",
                },
                extensions: [".css"],
                minimize: true,
                extract: true,
                // extract: path.resolve(__filename, "./src/styles/tailwind.css"),
                inject: {
                    insertAt: "top",
                },
            }),
            json(),
            terser(),
            peerDepsExternal(),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];