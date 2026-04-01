<script>
    const { title, img } = $props()

</script>

<div>
    <h3>{title}</h3>
    <img src={img} alt="img" >
    <button>view example</button>
</div>

<style>
    h3{
        color: white;
        margin-bottom: 10px;
    }
    div {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        flex-direction: column;
        display: flex;
        margin: 10px;
        padding: 10px;
        width: 33%;
        min-height: 100px;
    }

    img {
        flex-grow: 1;
        margin-bottom: 15px;
        width: 100%;
        height: 85%;
    }

    button {
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            border-radius: 10px;
            height: 30px;
            font-family: Nata Sans;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        button:hover {
            background-color: blue;
            box-shadow: 3px 5px 10px darkcyan;
        }

    @media (max-width: 1000px) {
        img {
            width: 275px;
            flex-grow: 0;
            height: 250px;
        }

        div {
            width: 300px;
            height: 350px;
        }

    }
</style>