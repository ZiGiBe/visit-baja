<script lang="ts">
    import type { Sight } from "../interfaces/Sights";
    export let SightData:Sight;
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
        border-radius: 30px;
        box-shadow: 10px 10px 8px #888888;
        transition: 0.3s;
        height: var(--cardheight);
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
    }

    .card h3{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .card p{
        color: var(--kek1);
        font-size: var(--fontsize);
        font-family: 'Times New Roman', Times, serif;
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
        <h3 class="m-auto mt-3">{SightData.name}</h3>
        <img src="http://localhost:8080/media/{SightData.gallery.find(x=>x.preview).image}" class="card-img-top rounded mt-3" alt="example">
        <div class="card-body d-flex flex-column align-items-center">
            <p class="card-text text-center p-2">
                {SightData.shortdesc}
            </p>
        </div>
        <a href="/latvanyossagok/{SightData.href}" class="btn btn-primary pl-3 pr-3">
            Tovább
        </a>
      </div>
</div>