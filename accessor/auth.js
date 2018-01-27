var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://pehvgufyzhacll:ff327a12708bbfe5dace30199bc0dae071ee3a3846571ee4074e8da65352817c@ec2-54-163-228-190.compute-1.amazonaws.com:5432/denajo9ommrpca');

exports.insert_user = function (name, passwd, age) {

}