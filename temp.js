const score = (pid, score, times) => {
    let f = new FormData();
    f.set("formhash", document.querySelector("[name='formhash']").value);
    f.set("tid", tid);
    f.set("pid", pid);
    f.set("referer", window.location.href);
    f.set("handlekey", "rate");
    f.set("score4", score);
    f.set("reason", "Thx for sharing!");
    for (let i = 0; i < times; i++) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/forum.php?mod=misc&action=rate&ratesubmit=yes&infloat=yes&inajax=1", true)
        xhr.send(f)
    }
}