## Baseline

> Results collected 29/12/2022 - 4830a6cf2a (HEAD -> main, upstream/main, origin/main) src: fix typo in `node_file.cc`


### Results

```
rafaelgss@rafaelgss-desktop:~/repos/os/nodejs-webstreams-perf$ npm run bench

> nodejs-webstreams-perf@1.0.0 bench
> ../node/node bench/fetch.js && ../node/node bench/raw.js

fetch: 22.407s
raw readable: 22.164s
rafaelgss@rafaelgss-desktop:~/repos/os/nodejs-webstreams-perf$ npm run bench

> nodejs-webstreams-perf@1.0.0 bench
> ../node/node bench/fetch.js && ../node/node bench/raw.js

fetch: 22.375s
raw readable: 22.116s
rafaelgss@rafaelgss-desktop:~/repos/os/nodejs-webstreams-perf$ npm run bench

> nodejs-webstreams-perf@1.0.0 bench
> ../node/node bench/fetch.js && ../node/node bench/raw.js


fetch: 22.108s
raw readable: 21.631s
```
