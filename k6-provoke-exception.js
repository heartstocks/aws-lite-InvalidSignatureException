import http from 'k6/http'

export default function () {
    const res = http.get("…");
    if (res.status !== 200) {
        console.log(res.status_text)
    }
}
