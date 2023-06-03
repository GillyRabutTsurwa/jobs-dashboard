<script>
    import { page } from "$app/stores";
    import logo from "$lib/images/svelte-logo.svg";
    import github from "$lib/images/github.svg";
</script>

<header>
    <div class="banner" />
    <div class="links">
        <div class="corner">
            <a href="https://kit.svelte.dev">
                <img src={logo} alt="SvelteKit" />
            </a>
        </div>

        <div class="corner">
            <a href="https://github.com/GillyRabutTsurwa">
                <img src={github} alt="GitHub" />
            </a>
        </div>
    </div>
</header>

<style>
    header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .banner {
        width: 100%;
        height: 15rem;
        background-image: url($lib/assets/images/bg-header-desktop.svg);
        background-color: var(--colour-primary);
    }

    .links {
        align-self: flex-end;
        display: flex;
    }

    .corner {
        width: 3em;
        height: 3em;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .corner img {
        width: 2em;
        height: 2em;
        object-fit: contain;
    }

    a:hover {
        color: var(--color-theme-1);
    }
</style>
