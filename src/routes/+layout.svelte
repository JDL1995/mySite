<script lang="ts">
    import '../tailwind.css';
    import '../styles.css';
    import '../FA/css/all.min.css'
    // import Hidden from '../lib/server/directives/Hidden.svelte'
	
      let showMenu = false;
  let menuOver=false;
    function toggleNavbar() {
      showMenu = !showMenu;
    }
    let menuParams = {
  main: ["music", "store"],
  music: ["spotify", "apple music", "<= back"],
};
let navDropdownTitles=[{title:"Articles"}]
    let shown:boolean=false;
    let hoverText:string;
    function showDiv(){
        if(shown==false){
            shown=true;
        }else{
            shown=false;
        }
    }
    let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
    function onOver(item:string) {
   hoverText=item;
  }
  function onOverMenu(item:string) {
menuOver=true;
  }
  function onLeave(item:string) {
  hoverText=item;
  }
  function onLeaveMenu(item:string){
    hoverText=item;
  }
  function hoverTextCheck(item:string){
    if(item=="show"){
        return true;
    }
    else{
        return false;
    }
  }
  function hoverTextCheck2(item:string){
    if(item=="show"){
        return "text-blue-400";
    }
    else{
        return "text-white"
    }
  }
   
  </script>
<svelte:head>
  
</svelte:head>
  

  
  <div class="w-full">
    <div class="bg-black text-white">
      <nav
        class="w-full text-white container px-6 py-8 mx-auto flex justify-between items-stretch"
      >
      <div class="text-white flex w-full">
        <div class="w-1/3">
          <a
            class="text-xl text-white float-left font-bold text-gray-800 md:text-2xl hover:text-blue-400"
            href="/">JLProgramming 
          </a>
          <!-- Mobile menu button -->
          
          <div on:click={toggleNavbar} class="flex text-white md:hidden">
            <button
              type="button" class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>   
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->  
        <div
          class="text-white fill-white hover:text-green flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class="text-white-800 hover:text-blue-400" href="/">Home</a>
          <div  class=" text-white hover:text-blue" on:mouseover={()=>{onOver('show')}}
            on:mouseleave={()=>{onLeave('hide')}}>
        <div>
            <div  class="relative float-left hover:text-blue-400 inline-flex w-full bg-opacity-0 justify-left border-none rounded-md bg-white text-sm font-medium text-gray-700 shadow-sm hover:text-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
             <span class="{hoverTextCheck2(hoverText)} hover:text-blue"> <div class="hover:text-blue-40 ">Articles</div></span>
              <!-- Heroicon name: mini/chevron-down -->
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            </div>
            {#if hoverTextCheck(hoverText)}
            <div class="absolute z-10 mt-2 w-56 origin-top -mt-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                 <div class="py-1 w-full hover:text-green" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
               <div class="w-full hover:bg-gray-200"> <a href="/articles/C++" class="relative text-gray-700 px-4 w-full py-3 " role="menuitem" tabindex="-1" id="menu-item-0">C++</a></div>
               <div class="w-full hover:bg-gray-200">     <a href="/articles/WebDev" class="block px-4 text-gray-700 py-2 text-sm " role="menuitem" tabindex="-1" id="menu-item-1">Web Dev</a></div>
                <div class="w-full hover:bg-gray-200">   <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Misc</a></div>
               
            </div>
              </div>
            {/if}
          </div>    
                <a class="text-white hover:text-blue-400" href="/contact">Contact US</a>
          <a class="text-white hover:text-blue-400" href="/about">About Us</a>
        </div>
    </div>
      </nav>
    </div>
  </div>
<slot></slot>