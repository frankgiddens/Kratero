/*
Kratero Client JS
Frank Giddens
Version 22.01
*/

"use strict";

function loadPage(page){
	let main = document.getElementById("content");
	let temp1;
	let temp2;
	let temp3;
	let temp4;
	while(main.childNodes.length > 0){
		main.removeChild(main.firstChild);
	}
	switch(page){
		case "dashboard":
			temp1 = document.createElement("ul");
			temp1.setAttribute("class", "list-group list-group-flush");
			temp2 = document.createElement("li");
			temp2.setAttribute("class", "display-4 list-group-item");
			temp3 = document.createElement("span");
			temp3.setAttribute("class", "bi bi-bank2");
			temp2.appendChild(temp3);
			temp3 = document.createElement("span");
			temp3.textContent = " Treasury Backed";
			temp2.appendChild(temp3);
			temp3 = document.createElement("p");
			temp3.setAttribute("class", "my-3 lead");
			temp3.textContent = "Our goal as a treasury is to automate and optimize the current payment rails in the cross-chain world of DeFi. Our treasury allows you to mint, stake, and even collateralize your assets underneath the Kratero ecosystem. This will allow you to bridge, cross-chain communicate and experience DeFi in a way less stressful way.";
			temp2.appendChild(temp3);
			temp1.appendChild(temp2);
			temp2 = document.createElement("li");
			temp2.setAttribute("class", "display-4 list-group-item");
			temp3 = document.createElement("span");
			temp3.setAttribute("class", "bi bi-lightning-charge");
			temp2.appendChild(temp3);
			temp3 = document.createElement("span");
			temp3.textContent = " Flash Loans";
			temp2.appendChild(temp3);
			temp3 = document.createElement("p");
			temp3.setAttribute("class", "my-3 lead");
			temp3.textContent = "Want to collateralize a token? Just trigger an event with one of our smart contracts and you will be able to move along and try to outperform your leverage position at ease. Your localized dashboard will exemplify your fiscal health and native ecosystem stats.";
			temp2.appendChild(temp3);
			temp1.appendChild(temp2);
			temp2 = document.createElement("li");
			temp2.setAttribute("class", "display-4 list-group-item");
			temp3 = document.createElement("span");
			temp3.setAttribute("class", "bi bi-bezier");
			temp2.appendChild(temp3);
			temp3 = document.createElement("span");
			temp3.textContent = " Network Bridge";
			temp2.appendChild(temp3);
			temp3 = document.createElement("p");
			temp3.setAttribute("class", "my-3 lead");
			temp3.textContent = "Connect your wallet. Choose a destination, see rates for the coins in your wallet. Provide gas and our algorithm will select the most efficient route for you.";
			temp2.appendChild(temp3);
			temp1.appendChild(temp2);
			temp2 = document.createElement("li");
			temp2.setAttribute("class", "display-4 list-group-item");
			temp3 = document.createElement("span");
			temp3.setAttribute("class", "bi bi-bezier2");
			temp2.appendChild(temp3);
			temp3 = document.createElement("span");
			temp3.textContent = " Swap Protocol";
			temp2.appendChild(temp3);
			temp3 = document.createElement("p");
			temp3.setAttribute("class", "my-3 lead");
			temp3.textContent = "In our ecosystem, you are able to move freely about. No more triple swapping to get from one destination. No more approving gas fees multiple times. Simple swap for what you want. Our algorithm will supply the route and incur the separate network fees. You simply sit back and swap.";
			temp2.appendChild(temp3);
			temp1.appendChild(temp2);
			main.appendChild(temp1);
			break;
		case "bondTokens":
			break;
		case "exchangeTokens":
			break;
		case "flashLoans":
			break;
		case "documentation":
			temp1 = document.createElement("h1");
			temp1.setAttribute("class", "display-4");
			temp1.textContent = "Kratero Documentation";
			main.appendChild(temp1);
			temp1 = document.createElement("h1");
			temp1.setAttribute("class", "lead");
			temp1.textContent = "Kratero Documentation Info";
			main.appendChild(temp1);
			break;
		default:
			break;
	}
}

document.getElementById("dashboardLink").addEventListener("click", function(){
	loadPage("dashboard");
});
/*
document.getElementById("bondTokensLink").addEventListener("click", function(){
	loadPage("bondTokens");
});

document.getElementById("exchangeTokensLink").addEventListener("click", function(){
	loadPage("exchangeTokens");
});

document.getElementById("flashLoansLink").addEventListener("click", function(){
	loadPage("flashLoans");
});
*/
document.getElementById("documentationLink").addEventListener("click", function(){
	loadPage("documentation");
});

loadPage("dashboard");
