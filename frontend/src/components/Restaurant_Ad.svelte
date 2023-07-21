<script>
    import { i18n } from "../services/i18n";

    
</script>

<div class="mb-3 lane">
    <div>
        <img src="/svedasztal.png" alt="advert_image" class="image">
    </div>
    <div class="containerBox mb-3 me-3 mt-3">
        <h2>
            <!-- {$i18n.t('index.eatfood')} -->
            Gasztroélmények Baján!
        </h2>
        <a href="/szolgaltatasok/vendeglatohelyek" class="btn btn-secondary m-3">
            <h4>
                <!-- {$i18n.t('index.restaurants')} -->
                Éttermek
            </h4>
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
    margin-left: 30px;
    background-color: rgba(255, 255, 255, 0.6);
    background-image: url('/kaja.png');
    background-blend-mode: overlay;
    background-size:80vh;
    background-repeat: repeat;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    border-left: 9px solid var(--kek7);
    border-radius: 40px;
}

.lane div:nth-child(2){
    width: 50vw;
}

.containerBox{
   
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10vh;
    
    text-align: center;
}

/* Medium */
@media only screen and (max-width: 768px){
    .lane{
        flex-direction: column;
        background-image: unset;
        border: 0;
        margin:auto;
    }

    .image{
        width: 90%;
        height: 30vh;
        object-fit: cover;
        margin: 0 5% 0 5%;
        border-radius: 10px;
    }

    .containerBox{
        border: unset;
        padding-top: unset;
       
    }

    .lane div:nth-child(2){
        width: unset;
    }
}

</style>