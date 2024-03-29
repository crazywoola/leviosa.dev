import * as esbuild from 'esbuild'

const config = {
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: process.env.NODE_ENV === 'development' ? false : true,
  sourcemap: false,
  outfile: 'assets/js/bundle.js',
  jsx: 'automatic',
};

// Dev
if (process.env.NODE_ENV === 'development') {
  const ctx = await esbuild.context(config);
  await ctx.watch();
} else {
  // Production
  await esbuild.build(config);
}