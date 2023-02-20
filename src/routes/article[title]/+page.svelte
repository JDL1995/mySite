<script lang="ts">
	import '../../styles.css';
	import '../../css/all.css';
	import type { PageData } from './$types';
	export let data: PageData;
	import type { article } from '../../lib/server/types';
	import type { subtitle } from '../../lib/server/types';
</script>
<svelte:head>
  <title>About Svelte</title>
</svelte:head>
<div class="container4">
	<div class="title3 w-full">
		<div class="leftSide2" />
		<div class="w-2/3 grid grid-cols-1"><span class="myText2 text-xl text-center">{data.Article.Title}</span>
            <span class="text-black"><ul class="articletop"><li class="topic ml-5">C++</li><li class="author ml-5 text-black">Jonathan Lathrop</li><li class="published ml-5 text-black">2-12-23</li></ul></span></div>
	</div>
</div>
<div class="mainBody">
	<div class="container2">
		<div class="articleTitle">Table of Contents:</div>
		<div class="linkToSections">
			{#each data.Article.Subtitles as subtitles, i}
				<a href="#{i}" class="contentsLinks"><div class="show">{subtitles.Content}</div></a><br />
			{/each}
		</div>
		<div class="articleBody">
			{#each data.Article.Subtitles as subtitles2, j}
				<div class="majorSubsection" id={j.toString()}>
					<div class="subtitle"><p class="sub font-bold">{subtitles2.Content}</p></div>
					{#each subtitles2.SubSubtitles as subSubtitles, k}
						<div class="SubSubtitle">
							<div class="subSubHeading">
								{subSubtitles.Content}
								<br />
							</div>
							<div class="holdBullets">
								<ul>
									{#each subSubtitles.Bullets as bullets}
										<li class="li1">{bullets.Content}</li>

										{#if bullets.SubBullets?.length != 0}
											{#each bullets.SubBullets as sb}
												<li class="li2">{sb.Content}</li>
											{/each}
										{/if}
									{/each}
								</ul>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		
		</div>			
		<div class="flex grid grid-cols-1 w-full ">

			<div class="w-full h-10 grid grid-cols-1 bg-black justify-center text-center">Comments</div>
		
		<div class="w-full h-60 bg-slate-200 "></div>
			</div>
		<div class="w-full h-20 bg-black"></div>
	</div>
</div>
