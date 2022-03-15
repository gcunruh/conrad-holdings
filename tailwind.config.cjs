module.exports = {
    mode: 'jit', // ⚠ Make sure to have this
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      // fontFamily: {
      //   sans: ['Open Sans']
      // },
      extend: {}
    },
    plugins: [],
    darkMode: 'media', // or 'media' or 'class'
  }