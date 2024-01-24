import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  minify: false,
  plugins: [dts()],
  format: "esm",
});

// seem now bun not yet support build to cjs -> walkaround - gen cjs
// WARNING: only true for this specific case
const file = Bun.file("./dist/index.js");
let text = await file.text();
text = text.replace("export", "module.exports =");
await Bun.write("./dist/index.cjs", text);
