<script lang="ts">

</script>

<style>
    .card{
        width: 380px;
        border-radius: 30px;
        box-shadow: 10px 10px 8px #888888;
        transition: 0.3s;
        height: 600px;
    }

    .card:hover{
        box-shadow: 2px 2px 8px #888888;
        transform: translateX(8px);
        transform: translateY(8px);
    }

    .card img{
        object-fit: cover;
        width: 320px;
        height: 230px;
    }

    .card h3{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .card p{
        color: var(--kek1);
        font-size: larger;
        font-family: 'Times New Roman', Times, serif;
    }

    .card a{
        font-size: large;
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
        <h3 class="m-auto mt-3">Title example</h3>
        <img src="/kep_wide.jfif" class="card-img-top rounded mt-3" alt="...">
        <div class="card-body d-flex flex-column align-items-center">
            <p class="card-text text-center p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi harum possimus quos, expedita, tempora nesciunt laudantium sapiente ipsa.
            </p>
        </div>
        <a href="/" class="btn btn-primary pl-3 pr-3">
            Tovább
        </a>
      </div>
</div>