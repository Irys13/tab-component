let tabData = [
    {
		tabButton: "Grumpy Cat",
		tabTitle: "Tardar Sauce" ,
		tabText: "Grumpy Cat, was an American Internet celebrity cat. She was known for her permanently 'grumpy' facial appearance, which was caused by an underbite and feline dwarfism. She came to prominence when a photograph of her was posted on September 22, 2012, on social news website Reddit by Bryan Bundesen, the brother of her owner Tabatha Bundesen. Lolcats and parodies created from the photograph by Reddit users became popular. She was the subject of a popular Internet meme in which humorously negative, cynical images are made from photographs of her."
	},
	{
		tabButton: "Maru",
		tabTitle: "Maru" ,
		tabText: "Maru is a male Scottish Straight cat in Japan who has become popular on YouTube. As of September 2016, videos featuring Maru have been viewed over 325 million times, a Guinness World Record for the most YouTube video views of an individual animal. Maru has been described as the 'most famous cat on the internet'"
	},
	{
		tabButton: "Sockington",
		tabTitle: "Sockington" ,
		tabText: "Sockington (also known as 'Sockamillion' or 'Socks') is a domestic cat who lives in Waltham, Massachusetts, United States. He has gained large-scale fame via the social networking site Twitter; his co-owner, Jason Scott, an archivist and Internet historian, has been regularly posting from Sockington's Twitter account since late 2007. As of July 2018, Sockington's account has over 1.2 million followers, many of which are pet accounts themselves. Sockington is a grey and white domestic shorthaired cat; he was found as a stray outside a Boston subway station in 2004. In July 2014, Parade magazine called Sockington a 'Pet Power Player' and named him #1 in their list of pet social media sensations."
	},
	{
		tabButton: "Keyboard Cat",
		tabTitle: "Fatso " ,
		tabText: "Keyboard Cat is a video-based internet meme. Its original form was a video originally made in 1984 by Charlie Schmidt of his cat Fatso seemingly playing a piano (though manipulated by Schmidt off-camera) to a cheery tune. While Schmidt had uploaded the video himself to YouTube in 2007, Brad O'Farrell, with Schmidt's permission, appended the video to the end of a blooper video uploaded in 2009 as if to have the cat 'play' the person offstage after the gaffe as they had done in Vaudeville. The idea of this quickly expanded on the Internet by numerous other users, typically under the name 'Play Him Off, Keyboard Cat', and became a meme. Though Fatso had died in 1987, Schmidt had since adopted two other cats to become the new 'Keyboard Cat' and providing video footage to be used for the meme: Bento until his death in 2018, and the current Keyboard Cat, Skinny."
	}
]

function UnicornTabs(firstActiveTab) {
	
	tabComponent = document.createElement("div");
	tabComponent.className = "tab-component";
	
	tabList = document.createElement("ul");
	tabList.className = "tab-button-list";
	
	tabContent = document.createElement("div");
	tabContent.className = "tab-content-list";
	
	function tabButtonTemplate(i) {
		let button = document.createElement("a");
		button.href = "javascript:unicornTabs.switchTab('tab_" + i + "', 'content_" + i + "');";
		button.className = "tab-button tab-button-item";
		button.id = "tab_" + i;
		button.appendChild(document.createTextNode(tabData[i].tabButton));
		
		let buttonListItem = document.createElement("li");
		buttonListItem.className = "tab-button-item";
		
		buttonListItem.appendChild(button);
		return buttonListItem;
	}
	
	function tabContentTemplate(i) {
		let tabContent =  document.createElement("div");
		tabContent.className = "tab-content";
		tabContent.id = "content_" + i;
		
		let tabTitle = document.createElement("h2");
		tabTitle.className = "tab-title";
		
		let tabText = document.createElement("p");
		tabText.className = "tab-text";
		
		tabTitle.appendChild(document.createTextNode(tabData[i].tabTitle));
		tabText.appendChild(document.createTextNode(tabData[i].tabText));
		
		tabContent.appendChild(tabTitle);
		tabContent.appendChild(tabText);
		
		return tabContent;
	}
	
	function createTabs() {	
		for (let i = 0; i < tabData.length; i++) {
			tabList.appendChild(tabButtonTemplate(i));
			tabContent.appendChild(tabContentTemplate(i));
		}
		
		tabComponent.appendChild(tabList);
		tabComponent.appendChild(tabContent);
		
		return tabComponent;
	}
	
	document.getElementById("tabs").appendChild(createTabs());
	
	function firstActiveTab() {
		document.querySelector(".tab-button:first-child").className = "tab-button active";
		document.querySelector(".tab-content:first-child").className = "tab-content active";
	}
	
	firstActiveTab();

	//Tab Switching
	this.switchTab = function switchTab(tab, content) {
		let x = document.getElementsByClassName("active");
		
		for (let i = 0; i < x.length; i) {
			x[i].classList.remove("active");
		}
		
		document.getElementById(content).className = 'tab-content active';
		document.getElementById(tab).className = 'tab-button active';
	}
	
	// Add new tab
	function createNewTab() {
		let tabPosition = tabData.length - 1;
		tabList.appendChild(tabButtonTemplate(tabPosition));
		tabContent.appendChild(tabContentTemplate(tabPosition));
		
		tabComponent.appendChild(tabList);
		tabComponent.appendChild(tabContent);
		
		return tabComponent;
	}
	
	this.newTab = function newTab() {
		document.getElementById("tabs").appendChild(createNewTab());
	}
		
	console.log(tabData);
	firstActiveTab();
}


