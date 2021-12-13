
window.onload = function(){
    const button = document.getElementById("haven-photo");

    button.onclick = function() {

        //create the outer layer container for the iframe (this will create the faded background)
        sDiv = document.createElement("div");
        sDiv.id = "s-shell"
        sDiv.style = "display: block; overflow: auto; position: fixed; inset: 0px; z-index: 9999999; background-color: rgba(232, 232, 231, 0.55); zoom: 1;";
        document.body.appendChild(sDiv);

        //create the tight container for the iframe
        pDiv = document.createElement("div");
        pDiv.id = "p-shell";
        pDiv.style = "top: 50px; width: 310px; height: 453px; left: 50%; margin-left: -155px; position: fixed; line-height: 0; max-height: 100%;";
        sDiv.appendChild(pDiv);

        //create the iframe, this is where the embedded website will actually appear
        iFrame = document.createElement("iframe");
        iFrame.sandbox = "allow-same-origin allow-scripts";
        iFrame.src = "https://haven.glassarms.com";
        iFrame.width = "310";
        iFrame.height = "420";
        iFrame.style = "max-height: 100%";
        iFrame.frameborder = "0";
        pDiv.innerHTML += '<iframe sandbox="allow-same-origin allow-scripts" src="https://haven.glassarms.com" width="310" height="420" style="max-height: 100%;" frameborder="0"></iframe>"';

    };
};