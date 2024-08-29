<script lang="ts">
	import Loader from '$lib/Components/loader.svelte';
	import { promptCtx, stages } from '$lib/prompts';
	import { micromark } from 'micromark';

	let currentStage: number = 0;
	let currentTopicLength: number = 0;

	let currentMsg = '';
	let msgs: TMsg[] = [];

	let waiting = false;

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

		let completion;
		if (stages[currentStage].type === 'summary') {
			completion = (await textgen(msgs, 'summary', stages[currentStage].ctx)) ?? '';
			currentStage += 1;
		} else if (stages[currentStage].type === 'information') {
			if (currentTopicLength === 0) {
				completion =
					(await textgen(
						msgs,
						'information',
						`SYSTEM: from the user prompt, segway into this information ${stages[currentStage].ctx} without changing the topic. User prompt:`
					)) ?? '';
				currentTopicLength += 1;
			} else if (currentTopicLength >= 1) {
				if (stages[currentStage + 1].type === 'wrap') {
					completion =
						(await textgen(msgs, 'information', `wrap up your conversation on this topic`)) ?? ''; // TODO
				} else {
					completion =
						(await textgen(
							msgs,
							'information',
							`SYSTEM: from the user prompt, segway into this next topic: ${stages[currentStage].ctx}. User prompt:`
						)) ?? '';
				}
				currentStage += 1;
				currentTopicLength = 0;
			} else {
				completion =
					(await textgen(
						msgs,
						'information',
						`continue convincing the user that ${stages[currentStage].ctx} without changing the topic`
					)) ?? '';
				currentTopicLength += 1;
			}
		} else {
			completion = (await textgen(msgs, 'wrap', '')) ?? '';
		}
		// const completion = (await textgen(msgs)) ?? '';

		const old = msgs.slice(0, -1);
		msgs = [...old, { type: 'ai', text: completion?.response ?? '' }];
		waiting = false;
		scroll();
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
			<div class="flex h-full w-full items-center border-b border-black">
				<textarea
					style="resize:none;field-sizing: content;"
					class="max-h-12 w-full px-1 pb-2 focus:outline-none"
					name=""
					id=""
					placeholder="What do you think?"
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
			<button class="aspect-video h-12 bg-black px-4 text-white" on:click={sendchat}>Submit</button>
		</section>
		<section>
			stage: {currentStage} | detail: {JSON.stringify(stages[currentStage])} | topic: {currentTopicLength}
		</section>
	</main>
</div>
