<script lang="ts">
	import '../../../styles.css';
	import '../../../css/all.css';
	import type { PageData } from '../../$types';
	export let data: PageData;
	import type { article } from '../../../lib/server/types';
	import type { subtitle } from '../../../lib/server/types';
    import {goto} from '$app/navigation'
    let mytext= "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e run  chmod 400 keyname.pem.  this is necessary to use it \u003c/snippet\u003e\u003cbr\u003e"
    export function navigateToArticles(title:string){
        let navstring=data.topic+"/"+title;
        goto(navstring)
    }
    const imgUrl1= new URL('@/lib/assets/img', import.meta.url).href;
    let myurl="../../src/goodbg.jpg"
    export function renderTitle(){
        if(data.topic=="C++"){
            return "C++ Articles"
        }
    } 
  export function renderImgUrl(data:string){
        let imgUrl = imgUrl1+data
        console.log("suck it",imgUrl)

        return imgUrl
        }
</script>
<svelte:head>
  <title>About Svelte</title>
</svelte:head>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container4">
   
    <div class="grid grid-cols-1 w-full justify-center"> 
        <div class="grid grid-cols-1 w-full h-50 content-center text-center mt-10 ">
                <div class="text-black text-2xl">{data.titleList.Headline}</div>
        </div>
  {#each data.titleList.Titles as title, i}
    <div class="grid grid-row specheight justify-center w-full mt-7">
  <div on:click={()=>navigateToArticles(title.Title)} class="title7 "> 
    {#if title.Color}
    <div class="w-2/5 h-full">     
        <div class="bg-black grid grid-cols-1 w-full h-full mr-0 text-white" style="background-image:url({renderImgUrl(title.Img)}); background-size:100% 100%">
              
                <div class="w-full grid grid-cols-1">  
       
                <div class="h=1/2"></div>
                <span class="myText7 text-xl text-center text-white">
                    {title.Title}
                </span>
   
                  
                   </div>
                
         </div>
                    <ul class=" mb-0 articletop2 bg-{title.Color} text-white"><li class="topic2 ml-0">{title.Topic}</li><li class="author2 ml-5 text-white">{title.Author}</li><li class="published2 ml-5 text-white">{title.Date}</li>
                    </ul>
             
              
               
      
                </div>
             {:else}   
             <div class="bg-black grid grid-cols-1 w-2/5 h-100 mr-0 text-white" style="background-image:url({renderImgUrl(title.Img)}); background-size:100% 100%">

             <div class="w-full grid grid-cols-1">  
       
                <div class="h=1/2"></div>
                <span class="myText7 text-xl text-center text-white">
                    {title.Title}
                </span>
                <span class="text-white">
             
                    <ul class="articletop2 text-white"><li class="topic2 ml-0">{title.Topic}</li><li class="author2 ml-5 text-white">{title.Author}</li><li class="published2 ml-5 text-white">{title.Date}</li>
                    </ul>
               
                </span>   
                    
             </div>
                   
        </div> {/if}
        <div class="bg-black grid grid-cols-1 w-3/5 h-100 mr-0 text-white">
            <div class="flex flex-col justify-center">
                    <span class="rightside7 text-center text-white mt-1">{title.Summary}</span>

                    <span class="rightside7 flex flex-row w-full justify-center text-center text-white mt-1"><div>Contents:</div></span>
                
            </div>
            <div class="contents7">
                <div class="grid grid-cols-1 w-full">
                    <ul class="precontents">
                        {#each title.Contents as content}
                        <li>{content.Item}</li>
                        {/each}
                    </ul>
                </div>
              </div>        
	
        </div>


    </div>    
</div>
    {/each}
    

</div></div>