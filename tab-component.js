let tabData = [
    {
		tabName: "First Tab",
		tabTitle: "First Tab Title" ,
		tabContent: "First Tab VContent",
		id: 0,
	},
	{
		tabName: "Second Tab",
		tabTitle: "Second Tab Title" ,
		tabContent: "Second Tab VContent",
		id: 1
	},
	{
		tabName: "Third Tab",
		tabTitle: "Third Tab Title" ,
		tabContent: "Third Tab VContent",
		id: 2
	},
	{
		tabName: "Fifth Tab",
		tabTitle: "Fifth Tab Title" ,
		tabContent: "Fifth Tab VContent",
		id: 3
	},
	{
		tabName: "Sixth Tab",
		tabTitle: "Sixth Tab Title" ,
		tabContent: "Sixth Tab VContent",
		id: 4
	},
]

let tabComponent;
let tabList;
let tabContent;

tabComponent = document.createElement("div");
tabComponent.className = "tab-component";

tabList = document.createElement("ul");
tabList.className = "tab-button-list";

tabContent = document.createElement("div");
tabContent.className = "tab-content-list";

let tabButtonTemplate = function(i) {
	let button = document.createElement("a");
	button.href = "javascript:SwitchTab('tab_" + i + "', 'content_" + i + "');";
	button.className = "tab-button";
	button.id = "tab_" + i;
	let buttonText = document.createTextNode(tabData[i].tabName);
	button.appendChild(buttonText);

	let buttonList = document.createElement("li");
	buttonList.className = "tab-button";

	buttonList.appendChild(button);
    return buttonList;
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
	tabText.appendChild(document.createTextNode(tabData[i].tabContent));
	
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


//Tab Switching
function SwitchTab(tab, content) {
	// first of all we get all tab content blocks (I think the best way to get them by class names)
	var x = document.getElementsByClassName("tab-content");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // hide all tab content
	}
	document.getElementById(content).style.display = 'block'; // display the content of the tab we need
	
	// now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
	var x = document.getElementsByClassName("tab-button");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].className = 'tab-button'; 
	}
	document.getElementById(tab).className = 'tab-button active';
}