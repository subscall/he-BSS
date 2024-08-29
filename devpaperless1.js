
            var pictData ="%pictData%";
            var busiType = null;
            var certPict = null;
            var accNbr = null;
            var rz = null;
           

 SetScanImg(pictData);
 changeStatus();
for (var i = 1; i < 8; i++) {
                if (curDivId == "otherImg" + i) {
                    var otherBusiType = null;
                    if (i == 1) {
                        otherBusiType = "D";
                    } else if (i == 2) {
                        otherBusiType = "E";
                    } else if (i == 3) {
                        otherBusiType = "F";
                    } else if (i == 4) {
                        otherBusiType = "G";
                    } else if (i == 5) {
                        otherBusiType = "H";
                    } else if (i == 6) {
                        otherBusiType = "I";
                    } else if (i == 7) {
                        otherBusiType = "J";
                    }

                    var otherPic = $('#otherImg' + i)[0].src;
                    otherPic = otherPic.replace("data:image/jpeg;base64,", "");
                    if (otherPic != null && otherBusiType != null) {
                        var postJson = {};
                        postJson.areaId = areaId;
                        postJson.channelId = channelId;
                        postJson.olId = olId;
                        postJson.staffId = staffId;
                        postJson.personPic = otherPic;
                        postJson.busiType = otherBusiType;
                        var postData = cpp_object.GenerateUploadData(JSON.stringify(postJson));
                        //var postUrl = "http://" + serverIP + ":" + serverPort + "/smart_desk/clienthn/uploadCertificatePic";
                        var postUrl = window.location.protocol + "//" + window.location.host + "/smart_desk/clienthn/uploadPic";
                       // alert("开始上传其他照片。" );
                        $.ajax({
                            type: "POST",
                            url: postUrl,
                            async: false,
                            data: postData.toString(),
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("Token", tokenStr);
                            },
                            success: function (result) {
                                if (result.respCode == "0") {
                                    //cpp_object.StopScanDevice("123");
                                    try {
                                       //cloudWalkObj.cwStopCamera();
                                      // alert("上传其他照片成功，关闭云从活体" );
                                        $('#takeCanm').hide();
                                    } catch (e) {
                                        alert("otherImg关闭云从活体摄像头异常: " + e.message);
                                    }
                                    bScanOpen = false;
                                } else {
                                    alert("上传otherImg照片错误:" + result.respMsg);
                                    return;
                                }
                            },
                            error: function (result) {
                                alert("ajax调用失败:" + result.respMsg);
                                return;
                            }
                        });
                    }

                }

            }

 if (curDivId == "userFrontCardImg") {
                certPict = $('#userFrontCardImg')[0].src;
                busiType = "B";
                accNbr = userAccNum;

                for (var i = 1; i < 6; i++) {
                    var idCard = $('#syrCertCardNum' + i).text();
                    if (idCard != null && idCard != "") {
                        if (idCard == $('#userCertCardNum').text()) {
                            curDivId = "syrFrontCardImg" + i;
                            SetScanImg(pictData);
                            changeStatus();
                        }
                    }
                }

                curDivId = "userFrontCardImg";

            } else if (curDivId == "userBackCardImg") {
                certPict = $('#userBackCardImg')[0].src;
                busiType = "C";
                accNbr = userAccNum;
                for (var i = 1; i < 6; i++) {
                    var idCard = $('#syrCertCardNum' + i).text();
                    if (idCard != null && idCard != "") {
                        if (idCard == $('#userCertCardNum').text()) {
                            curDivId = "syrBackCardImg" + i;
                            SetScanImg(pictData);
                            changeStatus();
                        }
                    }
                }

                curDivId = "userBackCardImg";

            } else if (curDivId == "syrFrontCardImg1") {
                certPict = $('#syrFrontCardImg1')[0].src;
                busiType = "B";
                accNbr = syrAccNum1;

            } else if (curDivId == "syrBackCardImg1") {
                certPict = $('#syrBackCardImg1')[0].src;
                busiType = "C";
                accNbr = syrAccNum1;

            } else if (curDivId == "syrFrontCardImg2") {
                certPict = $('#syrFrontCardImg2')[0].src;
                busiType = "B";
                accNbr = syrAccNum2;

            } else if (curDivId == "syrBackCardImg2") {
                certPict = $('#syrBackCardImg2')[0].src;
                busiType = "C";
                accNbr = syrAccNum2;

            } else if (curDivId == "syrFrontCardImg3") {
                certPict = $('#syrFrontCardImg3')[0].src;
                busiType = "B";
                accNbr = syrAccNum3;

            } else if (curDivId == "syrBackCardImg3") {
                certPict = $('#syrBackCardImg3')[0].src;
                busiType = "C";
                accNbr = syrAccNum3;

            } else if (curDivId == "syrFrontCardImg4") {
                certPict = $('#syrFrontCardImg4')[0].src;
                busiType = "B";
                accNbr = syrAccNum4;

            } else if (curDivId == "syrBackCardImg4") {
                certPict = $('#syrBackCardImg4')[0].src;
                busiType = "C";
                accNbr = syrAccNum4;

            } else if (curDivId == "syrFrontCardImg5") {
                certPict = $('#syrFrontCardImg5')[0].src;
                busiType = "B";
                accNbr = syrAccNum5;

            } else if (curDivId == "syrBackCardImg5") {
                certPict = $('#syrBackCardImg5')[0].src;
                busiType = "C";
                accNbr = syrAccNum5;
            }

            if (certPict != null) {
                if ((certPict.indexOf("idcart") < 0)) {
                    certPict = certPict.replace("data:image/jpeg;base64,", "");

                    var postJson = {};

                    postJson.areaId = areaId;
                    postJson.channelId = channelId;
                    postJson.olId = olId;
                    postJson.staffId = staffId;
                    postJson.personPic = certPict;
                    postJson.busiType = busiType;
                    postJson.accNbr = accNbr;

                    var postData = cpp_object.GenerateUploadData(JSON.stringify(postJson));
                    //var postUrl = "http://" + serverIP + ":" + serverPort + "/smart_desk/clienthn/uploadCertificatePic";
                    var postUrl = window.location.protocol + "//" + window.location.host + "/smart_desk/clienthn/uploadPic";

                    $.ajax({
                        type: "POST",
                        url: postUrl,
                        async: false,
                        data: postData.toString(),
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader("Token", tokenStr);
                        },
                        success: function (result) {

                            if (result.respCode == "0") {
                                try {
                                   
                                    //alert("上传证件成功，关闭云从活体" );
                                    $('#takeCanm').hide();
                                } catch (e) {
                                    alert("CardImg关闭云从活体摄像头异常: " );
                                }
                                //cpp_object.StopScanDevice("123");
                                changeStatus();
                                bScanOpen = false;
                            } else {
                                alert("上传CardImg证件照错误:" + result.respMsg);
                                if (!isQM) {
                                    initCode();
                                }
                                return;
                            }
                        },
                        error: function (result) {
                            alert("ajaxCardImg调用失败:" + result.respMsg);
                            if (!isQM) {
                                initCode();
                            }
                            return;
                        }
                    });
                }
            } else {
                try {
                    
                    alert("CardImg关闭云从活体，上传证件成功" );
                } catch (e) {
                    alert("CardImg关闭云从活体摄像头异常: " + e.message);
                }
                bScanOpen = false;
            }
