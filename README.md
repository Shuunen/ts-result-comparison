# Typescript Result Comparison

[![Project license](https://img.shields.io/github/license/Shuunen/ts-result-comparison.svg?color=informational)](https://github.com/Shuunen/ts-result-comparison/blob/master/LICENSE)

> Compare libraries that ease the Result pattern usage in Typescript

- [Typescript Result Comparison](#typescript-result-comparison)
  - [The result pattern](#the-result-pattern)
  - [The goal of this project](#the-goal-of-this-project)
  - [Run tests and benchmarks](#run-tests-and-benchmarks)
  - [The comparison results](#the-comparison-results)
  - [My favorite pick](#my-favorite-pick)
  - [How to contribute](#how-to-contribute)
  - [Thanks](#thanks)
  - [Stargazers over time](#stargazers-over-time)
  - [Page views](#page-views)

## The result pattern

It's a convention to always return a value or an error from a function.

This is a common pattern in Rust, and it's also used in other languages like Swift and Elm.

This pattern is useful because it forces the developer to handle the error case, which can help prevent bugs.

## The goal of this project

The goal is to compare different libraries and approaches to handle the Result pattern in Typescript.

It's interesting to see how each library is designed, how it's used, and how it performs.

Ideally you can use this comparison to choose the library that fits your needs the best.

## Run tests and benchmarks

Make sure you have Node.js and [Bun](bun.sh) then :

```bash
# install the dependencies
bun install
# run each file once just to verify that everything is working as expected
bun bench --runs 1
# run the benchmarks
bun bench --runs 50
```

Every script is taking between 79 ms (vanilla-object) and 85 ms (resultx), the difference is so small that it's not worth mentioning in the comparison table.

When running the benchmarks with Node on the built files, the results are even closer, between 163 ms and 164 ms.

## The comparison results

Here are the library used in this comparison :

- [fluent-type-results](https://github.com/JasonLandbridge/FluentTypeResults) v1.0.11 from Jason Landbridge
- [resultx](https://github.com/johannschopplich/resultx) v2.0.2 from Johann Schopplich
- [typescript-result](https://github.com/everweij/typescript-result) v3.1.1 from Erik Verweij

| Date       | Score |       Library       | Deps  |  Size  | Light | A typed | B typed | C typed | Async | Align |
| ---------- | :---: | :-----------------: | :---: | :----: | :---: | :-----: | :-----: | :-----: | :---: | :---: |
| 2025-02-02 |  1.5  | fluent-type-results |   0   | 3729 B |   0   |    0    |  **1**  |   0.5   |   0   |   0   |
| 2025-02-02 | **8** |       resultx       |   0   | 938 B  | **2** |  **1**  |  **2**  |  **1**  | **1** | **1** |
| 2025-02-02 |   5   |  typescript-result  |   0   | 5807 B |   0   |  **1**  |  **1**  |  **1**  | **1** | **1** |
| 2025-02-02 |   6   |   vanilla-object    |   0   | 666 B  | **2** |  **1**  |  **2**  |  **1**  |   0   |   0   |
| 2025-02-02 |   4   |    vanilla-throw    |   0   | 641 B  | **2** |  **1**  |    0    |  **1**  |   0   |   0   |

Legend :

- Deps : 1 point removed for each library dependency
- Size : the minified build size in bytes of the related file in `src`, run  `bun run build` to see by yourself
- Light : 1 point if the build is less than 2000 B, 1 bonus point if it's less than 1000 B
- A typed : 1 point if hovering `resultA.value` gives `number`
- B typed : 1 point if hovering `resultB.error` gives the type of the error, could be `string`, `string[]`, `Error`. Another 1 point if we see the literal error message.
- C typed : 1 point if hovering `resultC.value.id` gives `number`. Remove 0.5 if it's `number | something else`
- async :  1 point if a utility is provided to handle async functions easily
- align : 1 point if a utility is provided to align ok and error results, so in the end we can `const { error, value } = anyResult` or `const { ok, error, value } = anyResult`

## My favorite pick

ResultX is clearly my favorite, it has the smallest footprint, it's typed correctly and has everything needed.

## How to contribute

There are many ways to contribute to this project :

- Add a new library to the comparison
- Improve the comparison table, criteria, or scoring
- Improve the samples in `src`
- Find a way to enhance library isolation to have more meaningful benchmarks
- Whatever you think that could be useful

Just open an issue or a PR, I'll be happy to discuss it with you <3

## Thanks

- [Bun](https://bun.sh) : for their great tool to do almost everything ^^
- [FluentTypeResults](https://github.com/JasonLandbridge/FluentTypeResults) : for the library
- [Github](https://github.com) : for all their great work year after year, pushing OSS forward
- [Repo-checker](https://github.com/Shuunen/repo-checker) : eslint cover /src code and this tool the rest ^^
- [ResultX](https://github.com/johannschopplich/resultx) : for the library
- [Shields.io](https://shields.io) : for the nice badges on top of this readme
- [Typescript Result](https://github.com/everweij/typescript-result) : for the library

## Stargazers over time

[![Stargazers over time](https://starchart.cc/Shuunen/ts-result-comparison.svg?variant=adaptive)](https://starchart.cc/Shuunen/ts-result-comparison)

## Page views

[![Free Website Counter](https://www.websitecounterfree.com/c.php?d=9&id=65340&s=12)](https://www.websitecounterfree.com)
