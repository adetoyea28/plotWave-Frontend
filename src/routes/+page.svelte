<script>
    import hero from '$lib/assets/herro.png';
    import NavBar from '$lib/components/header.svelte';
    import Link from '$lib/components/link.svelte';
    import FeatureCard from '$lib/components/featureCard.svelte';
    import ExampleCard from '$lib/components/exampleCard.svelte';
    import polyImg from "$lib/assets/poly.png";
    import trigImg from "$lib/assets/trig.png";
    import expImg from "$lib/assets/exp.webp";
</script>

<header>
    <NavBar/>

    <div class="description-container">

        <div class="description">
            <h2>Visualize Complex Math Functions</h2>
            <p>and analyze their structure and behaviour with various Analytics tools</p>
            <img src="{hero}" alt="hi" width="275" height="275"/>

            <Link label="Get Started for free" link="/app" txtColor="white" height="40px" padding="10px 24px"/>
        </div>
    </div>
</header>

<main>
    <div class="feature-container">
        <FeatureCard title="Visualization" description="With Plot-wave, you can easily visualize mathematical functions with diverse terms. It uses RegEx patterns to ensure all math expressions are parsed and formatted properly, significantly reducing error rates." />
        <FeatureCard title="Function Analysis" description="With every function you visualize, you get info about it's properties like the function's: Domain, Range and type." />
        <FeatureCard title="Save Graphs" description="Plot-wave also allows you to download your graph plots as JPG and PNG files." />
    </div>

    <div class="example-container">
    <ExampleCard title="Polynomial Function" img={polyImg}/>
    <ExampleCard title="Trigonometric Function" img={trigImg}/>
    <ExampleCard title="Exponential Function" img={expImg}/>
</div>
</main>




<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    header {
        background: linear-gradient(#d3ecec, #1f4260, #1d1d29);
        background-blend-mode: overlay;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        height: fit-content;
    }

    main {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
    }

    .feature-container {
        display: flex;
        flex-direction: row;
        width: 80vw;
        opacity: 0;
        animation: fadeIn 1s 0.5s ease-out forwards;
    }

    .description-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .description {
        margin: 4.5%;
        display: flex;
        height: fit-content;
        opacity: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: fadeIn 1s 0.2s ease-out forwards;
    }

    .description>h2 {
        color:  white;
        text-align: center;
        word-wrap: wrap;
    }

    .description>p {
        color: white;
        text-align: center;
        margin-bottom: 15px;
    }

    .description>img {
        border-radius: 20px;
        width: 500px;
        height: 350px;
        margin-bottom: 15px;
    }

    .example-container {
        display: flex;
        width: 80vw;
        opacity: 0;
        flex-direction: row;
        animation: fadeIn 1s 0.7s ease-out forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }


    @media (max-width: 700px) {
        .description>img {
            width: 275px;
            height: 250px;
        }
    }

    @media (min-width: 1000px) {
        /*.description-container {
            height: 63vh;
        }*/
    }

    @media (max-width:800px) {
        .feature-container {
            flex-direction: column;
        }
    }

    @media (max-width: 1000px) {
        .example-container {
            overflow-x: auto;
        }
    }
</style>