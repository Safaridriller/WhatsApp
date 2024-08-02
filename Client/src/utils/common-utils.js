export const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes()
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}
export const downloadMedia = (e,source) => {
    e.preventDefault()
    try{
        fetch(source).then(resp => resp.blob()).then(blob => {
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.style.display = "none";
            a.href = url
            const name = source.split("file-").pop()
            a.download = "" + name + ""
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(blob)
        }).catch(error => alert("Cant download the file")+error.messgage)
    }
    catch(e){
        console.log("Cant download the file" + e.message) ;
    }
}