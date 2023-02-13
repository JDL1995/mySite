<script lang="ts">
	//import Carousel from '../../node_modules/svelte-carousel';
	import '../styles.css';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let carousel; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};
	const goToArticle = () => {};
</script>

<div class="container4">
	<div class="title3 w-full">
		<div class="leftSide" />
		<div class="rightSide"><span class="myText">JL Programming </span></div>
	</div>
    </div>

<div class="flex-box">
<div class="mainBody">
		<div class="flex-box text-black justify-center relative ml-5 mx-1 rounded-3xl">
		<div class="articleTitle mt-2 mx-1">Welcome to JL Programming!</div>
	
			This website is dedicated to posting interesting, unique, or helpful information related to
			the practice of programming, software development, and software engineering. This site will
			continuously be updated.
	
				</div>
                </div>

            
                <div class="mainBody">
                 <div class="flex bg-slate-200 rounded-3xl">
					<div
						class="content-center shadow-2xl border-solid border-2 border-black bg-white m-3 p-2 relative float-left w-7/12"
					>
						<div class="px-10 text-black text-xl flex justify-center">Featured Articles</div>

						{#if browser}
							{(console.log('yay'), '')}
							<Carousel class="carousel" bind:this={carousel}>
								<div class="carousel1">
									<div class="text-center text-lg">Getting Started With C++</div>
									<a class="me" href="/article"><div class="readNow my-1">Read Now</div></a>
								</div>
								<div class="carousel2">
									<div class="text-center text-lg">Coming Soon</div>
									<a class="me" href="/article"><div class="readNow my-1">Read Now</div></a>
								</div>
								<div class="carousel3">
									<div class="text-center text-lg">Coming Soon</div>
									<a class="me" href="/article"><div class="readNow my-1">Read Now</div></a>
								</div>
							</Carousel>
						{/if}
					</div>
                   
					<div
						class="flex-box shadow-2xl w-4/12 m-4 justify-center relative border-solid border-2 border-black float-right bg-white"
					>
						<div class=" flex justify-center text-xl text-black px-10">Topics</div>

						<p class="text-black">
                            <ul>
                                <li class="li1"><a class="text-black underline" href="/">Web development tutorials.</a></li>
                                <li class="li1"><a class="text-black underline" href="/">Code solutions written in
                                    Javascript, Golang, c++</a></li>
                                <li class="li1"><a class="text-black underline" href="/">Cloud Computing</a></li>
                                <li class="li1"><a class="text-black underline" href="/">General programming</a></li>
                                </ul>
							
						
                      
					</div> 
                 
                   </div>
                    
				
		
</div>
 <div class="bg-black grid grid-cols-1 w-full h-40">
    <div class="text-center h-100 flex flex-col justify-center text-xl  text-white  "><h1 class="text-white">Coming soon: Comments, Articles, Tutorials</h1></div>
 </div>
 </div>
	