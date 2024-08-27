<script lang="ts">
	import Loader from '$lib/Components/loader.svelte';
	import { micromark } from 'micromark';

	let waiting = false;
	const textgen = async (msgs: TMsg[]): Promise<{ response: string }> => {
		const text = await fetch('/textgen', {
			method: 'POST',
			body: JSON.stringify({
				prompt: JSON.stringify(msgs)
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

	const sendchat = async () => {
		msgs = addMsg(msgs, currentMsg, 'user');
		const prompt = currentMsg;
		currentMsg = '';

		setTimeout(() => {
			document.getElementById(`msg-${msgs.length - 1}`)?.scrollIntoView();
		}, 100);

		waiting = true;
		msgs = addMsg(msgs, '', 'ai');
		const completion = (await textgen(msgs)) ?? '';
		const old = msgs.slice(0, -1);
		msgs = [...old, { type: 'ai', text: completion.response }];
		waiting = false;

		setTimeout(() => {
			document.getElementById(`msg-${msgs.length - 1}`)?.scrollIntoView();
		}, 100);
	};

	let currentMsg = '';

	let msgs: TMsg[] = [
		{
			type: 'ai',
			text: 'Tell me anything'
		}
	];
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
							<div class="">
								{@html msg.text}
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
	</main>
</div>
