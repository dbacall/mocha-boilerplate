## Node.js Mocha Test Boilerplate

#### Installation

Install local dependencies

```
npm i
```

#### Running unit test

Execute all unit tests (mocha will look for pattern based `test` named files)

##### Running once

```
npm test
```

##### Running with file watchers

```
npm run test-dev
```

#### Edge Cases

- It should work when the argument is a decimal
- It should work when the returned value is a decimal
- It should work when both values are decimals
- It should handle negative numbers
- It should only accept numbers
