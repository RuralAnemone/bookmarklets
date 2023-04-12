const clarification = `\
input can be in one of these formats:
(parentheses indicate optional input)
(don't add anything else that isn't in the parentheses though)

(https://)<name>(.ns.cloudflare.com/)
`;
// oh yeah and here's the regex:
const regex = /(?:https?:\/\/)?([a-z])(?:\.ns\.cloudflare\.com)?/;

var ns1 = prompt("first nameserver?\n" + clarification),
	ns2 = prompt("second nameserver?\n" + clarification);
console.log(ns1, ns2);
while (!ns1.match(regex)[0]) {
	let ns1 = prompt("first nameserver?\n" + clarification);
}
while (!ns2.match(regex)[0]) {
	let ns2 = prompt("second nameserver?\n" + clarification);
}
// the newlines in both clarification and the string itself is basically just a happy medium of looking nice and being functional :), see line 2 etc

/* I may implement saving nameservers in localstorage, but not yet :) */

document.querySelectorAll("#domainconfig > tbody > tr").forEach(tr => {
	// tr.querySelector('.usage').click()
	tr.querySelectorAll(".dnsname_input")[0].value = `${ns1}.ns.cloudflare.com`;
	tr.querySelectorAll(".dnsname_input")[1].value = `${ns2}.ns.cloudflare.com`;
	tr.querySelector(".select_period").value = "12M";
});

confirm(
	"done! press enter to continue or escape to check if this actually worked"
)
	? document.querySelector("#configure_submit_button").click()
	: 1 / -0; // === -Infinity
