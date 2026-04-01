export async function getFunctionData(string, start, stop, interval) {
    const func = encodeURIComponent(string)
    const request = await fetch(`https://plotwave.onrender.com/api/solve-function?function=${func}&start=${start}&stop=${stop}&interval=${interval}`, {
        method: 'POST'
    });
    let res;
    if(request.ok) {
        res = request.json()
    } else {
        res = "error"
    };
    return res;
}
