exports.config = {
		url : 'http://s353715790.onlinehome.fr/speedlimit/',
		timeout : 10000,
		methods : [{
			name : 'getAlerts',
			get : 'alerts'
		},{
			name : 'gethistory',
			get : 'history'
		}],
		models : [{
			name : 'alert',
			id : 'id',
			collections : [{
				name : 'alerts',
				content : 'data',
				read : 'getAlerts'
			}]
		},{
			name : 'history',
			id : 'id',
			collections : [{
				name : 'histories',
				content : 'data',
				read : 'gethistory'
			}]
		}]
};
