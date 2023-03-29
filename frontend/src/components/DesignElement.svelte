<script lang="ts">
    import AOS from "aos";
    import 'aos/dist/aos.css'
    import { onMount } from "svelte";

    onMount(()=> {
        AOS.init();
    })

</script>

<style>

.lane{
    width: 100%;
    background-image: url("/hatter.jpg");
    background-attachment: fixed;
    background-size: cover;
    border-top: 10px solid var(--kek5);
    border-bottom: 10px solid var(--kek5);
    margin: 30px 0 30px 0;
}

.darkness{
    width: 100%;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.5);
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

</style>


<div id="he">
    <div class="lane">
        <div class="darkness">
            <div data-aos="slide-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <img src="/logo.png" alt="..." id="icon">
            </div>
        </div>
    </div>
</div>
