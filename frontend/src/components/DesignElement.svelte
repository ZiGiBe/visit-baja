<script lang="ts">
    import AOS from "aos";
    import 'aos/dist/aos.css'
    import { onMount } from "svelte";

    onMount(()=> {
        AOS.init();
    })

</script>

<style>

/* Medium */
@media only screen and (max-width: 768px) {
    #slider{
        display: none;
    }
}

.lane{
    width: 100%;
    background-image: url("/hatter.jpg");
    background-attachment: fixed;
    background-size:cover;
    border-top: 10px solid var(--kek5);
    border-bottom: 10px solid var(--kek5);
    margin: 30px 0 30px 0;
}

.darkness{
    width: 100%;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
}


#icon{
    transform: rotate(-30deg);
    max-height: 25vh;
    max-width: 60vw;
    margin: 8vh;
    padding: 20px;
    position: relative;
    right: -10%;
    border: 5px solid var(--kek7);  
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
}

.title{
    color: white;
    font-family:cursive;
}

.titleBox{
    min-height: 25vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.link{
    background-color: var(--kek6);
    border-color: var(--kek8);
}



</style>


<div>
    <div class="lane">
        <div class="darkness">
            <div data-aos="slide-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once='true' id="slider">
                <img src="/logo.png" alt="logó" id="icon">
            </div>
            <div class="titleBox">
                <h1 class="title">
                    Title example
                </h1>
                <a href="/" class="btn btn-primary m-3 link">
                    <h3>Tovább</h3>
                </a>
            </div>
        </div>
    </div>
</div>
