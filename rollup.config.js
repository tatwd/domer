export default {
  input: 'src/index.js',
  output: [
    {
      format: 'es',
      file: 'dist/domer.js'
    },
    {
      format: 'iife',
      name: 'domer',
      file: 'dist/domer.iife.js'
    }
  ],
  watch: {
    include: 'src/**'
  }
};
