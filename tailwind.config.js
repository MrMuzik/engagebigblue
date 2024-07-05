/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
			'sans': ['"montserrat"', '"open-sans"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
      'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'ui-serif', 'serif'],
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			// '2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
		extend: {
			fontFamily: {
				'condensed': ['"open-sans-condensed"', '"open-sans"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
				'headline': ['"yellowtail"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'ui-serif', 'serif'],
      },
      colors: {
        'big-blue': '#0378A6',
        'big-cream': '#FFFBE9',
        'big-teal': '#65D9CD',
        'big-coral': '#FC948B',
      },
		},
  },
  plugins: [],
}

