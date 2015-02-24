$("#counseling-transfer-body").html("");
var htmlConts = "";
for (var key in data.results) {
    if(key == 'isLast'){
        tab.body.find("#transferLastPage").val(data.results[key]);
    }else if( key == "pageNo"){
        tab.body.find("#transferCurrentPage").val(data.results[key]);
        tab.body.find("#pageNo").val(data.results[key]);
    }else if( key == "totalCount") {
        tab.body.find("#transferTotalPageNo").val(data.results[key]);
    }else if( key == "searchTotalCnt") {
        tab.body.find("#transferSearchTotalCnt").html("");
        var htmlTotalConts = "총 " + data.results[key] + "건";
        tab.body.find("#transferSearchTotalCnt").html(htmlTotalConts);
        tab.body.find("#transferSearchTotalCount").val(data.results[key]);
    }else if( key == "searchWaitCnt") {
        var htmlWaitConts = "처리대기<strong class=\"txt-red\"> " + data.results[key] + "</strong> 건";
        tab.body.find("#transferWaitCnt").html(htmlWaitConts);
    }else if( key == "searchCompleteCnt") {
        var htmlCompleteConts = "처리완료<strong class=\"txt-red\">" + data.results[key] + "</strong> 건";
        tab.body.find("#transferCompleteCnt").html(htmlCompleteConts);
    }else if(key == 'resultList') {
        var cur_resultList = data.results[key];
        if(cur_resultList != null) {
            for(var i = 0; i < cur_resultList.length; i++) {
                htmlConts += "<tr class=\"area-line-top\">";
                htmlConts += "<td><a href=\"#none\" data-value=\""+cur_resultList[i].counselingManagementSeq+"\" data-cd=\""+cur_resultList[i].counselingFormCode+"\" data-code=\""+cur_resultList[i].counselingProcessingStatusCode+"\" data-seq=\""+cur_resultList[i].counselingManagementDetailSeq+"\" class=\"a-underLine counselingGoDetailPage\"><strong class=\"txt-blue\">"+cur_resultList[i].counselingManagementSeq+"</strong></a></td>";
                htmlConts += "<td>"+cur_resultList[i].receiptDate+"</td>";
                if(cur_resultList[i].receiptTeamName != null)
                    htmlConts += "<td>"+cur_resultList[i].receiptCenterName+">"+cur_resultList[i].receiptTeamName+">"+cur_resultList[i].receiptCounselorName+"</td>";
                else
                    htmlConts += "<td>"+cur_resultList[i].receiptCenterName+"> >"+cur_resultList[i].receiptCounselorName+"</td>";
                htmlConts += "<td>";
                if(cur_resultList[i].newcounselingYn == true)
                    htmlConts += "<a href=\"#none\" data-value=\""+cur_resultList[i].counselingManagementSeq+"\" data-cd=\""+cur_resultList[i].counselingFormCode+"\" data-code=\""+cur_resultList[i].counselingProcessingStatusCode+"\" data-seq=\""+cur_resultList[i].counselingManagementDetailSeq+"\" class=\"a-underLine counselingGoDetailPage\"><strong class=\"txt-blue\">신규상담</strong></a></td>";
                else
                    htmlConts += "<a href=\"#none\" data-value=\""+cur_resultList[i].counselingManagementSeq+"\" data-cd=\""+cur_resultList[i].counselingFormCode+"\" data-code=\""+cur_resultList[i].counselingProcessingStatusCode+"\" data-seq=\""+cur_resultList[i].counselingManagementDetailSeq+"\" class=\"a-underLine counselingGoDetailPage\"><strong class=\"txt-blue\">추가상담</strong></a></td>";
                htmlConts += "<td>";
                htmlConts += "<div class=\"iconArea\"><span class=\"small small-blue\"><span class=\"lt\"></span><span>";
                if(cur_resultList[i].counselingProcessingStatusCode == "WAIT")
                    htmlConts += "처리대기</span></span></div>";
                else if(cur_resultList[i].counselingProcessingStatusCode == "COMPLETE")
                    htmlConts += "처리완료</span></span></div>";
                else if(cur_resultList[i].counselingProcessingStatusCode == "TEMPORARY")
                    htmlConts += "임시저장</span></span></div>";
                if(cur_resultList[i].distributionStatusCode != null) {
                    if(cur_resultList[i].distributionStatusCode == "DISTRIBUTION")
                        htmlConts += "<div class=\"sprites\"></div><br />(분배)";
                }else
                    htmlConts += "<div class=\"sprites\"></div><br />";
                htmlConts += "</td>";
                if(cur_resultList[i].completeDate != null)
                    htmlConts += "<td><strong class=\"txt-blue\">"+cur_resultList[i].completeDate+"</strong></td>";
                else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].manageCateName != null)
                    htmlConts += "<td>"+cur_resultList[i].manageCateName+"</td>";
                else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].displayCategoryInfo != null)
                    htmlConts += "<td>"+cur_resultList[i].displayCategoryInfo+"</td>";
                else
                    htmlConts += "<td></td>";

                if(cur_resultList[i].deliveryDealYn != null){
                    if(cur_resultList[i].deliveryDealYn)
                        htmlConts += "<td>Yes</td>";
                    else
                        htmlConts += "<td>No</td>";
                }else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].workFormCode != null){
                    if(cur_resultList[i].workFormCode == "COMPANY")
                        htmlConts += "<td>업체상담</td>";
                    else if(cur_resultList[i].workFormCode == "NORMAL")
                        htmlConts += "<td>일반상담</td>";
                    else if(cur_resultList[i].workFormCode == "FOOD")
                        htmlConts += "<td>먹거리상담</td>";
                    else if(cur_resultList[i].workFormCode == "SPECIAL")
                        htmlConts += "<td>후단관리</td>";
                }else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].claimYn != null){
                    if(cur_resultList[i].claimYn)
                        htmlConts += "<td>Y</td>";
                    else
                        htmlConts += "<td>N</td>";
                }else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].memberName != null)
                    htmlConts += "<td rowspan=\"2\">"+cur_resultList[i].memberName+"</td>";
                else
                    htmlConts += "<td rowspan=\"2\"></td>";
                /*if(cur_resultList[i].memberPhoneNumber != null)
                 htmlConts += "<td rowspan=\"2\">"+cur_resultList[i].memberPhoneNumber+"</td>";
                 else
                 htmlConts += "<td rowspan=\"2\"></td>";*/
                htmlConts += "</tr>";

                htmlConts += "<tr>";
                htmlConts += "<td><a href=\"#none\" data-value=\""+cur_resultList[i].counselingManagementDetailSeq+"\" class=\"a-underLine counselingTransferGoDetailPage\"><strong class=\"txt-blue\"><br />";
                if(cur_resultList[i].counselingTransferFormCode == "BBS")
                    htmlConts += "게시판이관<br />(" + cur_resultList[i].transferName + ")</strong></a></td>";
                else if(cur_resultList[i].counselingTransferFormCode == "WORK")
                    htmlConts += "업무이관<br />(" + cur_resultList[i].transferName + ")</strong></a></td>";
                else if(cur_resultList[i].counselingTransferFormCode == "PARTNER")
                    htmlConts += "업체이관<br />("+cur_resultList[i].partnerName+")</strong></a></td>";
                else if(cur_resultList[i].counselingTransferFormCode == "COUNSELOR")
                    htmlConts += "상담사이관<br />(" + cur_resultList[i].transferCounselorName + ")</strong></a></td>";
                htmlConts += "<td>"+cur_resultList[i].transferDate+"</td>";
                if(cur_resultList[i].transferCounselorName != null){
                    htmlConts += "<td>"+cur_resultList[i].transferCenterName+">";
                    if(cur_resultList[i].transferTeamName != null)
                        htmlConts += cur_resultList[i].transferTeamName+">";
                    else
                        htmlConts += " >";
                    htmlConts += cur_resultList[i].transferCounselorName+"</td>";
                }else
                    htmlConts += "<td></td>";
                htmlConts += "<td>";
                if(cur_resultList[i].answerYn != null)
                    htmlConts += "<strong class=\"txt-blue\">"+cur_resultList[i].answerYn+"</strong></td>";
                else
                    htmlConts += "</td>";
                htmlConts += "<td>";
                htmlConts += "<div class=\"iconArea\"><span class=\"small small-blue\"><span class=\"lt\"></span><span>";
                if(cur_resultList[i].transferStatusCode == "WAIT")
                    htmlConts += "이관대기</span></span></div>";
                else
                    htmlConts += "이관처리완료</span></span></div>";
                htmlConts += "</td>";

                htmlConts += "<td>";
                if(cur_resultList[i].transferAnswerDate != null)
                    htmlConts += "<strong class=\"txt-blue\">"+cur_resultList[i].transferAnswerDate+"</strong>";
                else
                    htmlConts += "<strong class=\"txt-blue\"></strong>";
                if(cur_resultList[i].leadTime != null)
                    htmlConts += "<br /><strong class=\"txt-red\">("+cur_resultList[i].leadTime+")</strong></td>";
                else
                    htmlConts += "<br /></td>";
                if(cur_resultList[i].orderNumber != null)
                    htmlConts += "<td>"+cur_resultList[i].orderNumber+"</td>";
                else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].dealName != null)
                    htmlConts += "<td>"+cur_resultList[i].dealName+"</td>";
                else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].wmsYn != null){
                    if(cur_resultList[i].wmsYn)
                        htmlConts += "<td>Yes</td>";
                    else
                        htmlConts += "<td>No</td>";
                }else
                    htmlConts += "<td></td>";
                if(cur_resultList[i].qnaAnswerPath != null)
                    htmlConts += "<td>"+cur_resultList[i].qnaAnswerPath+"</td>";
                else
                    htmlConts += "<td></td>";

                if(cur_resultList[i].promiseCallYn != null)
                    htmlConts += "<td>"+cur_resultList[i].promiseCallYn+"</td>";
                else
                    htmlConts += "<td></td>";
                htmlConts += "</tr>";

            }
        }
    }
}
$("#counseling-transfer-body").html(htmlConts);