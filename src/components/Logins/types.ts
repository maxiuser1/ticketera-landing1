export type LoginVm = {
	username: string;
	password: string;
};

export type SubmittedLogin = {
	username: string;
	password: string;
};

export type LoginSubmitDetails = {
	loginVm: SubmittedLogin;
};

export type LoginSubmitEvent = CustomEvent<LoginSubmitDetails>;
