bun x pbjs -t static-module -w commonjs -o compiled.js data.proto
bun x pbts -o compiled.d.ts compiled.js

