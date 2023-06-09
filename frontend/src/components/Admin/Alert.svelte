<script lang="ts">
    let message = {
        type: "",
        reason: "",
        reasondesc: "",
        errors: [],
        message: "",
        show: false
    }
    let htmlElement: HTMLElement;
    function ScrollToElement(){htmlElement.scrollIntoView()};
    export const SetAlert = ( data: {
        show: boolean,
        type: string
        message?: string,
        reason?: string,
        reasondesc?:string,
        errors?: string[];
    })=>{
        message.type = data.type,
        message.show = data.show;
        message.message = data.message;
        message.reason = data.reason;
        message.reasondesc = data.reasondesc;
        message.errors = data.errors;
        ScrollToElement();
    }
</script>

<div bind:this={htmlElement} class:d-none={!message.show} class={`alert alert-dismissible alert-${message.type}`} role="alert">
    
    {#if message.message=="" || message.message==undefined}
        <h4 class="alert-heading">{message.reason}</h4>
        <p>{message.reasondesc}</p>
        <hr>
        <ul class="mb-0">
            {#each message.errors as error}
                <li>{error}</li>
            {/each}
        </ul>
    {:else}
        <div>{message.message}</div>
    {/if}
    <button class="btn-close" on:click={()=>message.show=false}/>
</div>