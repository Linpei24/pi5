Router.configure({
	layoutTemplate: 'layout',
	loadingTemlate : 'loading',
	notFoundTemplate: 'notFound',
	
});

Router.route('/admin/user', {
	name: 'gestUser',
	
});
