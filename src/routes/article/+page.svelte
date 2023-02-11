<script lang="ts">
	import '../../styles.css';
	import '../../css/all.css';
	import type { PageData } from './$types';
	export let data: PageData;
	import type { article } from '../../lib/server/types';
	import type { subtitle } from '../../lib/server/types';
</script>

<div class="container">
	<div class="title">
		<a class="leftSide" href="/"><div class="leftSide" /></a>
		<div class="rightSide"><span class="myText2">{data.Article.Title}</span></div>
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
					<div class="subtitle"><p class="sub">{subtitles2.Content}</p></div>
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
	</div>
</div>
