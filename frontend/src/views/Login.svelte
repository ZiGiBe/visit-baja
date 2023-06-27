<script lang="ts">
    import { router } from "tinro";
    import { jwt } from "../components/Admin/stores";
    import db from "../services/DB";
    import sha256 from 'crypto-js/sha256';
    let username = "";
    let password = "";
    async function login(){
        if (username != "" && password != ""){
            let pswd = sha256(password).toString();
            let login = await db.Login({username: username, password: pswd});
            if (login.token){
                await jwt.update(d=>d=login.token);
                router.goto('/admin');
            }
        }
    }
</script>

<main>
    <div class="main">
        <h1 class="text-center py-5">Szeretlek Baja - Adminisztráció</h1>
        <hr>
        <div class="mt-5 px-3">
            <h3>Bejelentkezés</h3>
            <div class="form-floating my-3">
                <input type="text" bind:value={username} name="username" placeholder="felhasználónév" class="form-control">
                <label for="username">Felhasználónév</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" name="password" bind:value={password} placeholder="Jelszó" class="form-control">
                <label for="password">Jelszó</label>
            </div>
            <button on:click={login} class="btn btn-primary btn-lg bg-gradient">Bejelentkezés <i class="bi bi-box-arrow-in-right"></i></button>
        </div>
    </div>
</main>
<style>
    .main {
        margin: auto;
        max-width: 800px;
    }
</style>