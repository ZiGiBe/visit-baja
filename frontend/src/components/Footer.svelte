<script lang="ts">

</script>

<style>
footer{
    
    background-color: var(--kek8);
    color: white;
    text-shadow: 2px 2px var(--kek2);
    box-shadow: 0 0 10px var(--kek1);
    position: relative;
    bottom: 0;
}
a{
    color:white;
}
p{
    margin:0;
}
.row{
    width: inherit;
}
img{
    width: 100%;
    height:unset ;
}
 /* Small */
 @media only screen and (max-width: 577px) {
        li{
            --fontsize: 18px;
        }
    }
    /* Medium */
    @media only screen and (min-width: 577px) and (max-width: 769px){
        li{
            --fontsize: 20px;
        }
    }
    /* Large */
    @media only screen and (min-width: 769px) {
        li{
            --fontsize: 22px;
        }
    }

    li{
        font-size: var(--fontsize);
    }
    iframe{
        width:100%;
    }
</style>

<!-- Footer -->
<footer class="d-flex justify-content-around container-fluid ">
    <div class="row my-3">
        <div class="col-md-6 col-lg-3 col-12" >
            <img src="logo.png" class="centerifsmall" alt="Szeretlek Baja">
        </div>
        <div class="col-md-6 col-lg-3 col-12">
            <h2>Menü</h2>
            <ul>
                <li>Kezdőlap</li>
                <li>Szállások</li>
                <li>Vendégllátóhelyek</li>
                <li>Tourinform Iroda</li>
                <li>Kiadványaink</li>
            </ul>
        </div>
        <div class="col-md-6 col-lg-3 col-12">
            <h2>Elérhetőségek</h2>
            <ul>
                <li class="fw-medium">
                    Bajai Turisztikai Nonprofit Kft
                </li>
                <li class="fw-medium">
                    Cím: 6500 Baja, Szentháromság tér 11
                </li>
                <li class="fw-medium">
                    Telefon:  06 79 420 792
                </li>
                <li class="fw-medium">
                    E-mail
                </li>
                <li>
                    <a href="/impresszum" target="_blank" >
                        Impresszum
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-md-6 col-lg-3 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670.9986890462972!2d18.95064868085488!3d46.1777882569457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47431ff30888f1d3%3A0x891b6ee22d926bbd!2zQmFqYSwgU3plbnRow6Fyb21zw6FnIHTDqXIgMTEsIDY1MDA!5e0!3m2!1shu!2shu!4v1686314012380!5m2!1shu!2shu" title="térkép" width="300" height="250" style="border:0;" loading="lazy"   referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</footer>