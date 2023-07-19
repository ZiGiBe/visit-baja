<script>
    import { i18n } from "../services/i18n";


</script>

<div class="d-flex lane">
    <div>
        <img src="/Toth_K_ter.png" alt="advert_image" class="image">
    </div>
    <div class="containerBox">
        <h2>
            <!-- {$i18n.t('index.sleephere')} -->
            Maradj nálunk!
        </h2>
        <a href="/szolgaltatasok/szallasok" class="btn btn-secondary">
            <h4>
                <!-- {$i18n.t('index.accomodations')} -->
                Szállások
            </h4>
        </a>
    </div>
</div>

<style>

.containerBox{
    background-color: rgba(0, 147, 200, 0.7);
    background-image: url('/szallas.png');
    background-blend-mode: overlay;
    background-size:cover;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    align-items:center;
    flex-direction: column;
    padding-top: 10vh;
    text-align: center;
    width: 40vw;
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

    .containerBox{
        padding-top: unset;
        background-image: unset;
    }

    .image{
        width: 90%;
        height: 30vh;
        object-fit: cover;
        margin: 0 5% 0 5%;
        border-radius: 10px;
    }

    .containerBox{
        width: unset;
    }
}


</style>