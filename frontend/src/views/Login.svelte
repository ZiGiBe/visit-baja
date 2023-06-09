<script lang="ts">
    async function Login(){
        
    }
</script>

<main>
    <div class="main">
        <h1 class="text-center py-5">Szeretlek Baja - Adminisztráció</h1>
        <hr>
        <form class="mt-5 px-3">
            <h3>Bejelentkezés</h3>
            <div class="form-floating my-3">
                <input type="text" name="username" placeholder="felhasználónév" class="form-control">
                <label for="username">Felhasználónév</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" name="password" placeholder="Jelszó" class="form-control">
                <label for="password">Jelszó</label>
            </div>
            <button class="btn btn-primary btn-lg bg-gradient">Bejelentkezés <i class="bi bi-box-arrow-in-right"></i></button>
        </form>
    </div>
</main>
<style>
    .main {
        margin: auto;
        max-width: 800px;
    }
</style>