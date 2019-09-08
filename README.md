# Node.js
## Overview
You work for GE Appliances developing firmware for embedded appliance controls. In order to test and debug embedded appliance controls, you use the wildly popular ApplCore tool.

In order to make your life even easier, you want to develop an ApplCore plugin. Before you can do this, you'll need to learn Node.js. In order to do so, you decide to make a sample application that demonstrates several key Node.js and `npm` features.

## Details
You must create an application that:
- Runs unit tests (`npm t`)
- Runs code coverage (`npm run coverage`)
- Loads local/relative dependencies
- Loads registry dependencies
- Has an ES6 class
- Has a non-ES6 class (doesn't need to use prototype)
- Does something asynchronously with `async`-`await`
- Uses `promise.all` to do several asynchronous things in parallel
- Bundled into a single binary with `pkg` (`npm run package`)

## Deliverables
- Instructions for setup and use
- Code

## Weighting
The table below shows the weighting (out of 100%) for each portion of the homework assignment.

Item | Weight
--- | :---:
Instructions | 5%
Unit tests | 15%
Dependencies | 15%
Classes | 30%
Async | 20%
Bundled/packaged binary | 15%
