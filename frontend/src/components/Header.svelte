<script>
    import { meta } from 'tinro';
</script>

<header>
    <h1 class="offset-3 col-6">
        {#if meta().url.includes("ettermek")}
        Éttermek
        {:else}
        Szálláshelyek
        {/if}
    </h1>
    <div class="fade-effect"></div>
    <img src="/wave.png" alt="wave" class="wave">
</header>

<style>
    .fade-effect{
        color: white;
        background: rgb(0,147,200);
        opacity: 0.7;
        height: inherit;
        overflow: hidden;
    }

    header h1{
        padding-top: 2vh;
        position: absolute;
        z-index: 3;
        color: white;
    }

    header{
        background-image: url('/hatter.jpg');
        background-size: cover;
        background-position: center center;
        height: 17vh;
        margin-bottom: 6vh;
    }


    .wave{
            width: 100%;
            height: 15vh;
            z-index: 2;
            position: relative;
            top: -9vh;
        }

    @media screen and (max-width: 768px) {
        .wave{
        object-fit: cover;
        }
    }
</style>