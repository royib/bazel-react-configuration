load("@npm//:defs.bzl", "npm_link_all_packages")

# Link all packages from the /WORKSPACE npm_translate_lock(name = "npm") and also packages from
# manual /WORKSPACE npm_import rules to bazel-bin/node_modules as well as the virtual store
# bazel-bin/node_modules/.aspect_rules_js since /pnpm-lock.yaml is the root of the pnpm workspace
npm_link_all_packages(
    name = "node_modules"
)