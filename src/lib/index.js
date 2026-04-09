export async function getFunctionData(string, start, stop, interval) {
    const func = encodeURIComponent(string)
    const request = await fetch(`https://plotwave.onrender.com/api/solve-function?function=${func}&start=${start}&stop=${stop}&interval=${interval}`, {
        method: 'POST'
    });
    const response = request.json();
    return response;
}
