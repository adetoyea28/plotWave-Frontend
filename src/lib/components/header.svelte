<script>
    import Link from "./link.svelte";
</script>

<div class="nav">
    <h1>Plot-wave</h1>
    <Link label="Docs" link="/docs"/>
</div>

<style>
    .nav {
        background-color: #1d1d29;
        display: flex;
        flex-grow: 0;
        padding: 10px;
        flex-direction: row;
        justify-content: space-between;
        height: fit-content;
    }

    .nav>h1 {
        color: white;
        font-size: 30px;
        font-family: Nata Sans;
    }

</style>