window.onload = _ => {
	doneListener = {
		processCommShellEvent: function (ev, msg) {
			console.log(ev);
			
			if (ev=="ProblemSummaryResponse") {
				var loc = new URL(window.location);
				console.log(loc);
				const path = loc.pathname;
				const oldParams = loc.searchParams;
				const newProb = parseInt(oldParams.get('prob_num')) + 1;

				const skillParam = encodeURI(CTAT.ToolTutor.tutor.getProblemSummary().getSkills().toXML());

				const oldSkills = oldParams.get('skills').toString();
				console.log(oldSkills);

				if (newProb <= 15) {
					const newPath = `./new_pol_final.html?prob_num=${newProb}&question_file=../CognitiveModel/frac_${newProb}.nools&skills=${skillParam}`;
					// console.log(newPath);
					window.location = newPath;
				} else {
					alert("You've finished all the problems! Try re-loading the demo and making different mistakes to see how the interface adapts to your new skill model");
				}
				// window.location= "./new_pol_final.html?question_file=../CognitiveModel/frac_2.nools&skills=%3Cskills%3E%3CSkill%20name%3D%22step1Reason_ComparetoOne%22%20category%3D%221.1%22%20label%3D%22Justify%20Direct%20Comparision%20by%20comparing%20to%20one%22%20description%3D%22Justify%20Direct%20Comparision%20by%20comparing%20to%20one%22%20pKnown%3D%220.25%22%20pLearn%3D%220.2%22%20pGuess%3D%220.2%22%20pSlip%3D%220.1%22%20history%3D%220%22%20opportunityCount%3D%220%22%2F%3E%3CSkill%20name%3D%22step1Reason_sameDenominator%22%20category%3D%221.1%22%20label%3D%22Justify%20Direct%20Comparision%20for%20same%20Denominator%22%20description%3D%22Justify%20Direct%20Comparision%20for%20same%20Denominator%22%20pKnown%3D%220.25%22%20pLearn%3D%220.2%22%20pGuess%3D%220.2%22%20pSlip%3D%220.1%22%20history%3D%220%22%20opportunityCount%3D%220%22%2F%3E%3CSkill%20name%3D%22step1Reason_sameNumerator%22%20category%3D%221.1%22%20label%3D%22Justify%20Direct%20Comparision%20for%20same%20Numerator%22%20description%3D%22Justify%20Direct%20Comparision%20for%20same%20Numerator%22%20pKnown%3D%220.25%22%20pLearn%3D%220.2%22%20pGuess%3D%220.2%22%20pSlip%3D%220.1%22%20history%3D%220%22%20opportunityCount%3D%220%22%2F%3E%3CSkill%20name%3D%22step1Reason_unlikeFractions%22%20category%3D%221.1%22%20label%3D%22Justify%20Direct%20Comparision%20for%20Unlike%20Fractions%22%20description%3D%22Justify%20Direct%20Comparision%20for%20Unlike%20Fractions%22%20pKnown%3D%220.25%22%20pLearn%3D%220.2%22%20pGuess%3D%220.2%22%20pSlip%3D%220.1%22%20history%3D%220%22%20opportunityCount%3D%220%22%2F%3E%3CSkill%20name%3D%22step2Reason_LCM%22%20category%3D%221.1%22%20label%3D%22Recognize%20LCM%20of%20Denominators%22%20description%3D%22Recognize%20LCM%20of%20Denominators%22%20pKnown%3D%220.25%22%20pLearn%3D%220.2%22%20pGuess%3D%220.2%22%20pSlip%3D%220.1%22%20history%3D%220%22%20opportunityCount%3D%220%22%2F%3E%3CSkill%20name%3D%22step2Reason_Product%22%20category%3D%221.1%22%20label%3D%22Recognize%20Product%20of%20Denominators%22%20description%3D%22Recognize%20Product%20of%20Denominators%22%20pKnown%3D%220.25%22%20pLearn%3D%220.2%22%20pGuess%3D%220.2%22%20pSlip%3D%220.1%22%20history%3D%220%22%20opportunityCount%3D%220%22%2F%3E%3C%2Fskills%3E";
			}
		}
	}

	CTATCommShell.commShell.addGlobalEventListener(doneListener);
}
