<script lang="ts">
    import type { Info } from "../../interfaces/Info";
    export let InfoData:Info;
    import { BackendUrl } from "../../services/DB";
</script>

<style>
    /* Small */
    @media only screen and (max-width: 577px) {
        *{
            --cardwidth: 85vw;
            --cardheight: 420px;
            --fontsize: 18px;
        }
    }
    /* Medium */
    @media only screen and (min-width: 577px) and (max-width: 769px){
        *{
            --cardwidth: 320px;
            --cardheight: 440px;
            --fontsize: 20px;
        }
    }
    /* Large */
    @media only screen and (min-width: 769px) {
        *{
            --cardwidth: 330px;
            --cardheight: 440px;
            --fontsize: 22px;
        }
    }

    .card{
        width: var(--cardwidth);
        border-radius: 30px;
        box-shadow: 10px 10px 8px #888888;
        transition: 0.3s;
        min-height: var(--cardheight);
    }

    .card:hover{
        box-shadow: 2px 2px 8px #888888;
        transform: translateX(8px);
        transform: translateY(8px);
    }

    .card img{
        object-fit: cover;
        width: calc(var(--cardwidth) - 50px);
        height: calc(var(--cardheight) / 2);
        margin-bottom: 40px;
    }

    .card h3{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .card a{
        font-size: var(--fontsize);
        background-color: var(--kek6);
        transition: 0.2s;
        border-color: var(--kek8);
        position: relative;
        bottom: 20px;
    }

    .card a:active{
        background-color: var(--kek8);
    }



</style>

<!-- Card -->
<div >
    <div class="card m-3 p-3 d-flex flex-column align-items-center mx-auto">
        <h3 class="text-center mt-3 w-100">{InfoData.title}</h3>
        <img src="{BackendUrl}media/{InfoData.image}" class="card-img-top rounded mt-3" alt="kép">
        <a href="{InfoData.href}" target="_blank" class="btn btn-primary">
            Tovább
        </a>
      </div>
</div>