let _api = null;
try {
	_api = browser;
	// manifest v2 has the action api stored in browserAction, so manually assign it to action
	_api.action = browser.browserAction;
}
catch (ReferenceError) {
	_api = chrome;
}
export const api = _api;
export const logstr = "[Blue Blocker]";
export const DefaultOptions = {
	// by default, spare as many people as possible
	// let the user decide if they want to be stricter
	suspendedBlockCollection: false,
	showBlockPopups: true,
	mute: false,
	blockFollowing: false,
	blockFollowers: false,
	skipVerified: true,
	skipAffiliated: true,
	skip1Mplus: true,
	skipFollowerCount: 1e6,
	blockNftAvatars: false,
	blockInterval: 15,
	popupTimer: 30,

	// this isn't set, but is used
	// TODO: when migrating to firefox manifest v3, check to see if sets can be stored yet
	unblocked: { },
};
export const Headers = [
	"authorization",
	"x-twitter-active-user",
	"x-twitter-auth-type",
	"x-twitter-client-language",
	"sec-ch-ua",
	"sec-ch-ua-mobile",
	"sec-ch-ua-platform",
	"sec-fetch-dest",
	"sec-fetch-mode",
	"sec-fetch-site",
];
export const ReasonBlueVerified = 0;
export const ReasonNftAvatar = 1;
export const ReasonMap = {
	[ReasonBlueVerified]: "Twitter Blue verified",
	[ReasonNftAvatar]: "NFT avatar",
};
