import { publish } from 'gh-pages';

publish(
	'.svelte-kit', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/hoongtong/sequis.git',
		user: {
			name: 'hoongtong',
			email: 'hoongtong@hotmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
