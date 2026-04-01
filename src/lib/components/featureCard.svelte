<script>
    let {
        title = "Feature",
        description = "Info about the feature",
    } = $props();
</script>

<div class="card-container">
    <h3>{title}</h3>
    <p>{description}</p>
</div>

<style>
    .card-container {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        width: 33%;
        min-height: 100px;
        flex-grow: 1;
        margin: 10px;
        color: white;
        flex-direction: column;
        padding: 10px;
    }

    p {
        text-align: justify;
    }

    @media (max-width: 800px) {
        .card-container {
            width: auto;
        }
    }
</style>