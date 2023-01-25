workspace(
    # see https://docs.bazel.build/versions/main/skylark/deploying.html#workspace
    name = "test-workspace",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "aspect_rules_js",
    sha256 = "928ba25fa82cfe7983f89118677413dc74dbc5d0360fa969da07ff22a9306052",
    strip_prefix = "rules_js-1.15.1",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v1.15.1.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)


load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

# Read the pnpm-lock.yaml file to automate creation of remaining npm_import rules
npm_translate_lock(
    name = "npm",
    data = [
        "//react-project-1:package.json"
    ],
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore"
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()


########Tetst######
http_archive(
    name = "aspect_rules_jest",
    sha256 = "abb6bed8b7b22df20d652c60d780cc23e65ffe6c56500d5a9a836a69469f7f99",
    strip_prefix = "rules_jest-0.14.3",
    url = "https://github.com/aspect-build/rules_jest/archive/refs/tags/v0.14.3.tar.gz",
)

####################
# rules_jest setup #
####################
# Fetches the rules_jest dependencies.
# If you want to have a different version of some dependency,
# you should fetch it *before* calling this.
# Alternatively, you can skip calling this function, so long as you've
# already fetched all the dependencies.
load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()

# Fetches the npm packages for jest-cli.
load("@aspect_rules_jest//jest:repositories.bzl", "jest_repositories")

jest_repositories(name = "jest")

load("@jest//:npm_repositories.bzl", jest_npm_repositories = "npm_repositories")

jest_npm_repositories()