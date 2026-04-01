<svelte:head>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<script>
    import NavBar from '$lib/components/header.svelte';
    import { getFunctionData } from '$lib';
    import { onMount } from 'svelte';

    let chartElement;
    let data;
    let chart;
    let rawResponse = {
        data: [[-1, 3], [0, 2], [1, 5], [2, 4], [3, 4]],
        y_min: -1,
        y_max: 7
    };

    let functionString = $state();
        let start = $state();
        let stop = $state();
        let interval = $state();

    async function plotGraph(){
        const response = await getFunctionData(functionString, start, stop, interval);
        if (response !== 'error') {
            console.log(response)
            rawResponse = response
        } else {
            alert("an error occured");
        }

        drawChart()
    }

    onMount(() => {
        if (typeof google !== 'undefined') {
            google.charts.load('current', { packages: ['corechart'] });
            google.charts.setOnLoadCallback(drawChart);
        }
    });
    const padding = (rawResponse.y_max - rawResponse.y_min) * 0.1
    const options = {
            title: 'Test Graph',
            curveType: 'function',
            hAxis: {
                title: 'X-Axis',
                baseline: 0,
                baselineColor: '#000',
                gridlines: { count: 11, color: '#e0e0e0' }
            },
            vAxis: {
                title: 'Y-Axis',
                viewWindowMode: 'explicit',
                baseline: 0,
                baselineColor: '#000',
                gridlines: { count: 11, color: '#e0e0e0' }
            },
            chartArea: { width: '80%', height: '80%' },
        }

    function drawChart() {
        data = google.visualization.arrayToDataTable([ ['x_values', 'f(x)'], ...rawResponse.data ]);


        chart = new google.visualization.LineChart(document.getElementById('graph'));
        chart.draw(data, options)
    }

    function handleResize() {
        if (chart) {
            chart.draw(data, options);
        }
    }

</script>
<svelte:window on:resize={handleResize} />


<NavBar/>

<main>
    <div class="input-container">
        <h3>Function</h3>
        <div class="input-component">
            <div class="function-input">
                <input bind:value={functionString} type="text" id="function" placeholder="f(x) = x^2"/>
            </div>
        </div>
        <br><br>
        <h3>Range of Values</h3>
        <div class="input-component">
            <div class="range-input">
                <label for="start">start:</label>
                <input bind:value={start} id="start" type="number" placeholder="-5"/>
            </div>
            <div class="range-input">
                <label for="stop">stop:</label>
                <input bind:value={stop} id="stop" type="number" placeholder="5"/>
            </div>
            <div class="range-input">
                <label for="int">interval:</label>
                <input bind:value={interval} id="int" type="number" placeholder="1"/>
            </div>
        </div>
        <button onclick={plotGraph}>plot curve</button>
    </div>

    <div bind:this={chartElement} class="graph-display" id="graph">
        
    </div>

    <div class="function-info">
        <div class="table-of-values">
            <table>

            </table>
        </div>
        <div class="function-properties">

        </div>
        <div class="options">

        </div>
    </div>
</main>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        background-image: url("../../lib/assets/app-back.png");
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .input-container {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 10px;
        margin-top: 50px;
        color: white;
        margin-bottom: 50px;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .input-component {
        justify-content: space-between;
        margin: 10px;
        display: flex;
        flex-direction: row;
    }

    .function-input {
        margin-bottom: 20px;
        width: 100%;
        display: flex;
    }

    button {
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            border-radius: 10px;
            line-height: 9px;
            margin-top: 20px;
            height: 30px;
            margin-left: 35%;
            padding: 10px;
            background-color: blue;
            width: 30%;
            font-family: Nata Sans;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        button:hover {
            background-color: blue;
            color: black;
            box-shadow: 3px 5px 10px darkcyan;
        }

    .function-input>input {
        display: block;
        width: 100%;
        font-size: large;
        border-radius: 8px;
        padding: 7px;
        font-family: Nata Sans;
        height: 40px;
    }

    input:focus {
        outline: none;
    }

    .range-input {
        display: flex;
        flex-direction: column;
        margin: 5px;
        justify-content: flex-start;
    }

    .range-input>input {
        width: 90%;
        font-size: large;
        border-radius: 8px;
        padding: 7px;
        font-family: Nata Sans;
        height: 30px;
    }

    .graph-display {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 10px;
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 80%;
        height: 80%;
    }

    @media (max-width: 650px) {
        .input-container {
            width: 90%;
        }

        .graph-display {
            width: 90%;
            height: 50%;
        }
    }

    @media (max-width: 400px) {
        .input-container {
            padding: 10px;
        }

        .function-input {
            margin-bottom: 15px;
        }

        .graph-display  {
            height: 400px;
        }

        button {
            margin-left: 1%;
            width: 98%;
        }
    }
</style>