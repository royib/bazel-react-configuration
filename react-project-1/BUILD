load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//react-project-1:webpack-cli/package_json.bzl", "bin")
load("@aspect_rules_jest//jest:defs.bzl", "jest_test")

npm_link_all_packages(
    name = "node_modules",
)

js_library(
    name = "lib",
    srcs = ["package.json", ".babelrc"] + glob(["src/**/*.jsx", "src/**/*.js", "src/**/*.css", "src/**/*.scss", "public/**/*"]),
    deps = [    
        ":node_modules/css-loader",
        ":node_modules/mini-css-extract-plugin",
        ":node_modules/@babel/core",
        ":node_modules/@babel/preset-env",
        ":node_modules/@babel/preset-react",
        ":node_modules/@svgr/webpack",
        ":node_modules/babel-loader",
        ":node_modules/html-webpack-plugin",
        ":node_modules/sass",
        ":node_modules/sass-loader",
        ":node_modules/style-loader",
        ":node_modules/react",
        ":node_modules/react-dom"
    ],
)

bin.webpack_cli(
    name = "react-project-1-bundle",
    srcs = [
        ":lib",
        ":webpack.config.js",
    ],
    outs = [
        "dist/main.js",
        "dist/main.css",
        "dist/index.html",

    ],
    args = [
        "--config webpack.config.js",
    ],
    chdir = package_name(),
    log_level = "debug",
)

######Tests#####
jest_test(
    name = "react-project-1-test",
    config = "jest.config.js",
    auto_configure_reporters = True,
    data = glob(["src/**/*test.js"]) + [":node_modules/jest-junit"],
    log_level = "debug",
)