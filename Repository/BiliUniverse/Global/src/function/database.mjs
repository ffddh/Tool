export default {
	Global: {
		Settings: {
			ForceHost: "1",
			Locales: ["CHN", "HKG", "TWN"],
			Proxies: {
				CHN: "DIRECT",
				HKG: "🇭🇰香港",
				MAC: "🇲🇴澳门",
				TWN: "🇹🇼台湾",
			},
		},
		Configs: {
			Locale: {
				CHN: "",
				HKG: "（僅限港.*地區）",
				MAC: "（僅限.*澳.*地區）",
				TWN: "（僅限.*台地區）",
			},
			SearchNav: {
				CHN: {
					name: "番剧🇨🇳",
					total: 0,
					pages: 0,
					type: 17,
				},
				HKG: {
					name: "动画🇭🇰",
					total: 0,
					pages: 0,
					type: 27,
				},
				MAC: {
					name: "动画🇲🇴",
					total: 0,
					pages: 0,
					type: 37,
				},
				TWN: {
					name: "动画🇹🇼",
					total: 0,
					pages: 0,
					type: 47,
				},
			},
		},
	},
	Default: {
		Settings: {
			LogLevel: "WARN",
		},
	},
};
