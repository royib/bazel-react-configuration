# bazel-react-configuration
This repo should give you a good starting point to integrate react into your bazel monorepo.
I have published an article on this subject, you can find it in - https://betterprogramming.pub/creating-a-react-application-in-a-bazel-monorepo-9bbf67ce2030

You should install: bazel, pnpm

After cloning this repository run these commands on the terminal:
```
pnpm i
bazel build react-project-1/react-project-1-test
```

For running your tests, run these commands on the terminal:
```
bazel test react-project-1/react-project-1-test
```
