<script lang="ts">
   
  //import Carousel from '../../node_modules/svelte-carousel';
     import '../styles.css'
     
     import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance
  
  const handleNextClick = () => {
    carousel.goToNext()}
   const goToArticle=()=>{

   }
    
</script>


    <div class="container">
    <div class="title">
        <div class="leftSide"></div>
        <div class="rightSide"><span class="myText">JL Programming </span></div>
        </div>
    </div> <div class="mainBody"></div>
    <div class="mainBody">
        <div class="container2">
            <div class="articleTitle">Welcome to JL Programming!</div>
            <div class="linkToSections">
                This website is dedicated to posting interesting, unique, or helpful information related to the 
                practice of programming, software development, and software engineering.  This site will continuously be updated.
                <br>&nbsp; &nbsp; &nbsp; &nbsp;About me:  I am a programmer with multiple years of experience in web development and knowledge of multiple programming languages.  I am interested in
                building great web apps and using the best tools for optimizing: the end product, the efficiency of develpment, and expansion opportunity/scalability. creating new ways to do things and continuously improving knowledge and skill.
                I have the most experience with the javascript framework Angular, but am intruiged by all of the different javascript frameworks.  I use AWS frequently for hosting my web applications.<br>&nbsp; &nbsp;&nbsp; &nbsp;  Some of the things you may find in the future
                will be web development tutorials and unique code solutions written in Javascript, Golang, c++ and python.  Additional things you could expect to see on JLProgramming.com might be AWS ec2 tutorials, unique programming hacks, articles about
                 the industry and being a professional programmer, articles about different programming languages, webassembly, cloud-based software architecture, kubernetes, docker, github, MacOS, payment processing, 2fa, and much much more.  
                 Comments section and more articles coming soon.
              <div class="Okay">Featured Articles</div>
{#if browser}
{(console.log("gayjewishnigger"), '')}
<Carousel class="carousel"
  bind:this={carousel}
>
  <div class="carousel1"><div class="carouselTxt">Getting Started With C++</div><a class="me"href="/article"><div class="readNow">Read Now</div></a></div>
  <div class="carousel2"><div class="carouselTxt">Coming Soon</div><a class="me"href="/article"><div class="readNow">Read Now</div></a></div>
  <div class="carousel3"><div class="carouselTxt">Coming Soon</div><a class="me"href="/article"><div class="readNow">Read Now</div></a></div>
</Carousel>
{/if}
 </div>

            </div>
        </div>