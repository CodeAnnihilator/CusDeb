//tslint:disable

const usersAndGroups = [
	{"username": "test_user2", "group": "some_group", "uid": "110", "gid": "111", "comment": "this is a test user 2", "home_directory": "/root/asd", "shell": "/bin/sbin/asd"},
	{"username": "test_user1", "group": "some_group", "uid": "110", "gid": "111", "comment": "this is a test user", "home_directory": "/root/asd", "shell": "/bin/sbin/asd"},
	{"username": "root", "group": "system", "uid": "0", "gid": "0", "comment": "root", "home_directory": "/root", "shell": "/bin/bash"},
	{"username": "daemon", "group": "system", "uid": "1", "gid": "1", "comment": "daemon", "home_directory": "/root", "shell": "/bin/sbin/nologin"},
	{"username": "bin", "group": "system", "uid": "2", "gid": "2", "comment": "bin", "home_directory": "/usr/bin", "shell": "/bin/sbin/nologin"},
];

export default usersAndGroups;
