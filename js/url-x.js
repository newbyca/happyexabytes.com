window.url.current = new Object();
window.url.current.q = new Object();
window.url.current.q.getBool = (function (key) {
    var value = url('?' + key, window.location.href);
    switch (String(value).toLowerCase()) {
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(value);
    }
});