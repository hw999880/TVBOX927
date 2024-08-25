// 搜索安全验证 > rss
muban.短视.二级.title = '.img&&img&&alt;.main-ui-meta&&div:eq(6)--span&&Text';
muban.短视.二级.desc = 'a.douban&&Text;;;.main-ui-meta&&div:eq(5)&&Text;.main-ui-meta&&div:eq(3)&&Text';
muban.短视.二级.tabs = '.py-tabs&&li';
muban.短视.二级.tab_text = 'body--small&&Text';
var rule = {
	title: '凌云影视',
	模板: '短视',
	// host:'https://www.lingyun.in',
	host: 'https://www.lyys8.com',
	url: '/list/fyclassfyfilter.html',
	filterable: 1,//是否启用分类筛选,
	filter_url: '-{{fl.area}}-{{fl.by or "time"}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}',
	filter: {
		"movie":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"科幻","v":"科幻"},{"n":"动作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"冒险","v":"冒险"},{"n":"儿童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"动画","v":"动画"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"丧尸","v":"丧尸"},{"n":"战争","v":"战争"},{"n":"传记","v":"传记"},{"n":"纪录","v":"纪录"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"灾难","v":"灾难"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"校园","v":"校园"},{"n":"文艺","v":"文艺"},{"n":"运动","v":"运动"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"励志","v":"励志"},{"n":"人性","v":"人性"},{"n":"美食","v":"美食"},{"n":"女性","v":"女性"},{"n":"治愈","v":"治愈"},{"n":"历史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脱口秀","v":"脱口秀"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"00年代","v":"20002009"},{"n":"90年代","v":"19901999"},{"n":"80年代","v":"19801989"},{"n":"更早","v":"18001979"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"英语","v":"英语"},{"n":"法语","v":"法语"},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"泰语","v":"泰语"},{"n":"德语","v":"德语"},{"n":"俄语","v":"俄语"},{"n":"闽南语","v":"闽南语"},{"n":"丹麦语","v":"丹麦语"},{"n":"波兰语","v":"波兰语"},{"n":"瑞典语","v":"瑞典语"},{"n":"印地语","v":"印地语"},{"n":"挪威语","v":"挪威语"},{"n":"意大利语","v":"意大利语"},{"n":"西班牙语","v":"西班牙语"},{"n":"无对白","v":"无对白"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"tv":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"传记","v":"传记"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"西部","v":"西部"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"灾难","v":"灾难"},{"n":"武侠","v":"武侠"},{"n":"文艺","v":"文艺"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"00年代","v":"20002009"},{"n":"90年代","v":"19901999"},{"n":"80年代","v":"19801989"},{"n":"更早","v":"18001979"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"英语","v":"英语"},{"n":"法语","v":"法语"},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"泰语","v":"泰语"},{"n":"德语","v":"德语"},{"n":"俄语","v":"俄语"},{"n":"闽南语","v":"闽南语"},{"n":"丹麦语","v":"丹麦语"},{"n":"波兰语","v":"波兰语"},{"n":"瑞典语","v":"瑞典语"},{"n":"印地语","v":"印地语"},{"n":"挪威语","v":"挪威语"},{"n":"意大利语","v":"意大利语"},{"n":"西班牙语","v":"西班牙语"},{"n":"无对白","v":"无对白"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"variety":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"选秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"访谈","v":"访谈"},{"n":"播报","v":"播报"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"纪实","v":"纪实"},{"n":"曲艺","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"游戏","v":"游戏"},{"n":"财经","v":"财经"},{"n":"职场","v":"职场"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"00年代","v":"20002009"},{"n":"90年代","v":"19901999"},{"n":"80年代","v":"19801989"},{"n":"更早","v":"18001979"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"日韩","v":"日韩"},{"n":"欧美","v":"欧美"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"cartoon":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"萌系","v":"萌系"},{"n":"科幻","v":"科幻"},{"n":"日常","v":"日常"},{"n":"战斗","v":"战斗"},{"n":"战争","v":"战争"},{"n":"热血","v":"热血"},{"n":"机战","v":"机战"},{"n":"游戏","v":"游戏"},{"n":"搞笑","v":"搞笑"},{"n":"恋爱","v":"恋爱"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"基腐","v":"基腐"},{"n":"冒险","v":"冒险"},{"n":"儿童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"灾难","v":"灾难"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"泡面","v":"泡面"},{"n":"校园","v":"校园"},{"n":"运动","v":"运动"},{"n":"体育","v":"体育"},{"n":"青春","v":"青春"},{"n":"美食","v":"美食"},{"n":"治愈","v":"治愈"},{"n":"致郁","v":"致郁"},{"n":"励志","v":"励志"},{"n":"历史","v":"历史"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"00年代","v":"20002009"},{"n":"90年代","v":"19901999"},{"n":"80年代","v":"19801989"},{"n":"更早","v":"18001979"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"英语","v":"英语"},{"n":"法语","v":"法语"},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"泰语","v":"泰语"},{"n":"德语","v":"德语"},{"n":"俄语","v":"俄语"},{"n":"闽南语","v":"闽南语"},{"n":"丹麦语","v":"丹麦语"},{"n":"波兰语","v":"波兰语"},{"n":"瑞典语","v":"瑞典语"},{"n":"印地语","v":"印地语"},{"n":"挪威语","v":"挪威语"},{"n":"意大利语","v":"意大利语"},{"n":"西班牙语","v":"西班牙语"},{"n":"无对白","v":"无对白"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
	},
	// searchUrl: '/search/page/fypage/wd/**.html',
	searchUrl: '/rss/index.xml?wd=**',
	headers: {
		'User-Agent': 'PC_UA',
	},
	class_parse: '.nav ul li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
	lazy: `js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else {
			input
		}
	`,
	图片来源: '@Referer=https://api.douban.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
	推荐: '.indexShowBox;ul&&li;*;*;*;*',
	一级: '.content-list&&li;a&&title;img&&data-src;.bottom2&&Text;a&&href',
	// 搜索: '.sr_lists&&dl;strong&&Text;*;.ss1&&Text;*',
	搜索: `js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		let d = [];
		var html = request(input);
		let list = pdfa(html, "rss&&item");
		for (var i = 0; i < list.length; i++) {
			var title = list[i].match(/\\<title\\>(.*?)\\<\\/title\\>/)[1];
			var desc = pdfh(list[i], 'description&&Text');
			var cont = pdfh(list[i], 'pubdate&&Text');
			var url = list[i].match(/\\<link\\>(.*?)\\n/)[1];
			d.push({
				title: title,
				desc: desc,
				content: cont,
				url: url
			})
		}
		setResult(d)
	`,
}