<script lang="ts">

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
        height: var(--cardheight);
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
    <div class="card m-3">
        <img src="/kep_wide.jfif" class="card-img-top" alt="...">
        <div class="d-flex align-items-center justify-content-center" id="darkness">
            <p>
                from - to
            </p>
        </div>
        <div class="card-body d-flex flex-column align-items-center">
            <h3 class="card-title text-center">Example title</h3>
            <hr class="line">
            <p class="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi harum possimus quos, expedita, tempora nesciunt laudantium sapiente ipsa.
            </p>
            <a href="/" class="btn btn-primary pl-3 pr-3">
                Tovább
            </a>
        </div>

      </div>
</div>