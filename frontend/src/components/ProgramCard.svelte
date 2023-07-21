<script lang="ts">
    import { BackendUrl } from "../services/DB";
    import type { Program } from "../interfaces/Programs";
    import { ProgramTime } from "../services/DateFormatter";
    export let ProgramData:Program;

    let dates = ProgramTime(ProgramData.start,ProgramData.end)  
</script>

<style>
    /* Small */
    @media only screen and (max-width: 577px) {
        *{
            --cardwidth: 85vw;
            --cardheight: 480px;
            --fontsize: 18px;
        }
    }
    /* Medium */
    @media only screen and (min-width: 577px) and (max-width: 769px){
        *{
            --cardwidth: 320px;
            --cardheight: 500px;
            --fontsize: 20px;
        }
    }
    /* Large */
    @media only screen and (min-width: 769px) {
        *{
            --cardwidth: 330px;
            --cardheight: 500px;
            --fontsize: 22px;
        }
    }

    .card{
        width: var(--cardwidth);
        min-height: var(--cardheight);
        border-radius: 30px;
        box-shadow: 10px 10px 8px #888888;
        transition: 0.3s;
        overflow: hidden;
    }

    .card img{
        width: var(--cardwidth);
        height: var(--cardheight);
        object-fit: cover;
        z-index: 1;
        border-radius: 30px;
    }

    .card h3{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-bottom: 20px;
    }

    .card-body{
        width: var(--cardwidth);
        height: calc((var(--cardheight) / 3) * 2);

        position: absolute;
        top: calc(var(--cardheight) - 70px);

        border-radius: 5px 5px 30px 30px;
        background-color: white;

        z-index: 2;
        transition: 1s;
    }

    #darkness{
        width: var(--cardwidth);
        height: calc((var(--cardheight) / 3) + 5px);
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: calc(0px - (var(--cardheight) / 3) - 5px);
        z-index: 2;
        transition: 1s;
    }

    #darkness p{
        color: white;
        font-size: var(--fontsize);
    }

    .card:hover .card-body, .card:active .card-body{
        top:calc(var(--cardheight)/3);
    }

    .card:hover #darkness, .card:active #darkness{
        top: 0px;
    }

    .card p{
        color: var(--kek1);
        font-size: var(--fontsize);
        font-family: 'Times New Roman', Times, serif;
    }

    .card a{
        font-size: var(--fontsize) !important;
        background-color: var(--kek6);
        transition: 0.2s;
        border-color: var(--kek8);
        position: absolute;
        bottom: 10px;
    }

    .card a:active{
        background-color: var(--kek8);
    }

    .line{
        border: 2px solid var(--kek1);
        width: calc((var(--cardwidth)/3)*2);
    }



</style>

<!-- Card -->
<div>
    <div class="card m-3 mx-auto">
        <img src="{BackendUrl}media/{ProgramData.image}" class="card-img-top" alt="...">
        <div class="d-flex align-items-center justify-content-center" id="darkness">
           {#if dates.length==3}
                <p class="text-center">
                    {dates[0]}<br>{dates[1]} - {dates[2]}<br>{ProgramData.address}
                </p>
            {:else if dates.length==2}
                <p class="text-center">
                    {dates[0]} - {dates[1]}<br>{ProgramData.address}
                </p>
            {:else}
                <p class="text-center">
                    {dates[0]}<br>{ProgramData.address}
                </p>
           {/if}
        </div>
        <div class="card-body d-flex flex-column align-items-center">
            <h3 class="card-title text-center">{ProgramData.title}</h3>
            <hr class="line">
            <p class="card-text text-center">
                {ProgramData.desc}
            </p>
            <a href="{ProgramData.href}" target="_blank" class="btn btn-primary pl-3 pr-3">
                Tovább
            </a>
        </div>

      </div>
</div>