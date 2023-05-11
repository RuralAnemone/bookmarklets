let id = "";
if (location.hostname == "create.kahoot.it") id = prompt("paste or type in the Kahoot ID\n\nyou should be able to see the id on your teacher's screen, it will be in the following format:\nhttps://play.kahoot.it/v2/?quizId=THE_KAHOOT_ID").match(/[0-9a-f]*-[0-9a-f-]*/i);
else confirm("you aren't on create.kahoot.it\npress enter to open it it a new tab, and try again from there!") ? open("https://create.kahoot.it/rest/kahoots/KAHOOT_ID/card/?includeKahoot=true") : alert("well okay but it won't work then.\n🤡.");

fetch(`https://create.kahoot.it/rest/kahoots/${id}/card/?includeKahoot=true`)
	.then(res => {
		if (res.status === 403) {
			alert('403 error');
			return null;
		}
		return res.json();
	})
	.catch(err => {
		console.error(err);
		alert(err.toString());
	})
	.then(json => json.kahoot.questions
		.map((q, number) => {
			if ("choices" in q) {
				for (let i = 0, n = q.choices.length; i < n; i++) {
					const choice = q.choices[i];
					if (choice.correct) return `<tr title="${["red triangle", "blue diamond", "yellow circle", "green square"][i]}"><td>Q${number + 1}</td><td><details><summary>${(q.type === "quiz" || q.type === "survey" ? q.question : q.description).match(/[\w"']+(?: [\w"']+)?/)[0]}...</summary><p>${q.type === "quiz" || q.type === "survey" ? q.question : q.description}</p></td><td><img style="width:2ex;height:2ex;border-radius:6.9%;" src="https://ruralanemone.github.io/bookmarklets/img/kahoot/${i}.png"></td><td>${choice.answer}</td></tr>`;
				}
				return `<tr><td>Q${number + 1}</td><td><details><summary>${(q.type === "quiz" || q.type === "survey" ? q.question : q.description).match(/[\w"']+(?: [\w"']+)?/)[0]}...</summary><p>${q.type === "quiz" || q.type === "survey" ? q.question : q.description}</p></td><td>X</td><td>couldn't parse question. it's probably a puzzle. good luck lol</td></tr>`;
			} else {
				return `<tr><td>Q${number + 1}</td><td><details><summary>${(q.type === "quiz" || q.type === "survey" ? q.question : q.description).match(/[\w"']+(?: [\w"']+)?/)[0]}...</summary><p>${q.type === "quiz" || q.type === "survey" ? q.question : q.description}</p></td><td>X</td><td>no correct answer, have fun! :)</td></tr>`;
			}
		}).join("")
	)
	.then(answers => {
		let win = open();
		win.document.head.innerHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"><style>*{font-family:monospace,monospace !important;}</style>`;
		win.document.body.innerHTML = `<table><thead><th>Q#</th><th>question text</th><th>symbol</th><th>answer</th></thead><tbody>${answers}</tbody></table>`;
	});