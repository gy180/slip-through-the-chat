<script lang="ts">
	import { postData } from '$lib/sheet';
	import { onMount } from 'svelte';

	// function updateQuestionNumber(questionNumber) {
	// 	formDataStore.question_number = questionNumber;
	// }

	// function updateQuestion(question) {
	// 	formDataStore.question = question;
	// }

	// function updateUserText(userText) {
	// 	formDataStore.user_text = userText;
	// }

	//Example
	// function send_dinsaur() {
	// 	console.log('send_dinsaur');

	// 	// get_qualtrics_variable();

	// 	var formData = new FormData();
	// 	var condition = 'Static';

	// 	// formData.append('qualtrics_code', qualtrics_code);
	// 	formData.append('condition', condition);
	// 	// formData.append('question_number', formDataStore.question_number);
	// 	formData.append('question', formDataStore.question);
	// 	formData.append('user_text', formDataStore.user_text);

	// 	//Temporary Testing
	// 	console.log('Condition: ' + condition);
	// 	// console.log(qualtrics_code);

	// 	// Display the key/value pairs
	// 	post_sheet(formData);

	// 	clearFormData();
	// }

	const data = {
		timestamp: new Date().toString(),
		session_id: 'new Session',
		qualtrics_code: 'asdf',
		exp_condition: 'qwerew'
	};

	onMount(() => {
		//Function
	});
</script>

<button on:click={() => postData(data)}>send</button>
