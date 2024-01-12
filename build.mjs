import * as esbuild from 'esbuild'

// Dev
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'dev') {
  const ctx = await esbuild.context({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: false,
    sourcemap: false,
    outfile: 'assets/js/bundle.js',
  });
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  // Production
  await esbuild.build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: 'assets/js/bundle.js',
  });
}