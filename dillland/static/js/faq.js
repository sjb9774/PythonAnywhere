window.onload = function() {
    document.getElementById("boundary_link").onclick = highlightFaq("boundary_faq");
    document.getElementById("cost_link").onclick = highlightFaq("cost_faq");
    document.getElementById("parcel_link").onclick = highlightFaq("parcel_faq");
};

function highlightFaq(element_id)
{
    faqIds = ["boundary_faq", "cost_faq", "parcel_faq"];
    return function() {
        for( var i = 0; i < faqIds.length; i++ )
        {
            document.getElementById(faqIds[i]).style.backgroundColor = "#FFFFFF";
            document.getElementById(faqIds[i]).style.color = "#000000";
        }
        document.getElementById(element_id).style.backgroundColor = "#a7b9a8";
        document.getElementById(element_id).style.color = "#F0F0F0";
    }
}
