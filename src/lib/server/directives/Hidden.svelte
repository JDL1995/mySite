<script lang="ts">
    export let shown:boolean = false
      
    export const show = () => { shown = !shown }
  </script>
  
  <button on:click={show}>Child's button</button>
  
  {#if shown}
    <slot/>
  {/if}