var flag = 0;

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
		alert("请选择文件");
        return false;
    }
}

function imgPreview(fileDom){
	//判断是否支持FileReader
	if (window.FileReader) {
		var reader = new FileReader();
	} else {
		alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
	}
	var file = fileDom.files[0];
	var imageType = /^image\//;
	//是否是图片
	if (!imageType.test(file.type)) {
		alert("请选择图片！");
		return;
	}
	//读取完成
	reader.onload = function(e) {
		//获取图片dom
		var img = document.getElementById("preview");
		//图片路径设置为读取的图片
		img.src = e.target.result;
		img.border = "6px dashed ";
		img.style.borderColor = "rgba(255, 255, 255, 0.4)";
		img.style.borderRadius = "28px";
		img.style.borderStyle = "dashed";
		img.style.width = "188px";
		img.style.height = "188px";
		flag = 1;
	};
	reader.readAsDataURL(file);
}

function loading() {
	if (flag == 1) {
		var txt = "上传中……";
		document.getElementById("bot1").innerHTML = txt;
		document.getElementById("bot2").innerHTML = "";
	}
}
