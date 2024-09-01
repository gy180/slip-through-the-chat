<script lang="ts">
	import Loader from '$lib/Components/loader.svelte';
	import { stages, summary } from '$lib/prompts';
	import { postData } from '$lib/sheet';
	import { micromark } from 'micromark';

	let currentStage: number = 0;
	let currentTopicLength: number = 0;

	let currentMsg = '';
	let msgs: TMsg[] = [
		{
			type: 'ai',
			text: `Hi there! I'm a chatbot to discuss about PT's appointment of the new PM of Thailand. Here's the summary of the news: ${summary}`
		},
		{
			type: 'ai',
			text: `What do you think about the news?`
		}
	];

	let waiting = false;
	let post = false;

	const textgen = async (
		msgs: TMsg[],
		type: string,
		ctx: string
	): Promise<{ response: string }> => {
		const text = await fetch('/textgen', {
			method: 'POST',
			body: JSON.stringify({
				prompt: JSON.stringify(msgs),
				type,
				ctx
			})
		}).then((x) => x.text());
		const parsed = JSON.parse(text);
		return parsed;
	};

	const addMsg = (msgs: TMsg[], msg: string, type: 'ai' | 'user') => {
		return [
			...msgs,
			{
				type,
				text: msg
			}
		];
	};

	const scroll = () =>
		setTimeout(() => {
			document.getElementById(`msg-${msgs.length - 1}`)?.scrollIntoView();
		}, 100);

	const sendchat = async () => {
		msgs = addMsg(msgs, currentMsg, 'user');
		currentMsg = '';

		scroll();
		waiting = true;
		msgs = addMsg(msgs, '', 'ai');

		let promptObj = {
			type: '',
			ctx: ''
		};

		if (stages[currentStage].type === 'information') {
			promptObj.type = 'information';
			if (currentTopicLength === 0) {
				console.log('run');
				promptObj.ctx = `Segway into discussing this information "${stages[currentStage].ctx}".
				The following bubble is the user chat`;
				currentTopicLength += 1;
			} else {
				promptObj.ctx = `continue talking about "${stages[currentStage].ctx}"" without changing the topic. Don't repeat the topic if previously discussed and emphasize with the previous chats if possible`;
				currentStage += 1;
				currentTopicLength = 0;
			}
		} else {
			promptObj = {
				type: 'wrap',
				ctx: 'wrap up the conversation'
			};
			post = true;
		}

		const completion = (await textgen(msgs, promptObj.type, promptObj.ctx)) ?? '';
		const old = msgs.slice(0, -1);
		msgs = [...old, { type: 'ai', text: completion?.response ?? '' }];
		waiting = false;
		scroll();

		if (post) {
			postData({
				exp_condition: 'misleading',
				chat_log: JSON.stringify(msgs),
				timestamp: new Date().toISOString().toString(),
				qualtrics_code: 'test'
			});
		}
	};
</script>

<div class="flex h-[100svh] w-screen items-center justify-center">
	<main
		class="flex h-full w-[60rem] max-w-full flex-col justify-between gap-6 p-4 py-6 lg:aspect-video lg:h-auto lg:max-w-[80vw] lg:py-4"
	>
		<section id="messages" class="flex h-full flex-col gap-6 overflow-scroll">
			{#each msgs as msg, i}
				<div class="flex w-full gap-6" id={`msg-${i}`}>
					<div
						class={`size-[80px] min-w-[80px] overflow-hidden rounded-md ${msg.type === 'ai' ? 'border border-black' : ''}`}
					>
						<img
							src={msg.type === 'ai' ? 'ai.png' : 'user.png'}
							class="h-full w-full object-cover"
							alt=""
						/>
					</div>
					{#if !waiting || i < msgs.length - 1}
						<div
							class={`w-full text-pretty ${msg.type === 'ai' ? 'border-t' : 'border-t-2 font-semibold'} border-black pr-3 pt-3`}
						>
							<div class="prose">
								{@html micromark(msg.text)}
							</div>
						</div>
					{:else}
						<div class="h-full w-full border-t border-black pr-3"><Loader /></div>
					{/if}
				</div>
			{/each}
			<!-- {#if waiting}
				<div class="flex w-full gap-6">
					<div class={'size-[80px] min-w-[80px] overflow-hidden rounded-md'}>
						<img
							src="ai.png"
							class="h-full w-full rounded-lg border border-black object-cover"
							alt=""
						/>
					</div>
					<div class="h-full w-full border-t border-black pr-3"><Loader /></div>
				</div>
			{/if} -->
		</section>
		<section id="textbox" class="flex items-center gap-3">
			<div
				class="flex h-full w-full items-center border-b border-black disabled:border-neutral-500"
			>
				<textarea
					disabled={post}
					style="resize:none;field-sizing: content;"
					class="max-h-12 w-full bg-transparent px-1 pb-2 focus:outline-none disabled:bg-transparent"
					name=""
					id=""
					placeholder={post
						? 'Enter the code "1234" to Qualtrics to continue'
						: 'What do you think?'}
					bind:value={currentMsg}
					on:keypress={(e) => {
						// if enter and not hold shift
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault();
							sendchat();
						}
					}}
				></textarea>
			</div>
			<button
				disabled={post}
				class="aspect-video h-12 bg-black px-4 text-white disabled:bg-neutral-500"
				on:click={sendchat}>Submit</button
			>
		</section>
		<!-- <section>
			stage: {currentStage} | detail: {JSON.stringify(stages[currentStage])} | topic: {currentTopicLength}
		</section> -->
	</main>
</div>
