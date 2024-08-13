/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  safelist: [
    'badge',
    'badge-success',
    'badge-warning',
    'badge-error',
    'badge-sm',
    'alert',
    'alert-success',
    'alert-warning',
    'alert-error',
    'text-success',
    'text-warning',
    'text-error',
    'text-info',
    'text-success',
    'gap-3',
    'mask',
    'mask-squircle'
  ]
}

