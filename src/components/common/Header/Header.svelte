<script>
    import  Logo  from './Logo.svelte'
</script>
<header>
    <nav>
        <ul></ul>
        <Logo />
        <ul></ul>
    </nav>
</header>

<style lang="scss">
    header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: linear-gradient(270deg, var(--red) 0%, var(--pink) 100%);

        nav {
            margin:0 auto;
            max-width: 1028px;
            height: var(--header-height);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>