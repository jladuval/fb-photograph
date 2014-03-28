var FormData = require('form-data');

exports.uploadPhoto = function(user_id, access_token, photo_path, message, cb){
	var form = new FormData(); 
	form.append('file', fs.createReadStream(photo_path));
	form.append('message', message);
	form.append('access_token', access_token);
	
	form.submit('https://graph.facebook.com/' + user_id + '/photos?access_token='+access_token, cb);
};