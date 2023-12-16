bun x pbjs -t static-module -w commonjs -o ./src/addons/protobuf/packer.js ./src/addons/protobuf/packer.proto
bun x pbts -o ./src/addons/protobuf/packer.d.ts ./src/addons/protobuf/packer.js