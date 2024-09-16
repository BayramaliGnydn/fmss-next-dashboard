import { nextui } from '@nextui-org/theme'
import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './template/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'grid-cols-12',
    'gap-0', 'gap-0.5', 'gap-1', 'gap-1.5', 'gap-2', 'gap-2.5', 'gap-3',
    'gap-3.5', 'gap-4', 'gap-5', 'gap-6', 'gap-7', 'gap-8', 'gap-9',
    'gap-10', 'gap-11', 'gap-12', 'gap-14', 'gap-16', 'gap-20',
    'gap-24', 'gap-28', 'gap-32', 'gap-36', 'gap-40', 'gap-44',
    'gap-48', 'gap-52', 'gap-56', 'gap-60', 'gap-64', 'gap-72',
    'gap-80', 'gap-96',
    'gap-x-0', 'gap-x-0.5', 'gap-x-1', 'gap-x-1.5', 'gap-x-2', 'gap-x-2.5', 'gap-x-3',
    'gap-x-3.5', 'gap-x-4', 'gap-x-5', 'gap-x-6', 'gap-x-7', 'gap-x-8', 'gap-x-9',
    'gap-x-10', 'gap-x-11', 'gap-x-12', 'gap-x-14', 'gap-x-16', 'gap-x-20',
    'gap-x-24', 'gap-x-28', 'gap-x-32', 'gap-x-36', 'gap-x-40', 'gap-x-44',
    'gap-x-48', 'gap-x-52', 'gap-x-56', 'gap-x-60', 'gap-x-64', 'gap-x-72',
    'gap-x-80', 'gap-x-96',
    'gap-y-0', 'gap-y-0.5', 'gap-y-1', 'gap-y-1.5', 'gap-y-2', 'gap-y-2.5', 'gap-y-3',
    'gap-y-3.5', 'gap-y-4', 'gap-y-5', 'gap-y-6', 'gap-y-7', 'gap-y-8', 'gap-y-9',
    'gap-y-10', 'gap-y-11', 'gap-y-12', 'gap-y-14', 'gap-y-16', 'gap-y-20',
    'gap-y-24', 'gap-y-28', 'gap-y-32', 'gap-y-36', 'gap-y-40', 'gap-y-44',
    'gap-y-48', 'gap-y-52', 'gap-y-56', 'gap-y-60', 'gap-y-64', 'gap-y-72',
    'gap-y-80', 'gap-y-96',
    'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6',
    'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12',
    'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-3', 'sm:col-span-4', 'sm:col-span-5', 'sm:col-span-6',
    'sm:col-span-7', 'sm:col-span-8', 'sm:col-span-9', 'sm:col-span-10', 'sm:col-span-11', 'sm:col-span-12',
    'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4', 'md:col-span-5', 'md:col-span-6',
    'md:col-span-7', 'md:col-span-8', 'md:col-span-9', 'md:col-span-10', 'md:col-span-11', 'md:col-span-12',
    'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-5', 'lg:col-span-6',
    'lg:col-span-7', 'lg:col-span-8', 'lg:col-span-9', 'lg:col-span-10', 'lg:col-span-11', 'lg:col-span-12',
    'xl:col-span-1', 'xl:col-span-2', 'xl:col-span-3', 'xl:col-span-4', 'xl:col-span-5', 'xl:col-span-6',
    'xl:col-span-7', 'xl:col-span-8', 'xl:col-span-9', 'xl:col-span-10', 'xl:col-span-11', 'xl:col-span-12',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: '#6482AD',
            foreground: '#ffffff'
          },
          secondary: {
            DEFAULT: '#6366f1',
            foreground: '#ffffff'
          },
          dtborder: '#f0f2f5',
          'btn-success': '#17c964',
          'btn-primary': '#6482AD',
          'btn-danger': '#f31260',
          'btn-default': '#c4c2c2',
          'btn-warning': '#f5a524',
          'btn-secondary': '#6366f1',
          "alert-success-bg": "#dcfce7",
          "alert-success-text": "#166534",
          "alert-danger-bg": "#fee2e2",
          "alert-danger-text": "#991b1b",
          "alert-warning-bg": "#fef9c3",
          "alert-warning-text": "#854d0e",
          "alert-info-bg": "#dbeafe",
          "alert-info-text": "#1e40af"
        }
      }
    }
  })],
}