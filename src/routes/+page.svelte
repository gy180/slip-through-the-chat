<script lang="ts">
	const run = async (prompt: string): Promise<{ response: string }> => {
		const text = await fetch('/textgen', {
			method: 'POST',
			body: JSON.stringify({
				prompt: prompt
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

	type TMsg = {
		type: 'ai' | 'user';
		text: string;
	};

	let currentMsg = '';

	let msgs: TMsg[] = [
		{
			type: 'ai',
			text: 'Tell me anything'
		}
	];
</script>

<div class="flex h-screen w-screen items-center justify-center bg-neutral-500">
	<main class="flex aspect-video w-[60rem] flex-col justify-between gap-6 bg-white p-4">
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
					<div class="w-full text-pretty border-t border-black pr-3 pt-3">{msg.text}</div>
				</div>
			{/each}
		</section>
		<section id="textbox" class="flex items-end gap-3">
			<textarea
				style="resize:none;"
				class="h-12 w-full border-b border-black px-1 pb-2 focus:outline-none"
				name=""
				id=""
				bind:value={currentMsg}
			></textarea>
			<button
				class="aspect-video h-12 bg-black px-4 text-white"
				on:click={async () => {
					msgs = addMsg(msgs, currentMsg, 'user');
					const prompt = currentMsg;
					currentMsg = '';

					setTimeout(() => {
						document.getElementById(`msg-${msgs.length - 1}`)?.scrollIntoView();
					}, 100);

					const completion = (await run(prompt)) ?? '';
					msgs = addMsg(msgs, completion.response, 'ai');

					setTimeout(() => {
						document.getElementById(`msg-${msgs.length - 1}`)?.scrollIntoView();
					}, 100);
				}}>Submit</button
			>
		</section>
	</main>
</div>
