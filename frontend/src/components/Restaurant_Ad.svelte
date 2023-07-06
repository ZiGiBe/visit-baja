<script>
    
</script>

<div class="mb-3 lane">
    <div>
        <img src="/kep_wide.jfif" alt="advert_image" class="image">
    </div>
    <div class="containerBox m-3">
        <h2>
            Töltsd meg nálunk a bendőd!
        </h2>
        <a href="/szolgaltatasok/vendeglatohelyek" class="btn btn-secondary m-3">
            <h4>Éttermek</h4>
        </a>
    </div>
</div>

<style>

.image{
    width: 50vw;
    height: 40vh;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    margin: 20px 0 20px 0;
}

.lane{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}

.lane div:nth-child(2){
    width: 50vw;
}

.containerBox{
    background-color: rgba(255, 255, 255, 0.8);
    background-image: url('/kaja.png');
    background-blend-mode: overlay;
    background-size:cover;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10vh;
    border-left: 9px solid var(--kek7);
    border-radius: 40px;
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

    .containerBox{
        border: unset;
        padding-top: unset;
        background-image: unset;
    }

    .lane div:nth-child(2){
        width: unset;
    }
}

</style>