<script>

</script>

<div class="d-flex lane">
    <div>
        <img src="/kep_normal.jpg" alt="advert_image" class="image">
    </div>
    <div class="containerBox">
        <h2>
            Aludj ma minálunk legyél a mi lányunk
        </h2>
        <a href="/" class="btn btn-secondary">
            <h4>Szállásaink</h4>
        </a>
    </div>
</div>

<style>

.containerBox{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

.image{
    width: 60vw;
    height: 50vh;
    object-fit: cover;
    border-radius: 0 10px 10px 0;
}

.lane{
    padding: 20px 0 20px 0;
    background-color: var(--kek6);
    border-top: 8px solid var(--kek2);
    border-bottom: 8px solid var(--kek2);
    box-shadow: 0 0 20px var(--kek3);
    color: white;
}

.lane h2{
    margin: 20px;
    text-align: center;
}


/* Medium */
@media only screen and (max-width: 768px){
    .lane{
        flex-direction: column;
    }

    .image{
        width: 90vw;
        height: 30vh;
        object-fit: cover;
        margin: 0 5vw 0 5vw;
        border-radius: 10px;
    }
}


</style>