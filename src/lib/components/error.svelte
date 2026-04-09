<script>
    let {error = "Illegal Math Operation"} = $props()
</script>

<div>
    <h3>Error:</h3>
    <p>{error}</p>
</div>

<style>
    div {
        height: fit-content;
        width: 70%;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        color: red;
        flex-direction: column;
    }
    p {
        font-weight: bolder;
    }
</style>