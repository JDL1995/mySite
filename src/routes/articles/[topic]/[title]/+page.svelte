<script lang="ts">
	import '../../../../styles.css';
	import '../../../../css/all.css';
	import type { PageData } from '../../../$types';
	export let data: PageData;
	export let pc:articleContent[]=data.promise.ac;
	//export let promise:Promise<articleContentPlus>;

		
	import type { article, articleContent, articleContentPlus, modulator, modulator2 } from '../../../../lib/server/types';
	import type { subtitle } from '../../../../lib/server/types';
	import { object_without_properties, onMount } from 'svelte/internal';
	//import renderImgUrl from '../+page.svelte';
	const imgUrl0= new URL('@/lib/assets/img', import.meta.url).href;
	let imgUrl1:URL;
  export function renderImgUrl(data2:string){
	
        let imgUrl = imgUrl0+data2
        return imgUrl
        }
		export function renderImgUrl2(data2:string){
			const imgUrl3= new URL('@/lib/assets/img', import.meta.url).href;

	let imgUrl = imgUrl3+data2
	return imgUrl
	}
		var theStr="";
		var imgs:string[]=[];
		var htmls:string[]=[];
	//	export var mySubify:modulator2[]=[];
	


//let promise:Promise<modulator2[]>=subify(theStr,htmls,imgs)
function doIt(str:string,html:string[],img:string[]){
	
//promise=subify(str,html,img);
const mys="^^^^lapodoo";
let myx=mys.search("^^^^");
console.log(mys);
}


/*

{#if sb.Html.length!=0||sb.Img.length!=0}{console.log("doing it, imglen=",sb.Img.length," htmllen=",sb.Html.length),doIt(sb.Content,sb.Html,sb.Img)}
										{#await promise}
										{:then mySubify9}
										{console.log(mySubify9)}
										{#each mySubify9 as objs}
										{#if objs.isHtml}
										{@html objs.content}
										{:else if objs.isImg}
										<div style="background-image:url({renderImgUrl(objs.content)}); background-size:100% 100%; background-repeat:no-repeat " class="articlePic" />
										{:else }
										{objs.content}
										{/if} 
										{/each}	
										{/await}		
										{:else} 
*/
function check(data:PageData){
	
}

export function grabCorrect(ct2:articleContent[],st:number,sst:number,bp:number,sbp:number):modulator2[]{ //sbp
	let r=false

		let jewishreturn:modulator2[]=[];
	//var jewishreturn2:articleContent[]=[]
	var ct=pc
		const jewishreturn2=ct.filter((mct)=>((mct.bp==bp)&&(mct.sbp==sbp)&&(mct.sst==sst)&&(mct.st==st)));
	
	for (const ac of ct){
		if(ac.st==st){
			if(ac.sst==sst){
				if(ac.bp==bp){
					if(ac.sbp==sbp){
					
						jewishreturn=ac.stuff
						r=true;
						break;
					}
				}
			}
		}

	}

	if(r==false){}

if(jewishreturn.length==0){
//return ct[0].stuff
}
if(jewishreturn2.length!=0){
return jewishreturn2[0].stuff
}

else{
	console.log("error: ", st," sst",sst," bp,",bp," sbp",sbp," and pc: ",pc)
	return jewishreturn//jewishreturn2[0].stuff;
}
}
function grabCorrect2(ct:articleContent[],st:number,sst:number,bp:number):modulator2[]{ //sst with bp
	let r=false
	let jewishreturn:modulator2[]=[];
	ct.forEach((ac,a)=>{
		if(ac.st==st){
			console.log("niggeria")
			if(ac.sst==sst){
				console.log("niggeria2")
				if(ac.bp==bp){
					console.log("niggeria3")
					
				
				}
				if(ac.sbp==60){
					jewishreturn=ac.stuff
				}
			}
		}

	})

	if(r==false){console.log("error: ", st," sst",sst," bp,",bp," sbp",sbp," and pc: ",ct)}

if(jewishreturn.length==0){
return ct[0].stuff
}
else return jewishreturn;

}
function grabCorrect3(ct:articleContent[],st:number,sst:number,bp:number):modulator2[]{//st with bp
	let r=false
	let jewishreturn:modulator2[]=[];
	sst=60;
//sbp=60;
	ct.forEach((ac,a)=>{
		if(ac.st==st){
			console.log("niggeria")
			if(ac.sst==sst){
				console.log("niggeria2")
				if(ac.bp==bp){
					console.log("niggeria3")
				}
				if(ac.sbp==60){
					jewishreturn=ac.stuff
				}
			}
		}

	})

	//if(r==false){console.log("error: ", st," sst",sst," bp,",bp," sbp",sbp," and pc: ",ct)}

if(jewishreturn.length==0){
return ct[0].stuff
}
else return jewishreturn;

}
export async function setPC(dta:articleContent[]){
	pc=dta;
	console.log("monkeynigro")
	return dta;
}
export function setUrl(myurl:URL){
imgUrl1=myurl
}
export function checker(dta:articleContent[]){
	var i=0;
	for(const a of dta){
		console.log("I: ",i,".  ac: ",a);
		i++;
	}
	
	
}
onMount(async () => {
		// const apc = await data.promise
	//	const pc=apc.ac;
		 console.log("myshii",pc)
	});
		
</script>
<svelte:head>
  <title>About Svelte</title>
</svelte:head>


<div class="container4">
	<div class="title3 w-full">
		<div style="background-image:url({renderImgUrl(data.Article?.Img)}); background-size:100% 100%; background-repeat:no-repeat " class="leftSide2" />
		<div class="w-2/3 grid grid-cols-1"><span class="myText2 text-xl text-center">{data.Article.Title}</span>
            <span class="text-black"><ul class="articletop"><li class="topic ml-5">{data.Article.Topic}</li><li class="author ml-5 text-black">{data.Article.Author}</li><li class="published ml-5 text-black">{data.Article.Date}</li></ul></span></div>
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
					<div class="holdBullets">
							{#each subtitles2.Bp as bp1, r}	
							<ul>
								<li class="li1">
									{#if bp1.Html.length!=0||bp1.Img.length!=0}
									{console.log("doing it, imglen=",bp1.Img.length," htmllen=",bp1.Html.length)}
									{console.log("st:",j," sst:",60," bp:",r," sbp:",60)}
									{#await grabCorrect(pc,j,60,r,60)}
									{:then obj2}
									{#each obj2 as objs }
									{console.log("nig ct",objs)}
									{console.log("st:",j," sst:",60," bp:",r," sbp:",60)}
									{#if (objs.isHtml)==true}
									{@html objs.content}
									{:else if objs.isImg ==true}
									<div style="background-image:url({renderImgUrl(objs.content)}); background-size:100% 100%; background-repeat:no-repeat " class="articlePic text-white" />
									{:else }
									{#if (objs.content!="")==true}
									{objs.content}
									{/if}
									{/if} 
									{/each}
									{/await}
									{:else} 
									{bp1.Content}

									{/if}
			
									</li>
									{#if bp1.SubBullets?.length != 0}
											{#each bp1.SubBullets as sb,m}
											
											
									<li class="li2">
										
										{#if (sb.Html.length!=0||sb.Img.length!=0)==true}
										{console.log("doing it, imglen=",sb.Img.length," htmllen=",sb.Html.length)}
										{#each grabCorrect(pc,j,60,r,m) as objs }
										{console.log("nig ct",objs)}
										{console.log("st:",j," sst:",60," bp:",r," sbp:",m)}
										{#if (objs.isHtml)==true}
										{@html objs.content}
										{:else if (objs.isImg)==true}
										<div style="background-image:url({renderImgUrl(objs.content)}); background-size:100% 100%; background-repeat:no-repeat " class="articlePic text-white" />
										{:else }
										{objs.content}
										{/if} 
										{/each}
										{:else} 
										{sb.Content}	
										{/if}
										
									</li>
											
												
											{/each}
										{/if}
					</ul>
					{/each}
								
								</div>
					{#each subtitles2.SubSubtitles as subSubtitles, k}
						<div class="SubSubtitle">
							<div class="subSubHeading">
								{subSubtitles.Content}
								<br />
							</div>
							<div class="holdBullets">
								<ul>
									{#each subSubtitles.Bullets as bullets,l}
										<li class="li1">
											
										{#if (bullets.Html.length!=0)==true||(bullets.Img.length!=0)==true}
										{#each grabCorrect(pc,j,k,l,60) as objs }
										{#if objs.isHtml==true}
										{@html objs.content}
										{:else if objs.isImg &&objs!=undefined}
										<div style="background-image:url({renderImgUrl2(objs.content)}); background-size:100% 100%; background-repeat:no-repeat " class="articlePic text-white" />
										{:else if objs!=undefined}
										{objs.content}
										{/if} 
										{/each}
										{:else if bullets.Content!=undefined} 
										<span>{bullets.Content}	</span>
									
										{/if}
											</li>

										{#if bullets.SubBullets?.length != 0}
											{#each bullets.SubBullets as sb,m}
											
									<li class="li2">
										
										{#if sb.Html.length!=0||sb.Img.length!=0}{console.log("doing it, imglen=",sb.Img.length," htmllen=",sb.Html.length)}
										{#each grabCorrect(pc,j,k,l,m) as objs }
										{console.log("nig ct",objs)}
										{console.log("st:",j," sst:",k," bp:",l," sbp:",m)}
										{#if objs.isHtml}
										{@html objs.content}
										{:else if objs.isImg}
										<div style="background-image:url({renderImgUrl2(objs.content)}); background-size:100% 100%; background-repeat:no-repeat " class="articlePic text-white" />
										{:else }
										{objs.content}
										{/if} 
										{/each}
									
								
										{:else} 
										
										{sb.Content}	
										{/if}
										
									</li>
											
												
											{/each}
										{/if}
									{/each}
								</ul>
							</div>
						</div>
					{/each}
				</div>
			{/each}
			{#if data.Article.Gif}
				{@html "<img src=\""+renderImgUrl(data.Article.Gif)+"\" />"}
			{/if}
		
		</div>			
		<div class="flex grid grid-cols-1 w-full ">

			<div class="w-full h-10 grid grid-cols-1 bg-black justify-center text-center">Comments</div>
		
		<div class="w-full h-60 bg-slate-200 "></div>
			</div>
		<div class="w-full h-20 bg-black"></div>
	</div>
</div>
