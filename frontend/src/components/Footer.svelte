<script>
        import { Routes } from "../services/ActualSite";
    import { i18n } from "../services/i18n";
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
            <img src="/logo.png" class="centerifsmall" alt="Szeretlek Baja">
        </div>
        <div class="col-md-6 col-lg-3 col-12">
            <h2>{$i18n.t('footer.menu')}</h2>
            <ul>
                {#each $Routes as route}
                    <li> <a href="{route.route}">{$i18n.t('menu.'+route.name)}</a></li>
                {/each}
            </ul>
        </div>
        <div class="col-md-6 col-lg-3 col-12">
            <h2>{$i18n.t('footer.contact')}</h2>
            <ul>
                <li class="fw-medium">
                    Bajai Turisztikai Nonprofit Kft
                </li>
                <li class="fw-medium">
                    {$i18n.t('footer.address')}
                </li>
                <li class="fw-medium">
                    {$i18n.t('footer.phone')}
                </li>
                <li class="fw-medium">
                    {$i18n.t('footer.email')}
                </li>
                <li>
                    <a href="/impresszum" target="_blank" >
                        {$i18n.t('footer.impress')}
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-md-6 col-lg-3 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d365.8633684443083!2d18.950963729880147!3d46.177978922880584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47431ff3a7ff5399%3A0x42040f0744cb9638!2sBajai%20Turisztikai%20Nonprofit%20Kft.!5e0!3m2!1shu!2shu!4v1686317272605!5m2!1shu!2shu" title="térkép" width="300" height="250" style="border:0;" loading="lazy"   referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</footer>