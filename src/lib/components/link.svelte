<script>
    let {
        label = "click",
        link = "/app",
        txtColor = "white",
        padding = "7.5px 18px",
        height = "30px"
     } = $props();
    
</script>

<a href={link} style="color: {txtColor};">{label}</a>

<style>
    a {
        margin: 10px;
        display: block;
        background-color: rgba(255, 255, 255, 0.2);
        text-decoration: none;
        width: fit-content;
        backdrop-filter: blur(20px);
        padding: 7.5px 18px;
        height: 30px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        line-height: 10px;
        font-family: Nata Sans;
        border-radius: 15px;
    }

    a:hover {
        background-color: blue;
        box-shadow: 3px 3px 10px darkcyan;
    }
</style>

