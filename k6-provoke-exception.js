import http from 'k6/http'

export default function () {
    const res = http.get(__ENV.TARGET) // invoke using `k6 --env TARGET="https://example.com"`
    if (res.status !== 200) {
        console.log(res.status_text)
    }
}
