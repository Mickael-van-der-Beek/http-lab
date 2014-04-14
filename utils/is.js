exports.Object = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
};

exports.Array = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
};

exports.String = function (obj) {
	return Object.prototype.toString.call(obj) === '[object String]';
};

exports.Function = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Function]';
};

exports.Number = function (obj) {
	return (Object.prototype.toString.call(obj) === '[object Number]') && !isNaN(obj);
};

exports.Date = function (obj) {
	return (Object.prototype.toString.call(obj) === '[object Date]') && !isNaN(obj.getTime());
};

exports.Boolean = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Boolean]';
};