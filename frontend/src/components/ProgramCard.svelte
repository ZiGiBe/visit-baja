<script lang="ts">

</script>

<style>
    .card{
        width: 380px;
        border-radius: 30px;
        box-shadow: 10px 10px 8px #888888;
        transition: 0.3s;
        height: 600px;
        overflow: hidden;   
    }

    .card img{
        object-fit: cover;
        width: 380px;
        height: 600px;
        z-index: 1;
        border-radius: 30px;
    }

    .card h3{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-bottom: 20px;
    }

    .card-body{
        border-radius: 5px 5px 30px 30px;
        width:380px;
        position: absolute;
        height: 400px;
        top: 520px;
        left: 0px;
        z-index: 2;
        transition: 1s;
        background-color: white;
    }

    .card-body:hover, .card-body:active{
        top:220px;
    }

    .card p{
        color: var(--kek1);
        font-size: x-large;
        font-family: 'Times New Roman', Times, serif;
    }

    .card a{
        font-size: large;
        background-color: var(--kek6);
        transition: 0.2s;
        border-color: var(--kek8);
        position: absolute;
        bottom: 60px;
    }

    .card a:active{
        background-color: var(--kek8);
    }

    .line{
        border: 2px solid var(--kek1);
        width: 300px;
    }

</style>

<!-- Card -->
<div>
    <div class="card m-3">
        <img src="/kep_wide.jfif" class="card-img-top" alt="...">
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