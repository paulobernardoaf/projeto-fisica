function show(m) {
    if (document.getElementById('movimento').src.split("/").slice(-1)[0] == m) {
        document.getElementById('movimento').src = '';
        document.getElementById('iframe').style.display = 'none';
    }
    else {
        document.getElementById('movimento').src = m;
        document.getElementById('iframe').style.display = 'block';
       	resizeIframe();
    }
}

function resizeIframe() {

	var obj = document.getElementById('movimento');
	var width = screen.width;
	var height = screen.height;
	var size = width < height ? width : height;

	if (obj.contentWindow.document.body.scrollHeight == 150) {
		obj.style.height = (obj.contentWindow.document.body.scrollHeight + size) + 'px';
	}
	else {
		obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
	}

    
}

function resize(id) {
	var width = screen.width;
	var height = screen.height;
	var size = width < height ? width : height;
	document.getElementById(id).style.width = size+"px";
	document.getElementById(id).style.height = size+"px";
}